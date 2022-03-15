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

  onSubmit() {
    this.userService.login(this.loginModel)
      .subscribe(
        result => {
          localStorage.setItem('jwt', result.jwt);
          this.router.navigate(['/dashboard']);
        }, error => {
          this.custom_error_message = error.error.message;
          this.error_login = true;
        })
  }



}
