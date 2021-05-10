import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByGenderComponent } from './products-by-gender.component';

describe('ProductsByGenderComponent', () => {
  let component: ProductsByGenderComponent;
  let fixture: ComponentFixture<ProductsByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
