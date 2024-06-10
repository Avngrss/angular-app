import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { IUsersApi } from '../../types/users.interface';
import { AsyncPipe, NgFor, DatePipe, NgIf } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    AsyncPipe,
    DataTablesModule,
    MatButtonModule,
    NgFor,
    DatePipe,
    ModalComponent,
    NgIf,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserlistComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient) {
    this.fetchUsers();
  }
  modalServices = inject(ModalService);
  loading = false;
  users: IUsersApi[] = [];
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full',
      searching: true,
      language: {
        searchPlaceholder: 'Search user...',
      },
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  deleteUser(user: IUsersApi) {
    if (
      confirm(
        `Do you want to delete this user ${user.name.first} ${user.name.last}?`
      )
    ) {
      this.users = this.users.filter((u) => u !== user);
    }
  }

  fetchUsers() {
    this.loading = true;
    this.http
      .get<{ results: IUsersApi[] }>('https://randomuser.me/api/?results=50')
      .subscribe((response) => {
        this.users = response.results;
        this.dtTrigger.next(null);
        this.loading = false;
      });
  }
}
