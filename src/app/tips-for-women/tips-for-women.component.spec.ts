import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsForWomenComponent } from './tips-for-women.component';

describe('TipsForWomenComponent', () => {
  let component: TipsForWomenComponent;
  let fixture: ComponentFixture<TipsForWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsForWomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsForWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
