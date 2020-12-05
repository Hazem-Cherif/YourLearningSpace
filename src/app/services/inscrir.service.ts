import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Inscrir} from '../model/inscrir';

@Injectable({
  providedIn: 'root'
})
export class InscrirService {
  url = 'http://localhost:3000/iscrir/';
  constructor(private  http: HttpClient) { }
  getInsc(): Observable<Inscrir[]>{
    return this.http.get<Inscrir[]>(this.url);
  }
  addInsc(ins: Inscrir  ){
    return this.http.post(this.url,  ins);
  }
}
