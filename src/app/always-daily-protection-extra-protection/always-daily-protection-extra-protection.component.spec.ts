import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysDailyProtectionExtraProtectionComponent } from './always-daily-protection-extra-protection.component';

describe('AlwaysDailyProtectionExtraProtectionComponent', () => {
  let component: AlwaysDailyProtectionExtraProtectionComponent;
  let fixture: ComponentFixture<AlwaysDailyProtectionExtraProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysDailyProtectionExtraProtectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysDailyProtectionExtraProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
