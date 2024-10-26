import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponentComponent } from './flight-search.component.component';

describe('FlightSearchComponentComponent', () => {
  let component: FlightSearchComponentComponent;
  let fixture: ComponentFixture<FlightSearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightSearchComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
