import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorsService } from 'src/app/services/color-service/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  ColorAddGroup: FormGroup;
  constructor(private formbuilder: FormBuilder, private colorService: ColorsService, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm() {
    this.ColorAddGroup = this.formbuilder.group({
      colorId: ["", Validators.required],
      colorName: ["", Validators.required]
    })
  }
  add() {
    if (this.ColorAddGroup.valid) {
      let colorModel = Object.assign({}, this.ColorAddGroup.value)
      this.colorService.add(colorModel).subscribe(response => {
        this.toastService.success(response.message, "Renk Eklendi")
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
