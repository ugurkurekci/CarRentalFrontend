import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car-service/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  CarAddGroup: FormGroup;
  constructor(private formbuilder: FormBuilder, private carService: CarService, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();


  }
  createCarAddForm() {
    this.CarAddGroup = this.formbuilder.group({
      id: ["", Validators.required],
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required]
      
    })
  }

  add(){
    if (this.CarAddGroup.valid) {
      let carModel=Object.assign({},this.CarAddGroup.value)
      this.carService.add(carModel).subscribe(data=>{
        this.toastService.success(data.message,"Araba Eklendi")
      }, dataError=>{
        if (dataError.error.Errors.length>0) {
          console.log(dataError.error.Errors)
          for (let i = 0; i < dataError.error.Errors.length; i++) {
            this.toastService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
                              
          }
        }
      })
    }
    else{
      this.toastService.error("Bilgiler Eksik")
    }
  }
}
