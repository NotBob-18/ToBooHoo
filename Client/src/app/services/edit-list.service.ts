import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environments'
import { tasks } from '../Interfaces/tasks';



@Injectable({
  providedIn: 'root'
})
export class EditListService {
  SERVER_URL: string = environment.SERVER_URL;


  constructor(private http: HttpClient) { }

  // single candidate
  createTask(id: string): Observable<tasks> {
    return this.http.get<tasks>(`${this.SERVER_URL}/create`);
  }
  
  deleteTask(id: string): Observable<tasks> {
    return this.http.get<tasks>(`${this.SERVER_URL}/delete/${id}`)

  }

  updateTask(id: string): Observable<tasks> {
    return this.http.get<tasks>(`${this.SERVER_URL}/update/${id}`)

  }

  readTask(id: string): Observable<tasks> {
    return this.http.get<tasks>(`${this.SERVER_URL}/readTsk/${id}`)

  }


  // search
  // onSearchByKeyword(skills: string[]): Observable<tasks[]> {
  //   return this.http.post<tasks[]>(
  //     `${this.SERVER_URL}/api/candidates/search`,
  //     { skills: skills }
  //   );
  // }

 


}



