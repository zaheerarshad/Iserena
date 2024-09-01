import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysTamponsCardboardComponent } from './always-tampons-cardboard.component';

describe('AlwaysTamponsCardboardComponent', () => {
  let component: AlwaysTamponsCardboardComponent;
  let fixture: ComponentFixture<AlwaysTamponsCardboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysTamponsCardboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysTamponsCardboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
