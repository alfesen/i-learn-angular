import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent {
  heroes$!: Observable<Hero[]>

  private searchTerms = new Subject<string>()

  constructor(private heroService: HeroService) {}
  search(term: string): void {
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(debounceTime(600), distinctUntilChanged(), switchMap((term: string) => this.heroService.searchHeroes(term)))
  }
}
