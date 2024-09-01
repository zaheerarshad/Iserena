import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysSanitoryPadsComponent } from './always-sanitory-pads.component';

describe('AlwaysSanitoryPadsComponent', () => {
  let component: AlwaysSanitoryPadsComponent;
  let fixture: ComponentFixture<AlwaysSanitoryPadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysSanitoryPadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysSanitoryPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
