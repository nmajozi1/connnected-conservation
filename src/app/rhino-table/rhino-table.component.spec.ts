import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhinoTableComponent } from './rhino-table.component';

describe('RhinoTableComponent', () => {
  let component: RhinoTableComponent;
  let fixture: ComponentFixture<RhinoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhinoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhinoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
