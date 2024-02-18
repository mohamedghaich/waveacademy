import { Component } from '@angular/core';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  expanded:boolean=false;
  up:string="&#11025;";
  down:string="&#11024;";
  current:string=this.down;
  t:any=1;
  test(){
    if(this.current==this.down){
      this.current=this.up
      this.t=2;
    }
    else{
      this.current=this.down
      this.t=1;
    }
    this.expanded=!this.expanded;
  }
}
