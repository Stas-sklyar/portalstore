import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogV1Component } from './catalog-v1.component';

describe('CatalogV1Component', () => {
  let component: CatalogV1Component;
  let fixture: ComponentFixture<CatalogV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
