import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListItemV3Component } from './catalog-list-item-v3.component';

describe('CatalogListItemV3Component', () => {
  let component: CatalogListItemV3Component;
  let fixture: ComponentFixture<CatalogListItemV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogListItemV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListItemV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
