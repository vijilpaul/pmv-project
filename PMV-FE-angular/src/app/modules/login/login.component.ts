import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/Authentication/auth.service';
import { ApiService } from 'src/app/core/api.service';
import { FlashService } from 'src/app/core/flash.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authForm!: FormGroup;
  loginError: string = '';
  showPass = false;

  constructor(
    private fb: FormBuilder,
    private _flash: FlashService,
    private authService: AuthService,
    private router: Router,
    private service: ApiService
  ) { }

  ngOnInit() {
    this.authForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
  async login() {
    if (this.authForm.value) {
      const isLogin = await this.authService.login(this.authForm.value);
      if (isLogin) {
        this._flash.success("Login Successfull")
        this.router.navigate(['/my-profile']);
      } else {
        this._flash.error("Login Failed");
      }
    }

  }
}
