import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input';
/**
 * @customElement
 * @polymer
 */
class LoginPage extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>saibalaji [[prop1]]!</h2>
      <div>Custom element</div>  
      <paper-input label="Enter 1" value="[[prop1]]"></paper-input>
      <paper-input label="Enter 2" value="{{king}}"></paper-input>
      <paper-input label="Enter 3"></paper-input>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'sai'
      },
      king: {
        type: String,
        value: 'saibalaji'
      }
    };
  }
}

window.customElements.define('login-page', LoginPage);
