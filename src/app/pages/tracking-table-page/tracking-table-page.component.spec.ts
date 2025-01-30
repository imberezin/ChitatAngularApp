import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingTablePageComponent } from './tracking-table-page.component';

describe('TrackingTablePageComponent', () => {
  let component: TrackingTablePageComponent;
  let fixture: ComponentFixture<TrackingTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingTablePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
