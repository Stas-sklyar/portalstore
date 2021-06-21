import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketV2Component } from './basket-v2.component';

describe('BasketV2Component', () => {
  let component: BasketV2Component;
  let fixture: ComponentFixture<BasketV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
