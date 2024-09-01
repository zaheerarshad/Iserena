import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysAllInOneUltraSlimComponent } from './always-all-in-one-ultra-slim.component';

describe('AlwaysAllInOneUltraSlimComponent', () => {
  let component: AlwaysAllInOneUltraSlimComponent;
  let fixture: ComponentFixture<AlwaysAllInOneUltraSlimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysAllInOneUltraSlimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysAllInOneUltraSlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
