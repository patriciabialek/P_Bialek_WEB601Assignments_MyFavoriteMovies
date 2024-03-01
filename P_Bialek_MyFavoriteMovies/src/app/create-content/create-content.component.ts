import { Component, Output, EventEmitter } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HoverAffectDirective} from '../hover-affect.directive';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule, CommonModule, HoverAffectDirective],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  //Output will emit an event to the parent 'ContentList'
  //The type of data the event will emit is 'Content'
  @Output() contentAdded = new EventEmitter<Content>();

  //New property of type 'Content', sets it up as an empty object of type 'Content'
  content: Content = {} as Content;
  errorMessage: string;
  successMessage: string;
  tagInput: string;

  //Method for when the user submits the content form
  //Returns Promise<string> to indicate whether the submission was successful or not
  //Also combining a validation method
  submitContent(): Promise<string> {
    //Creates a new instance (Promise)
    return new Promise((resolve, reject) =>{
      if (!this.isValidContent(this.content)) {
        //Not valid: display error message
        this.errorMessage = 'Id, Title, Description, Creator fields are required';
        reject(this.errorMessage);
      } else {
        //Valid: 1. parse tags as an array, 2. emit the new content to the parent, 3. clear the input fields
        //4. display success message
        this.content.tags = this.tagInput ? this.tagInput.split(',').map(tag => tag.trim()) : [];
        //notifies parent element that new content has been made
        this.contentAdded.emit(this.content);
        this.clearFields();
        this.successMessage = "Content was added successfully";
        resolve(this.successMessage);
      }
    });
  }

  //clears the fields/error message after emitting an event
  clearFields() {
    this.content = {} as Content;
    this.errorMessage = '';
    this.tagInput = '';
  }

  //Validates the content, takes the 'Content' as a param & return a boolean
  //Checks all the if all the required fields are present
  isValidContent(content: Content): boolean {
    return !!content.id && !!content.title && !!content.description && !!content.creator;
  }
}
