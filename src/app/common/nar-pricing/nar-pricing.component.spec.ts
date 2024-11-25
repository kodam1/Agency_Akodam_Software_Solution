import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarPricingComponent } from './nar-pricing.component';

describe('NarPricingComponent', () => {
  let component: NarPricingComponent;
  let fixture: ComponentFixture<NarPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
