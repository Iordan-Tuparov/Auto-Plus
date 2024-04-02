import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/types/car';
import { UserService } from 'src/app/user/user.service';
import { CarsService } from '../cars.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  commentForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private carService: CarsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.commentForm = this.fb.group({
      text: ['', [Validators.required]],
    });
  }

  get isLoggedIn() {
    return this.userService.isLoggin;
  }

  get userEmail() {
    return this.userService.user?.email;
  }

  get userId() {
    return this.userService.user?._id;
  }

  currentCar = {} as Car;
  carCreator: Boolean = false;
  carLiked: Boolean = false;
  deleteModal: Boolean = false;
  commentModal: Boolean = false;

  ngOnInit(): void {
    this.currentCar = this.activatedRoute.snapshot.data['car'];

    this.carCreator = this.userService.user?._id == this.currentCar?._owner;

    this.currentCar.userLikes.forEach((x) => {
      this.carLiked = !!(x == this.userService.user?._id);
    });
  }

  openCommentModal(): Boolean {
    return (this.commentModal = true);
  }

  closeCommentModal(): Boolean {
    return (this.commentModal = false);
  }

  openDeleteModal(): Boolean {
    return (this.deleteModal = true);
  }

  closeDeleteModal(): Boolean {
    return (this.deleteModal = false);
  }

  deleteCar() {
    this.carService.deleteCar(this.currentCar._id).subscribe(() => {
      this.router.navigate(['/cars/catalog']);
    });
  }

  likeCar() {
    this.carService.likeCar(this.currentCar._id).subscribe((car) => {
      this.currentCar = car;
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`/cars/details/${this.currentCar._id}`]);
      });
    });
  }

  addComment() {
    if (this.commentForm.invalid) {
      return;
    }

    const text = this.commentForm.get('text')?.value;

    this.carService
      .commentCar(text, this.userEmail!, this.currentCar._id)
      .subscribe((car) => {
        this.currentCar = car;
      });

    this.commentForm.reset();
  }
}
