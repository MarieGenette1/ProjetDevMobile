import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
 numberContact: any[];
  users: any[];
  filterTerm: any;
  data: any;
  public user;
  contacts = Array();
  public post: any = {color: 'warning'};
  favorites = Array();
  constructor(public apiService: ApiService,
              public router: Router,
              public userService: UserService,
              public activatedRoute: ActivatedRoute) {
    this.getFavoris();
    this.getNumberFavoris();
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.data = JSON.parse(res.value);
      console.log(this.data);
    });
  }
ngOnInit() {
}

  onSearchInput($event: any) {
  }
  onSearchCancel($event: any) {
  }

  getFavoris(){
    this.apiService.getFavoris().subscribe((res: any) =>{
      console.log('SUCCESS GET USER ===', res);
      this.users = res;
    }, (error: any) =>{
      console.log('ERRRO GET USER ===', error);
    });
}

getNumberFavoris(){
  this.apiService.getNumberFavoris().subscribe((res: any) =>{
    console.log('SUCCESS GET NUMBER ===', res);
    this.numberContact = res;
  }, (error: any) =>{
    console.log('ERRRO GET USER ===', error);
  });
}

  deleteFav() {
    this.favorites.splice(this.user);
  }
}
