import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysCottonSoftMaxiThickNightComponent } from './always-cotton-soft-maxi-thick-night.component';

describe('AlwaysCottonSoftMaxiThickNightComponent', () => {
  let component: AlwaysCottonSoftMaxiThickNightComponent;
  let fixture: ComponentFixture<AlwaysCottonSoftMaxiThickNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysCottonSoftMaxiThickNightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysCottonSoftMaxiThickNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
