import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterMaxComponent } from './counter-max.component';

describe('CounterMaxComponent', () => {
  let component: CounterMaxComponent;
  let fixture: ComponentFixture<CounterMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterMaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
