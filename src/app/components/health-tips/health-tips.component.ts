import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-tips',
  templateUrl: './health-tips.component.html',
  styleUrls: ['./health-tips.component.scss']
})
export class HealthTipsComponent implements OnInit {

  symtpoms: any;
  constructor() {
    this.symtpoms = [ 'Fever or chills', 'Cough', 'Shortness of breath or difficulty breathing', 'Fatigue', 'Muscle or body aches', 'Headache', 'New loss of taste or smell', 'Sore throat', 'Congestion or runny nose', 'Nausea or vomiting', 'Diarrhea'];
  }

  ngOnInit(): void {
  }


}
