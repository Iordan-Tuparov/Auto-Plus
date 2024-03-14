import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/utils/email.validator';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required, emailValidator(EMAIL_DOMAINS)],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  serverError: string = '';

  registerSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;

    this.userService.register(email, password).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        this.serverError = String(error.error.error);
      }
    );
  }
}
