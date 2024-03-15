import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import { BehaviorSubject, Subscription, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  user$$ = new BehaviorSubject<User | undefined>(undefined);
  user$ = this.user$$.asObservable();

  user: User | undefined;

  get isLoggin(): boolean {
    if (this.user === undefined) {
      return true;
    } else {
      return false;
    }
  }

  Subscription: Subscription;

  constructor(private http: HttpClient) {
    this.Subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  register(email: String, password: String) {
    return this.http
      .post<User>('/api/auth/register', {
        email,
        password,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: String, password: String) {
    return this.http
      .post<User>('/api/auth/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post<User>('/api/auth/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
