import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketHeadComponent } from './basket-head.component';

describe('BasketHeadComponent', () => {
  let component: BasketHeadComponent;
  let fixture: ComponentFixture<BasketHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
