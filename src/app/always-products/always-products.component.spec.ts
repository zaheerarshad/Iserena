import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysProductsComponent } from './always-products.component';

describe('AlwaysProductsComponent', () => {
  let component: AlwaysProductsComponent;
  let fixture: ComponentFixture<AlwaysProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
