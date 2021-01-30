import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTrackerComponent } from './fund-tracker.component';

describe('FundTrackerComponent', () => {
  let component: FundTrackerComponent;
  let fixture: ComponentFixture<FundTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
