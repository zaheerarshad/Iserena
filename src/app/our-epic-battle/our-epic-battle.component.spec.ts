import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurEpicBattleComponent } from './our-epic-battle.component';

describe('OurEpicBattleComponent', () => {
  let component: OurEpicBattleComponent;
  let fixture: ComponentFixture<OurEpicBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurEpicBattleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurEpicBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
