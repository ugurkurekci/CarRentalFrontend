import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { rentalsDetails } from '../../Models/Dto/rentalsDetails';
import { Customer } from '../../Models/Entities/customer';
import { Rentals } from '../../Models/Entities/rentals';
import { CustomerService } from '../../services/customer-service/customer.service';
import { RentalsDetailsService } from '../../services/rentals-service/rentals-details.service';

@Component({
  selector: 'app-rentacar',
  templateUrl: './rentacar.component.html',
  styleUrls: ['./rentacar.component.css'],
})
export class RentacarComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private rentalService: RentalsDetailsService,
    private router: Router,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) {}
  rentCarForm: FormGroup;

  rental: Rentals;

  rentalsDetails: rentalsDetails[];
  rentals: Rentals[];
  customers: Customer[];

  rentalId:number;
  carId: number;
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  id:number;
  brandName:number;

  
  currentCustomerId: number;

  paymentCheck: boolean;
  
  ngOnInit(): void {
    this.createRentCarForm();
    this.getCustomer();
    this.getRentals();
  }
  createRentCarForm() {
    this.rentCarForm = this.formBuilder.group({
      customerId:['', Validators.required],
      carId:['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  check() {
    this.rental = {
      rentalId: this.rentalId,
      customerId: this.customerId,
      carId:this.brandName,
      rentDate: this.rentDate,
      returnDate: this.returnDate,
    };

    console.log(this.rental);

    this.rentalService.add(this.rental).subscribe(
      (data) => {
        this.paymentCheck = true;
        this.toastrService.success(data.message, 'Başarılı');
        this.router.navigate(['payment']);
      },
      (dataError) => {
        this.toastrService.error(
          'Araba bu tarihler arasında kiralanamaz ',
          'Başarısız'
        );
       
      }
    );
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe((response) => {
      (this.customers = response.data), console.log(response.data);
    });
  }
  getRentals() {
    this.rentalService.getRentalsDetails().subscribe((response) => {
      (this.rentalsDetails = response.data), console.log(response.data);
    });
  }
  getSelectedCustomer(customerId: number) {
    if (this.customerId == customerId) {
      console.log('customerId');
      return true;
    } else {
      return false;
    }
  }
  getSelectedCarId(carId: number) {
    if (this.carId == carId) {
      console.log('carId');
      return true;
    } else {
      return false;
    }
  }
}
