import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CarsService } from 'src/app/cars/cars.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
    private carService: CarsService
  ) {}

  get email(): string {
    return this.userService.user?.email || '';
  }

  cars: Car[] = [];
  loading: Boolean = true;

  ngOnInit(): void {
    this.carService.getUserLikedCars().subscribe((cars) => {
      this.cars = cars;
      this.loading = false;
    });
  }
}
