import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBookingOrdersComponent } from './employee-booking-orders.component';

describe('EmployeeBookingOrdersComponent', () => {
  let component: EmployeeBookingOrdersComponent;
  let fixture: ComponentFixture<EmployeeBookingOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeBookingOrdersComponent]
    });
    fixture = TestBed.createComponent(EmployeeBookingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
