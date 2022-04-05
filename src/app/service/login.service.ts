import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Password } from '../interface/Password';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5000/passwords';

  constructor(private http:HttpClient) { }

  getPassword(): Observable<Password[]>{
    return this.http.get<Password[]>(this.apiUrl);
  }
}
