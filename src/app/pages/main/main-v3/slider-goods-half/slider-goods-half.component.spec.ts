import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderGoodsHalfComponent } from './slider-goods-half.component';

describe('SliderGoodsHalfComponent', () => {
  let component: SliderGoodsHalfComponent;
  let fixture: ComponentFixture<SliderGoodsHalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderGoodsHalfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderGoodsHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
