import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FilterTypePipe } from '../filter-type.pipe';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FilterTypePipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  //declares property contentArray of type 'Content[]' (initialize it as empty)
  contentArray: Content[] = [];
  filterContent: Content[] = [];
  title:string = '';
  message: string = '';
  isFound: boolean = false;

  checkTitle(){
    this.filterContent = this.contentArray.filter(item => item.title.toLowerCase() === this.title.toLowerCase());

    this.isFound = this.filterContent.length > 0;
    
    this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }

  //injecting movieService of type MovieService into the component
  constructor(private movieService: MovieService){ }

  //fetches the contentArray from MovieService
  getMoviesContent(): void {
    //invokes method from MovieService, returns an Observable that outputs a movie Content[] array 
    //pipe - chains RxJS operators (handles the error)
    this.movieService.getContentArray().pipe(
      //catches any errors that occur during the HTTP request/processing of the observable 
        catchError(error => {
          console.error('Error fetching content:', error);
          //return empty array if there's an error
          return of([]); 
        })
      )
      //subscribe - is called on the observable stream, 
      //receives the content array from the observable (the original content array or am empty array)
      //inside the callback function - the content array is assigned to the contentArray property of the component
      .subscribe((content: Content[]) => {
        this.contentArray = content;
      });
  }

  //getMoviesContent ^^ is invoked, initiating the fetching of the content from the MovieService
  ngOnInit(): void {
    this.getMoviesContent();
  }
}
