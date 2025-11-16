import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { APP_ROUTES } from '../../app.routes';
import { Headings } from '../../shared/components/headings/headings';
import { Layout } from '../../shared/components/layout/layout';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [TranslocoModule, Layout, RouterModule, Headings, MatIconModule],
  templateUrl: './home.html',
})
export class Home {
  protected readonly goToDeployClientPage = () => {
    return ['/', APP_ROUTES.deployClient.path];
  };

  protected readonly goToGenerateTokenPage = () => {
    return ['/', APP_ROUTES.generateToken.path];
  };
}
