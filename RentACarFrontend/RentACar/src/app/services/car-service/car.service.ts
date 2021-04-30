import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carDto } from 'src/app/Models/Dto/carDto';
import { car } from 'src/app/Models/Entities/car';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { responseModel } from 'src/app/Models/responseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) { }

  getCar(): Observable<ListResponseModel<car>> {
    let newPath: string = this.apiUrl + 'Car/GetCarDetails';
    return this.httpClient.get<ListResponseModel<car>>(newPath);
  }
  getByBrandId(brandId: number): Observable<ListResponseModel<car>> {
    let request: string = this.apiUrl + 'Car/GetCarsByBrandId?id=' + brandId;
    return this.httpClient.get<ListResponseModel<car>>(request);
  }
  getByCarId(carId: number): Observable<ListResponseModel<car>> {
    let request: string = this.apiUrl + 'Car/GetCarsByCarId?id=' + carId;
    return this.httpClient.get<ListResponseModel<car>>(request);
  }
  getByColorId(colorId: number): Observable<ListResponseModel<car>> {
    let request: string = this.apiUrl + 'Car/GetCarsByColorId?id=' + colorId;
    return this.httpClient.get<ListResponseModel<car>>(request);
  }
  getCarListBrandIdColorId(
    brandId: string,
    colorId: string
  ): Observable<ListResponseModel<car>> {
    let newPath =
      this.apiUrl +
      'Car/getcardetailbrandandcolorid?brandId=' +
      brandId +
      '&colorId=' +
      colorId;
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<car>>(newPath);
  }

  add(car:car):Observable<responseModel>{
    let newPath= this.apiUrl+"Car/add";
    return this.httpClient.post<responseModel>(newPath,car);
  }

}

