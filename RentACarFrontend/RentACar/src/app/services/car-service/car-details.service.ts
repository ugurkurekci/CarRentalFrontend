import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from 'src/app/Models/Dto/carDetails';
import { car } from 'src/app/Models/Entities/car';
import { CarImage } from 'src/app/Models/Entities/carImage';

import { ListResponseModel } from 'src/app/Models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailsService {
  apiUrl = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) {}

  getCarsAll(): Observable<ListResponseModel<car>> {
    let request: string = this.apiUrl + 'Car/getall';
    return this.httpClient.get<ListResponseModel<car>>(request);
  }
  getCarsDetailsAll(): Observable<ListResponseModel<car>> {
    let request: string = this.apiUrl + 'Car/GetCarDetails';
    return this.httpClient.get<ListResponseModel<car>>(request);
  }

  getCarsbyId(carId:number): Observable<ListResponseModel<CarDetails>> {
    let request: string = this.apiUrl + 'Car/getCarbyid?id=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(request);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<car>> {
    let request: string = this.apiUrl + 'Car/GetCarsByBrandId?id=' + brandId;
    return this.httpClient.get<ListResponseModel<car>>(request);
  }
  getCarsByColorId(colorId: number): Observable<ListResponseModel<car>> {
    let request: string = this.apiUrl + 'Car/GetCarsByColorId?id=' + colorId;
    return this.httpClient.get<ListResponseModel<car>>(request);
  }
  getByCarImagesId(carId: number): Observable<ListResponseModel<CarImage>> {
    let request:string = this.apiUrl + 'CarImages/getimagesbycarid?id=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(request);
  }
}
