import {Component} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page{
  users: any[];
 public user;
  numberContact: any[];
  filterTerm: any;
  constructor(public apiService: ApiService,
              public router: Router,
              public userService: UserService,
              public activatedRoute: ActivatedRoute) {
    this.getUser();
    this.getNumberUser();
  }
 async onSearchInput($event: any) {
   }
  onSearchCancel($event: any) {
  }

  getUser(){
    this.apiService.getUser().subscribe((res: any) =>{
      console.log('SUCCESS GET USER ===', res);
      this.users = res;
    }, (error: any) =>{
      console.log('ERRRO GET USER ===', error);
    });
  }
  getNumberUser(){
    this.apiService.getNumberUser().subscribe((res: any) =>{
      console.log('SUCCESS GET NUMBER ===', res);
      this.numberContact = res;
    }, (error: any) =>{
      console.log('ERRRO GET USER ===', error);
    });
  }
}

