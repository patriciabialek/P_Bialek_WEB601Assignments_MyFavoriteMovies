import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import {Content} from './helper-files/content-interface';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentCardComponent, ContentListComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Patricia\'s Favorite Movies';

  //declare property custom content of type 'Content' or undefined
  customContent: Content | undefined;

  //injecting MovieService
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    //choose ID
    this.getContentById(1); 
  }

  //fetches content by id using movieservice
  getContentById(id: number): void {
    //invokes method from MovieService, returns an Observable that outputs a movie Content based on its id 
    this.movieService.getContentById(id)
      .pipe(
        //tap - performing side-effects (updates) without modifying the value
        //sets customContent to the fetched content based on id
        tap((content: Content | undefined) => {
          this.customContent = content;
        }),
        catchError((error) => {
          console.error('Error fetching content by ID:', error);
          //returns an observable null value 
          return of(null); 
        })
      )
      //initiates the observable chain and start retrieving the data
      .subscribe();
  }
}

