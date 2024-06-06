import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  userData = FormGroup;
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required, Validators.minLength(10)],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(6)],
  });

  errorMessage: string | null = null;
  loading = true;

  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.loading;
    this.authService
      .register(rawForm.email, rawForm.username, rawForm.password)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/home');
          this.loading = false;
        },
        error: (err) => {
          this.errorMessage = err.code;
        },
      });
  }
}
