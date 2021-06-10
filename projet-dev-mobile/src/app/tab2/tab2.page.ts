import { Component } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public user;
  filterTerm: any;
  users: any[];
  numberContact: any[];
  data: any;
  contacts: any;
  constructor(public apiService: ApiService,
              public router: Router,
              public userService: UserService,
              public activatedRoute: ActivatedRoute) {
    this.getContact();
    this.getNumberContact();
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.data = JSON.parse(res.value);
      console.log(this.data);
    });
  }

 onSearchInput($event: any) {
  }
  onSearchCancel($event: any) {
  }

  getContact(){
    this.apiService.getContact().subscribe((res: any) =>{
      console.log('SUCCESS GET USER ===', res);
      this.users = res;
    }, (error: any) =>{
      console.log('ERRRO GET USER ===', error);
    });

}

getNumberContact(){
  this.apiService.getNumberContact().subscribe((res: any) =>{
    console.log('SUCCESS GET NUMBER ===', res);
    this.numberContact = res;
  }, (error: any) =>{
    console.log('ERRRO GET USER ===', error);
  });
}

 removeUser() {
  this.contacts.splice(this.user);
 console.log(this.contacts);
  }
}
