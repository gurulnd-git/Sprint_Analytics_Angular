import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 public urlPrefix ='http://192.168.136.22:8000';
  constructor(private httpClient:HttpClient) { }

  getSuccessData(){
    return this.httpClient.get("http://localhost:8000/analysis/success-rate");
    }
    getUrlPrefix(){
      return this.urlPrefix; 
    }
}
