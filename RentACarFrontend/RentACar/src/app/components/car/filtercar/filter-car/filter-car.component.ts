import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/Models/Entities/brand';
import { Colors } from 'src/app/Models/Entities/colors';
import { BrandService } from 'src/app/services/brand-service/brand.service';
import { ColorsService } from 'src/app/services/color-service/color.service';

@Component({
  selector: 'app-filter-car',
  templateUrl: './filter-car.component.html',
  styleUrls: ['./filter-car.component.css'],
})
export class FilterCarComponent implements OnInit {
  colors: Colors[] = [];
  brands: Brand[] = [];
  dataLoaded: false;

  brandId: number;
  colorId: number;
  constructor(
    private colorService: ColorsService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getSelectedBrand(params['brandId']);
      this.getSelectedColor(params['colorId']);
      this.getColor();
      this.getBrand();
    });
  }
  getColor() {
    this.colorService.getColor().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrand() {
    this.brandService.getbrand().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getSelectedBrand(brandId: number) {
    if (this.brandId == brandId) {
      console.log('brandId');
      return true;
    } else {
      return false;
    }
  }

  getSelectedColor(colorId: number) {
    if (this.colorId == colorId) {
      console.log('colorId');
      return true;
    } else {
      return false;
    }
  }
}
