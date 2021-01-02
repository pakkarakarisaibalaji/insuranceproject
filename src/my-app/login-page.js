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
        height: 100%;
        color: var(--container-text, blue);
        background-image: var(--container-background, "ins.jpg");
        --container-background: url( '../src/assests/ins.jpg');
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
        .savings{
        padding-left: 20em;
          background:
        }
        .html{
          background:#fff;
        }
      </style>
      <html>
      
      <div class="card">

      <h1>Login</h1>
      <h5>Customerid</h5>
      <paper-input  value="{{username}}"></paper-input>
      <h5>Password</h5>
      <paper-input  value="{{password}}"></paper-input>
    </div>
  
    </html>
        `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'sai'
      },
      username: {
        type: String,
        value: ''
      },
      password: {
        type: String,
        value: ''
      }
    };
  }
}

window.customElements.define('login-page', LoginPage);
