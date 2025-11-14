import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentWizard } from './deployment-wizard';

describe('DeploymentWizard', () => {
  let component: DeploymentWizard;
  let fixture: ComponentFixture<DeploymentWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeploymentWizard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeploymentWizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
