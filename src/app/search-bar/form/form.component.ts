import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() submitted = new EventEmitter<String>();
  input = '';
  constructor() {}
  ngOnInit(): void {}

  handleInput(val: string) {
    this.input = val;
  }
  handleSubmit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.input);
  }
}
