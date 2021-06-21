import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderV3DetailsDeliveryComponent } from './order-v3-details-delivery.component';

describe('OrderV3DetailsDeliveryComponent', () => {
  let component: OrderV3DetailsDeliveryComponent;
  let fixture: ComponentFixture<OrderV3DetailsDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderV3DetailsDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderV3DetailsDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
