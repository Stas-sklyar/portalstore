import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListItemV4Component } from './catalog-list-item-v4.component';

describe('CatalogListItemV4Component', () => {
  let component: CatalogListItemV4Component;
  let fixture: ComponentFixture<CatalogListItemV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogListItemV4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListItemV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
