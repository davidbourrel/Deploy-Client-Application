import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClipboardService {
  private document = inject(DOCUMENT);

  async copy(text: string): Promise<boolean> {
    try {
      // Modern Clipboard API
      if (this.document.defaultView?.navigator.clipboard) {
        await this.document.defaultView.navigator.clipboard.writeText(text);
        return true;
      }

      // Fallback pour les navigateurs plus anciens
      return this.fallbackCopy(text);
    } catch (error) {
      console.error('Erreur lors de la copie:', error);
      return false;
    }
  }

  private fallbackCopy(text: string): boolean {
    const textarea = this.document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    this.document.body.appendChild(textarea);

    try {
      textarea.select();
      const success = this.document.execCommand('copy');
      this.document.body.removeChild(textarea);
      return success;
    } catch {
      this.document.body.removeChild(textarea);
      return false;
    }
  }
}
