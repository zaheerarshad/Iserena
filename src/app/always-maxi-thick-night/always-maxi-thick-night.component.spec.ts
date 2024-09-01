import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysMaxiThickNightComponent } from './always-maxi-thick-night.component';

describe('AlwaysMaxiThickNightComponent', () => {
  let component: AlwaysMaxiThickNightComponent;
  let fixture: ComponentFixture<AlwaysMaxiThickNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysMaxiThickNightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysMaxiThickNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
