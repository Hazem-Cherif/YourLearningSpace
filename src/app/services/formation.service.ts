import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formation} from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  url = 'http://localhost:3000/formations/';
  constructor(private  http: HttpClient) { }
  getFormation(): Observable<Formation[]>{
    return this.http.get<Formation[]>(this.url);
  }
  getFormationById(id: number): Observable<Formation[]>{
    return this.http.get<Formation[]>(this.url + id);
  }
}
