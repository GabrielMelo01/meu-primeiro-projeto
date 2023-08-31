import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click)="valor = adcionar()">Adcionar</button>
  <router-outlet></router-outlet>
  <!-- <app-title></app-title> -->
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public valor: number = 1;

  constructor(){}

  public adcionar(): number {
    return this.valor += 1;
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
}
