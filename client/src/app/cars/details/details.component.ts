import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  currentCar = {} as Car;

  ngOnInit(): void {
    this.currentCar = this.activatedRoute.snapshot.data['car'];
  }
}
