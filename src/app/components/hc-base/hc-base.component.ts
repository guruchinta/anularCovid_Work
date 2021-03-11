import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserProfile, UserService } from '../../services/user.service';

@Component({
  selector: 'app-hc-base',
  template: ''
})
export abstract class HcBaseComponent implements OnInit {

  public isLoggedIn = false;
  public isAdmin = false;
  public userProfile: UserProfile;

  constructor(
    protected authService: AuthService,
    protected userService: UserService,
  ) { }

  ngOnInit(): void {
    this.setLoginStatus();
    this.setUserProfile();
  }

  protected init(): void {

  }

  private setLoginStatus(): void {
    this.authService.getLoginStatus().subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      this.init();
    });
  }

  private setUserProfile(): void {
    this.userService.getUserProfile().subscribe((userProfile: UserProfile) => {
      this.init();
      this.userProfile = userProfile;
      if (userProfile && userProfile.roles) {
        this.isAdmin = userProfile.roles.includes('admin');
      }
    }, (err) => {
      console.log(err);
    });
  }

}
