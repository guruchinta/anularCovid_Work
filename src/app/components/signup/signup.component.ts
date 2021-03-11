import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User, UserService } from '../../services/user.service';
import { HcBaseComponent } from '../hc-base/hc-base.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends HcBaseComponent implements OnInit {

  userId: string;
  user: User;

  stateName: any;
  statelis: string[];

  @ViewChild('form') form: NgForm;


  constructor(
    authService: AuthService,
    userService: UserService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    super(authService, userService);
    this.stateName = {
      states: ['Alabama-AL', 'Alaska-AK', 'Arizona-AZ', 'Arkansas-AR', 'California-CA', 'Colorado-CO', 'Connecticut-CT', 'Delaware-DE', 'Florida-FL', 'Georgia-GA', 'Hawaii-HI', 'Idaho-ID', 'Illinois-IL', 'Indiana-IN', 'Iowa-IA', 'Kansas-KS', 'Kentucky-KY', 'Louisiana-LA', 'Maine-ME', 'Maryland-MD', 'Massachusetts-MA', 'Michigan-MI', 'Minnesota-MN', 'Mississippi-MS', 'Missouri-MO', 'Montana-MT', 'Nebraska-NE', 'Nevada-NV', 'New Hampshire-NH', 'New Jersey-NJ', 'New Mexico-NM', 'New York-NY', 'North Carolina-NC', 'North Dakota-ND', 'Ohio-OH', 'Oklahoma-OK', 'Oregon-OR', 'Pennsylvania-PA', 'Rhode Island-RI', 'South Carolina-SC', 'South Dakota-SD', 'Tennessee-TN', 'Texas-TX', 'Utah-UT', 'Vermont-VT', 'Virginia-VA', 'Washington-WA', 'West Virginia-WV', 'Wisconsin-WI', 'Wyoming-WY'],
      stateId : 1
    };

    this.statelis = ['Alabama-AL', 'Alaska-AK', 'Arizona-AZ', 'Arkansas-AR', 'California-CA', 'Colorado-CO', 'Connecticut-CT', 'Delaware-DE', 'Florida-FL', 'Georgia-GA', 'Hawaii-HI', 'Idaho-ID', 'Illinois-IL', 'Indiana-IN', 'Iowa-IA', 'Kansas-KS', 'Kentucky-KY', 'Louisiana-LA', 'Maine-ME', 'Maryland-MD', 'Massachusetts-MA', 'Michigan-MI', 'Minnesota-MN', 'Mississippi-MS', 'Missouri-MO', 'Montana-MT', 'Nebraska-NE', 'Nevada-NV', 'New Hampshire-NH', 'New Jersey-NJ', 'New Mexico-NM', 'New York-NY', 'North Carolina-NC', 'North Dakota-ND', 'Ohio-OH', 'Oklahoma-OK', 'Oregon-OR', 'Pennsylvania-PA', 'Rhode Island-RI', 'South Carolina-SC', 'South Dakota-SD', 'Tennessee-TN', 'Texas-TX', 'Utah-UT', 'Vermont-VT', 'Virginia-VA', 'Washington-WA', 'West Virginia-WV', 'Wisconsin-WI', 'Wyoming-WY'];
  }

  ngOnInit(): void {
    super.ngOnInit();

    // Setting user id..
    this.activeRoute.params.subscribe((params) => {
      if (params.id) {
        this.userId = params.id;
        this.setUserDetails();
      }
    });
  }

  private setUserDetails(): void {
    if (!this.userId) { return; }
    this.userService.getUser(this.userId).subscribe((user) => {
      this.user = user;
      this.updateForm();
    }, (err) => {
      console.log('Error:', err);
    });
  }

  private updateForm(): void {
    const userDetails = {...this.user};
    // delete(userDetails.password);
    delete(userDetails.status);
    this.form.setValue(userDetails);
  }

  onSignUpSubmit(details: User): void {
    console.log('User Details:', details);
    this.userService.addUser(details).subscribe((res) => {
      console.log('INFO: ', res);
      if (res.success) {
        this.form.reset();
        if (this.isAdmin) {
          this.router.navigateByUrl('/admin/users');
        } else {
          alert('User added successfully!')
        }
      }
    }, (err) => {
      console.log('ERROR: ', err);
    });
  }
}
