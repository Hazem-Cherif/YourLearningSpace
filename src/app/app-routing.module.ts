import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {UploadFilesComponent} from './upload-files/upload-files.component';
import {CoursComponent} from './cours/cours.component';
import {DetailComponent} from './detail/detail.component';
import {FormationComponent} from './formation/formation.component';
import {FormationCrudComponent} from './formation-crud/formation-crud.component';
import {EditFormationComponent} from './edit-formation/edit-formation.component';


const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'Register', component : RegisterComponent},
  {path: 'Login', component : LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'Upload', component: UploadFilesComponent},
  {path: 'Cours', component: CoursComponent},
  {path: 'formation', component: FormationComponent},
  {path: 'formationCrud', component: FormationCrudComponent},
  {path: 'formationCrud/editFormation/:id', component: EditFormationComponent},
  {path: 'formation/detail/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
