import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/Models/loginModel';
import { SingleResponseModel } from 'src/app/Models/singleResponseModel';
import { TokenModel } from 'src/app/Models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://localhost:5001/api/Auth/"

  constructor(private httpclient: HttpClient) { }

  login(loginModel: LoginModel){
    return this.httpclient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'login', loginModel);
  }

  isAuthenticated() {
    if (localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
