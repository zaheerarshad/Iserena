import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysProtectionAndComfortComponent } from './always-protection-and-comfort.component';

describe('AlwaysProtectionAndComfortComponent', () => {
  let component: AlwaysProtectionAndComfortComponent;
  let fixture: ComponentFixture<AlwaysProtectionAndComfortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysProtectionAndComfortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysProtectionAndComfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
