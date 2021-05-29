import { Component } from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  numberContact : any[];
  users : any[];


  constructor(public _apiService : ApiService) {
    this.getFavoris();
    this.getNumberFavoris();
  }

 onSearchInput($event: any) {
  }
  onSearchCancel($event: any) {
  }

  getFavoris(){
    this._apiService.getFavoris().subscribe((res:any) =>{
      console.log("SUCCESS GET USER ===", res);
      this.users = res;
    }, (error: any) =>{
      console.log("ERRRO GET USER ===", error);
    }) 
}

getNumberFavoris(){
  this._apiService.getNumberFavoris().subscribe((res:any) =>{
    console.log("SUCCESS GET NUMBER ===", res);
    this.numberContact = res;
  }, (error: any) =>{
    console.log("ERRRO GET USER ===", error);
  }) 
}




}
