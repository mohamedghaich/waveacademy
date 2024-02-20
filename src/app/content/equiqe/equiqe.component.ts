import { Component, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TelegrameComponent } from '../telegrame/telegrame.component';

@Component({
  selector: 'app-equiqe',
  templateUrl: './equiqe.component.html',
  styleUrls: ['./equiqe.component.css']
})
export class EquiqeComponent {
  images: string[] = [
    'assets/tele1.jpg',
    'assets/tele2.jpg',
    'assets/tele3.jpg',
    'assets/tele4.jpg',
    'assets/tele5.jpg'
  ];
  currentIndex = 0;
  slideWidth!: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private dialog: MatDialog) {
    this.calculateSlideWidth();
  }
openPopup(image: string): void {
  const dialogRef = this.dialog.open(TelegrameComponent, {
    width: 'auto',
    data: { selectedImage: image }
  });
}

closePopup(): void {
  this.dialog.closeAll();
}

  @HostListener('window:resize')
  onResize() {
    this.calculateSlideWidth();
  }

  calculateSlideWidth() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth >= 1100) {
        this.slideWidth = 37;
      } else if (window.innerWidth >= 800) {
        this.slideWidth = 55;
      } else {
        this.slideWidth = 103;
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
