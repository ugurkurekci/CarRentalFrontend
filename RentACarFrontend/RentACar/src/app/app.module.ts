import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { ColorsComponent } from 'src/app/components/colors/colors.component';
import { RentalsdetailsComponent } from './components/rentalsdetails/rentalsdetails.component';
import { CarComponent } from './components/car/car.component';



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    
    ColorsComponent,
    BrandComponent,
    CustomerComponent,
    CarDetailsComponent,
    RentalsdetailsComponent,
    CarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
