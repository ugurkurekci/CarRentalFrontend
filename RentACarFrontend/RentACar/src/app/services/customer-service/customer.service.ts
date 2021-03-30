import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Models/Entities/customer';
import { ListResponseModel } from 'src/app/Models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:5001/api/Customers/getall"

  constructor(private httpClient:HttpClient) {}

  getCustomer():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl)
  }
}