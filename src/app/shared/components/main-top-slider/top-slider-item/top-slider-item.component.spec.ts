import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSliderItemComponent } from './top-slider-item.component';

describe('TopSliderItemComponent', () => {
  let component: TopSliderItemComponent;
  let fixture: ComponentFixture<TopSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSliderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
