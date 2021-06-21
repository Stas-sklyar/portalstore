import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListV1Component } from './article-list-v1.component';

describe('ArticleListV1Component', () => {
  let component: ArticleListV1Component;
  let fixture: ComponentFixture<ArticleListV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleListV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
