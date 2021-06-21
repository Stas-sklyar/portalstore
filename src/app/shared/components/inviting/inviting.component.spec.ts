import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitingComponent } from './inviting.component';

describe('InvitingComponent', () => {
  let component: InvitingComponent;
  let fixture: ComponentFixture<InvitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
