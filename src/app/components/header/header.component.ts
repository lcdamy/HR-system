import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  logoutbtn: boolean = false;
  ngOnInit(): void {
    this.userService.userInfo.subscribe(value => {
      if (value) {
        this.logoutbtn = true;
      }
    })
  }

  logout() {
    localStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }

}
