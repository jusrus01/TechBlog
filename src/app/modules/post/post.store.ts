import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap, tap } from 'rxjs';
import { PostResource } from 'src/app/core/resources/post.resource';

export interface PostState {
  postBody: string | null;
  isLoading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PostStore extends ComponentStore<PostState> {
  private readonly postBody$ = this.select((state) => state.postBody);
  private readonly isLoading$ = this.select((state) => state.isLoading);

  public readonly vm$ = this.select(
    this.postBody$,
    this.isLoading$,
    (postBody, isLoading) => ({ postBody, isLoading })
  );

  constructor(
    private postResource: PostResource
  ) {
    super({
      postBody: null,
      isLoading: true,
    });
  }

  public readonly init = this.effect((path$: Observable<string>) =>
    path$.pipe(
      tap(() => this.patchState({isLoading: true, postBody: null})),
      switchMap((path: string) =>
        this.postResource.getPost(path).pipe(
          tapResponse(
            (postBody: string) => this.patchState({ postBody: postBody, isLoading: false }),
            () => this.patchState({isLoading: false}) 
          )
        )
      )
    )
  );
}
