import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/utils/email.validator';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, emailValidator(EMAIL_DOMAINS)],
      password: ['', Validators.required],
    });
  }

  serverError: string = '';

  loginSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm?.get('email')?.value;
    const password = this.loginForm?.get('password')?.value;

    this.userService.login(email, password).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        this.serverError = String(error.error.error);
      }
    );
  }
}
