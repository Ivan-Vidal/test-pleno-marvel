import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  allData: any


  constructor(private seriesService: SeriesService) { 
  }

   ngOnInit(): void {
     this.seriesService.getAllSeries().subscribe((result) => {
      this.allData = result.data.results
      console.log(result)
    })

  }
}
