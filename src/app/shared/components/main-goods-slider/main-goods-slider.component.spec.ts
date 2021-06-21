import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGoodsSliderComponent } from './main-goods-slider.component';

describe('MainGoodsSliderComponent', () => {
  let component: MainGoodsSliderComponent;
  let fixture: ComponentFixture<MainGoodsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGoodsSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGoodsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
