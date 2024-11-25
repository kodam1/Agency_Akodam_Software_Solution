import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTeamSingleComponent } from './nav-team-single.component';

describe('NavTeamSingleComponent', () => {
  let component: NavTeamSingleComponent;
  let fixture: ComponentFixture<NavTeamSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTeamSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTeamSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
