import {Component, Injectable, OnInit} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {UsernameValidator} from '../validators/username.validator';
import { PasswordValidator } from '../validators/password.validator';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  validationsForm: FormGroup;
  matchingPasswordsGroup: FormGroup;
  validationMessages = {
    username: [
      {type: 'required', message: 'Username is required.'},
      {type: 'minlength', message: 'Username must be at least 5 characters long.'},
      {type: 'maxlength', message: 'Username cannot be more than 25 characters long.'},
      {type: 'pattern', message: 'Your username must contain only numbers and letters.'},
      {type: 'validUsername', message: 'Your username has already been taken.'}
    ],
    name: [
      {type: 'required', message: 'Name is required.'}
    ],
    lastname: [
      {type: 'required', message: 'Last name is required.'}
    ],
    email: [
      {type: 'required', message: 'Email is required.'},
      {type: 'pattern', message: 'Please enter a valid email.'}
    ],
    password: [
      {type: 'required', message: 'Password is required.'},
      {type: 'minlength', message: 'Password must be at least 5 characters long.'},
      {type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.'}
    ],
    confirmPassword: [
      {type: 'required', message: 'Confirm password is required.'}
    ],
    matchingPasswords: [
      {type: 'areEqual', message: 'Password mismatch.'}
    ],
    terms: [
      {type: 'pattern', message: 'You must accept terms and conditions.'}
    ],
  };

  private submitAttempt: boolean;
  private userData=[];
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,

  ) {}

  ngOnInit() {
    this.matchingPasswordsGroup = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirmPassword: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    this.validationsForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
      ])),
      matchingPasswords: this.matchingPasswordsGroup,
      terms: new FormControl(true, Validators.pattern('true'))
    });
    this.submitAttempt = true;
    this.userData.push([
      {
        username: this.validationsForm.value.username,
        name: this.validationsForm.value.name,
        lastname: this.validationsForm.value.lastname,
        email: this.validationsForm.value.email,
        password: this.validationsForm.value.password
      },
    ]);
    console.log('success');
  }
  onSubmit(values) {
    console.log(values);
    this.router.navigate(['/login']);
  }
}
