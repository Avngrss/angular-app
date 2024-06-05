import { Observable } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ApiserverService } from './services/apiserver.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  apiServer = inject(ApiserverService);

  ngOnInit(): void {
    this.apiServer.getUsers();
  }
}
