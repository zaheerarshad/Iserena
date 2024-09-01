import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysPadContentsComponent } from './always-pad-contents.component';

describe('AlwaysPadContentsComponent', () => {
  let component: AlwaysPadContentsComponent;
  let fixture: ComponentFixture<AlwaysPadContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysPadContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysPadContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
