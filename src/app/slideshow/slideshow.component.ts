import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['slideshow1.jpg', 'slideshow2.jpg', 'slideshow3.jpg', 'slideshow4.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Born to code',
    'stop planning, start doing',
    'graduate of the developer academy'

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
