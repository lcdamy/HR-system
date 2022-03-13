import { Component, OnInit } from '@angular/core';
import { Human } from './human';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-human-login',
  templateUrl: './human-login.component.html',
  styleUrls: ['./human-login.component.scss']
})
export class HumanLoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  public loginModel = new Human("", "");

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.loginModel).subscribe(
      data => console.log("success", data)
    )
  }

}
