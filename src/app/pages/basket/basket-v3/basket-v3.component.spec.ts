import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketV3Component } from './basket-v3.component';

describe('BasketV3Component', () => {
  let component: BasketV3Component;
  let fixture: ComponentFixture<BasketV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
