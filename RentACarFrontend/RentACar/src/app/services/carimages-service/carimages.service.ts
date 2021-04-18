import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carimages } from 'src/app/Models/Entities/carimages';
import { ListResponseModel } from 'src/app/Models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimagesService {

 url="https://localhost:5001/api/";
  
  constructor(private httpClient:HttpClient) { }
  getCarImages():Observable<ListResponseModel<carimages>>{
    let newPath = this.url + "CarImages/getall";
    return this.httpClient.get<ListResponseModel<carimages>>(newPath);
  }
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<carimages>>{
    let newPath = this.url + "CarImages/getimagesbycarid?id=" + carId;
    return this.httpClient.get<ListResponseModel<carimages>>(newPath);
  }
}

