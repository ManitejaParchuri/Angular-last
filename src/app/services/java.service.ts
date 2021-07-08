import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  url:string = 'assets/java.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getalljavacourse(){
     return this.httpClient.get(this.url)
}
}
