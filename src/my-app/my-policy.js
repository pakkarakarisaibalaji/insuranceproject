import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input';
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
import '@polymer/paper-button/paper-button.js';
/**
 * @customElement
 * @polymer
 */
class MyPolicy extends PolymerElement {
  constructor () {
    super ();

    this.list = [{
      first: 'Bob', last: 'Li',
    }, {
      first: 'Ayesha', last: 'Johnson',
    }, {
      first: 'Fatma', last: 'Kumari',
    }, {
      first: 'Tony', last: 'Mori',
    }];
  };

  static get template() {
    return html`
      <style>
      :host {
        display: block;
        height: 100%;
        
      }
      .card{
        width:97%;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      h1{
      
        color: #212121;
        font-size: 22px;
      
      }
      h5{
        margin: 16px 0;
        color: #212121;
        font-size: 12px;
        
      }
      .savings{
      padding-left: 20em;
    
      }
      paper-button.custom {
        --paper-button-ink-color: var(--paper-pink-a200);
        /* These could also be individually defined for each of the
          specific css classes, but we'll just do it once as an example */
        --paper-button-flat-keyboard-focus: {
          background-color: var(--paper-pink-a200) !important;
          color: white !important;
        };
        --paper-button-raised-keyboard-focus: {
          background-color: var(--paper-pink-a200) !important;
          color: white !important;
        };
      }
      paper-button.custom:hover {
        background-color: var(--paper-indigo-100);
      }
      paper-button.pink {
        color: var(--paper-pink-a200);
  
      }
      paper-button.indigo {
        background-color: var(--paper-indigo-500);
        color: white;
        --paper-button-raised-keyboard-focus: {
          background-color: var(--paper-pink-a200) !important;
          color: white !important;
        };
      }
      paper-button.green {
        background-color: var(--paper-green-500);
        color: white;
      }
      paper-button.green[active] {
        background-color: var(--paper-red-500);
      }
      paper-button.disabled {
        color: white;
        background-color: bisque;
      }
      td, th {
        padding: 8px;
        box-sizing: border-box;
        white-space: nowrap;
      }
      
      </style>
      
      <app-location route="{{route}}"></app-location>
    
    

<div class="card">
<h1>My Policy</h1>
      <table is="s-table-lite" fixed-column>
      <thead>
        <tr>
          <th>Policy NO</th>
          <th>Insurance Name</th>
          <th>Premium</th>
          <th>Annual Premium</th>
          
        </tr>
      </thead>
      <tbody is="s-tbody">
        <tr is="s-tr" multi>
          <td>1011</td>
          <td>Matman</td>
          <td>Chief Sandwich Eater</td>
          <td>Lettuce Green</td>
          
        </tr>
        <tr is="s-tr" multi>
          <td>1012</td>
          <td>Tick</td>
          <td>Crimefighter Sorta</td>
          <td>Blue</td>
         
        </tr>
        <tr is="s-tr" multi>
          <td>1013</td>
          <td>Smurf</td>
          <td>Giving Exploding Presents</td>
          <td>Smurflow</td>
          
        </tr>
        <tr is="s-tr" multi>
          <td>1014</td>
          <td>Beyler</td>
          <td>Sales Representative</td>
          <td>Red</td>
          
        </tr>
        <tr is="s-tr" multi>
          <td>1015</td>
          <td>Cool</td>
          <td>Tree Crusher</td>
          <td>Blue</td>
          
        </tr>
      </tbody>
    </table>
    </div>
    
        `;
  }
  handleClick() {
    console.log("button");
    this.set('route-path','/loginpage')
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'sai'
      },
      username: {
        type: String,

      },
      routeData: Object,
      subroute: Object
    };
  }
}

window.customElements.define('my-policy', MyPolicy);
