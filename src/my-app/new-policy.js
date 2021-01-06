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
import '@polymer/paper-card/paper-card.js';
/**
 * @customElement
 * @polymer
 */
class NewPolicy extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        display: block;
        height: 100%;
        
      }
      .card{
        width:50%;
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
      .center{
        padding-left: 8em;
      }
      paper-button.custom {
     
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
    }
      </style>
     
      <!--<routing></routing>-->
      <app-location route="{{route}}"></app-location>
    
      <paper-card heading="Health Booster"  alt="Health Booster">
     
      <div class="card-content">
      Top-up Health Insurance with the Health Booster Cover Secure yourself from surging medical costs and unexpected health issues with our Super TopUp Insurance, Health Booster. Because your health deserves more!
      
      </div>
    <div class="card-actions">
      <paper-button raised class="custom indigo">Buynow</paper-button>
    
    </div>
     
    </paper-card>


    <paper-card heading="Home Insurance "  alt="Home Insurance">
     
    <div class="card-content">
    Calamities come unannounced and can cause irreparable damage to your home and finances. With comprehensive home insurance, secure your home and its contents against natural calamities and stay rest assured.
    
    </div>
  <div class="card-actions">
    <paper-button raised class="custom indigo">Buynow</paper-button>
    
  </div>

  </paper-card>

        
    <paper-card heading="Car Insurance "  alt="Car Insurance">
     
    <div class="card-content">
    A motor insurance policy protects your motor vehicle from unforeseen risks and secures it against an accident or loss, theft and third party liabilities. A car owner pays yearly premiums to a motor insurance company, and the insurer pays the claim in case of any damage to the vehicle due to accident.
    
    </div>
  <div class="card-actions">
    <paper-button raised class="custom indigo">Buynow</paper-button>
    
  </div>

  </paper-card>

    
        `;
  }
  
//properties

  static get properties() {
    return {
      
      username: {
        type: String,
        value: ''
      },
      password: {
        type: String,
        value: ''
      },
      premium: {
        type: Number,
        value: ''
      },
      month: {
        type: String,
        value: ''
      },
      Name: {
        type: String,
        value: ''
      },
      LastName: {
        type: String,
        value: ''
      },
      routeData: Object,
      subroute: Object
    };
  }
}

window.customElements.define('new-policy', NewPolicy);
