import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

//create an instance of your ContentList and add at least 3 valid items to it using the ContentList's add function in the Content-card's constructor.
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  public contentList: ContentList = new ContentList();

  constructor() {
    // Add at least 3 valid items to the contentList in the constructor
    const item1: Content = { id: 1, title: 'Coraline', description: 'Horror/Fantasy', creator: 'Henry Selick' };
    const item2: Content = { id: 2, title: 'Eternal Sunshine of the Spotless Mind', description: 'Romance/Sci-fi', creator: 'Michel Gondry' };
    const item3: Content = { id: 3, title: 'Shrek 2', description: 'Comedy/Fantasy', creator: 'Andrew Adamson' };

    this.contentList.addItem(item1);
    this.contentList.addItem(item2);
    this.contentList.addItem(item3);
  }

}
