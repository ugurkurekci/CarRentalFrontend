import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brandResponseModel } from '../Models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:5001/api/Brand/getall"

  constructor(private httpClient:HttpClient) { }

  getbrand():Observable<brandResponseModel>{
    return this.httpClient.get<brandResponseModel>(this.apiUrl)
  }
}
