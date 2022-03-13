import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { HumanLoginComponent } from './components/human-login/human-login.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { HumanDashboardComponent } from './components/human-dashboard/human-dashboard.component';
import { HumanApplicantComponent } from './components/human-applicant/human-applicant.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    HumanLoginComponent,
    ApplicantComponent,
    HumanDashboardComponent,
    HumanApplicantComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule, NoopAnimationsModule, RouterModule.forRoot([
      { path: '', component: LandingComponent },
      { path: 'login', component: HumanLoginComponent },
      { path: 'apply', component: ApplicantComponent },
      { path: 'dashboard', component: HumanDashboardComponent },
      { path: 'application/:id', component: HumanApplicantComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
