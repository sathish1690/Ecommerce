import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcategoryComponent } from './searchcategory.component';

describe('SearchcategoryComponent', () => {
  let component: SearchcategoryComponent;
  let fixture: ComponentFixture<SearchcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
