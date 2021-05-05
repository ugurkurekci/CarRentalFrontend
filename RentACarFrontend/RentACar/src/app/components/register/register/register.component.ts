import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register-service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterAddGroup: FormGroup;

  constructor(private formbuilder: FormBuilder, private toastService: ToastrService, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.createRegisterAddForm();
  }
  createRegisterAddForm() {
    this.RegisterAddGroup = this.formbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    })
  }
  add() {
    if (this.RegisterAddGroup.valid) {
      let registerModel = Object.assign({}, this.RegisterAddGroup.value)
      this.registerService.add(registerModel).subscribe(response => {
        this.toastService.success(response.message, "Başarıyla Kayıt Olundu")
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          console.log(responseError.error.Errors)
          for (let i = 0; i < responseError.error.Error.length; i++) {
            this.toastService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama Hatası")

          }
        }
      })
    }
    else {
      this.toastService.error("Bilgiler Eksik Tekrar Kontrol Edin")
    }
  }

}
