import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeliveryLineComponent } from './main-delivery-line.component';

describe('MainDeliveryLineComponent', () => {
  let component: MainDeliveryLineComponent;
  let fixture: ComponentFixture<MainDeliveryLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDeliveryLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeliveryLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
