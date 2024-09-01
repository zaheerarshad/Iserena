import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenstrualCycleCalculatorComponent } from './menstrual-cycle-calculator.component';

describe('MenstrualCycleCalculatorComponent', () => {
  let component: MenstrualCycleCalculatorComponent;
  let fixture: ComponentFixture<MenstrualCycleCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenstrualCycleCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenstrualCycleCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
