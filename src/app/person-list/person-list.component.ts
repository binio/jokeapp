import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  
  people: Person[];

  constructor() { 
    this.people = [
      new Person("Anja","Asghar"),
      new Person("Tomasz","Biniecki"),
      new Person("Alex","Borsch")
    ];
  }

  ngOnInit() {
  }

}
