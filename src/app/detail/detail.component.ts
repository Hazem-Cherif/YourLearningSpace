import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UploadFileService} from '../services/upload-file.service';
import {Cours} from '../model/cours';
import {Formation} from '../model/formation';
import {FormationService} from '../services/formation.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  formation: any = [];
  constructor(private  serviceRoute: ActivatedRoute, private servFo: FormationService) { }

  ngOnInit(): void {
    this.servFo.getFormationById(this.serviceRoute.snapshot.params.id).subscribe(data => {  this.formation = data;  });
  }
}
