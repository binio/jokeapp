import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Joke[];
  constructor() { 
    this.jokes= [
      new Joke('What did the cheese say when it looked in the mirror?','Halloumi (Hello Me)'),
      new Joke('What kind of cheese you use to disguise small horse?','Mask-a-pony Mascarpone'),
      new Joke('Kid threw a lump of cheddar at me','That was not very mature')
    ];
  }

  addJoke(joke){
    console.log('add Joke');
    this.jokes.unshift(joke);
  }
  ngOnInit() {
  }

}
