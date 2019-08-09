import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private sub: any;
  private sub1: any;
  velocity = [];
  title = 'SPRINT ANALYSIS';
  single:any = [];  single1:any = [];

  resp1:any;
  priorityData1: any;
  priorityDataDup: any = [];
  priorityDataValue: any = [];
  scopeChanges1: any;
  scopeChangesDup: any = [];
  scopeChangesValues: any = [];


  constructor(private httpClient: HttpClient, private heroService : HeroService) {
   
  }

  ngOnInit() {
    this.sub = this.httpClient.get('http://192.168.136.22:8000/analysis/success-rate').subscribe((resp) => {
      this.resp1 = resp;
      this.resp1.map((p) => {
        this.single1.push({ name: p.name, value: p.value });
      });
      this.single =this.single1;
    });


    this.sub1 = this.httpClient.get('http://192.168.136.22:8000/analysis/priority-mapping').subscribe((priorityData) => {
      this.priorityData1 = priorityData;
      this.priorityData1.map((priorityDataElemt) => {
        const obj = {
          'name' : '',
          'series' : [
          ]
        };
        obj.name = priorityDataElemt.sprintName;
        obj.series.push({name: "lowest", value: priorityDataElemt.lowest});
        obj.series.push({name: "high", value: priorityDataElemt.high});
        obj.series.push({name: "low", value: priorityDataElemt.low});
        obj.series.push({name: "highest", value: priorityDataElemt.highest});
        obj.series.push({name: "medium", value: priorityDataElemt.medium});
        this.priorityDataDup.push(obj);
      });
      this.priorityDataValue =this.priorityDataDup;
    });


    this.sub1 = this.httpClient.get('http://192.168.136.22:8000/analysis/scope-change').subscribe((scopeChanges) => {
      this.scopeChanges1 = scopeChanges;
      this.scopeChanges1.map((scopeChangesElemt) => {
        const obj = {
          'name' : '',
          'series' : [
          ]
        };
        obj.name = scopeChangesElemt.sprintName;
        obj.series.push({name: "addedScope", value: scopeChangesElemt.addedScope});
        obj.series.push({name: "commitedScope", value: scopeChangesElemt.commitedScope});
        obj.series.push({name: "removedScope", value: scopeChangesElemt.removedScope});
        this.scopeChangesDup.push(obj);
      });
      this.scopeChangesValues =this.scopeChangesDup;
    });

  }
 
  public multi = [
    {
      "name": "China",
      "series": [
        {
          "name": "2018",
          "value": 2243772
        },
        {
          "name": "2017",
          "value": 1227770
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2018",
          "value": 1126000
        },
        {
          "name": "2017",
          "value": 764666
        }
      ]
    },

    {
      "name": "Norway",
      "series": [
        {
          "name": "2018",
          "value": 296215
        },
        {
          "name": "2017",
          "value": 209122
        }
      ]
    },

    {
      "name": "Japan",
      "series": [
        {
          "name": "2018",
          "value": 257363
        },
        {
          "name": "2017",
          "value": 205350
        }
      ]
    },

    {
      "name": "Germany",
      "series": [
        {
          "name": "2018",
          "value": 196750
        },
        {
          "name": "2017",
          "value": 129246
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2018",
          "value": 204617
        },
        {
          "name": "2017",
          "value": 149797
        }
      ]
    }
  ];


  view: any[] = [600, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Sprint Name';
  yAxisLabelForAccepted ='Accepted/Committed'
  yAxisLabelForScope ='Scope Change'
  showYAxisLabel = true;
  yAxisLabel = 'Sprint Name';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  //pie
  showLabels = true;
}
