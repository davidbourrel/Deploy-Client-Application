import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { Headings } from '../../../../shared/components/headings/headings';

@Component({
  selector: 'app-workspace-accounts-creation-step',
  imports: [Headings, TranslocoModule],
  templateUrl: './workspace-accounts-creation-step.html',
})
export class WorkspaceAccountsCreationStep {}
