import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWePromisComponent } from './what-we-promis.component';

describe('WhatWePromisComponent', () => {
  let component: WhatWePromisComponent;
  let fixture: ComponentFixture<WhatWePromisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWePromisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWePromisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
