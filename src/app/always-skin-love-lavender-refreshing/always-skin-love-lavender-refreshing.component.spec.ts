import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysSkinLoveLavenderRefreshingComponent } from './always-skin-love-lavender-refreshing.component';

describe('AlwaysSkinLoveLavenderRefreshingComponent', () => {
  let component: AlwaysSkinLoveLavenderRefreshingComponent;
  let fixture: ComponentFixture<AlwaysSkinLoveLavenderRefreshingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysSkinLoveLavenderRefreshingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysSkinLoveLavenderRefreshingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
