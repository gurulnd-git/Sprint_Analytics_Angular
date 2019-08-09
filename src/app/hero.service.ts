import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 public urlPrefix ='http://docker.ap-southeast-1.elasticbeanstalk.com';
  constructor(private httpClient:HttpClient) { }

  getSuccessData(){
    return this.httpClient.get("http://docker.ap-southeast-1.elasticbeanstalk.com/analysis/success-rate");
    }
    getUrlPrefix(){
      return this.urlPrefix; 
    }
}
