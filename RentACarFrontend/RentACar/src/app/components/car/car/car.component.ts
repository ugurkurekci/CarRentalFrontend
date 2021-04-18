import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car-service/car.service';
import { ActivatedRoute } from '@angular/router';
import { car } from 'src/app/Models/Entities/car';
import { rentalsDetails } from 'src/app/Models/Dto/rentalsDetails';
import { carimages } from 'src/app/Models/Entities/carimages';
import { CarimagesService } from 'src/app/services/carimages-service/carimages.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  car: car[] = [];
  currentCar: car;
  filterText = '';
  rent: rentalsDetails;
  dataLoaded:false;
  carimages: carimages[];

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carimagesservice: CarimagesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarListBrandIdColorId(params['brandId'], params['colorId']);
        
      } else if (params['colorId']) {
        this.getByColorId(params['colorId']);
      } else if (params['brandId']) {
        this.getByBrandId(params['brandId']);
      } else {
        this.getCar();
      }
      
    });
  }
  getCar() {
    this.carService.getCar().subscribe((response) => {
      this.car = response.data;
    });
  }

  getByBrandId(brandId: number) {
    this.carService.getByBrandId(brandId).subscribe((response) => {
      this.car = response.data;
    });
  }
  getByColorId(colorId: number) {
    this.carService.getByColorId(colorId).subscribe((response) => {
      this.car = response.data;
    });
  }
  setCurrentCar(car: car) {
    this.currentCar = car;
  }
  getCarListBrandIdColorId(brandId: string, colorId: string) {
    this.carService
      .getCarListBrandIdColorId(brandId, colorId)
      .subscribe((response) => {
        this.car = response.data;
      });
  }
  getCarImagesByCarId(carId: number) {
    this.carimagesservice.getCarImagesByCarId(carId).subscribe((response) => {
      this.carimages = response.data;
      console.log(response);
    });


  
} }
