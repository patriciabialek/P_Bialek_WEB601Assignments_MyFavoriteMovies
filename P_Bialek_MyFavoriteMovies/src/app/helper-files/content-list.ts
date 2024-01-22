//Create a class, with the following attributes and methods
import { Content } from '../helper-files/content-interface';

class ContentList{
    //1. private array of type Content
    private contentArray: Content[];
    //2. constructor that initially sets the array to be empty
    constructor() {
        this.contentArray = [];
    }
    //3. getter function that returns your Content array
    get ContentArray(): Content[] {
        return this.contentArray;
    }
    //4. function that adds 1 Content item to the end of the array
    addItem(contentItem: Content): void {
        this.contentArray.push(contentItem);
    }
    //5. function that returns the number of items in the array
    getNumOfItems(): number {
        return this.contentArray.length;
    }
    //6. function that takes an input of an index of the array and returns a reader-friendly html output of a Content item's properties at that index (title, description, creator, imgURL and type). Note that the imgURL should be used to generate an image tag. - Bonus refers to this function
    getIndexContent(index: number): string {
        const contentItem = this.contentArray[index];

        if(!contentItem){
            return 'Invalid';
        }

    const imgTag = contentItem.imgURL ? `<img src="${contentItem.imgURL}" alt="Image">` : '';
    
        return `
            <div>
                <h3>${contentItem.title}</h3>
                <p>Description: ${contentItem.description}</p>
                <p>Creator: ${contentItem.creator}</p>
                ${imgTag}
                <p>Type: ${contentItem.type || 'N/A'}</p>
            </div>
        `;
    }
}