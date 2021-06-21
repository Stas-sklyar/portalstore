import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactV3Component } from './contact-v3.component';

describe('ContactV3Component', () => {
  let component: ContactV3Component;
  let fixture: ComponentFixture<ContactV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
