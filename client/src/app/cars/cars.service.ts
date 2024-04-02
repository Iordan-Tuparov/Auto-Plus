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
    information: string,
    price: string
  ) {
    return this.http.post<Car>('/api/cars/create', {
      model,
      year,
      horsePower,
      imageUrl,
      information,
      price,
    });
  }

  getAllCars() {
    return this.http.get<Car[]>('/api/cars/all-cars');
  }

  getOneCar(id: string) {
    return this.http.get<Car>(`/api/cars/get-one/${id}`);
  }

  deleteCar(id: string) {
    return this.http.delete(`/api/cars/delete-car/${id}`);
  }

  updateCar(
    id: string,
    model: string,
    year: string,
    horsePower: string,
    imageUrl: string,
    information: string,
    price: string
  ) {
    return this.http.put<Car>(`/api/cars/update-car/${id}`, {
      model,
      year,
      horsePower,
      imageUrl,
      information,
      price,
    });
  }

  likeCar(carId: string) {
    return this.http.put<Car>(`/api/cars/like-car/${carId}`, {});
  }

  getMostLikedCars() {
    return this.http.get<Car[]>('/api/cars/most-liked-cars');
  }

  getUserLikedCars() {
    return this.http.get<Car[]>('/api/cars/get-user-liked');
  }

  commentCar(text: string, creatorEmail: string, carId: string) {
    return this.http.put<Car>(`/api/cars/comment/${carId}`, {
      text,
      creatorEmail,
    });
  }

  deleteComment(commentId: string, carId: string) {
    return this.http.put<Car>(`/api/cars/comment-delete/${carId}`, { commentId });
  }
}
