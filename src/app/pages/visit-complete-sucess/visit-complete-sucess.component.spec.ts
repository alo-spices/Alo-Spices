import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitCompleteSucessComponent } from './visit-complete-sucess.component';

describe('VisitCompleteSucessComponent', () => {
  let component: VisitCompleteSucessComponent;
  let fixture: ComponentFixture<VisitCompleteSucessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitCompleteSucessComponent]
    });
    fixture = TestBed.createComponent(VisitCompleteSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
