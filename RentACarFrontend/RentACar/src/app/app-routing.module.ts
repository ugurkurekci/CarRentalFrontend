import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brandcomponents/brand.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car/car.component';
import { ColorsComponent } from './components/color/colorscomponents/colors.component';
import { RentalsdetailsComponent } from './components/rentalsdetails/rentalsdetails.component';
import { RentacarComponent } from './components/rentacar/rentacar.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandDeleteComponent } from './components/brand/brand-delete/brand-delete.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { ColorDeleteComponent } from './components/color/color-delete/color-delete.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  
  { path: 'colors', component: ColorsComponent },
  { path: 'color/add', component: ColorAddComponent },
  { path: 'color/update', component: ColorUpdateComponent },
  { path: 'color/delete', component: ColorDeleteComponent },

  { path: 'brand', component: BrandComponent },
  { path: 'brand/add', component: BrandAddComponent },
  { path: 'brand/update', component: BrandUpdateComponent },
  { path: 'brand/delete', component: BrandDeleteComponent },

  { path: 'car/add', component: CarAddComponent },
  { path: 'car', component: CarComponent },

  { path: 'rentals', component: RentalsdetailsComponent },
  { path: 'rentalsdetails', component: RentacarComponent },

  { path: 'car/brand/:brandId', component: CarComponent },
  { path: 'car/brand/:carId', component: CarComponent },
  { path: 'car/color/:colorId', component: CarComponent },
  { path: 'car/color/:carId', component: CarComponent },
  { path: 'car/details/:carId', component: CarDetailComponent },
  { path: 'car/filter/:brandId/:colorId', component: CarComponent },
  { path: 'car/:brandId/:colorId', component: CarComponent },
  { path: 'car/brand/:brandId/color/:colorId', component: CarComponent },
  { path: 'car/:brandId/:colorId', component: CarComponent },
  { path: 'rent-car/:carId', component: RentacarComponent },
  { path: 'car/carfilter/:brandId/:colorId', component: CarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
