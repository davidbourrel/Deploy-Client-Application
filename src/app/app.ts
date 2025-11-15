import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeploymentWizard } from './feature/deployment-wizard/deployment-wizard';
import { Header } from './shared/components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, DeploymentWizard],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('deploy-client-frontend');
}
