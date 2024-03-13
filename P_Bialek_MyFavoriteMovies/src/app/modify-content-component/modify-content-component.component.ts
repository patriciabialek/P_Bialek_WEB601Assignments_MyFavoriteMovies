import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
})
export class ModifyContentComponentComponent {
  // Event emitter for content added
  @Output() contentAdded = new EventEmitter<Content>(); 

  // Object to hold new content
    newContent: Content = {
      id: 0,
      title: '',
      description: '',
      creator: ''
    }; 

    constructor(private contentService: ContentService) { }
  
      // Method to add new content to the simulated server database
      addContent() {
        this.contentService.addContent(this.newContent)
          .subscribe(newContentWithId => {
            console.log('Content added successfully:', newContentWithId);
            this.clearFields(); // Clear input fields after adding content
          }, error => {
            console.error('Error adding content:', error);
          });
      }
    
      // Method to clear input fields
      // Clear newContent object
      clearFields() {
        this.newContent = {
          id: 0,
          title: '',
          description: '',
          creator: ''
        }; 
      }
}
