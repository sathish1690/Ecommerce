import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../Shared/service/api.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../Product/productmodal';
import { RoundpipePipe } from "../../Shared/pipe/roundpipe.pipe";
import { FormsModule } from '@angular/forms';
import { MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-dailydeals',
  standalone: true,
  imports: [CarouselModule, RouterLink, CommonModule, RoundpipePipe, FormsModule,MatDialogContent],
  templateUrl: './dailydeals.component.html',
  styleUrl: './dailydeals.component.scss',
})
export class DailydealsComponent{
  product:any;
  @Input() item = '';
  category:any
  id: any;
products: Product[]= [];
  discount: any;
  visible: boolean = false;
openModal: any;
 constructor(private api:ApiService, private route: ActivatedRoute, private router: Router){}
ngOnInit(){
  this.getallproducts();
  //this.category = this.route.snapshot.queryParamMap.get('category');
  //this.id = this.route.snapshot.queryParamMap.get('id');
  // this.api.getProduct().subscribe(datas=>{
  //   this.products=datas;
  //   this.applyDiscount();
  //   })
}
getallproducts(){
  this.api.getProduct().subscribe(datas=>{
  this.products=datas;
  this.applyDiscount();
  })
}
applyDiscount():void{
  this.products= this.products.map(product=>{
     product.discount = this.api.getallDiscounts(product.category);
     product.discountedPrice = product.price-(product.price * product.discount/100);
     return product;
  })
}

productdetails(categ:any) {
  this.router.navigate(['/product'], {
    queryParams: { id:categ },
  });
}

customOptions: OwlOptions = {
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
  navText: ['<i class="fi fi-sr-angle-left"></i>', '<i class="fi fi-sr-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 3
    },
    940: {
      items: 1
    }
  },
  nav: true
}

offerOptions: OwlOptions = {
  loop: true,
  center: true,
  mouseDrag: true,
  autoplay:false,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: false,
  autoHeight:true,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 3
    },
    940: {
      items: 3
    }
  },
  nav: true
}
addtocart(item:any){
this.router.navigate(['/cart-page']);
this.api.addtoCart(item);
}

Wishlist(item:any){
 this.api.addtoWishlist(item);
 //this.router.navigate(['/wishlist']);
}

}
