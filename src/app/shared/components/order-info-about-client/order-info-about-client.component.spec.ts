import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderV1InfoAboutClientComponent } from './order-info-about-client.component';

describe('OrderV1InfoAboutClientComponent', () => {
  let component: OrderV1InfoAboutClientComponent;
  let fixture: ComponentFixture<OrderV1InfoAboutClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderV1InfoAboutClientComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderV1InfoAboutClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
