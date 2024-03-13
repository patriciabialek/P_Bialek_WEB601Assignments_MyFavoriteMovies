import { Injectable } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  private contentUrl = 'api/content';

  constructor(private http: HttpClient, private contentService: ContentService, private messageService: MessageService) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
    };

  getContent() : Observable<Content[]>{
    return this.http.get<Content[]>("api/content");
  }

  // addContent(newContentItem: Content): Observable<Content>{
  //   return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  // }
  addContent(newContent: Content): Observable<Content> {
    return this.getContent().pipe(
      map(contents => {
        // Find the highest ID in the existing content array
        const maxId = contents.reduce((max, content) => Math.max(max, content.id || 0), 0);
        // Assign a new ID to the new content item
        newContent.id = maxId + 1;
        // Add the new content item to the array
        return newContent;
      }),
      switchMap(newContentWithId => this.http.post<Content>(this.contentUrl, newContentWithId))
    );
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions);
  }  

  updateContentArray(contentItem: Content): void {
    this.contentService.updateContent(contentItem).subscribe(() => console.log("Content updated successfully"));
  }
}
