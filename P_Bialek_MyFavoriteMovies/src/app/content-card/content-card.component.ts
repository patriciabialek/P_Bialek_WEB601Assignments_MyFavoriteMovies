import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from '../content-list/content-list.component';
import { Content } from '../helper-files/content-interface';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, ContentListComponent, RouterOutlet],
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})

export class ContentCardComponent{
  //allows data to be passed from the parent component to the child component 
  //Content-list passes down 'content' property(parent)
  @Input() content: Content;

  //Clicking on the image displays the Content's id and title in the console
  showDetails() {
    console.log(`Image ID: ${this.content.id}, Image Title: ${this.content.title}`);
  }

  constructor() {
  
  }
}
