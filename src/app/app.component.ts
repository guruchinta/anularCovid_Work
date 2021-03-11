import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  private loadUserProfile(): void {
    this.userService.loadUserProfile().subscribe(() => {
      this.authService.setLoginStatus(true);
    });
  }
}
