import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
fname: string; 
lname: string;
  constructor() { 
    this.fname="Anja";
    this.lname="Asghar";

    console.log(this.lname +" "+this.fname);
  }

  ngOnInit() {
  }

}
