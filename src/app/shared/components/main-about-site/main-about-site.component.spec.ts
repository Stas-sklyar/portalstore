import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAboutSiteComponent } from './main-about-site.component';

describe('MainAboutSiteComponent', () => {
  let component: MainAboutSiteComponent;
  let fixture: ComponentFixture<MainAboutSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAboutSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAboutSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
