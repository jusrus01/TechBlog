import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIG_PATH } from './routes.const';
import { Section } from './section.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationResource {
  constructor(private httpClient: HttpClient) {
  }

  public getSections(): Observable<Section[]> {
    return this.httpClient.get<Section[]>(CONFIG_PATH);
  }
}
