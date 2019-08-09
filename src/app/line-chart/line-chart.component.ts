import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
    data: any;
    private sub6: any;
    resp5:any;
    mocking:any = [];
    mocking1:any = [];
    labels:any = [];
    labelDatas: any=[];
    committedStory:any =[];
    valueSData:any =[];
    constructor(private httpClient: HttpClient,private heroService : HeroService) {
    }
ngOnInit(){
    this.sub6 = this.httpClient.get(this.heroService.getUrlPrefix()+'/analysis/velocity-trend').subscribe((resp6) => {
    this.resp5 = resp6;
    this.resp5.map((p) => {
        this.labelDatas.push(p.name);
        this.committedStory.push(p.committedStory);
        this.valueSData.push(p.value);
      });

      this.data = {
        labels: this.labelDatas,
        datasets: [
            {
                label: 'Velocity',
                data: this.committedStory,
                fill: false,
                borderColor: '#565656'
            },
            {
                label: 'Velocity Predictability',
                data: this.valueSData,
                fill: false,
                borderColor: '#4bc0c0'
            }
        ]
    }
    });
}


    // constructor(private httpClient: HttpClient) {
    //     this.data = {
    //         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //         datasets: [
    //             {
    //                 label: 'Second Dataset',
    //                 data: [28, 48, 40, 19, 86, 27, 90],
    //                 fill: false,
    //                 borderColor: '#565656'
    //             }
    //         ]
    //     }
    // }

    

}
