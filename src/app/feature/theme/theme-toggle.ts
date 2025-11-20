import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button
      class="btn btn-circle btn-ghost"
      type="button"
      [attr.aria-label]="
        themeService.isDarkMode() ? 'Activer le mode clair' : 'Activer le mode sombre'
      "
      (click)="themeService.toggleTheme()"
    >
      @if (themeService.isDarkMode()) {
        <mat-icon class="">dark_mode</mat-icon>
      } @else {
        <mat-icon class="">light_mode</mat-icon>
      }
    </button>
  `,
  imports: [MatIconModule],
})
export class ThemeToggle {
  themeService = inject(ThemeService);
}
