import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { concatMap, tap } from 'rxjs';
import { NavigationResource } from 'src/app/core/resources/navigation.resource';
import { Section } from 'src/app/core/resources/section.model';

export interface MenuState {
  sections: Section[];
  isLoading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TopMenuStore extends ComponentStore<MenuState> {
  private readonly sections$ = this.select((state) => state.sections);
  private readonly isLoading$ = this.select((state) => state.isLoading);

  public readonly vm$ = this.select(
    this.sections$,
    this.isLoading$,
    (sections, isLoading) => ({ sections, isLoading })
  );

  constructor(private navigationResource: NavigationResource) {
    super({
      sections: [],
      isLoading: true,
    });
  }

  public readonly init = this.effect((stream$) =>
    stream$.pipe(
      tap(() => this.patchState({ isLoading: true })),
      concatMap(() =>
        this.navigationResource.getSections().pipe(
          tapResponse(
            (response: any) =>
              this.setState((state) => ({
                ...state,
                sections: response.sections,
                isLoading: false,
              })),
            () => {}
          )
        )
      )
    )
  );
}
