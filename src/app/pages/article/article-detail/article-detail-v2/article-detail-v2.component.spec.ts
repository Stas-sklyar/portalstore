import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailV2Component } from './article-detail-v2.component';

describe('ArticleDetailV2Component', () => {
  let component: ArticleDetailV2Component;
  let fixture: ComponentFixture<ArticleDetailV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetailV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
