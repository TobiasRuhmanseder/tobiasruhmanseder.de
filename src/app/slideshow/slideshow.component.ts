import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
  headlines = [
    'Bring climbing to the next level',
    'Born to climb on mountains',
    'climb high and celebrate yourself'

  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => { this.showImage = true }, 10);
    }, 6000)
  }
}
