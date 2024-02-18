import { Component, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-equiqe',
  templateUrl: './equiqe.component.html',
  styleUrl: './equiqe.component.css'
})
export class EquiqeComponent {
  images: string[] = [
    '../../../assets/tele1.jpg',
    '../../../assets/tele2.jpg',
    '../../../assets/tele3.jpg',
    '../../../assets/tele4.jpg',
    '../../../assets/tele5.jpg'
  ];
  currentIndex = 0;
  slideWidth!: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.calculateSlideWidth(); 
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateSlideWidth();
  }
  calculateSlideWidth() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 1050) {
        this.slideWidth = 80;
      } else {
        this.slideWidth = 33.33; 
      }
    }
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
}
