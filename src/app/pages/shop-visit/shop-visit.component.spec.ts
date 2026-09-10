import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopVisitComponent } from './shop-visit.component';

describe('ShopVisitComponent', () => {
  let component: ShopVisitComponent;
  let fixture: ComponentFixture<ShopVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopVisitComponent]
    });
    fixture = TestBed.createComponent(ShopVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
