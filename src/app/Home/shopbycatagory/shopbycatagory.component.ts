import { Component } from '@angular/core';
import { ApiService } from '../../Shared/service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopbycatagory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopbycatagory.component.html',
  styleUrl: './shopbycatagory.component.scss'
})
export class ShopbycatagoryComponent {
  shopCatagory:any;
  constructor(private api:ApiService){}

  ngOnInit(){
    this.shopbyCatagory()
  }

  shopbyCatagory(){
    this.api.getCatagory().subscribe(data=>{
     this.shopCatagory= data;
    })
  }
}
