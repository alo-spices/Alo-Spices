import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayRoutesComponent } from './today-routes.component';

describe('TodayRoutesComponent', () => {
  let component: TodayRoutesComponent;
  let fixture: ComponentFixture<TodayRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayRoutesComponent]
    });
    fixture = TestBed.createComponent(TodayRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
