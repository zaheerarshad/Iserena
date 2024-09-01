import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysDreamSoftCottonPadNightComponent } from './always-dream-soft-cotton-pad-night.component';

describe('AlwaysDreamSoftCottonPadNightComponent', () => {
  let component: AlwaysDreamSoftCottonPadNightComponent;
  let fixture: ComponentFixture<AlwaysDreamSoftCottonPadNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysDreamSoftCottonPadNightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysDreamSoftCottonPadNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
