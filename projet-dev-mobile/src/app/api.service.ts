import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  addUser(data){
    return this.http.post('http://localhost/crud/create.php',data);
  }

  addContact(idUser, idUserDetail){
    return this.http.get('http://localhost/crud/addContact.php?id_user='+idUser+'&id_userDetail='+idUserDetail);
  }

  addFavoris(idUser, idUserDetail){
    return this.http.get('http://localhost/crud/addFavoris.php?id_user='+idUser+'&id_userDetail='+idUserDetail);
  }

  deleteUser(idUser, idUserDetail){
    return this.http.delete('http://localhost/crud/delete.php?id_user='+idUser+'&id_userDetail='+idUserDetail);
  }

  deleteUserFavoris(idUser, idUserDetail){
    return this.http.delete('http://localhost/crud/deleteFavoris.php?id_user='+idUser+'&id_userDetail='+idUserDetail);
  }

  login(data){
    return this.http.post('http://localhost/crud/login.php',data);
  }

  session(){
    return this.http.get('http://localhost/crud/session.php');
  }

  getUser(id){
    return this.http.get('http://localhost/crud/getUser.php?id_user='+id);
  }
  getSingleUser(id){
    return this.http.get('http://localhost/crud/getSingleUser.php?id_user='+id);
  }

  getNumberUser(id){
    return this.http.get('http://localhost/crud/numberUser.php?id_user='+id);
  }

  getContact(id){
    return this.http.get('http://localhost/crud/contact.php?id_user='+id);
  }

  getNumberContact(id){
    return this.http.get('http://localhost/crud/numberContact.php?id_user='+id);
  }

  getFavoris(id){
    return this.http.get('http://localhost/crud/Favoris.php?id_user='+id);
  }

  getNumberFavoris(id){
    return this.http.get('http://localhost/crud/numberFavoris.php?id_user='+id);
  }


  update(data){
    return this.http.post('http://localhost/crud/update.php',data);
  }

}
