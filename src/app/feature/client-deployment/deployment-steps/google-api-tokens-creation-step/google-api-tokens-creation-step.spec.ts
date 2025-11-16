import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleApiTokensCreationStep } from './google-api-tokens-creation-step';

describe('GoogleApiTokensCreationStep', () => {
  let component: GoogleApiTokensCreationStep;
  let fixture: ComponentFixture<GoogleApiTokensCreationStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleApiTokensCreationStep],
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleApiTokensCreationStep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
