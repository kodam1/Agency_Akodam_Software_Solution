import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarContactComponent } from './nar-contact.component';

describe('NarContactComponent', () => {
  let component: NarContactComponent;
  let fixture: ComponentFixture<NarContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
