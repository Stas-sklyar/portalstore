import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListV2Component } from './article-list-v2.component';

describe('ArticleListV2Component', () => {
  let component: ArticleListV2Component;
  let fixture: ComponentFixture<ArticleListV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleListV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
