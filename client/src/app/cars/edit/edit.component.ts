import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/types/car';
import { urlValidate } from 'src/app/utils/url.validator';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  editForm: FormGroup;

  currentCar = {} as Car;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private carService: CarsService,
    private router: Router
  ) {
    if (this.activatedRoute.snapshot.data['car']) {
      this.currentCar = this.activatedRoute.snapshot.data['car'];
    }

    this.editForm = this.fb.group({
      model: [this.currentCar.model, [Validators.required]],
      year: [this.currentCar.year, [Validators.required]],
      horsePower: [this.currentCar.horsePower, [Validators.required]],
      imageUrl: [
        this.currentCar.imageUrl,
        [Validators.required],
        urlValidate('imageUrl'),
      ],
      information: [this.currentCar.information, [Validators.required]],
      price: [this.currentCar.price, [Validators.required]],
      started: [false],
    });
  }

  editCar() {
    if (this.editForm.invalid) {
      return;
    }

    const model = this.editForm.get('model')?.value;
    const year = this.editForm.get('year')?.value;
    const horsePower = this.editForm.get('horsePower')?.value;
    const imageUrl = this.editForm.get('imageUrl')?.value;
    const information = this.editForm.get('information')?.value;
    const price = this.editForm.get('price')?.value;

    this.carService
      .updateCar(
        this.currentCar._id,
        model,
        year,
        horsePower,
        imageUrl,
        information,
        price
      )
      .subscribe(() => {
        this.router.navigate([`/cars/details/${this.currentCar._id}`]);
      });
  }
}
