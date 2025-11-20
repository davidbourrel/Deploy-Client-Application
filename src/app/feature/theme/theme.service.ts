import { isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Theme } from './theme.model';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'app-theme';

  readonly currentTheme = signal<Theme>(this.getInitialTheme());
  readonly isDarkMode = signal(false);

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const theme = this.currentTheme();
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.STORAGE_KEY, theme);
        this.isDarkMode.set(theme === 'maiaTheme-dark');
      }
    });
  }

  toggleTheme() {
    const newTheme: Theme = this.currentTheme() === 'maiaTheme' ? 'maiaTheme-dark' : 'maiaTheme';
    this.currentTheme.set(newTheme);
  }

  private getInitialTheme(): Theme {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
      if (stored) {
        return stored;
      }

      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'maiaTheme-dark' : 'maiaTheme';
    }
    return 'maiaTheme';
  }
}
