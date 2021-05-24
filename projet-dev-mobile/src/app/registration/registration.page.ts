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
      {type: 'required', message: 'Un identifiant est obligatoire.'},
      {type: 'minlength', message: 'Votre identifiant doit contenir au moins 5 caractères.'},
      {type: 'maxlength', message: 'Votre identifiant est limité à 25 caractères.'},
      {type: 'pattern', message: 'Votre identifiant ne peut être composé que de chiffres et de lettres.'},
      {type: 'validUsername', message: 'Votre identifiant est déjà pris.'}
    ],
    name: [
      {type: 'required', message: 'Le nom est obligatoire.'}
    ],
    lastname: [
      {type: 'required', message: 'Le prénom est obligatoire.'}
    ],
    email: [
      {type: 'required', message: 'Une adresse mail est nécessaire.'},
      {type: 'pattern', message: 'Veuillez entrez une adresse mail valide.'}
    ],
    password: [
      {type: 'required', message: 'Le mot de passe est obligatoire.'},
      {type: 'minlength', message: 'Le mot de passe comporte au minimum 5 caractères.'},
      {type: 'pattern', message: 'Votre mot de passe doit contenir une majuscule, une minuscule et un chiffre.'}
    ],
    confirmPassword: [
      {type: 'required', message: 'la confirmation du mot de passe est obligatoire.'}
    ],
    matchingPasswords: [
      {type: 'areEqual', message: 'le mot de passe ne correspond pas.'}
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
