import { Component, OnInit } from '@angular/core';
import { Human } from './human';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-human-login',
  templateUrl: './human-login.component.html',
  styleUrls: ['./human-login.component.scss']
})
export class HumanLoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public loginModel = new Human("", "");
  public custom_error_message = "";
  public error_login = false;

  ngOnInit(): void {

  }

  userLogin() {
    this.userService.userLogin(this.loginModel)
      .subscribe(
        (value) => {
          if (value) {
            this.router.navigate(["/dashboard"]);
          } else {
            this.custom_error_message = "Opps! we can't login you";
            this.error_login = true;
            setTimeout(() => {
              this.error_login = false;
            }, 3000);
          }
        },
        (error) => {
          this.custom_error_message = error.error.message;
          this.error_login = true;
          setTimeout(() => {
            this.error_login = false;
          }, 3000);
        }
      );
  }



}
