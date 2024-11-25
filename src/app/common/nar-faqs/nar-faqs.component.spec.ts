import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarFaqsComponent } from './nar-faqs.component';

describe('NarFaqsComponent', () => {
  let component: NarFaqsComponent;
  let fixture: ComponentFixture<NarFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarFaqsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
