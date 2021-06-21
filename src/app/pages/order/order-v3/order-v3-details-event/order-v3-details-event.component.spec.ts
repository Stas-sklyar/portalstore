import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderV3DetailsEventComponent } from './order-v3-details-event.component';

describe('OrderV3DetailsEventComponent', () => {
  let component: OrderV3DetailsEventComponent;
  let fixture: ComponentFixture<OrderV3DetailsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderV3DetailsEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderV3DetailsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
