import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../core/resources/section.model';
import { TopMenuStore } from './top-menu/top-menu.store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  public readonly vm$: Observable<{sections: Section[], isLoading: boolean}>;
  
  constructor(private store: TopMenuStore) {
    this.vm$ = store.vm$;
  }

  ngOnInit(): void {
    this.store.init();
  }
}