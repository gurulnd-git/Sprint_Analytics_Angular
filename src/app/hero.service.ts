import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpClient:HttpClient) { }

  getSuccessData(){
    return this.httpClient.get("http://localhost:8000/analysis/success-rate");
    }
}
