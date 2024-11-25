import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTeamComponent } from './nav-team.component';

describe('NavTeamComponent', () => {
  let component: NavTeamComponent;
  let fixture: ComponentFixture<NavTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
