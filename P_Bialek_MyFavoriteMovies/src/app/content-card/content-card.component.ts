import { Component, Input } from '@angular/core';
import { ContentListComponent } from '../content-list/content-list.component';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [ContentListComponent, CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() content: Content;
  
  showDetails() {
    console.log(`Image ID: ${this.content.id}, Image Title: ${this.content.title}`);
  }
 
}
