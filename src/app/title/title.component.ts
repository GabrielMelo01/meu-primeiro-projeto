import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnDestroy{

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('Destruyendo componente');
  }

}
