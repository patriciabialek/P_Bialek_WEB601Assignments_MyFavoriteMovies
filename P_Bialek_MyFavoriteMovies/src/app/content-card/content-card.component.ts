import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from '../content-list/content-list.component';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, ContentListComponent],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit{
  //allows data to be passed from the parent component to the child component 
  //Content-list passes down 'content' property(parent)
  @Input() content: Content;

  //Clicking on the image displays the Content's id and title in the console
  showDetails() {
    console.log(`Image ID: ${this.content.id}, Image Title: ${this.content.title}`);
  }

  constructor() {
    
  }
  ngOnInit(){

  }
}
