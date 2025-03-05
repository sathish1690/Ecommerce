import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ProductComponent } from './Product/productdetails/productdetails.component';
import { CartpageComponent } from './Cart/cartpage/cartpage.component';
import { LoginComponent } from './Shared/login/login.component';
import { CheckoutComponent } from './Cart/checkout/checkout.component';
import { ViewallproductComponent } from './Product/viewallproduct/viewallproduct.component';
import { WishlistComponent } from './Wishlist/wishlist.component';
import { SearchcategoryComponent } from './Product/searchcategory/searchcategory.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'', component:HomeComponent},
    {path:'product', component:ProductComponent},
    {path:'cart-page', component:CartpageComponent},
    {path:'checkout', component:CheckoutComponent},
    {path:'allproducts', component:ViewallproductComponent},
    {path:'wishlist', component:WishlistComponent},
    {path:'category', component:SearchcategoryComponent}
];
