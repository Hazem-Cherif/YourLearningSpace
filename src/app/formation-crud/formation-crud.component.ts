import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Formation} from '../model/formation';
import {FormationService} from '../services/formation.service';

@Component({
  selector: 'app-formation-crud',
  templateUrl: './formation-crud.component.html',
  styleUrls: ['./formation-crud.component.css']
})
export class FormationCrudComponent implements OnInit {
  formation: Formation;
  listFormation: Formation[];
  @Output() eventAddFormation = new EventEmitter<Formation>();
  constructor(private servFo: FormationService) { }

  ngOnInit(): void {
    this.formation = new Formation();
    this.servFo.getFormation().subscribe(data => this.listFormation = data);
  }
  save() {
    this.servFo.addFormation(this.formation).subscribe(() => this.listFormation = [this.formation, ...this.listFormation]);
    alert('You successfully added the new Formation' + JSON.stringify(this.formation.nom));
  }
  delet(id) {
    this.servFo.deletFormation(id).subscribe(() => this.listFormation = this.listFormation.filter(emp => emp.id !=  id) );
  }
}
