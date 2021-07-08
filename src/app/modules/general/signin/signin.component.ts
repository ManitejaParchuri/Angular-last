import { Component, OnInit } from '@angular/core';
import { AdvjavaService } from 'src/app/services/advjava.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {

  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:AdvjavaService){
    proService.getalladvjavacourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }

}
