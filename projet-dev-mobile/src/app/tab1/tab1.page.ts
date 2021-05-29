import { Component } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users : any[];
  numberContact : any[];

  constructor(public _apiService : ApiService) {
    this.getUser();
    this.getNumberUser();

  }

 onSearchInput($event: any) {
  }
  onSearchCancel($event: any) {
  }

  getUser(){
    this._apiService.getUser().subscribe((res:any) =>{
      console.log("SUCCESS GET USER ===", res);
      this.users = res;
    }, (error: any) =>{
      console.log("ERRRO GET USER ===", error);
    }) 

  }

  getNumberUser(){
    this._apiService.getNumberUser().subscribe((res:any) =>{
      console.log("SUCCESS GET NUMBER ===", res);
      this.numberContact = res;
    }, (error: any) =>{
      console.log("ERRRO GET USER ===", error);
    }) 
  }

}

