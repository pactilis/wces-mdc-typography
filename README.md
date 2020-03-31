# \<wces-mdc-typography>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i @wces/mdc-typography
```

## Usage
```html
<head>
  ...
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  <style>
    html {
      font-family: 'Roboto', sans-serif;
    }

  </style>
  ...
</head>
```
```js
import { LitElement, css, } from 'lit-element';
import typography from '@wces/mdc-typography';

export class AppDemo extends LitElement {

  static get styles() {
    return [
      typography,
      css`
        ...
      `
    ]
  }

  render() {
    ...
```

## Typographic classes

- `headline{1-6}`
- `body{1,2}`
- `caption`
- `overline`

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```

## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `index.html`
