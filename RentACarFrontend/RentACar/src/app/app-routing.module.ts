import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brandcomponents/brand.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car/car.component';
import { ColorsComponent } from './components/color/colorscomponents/colors.component';
import { RentalsdetailsComponent } from './components/rentalsdetails/rentalsdetails.component';
import { RentacarComponent } from './components/rentacar/rentacar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'brand', component: BrandComponent },
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
  { path: 'car/add', component: CarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
