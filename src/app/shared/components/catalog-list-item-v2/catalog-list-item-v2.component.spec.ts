import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListItemV2Component } from './catalog-list-item-v2.component';

describe('CatalogListItemV2Component', () => {
  let component: CatalogListItemV2Component;
  let fixture: ComponentFixture<CatalogListItemV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogListItemV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListItemV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
