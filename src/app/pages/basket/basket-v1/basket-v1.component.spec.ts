import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketV1Component } from './basket-v1.component';

describe('BasketV1Component', () => {
  let component: BasketV1Component;
  let fixture: ComponentFixture<BasketV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
