import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogV2Component } from './catalog-v2.component';

describe('CatalogV2Component', () => {
  let component: CatalogV2Component;
  let fixture: ComponentFixture<CatalogV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
