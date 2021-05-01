import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand-service/brand.service';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.css']
})
export class BrandDeleteComponent implements OnInit {

  BrandDeleteGroup:FormGroup
  constructor(private formbuilder:FormBuilder,private brandService:BrandService,private toastService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandDeleteForm();
  }
  createBrandDeleteForm() {
    this.BrandDeleteGroup = this.formbuilder.group({
      brandId: ["", Validators.required],
      
    })
  }

  delete(){
    if (this.BrandDeleteGroup.valid) {
      let brandModel=Object.assign({},this.BrandDeleteGroup.value)
      this.brandService.delete(brandModel).subscribe(response=>{
        this.toastService.success(response.message,"Marka Silindi")
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
