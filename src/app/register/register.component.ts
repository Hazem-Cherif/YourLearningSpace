import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user';
import {LoginserviceService} from '../services/loginservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  listUser: User[];
  registerForm: FormGroup;
  constructor(private serv: LoginserviceService) { }

  ngOnInit(): void {
    this.user = new User();
    this.registerForm = new FormGroup({
      id: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9.]+@[a-zA-Z0-9]+.[a-zA-Z]{1,10}')]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)])
    });
    this.serv.getEmploye().subscribe(data => this.listUser = data);
  }
  get id() {
    return this.registerForm.get('id');
  }get nom() {
    return this.registerForm.get('nom');
  }get email() {
    return this.registerForm.get('email');
  }get password() {
    return this.registerForm.get('password');
  }
  save() {
   this.serv.addEmploye(this.registerForm.value).subscribe(() => this.listUser = [this.registerForm.value, ...this.listUser]);
  }

}
