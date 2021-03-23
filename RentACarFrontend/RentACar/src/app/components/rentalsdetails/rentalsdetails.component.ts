import { Component, OnInit } from '@angular/core';
import { rentalsDetails } from 'src/app/Models/rentalsDetails';
import { RentalsDetailsService } from 'src/app/services/rentals-details.service';

@Component({
  selector: 'app-rentalsdetails',
  templateUrl: './rentalsdetails.component.html',
  styleUrls: ['./rentalsdetails.component.css']
})
export class RentalsdetailsComponent implements OnInit {

  rentalsdetails:rentalsDetails[]=[];
  dataLoaded=false;

  constructor(private rentalsdetailsService:RentalsDetailsService) { }

  ngOnInit(): void {
    this.getrentailsDetails();
  }
  getrentailsDetails(){
    this.rentalsdetailsService.getRentalsDetails().subscribe(response=>{
      this.rentalsdetails=response.data  
      this.dataLoaded=true;
    })
    }
  }

