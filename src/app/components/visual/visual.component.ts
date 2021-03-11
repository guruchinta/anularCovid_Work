import { Component, OnInit } from '@angular/core';
import { StateCovidInfo, DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {

  public states: string[] = [];
  public selectedState = 'all';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.setFilterOptions();
  }

  private setFilterOptions(): void {
    this.dataService.getSummary().subscribe((stateCovidInfos: StateCovidInfo[]) => {
      this.states = stateCovidInfos.map(info => info.stateName);
    });
  }

}
