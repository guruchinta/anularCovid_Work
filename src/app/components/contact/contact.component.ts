import { Component, OnInit, ViewChild } from '@angular/core';
import { QueriesService, Query } from '../../services/queries.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { HcBaseComponent } from '../hc-base/hc-base.component';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

export interface QueryQuestion {
  userName: string;
  question: string;
  type: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends HcBaseComponent implements OnInit {

  contactType: any;
  queryId: number;
  query: Query;

  userName: string;
  type: string;
  question: string;
  answer: string;

  @ViewChild('form') form: NgForm;

  constructor(
    public authService: AuthService,
    public userService: UserService,
    private queriesService: QueriesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    super(authService, userService);
    super.init = this.init;
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.query = {} as Query;

    // Setting user id..
    this.activeRoute.params.subscribe((params) => {
      if (params.id) {
        this.queryId = params.id;
        this.setQueryDetails();
      }
    });

    this.contactType = ['Health', 'Technical'];

    this.userService.getUserProfile().subscribe((user) => {
      if (user && !this.queryId) {
        this.userName = this.userProfile.lastName + ', ' + this.userProfile.firstName;
      }
    });

  }

  contactSubmit(value: QueryQuestion): void {
    const query = Object.assign(this.query, value);
    query.createdBy = query.createdBy ? query.createdBy : this.isLoggedIn ? this.userProfile.username : '';
    query.createdOn = query.createdOn ? query.createdOn : new Date();
    query.answer = query.answer ? query.answer : '';
    query.answeredBy = this.queryId ? this.userProfile.username : '';
    query.answeredOn = this.queryId ? new Date() : null;

    this.queriesService.setQuery(query).subscribe((res) => {
      if (res.success) {
        this.form.reset();
        alert('Your Query Sent Successfully!');
        if(this.queryId){
          this.router.navigateByUrl('/admin/queries');
        }
      }
    }, (err) => {
      console.log('Error: Unable to set query!', err);
    });
  }

  private setQueryDetails(): void {
    this.queriesService.getQuery(this.queryId).subscribe((query) => {
      this.query = query;
      this.userName = query.userName;
      this.type = query.type;
      this.question = query.question;
      this.answer = query.answer;
    }, (err) => {
      console.log('Error: Unable to update query!', err);
    });
  }

  public onCancel(): void {
    this.router.navigateByUrl('/admin/queries');
  }

}
