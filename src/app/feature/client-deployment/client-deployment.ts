import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DeploymentSteps } from './deployment-steps/deployment-steps';
import { Headings } from "../../shared/components/headings/headings";

@Component({
  selector: 'app-client-deployment',
  imports: [DeploymentSteps, TranslocoModule, Headings],
  templateUrl: './client-deployment.html',
})
export class ClientDeployment {}
