import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilityService } from './utility.service';
import { Response } from './auth.service';

export interface Query {
  id?: number;
  createdBy?: string;
  createdOn: Date;
  userName: string;
  type: string;
  question: string;
  answer?: string;
  answeredBy?: string;
  answeredOn?: Date;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  constructor(
    private httpClient: HttpClient,
    private utilityService: UtilityService
  ) { }

  getQueries(): Observable<Query[]> {
    const url = this.utilityService.getUrl(`/queries/`);
    return this.httpClient.get<Query[]>(url);
  }


  getQuery(queryId: number): Observable<Query> {
    const url = this.utilityService.getUrl(`/queries/${queryId}`);
    return this.httpClient.get<Query>(url);
  }

  setQuery(query: Query): Observable<Response> {
    const url = this.utilityService.getUrl('/queries/');
    return this.httpClient.post<Response>(url, JSON.stringify(query), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public deleteQuery(queryId: number): Observable<Response> {
    const url = this.utilityService.getUrl(`/queries/${queryId}`);
    return this.httpClient.delete<Response>(url);
  }

}
