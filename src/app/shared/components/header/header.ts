import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../../app.routes';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class Header {
  protected readonly goToSetupChoicePage = () => {
    return ['/', APP_ROUTES.setupChoice.path];
  };
}
