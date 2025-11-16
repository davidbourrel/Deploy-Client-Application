import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { Headings } from '../../../shared/components/headings/headings';
import { GoogleApiTokensCreationStep } from './google-api-tokens-creation-step/google-api-tokens-creation-step';
import { WorkspaceAccountsCreationStep } from './workspace-accounts-creation-step/workspace-accounts-creation-step';

@Component({
  selector: 'app-deployment-steps',
  imports: [TranslocoModule, WorkspaceAccountsCreationStep, Headings, GoogleApiTokensCreationStep],
  templateUrl: './deployment-steps.html',
})
export class DeploymentSteps {}
