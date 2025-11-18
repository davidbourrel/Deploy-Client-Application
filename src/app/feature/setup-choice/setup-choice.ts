import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { APP_ROUTES } from '../../app.routes';
import { Headings } from '../../shared/components/headings/headings';

@Component({
  selector: 'app-setup-choice',
  imports: [TranslocoModule, RouterModule, Headings, MatIconModule],
  templateUrl: './setup-choice.html',
})
export class SetupChoice {
  protected readonly goToClientDeploymentPage = () => {
    return ['/', APP_ROUTES.clientDeployment.path];
  };

  protected readonly goToGenerateTokenPage = () => {
    return ['/', APP_ROUTES.generateToken.path];
  };
}
