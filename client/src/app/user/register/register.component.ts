import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    private Router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  registerSubmit(): void {
    this.userService
      .register(
        this.registerForm.get('email')?.value!,
        this.registerForm.get('password')?.value!
      )
      .subscribe(() => this.Router.navigate(['/home']));
  }
}
