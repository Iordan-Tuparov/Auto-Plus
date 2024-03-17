import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../types/car';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  createCar(
    model: string,
    year: string,
    horsePower: string,
    imageUrl: string,
    information: string
  ) {
    return this.http.post<Car>('/api/cars/create', {
      model,
      year,
      horsePower,
      imageUrl,
      information,
    });
  }

  getAllCars() {
    return this.http.get<Car[]>('/api/cars/all-cars');
  }
}
