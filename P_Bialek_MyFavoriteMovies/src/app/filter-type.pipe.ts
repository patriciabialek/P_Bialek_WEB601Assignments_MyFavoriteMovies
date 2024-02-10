import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'filterType',
  standalone: true
})
export class FilterTypePipe implements PipeTransform {

  transform(value: Content [], type: string): Content[] {
    //if 'value' is false - not an array
    //return an empty array.
    if (!value){
    return [];
    }

    //if no type is provided
    //return (Array.filter()) iterates over each item in 'value' & returns those with a type not set.
    if(!type){
    return value.filter(item => !item.type);
    }

    //filters items based on the type provided ex.'Horror'
    //return (Array.filter()) iterates over each item in 'value' & returns the type that matches the provided type.
    return value.filter(item => item.type === type);
  }
}
