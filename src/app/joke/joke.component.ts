import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  template: `<h1>{{setup}}</h1>
    <p>{{punchline}}</p>`,
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  setup:string;
  punchline:string;

  constructor() { 
    this.setup ='What did the cheese say when it looked in the mirror?';
    this.punchline = 'Halloumi (Hello Me)';

    console.log(this.setup);
    console.log(this.punchline);

  }

  ngOnInit() {
  }

}
