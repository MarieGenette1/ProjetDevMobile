import {Component} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {LogerService} from '../user/loger.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page{
  users: any[];
  numberContact: any[];
  _id_user = this._LogerService.id_user;

  public user;
  filterTerm: any;

  constructor(
    public apiService: ApiService,
    public router: Router,
    public userService: UserService,
    public _LogerService : LogerService,
    public activatedRoute: ActivatedRoute) {
    this.goToLoginPage();
    this.getUser();
    this.getNumberUser();

  }
  async onSearchInput($event: any) {
  }
  onSearchCancel($event: any) {
  }

  getUser(){
    this.apiService.getUser(this._id_user).subscribe((res: any) =>{
      console.log('SUCCESS GET USER ===', res);
      this.users = res;
    }, (error: any) =>{
      console.log('ERRRO GET USER ===', error);
    });

  }

  getNumberUser(){
    this.apiService.getNumberUser(this._id_user).subscribe((res: any) =>{
      console.log('SUCCESS GET NUMBER ===', res, "id user : ", this._id_user);
      this.numberContact = res;
    }, (error: any) =>{
      console.log('ERRRO GET USER ===', error);
    });
  }

  // Fonction à modifier

  goToLoginPage(){
    if(this._id_user == null){
      this.router.navigate(['./login']);
    }
    console.log("je suis id user : ", this._id_user);
  }

  // Fonction à modifier
  sawDetail(values){
    this._LogerService.id_userDetail = values['id_user'];
    this.router.navigate(['./detail/One']);
  }


}
