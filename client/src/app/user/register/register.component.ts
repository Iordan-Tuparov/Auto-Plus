import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/utils/email.validator';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { matchPasswordsValidator } from 'src/app/utils/match-passwords-validator';

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
      passGroup: this.fb.group(
        {
          password: ['', [Validators.required]],
          repeatPassword: ['', [Validators.required]],
        },
        {
          validators: [matchPasswordsValidator('password', 'repeatPassword')],
        }
      ),
    });
  }

  get passGroup() {
    return this.registerForm.get('passGroup');
  }

  serverError: string = '';

  registerSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('passGroup')?.get('password')?.value;

    console.log(email, password);

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
