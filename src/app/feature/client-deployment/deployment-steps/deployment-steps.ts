import { Component, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { GoogleApiTokensCreationStep } from './google-api-tokens-creation-step/google-api-tokens-creation-step';
import { WorkspaceAccountsCreationStep } from './workspace-accounts-creation-step/workspace-accounts-creation-step';

@Component({
  selector: 'app-deployment-steps',
  imports: [TranslocoModule, WorkspaceAccountsCreationStep, GoogleApiTokensCreationStep],
  templateUrl: './deployment-steps.html',
})
export class DeploymentSteps {
  readonly clientName = input<string>('');
}
