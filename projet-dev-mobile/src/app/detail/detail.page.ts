import { Component } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-page-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage {
  public user;
  public post: any = {color: 'warning'};
  favorites = Array();
  items: any;
  contacts = Array(
    {
      id: 'eight',
      username: 'CherryBlossomGirl',
      name: 'Yukiko',
      img: 'assets/img/Yukiko.png',
      email: 'Amagi@gmail.com',
      password: 'Yuki57',
      job: 'développeur mobile',
      town: 'TVworld',
      description: 'I am the most beautiful girl in th east side of the world!',
      activity: 'Admiring myself all the day long',
      society: 'Amagi inn the world famous Inaba town',
    },
    {
      id: 'Nine',
      username: 'sharp',
      name: 'Trey',
      img: 'assets/img/Max.png',
      email: 'ninth@gmail.com',
      password: 'Nine999',
      job: 'admin réseau',
      town: 'New York',
      description: 'I am the guy who is writing all this shit!',
      activity: 'Temps plein codage en tout genre et autres activitéss plus pénibles à prévoir sous peu...',
      society: 'Peut être un jour, quand je me dirais: "C qui le patron?"',
    },
  );
  disableButton: boolean;
  constructor(public apiService: ApiService,
              public activatedRoute: ActivatedRoute,
              public router: Router,
              public userService: UserService,
              private location: Location) {
  }

  ionViewWillEnter(): void {
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(userId);
  }
  //le bouton back ne renvoie plus à un chemin par défaut
  myBackButton() {
    this.location.back();
  }
  addToFavorite(){
    this.post.color = 'danger';
    this.favorites.push(this.user);
    console.log(this.favorites);
    this.router.navigate(['./tabs/tab3'],{
      queryParams: {
        value: JSON.stringify(this.favorites)
      },
    });
    console.log(this.favorites);
  }

  addToContact() {
    this.contacts.push(this.user);
    this.disableButton = true;
    this.router.navigate(['./tabs/tab2'],{
      queryParams: {
        value: JSON.stringify(this.contacts)
      },
    });
    console.log(this.contacts);
  }
}
