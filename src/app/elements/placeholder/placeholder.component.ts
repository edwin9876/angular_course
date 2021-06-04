import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  @Input() hasHeader = true;
  lineArray = [];
  constructor() {}

  ngOnInit(): void {}

  @Input() set lines(lines: number) {
    this.lineArray = Array.apply(null, Array(lines));
  }
}
