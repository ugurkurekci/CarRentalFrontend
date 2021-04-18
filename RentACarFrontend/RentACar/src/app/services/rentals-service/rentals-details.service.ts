import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { rentalsDetails } from 'src/app/Models/Dto/rentalsDetails';
import { Rentals } from 'src/app/Models/Entities/rentals';
import { responseModel } from 'src/app/Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalsDetailsService {


    apiUrl = "https://localhost:5001/api/"
  
    constructor(private httpClient:HttpClient) { }
  
    getRentals():Observable<ListResponseModel<rentalsDetails>>{
      let newPath=this.apiUrl+"Rentals/getall";
      return this.httpClient.get<ListResponseModel<rentalsDetails>>(newPath)
    }
    getRentalsDetails():Observable<ListResponseModel<rentalsDetails>>{
      let newPath=this.apiUrl+"Rentals/GetRentalsDetails";
      return this.httpClient.get<ListResponseModel<rentalsDetails>>(newPath)
    }

    add(rental:Rentals):Observable<responseModel>{
      let newPath=this.apiUrl+"Rentals/add";    
       return this.httpClient.post<responseModel>(newPath,rental);
    }
  
    check(rental:Rentals):Observable<responseModel>{
      let newPath=this.apiUrl+"Rentals/add";
      return this.httpClient.post<responseModel>(newPath,rental);
  
    }
    isCarAvailable(carId:number): Observable<boolean>{

      let newApiUrl = this.apiUrl + "iscaravailable?carId=" + carId;
  
      return this.httpClient.get<boolean>(newApiUrl);
  
    }

  }
  