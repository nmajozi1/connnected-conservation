import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectsNeutralisedComponent } from './suspects-neutralised.component';

describe('SuspectsNeutralisedComponent', () => {
  let component: SuspectsNeutralisedComponent;
  let fixture: ComponentFixture<SuspectsNeutralisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectsNeutralisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectsNeutralisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
