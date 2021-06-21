import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeliveryMethodComponent } from './order-delivery-method.component';

describe('OrderDeliveryMethodComponent', () => {
  let component: OrderDeliveryMethodComponent;
  let fixture: ComponentFixture<OrderDeliveryMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderDeliveryMethodComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeliveryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
