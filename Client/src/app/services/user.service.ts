import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { login } from '../Interfaces/login';
import { users } from '../Interfaces/users';
import { Router } from '@angular/router'
import { environment } from 'src/app/environments/environments'


@Injectable({
  providedIn: 'root'
})
export class UserService {
    SERVER_URL: string = environment.SERVER_URL;

    userData?: users;

  constructor(private http: HttpClient, private router: Router) { }

  signIn(users: users): Observable<login> {
    console.log(users);
    return this.http.post<users>(`${this.SERVER_URL}/api/login`, users);
  }

  registerUser(users: users): Observable<users> {
    console.log(users);
    
    return this.http.post<users>(`${this.SERVER_URL}/api/register`, users);
  } 

  saveToStorage(user: users) {
    localStorage.setItem('user', JSON.stringify(user));
  };
  

  getUserData() {
    if (localStorage.getItem('user')) {
      this.userData = JSON.parse(localStorage.getItem('user') || '');
    }
    return this.userData;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
