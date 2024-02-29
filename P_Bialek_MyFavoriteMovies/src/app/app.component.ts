import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

  customContent: Content | undefined;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    //choose ID
    this.getContentById(8); 
  }

  getContentById(id: number): void {
    this.movieService.getContentById(id).subscribe(
      (content: Content | undefined) => {
        this.customContent = content;
      },
      (error) => {
        console.error('Error fetching content by ID:', error);
      }
    );
  }
}

