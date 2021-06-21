import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderV3InfoAboutClientComponent } from './order-v3-info-about-client.component';

describe('OrderV3InfoAboutClientComponent', () => {
  let component: OrderV3InfoAboutClientComponent;
  let fixture: ComponentFixture<OrderV3InfoAboutClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderV3InfoAboutClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderV3InfoAboutClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
