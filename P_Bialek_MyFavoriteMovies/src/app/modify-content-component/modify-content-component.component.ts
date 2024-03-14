import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../content.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
})
export class ModifyContentComponentComponent {
  newContent: Content = {
    title: '',
    description: '',
    creator: '',
    type: '',
    imgURL: '',
    tags: []
  };

  @Output() contentAdded = new EventEmitter<Content>(); 

  newContentArray: Content[] = [];

  constructor(private contentService: ContentService, private message: MessageService) { }

  ngOnInit() {
    this.contentService.getContent().subscribe(content => this.newContentArray = content);
  }

  addContentToList(newContentItem: Content): void {
    console.log('Adding new content:', newContentItem);
    this.contentService.addContent(newContentItem).subscribe(newContentFromServer => {
      // Add the new content to the array
      this.newContentArray.push(newContentFromServer);
      console.log('Content Array after adding:', this.newContentArray);
      // Set success message
      this.message.add(`Content "${newContentItem.title}" added successfully`);
      // Clear input fields after adding content
      this.newContent = { title: '', description: '', creator: '', type: '', imgURL: '', tags: [] };
    });
  }
}
