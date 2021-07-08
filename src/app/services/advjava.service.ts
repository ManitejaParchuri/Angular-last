import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvjavaService {

  url:string = 'assets/advjava.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getalladvjavacourse(){
     return this.httpClient.get(this.url)
}
}
