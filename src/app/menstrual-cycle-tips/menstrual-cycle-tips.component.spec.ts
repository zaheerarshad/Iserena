import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenstrualCycleTipsComponent } from './menstrual-cycle-tips.component';

describe('MenstrualCycleTipsComponent', () => {
  let component: MenstrualCycleTipsComponent;
  let fixture: ComponentFixture<MenstrualCycleTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenstrualCycleTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenstrualCycleTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
