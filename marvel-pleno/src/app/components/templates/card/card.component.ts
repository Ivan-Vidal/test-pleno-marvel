import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() path: any
  @Input() extension: any
  @Input() name: any
  @Input() type!: 'comics' | 'events' | 'series' | 'characters';
  

  constructor() { }

  ngOnInit(): void {
  }
  

}
