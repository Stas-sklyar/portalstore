import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderV2Component } from './order-v2.component';

describe('OrderV2Component', () => {
  let component: OrderV2Component;
  let fixture: ComponentFixture<OrderV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
