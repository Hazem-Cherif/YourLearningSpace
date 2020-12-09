import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formation} from '../model/formation';
import {catchError, map} from 'rxjs/operators';

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
  updateFormation(formation: Formation): Observable<Formation>{
    return this.http.put<Formation>(this.url + formation.id , formation);
  }
  addFormation(u: Formation){
    return this.http.post(this.url, u);
  }
  deletFormation(id){
    return this.http.delete(this.url + id);
  }
}
