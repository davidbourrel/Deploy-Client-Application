import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { Headings } from '../../../../shared/components/headings/headings';

@Component({
  selector: 'app-google-api-tokens-creation-step',
  imports: [Headings, TranslocoModule],
  templateUrl: './google-api-tokens-creation-step.html',
})
export class GoogleApiTokensCreationStep {}
