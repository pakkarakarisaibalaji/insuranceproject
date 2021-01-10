/**
 * import @polymer/app-layout/app-drawer/app-drawer.js;
*import @polymer/app-layout/app-drawer-layout/app-drawer-layout.js;
 * app-drawer-layout is layout 
 *import @polymer/app-route/app-location.js;
 * import @polymer/app-route/app-route.js; 
 * app-route is used for routing 
 
 */




import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-button/paper-button.js';
import './styles-global.js';
/**
 * @customElement
 * @polymer
 */
class Sucesspage extends PolymerElement {
  static get template() {
    return html`
      <style include="styles-global">
      
      </style>
     
      <!--<routing></routing>-->
      <app-location route="{{route}}"></app-location>
      <div class="card3">

      <!--<Header></Header>-->
      <h1>Thank you for choosing Life Insurance</h1>
     

    </div>
    
        `;
  }

  //<login method></login method>
  
//properties
  static get properties() {
    return {
  
      routeData: Object,
      subroute: Object
    };
  }

}

window.customElements.define('sucess-page', Sucesspage);
