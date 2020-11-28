import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UploadFileService} from '../services/upload-file.service';
import {Cours} from '../model/cours';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  cours: Observable<any>;
  product: Cours = new Cours();
  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.cours = this.uploadService.getFiles();
  }

}
