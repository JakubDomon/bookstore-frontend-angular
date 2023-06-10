import { animate, style, transition, trigger } from '@angular/animations';

const enterTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate('0.2s ease-in', style({
    opacity: 0,
  }))
])

export const fadeOut = trigger('fadeOut', [enterTransition])
