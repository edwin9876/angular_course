import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  isModalOpen = false;
  items = [
    { title: '', content: 'some content' },
    { title: '', content: 'some content2' },
    { title: '', content: 'some content3' },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isModalOpen = !this.isModalOpen;
  }
}
