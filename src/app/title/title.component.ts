import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() public title:string = 'Hello World!'

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log("FOI ALTERADO COM SUCESSO!")
  }
}
