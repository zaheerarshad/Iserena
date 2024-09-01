import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysThickTexturedAdvancedMaxiComponent } from './always-thick-textured-advanced-maxi.component';

describe('AlwaysThickTexturedAdvancedMaxiComponent', () => {
  let component: AlwaysThickTexturedAdvancedMaxiComponent;
  let fixture: ComponentFixture<AlwaysThickTexturedAdvancedMaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysThickTexturedAdvancedMaxiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysThickTexturedAdvancedMaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
