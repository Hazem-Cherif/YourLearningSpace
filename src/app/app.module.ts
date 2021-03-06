import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { CoursComponent } from './cours/cours.component';
import { DetailComponent } from './detail/detail.component';
import { ParentContainerComponent } from './parent-container/parent-container.component';
import { FormationComponent } from './formation/formation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormationCrudComponent } from './formation-crud/formation-crud.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UploadFilesComponent,
    CoursComponent,
    DetailComponent,
    ParentContainerComponent,
    FormationComponent,
    FormationCrudComponent,
    EditFormationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
