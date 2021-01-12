/**
 *import @polymer/app-route/app-location.js;
 * import @polymer/app-route/app-route.js; 
 * app-route is used for routing 
 *import '@polymer/paper-button/paper-button.js';
 *paper button is used for button
 *import '@polymer/paper-input/paper-input.js';
 *paper-input is used as input field
 *import '@polymer/paper-card/paper-card.js';
 *papercard is like card for para and button 
 */


import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import './styles-global.js';
/**
 * @customElement
 * @polymer
 */
class NewPolicy extends PolymerElement {
  static get template() {
    return html`
      <style include="styles-global">
           </style>
     
      <!--<routing></routing>-->

      <app-location route="{{route}}"></app-location>
    
      <!--<paper-card></paper-card>-->

      <paper-card heading="Health Insurance"  alt="Health Insurance">
     
      <div class="card-content">
      Top-up Health Insurance with the Health Booster Cover Secure yourself from surging medical costs and unexpected health issues with our Super TopUp Insurance, Health Booster. Because your health deserves more! and premium 2,00,000
      
      </div>
    <div class="card-actions">
      <paper-button raised class="custom indigo" on-click="Buynow">Buy now</paper-button>
    
    </div>
     
    </paper-card>


    <paper-card heading="Home Insurance "  alt="Home Insurance">
     
    <div class="card-content">
    Calamities come unannounced and can cause irreparable damage to your home and finances. With comprehensive home insurance, secure your home and its contents against natural calamities and stay rest assured and premium  upto 5,00,000
    
    </div>
  <div class="card-actions">
    <paper-button raised class="custom indigo" on-click="Buynow">Buy now</paper-button>
    
  </div>

  </paper-card>

        
    <paper-card heading="Car Insurance "  alt="Car Insurance">
     
    <div class="card-content">
    A motor insurance policy protects your motor vehicle from unforeseen risks and secures it against an accident or loss, theft and third party liabilities. A car owner pays yearly premiums to a motor insurance company, and the insurer pays the claim in case of any damage to the vehicle due to accident and premium  upto 5,00,000
    
    </div>
  <div class="card-actions">
    <paper-button raised class="custom indigo" on-click="Buy now">Buynow</paper-button>
    
  </div>

  </paper-card>

    
        `;
  }
/**
 * buynow method
 * 
 * */
  Buynow() {
    this.set('route.path', '/newform');   
  }
  
/**
 * properties
 * 
 * */
  static get properties() {
    return {
      
      username: {
        type: String,
        value: ''
      },
     
      routeData: Object,
      subroute: Object
    };
  }
}
/**window.customElements.define
 * this is will register our component to browser
 * 
 * */
window.customElements.define('new-policy', NewPolicy);
