import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  validationsForm: FormGroup;
  validationMessages = {
    birthdate: [
      {type: 'required', message: 'La date de naissance est à renseigner'}
    ],
    town: [
      {type: 'required', message: 'Le nom de la ville doit être renseigné.'},
    ],
    jobName: [
      {type: 'required', message: 'Vous devez renseigner le poste occupé'}
    ],
    society: [
      {type: 'required', message: 'Le nom de la société est obligatoire'}
    ],
    contract: [
      {type: 'required', message: 'Le type de contrat est nécessaire'}
    ],
    job: [
      {type: 'required', message: 'Veuillez renseigner la profession'}
    ],
    location: [
      {type: 'required', message: 'Veuillez renseigner le lieu de recherche'}
    ],
    milesAway: [
      {type: 'required', message: 'Veuillez indiquer votre rayon de recherche professionnelle'},
    ],
    free: [
      {type: 'required', message: 'Veuillez précisez votre disponibilité'},
      {type: 'minlength', message: 'Veuillez répondre par "OUI" ou "NON"'}
    ],
    home: [
      {type: 'required', message: 'Veuillez renseigner le lieu de recherche'}
    ],
    type: [
      {type: 'required', message: 'Veuillez renseigner le type de bien recherché'}
    ],
    sector: [
      {type: 'required', message: 'Veuillez renseigner le secteur de recherche'}
    ],
    sectorDistance: [
      {type: 'required', message: 'Veuillez indiquer le rayon du secteur de recherche'},
    ],
    surface: [
      {type: 'required', message: 'Veuillez indiquer le rayon du secteur de recherche'},
    ],
    room: [
      {type: 'required', message: 'Veuillez indiquer le nombre de pièces'},
    ],
    minPrice: [
      {type: 'required', message: 'Veuillez indiquer le prix minimum'},
    ],
  };

  public falseFormControl = new FormControl(true);
  public trueFormControl = new FormControl(false);
  public falseFormControl1 = new FormControl(true);
  public trueFormControl1 = new FormControl(false);
  public date: string = new Date().toISOString().toString();

  private submitAttempt: boolean;
  private userData=[];
  constructor(private router: Router, public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      minPrice: new FormControl('', Validators.required),
      sectorDistance: new FormControl('', Validators.required),
      town: new FormControl('', Validators.required),
      milesAway: new FormControl('', Validators.required),
      room: new FormControl('', Validators.required),
      surface: new FormControl('', Validators.required),
      sector: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      home: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      contract: new FormControl('', Validators.required),
      jobName: new FormControl('', Validators.required),
      society: new FormControl('', Validators.required),
      birthdate: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      free: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(3),
        Validators.required,
        Validators.pattern('^OUI|NON$')
      ])),
    });
    this.submitAttempt = true;
    this.userData.push([
      {
        town: this.validationsForm.value.town,
        jobName: this.validationsForm.value.jobName,
        society: this.validationsForm.value.society,
        birthdate: this.validationsForm.value.birthdate,
        contract: this.validationsForm.value.contract,
        job: this.validationsForm.value.job,
        location: this.validationsForm.value.location,
        milesAway: this.validationsForm.value.milesAway,
        free: this.validationsForm.value.free,
        home: this.validationsForm.value.home,
        type: this.validationsForm.value.type,
        sector: this.validationsForm.value.sector,
        sectorDistance: this.validationsForm.value.sectorDistance,
        surface: this.validationsForm.value.surface,
        room: this.validationsForm.value.room,
        minPrice: this.validationsForm.value.minPrice,
      },
    ]);
    console.log('success');
  }

  onSearchInput($event: any) {
  }

  onSearchCancel($event: any) {
  }

  onSubmit(values) {
    console.log(values);
    this.router.navigate(['./tabs/tab1']);
  }
}
