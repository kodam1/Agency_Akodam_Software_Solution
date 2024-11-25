import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWorksComponent } from './nav-works.component';

describe('NavWorksComponent', () => {
  let component: NavWorksComponent;
  let fixture: ComponentFixture<NavWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
