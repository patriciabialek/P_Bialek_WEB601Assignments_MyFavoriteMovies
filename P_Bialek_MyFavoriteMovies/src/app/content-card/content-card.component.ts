import { Component, Input, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { CommonModule } from '@angular/common';

//create an instance of your ContentList and add at least 3 valid items to it using the ContentList's add function in the Content-card's constructor.
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit{
  contentList:ContentList;

  // Add at least 3 valid items to the contentList in the constructor
  constructor() {
    this.contentList = new ContentList;
    this.contentList.addContentItem({
      id: 1,
      title: 'Coraline',
      description: 'A young girl\'s discovery of a parallel world that initially appears ideal but turns sinister',
      creator: 'Henry Selick',
      type: 'Horror/Fantasy',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/3/36/Coraline_poster.jpg',
    });
    this.contentList.addContentItem({
      id: 2,
      title: 'Eternal Sunshine of the Spotless Mind',
      description: 'A film that explores the concept of erasing memories to cope with heartbreak',
      creator: 'Michel Gondry',
      type: 'Romance/Sci-fi',
      imgURL: 'https://m.media-amazon.com/images/I/71G7AybM3qL._AC_UF894,1000_QL80_.jpg',
    });
    this.contentList.addContentItem({
      id: 3,
      title: 'Shrek 2',
      description: 'A humorous and adventurous journey to meet the in-laws after Shrek and Princess Fiona marry',
      creator: 'Andrew Adamson',
      type: 'Comedy/Fantasy',
      imgURL: 'https://m.media-amazon.com/images/I/71PM3ZsLZaL._AC_UF1000,1000_QL80_.jpg',
    });
  }
  ngOnInit(){

  }
}
