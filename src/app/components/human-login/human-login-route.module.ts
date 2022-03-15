import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HumanLoginComponent } from './human-login.component';

const routes: Routes = [{
    path: '',
    component: HumanLoginComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRouteModules { }