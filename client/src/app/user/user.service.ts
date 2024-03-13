import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private api: ApiService, private Router: Router) {}

  register(username: string, password: string, repeatPassword: string) {
    // Todo
  }
}
