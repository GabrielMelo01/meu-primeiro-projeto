import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(){}

  ngOnInit(): void {
    setTimeout( () => {
      console.log(1);
    },5000)
  }
}
