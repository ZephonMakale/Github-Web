import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
username: string;
@Output() mySearch = new EventEmitter<any> ();
// tslint:disable-next-line:typedef
search() {
  this.mySearch.emit(this.username);
}

  constructor() { }

  ngOnInit(): void {
  }

}
