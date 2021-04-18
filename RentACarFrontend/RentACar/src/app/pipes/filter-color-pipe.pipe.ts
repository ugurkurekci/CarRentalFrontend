import { Pipe, PipeTransform } from '@angular/core';
import { Colors } from '../Models/Entities/colors';

@Pipe({
  name: 'filterColorPipe'
})
export class FilterColorPipePipe implements PipeTransform {

  transform(value: Colors[], filterColor:string): Colors[] {
    filterColor=filterColor?filterColor.toLocaleLowerCase():""    
    return filterColor?value.filter((color:Colors)=>color.colorName.toLocaleLowerCase().indexOf(filterColor)!==-1):value;
  }

}
