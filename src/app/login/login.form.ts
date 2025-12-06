import { FormControl, FormGroup, Validators } from '@angular/forms';

export function LoginForm(): FormGroup {
  return new FormGroup({
    countryCode: new FormControl('+91', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    terms: new FormControl(false, [Validators.requiredTrue]),
  });
}

export function VerifyOtpForm(): FormGroup {
  return new FormGroup({
    d1: new FormControl('', Validators.required),
    d2: new FormControl('', Validators.required),
    d3: new FormControl('', Validators.required),
    d4: new FormControl('', Validators.required),
    d5: new FormControl('', Validators.required),
    d6: new FormControl('', Validators.required),
  });
}
