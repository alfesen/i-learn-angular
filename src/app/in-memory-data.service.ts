import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 1, name: 'John Owen' },
      { id: 2, name: 'William Gurnall' },
      { id: 3, name: 'Thomas Watson' },
      { id: 4, name: 'William Perkins' },
      { id: 5, name: 'John Bunyan' },
      { id: 6, name: 'Thomas Brooks' },
      { id: 7, name: 'John Flavel' },
      { id: 8, name: 'John Milton' },
      { id: 9, name: 'Cotton Mather' },
      { id: 10, name: 'Richard Sibbes' },
      { id: 11, name: 'Stephen Charnock' },
      { id: 12, name: 'William Bates' },
      { id: 13, name: 'Richard Baxter' },
      { id: 14, name: 'William Bridge' },
      { id: 15, name: 'Jonathan Edwards' },
    ];
    return { heroes };
  }
  constructor() {}

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
