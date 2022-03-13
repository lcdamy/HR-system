import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-human-applicant',
  templateUrl: './human-applicant.component.html',
  styleUrls: ['./human-applicant.component.scss']
})
export class HumanApplicantComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
    })
  }

}
