import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../Product/productmodal';
import { FormsModule } from '@angular/forms';
import { RoundpipePipe } from '../../Shared/pipe/roundpipe.pipe';
import { ApiService } from '../../Shared/service/api.service';


@Component({
  selector: 'app-cartpage',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, RoundpipePipe],
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.scss'
})
export class CartpageComponent {
showProduct:any=[];
cartitems:any;
public totalamount:number=0;
totalcartitems:number=0;
public totalQuantity:number=0;
constructor(private api:ApiService){
}
shippingshow:boolean = false
shippinghidden:boolean = true
couponshow:boolean = false
couponhidden:boolean = true
giftshow:boolean = false
gifthidden:boolean = true

  ngOnInit(){
this.api.products().subscribe((res)=>{
  this.showProduct=this.api.groupProductById(res);
  this.totalamount = this.api.calculatePrice();
  this.totalcartitems=res.length;
 console.log(res)
})
}

deleteitem(x:any){
   var delBtn = confirm("Do you want to delete ?");
  if ( delBtn == true ) {
    this.showProduct.splice(x,1);
  }   
 this.api.removecartitem(x);
}

 decrement(index:any){
  this.api.removecartitembyone(index)
}

increment(item:any){
 this.api.addtoCart(item);
}

// empty(){
//   this.api.removeallitems();

// }
onclickShipping()
  {
    this.shippingshow = !this.shippingshow; //not equal to condition
    this.shippinghidden = !this.shippinghidden
  }
  onclickCoupon(){
    this.couponshow = !this.couponshow; //not equal to condition
    this.couponhidden = !this.couponhidden
  }
  onclickGift(){
    this.giftshow = !this.giftshow; //not equal to condition
    this.gifthidden = !this.gifthidden
  }
}
