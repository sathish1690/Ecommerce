import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailydealsComponent } from './dailydeals.component';

describe('DailydealsComponent', () => {
  let component: DailydealsComponent;
  let fixture: ComponentFixture<DailydealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailydealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailydealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
