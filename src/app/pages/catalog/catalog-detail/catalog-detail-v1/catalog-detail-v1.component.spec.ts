import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDetailV1Component } from './catalog-detail-v1.component';

describe('CatalogDetailV1Component', () => {
  let component: CatalogDetailV1Component;
  let fixture: ComponentFixture<CatalogDetailV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogDetailV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogDetailV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
