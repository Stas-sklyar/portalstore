import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListV3Component } from './article-list-v3.component';

describe('ArticleListV3Component', () => {
  let component: ArticleListV3Component;
  let fixture: ComponentFixture<ArticleListV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleListV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
