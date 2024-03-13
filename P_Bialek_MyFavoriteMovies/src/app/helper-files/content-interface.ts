//define an interface with the following parameters
//Note: ? is optional
export interface Content {
    id?: number;
    title?: string;
    description?: string;
    creator?: string;
    imgURL?: string;
    type?: string;
    tags?: string[];
}