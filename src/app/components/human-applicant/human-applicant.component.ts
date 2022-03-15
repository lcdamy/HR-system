import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantService } from '../../services/applicant.service';

@Component({
  selector: 'app-human-applicant',
  templateUrl: './human-applicant.component.html',
  styleUrls: ['./human-applicant.component.scss']
})
export class HumanApplicantComponent implements OnInit {

  constructor(private route: ActivatedRoute, private applicantService: ApplicantService, private router: Router) { }

  application: any = {};
  applicationId: any = "";
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id: any = params.get('id');
      this.applicationId = id;
      this.getApplication(id);
    })
  }

  getApplication(id: any) {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.applicantService.getOneApplication(token, id).subscribe(
        result => {
          this.application = result;
        }, error => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  reject() {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.applicantService.updateApplicationStatus(token, this.applicationId, 'rejected').subscribe(
        result => {
          this.application = result;
          console.log(this.application);
        }, error => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  aprove() {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.applicantService.updateApplicationStatus(token, this.applicationId, 'aproved').subscribe(
        result => {
          this.application = result;
          console.log(this.application);
        }, error => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

}
