import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpPersonalStudyComponent } from './set-up-personal-study.component';

describe('SetUpPersonalStudyComponent', () => {
  let component: SetUpPersonalStudyComponent;
  let fixture: ComponentFixture<SetUpPersonalStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetUpPersonalStudyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetUpPersonalStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
