import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  displayDiv = 1;
  vaccinePhase: any;
  constructor(
    private vaccineData: DataService
  ) {

  }

  ngOnInit(): void {
    this.vaccineData.getVaccinePhases().subscribe(
      (vaccinePhase) => {
        this.vaccinePhase = vaccinePhase;
      }
    );
  }

  Updatevalue(num ): void{
    this.displayDiv = num;
  }

  DeleteSubmit(item): void{
    console.log(item);
  }

  PasswordSubmit(item): void{
    console.log(item);
  }
}
