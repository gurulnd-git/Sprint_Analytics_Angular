import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 public urlPrefix ='http://sprint-production-env.ap-southeast-1.elasticbeanstalk.com';
 public loginPageVisible:boolean = true;
  constructor(private httpClient:HttpClient) { }

  getSuccessData(){
    return this.httpClient.get("http://sprint-production-env.ap-southeast-1.elasticbeanstalk.com/analysis/success-rate");
    }
    getUrlPrefix(){
      return this.urlPrefix; 
    }
    loginSuccess(){
      this.loginPageVisible = false;
      
    }
}
