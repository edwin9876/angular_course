import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './../wikipedia.service';

export interface responseListType {
  title: string;
  snippet: string;
}

@Component({
  selector: 'app-search-bar-home',
  templateUrl: './search-bar-home.component.html',
  styleUrls: ['./search-bar-home.component.css'],
})
export class SearchBarHomeComponent implements OnInit {
  responseList: responseListType[];
  constructor(private wikipediaService: WikipediaService) {}
  ngOnInit(): void {}

  onSubmitted(val: string) {
    this.wikipediaService.search(val).subscribe((res: any) => {
      console.log(res.query.search);
      this.responseList = res.query.search;
    });
  }
}
