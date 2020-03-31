import { LitElement, html, css } from 'lit-element';
import typography from './index.js';

export class AppDemo extends LitElement {

  static get styles() {
    return [
      typography,
      css`
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
          grid-gap: 2rem;
          align-items: center;
          justify-items: center;
        }
      `
    ]
  }

  render() {
    return html`
      <div class="container">
          <h1 class="headline1">Headline 1</h1>
          <h2 class="headline2">Headline 2</h2>
          <h3 class="headline3">Headline 3</h3>
          <h4 class="headline4">Headline 4</h4>
          <h5 class="headline5">Headline 5</h5>
          <h6 class="headline6">Headline 6</h6>
          <h4 class="subtitle1">Subtitle 1</h4>
          <h4 class="subtitle2">Subtitle 2</h4>
          <p class="body1">Body 1</p>
          <p class="body2">Body 2</p>
          <h6 class="caption">Caption</h6>
          <h6 class="overline">Overline</h6>
      </div>
    `;
  }
}

customElements.define('app-demo', AppDemo);
