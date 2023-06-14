import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoundsService {
  constructor(private http: HttpClient) { }

  getRounds(): Observable<any> {
    const url = 'http://127.0.0.1:8000/rounds/api/rounds'; // Replace with your Django server URL
    return this.http.get(url);
  }
  
}

