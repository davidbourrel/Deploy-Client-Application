import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../../app.routes';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgOptimizedImage, ThemeToggle],
  templateUrl: './header.html',
})
export class Header {
  protected readonly goToSetupChoicePage = () => {
    return ['/', APP_ROUTES.setupChoice.path];
  };
}
