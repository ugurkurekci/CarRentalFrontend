import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand-service/brand.service';
@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  
  BrandAddGroup: FormGroup;
  constructor(private formbuilder: FormBuilder, private brandService: BrandService, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.createBrandAddForm();


  }
  createBrandAddForm() {
    this.BrandAddGroup = this.formbuilder.group({
      brandId: ["", Validators.required],
      brandName: ["", Validators.required]
    })
  }

  add() {
    if (this.BrandAddGroup.valid) {
      let brandModel = Object.assign({}, this.BrandAddGroup.value)
      this.brandService.add(brandModel).subscribe(response => {
        this.toastService.success(response.message, "Marka Eklendi")
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          console.log(responseError.error.Errors)
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama Hatası")
          }
        }
      })
    }
    else {
      this.toastService.error("Bilgiler Eksik,Tekrar Kontrol Edin");
    }

  }
}
