import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.setUsers();
  }

  public setUsers(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, (err) => {
      console.log('Unable to get all users!', err);
    });
  }

  public onDeleteClick(userId, index): void {
    this.userService.deleteUser(userId).subscribe((res) => {
      console.log(res);
      if (res.success) {
        this.users.splice(index, 1);
      }
    }, (err) => {
      console.log('Unable to delete the user ID -', userId, err);
    });
  }

}
