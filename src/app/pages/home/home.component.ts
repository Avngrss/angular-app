import { Component } from '@angular/core';
import { UserlistComponent } from '../../components/user-list/user-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserlistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
