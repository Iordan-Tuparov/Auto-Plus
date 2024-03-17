import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  constructor(private carsService: CarsService) {}

  cars: Car[] = [];

  ngOnInit(): void {
    this.carsService.getAllCars().subscribe({
      next: (cars) => {
        this.cars = cars;
      },
    });
  }
}
