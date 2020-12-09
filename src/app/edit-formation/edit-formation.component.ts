import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/formation';
import {ActivatedRoute, Router} from '@angular/router';
import {FormationService} from '../services/formation.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {
  formation: any = [];

  constructor(private  serviceRoute: ActivatedRoute, private servFo: FormationService, private  r: Router) { }

  ngOnInit(): void {
    this.servFo.getFormationById(this.serviceRoute.snapshot.params.id).subscribe(data => {
      this.formation = data;
    });
  }
edit(){
  this.servFo.updateFormation(this.formation).subscribe(data => {
    this.formation = data; } );
  this.r.navigate(['/formationCrud']);
  }
}
