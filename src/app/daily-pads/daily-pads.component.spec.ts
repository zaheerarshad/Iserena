import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPadsComponent } from './daily-pads.component';

describe('DailyPadsComponent', () => {
  let component: DailyPadsComponent;
  let fixture: ComponentFixture<DailyPadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyPadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
