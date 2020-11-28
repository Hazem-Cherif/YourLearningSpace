import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginserviceService} from '../services/loginservice.service';
import {User} from '../model/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private serv: LoginserviceService, private  r: Router) {
  }
  registerForm: FormGroup;
  email: string;
  password: string;
  u: User;
  listUser: User[];
  err: string;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      // tslint:disable-next-line:max-line-length
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.serv.getEmploye().subscribe(data => this.listUser = data);
  }
  login() {
    for (let u of this.listUser) {
      if (this.registerForm.value.email === u.email && this.registerForm.value.password === u.password) {
        this.r.navigate(['/home']);
      } else {
          this.err = 'hello , you need to register first Or your email and password are wrong  :)' ;
      }
    }
  }
}
