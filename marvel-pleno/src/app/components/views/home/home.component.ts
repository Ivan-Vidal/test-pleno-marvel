import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allData: any
  sum = 20;
  direction = "";

  constructor(private homeService: HomeService) { 
    // this.appendItems();
  }

   ngOnInit(): void {
     this.homeService.getAllComics().subscribe((result) => {
      this.allData = result.data.results
      console.log(result)
    })

  }



  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

    this.sum += 20;
    this.appendItems();
    
    this.direction = "scroll down";
  }

  onScrollUp(ev: any) {
    console.log("scrolled up!", ev);
    this.sum += 20;
    this.prependItems();

    this.direction = "scroll up";
  }

  appendItems() {
    this.addItems("push");
  }

  prependItems() {
    this.addItems("unshift");
  }

  addItems(_method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if( _method === 'push'){
        this.allData.push([i].join(""));
      }else if( _method === 'unshift'){
        this.allData.unshift([i].join(""));
      }
    }
  }

}
