import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderV1Component } from './order-v1.component';

describe('OrderV1Component', () => {
  let component: OrderV1Component;
  let fixture: ComponentFixture<OrderV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
