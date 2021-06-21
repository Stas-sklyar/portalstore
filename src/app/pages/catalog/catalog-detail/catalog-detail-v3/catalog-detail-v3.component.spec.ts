import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDetailV3Component } from './catalog-detail-v3.component';

describe('CatalogDetailV3Component', () => {
  let component: CatalogDetailV3Component;
  let fixture: ComponentFixture<CatalogDetailV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogDetailV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogDetailV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
