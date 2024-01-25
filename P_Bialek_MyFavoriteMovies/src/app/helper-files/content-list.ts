//Create a class, with the following attributes and methods
import { Content } from '../helper-files/content-interface';

export class ContentList{
    //1. private array of type Content
    private contentArray: Content[];
    //2. constructor that initially sets the array to be empty
    constructor() {
        this.contentArray = [];
    }
    //3. getter function that returns your Content array
    get getContentArray() {
        return this.contentArray;
    }
    //4. function that adds 1 Content item to the end of the array
    addContentItem(contentItem: Content) {
        this.contentArray.push(contentItem);
    }
    //5. function that returns the number of items in the array
    getNumOfItems() {
        return this.contentArray.length;
    }
    //6. function that takes an input of an index of the array and returns a reader-friendly html output of a Content item's properties at that index (title, description, creator, imgURL and type). Note that the imgURL should be used to generate an image tag. - Bonus refers to this function
    outputHtmlContent(i: number): string {
        const contentItem:Content = this.contentArray[i];

        const imgTag = `<img src="${contentItem.imgURL}">`;

        return `<div>
        <h3>${contentItem.title}</h3>
        <ul> 
        <li>${contentItem.description}</li>
        <li>${contentItem.creator}</li>
        <li>${contentItem.type}</li>
        <li>${imgTag}</li>
        </ul>
        </div>`;
    }
}