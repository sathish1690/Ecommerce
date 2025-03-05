import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidemenuComponent } from '../../Shared/sidemenu/sidemenu.component';
import { ApiService } from '../../Shared/service/api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SidemenuComponent, RouterLink, FormsModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductComponent{
  productid:any;
  id:any;
  item:any;
  counterValue = 1;
  public totalQuantity:number=0;

constructor(private api:ApiService, private activate:ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.id = this.activate.snapshot.queryParamMap.get('id');
    this.getProductdetailsdata();
   }
  
   getProductdetailsdata(){
    this.api.getProductdetails(this.id).subscribe((data: any)=>{
      this.productid=data;
  })
  }
 
  get counter() {
    return this.counterValue + 0;
  }

  set counter(value) {
    this.counterValue = value;
  }
  
decrement(item:any){
  if(this.counter>1){
      this.counter--;
  }
  this.api.removecartitem(item)
}
increment(item:any){
  this.counter++;
 this.api.addtoCart(item);
}

addtocart(item:any){
  this.router.navigate(['/cart-page']);
  this.api.addtoCart(item);
  }
}
