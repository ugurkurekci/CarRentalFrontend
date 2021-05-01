import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand-service/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  BrandUpdateGroup: FormGroup
  constructor(private formbuilder: FormBuilder, private brandService: BrandService, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.createBrandUpdateForm();
  }
  createBrandUpdateForm() {
    this.BrandUpdateGroup = this.formbuilder.group({
      brandId: ["", Validators.required],
      brandName: ["", Validators.required]
    })
  }

  update(){
    if (this.BrandUpdateGroup.valid) {
      let brandModel=Object.assign({},this.BrandUpdateGroup.value)
      this.brandService.update(brandModel).subscribe(response=>{
        this.toastService.success(response.message,"Marka Güncellendi")
      },responseError=>{
        if (responseError.error.Errors.length>0) {
          console.log(responseError.error.Errors)
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
      })
    }
    else{
      this.toastService.error("Bilgiler Eksik Lütfen Tekrar Kontrol Edin")
    }
  }


}
