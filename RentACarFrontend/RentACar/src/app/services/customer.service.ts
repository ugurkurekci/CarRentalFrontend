import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerResponseModel } from '../Modules/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:5001/api/Customers/getall"

  constructor(private httpClient:HttpClient) {}

  getCustomer():Observable<customerResponseModel>{
    return this.httpClient.get<customerResponseModel>(this.apiUrl)
  }
}