import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainV1Component } from './main-v1.component';

describe('MainV1Component', () => {
  let component: MainV1Component;
  let fixture: ComponentFixture<MainV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
