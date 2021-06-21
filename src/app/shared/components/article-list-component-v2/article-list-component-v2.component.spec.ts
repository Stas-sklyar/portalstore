import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListComponentV2Component } from './article-list-component-v2.component';

describe('ArticleListComponentV2Component', () => {
  let component: ArticleListComponentV2Component;
  let fixture: ComponentFixture<ArticleListComponentV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleListComponentV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponentV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
