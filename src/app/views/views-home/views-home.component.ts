import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { label: 'Favorites', value: 22 },
    { label: 'Page Views', value: 967 },
    { label: 'Users', value: 30 },
  ];

  items = [
    { image: 'https://picsum.photos/100', title: 'abc', description: 'apple' },
    { image: 'https://picsum.photos/100', title: 'def', description: 'deaf' },
    { image: 'https://picsum.photos/100', title: 'ghi', description: 'golf' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
