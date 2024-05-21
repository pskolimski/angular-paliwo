import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCostComponent } from './trip-cost.component';

describe('TripCostComponent', () => {
  let component: TripCostComponent;
  let fixture: ComponentFixture<TripCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripCostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
