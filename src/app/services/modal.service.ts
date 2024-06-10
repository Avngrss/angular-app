import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  iSVisible$ = new BehaviorSubject<boolean>(false);

  open() {
    this.iSVisible$.next(true);
  }

  close() {
    this.iSVisible$.next(false);
  }
}
