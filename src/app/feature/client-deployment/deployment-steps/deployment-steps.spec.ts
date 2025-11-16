import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentSteps } from './deployment-steps';

describe('DeploymentSteps', () => {
  let component: DeploymentSteps;
  let fixture: ComponentFixture<DeploymentSteps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeploymentSteps],
    }).compileComponents();

    fixture = TestBed.createComponent(DeploymentSteps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
