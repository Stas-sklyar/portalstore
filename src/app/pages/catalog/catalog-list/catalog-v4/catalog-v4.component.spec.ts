import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogV4Component } from './catalog-v4.component';

describe('CatalogV4Component', () => {
  let component: CatalogV4Component;
  let fixture: ComponentFixture<CatalogV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogV4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
