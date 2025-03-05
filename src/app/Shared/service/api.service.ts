import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of, tap } from 'rxjs';
import { Product } from '../../Product/productmodal';
import { MatDialog } from '@angular/material/dialog';
import { SuccesdiologComponent } from '../../Material/succesdiolog/succesdiolog.component';
import { AlreadyaddedComponent } from '../../Material/alreadyadded/alreadyadded.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartitemlist:any=[];
  public wishlist:any=[];
  public productlist= new BehaviorSubject<any[]>([]);
  public productwishlist= new BehaviorSubject<any[]>([]);
baseurl= "https://fakestoreapi.com/"
dialog = inject(MatDialog);
dialogRef:any
id:any
opts = [];
  constructor(private http:HttpClient) { }

  getProduct():Observable<any>{
    return this.http.get(this.baseurl + 'products')
  }
  getCatagory():Observable<any>{
    return this.http.get(this.baseurl+'products?limit=5')
  }
  getrecommandedProduct():Observable<any>{
    return this.http.get(this.baseurl+'products?limit=5')
  }
 
  getProductdetails(item:any){
    return this.http.get<Product[]>(this.baseurl + 'products/' + item);
  }
  products(){
    return this.productlist.asObservable();
  }
  wishlistdata(){
    return this.productwishlist.asObservable();
  }

  addtoCart(item:any){
  this.cartitemlist.push(item);
  this.productlist.next(this.cartitemlist);
  }

  addtoWishlist(item:any){
    if (this.wishlist.some((list:any) => list.id === item.id)) {
    //  alert('already exists ...');
    this.dialog.open(AlreadyaddedComponent,{
      data:{
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
    
    } else {
      
      this.dialog.open(SuccesdiologComponent,{
        data:{
          buttonText: {
            ok: 'Save',
            cancel: 'No'
          }
        }
      });
      this.wishlist.push(item);
      this.productwishlist.next(this.wishlist);
    } 
  }

removecartitem(id:any){
  this.cartitemlist =this.cartitemlist.filter((item:any) => item.id!==id)
  this.productlist.next(this.cartitemlist)
}
removewishlistItem(id:any){
  debugger
  this.wishlist.splice(this.wishlist.indexOf(id,1));
  this.productwishlist.next(this.wishlist)
}
removecartitembyone(item:any){
    this.cartitemlist.splice(this.cartitemlist.indexOf(item)); 
    this.productlist.next(this.cartitemlist)
}
calculatePrice(){
  let total=0;
  this.cartitemlist.map((a:any)=>{
    total +=a.discountedPrice;
  })
  return total;
}
removeallitems(){
  this.cartitemlist=[];
  this.productlist.next(this.cartitemlist)
}
groupProductById(products:Product[]):any{
  const productMap = new Map<number, Product>();
  products.forEach((product)=>{
   if(!productMap.has(product.id)){
     productMap.set(product.id,
       {...product, selectedIds:[product.id], totalpricebyid:product.price, 
        totalpricebyDiscount:product.discountedPrice, 
        totalQuantity:product.quantity ?? 1, 
     }); 
  }
   else{
     const existingProduct =productMap.get(product.id)!;
     existingProduct.selectedIds.push(product.id);
     existingProduct.totalpricebyid+=product.discountedPrice;
     existingProduct.totalpricebyDiscount+=product.discountedPrice;
     existingProduct.totalQuantity+=1;
   }

  });
  return Array.from(productMap.values());
 }


getallDiscounts(category:string):number{
  let discount=0;
  switch(category){
     case "electronics":
      discount=5;
      break;
    case "jewelery":
      discount=0;
      break;
      case "men's clothing":
        discount=10;
      break;
      default:
        discount=0;
        break;
  }
 return discount;
}

searchProduct(){
  return this.http.get<Product[]>('https://fakestoreapi.com/products?q=${query}');
}



getData() {
  return this.opts.length ?
    of(this.opts) :
    this.http.get<any>('https://fakestoreapi.com/products/categories').pipe(tap(data => this.opts = data))
}

getspecCategory(item:any) {
  console.log(item);
  return this.http.get('products/category/' + item);
}
}
