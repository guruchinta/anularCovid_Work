import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserProfile, UserService } from 'src/app/services/user.service';
import { HcBaseComponent } from '../hc-base/hc-base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends HcBaseComponent implements OnInit {

  userProfile: UserProfile;
  contactLink = '/contact';

  constructor(
    public authService: AuthService,
    public userService: UserService,
    private router: Router
  ) {
    super(authService, userService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public onLogoutClick(): void {
    console.log('logging out..');
    this.logout();
  }

  private logout(): void {
    this.authService.setLoginStatus(false);
    this.userService.clearUserProfile();
    this.router.navigate(['login']);
    this.authService.logout().subscribe(() => {
      console.log('Logged out successfully!');
    });
  }

}
