import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorsResponseModel } from '../Modules/colorsResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  apiUrl = "https://localhost:5001/api/Color/getall"

  constructor(private httpClient:HttpClient) {}

  getColor():Observable<colorsResponseModel>{
    return this.httpClient.get<colorsResponseModel>(this.apiUrl)
  }
}