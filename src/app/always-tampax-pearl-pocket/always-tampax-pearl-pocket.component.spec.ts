import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysTampaxPearlPocketComponent } from './always-tampax-pearl-pocket.component';

describe('AlwaysTampaxPearlPocketComponent', () => {
  let component: AlwaysTampaxPearlPocketComponent;
  let fixture: ComponentFixture<AlwaysTampaxPearlPocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysTampaxPearlPocketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysTampaxPearlPocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
