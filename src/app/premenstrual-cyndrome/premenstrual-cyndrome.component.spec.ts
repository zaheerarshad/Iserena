import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremenstrualCyndromeComponent } from './premenstrual-cyndrome.component';

describe('PremenstrualCyndromeComponent', () => {
  let component: PremenstrualCyndromeComponent;
  let fixture: ComponentFixture<PremenstrualCyndromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremenstrualCyndromeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremenstrualCyndromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
