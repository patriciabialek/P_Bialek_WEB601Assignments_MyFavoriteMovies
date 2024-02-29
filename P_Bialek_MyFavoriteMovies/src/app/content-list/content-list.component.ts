import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FilterTypePipe } from '../filter-type.pipe';
import { contentArray } from '../helper-files/contentDb';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FilterTypePipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  // filterContent: Content[] = [];
  // title:string = '';
  // message: string = '';
  // isFound: boolean = false;

  // checkTitle(){
  //   this.filterContent = this.contentArray.filter(item => item.title.toLowerCase() === this.title.toLowerCase());

  //   this.isFound = this.filterContent.length > 0;
    
  //   this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  // }

  constructor(){

  }
}
