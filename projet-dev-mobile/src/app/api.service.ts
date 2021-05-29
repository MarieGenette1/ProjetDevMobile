import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers : HttpHeaders;

  constructor(
    public http: HttpClient
  ) { 
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  addUser(data){
    console.log("---------", data);
    return this.http.post('http://localhost/crud/create.php',data);
  }

  getUser(){
    return this.http.get('http://localhost/crud/getUser.php');
  }
  getNumberUser(){
    return this.http.get('http://localhost/crud/numberUser.php');
  }

  getContact(){
    return this.http.get('http://localhost/crud/Contact.php');
  }

  getNumberContact(){
    return this.http.get('http://localhost/crud/numberContact.php');
  }

  getFavoris(){
    return this.http.get('http://localhost/crud/Favoris.php');
  }

  getNumberFavoris(){
    return this.http.get('http://localhost/crud/numberFavoris.php');
  }

  deleteUser(id){
    return this.http.delete('http://localhost/crud/delete.php?id='+id);
  }

}
