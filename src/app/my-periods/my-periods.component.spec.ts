import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPeriodsComponent } from './my-periods.component';

describe('MyPeriodsComponent', () => {
  let component: MyPeriodsComponent;
  let fixture: ComponentFixture<MyPeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPeriodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
