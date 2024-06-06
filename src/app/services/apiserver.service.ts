import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../types/users.interface';
// import { Post } from '../types/post.interface';
import { delay } from 'rxjs/internal/operators/delay';

@Injectable({
  providedIn: 'root',
})
export class ApiserverService {
  public http = inject(HttpClient);

  public getUsers(): Observable<Users[]> {
    return this.http
      .get<Users[]>('https://randomuser.me/api/?results=50')
      .pipe(delay(2000));
  }
}
