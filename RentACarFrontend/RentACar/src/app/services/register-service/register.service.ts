import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from 'src/app/Models/Entities/registerModel';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { SingleResponseModel } from 'src/app/Models/singleResponseModel';
import { TokenModel } from 'src/app/Models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = "https://localhost:5001/api/Auth/"

  constructor(private httpClient: HttpClient) { }

  add(register: Register) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'register', register)
  }
  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }

}
