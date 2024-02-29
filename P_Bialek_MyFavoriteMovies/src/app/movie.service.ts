import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Content} from './helper-files/content-interface';
import {contentArray} from './helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getContentArray(): Observable<Content[]> {
    //Retrieves the contentArray & return it using the observable pattern
    return of(contentArray);
  }

  getContentById(id: number): Observable<Content | undefined> {
    return of(contentArray.find(content => content.id === id));
  }
}
