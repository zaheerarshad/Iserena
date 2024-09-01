import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysSoftAndBreathableMaxiThickComponent } from './always-soft-and-breathable-maxi-thick.component';

describe('AlwaysSoftAndBreathableMaxiThickComponent', () => {
  let component: AlwaysSoftAndBreathableMaxiThickComponent;
  let fixture: ComponentFixture<AlwaysSoftAndBreathableMaxiThickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysSoftAndBreathableMaxiThickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysSoftAndBreathableMaxiThickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
