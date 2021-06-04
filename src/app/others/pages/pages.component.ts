import { Component, OnInit } from '@angular/core';
import { images } from './pages.data';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  currentPage = 0;
  images = images;
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  constructor() {}

  ngOnInit(): void {}
}
