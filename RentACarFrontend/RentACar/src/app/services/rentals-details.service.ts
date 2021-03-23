import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rentalsDetailsResponseModel } from '../Models/rentalsDetailsResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalsDetailsService {


    apiUrl = "https://localhost:5001/api/Rentals/GetRentalsDetails"
  
    constructor(private httpClient:HttpClient) { }
  
    getRentalsDetails():Observable<rentalsDetailsResponseModel>{
      return this.httpClient.get<rentalsDetailsResponseModel>(this.apiUrl)
    }
  }
  