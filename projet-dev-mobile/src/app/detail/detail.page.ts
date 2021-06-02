import { Component } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../service/user.service';



@Component({
  selector: 'app-page-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage {
  public user;


  constructor(public _apiService: ApiService, public route: ActivatedRoute, public userService: UserService) {
  }

  onSearchInput($event: any) {
  }
  onSearchCancel($event: any) {
  }
  ionViewWillEnter(): void{
    const userId = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(userId);
  }

  maFonction() {
  }
}
