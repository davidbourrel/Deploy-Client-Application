import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { Headings } from '../../shared/components/headings/headings';
import { DeploymentSteps } from './deployment-steps/deployment-steps';

@Component({
  selector: 'app-client-deployment',
  imports: [DeploymentSteps, TranslocoModule, Headings],
  templateUrl: './client-deployment.html',
})
export class ClientDeployment {
  protected readonly clientName = signal('');

  onClientNameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.clientName.set(input.value);
    console.log('Nom du client:', this.clientName());
  }
}
