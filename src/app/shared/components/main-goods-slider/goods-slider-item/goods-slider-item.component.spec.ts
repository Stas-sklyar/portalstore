import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsSliderItemComponent } from './goods-slider-item.component';

describe('GoodsSliderItemComponent', () => {
  let component: GoodsSliderItemComponent;
  let fixture: ComponentFixture<GoodsSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsSliderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
