import { Component, Input, OnInit } from '@angular/core';

interface itemsType {
  title: string;
  content: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  openedItem = [];
  constructor() {}

  ngOnInit() {}

  @Input() set setItems(items: itemsType[]) {
    this.openedItem = items.map((item) => ({
      ...item,
      isOpened: false,
    }));
    console.log(this.openedItem);
  }

  handleClick(index: number) {
    this.openedItem[index].isOpened = !this.openedItem[index].isOpened;
    // this.openedItem =
  }
}
