import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbycatagoryComponent } from './shopbycatagory.component';

describe('ShopbycatagoryComponent', () => {
  let component: ShopbycatagoryComponent;
  let fixture: ComponentFixture<ShopbycatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopbycatagoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopbycatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
