import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PicDes } from '../interface/PicDes';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private apiUrl = 'http://localhost:5000/picDes';

  constructor(private http:HttpClient) { }

  getProgressList():Observable<PicDes[]>{
    return this.http.get<PicDes[]>(this.apiUrl);
  }
}
