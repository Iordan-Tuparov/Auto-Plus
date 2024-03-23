import { Injectable } from '@angular/core';
import { CarsService } from './cars.service';
import { Car } from '../types/car';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarResolver implements Resolve<Car> {
  constructor(private carService: CarsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Car> | Promise<Car> | Car {
    return this.carService.getOneCar(route.params['id']);
  }
}
