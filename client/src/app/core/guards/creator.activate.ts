import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Observable, Subject } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { CarsService } from 'src/app/cars/cars.service';

@Injectable({
  providedIn: 'root',
})
export class CreatorGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private carService: CarsService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const accessGrantedSubject = new Subject<boolean>();

    const carId = next.params['id'];

    const userId = this.userService.user?._id;

    this.carService
      .getOneCar(carId)
      .pipe(
        switchMap((car) => {
          if (car?._owner == userId) {
            accessGrantedSubject.next(true);
          } else {
            this.router.navigate(['/not-found']);
            accessGrantedSubject.next(false);
          }
          return accessGrantedSubject.pipe(take(1));
        })
      )
      .subscribe();

    return accessGrantedSubject.asObservable();
  }
}
