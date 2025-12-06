import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginForm } from './login.form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = LoginForm();
  isVerifyPage = false;

  constructor() {}

  get mobile() {
    return this.loginForm.get('mobile');
  }

  get email() {
    return this.loginForm.get('email');
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.isVerifyPage = true;
    }
  }
}
