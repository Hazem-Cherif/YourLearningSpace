import { Component, OnInit } from '@angular/core';
import {FormationService} from '../services/formation.service';
import {Formation} from '../model/formation';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  listFormation: Formation[];
  constructor(private servFo: FormationService) { }

  ngOnInit(): void {
    this.servFo.getFormation().subscribe(data => this.listFormation = data);
  }
}
