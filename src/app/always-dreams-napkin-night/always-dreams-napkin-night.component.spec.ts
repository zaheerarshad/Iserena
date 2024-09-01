import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysDreamsNapkinNightComponent } from './always-dreams-napkin-night.component';

describe('AlwaysDreamsNapkinNightComponent', () => {
  let component: AlwaysDreamsNapkinNightComponent;
  let fixture: ComponentFixture<AlwaysDreamsNapkinNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysDreamsNapkinNightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysDreamsNapkinNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
