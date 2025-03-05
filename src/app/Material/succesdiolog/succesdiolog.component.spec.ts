import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesdiologComponent } from './succesdiolog.component';

describe('SuccesdiologComponent', () => {
  let component: SuccesdiologComponent;
  let fixture: ComponentFixture<SuccesdiologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccesdiologComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccesdiologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
