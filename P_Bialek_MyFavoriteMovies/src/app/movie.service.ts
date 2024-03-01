import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  //takes param/input id
  //returns an Observable, will emit a Content object or undefined
  getContentById(id: number): Observable<Content | undefined> {
    //Finds the matching id in the contentArray that matches the parameter id
    //if match found  - return Content object. If not - undefined
    return of(contentArray.find(content => content.id === id));
  }
}
