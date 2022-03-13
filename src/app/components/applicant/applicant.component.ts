import { Component, OnInit } from '@angular/core';
import { Applicant } from './applicant';
import { ApplicantService } from '../../services/applicant.service';

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

  public applicantModel = new Applicant("", "", "", "", "", "", "");

  onSubmit() {

    this.applicantService.sendApplication(this.applicantModel).subscribe(
      data => console.log("success", data)
    )
  }

}
