import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantComponent } from './advant.component';

describe('AdvantComponent', () => {
  let component: AdvantComponent;
  let fixture: ComponentFixture<AdvantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
