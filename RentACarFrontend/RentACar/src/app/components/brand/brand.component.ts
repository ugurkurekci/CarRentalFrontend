import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Models/Entities/brand';
import { BrandService } from 'src/app/services/brand-service/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brand: Brand[] = [];
  dataLoaded = false;
  currentbrand: Brand;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrand();
  }
  getBrand() {
    this.brandService.getbrand().subscribe((response) => {
      this.brand = response.data;
      this.dataLoaded = true;
    });
  }
  setCurrentColor(brands: Brand) {
    this.currentbrand = brands;
  }

  getcurrentColorClass(brands:Brand) {
    if(brands==this.currentbrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }

  }
}
