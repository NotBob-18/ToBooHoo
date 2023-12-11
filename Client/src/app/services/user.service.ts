import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { User } from '../Interfaces/users';
import { Router } from '@angular/router'
import { environment } from 'src/app/environments/environments'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  remove(id: any) {
    throw new Error('Method not implemented.');
  
  }
    userData?: User;

  constructor(private http: HttpClient, private router: Router) { }

  private baseUrl = 'http://localhost:8000/api'

  
// register function
register(user:User): Observable<User> {
  return this.http.post<User>(`${this.baseUrl}/register`, user
);
}

// login function
login(user:User): Observable<User> {
  return this.http.post<User>(`${this.baseUrl}/login`, user
);
} 

  saveToStorage(user: User) {
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
