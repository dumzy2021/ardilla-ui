import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessMoreComponent } from './access-more.component';

describe('AccessMoreComponent', () => {
  let component: AccessMoreComponent;
  let fixture: ComponentFixture<AccessMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
