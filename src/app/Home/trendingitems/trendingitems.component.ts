import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../../Shared/service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trendingitems',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './trendingitems.component.html',
  styleUrl: './trendingitems.component.scss'
})
export class TrendingitemsComponent {
  trendingItems:any;
  constructor(private api:ApiService){}
  
  ngOnInit(){
    this.getllproducts();
  }
  getllproducts(){
    this.api.getrecommandedProduct().subscribe(datas=>{
      this.trendingItems =datas;
    })
  }
  
  logoSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: false,
    margin:10,
    center: true,
    autoHeight:true,
    //navText: ['<i class="fi fi-ss-angle-left"></i>', '<i class="fi fi-ss-angle-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 7
      },
      940: {
        items: 7
      }
    },
    nav: false
  }
}
