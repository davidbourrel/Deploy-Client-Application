import { Component, computed, input } from '@angular/core';
import {
  HeadingAlign,
  HeadingColor,
  HeadingLevel,
  HeadingSize,
  HeadingWeight,
} from './headings.model';

@Component({
  selector: 'app-headings',
  imports: [],
  templateUrl: './headings.html',
})
export class Headings {
  readonly label = input<string>('');
  readonly level = input<HeadingLevel>('h1');
  readonly size = input<HeadingSize>('2xl');
  readonly color = input<HeadingColor>('base-content');
  readonly weight = input<HeadingWeight>('bold');
  readonly align = input<HeadingAlign>('left');
  readonly class = input<string>('');

  protected readonly classes = computed(() => {
    const sizeMap: Record<HeadingSize, string> = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    };

    const colorMap: Record<HeadingColor, string> = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      neutral: 'text-neutral',
      'base-content': 'text-base-content',
    };

    const weightMap: Record<HeadingWeight, string> = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    };

    const alignMap: Record<HeadingAlign, string> = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    };

    const size = sizeMap[this.size()];
    const color = colorMap[this.color()];
    const weight = weightMap[this.weight()];
    const align = alignMap[this.align()];

    return `${size} ${color} ${weight} ${align} ${this.class()}`;
  });
}
