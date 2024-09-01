import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsForGirlsAndParentsComponent } from './tips-for-girls-and-parents.component';

describe('TipsForGirlsAndParentsComponent', () => {
  let component: TipsForGirlsAndParentsComponent;
  let fixture: ComponentFixture<TipsForGirlsAndParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsForGirlsAndParentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsForGirlsAndParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
