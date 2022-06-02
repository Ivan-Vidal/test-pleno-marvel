import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  listItem = [
    {
      option: 'Comics',
      route: '/comics'
    },
    {
      option: 'Events',
      route: '/events'
    },
    {
      option: 'Series',
      route: '/series'
    },

]
  constructor() { }

  ngOnInit(): void {
  }

}
