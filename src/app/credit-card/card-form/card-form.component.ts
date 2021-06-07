import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(4), Validators.required]),
    cardNumber: new FormControl('', [
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.required,
    ]),
    expDate: new FormControl(''),
    securityCode: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.cardForm.value);
  }
}
