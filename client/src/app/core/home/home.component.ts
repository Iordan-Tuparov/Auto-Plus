import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/cars/cars.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private carService: CarsService) {}

  mostLikesCars: Car[] = [];
  loading: Boolean = true;

  ngOnInit(): void {
    this.carService.getMostLikedCars().subscribe((cars) => {
      this.mostLikesCars = cars;
      this.loading = false;
    });
  }
}
