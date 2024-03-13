import { Injectable } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { contentArray } from './helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContentService {

  constructor(private http: HttpClient, private contentService: ContentService) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
    };

  getContent() : Observable<Content[]>{
    return this.http.get<Content[]>("api/content");
  }

  addContent(newContentItem: Content): Observable<Content>{
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions);
  }  

  updateContentArray(contentItem: Content): void {
    this.contentService.updateContent(contentItem).subscribe(() => console.log("Content updated successfully"));
  }
}
