import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanLoginComponent } from './human-login.component';
import { LoginRouteModules } from './human-login-route.module';


@NgModule({
  declarations: [HumanLoginComponent],
  imports: [
    CommonModule, LoginRouteModules
  ]
})
export class HumanLoginModule { }
