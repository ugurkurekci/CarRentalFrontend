import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/Models/Entities/carImage';
import { ListResponseModel } from 'src/app/Models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:5001/api/';
  constructor(private httpClient: HttpClient) {}

  getImagesAll(): Observable<ListResponseModel<CarImage>> {
    let request: string = this.apiUrl + 'CarImages/getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(request);
  }
  getByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let request: string = this.apiUrl + 'CarImages/getimagesbycarid?id=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(request);
  }
}
