import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingitemsComponent } from './trendingitems.component';

describe('TrendingitemsComponent', () => {
  let component: TrendingitemsComponent;
  let fixture: ComponentFixture<TrendingitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
