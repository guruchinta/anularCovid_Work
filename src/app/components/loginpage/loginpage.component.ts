import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService, Credentials, Response } from '../../services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  user: string;
  password: string;

  errorMessage: string;
  timeoutRef: any;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onClickMe(username, password): void {
    if (!username || !password) {
      console.log('Invalid Credentails');
      return;
    }

    this.login({ username, password });
  }

  public login(credentials: Credentials): void {
    this.authService.login(credentials).subscribe((res: Response) => {
      if (res.success) {
        console.log('Login Success!');
        this.loadUserProfile();
        this.router.navigate(['visual']);
      } else {
        console.log('Login Failed!');
        this.setErrorMessage('Invalid Credentials!');
      }
    });
  }

  public loadUserProfile(): void {
    this.userService.loadUserProfile().subscribe(() => {
      this.authService.setLoginStatus(true);
    });
  }

  public setErrorMessage(msg?: string): void {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
      this.timeoutRef = null;
    }
    this.errorMessage = msg;
    this.timeoutRef = setTimeout(() => {
      this.errorMessage = '';
    }, 5000);
  }
}
