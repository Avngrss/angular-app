import { Component, OnInit, inject } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user?.email!,
          username: user?.displayName!,
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
