import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyheadermenuComponent } from './onlyheadermenu.component';

describe('OnlyheadermenuComponent', () => {
  let component: OnlyheadermenuComponent;
  let fixture: ComponentFixture<OnlyheadermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyheadermenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyheadermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
