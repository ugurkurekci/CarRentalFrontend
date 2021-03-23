import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carDetailsResponseModel } from '../Modules/carDetailsResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailsService {
  
  apiUrl = 'https://localhost:5001/api/Car/GetCarDetails';

  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<carDetailsResponseModel> {
    return this.httpClient.get<carDetailsResponseModel>(this.apiUrl);
  }
}
