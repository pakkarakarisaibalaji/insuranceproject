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
        height: 100%;
        
      }
      .card{
        width:375px;
        margin: 8em;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      h1{
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
        padding-left: 7em;
      }
      h5{
        margin: 16px 0;
        color: #212121;
        font-size: 12px;
        
      }
      .savings{
      padding-left: 20em;
        background:
      }

      </style>
      
      <div class="savings">
      <div class="card">

      <h1>Login</h1>
      <h5>Customerid</h5>
      <paper-input  value="{{username}}"></paper-input>
      <h5>Password</h5>
      <paper-input  value="{{password}}"></paper-input>
    </div>
    </div>
  
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
