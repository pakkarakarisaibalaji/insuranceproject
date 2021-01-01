import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './login-page.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
/**
 * @customElement
 * @polymer
 */
class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>saibalaji [[prop1]]!</h2>
      <div>Custom element</div> 
      <login-page></login-page> 
   
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'saibalaji'
      },
      king: {
        type: String,
        value: 'saibalaji'
      }
    };
  }
}

window.customElements.define('my-app', MyApp);
