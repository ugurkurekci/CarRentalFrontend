import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private toastrservice: ToastrService, private authService: AuthService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formbuilder.group({

      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let loginModel = Object.assign({}, this.loginForm.value)

      this.authService.login(loginModel).subscribe(data => {
        this.toastrservice.info(data.message)

        localStorage.setItem("token", data.data.token)
      }, dataError => {
        this.toastrservice.error(dataError.error)

      })
    }
  }

}
