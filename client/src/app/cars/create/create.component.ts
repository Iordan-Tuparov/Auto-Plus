import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';
import { urlValidate } from 'src/app/utils/url.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carsService: CarsService,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      model: ['', [Validators.required]],
      year: ['', [Validators.required]],
      horsePower: ['', [Validators.required]],
      imageUrl: ['', [Validators.required], urlValidate('imageUrl')],
      information: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  createSubmit(): void {
    if (this.createForm.invalid) {
      return;
    }

    const model = this.createForm.get('model')?.value;
    const year = this.createForm.get('year')?.value;
    const horsePower = this.createForm.get('horsePower')?.value;
    const imageUrl = this.createForm.get('imageUrl')?.value;
    const information = this.createForm.get('information')?.value;
    const price = this.createForm.get('price')?.value;

    this.carsService
      .createCar(model, year, horsePower, imageUrl, information, price)
      .subscribe(() => this.router.navigate(['/cars/catalog']));
  }
}
