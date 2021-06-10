import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {LogerService} from '../user/loger.service';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  filterTerm: any;
  data: any;
  public user;
  contacts = Array();
  public post: any = {color: 'warning'};
  favorites = Array();

  users: any[];
  numberContact: any[];
  id = this._LogerService.id_user;

  constructor(
    public _apiService: ApiService,
    public router: Router,
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public _LogerService : LogerService,
    ) {

    this.activatedRoute.queryParams.subscribe((res)=>{
      this.data = JSON.parse(res.value);
      console.log(this.data);
    });

    this.goToLoginPage();
    this.getFavoris();
    this.getNumberFavoris();

  }
ngOnInit() {
}

  onSearchInput($event: any) {
  }
  onSearchCancel($event: any) {
  }

  getFavoris(){
    this._apiService.getFavoris(this.id).subscribe((res:any) =>{
      console.log("SUCCESS GET USER ===", res);
      this.users = res;
    }, (error: any) =>{
      console.log("ERRRO GET USER ===", error);
    }) 
}

  getNumberFavoris(){
      this._apiService.getNumberFavoris(this.id).subscribe((res:any) =>{
        console.log("SUCCESS GET NUMBER ===", res);
        this.numberContact = res;
      }, (error: any) =>{
        console.log("ERRRO GET USER ===", error);
      }) 
  }


  goToLoginPage(){
    if(this.id == null){
      this.router.navigate(['./login']);
    }
  }

  deleteUser(values) {
    console.log(values);
    this._apiService.deleteUserFavoris(this.id,values['id_user_favoris']).subscribe((res:any) =>{
      console.log("Success supp contact ===", res);
      this.getFavoris();
      this.getNumberFavoris();
    }, (error: any) =>{
      console.log("Error supp contact ===", error);
    })
 
  }


}
