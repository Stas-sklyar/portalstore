import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopSliderComponent } from './main-top-slider.component';

describe('MainTopSliderComponent', () => {
  let component: MainTopSliderComponent;
  let fixture: ComponentFixture<MainTopSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTopSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
