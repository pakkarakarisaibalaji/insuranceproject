/**
 *import @polymer/app-route/app-location.js;
 * import @polymer/app-route/app-route.js; 
 * app-route is used for routing 
 **import '@polymer/paper-button/paper-button.js';
 *paper button is used for button
 *import '@polymer/paper-button/paper-button.js';
 *paper button is used for button
 *import '@polymer/paper-input/paper-input.js';
 *paper-input is used as input field
 */



import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-button/paper-button.js';
import './styles-global.js';

 /**
 * @Array
 * 
 */
let profilesList = [
  {policyNo: 1011, Name: 'Health Insurance', PremiumStatus: 'Up to date', PremiumPending: 'N/A'},
  {policyNo: 1012, Name: 'Vehicle Insurance', PremiumStatus: 'Pending', PremiumPending: 'June 2020'},
  {policyNo: 1013, Name: 'Savings Traditional', PremiumStatus: 'Up to date', PremiumPending: 'N/A'},
  {policyNo: 1014, Name: 'Medical Insurance', PremiumStatus: 'Pending', PremiumPending: 'Oct 2020'},
  {policyNo: 1015, Name: 'Personal Insurance', PremiumStatus: 'Up to date', PremiumPending: 'N/A'},
  {policyNo: 1016, Name: 'Long Term Savings', PremiumStatus: 'Pending', PremiumPending: 'Nov 2020'},
  {policyNo: 1017, Name: 'Retirement Plans', PremiumStatus: 'Up to date', PremiumPending: 'N/A'},
  {policyNo: 1018, Name: 'Savings Plans ', PremiumStatus: 'Pending', PremiumPending: 'Dec 2020'},
  {policyNo: 1019, Name: 'Child Savings', PremiumStatus: 'Up to date', PremiumPending: 'N/A'},
  {policyNo: 1010, Name: 'Future plans', PremiumStatus: 'Pending', PremiumPending: 'Jan 2020'},
  {policyNo: 1011, Name: 'Car Insurance', PremiumStatus: 'Up to date', PremiumPending: 'Jan 2020'},
  {policyNo: 1012, Name: 'Home booster', PremiumStatus: 'Pending', PremiumPending: 'Apr 2020'},
  {policyNo: 1013, Name: 'Life Insurance', PremiumStatus: 'Up to date', PremiumPending: 'Mar 2020'},
  {policyNo: 1014, Name: 'Future plans', PremiumStatus: 'Pending', PremiumPending: 'Jan 2020'}
  
]

/**
 * @customElement
 * @polymer
 */


class Renewals extends PolymerElement {
  static get template() {
    return html`
      <style include="styles-global">
      
      </style>
      
      <!--<routing></routing>-->
      <app-location route="{{route}}"></app-location>
   
      <div class="card1">

      <!--<header></header>--> 
      <h1 class="header1">Policy Renewals</h1>
      
      <!--<table></table>-->

    <table>
      <tr>
      <!--<tableheader></tableheader>-->
      <th>Policy</th>
      <th>Insurance</th>
      <th>PremiumStatus</th>
      <th>PremiumPending</th>
      </tr>
      </table>

      <!--<tabledata></tabledata>-->
      
      <dom-repeat items="{{profiles}}">
        <template strip-whitespace="">
        
      <tr is="s-tr" multi>
        <td>[[item.policyNo]]</td>
        <td>[[item.Name]]</td>
        <td>[[item.PremiumStatus]]</td>
        <td>[[item.PremiumPending]]</td>
        
      </tr>
      </template>
      </dom-repeat>
    
      <div class="center1">
      <!--<paper-button></paper-button>-->
       
      <paper-button raised class="custom indigo" on-click="Paynow">Paynow
      </paper-button>
      </div>


       </div>

        `;
  }
  
/**
 * paynow method
 * 
 * */

  Paynow(){    
this.set('route.path', '/payment');   
  }

/**
 * properties
 * 
 * */
static get properties() {
    return {
      profiles: {
        type: Array,
        value: profilesList,
        
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
window.customElements.define('renewals-page', Renewals);
