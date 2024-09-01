import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysDiamondFlexFoamLargeNightComponent } from './always-diamond-flex-foam-large-night.component';

describe('AlwaysDiamondFlexFoamLargeNightComponent', () => {
  let component: AlwaysDiamondFlexFoamLargeNightComponent;
  let fixture: ComponentFixture<AlwaysDiamondFlexFoamLargeNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysDiamondFlexFoamLargeNightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysDiamondFlexFoamLargeNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
