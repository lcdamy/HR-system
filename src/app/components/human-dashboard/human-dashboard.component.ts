import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantService } from '../../services/applicant.service';
@Component({
  selector: 'app-human-dashboard',
  templateUrl: './human-dashboard.component.html',
  styleUrls: ['./human-dashboard.component.scss']
})
export class HumanDashboardComponent implements OnInit {

  constructor(private applicantService: ApplicantService, private router: Router) { }

  applications: any = [];

  ngOnInit(): void {
    this.getApplications();
  }

  getApplications() {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.applicantService.getAllApplication(token).subscribe(
        result => {
          this.applications = result;
          this.applications.forEach((item: any) => {
            var currentDate = new Date();
            var birthDate = new Date(item.dob);
            item.age = currentDate.getFullYear() - birthDate.getFullYear();
          }
          );
        }, error => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

}
