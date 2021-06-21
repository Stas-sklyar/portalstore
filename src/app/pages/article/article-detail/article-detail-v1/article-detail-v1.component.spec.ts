import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailV1Component } from './article-detail-v1.component';

describe('ArticleDetailV1Component', () => {
  let component: ArticleDetailV1Component;
  let fixture: ComponentFixture<ArticleDetailV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetailV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
