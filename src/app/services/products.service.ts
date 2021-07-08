import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string = 'assets/products.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getallproducts(){
     return this.httpClient.get(this.url)
  }
}
