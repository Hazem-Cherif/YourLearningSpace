import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.css']
})
export class ParentContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  remove(){
    localStorage.removeItem('email');
  }
}
