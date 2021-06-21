import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogV3Component } from './catalog-v3.component';

describe('CatalogV3Component', () => {
  let component: CatalogV3Component;
  let fixture: ComponentFixture<CatalogV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
