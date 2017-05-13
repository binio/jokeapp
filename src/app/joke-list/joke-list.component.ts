import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Object[];
  constructor() { 
    this.jokes= [{
      setup:'What did the cheese say when it looked in the mirror?',
      punchline:'Halloumi (Hello Me)'
    },
    {
      setup:'What kind of cheese you use to disguise small horse?',
      punchline:'Mask-a-pony Mascarpone'
    },
    {
      setup:'Kid threw a lump of cheddar at me',
      punchline:'That was not very mature'
    }
    ];
  }

  ngOnInit() {
  }

}
