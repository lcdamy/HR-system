import { Component, OnInit } from '@angular/core';
import { Applicant } from './applicant';
import { ApplicantService } from '../../services/applicant.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.scss'],
})
export class ApplicantComponent implements OnInit {

  constructor(private applicantService: ApplicantService) {

  }
  ngOnInit(): void {

  }

  public applicantModel = new Applicant("", "", "", "", "", "", "", "", null);
  public custom_error_message = "";
  public error_application = false;
  public custom_success_message = "";
  public success_application = false;

  onSubmit() {
    let formData: any = new FormData();
    formData.append("firstname", this.applicantModel.firstname);
    formData.append("lastname", this.applicantModel.lastname);
    formData.append("email", this.applicantModel.email);
    formData.append("dob", this.applicantModel.dob);
    formData.append("gender", this.applicantModel.gender);
    formData.append("bio", this.applicantModel.bio);
    formData.append("status", "pending");
    formData.append("cv", this.applicantModel.cv);
    formData.append("file", this.applicantModel.file);
    this.applicantService.sendApplication(formData).subscribe(
      result => {
        console.log(result);
        this.custom_success_message = "Application sent!";
        this.success_application = true;
        this.clearForm();
        setTimeout(() => {
          this.success_application = false;
        }, 3000);
      }, error => {
        this.custom_error_message = error.error.message;
        this.error_application = true;
      })
  }

  clearForm() {
    this.applicantModel.firstname = "";
    this.applicantModel.lastname = "";
    this.applicantModel.email = "";
    this.applicantModel.dob = "";
    this.applicantModel.gender = "";
    this.applicantModel.cv = "";
    this.applicantModel.bio = "";
    this.applicantModel.file = null;
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.applicantModel.cv = file.name;
      this.applicantModel.file = file;
    }
  }



}
