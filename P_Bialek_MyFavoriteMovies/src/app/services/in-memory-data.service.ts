import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    //setting it to the value of our array of content
    const content : Content[] = contentArray;
    return {content};
  }

  //take the CONTENT we defined in our contentDb file previously and move the values to this service
  genId(content: Content[]): number{
    return content.length > 0 ? Math.max(...content.map(c => c.id)) + 1 : 2000;
  }

  constructor() { }
}
