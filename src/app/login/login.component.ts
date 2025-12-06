import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginForm, VerifyOtpForm } from './login.form';

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

  otpForm = VerifyOtpForm();
  otpControls = ['d1', 'd2', 'd3', 'd4', 'd5', 'd6'];

  constructor() {}

  get mobile() {
    return this.loginForm.get('mobile');
  }

  get email() {
    return this.loginForm.get('email');
  }

  // Get Full OTP
  getOtp(): string {
    return this.otpControls.map((key) => this.otpForm.get(key)?.value).join('');
  }

  // Move next / previous on typing
  onKeyUp(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;

    if (input.value && index < 5) {
      // Move to next
      const next = document.querySelectorAll('.otp-box')[
        index + 1
      ] as HTMLInputElement;
      next.focus();
    }

    if (!input.value && event.key === 'Backspace' && index > 0) {
      // Move to previous
      const prev = document.querySelectorAll('.otp-box')[
        index - 1
      ] as HTMLInputElement;
      prev.focus();
    }
  }

  // Handle paste full OTP
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pasteData = event.clipboardData?.getData('text') ?? '';

    if (pasteData.length === 6) {
      pasteData.split('').forEach((char, i) => {
        this.otpForm.controls[this.otpControls[i]].setValue(char);
      });

      // Move to last box
      const last = document.querySelectorAll('.otp-box')[5] as HTMLInputElement;

      last.focus();
    }
  }

  onClick() {
    if (this.isVerifyPage) {
      this.onVerify();
    } else {
      this.onLoginContinue();
    }
  }

  onLoginContinue() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.isVerifyPage = true;
    }
  }

  onVerify() {
    if (this.loginForm.valid) {
      this.isVerifyPage = false;
      const verifyData = {
        email: this.loginForm.value.email,
        mobile: this.loginForm.value.mobile,
        otp: this.getOtp(),
      };
      console.log('Verifying with data:', verifyData);
    }
  }
}
