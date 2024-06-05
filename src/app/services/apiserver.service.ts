import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserverService {
  http = inject(HttpClient);

  getUsers(): Observable<any> {
    return this.http.get('https://randomuser.me/api/?results=50');
  }
}
