import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
   
ngOnInit(){
    this.sub6 = this.httpClient.get('http://192.168.136.22:8000/analysis/velocity-trend').subscribe((resp6) => {
  
    });
}


    constructor(private httpClient: HttpClient) {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
    }

    

}
