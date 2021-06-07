import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css'],
})
export class CardInputComponent implements OnInit {
  @Input() label: string;
  @Input() inputType: HTMLInputElement['type'] = 'string';
  @Input() control: FormControl;
  constructor() {}

  ngOnInit(): void {}
}
