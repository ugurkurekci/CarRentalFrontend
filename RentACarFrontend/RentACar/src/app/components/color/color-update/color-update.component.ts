import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorsService } from 'src/app/services/color-service/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  ColorUpdateGroup: FormGroup;
  constructor(private formbuilder: FormBuilder, private colorService: ColorsService, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.createColorUpdateForm();
  }
  createColorUpdateForm() {
    this.ColorUpdateGroup = this.formbuilder.group({
      colorId: ["", Validators.required],
      colorName: ["", Validators.required]
    })
  }
  Update() {
    if (this.ColorUpdateGroup.valid) {
      let colorModel = Object.assign({}, this.ColorUpdateGroup.value)
      this.colorService.update(colorModel).subscribe(response => {
        this.toastService.success(response.message, "Renk Güncellendi")
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
