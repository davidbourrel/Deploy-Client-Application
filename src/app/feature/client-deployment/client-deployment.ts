import { Component } from '@angular/core';
import { Layout } from '../../shared/components/layout/layout';
import { DeploymentSteps } from './deployment-steps/deployment-steps';

@Component({
  selector: 'app-client-deployment',
  imports: [Layout, DeploymentSteps],
  templateUrl: './client-deployment.html',
})
export class ClientDeployment {}
