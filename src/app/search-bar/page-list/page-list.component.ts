import { Component, Input, OnInit } from '@angular/core';
import { responseListType } from './../search-bar-home/search-bar-home.component';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() list: responseListType[];
  constructor() {}

  ngOnInit(): void {}
}
