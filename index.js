import { css } from 'lit-element';

export default css`
  :host {
    --font-weight-light: var(--app-font-weight-light, 300);
    --font-weight-normal: var(--app-font-weight-normal, 400);
    --font-weight-medium: var(--app-font-weight-medium, 500);
    --font-weight-bold: var(--app-font-weight-bold, 900);
  }

  .headline1 {
    font-weight: var(--app-headline1-font-weight, var(--font-weight-light));
    font-size: var(--app-headline1-font-size, 6rem);
    letter-spacing: var(--app-headline1-letter-spacing, -1.5px);
  }
  .headline2 {
    font-weight: var(--app-headline2-font-weight, var(--font-weight-light));
    font-size: var(--app-headline2-font-size, 3.75rem);
    letter-spacing: var(--app-headline2-letter-spacing, -0.5px);
  }
  .headline3 {
    font-weight: var(--app-headline3-font-weight, var(--font-weight-normal));
    font-size: var(--app-headline3-font-size, 3rem);
    letter-spacing: var(--app-headline3-letter-spacing, 0);
  }
  .headline4 {
    font-weight: var(--app-headline4-font-weight, var(--font-weight-normal));
    font-size: var(--app-headline4-font-size, 2.125rem);
    letter-spacing: var(--app-headline4-letter-spacing, 0.25px);
  }
  .headline5 {
    font-weight: var(--app-headline5-font-weight, var(--font-weight-normal));
    font-size: var(--app-headline5-font-size, 1.5rem);
    letter-spacing: var(--app-headline5-letter-spacing, 0);
  }
  .headline6 {
    font-weight: var(--app-headline6-font-weight, var(--font-weight-medium));
    font-size: var(--app-headline6-font-size, 1.25rem);
    letter-spacing: var(--app-headline6-letter-spacing, 0.15px);
  }
  .subtitle1 {
    font-weight: var(--app-subtitle1-font-weight, var(--font-weight-normal));
    font-size: var(--app-subtitle1-font-size, 1rem);
    letter-spacing: var(--app-subtitle1-letter-spacing, 0.15px);
  }
  .subtitle2 {
    font-weight: var(--app-subtitle2-font-weight, var(--font-weight-medium));
    font-size: var(--app-subtitle2-font-size, 0.875rem);
    letter-spacing: var(--app-subtitle2-letter-spacing, 0.1px);
  }
  .body1 {
    font-weight: var(--app-body1-font-weight, var(--font-weight-normal));
    font-size: var(--app-body1-font-size, 1rem);
    letter-spacing: var(--app-body1-letter-spacing, 0.5px);
  }
  .body2 {
    font-weight: var(--app-body2-font-weight, var(--font-weight-normal));
    font-size: var(--app-body2-font-size, 0.875rem);
    letter-spacing: var(--app-body2-letter-spacing, 0.25px);
  }
  .caption {
    font-weight: var(--app-caption-font-weight, var(--font-weight-normal));
    font-size: var(--app-caption-font-size, 0.75rem);
    letter-spacing: var(--app-caption-letter-spacing, 0.4px);
  }
  .overline {
    font-weight: var(--app-overline-font-weight, var(--font-weight-normal));
    font-size: var(--app-overline-font-size, 0.75rem);
    letter-spacing: var(--app-overline-letter-spacing, 1.5px);
    text-transform: uppercase;
  }
`;