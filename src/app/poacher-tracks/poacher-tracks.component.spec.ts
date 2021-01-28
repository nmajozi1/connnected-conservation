import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoacherTracksComponent } from './poacher-tracks.component';

describe('PoacherTracksComponent', () => {
  let component: PoacherTracksComponent;
  let fixture: ComponentFixture<PoacherTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoacherTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoacherTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
