import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlimitedInvestmentComponent } from './unlimited-investment.component';

describe('UnlimitedInvestmentComponent', () => {
  let component: UnlimitedInvestmentComponent;
  let fixture: ComponentFixture<UnlimitedInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlimitedInvestmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlimitedInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
