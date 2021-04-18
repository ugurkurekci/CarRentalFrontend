import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { car } from 'src/app/Models/Entities/car';
import { carimages } from 'src/app/Models/Entities/carimages';
import { CarService } from 'src/app/services/car-service/car.service';
import { CarimagesService } from 'src/app/services/carimages-service/carimages.service';
import { RentalsDetailsService } from 'src/app/services/rentals-service/rentals-details.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: car[];
  carimages: carimages[];
  currentCar: car;
  default: car;

  imageUrl: 'https://localhost:5001/api/';

  constructor(
    private carservice: CarService,
    private carimagesservice: CarimagesService,
    private activatedRoute: ActivatedRoute,
    private rentalservice: RentalsDetailsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarDetailsByCarId(params['carId']);
      this.getCarImagesByCarId(params['carId']);
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carservice.getByCarId(carId).subscribe((response) => {
      this.car = response.data;
      console.log(response);
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carimagesservice.getCarImagesByCarId(carId).subscribe((response) => {
      this.carimages = response.data;
      console.log(response);
    });
  }
  sliderItemActive(index: number) {
    if (index === 0) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }
}
