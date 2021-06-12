import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {LogerService} from '../user/loger.service';



@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  selectedOption: string;
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
    file: [
      {type: 'required', message: 'Aucun fichier'},
    ],
  };

  public falseFormControl = new FormControl(true);
  public trueFormControl = new FormControl(false);
  public falseFormControl1 = new FormControl(true);
  public trueFormControl1 = new FormControl(false);
  public date: string = new Date().toISOString().toString();

  categories: any = ['assets/img/Alex.png', 'assets/img/Benj.png', 'assets/img/Cedric.png',
    'assets/img/Eric.png', 'assets/img/Flo.png', 'assets/img/Kahina.png', 'assets/img/Marie.png',
    'assets/img/Max.png', 'assets/img/Yukiko.png','assets/img/Zorro.png' ];
  users : any[];
  updateUser : any[];
  id = this._LogerService.id_user;
  indice: any;

  private submitAttempt: boolean;
  private userData=[];

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public _apiService : ApiService,
    public _LogerService : LogerService) {
      this.goToLoginPage();
      this.getSingleUser();

  }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      presentation: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      activity: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      file: new FormControl('', Validators.required),
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
        name: this.validationsForm.value.name,
        firstname: this.validationsForm.value.firstname,
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
        activity: this.validationsForm.value.activity,
        about: this.validationsForm.value.about,
        presentation: this.validationsForm.value.presentation,
        file: this.validationsForm.value.file
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

  addFile() {
    console.log('no file yet!');
  }

  getSingleUser(){
    this._apiService.getSingleUser(this.id).subscribe((res:any) =>{
      console.log("SUCCESS get Single User ===", res);
      this.users = res;
    }, (error: any) =>{
      console.log("ERRRO get Single User ===", error);
    });
  }

  goToLoginPage(){
    if(this.id == null){
      this.router.navigate(['./login']);
    }
  }

  textTransform(value){
    this.indice = value.indexOf("'");
    if(this.indice != -1){
      value = value.substring(0, this.indice + 1) + "'" + value.substring(this.indice + 1, value.length);
    }
    console.log("euuuh ça marche ? ", value);
    return value;
  }

  update(values){

  if(values['name'].trim() == ""){
      values['name'] = this.users[0]['nom'];
   }
   if(values['firstname'] == ""){
      values['firstname'] = this.users[0]['prenom'];
   }
   if(values['town'].trim() == ""){
      values['town'] = this.users[0]['ville'];
   }
   if(values['jobName'].trim() == ""){
     values['jobName'] = this.users[0]['nom_emploi'];
   }
   if(values['society'].trim() == ""){
      values['society'];
   }
   if(values['birthdate'] == null){
      values['birthdate'] = this.users[0]['date_naiss'];
   }
   if(values['presentation'].trim() == ""){
      values['presentation'] = this.users[0]['presentation'] ;
   }else{
    values['presentation'] = this.textTransform(values['presentation']);
   }
   if(values['activity'].trim() == ""){
     values['activity'] = this.users[0]['activites'];
   }else{
    values['activity'] = this.textTransform(values['activity']);
   }
   if(values['about'].trim() == ""){
     values['about'] = this.users[0]['text_societe'];
   }else{
    values['about'] = this.textTransform(values['about']);
   }
   if(values['contract'].trim() == ""){
     values['contract'] = this.users[0]['type_cont'];
   }
   if(values['job'].trim() == ""){
      values['job'] = this.users[0]['nom_emploi_rechercher'];
   }
   if(values['location'].trim() == ""){
     values['location'] = this.users[0]['localisation'];
   }
   if(values['milesAway'].trim() == ""){
     values['milesAway'] = this.users[0]['rayon'];
   }
   if(values['free'].trim() == ""){
      values['free'] = this.users[0]['disponibilite'];
   }

    values['id_user'] = this.users[0]['id_user'];
    console.log(values);

    this._apiService.update(values).subscribe((res:any) =>{
      console.log("SUCCESS envoie ===", res);
    }, (error: any) =>{
      console.log("ERRRO envoie ===", error);
    });
  }
}
