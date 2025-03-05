import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../Shared/service/api.service';
import { Observable, debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, MatAutocompleteModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HeaderComponent {
//public cartitems:number=0;
cartitems =0;
wishlist=0;
myControl = new FormControl();
  options = [];
  filteredOptions: Observable<any[]>;
  
constructor(private api:ApiService, private router: Router ){
  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(val => {
          return this.filter(val || '')
     }) 
  )
}
ngOnInit(){
  this.api.products().subscribe(res=>{
    this.cartitems=res.length;
  })
  this.api.wishlistdata().subscribe(res=>{
    this.wishlist=res.length;
  })
  }
  filter(val: string): Observable<any[]> {
    // call the service which makes the http-request
    return this.api.getData()
     .pipe(
       map(response => response.filter((option:any) => { 
         return option.toLowerCase().indexOf(val.toLowerCase()) === 0
       }))
     )
   }  
   productdetails(categ:any) {
    this.router.navigate(['/category'], {
      queryParams: { id: categ },
    });
  }
}


