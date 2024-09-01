import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaginalDischargeComponent } from './vaginal-discharge.component';

describe('VaginalDischargeComponent', () => {
  let component: VaginalDischargeComponent;
  let fixture: ComponentFixture<VaginalDischargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaginalDischargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaginalDischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
