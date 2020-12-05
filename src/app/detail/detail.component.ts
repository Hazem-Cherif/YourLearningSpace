import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UploadFileService} from '../services/upload-file.service';
import {Cours} from '../model/cours';
import {Formation} from '../model/formation';
import {FormationService} from '../services/formation.service';
import {ActivatedRoute} from '@angular/router';
import {InscrirService} from '../services/inscrir.service';
import {Inscrir} from '../model/inscrir';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  formation: any = [];
  inscr: any = [];
  email: string;
  userEmail: string;
  int: number;
  ins: Inscrir;
  err: string;
  succ: string;
  test: boolean;

  constructor(private  serviceRoute: ActivatedRoute, private servFo: FormationService, private servIn: InscrirService) {
  }

  ngOnInit(): void {

    this.servFo.getFormationById(this.serviceRoute.snapshot.params.id).subscribe(data => {
      this.formation = data;
    });
    this.servIn.getInsc().subscribe(data => this.inscr = data);
  }

  insc() {
    for ( const i of this.inscr) {
      if (localStorage.getItem('email') === i.email && this.formation.id === i.formationId) {
         this.test = true;
         break;
      }
    }
    console.log(this.test);
    if ( this.test === true ) {
      this.err = 'you already subscribed to this formation';
    }
      else {
        this.userEmail = localStorage.getItem('email');
        this.int = this.formation.id;
        console.log(this.userEmail, 'nnn', this.formation.id);
        this.ins = new Inscrir();
        this.ins.email = this.userEmail;
        this.ins.formationId = this.int;
        this.servIn.addInsc(this.ins).subscribe(
          () => this.inscr = [this.int, ...this.inscr]);
        this.servFo.updateFormation(this.formation).subscribe(data => {
          this.formation = data;
          this.formation.NombreDePlaces = this.formation.NombreDePlaces - 1;
          this.servFo.updateFormation(this.formation).subscribe(data1 => {
            this.servFo.getFormationById(this.formation.id);
          });
        });
        this.succ = 'thank you for your subscription' ;
      }
    }
  }

