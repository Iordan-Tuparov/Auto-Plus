import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  mostLikesCars: Car[] = [];

  ngOnInit(): void {
    this.http.get<Car[]>('/api/cars/most-liked-cars').subscribe((cars) => {
      this.mostLikesCars = cars;
    });
  }
}
