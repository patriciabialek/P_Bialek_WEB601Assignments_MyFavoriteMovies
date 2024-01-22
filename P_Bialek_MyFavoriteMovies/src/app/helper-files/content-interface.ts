//define an interface with the following parameters
//Note: ? is optional
interface Content {
    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string[];
}