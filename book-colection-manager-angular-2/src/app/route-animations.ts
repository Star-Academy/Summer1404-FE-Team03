
import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0.95) translateY(20px)',
        }),
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out',
          style({ opacity: 1, transform: 'scale(1) translateY(0)' })
        ),
      ], { optional: true }),
    ]),
  ]);