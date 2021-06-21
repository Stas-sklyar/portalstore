import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterMinComponent } from './counter-min.component';

describe('CounterMinComponent', () => {
  let component: CounterMinComponent;
  let fixture: ComponentFixture<CounterMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterMinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
