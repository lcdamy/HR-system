import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)
        : boolean
        | UrlTree
        | Observable<boolean
            | UrlTree>
        | Promise<boolean
            | UrlTree> {
        let userData = this.userService.userInfo.getValue();
        if (userData) { // sub represents user id value
            if (state.url.indexOf("/login") != -1) {
                // loggin user trying to access login page
                this.router.navigate(["/dashboard"]);
                return false;
            }
            else {
                return true;
            }
        } else {
            if (state.url.indexOf("/login") == -1) {
                // not logged in users only navigate to login page
                this.router.navigate(["/login"]);
                return false;
            }
            else {
                return true;
            }
        }
    }
}