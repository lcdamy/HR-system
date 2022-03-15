import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private userService: UserService) { }
  loggedin: boolean = false;
  ngOnInit(): void {
    this.userService.userInfo.subscribe(value => {
      if (value) {
        this.loggedin = true;
      }
    })
  }



}
