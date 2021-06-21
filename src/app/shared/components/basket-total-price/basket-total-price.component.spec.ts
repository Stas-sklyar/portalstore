import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketTotalPriceComponent } from './basket-total-price.component';

describe('BasketTotalPriceComponent', () => {
  let component: BasketTotalPriceComponent;
  let fixture: ComponentFixture<BasketTotalPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketTotalPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketTotalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
