import { Component, OnInit, Input } from '@angular/core';
import { Joke } from './joke';

@Component({
  selector: 'joke',
  template: `
  <div class="card card-block">
  <h4 class="card-title">{{joke.setup}}</h4>
  <p class="card-punchline" [hidden]="joke.hide">{{joke.punchline}}</p>
  <a class="btn btn-primary" (click)="joke.toggle()">Tell me!</a>
</div>
  `,
  styleUrls: ['./joke.component.css']
})
export class JokeComponent  {

  @Input() joke: Joke;

}
