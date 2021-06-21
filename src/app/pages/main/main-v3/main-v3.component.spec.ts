import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainV3Component } from './main-v3.component';

describe('MainV3Component', () => {
  let component: MainV3Component;
  let fixture: ComponentFixture<MainV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
