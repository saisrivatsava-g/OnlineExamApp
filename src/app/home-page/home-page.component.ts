import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `

  <nav><button routerLink = "/exam" type="button" class="btn btn-info">Start Exam</button></nav>

  `,
  styles: []
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
