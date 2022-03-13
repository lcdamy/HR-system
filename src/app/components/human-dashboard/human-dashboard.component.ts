import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
@Component({
  selector: 'app-human-dashboard',
  templateUrl: './human-dashboard.component.html',
  styleUrls: ['./human-dashboard.component.scss']
})
export class HumanDashboardComponent implements OnInit {

  constructor(private applicantService: ApplicantService) { }

  applications: any = [];

  ngOnInit(): void {
    this.applications = this.applicantService.getApplication();
  }

}
