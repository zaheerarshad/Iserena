import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPeriodComponent } from './first-period.component';

describe('FirstPeriodComponent', () => {
  let component: FirstPeriodComponent;
  let fixture: ComponentFixture<FirstPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
