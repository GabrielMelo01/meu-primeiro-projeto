import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <app-title title="Olá Mundo!"></app-title>
  `
})
export class AppComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
  }
}
