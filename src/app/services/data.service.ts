import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeriesBarOptions, SeriesPieOptions } from 'highcharts';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UtilityService } from './utility.service';

export interface CovidSummary {
  recovered: number;
  active: number;
  deaths: number;
  total: number;
}

export interface OverallSummary extends CovidSummary {
  nonCovid: number;
}

export interface TestsDeathSummary {
  testRate: number;
  deathRate: number;
  casesRate: number;
}

export interface ChartData {
  series: SeriesPieOptions[] | SeriesBarOptions[];
}

export interface StateCovidInfo {
  stateName: string;
  totalCases: number;
  totalDeaths: number;
  totalRecovered: number;
  activeCases: number;
  population: number;
  totalTestPerMillion: number;
  deathPerMillion: number;
  totalCasesPerMillion: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient,
    private utilityService: UtilityService
  ) { }

  public getOverallSummary(options: {
    state?: string;
  }): Observable<OverallSummary> {
    return this.getSummary().pipe(
      map((res) => {
        const list = res.filter((stateInfo) => {
          if (options.state && options.state !== 'all') {
            return stateInfo.stateName === options.state;
          }
          return true;
        });

        const total = list.reduce((acc, stateInfo) => {
          return acc + stateInfo.population;
        }, 0);

        const active = list.reduce((acc, stateInfo) => {
          return acc + stateInfo.activeCases;
        }, 0);

        const deaths = list.reduce((acc, stateInfo) => {
          return acc + stateInfo.totalDeaths;
        }, 0);

        const recovered = list.reduce((acc, stateInfo) => {
          return acc + stateInfo.totalRecovered;
        }, 0);

        const nonCovid = total - (active + deaths + recovered); // not impacted by covid

        return {
          total, active, deaths, recovered, nonCovid
        };
      })
    );
  }

  public getCovidSummary(options: {
    state?: string;
  }): Observable<CovidSummary> {
    return this.getSummary().pipe(
      map((res) => {
        const list = res.filter((stateInfo) => {
          if (options.state && options.state !== 'all') {
            return stateInfo.stateName === options.state;
          }
          return true;
        });

        const total = list.reduce((acc, stateInfo) => {
          return acc + stateInfo.population;
        }, 0);

        const active = list.reduce((acc, stateInfo) => {
          return acc + stateInfo.activeCases;
        }, 0);

        const deaths = list.reduce((acc, stateInfo) => {
          return acc + stateInfo.totalDeaths;
        }, 0);

        const recovered = list.reduce((acc, stateInfo) => {
          return acc + stateInfo.totalRecovered;
        }, 0);

        return {
          total, active, deaths, recovered
        };
      })
    );
  }

  public getTestsDeathSummary(options: {
    state?: string;
  }): Observable<TestsDeathSummary> {
    return this.getSummary().pipe(
      map((res) => {
        const list = res.filter((stateInfo) => {
          if (options.state && options.state !== 'all') {
            return stateInfo.stateName === options.state;
          }
          return true;
        });

        const deathRate = list.reduce((acc, stateInfo) => {
          return acc + stateInfo.deathPerMillion;
        }, 0);

        const testRate = list.reduce((acc, stateInfo) => {
          return acc + stateInfo.totalTestPerMillion;
        }, 0);

        const casesRate = list.reduce((acc, stateInfo) => {
          return acc + stateInfo.totalTestPerMillion;
        }, 0);

        return { deathRate, testRate, casesRate };
      })
    );
  }

  public getSummary(): Observable<StateCovidInfo[]> {
    const url = this.utilityService.getUrl('/covid/summary');
    return this.httpClient.get<any[]>(url).pipe(
      map((res: Array<{
        stateName: string;
        totalCases: string;
        totalDeaths: string;
        totalRecovered: string;
        activeCases: string;
        population: string;
        deathPerMillion: string;
        totalTestPerMillion: string;
        totalCasesPerMillion: string;
      }>) => {
        return res.map((stateInfo) => {
          const newObj = {} as StateCovidInfo;
          newObj.stateName = stateInfo.stateName;
          newObj.totalCases = parseInt(stateInfo.totalCases.replace(/,/g, ''), 10);
          newObj.totalDeaths = parseInt(stateInfo.totalDeaths.replace(/,/g, ''), 10);
          newObj.totalRecovered = parseInt(stateInfo.totalRecovered.replace(/,/g, ''), 10);
          newObj.activeCases = parseInt(stateInfo.activeCases.replace(/,/g, ''), 10);
          newObj.population = parseInt(stateInfo.population.replace(/,/g, ''), 10);
          newObj.totalTestPerMillion = parseInt(stateInfo.totalTestPerMillion.replace(/,/g, ''), 10);
          newObj.deathPerMillion = parseInt(stateInfo.deathPerMillion.replace(/,/g, ''), 10);
          newObj.totalCasesPerMillion = parseInt(stateInfo.totalCasesPerMillion.replace(/,/g, ''), 10);
          return newObj;
        });
      })
    );
  }

  public getVaccineInfo(): Observable<any> {
    return this.httpClient.get<any>('assets/data/vaccine-info.json');
  }

  public getVaccinePhases(): Observable<any> {
    return this.httpClient.get<any>('assets/data/vaccine-phases.json');
  }
}
