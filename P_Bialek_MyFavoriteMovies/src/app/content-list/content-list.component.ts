import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import {ContentCardComponent} from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentArray: Content[] = [
    {id: 1, 
      title: "Coraline", 
      description: "description...", 
      creator: "Henry Selick", 
      imgURL: "https://upload.wikimedia.org/wikipedia/en/3/36/Coraline_poster.jpg", 
      type: "Fantasy", 
      tags: ["tag1, ", "tag2, ", "tag3"],
    },
    {
      id: 2, 
      title: "Shrek 2", 
      description: "description...", 
      creator: "Andrew Adamson", 
      imgURL: "https://m.media-amazon.com/images/I/71PM3ZsLZaL._AC_UF1000,1000_QL80_.jpg", 
      type: "Comedy", 
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: 3, 
      title: "Eternal Sunshine of the Spotless Mind", 
      description: "description...", 
      creator: "Michel Gondry", 
      imgURL: "https://m.media-amazon.com/images/I/71G7AybM3qL._AC_UF894,1000_QL80_.jpg", 
      type: "Sci-Fi", 
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: 4, 
      title: "Sinister", 
      description: "description...", 
      creator: "Scott Derrickson", 
      imgURL: "https://m.media-amazon.com/images/I/81mfiTrZsFL._AC_UF1000,1000_QL80_.jpg", 
      type: "Horror", 
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: 5, 
      title: "Showgirls", 
      description: "description...", 
      creator: "Paul Verhoeven", 
      imgURL: "https://m.media-amazon.com/images/M/MV5BNzcyMjExNjg3OF5BMl5BanBnXkFtZTgwOTY4Mjc1MDE@._V1_.jpg", 
      type: "Thriller", 
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: 6, 
      title: "Black Swan", 
      description: "description...", 
      creator: "Darren Aronofsky", 
      imgURL: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8236892_v_v10_ar.jpg", 
      type: "Thriller", 
      tags: ["tag1", "tag2", "tag3"],
    },
  ]

  constructor() {
  
  }
}
