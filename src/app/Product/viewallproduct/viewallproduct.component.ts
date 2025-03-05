import { Component } from '@angular/core';
import { ApiService } from '../../Shared/service/api.service';
import { SidemenuComponent } from '../../Shared/sidemenu/sidemenu.component';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../Shared/pipe/truncate.pipe';
import { DiscriptiontruncatePipe } from '../../Shared/pipe/discriptiontruncate.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../productmodal';
import { SortpipePipe } from "../../Shared/pipe/sortpipe.pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewallproduct',
  standalone: true,
  imports: [SidemenuComponent, CommonModule, TruncatePipe, DiscriptiontruncatePipe, SortpipePipe, FormsModule],
  templateUrl: './viewallproduct.component.html',
  styleUrl: './viewallproduct.component.scss'
})
export class ViewallproductComponent {
  products: Product[]= [];
  public sortOption: string = 'title|asc';
  id:any;
  product:any;
  public totalamount:number=0;
constructor(private api:ApiService, private router:Router, private activate:ActivatedRoute){}
ngOnInit(){
  this.id = this.activate.snapshot.queryParamMap.get('id');
  this.viewallProducts();
  //this.totalamount = this.api.calculatePrice();
}
viewallProducts(){
  this.api.getProduct().subscribe(datas=>{
    this.products=datas;
    this.applyDiscount();
    })
}

applyDiscount():void{
  this.products= this.products.map((product:any)=>{
     product.discount = this.api.getallDiscounts(product.category);
     product.discountedPrice = product.price-(product.price * product.discount/100);
     return product;
  })
}
addtocart(item:any){
  this.router.navigate(['/cart-page']);
  this.api.addtoCart(item);
  }

  Wishlist(item:any){
    this.api.addtoWishlist(item);
  }
}
