import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorsService } from 'src/app/services/color-service/color.service';

@Component({
  selector: 'app-color-delete',
  templateUrl: './color-delete.component.html',
  styleUrls: ['./color-delete.component.css']
})
export class ColorDeleteComponent implements OnInit {

  ColorDeleteGroup: FormGroup;
  constructor(private formbuilder: FormBuilder, private colorService: ColorsService, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.createColorDeleteForm();
  }
  createColorDeleteForm() {
    this.ColorDeleteGroup = this.formbuilder.group({
      colorId: ["", Validators.required],
      
    })
  }
  Delete() {
    if (this.ColorDeleteGroup.valid) {
      let colorModel = Object.assign({}, this.ColorDeleteGroup.value)
      this.colorService.delete(colorModel).subscribe(response => {
        this.toastService.success(response.message, "Renk Silindi")
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
