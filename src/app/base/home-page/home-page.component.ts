import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  showValue = false;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.showValue = true;
    }
  }

}
