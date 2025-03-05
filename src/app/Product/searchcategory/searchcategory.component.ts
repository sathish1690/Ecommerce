import { Component } from '@angular/core';
import { ApiService } from '../../Shared/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchcategory',
  standalone: true,
  imports: [],
  templateUrl: './searchcategory.component.html',
  styleUrl: './searchcategory.component.scss'
})
export class SearchcategoryComponent {
  specatagoryList:any;
  category:any

  constructor(private api:ApiService,private route: ActivatedRoute){}
  ngOnInit(){
    this.category = this.route.snapshot.queryParamMap.get('category');
   this.getspecProductlist();
  }
  getspecProductlist() {
    this.api.getspecCategory(this.category).subscribe((data) => {
        this.specatagoryList = data;
      })
     
  }
}
