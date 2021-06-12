import { Component } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {LogerService} from '../user/loger.service';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public user;
  filterTerm: any;
  data: any;
  contacts: any;

  id = this._LogerService.id_user;
  users: any[];
  numberContact: any[];

  constructor(
    public _apiService: ApiService,
    public router: Router,
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public _LogerService : LogerService, ) {

    this.activatedRoute.queryParams.subscribe((res)=>{
      this.data = JSON.parse(res.value);
      console.log(this.data);
    });

    this.goToLoginPage();
    this.getContact();
    this.getNumberContact();

  }

 onSearchInput($event: any) {
  }
  onSearchCancel($event: any) {
  }

  getContact(){
    this._apiService.getContact(this.id).subscribe((res:any) =>{
    console.log("SUCCESS of Contact ===", res);
    this.users = res;
  }, (error: any) =>{
    console.log("ERRRO of Contact ===", error);
  });
}

  getNumberContact(){

    this._apiService.getNumberContact(this.id).subscribe((res:any) =>{
      console.log("SUCCESS GET NUMBER CONTACT ===", res);
      this.numberContact = res;
    }, (error: any) =>{
      console.log("ERRRO GET USER CONTACT ===", error);
    })
  }

  goToLoginPage(){
    if(this.id == null){
      this.router.navigate(['./login']);
    }
  }

 deleteUser(values) {
    console.log(values);
    this._apiService.deleteUser(this.id,values['id_recepteur']).subscribe((res:any) =>{
      console.log("Success supp contact ===", res);
      this.getContact();
      this.getNumberContact();

    }, (error: any) =>{
      console.log("Error supp contact ===", error);
    })

  }


}
