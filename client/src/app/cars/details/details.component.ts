import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/types/car';
import { UserService } from 'src/app/user/user.service';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private carService: CarsService,
    private router: Router
  ) {}

  get isLoggedIn() {
    return this.userService.isLoggin;
  }

  currentCar = {} as Car;
  carCreator: Boolean = false;
  carLiked: Boolean = false;
  modalOpened: Boolean = false;

  ngOnInit(): void {
    this.currentCar = this.activatedRoute.snapshot.data['car'];

    this.carCreator = this.userService.user?._id == this.currentCar?._owner;

    this.currentCar.userLikes.forEach((x) => {
      this.carLiked = !!(x == this.userService.user?._id);
    });
  }

  openModal(): Boolean {
    return (this.modalOpened = true);
  }

  closeModal(): Boolean {
    return (this.modalOpened = false);
  }

  deleteCar() {
    this.carService.deleteCar(this.currentCar._id).subscribe(() => {
      this.router.navigate(['/cars/catalog']);
    });
  }

  likeCar() {
    this.carService.likeCar(this.currentCar._id).subscribe((car) => {
      this.currentCar = car;
    });
  }
}
