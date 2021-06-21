import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListComponentV1Component } from './article-list-component-v1.component';

describe('ArticleListComponentV1Component', () => {
  let component: ArticleListComponentV1Component;
  let fixture: ComponentFixture<ArticleListComponentV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleListComponentV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponentV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
