import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Models/brand';

import {brandResponseModel} from 'src/app/Models/brandResponseModel';  
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand:Brand[]=[];
  dataLoaded=false;

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrand();
  }
  getBrand(){
    this.brandService.getbrand().subscribe(response=>{
      this.brand=response.data  
      this.dataLoaded=true;
    })
    }
  }

      
