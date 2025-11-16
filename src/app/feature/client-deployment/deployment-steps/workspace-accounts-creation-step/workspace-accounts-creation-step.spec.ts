import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceAccountsCreationStep } from './workspace-accounts-creation-step';

describe('WorkspaceAccountsCreationStep', () => {
  let component: WorkspaceAccountsCreationStep;
  let fixture: ComponentFixture<WorkspaceAccountsCreationStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkspaceAccountsCreationStep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceAccountsCreationStep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
