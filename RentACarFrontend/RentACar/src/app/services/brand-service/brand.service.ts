import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../../Models/Entities/brand';
import { ListResponseModel } from 'src/app/Models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:5001/api/Brand/';

  constructor(private httpClient: HttpClient) {}

  getbrand(): Observable<ListResponseModel<Brand>> {
    let newPath: string = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
