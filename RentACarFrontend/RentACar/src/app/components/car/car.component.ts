import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { car } from 'src/app/Models/Entities/car';
import { CarImage } from 'src/app/Models/Entities/carImage';
import { CarDetailsService } from 'src/app/services/car-service/car-details.service';
import { CarImageService } from 'src/app/services/carImage-service/car-image.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: car[] = [];
  carımage:CarImage [] = [];
  dataLoaded = false;

  constructor(
    private carService: CarDetailsService,
    private carImageService : CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      }
      if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCarsAll().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  
  
  
}
