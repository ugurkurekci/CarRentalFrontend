import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/Models/Dto/carDetails';
import { car } from 'src/app/Models/Entities/car';
import { CarImage } from 'src/app/Models/Entities/carImage';
import { CarDetailsService } from 'src/app/services/car-service/car-details.service';
import { CarImageService } from 'src/app/services/carImage-service/car-image.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carDetails: car[] = [];
  carImages: CarImage[] = [];
  carImage: CarImage;
  dataLoaded = false;
  cardetailssss: CarDetails[] = [];
  currentColor: CarImage;

  constructor(
    private carService: CarDetailsService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImagesByCarId(params['carId']);
        this.getCarDetailsByCarId(params['carId']);
      }
    });
  }
  getCarDetails() {
    this.carService.getCarsDetailsAll().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImages() {
    this.carImageService.getImagesAll().subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImagesByCarId(carid: number) {
    this.carService.getByCarImagesId(carid).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetailsByCarId(carId: number) {
    this.carService.getByCarDetailsId(carId).subscribe((response) => {
      this.carImage = response.data[0];
    });
  }

  setCurrentColor(carImage: CarImage) {
    this.currentColor = carImage;
  }

  getcurrentColorClass(carImage: CarImage) {
    if (carImage == this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
