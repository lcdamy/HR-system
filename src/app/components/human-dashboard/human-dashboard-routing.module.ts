import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanDashboardComponent } from './human-dashboard.component';

const routes: Routes = [{
    path: '',
    component: HumanDashboardComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }