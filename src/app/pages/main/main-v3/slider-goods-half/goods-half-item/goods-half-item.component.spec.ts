import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsHalfItemComponent } from './goods-half-item.component';

describe('GoodsHalfItemComponent', () => {
  let component: GoodsHalfItemComponent;
  let fixture: ComponentFixture<GoodsHalfItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsHalfItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsHalfItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
