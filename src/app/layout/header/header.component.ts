import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menu:boolean=false;
  opmenu:boolean=true;
  openmenu(){
    this.menu=true;
    this.opmenu=false;
  }
  closemenu(){
    this.menu=false;
    this.opmenu=true;
  }
}
