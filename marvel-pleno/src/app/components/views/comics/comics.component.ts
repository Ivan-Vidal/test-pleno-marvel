import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  allData: any


  constructor(private comicsService: ComicsService) { 
  }

   ngOnInit(): void {
     this.comicsService.getAllComics().subscribe((result) => {
      this.allData = result.data.results
      console.log(result)
    })

  }
}
