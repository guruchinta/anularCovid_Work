import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-vaccinetrack',
  templateUrl: './vaccinetrack.component.html',
  styleUrls: ['./vaccinetrack.component.scss']
})
export class VaccinetrackComponent implements OnInit {
  vaccineInfo: any;
  vaccinePhase: any;

  constructor(
    private vaccineData: DataService
  ) {


   

  }

  ngOnInit(): void {
    this.vaccineData.getVaccineInfo().subscribe(
      (vaccineInfo) => {
        this.vaccineInfo = vaccineInfo;
      }
    );
    this.vaccineData.getVaccinePhases().subscribe(
      (vaccinePhases) => {
        this.vaccinePhase = vaccinePhases;
      }
    );
  }

}
