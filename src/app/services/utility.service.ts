import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public getUrl(uri: string, scope?: string): string {
    if (environment.local) {
      uri += '.json';
    }
    return environment.host + uri;
  }
}
