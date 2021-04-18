import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car/car.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { BrandComponent } from './components/brand/brandcomponents/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorsComponent } from 'src/app/components/color/colorscomponents/colors.component';
import { RentalsdetailsComponent } from './components/rentalsdetails/rentalsdetails.component';
import { ToastrModule } from 'ngx-toastr';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterCarPipePipe } from './pipes/filter-car-pipe.pipe';
import { RentacarComponent } from './components/rentacar/rentacar.component';
import { FilterCarComponent } from './components/car/filtercar/filter-car/filter-car.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    ColorsComponent,
    BrandComponent,
    CustomerComponent,
    RentalsdetailsComponent,
    CarComponent,
    CarDetailComponent,
    VatAddedPipe,
    FilterBrandPipePipe,
    FilterColorPipePipe,
    FilterCarPipePipe,
    
    RentacarComponent,
    FilterCarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
