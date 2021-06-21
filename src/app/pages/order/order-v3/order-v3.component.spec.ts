import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderV3Component } from './order-v3.component';

describe('OrderV3Component', () => {
  let component: OrderV3Component;
  let fixture: ComponentFixture<OrderV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
