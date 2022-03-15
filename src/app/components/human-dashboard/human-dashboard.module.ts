import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './human-dashboard-routing.module';
import { HumanDashboardComponent } from './human-dashboard.component';

@NgModule({
    imports: [
        DashboardRoutingModule
    ],
    declarations: [
        HumanDashboardComponent
    ]
})
export class DashboardModule { }