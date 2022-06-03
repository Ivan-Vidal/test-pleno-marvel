import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  allData: any


  constructor(private eventsService: EventsService) { 
  }

   ngOnInit(): void {
     this.eventsService.getAllEvents().subscribe((result) => {
      this.allData = result.data.results
      console.log(result)
    })

  }

}
