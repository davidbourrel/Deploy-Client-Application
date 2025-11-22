import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.html',
  imports: [],
})
export class ThemeToggle {
  themeService = inject(ThemeService);
}
