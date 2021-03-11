import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';


import { VisualComponent } from './components/visual/visual.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { LogoutComponent } from './components/logout/logout.component';
import { VaccinetrackComponent } from './components/vaccinetrack/vaccinetrack.component';
import { HealthTipsComponent } from './components/health-tips/health-tips.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FaqComponent } from './components/faq/faq.component';

// import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './components/chart/chart.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { OverallSummaryComponent } from './components/overall-summary/overall-summary.component';
import { CovidSummaryComponent } from './components/covid-summary/covid-summary.component';
import { TestsDeathSummaryComponent } from './components/tests-death-summary/tests-death-summary.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseInterceptor } from './services/base-interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { UsersComponent } from './components/users/users.component';
import { ContactQueriesComponent } from './components/contact-queries/contact-queries.component';
import { VaccineTrackerComponent } from './components/vaccine-tracker/vaccine-tracker.component';
import { JoinPipe } from './pipes/join.pipe';
import { PasswordComponent } from './components/password/password.component';
import { UpdatepasswordComponent } from './components/updatepassword/updatepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    VisualComponent,
    ContactComponent,
    LoginpageComponent,
    LogoutComponent,
    VaccinetrackComponent,
    HealthTipsComponent,
    SignupComponent,
    ProfileComponent,
    FaqComponent,
    ChartComponent,
    AdminPageComponent,
    TestsDeathSummaryComponent,
    OverallSummaryComponent,
    CovidSummaryComponent,
    UsersComponent,
    ContactQueriesComponent,
    VaccineTrackerComponent,
    JoinPipe,
    PasswordComponent,
    UpdatepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
