import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBlogSingleComponent } from './nav-blog-single.component';

describe('NavBlogSingleComponent', () => {
  let component: NavBlogSingleComponent;
  let fixture: ComponentFixture<NavBlogSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBlogSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBlogSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
