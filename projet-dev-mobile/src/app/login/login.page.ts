import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {LogerService} from '../user/loger.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validationsForm: FormGroup;
  validationMessages = {
    username: [
      {type: 'required', message: 'Veuillez saisir votre identifiant'}
    ],
    password: [
      {type: 'required', message: 'mot de passe associé au compte.'},
    ]
  };

  private submitAttempt: boolean;
  private userData=[];

  constructor(
    private router: Router, 
    public formBuilder: FormBuilder,
    public userService: UserService,
    public _apiService: ApiService,
    public _LogerService : LogerService,
    ) {
  }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  this.submitAttempt = true;
  this.userData.push([
                       {
                         username: this.validationsForm.value.username,
                         password: this.validationsForm.value.password,
                       },
                     ]);
  return this.userData;
  }
  isValidUser(){
    for (const item of this.userService.users) {
    if(this.validationsForm.value.username === item.username && this.validationsForm.value.password === item.password) {
      return true;
      }
    }
  }

  navTabs(){
    //you can use either of below
    this.router.navigateByUrl('./tabs/tab1');
    //this.navCtrl.navigateRoot('/app/tabs/(home:home)')
  }
  onSubmit(values) {
    console.log(values);
  }
  login(values){
    this._apiService.login(values).subscribe((res: any) =>{
      console.log('SUCCESS to API', res);
      if(res['status'] == "Success"){
        this._LogerService.id_user = res['id_user'];
        this._LogerService.userName = res['userName'];
        console.log("hey id user : ", this._LogerService.id_user);
        this.router.navigate(['./tabs/tab1']);
      }else{
        alert('identifiants incorrect');
      }

    }, (error: any) =>{
      console.log('ERROR to API :: de type', error);
      alert('identifiants incorrect');
    });
  }


}
