import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { GlobalService } from '../global.service';


@Component({
    selector: 'gif',
    templateUrl: './gif.component.html'
})

export class GifComponent implements OnInit {

    constructor() { }
private changeGif:boolean = false;
private gifInterval:any;
    ngOnInit(): void {
      this.initTimer();
    }

    initTimer(){
      var self = this;
      this.gifInterval = setInterval(function(){
        if(self.changeGif){
          self.changeGif=false;
        }else{
          self.changeGif =true;
        }
      },15000);
    }

ngOnDestroy(){
  clearInterval(this.gifInterval);

}


}
