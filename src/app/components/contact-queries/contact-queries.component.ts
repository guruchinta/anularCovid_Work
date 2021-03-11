import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { QueriesService, Query } from '../../services/queries.service';
import { UserService } from '../../services/user.service';
import { HcBaseComponent } from '../hc-base/hc-base.component';

@Component({
  selector: 'app-contact-queries',
  templateUrl: './contact-queries.component.html',
  styleUrls: ['./contact-queries.component.scss']
})
export class ContactQueriesComponent extends HcBaseComponent implements OnInit {

  queries: Query[];

  constructor(
    public authService: AuthService,
    public userService: UserService,
    private queriesService: QueriesService
  ) {
    super(authService, userService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.setQueries();
    this.userService.getUserProfile().subscribe(() => {
      this.setQueries();
    });
  }

  public setQueries(): void {
    this.queriesService.getQueries().subscribe((queries) => {
      if (this.isAdmin) {
        this.queries = queries
      } else  {
        this.queries = queries.filter((query) => {
          if (!this.userProfile) return false;
          return this.userProfile.username === query.createdBy;
        });
      }
    });
  }

}
