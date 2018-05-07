import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Tour of Heroes';
  
}
