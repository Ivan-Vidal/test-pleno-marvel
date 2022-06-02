import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allData: any

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

     this.homeService.getAllComics().subscribe((result) => {
      console.log(result)
    })

    
  }

}
