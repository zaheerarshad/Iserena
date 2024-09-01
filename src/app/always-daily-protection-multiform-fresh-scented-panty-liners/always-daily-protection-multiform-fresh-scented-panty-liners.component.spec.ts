import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysDailyProtectionMultiformFreshScentedPantyLinersComponent } from './always-daily-protection-multiform-fresh-scented-panty-liners.component';

describe('AlwaysDailyProtectionMultiformFreshScentedPantyLinersComponent', () => {
  let component: AlwaysDailyProtectionMultiformFreshScentedPantyLinersComponent;
  let fixture: ComponentFixture<AlwaysDailyProtectionMultiformFreshScentedPantyLinersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysDailyProtectionMultiformFreshScentedPantyLinersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysDailyProtectionMultiformFreshScentedPantyLinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
