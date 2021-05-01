import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colors } from 'src/app/Models/Entities/colors';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { responseModel } from 'src/app/Models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  apiUrl = 'https://localhost:5001/api/Color/'

  constructor(private httpClient:HttpClient) {}

  getColor():Observable<ListResponseModel<Colors>>{
    let newPath:string=this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Colors>>(newPath)
  }
  add(color:Colors):Observable<responseModel>{
    return this.httpClient.post<responseModel>(this.apiUrl+'add',color)
  }
  update(color: Colors): Observable<responseModel> {
    return this.httpClient.post<responseModel>(this.apiUrl+'update', color);
  }
  delete(color: Colors): Observable<responseModel> {
    return this.httpClient.post<responseModel>(this.apiUrl+'delete', color);
  }
}