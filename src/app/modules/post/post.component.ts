import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostStore } from './post.store';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  public readonly vm$: Observable<{postBody: string | null, isLoading: boolean}>;

  constructor(private store: PostStore, private route: ActivatedRoute) {
    this.vm$ = store.vm$;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const fileName = paramMap.get('fileName');
      if (!fileName) {
        return;
      }

      this.store.init(fileName);
    });
  }
}
