import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { rentalsDetails } from 'src/app/Models/Dto/rentalsDetails';

@Injectable({
  providedIn: 'root'
})
export class RentalsDetailsService {


    apiUrl = "https://localhost:5001/api/Rentals/GetRentalsDetails"
  
    constructor(private httpClient:HttpClient) { }
  
    getRentalsDetails():Observable<ListResponseModel<rentalsDetails>>{
      return this.httpClient.get<ListResponseModel<rentalsDetails>>(this.apiUrl)
    }
  }
  