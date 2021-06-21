import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketSpoilerComponent } from './basket-spoiler.component';

describe('BasketSpoilerComponent', () => {
  let component: BasketSpoilerComponent;
  let fixture: ComponentFixture<BasketSpoilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketSpoilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketSpoilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
