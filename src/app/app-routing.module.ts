import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ContactComponent } from './components/contact/contact.component';
import { LogoutComponent } from './components/logout/logout.component';
import { VaccinetrackComponent } from './components/vaccinetrack/vaccinetrack.component';
import { HealthTipsComponent } from './components/health-tips/health-tips.component';
import { VisualComponent } from './components/visual/visual.component';
import { SignupComponent } from './components/signup/signup.component';
import { FaqComponent } from './components/faq/faq.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { ContactQueriesComponent } from './components/contact-queries/contact-queries.component';
import { VaccineTrackerComponent } from './components/vaccine-tracker/vaccine-tracker.component';
import { UpdatepasswordComponent } from './components/updatepassword/updatepassword.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginpageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'vaccine',
    component: VaccinetrackComponent
  },
  {
    path: 'visual',
    component: VisualComponent
  },
  {
    path: 'healthtips',
    component: HealthTipsComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/:id',
        component: SignupComponent
      },
      {
        path: 'queries',
        component: ContactQueriesComponent
      },
      {
        path: 'queries/:id',
        component: ContactComponent
      },
      {
        path: 'vaccine-tracker',
        component: VaccineTrackerComponent
      },
      {
        path:'update-password',
        component: UpdatepasswordComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users'
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path:'update-password',
        component: UpdatepasswordComponent
      },
      {
        path: 'queries',
        component: ContactQueriesComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'update-password'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
