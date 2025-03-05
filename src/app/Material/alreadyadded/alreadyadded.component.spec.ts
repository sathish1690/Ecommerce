import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyaddedComponent } from './alreadyadded.component';

describe('AlreadyaddedComponent', () => {
  let component: AlreadyaddedComponent;
  let fixture: ComponentFixture<AlreadyaddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlreadyaddedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlreadyaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
