import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONTENT_PATH } from './routes.const';

@Injectable({
  providedIn: 'root'
})
export class PostResource {
  constructor(private httpClient: HttpClient) {
  }

  public getPost(path: string): Observable<string> {
    return this.httpClient.get(`${CONTENT_PATH}/${path}`, {responseType: 'text'});
  }
}
