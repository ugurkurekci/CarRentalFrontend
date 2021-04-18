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
  filterBrand = '';

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

  getcurrentColorClass(brands: Brand) {
    if (brands == this.currentbrand) {
      return 'list-group-item list-group-item-action list-group-item-success';
    } else {
      return 'list-group-item list-group-item-action list-group-item-dark'; 
    }
    
  }
  getcurrentAllColorClass(brands: Brand) {
    if (brands == this.currentbrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item list-group-item-action list-group-item-dark'; 
    }
    
  }
  getAllBrandsClass() {
    if (!this.currentbrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item list-group-item-action list-group-item-dark';
    }
  }
}
