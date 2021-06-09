import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css'],
})
export class CardInputComponent implements OnInit {
  @Input() label = '';
  @Input() inputType: string;

  @Input() control: FormControl;
  constructor() {}

  ngOnInit(): void {
    console.log(this.control);
  }

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
