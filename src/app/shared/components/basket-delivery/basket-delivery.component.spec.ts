import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketDeliveryComponent } from './basket-delivery.component';

describe('BasketDeliveryComponent', () => {
  let component: BasketDeliveryComponent;
  let fixture: ComponentFixture<BasketDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
