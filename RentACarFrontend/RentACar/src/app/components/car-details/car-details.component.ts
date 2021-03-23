import { Component, OnInit } from '@angular/core';
import { CarDetails } from 'src/app/Models/carDetails';
import { CarDetailsService } from 'src/app/services/car-details.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carDetails:CarDetails[]=[];
  dataLoaded=false;

  constructor(private carDetailsService:CarDetailsService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }
  getCarDetails(){
    this.carDetailsService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data  
      this.dataLoaded=true;
    })
    }
  }
