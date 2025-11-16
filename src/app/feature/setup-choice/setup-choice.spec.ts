import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupChoice } from './setup-choice';

describe('SetupChoice', () => {
  let component: SetupChoice;
  let fixture: ComponentFixture<SetupChoice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupChoice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupChoice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
