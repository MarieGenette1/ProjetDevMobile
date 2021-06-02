import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validationsForm: FormGroup;
  validationMessages = {
    email: [
      {type: 'required', message: 'email de création de compte'}
    ],
    password: [
      {type: 'required', message: 'mot de passe associé au compte.'},
    ]
  };

  private submitAttempt: boolean;
  private userData=[];
  constructor(private router: Router, public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  this.submitAttempt = true;
  this.userData.push([
                       {
                         email: this.validationsForm.value.email,
                         password: this.validationsForm.value.password,
                       },
                     ]);
  }
  navTabs(){
    //you can use either of below
    this.router.navigateByUrl('./tabs/tab1');
    //this.navCtrl.navigateRoot('/app/tabs/(home:home)')
  }

  onSubmit(values) {
    console.log(values);
    this.router.navigate(['./tabs/tab1']);
  }
}
