import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  username: string;
  @Output() mySearch = new EventEmitter<any>();
  // tslint:disable-next-line:typedef
  search() {
    this.mySearch.emit(this.username);
  }
  constructor() {}

  ngOnInit(): void {}
}
