import { Pipe, PipeTransform } from '@angular/core';
import { carDto } from '../Models/Dto/carDto';
import { car } from '../Models/Entities/car';

@Pipe({
  name: 'filterCarPipe'
})
export class FilterCarPipePipe implements PipeTransform {

  transform(value:carDto[], filterCar:string): carDto[] {
    filterCar=filterCar?filterCar.toLocaleLowerCase():""
    return filterCar?value.filter((car:carDto)=>
    car.colorName.toLocaleLowerCase().indexOf(filterCar)!==-1 ||
    car.brandName.toLocaleLowerCase().indexOf(filterCar)!==-1 ||
    car.modelYear.toString().indexOf(filterCar)!==-1 ||
    car.description.toLocaleLowerCase().indexOf(filterCar)!==-1 ||
    car.dailyPrice.toString().indexOf(filterCar)!==-1
    ):value;
  }

}
