import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {Formation} from '../model/formation';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  url = 'http://localhost:3000/users/';
  constructor(private  http: HttpClient) { }
   getEmploye(): Observable <User[]>{
    return this.http.get<User[]>(this.url);
  }
  addEmploye(u: User){
    return this.http.post(this.url, u);
  }
}
