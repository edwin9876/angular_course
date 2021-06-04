import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others-home',
  templateUrl: './others-home.component.html',
  styleUrls: ['./others-home.component.css'],
})
export class OthersHomeComponent implements OnInit {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
