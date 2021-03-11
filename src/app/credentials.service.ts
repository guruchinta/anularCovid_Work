import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  valid: number;
  constructor() {
    this.valid = 0;
   }
}
