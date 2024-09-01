import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAlwaysComponent } from './about-always.component';

describe('AboutAlwaysComponent', () => {
  let component: AboutAlwaysComponent;
  let fixture: ComponentFixture<AboutAlwaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAlwaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAlwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
