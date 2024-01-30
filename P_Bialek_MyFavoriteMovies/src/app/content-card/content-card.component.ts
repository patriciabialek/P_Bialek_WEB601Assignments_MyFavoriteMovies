import { Component, Input, OnInit } from '@angular/core';
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

  // Add at least 3 valid items to the contentList in the constructor
  constructor() {
    
  }
  ngOnInit(){

  }
}
