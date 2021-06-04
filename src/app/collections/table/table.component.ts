import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() headers = [];
  @Input() data = [];
  @Input() classNames = '';
  constructor() {}

  ngOnInit(): void {}
}
