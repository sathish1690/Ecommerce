import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { ApiService } from '../Shared/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  productid:any;
  //id:any;
  item:any;
  wishlist: any;
  constructor(private api:ApiService, private activate:ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.api.wishlistdata().subscribe((res)=>{
      this.wishlist=res;
   })
  }
  
 remove(item:any){
  var delBtn = confirm("Do you want to delete ?");
  if ( delBtn == true ) {
    this.wishlist.splice(item);
  }   
  this.api.removewishlistItem(item)
 }



}
