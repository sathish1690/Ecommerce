import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { LatestblogComponent } from './latestblog/latestblog.component';
import { ProtectComponent } from './protect/protect.component';
import { DailydealsComponent } from './dailydeals/dailydeals.component';
import { ShopbycatagoryComponent } from './shopbycatagory/shopbycatagory.component';
import { TrendingitemsComponent } from './trendingitems/trendingitems.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent,LatestblogComponent,ProtectComponent, DailydealsComponent, ShopbycatagoryComponent, TrendingitemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
