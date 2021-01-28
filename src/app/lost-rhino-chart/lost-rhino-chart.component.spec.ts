import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostRhinoChartComponent } from './lost-rhino-chart.component';

describe('LostRhinoChartComponent', () => {
  let component: LostRhinoChartComponent;
  let fixture: ComponentFixture<LostRhinoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostRhinoChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostRhinoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
