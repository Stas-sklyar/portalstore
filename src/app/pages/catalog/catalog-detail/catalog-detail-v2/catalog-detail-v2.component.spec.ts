import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDetailV2Component } from './catalog-detail-v2.component';

describe('CatalogDetailV2Component', () => {
  let component: CatalogDetailV2Component;
  let fixture: ComponentFixture<CatalogDetailV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogDetailV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogDetailV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
