import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messagesService: MessagesService
  ) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messagesService.add(`HeroesComponent: Selected Hero id - ${hero.id}`);
  }
}
