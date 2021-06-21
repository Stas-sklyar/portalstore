import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListItemV1Component } from './catalog-list-item-v1.component';

describe('CatalogListItemV1Component', () => {
  let component: CatalogListItemV1Component;
  let fixture: ComponentFixture<CatalogListItemV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogListItemV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListItemV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
