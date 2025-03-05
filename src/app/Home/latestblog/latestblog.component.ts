import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-latestblog',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './latestblog.component.html',
  styleUrl: './latestblog.component.scss'
})
export class LatestblogComponent {
  blogSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: false,
    margin:15,
    autoHeight:true,
    navText: ['<i class="fi fi-ss-angle-left"></i>', '<i class="fi fi-ss-angle-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
