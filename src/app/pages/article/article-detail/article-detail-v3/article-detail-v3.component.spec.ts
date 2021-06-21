import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailV3Component } from './article-detail-v3.component';

describe('ArticleDetailV3Component', () => {
  let component: ArticleDetailV3Component;
  let fixture: ComponentFixture<ArticleDetailV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetailV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
