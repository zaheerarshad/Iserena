import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamponsComponent } from './tampons.component';

describe('TamponsComponent', () => {
  let component: TamponsComponent;
  let fixture: ComponentFixture<TamponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
