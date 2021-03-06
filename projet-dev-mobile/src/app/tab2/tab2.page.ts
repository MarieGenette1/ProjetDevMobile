import { Component } from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  users : any[];
  numberContact : any[];

  
  constructor(public _apiService : ApiService) {
    this.getContact();
    this.getNumberContact();


  }

 onSearchInput($event: any) {
  }
  onSearchCancel($event: any) {
  }

  getContact(){
    this._apiService.getContact().subscribe((res:any) =>{
      console.log("SUCCESS GET USER ===", res);
      this.users = res;
    }, (error: any) =>{
      console.log("ERRRO GET USER ===", error);
    }) 

}

getNumberContact(){
  this._apiService.getNumberContact().subscribe((res:any) =>{
    console.log("SUCCESS GET NUMBER ===", res);
    this.numberContact = res;
  }, (error: any) =>{
    console.log("ERRRO GET USER ===", error);
  }) 
}



}