import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Entities/customer';
import { CustomerService } from 'src/app/services/customer-service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerget:Customer[]=[];
  dataLoaded=false;

  constructor(private colorService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }
  getCustomer(){
    this.colorService.getCustomer().subscribe(response=>{
      this.customerget=response.data  
      this.dataLoaded=true;
    })
    }
  }
