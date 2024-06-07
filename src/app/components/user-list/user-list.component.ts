import { Component, inject, OnInit } from '@angular/core';
import { ApiserverService } from '../../services/apiserver.service';
import { Observable, tap } from 'rxjs';
import { Users } from '../../types/users.interface';
import { AsyncPipe } from '@angular/common';

// import { Post } from '../../types/post.interface';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserlistComponent implements OnInit {
  apiServer = inject(ApiserverService);
  loading = false;
  users$?: Observable<Users[]>;

  public ngOnInit(): void {
    this.apiServer.getUsers().subscribe((res) => console.log(res));
    this.loading = true;
    this.users$ = this.apiServer
      .getUsers()
      .pipe(tap(() => (this.loading = false)));
  }
}
