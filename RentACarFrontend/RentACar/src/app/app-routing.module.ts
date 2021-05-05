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
import { LoginComponent } from './components/login/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register/register.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  
  { path: 'colors', component: ColorsComponent },
  { path: 'color/add', component: ColorAddComponent,canActivate:[LoginGuard] },
  { path: 'color/update', component: ColorUpdateComponent,canActivate:[LoginGuard] },
  { path: 'color/delete', component: ColorDeleteComponent,canActivate:[LoginGuard] },

  { path: 'brand', component: BrandComponent },
  { path: 'brand/add', component: BrandAddComponent,canActivate:[LoginGuard] },
  { path: 'brand/update', component: BrandUpdateComponent,canActivate:[LoginGuard] },
  { path: 'brand/delete', component: BrandDeleteComponent,canActivate:[LoginGuard] },

  { path: 'car/add', component: CarAddComponent,canActivate:[LoginGuard] },
  { path: 'car', component: CarComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'rentals', component: RentalsdetailsComponent },
  { path: 'rentalsdetails', component: RentacarComponent },
  { path: 'contact', component: ContactComponent },


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
