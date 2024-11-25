import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarCarrerDetailsComponent } from './nar-carrer-details.component';

describe('NarCarrerDetailsComponent', () => {
  let component: NarCarrerDetailsComponent;
  let fixture: ComponentFixture<NarCarrerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarCarrerDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarCarrerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
