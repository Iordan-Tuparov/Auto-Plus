import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  API: String = 'http://localhost:3000';

  register(username: String, password: String, repeatPassword: String) {
    return this.http.post(`${this.API}/auth/register`, {
      username,
      password,
      repeatPassword,
    });
  }
}
