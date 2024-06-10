import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import {
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  modalServise = inject(ModalService);
  form = new FormGroup({
    email: new FormControl('Enter Email', [
      Validators.required,
      Validators.email,
    ]),
    firstName: new FormControl('Enter First Name', Validators.required),
    lastName: new FormControl('Enter Last Name', Validators.required),
  });

  ngOnInit(): void {}

  addUser() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.modalServise.close();
    }
  }
}
