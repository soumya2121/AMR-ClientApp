import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrDetailsComponent } from './ssr-details.component';

describe('SsrDetailsComponent', () => {
  let component: SsrDetailsComponent;
  let fixture: ComponentFixture<SsrDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
