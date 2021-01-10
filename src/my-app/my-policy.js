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
import './styles-global.js';

/**
 * @customElement
 * @polymer
 */

 

class MyPolicy extends PolymerElement {
  constructor () {
    super ();


  };

  static get template() {
    return html`
      <style include="styles-global">
     
      </style>
      <!--<routing></routing>-->

      <app-location route="{{route}}"></app-location>
    
    

<div class="card1">

<!--<Header></Header>-->

<h1 class="header1">My Policy</h1>

<!--<table></table>-->

<table  fixed-column>

<!--<tableheader></tableheader>-->

      <thead>
        <tr>
          <th>Policy no</th>
          <th>Insurance Name</th>
          <th>Premium</th>
          <th>AnnualPremium</th>
          
        </tr>
      </thead>
      <tbody >

      <!--<tabledata></tabledata>-->

      <tr >
          <td>1011</td>
          <td>Health Insurance</td>
          <td>1200</td>
          <td>100000</td>
          
        </tr>
        <tr >
          <td>1012</td>
          <td>Vehicle Insurance</td>
          <td>1100</td>
          <td>12000</td>
         
        </tr>
        <tr >
          <td>1013</td>
          <td>Savings Traditional</td>
          <td>1300</td>
          <td>13000</td>
          
        </tr>
        <tr >
          <td>1014</td>
          <td>Medical Insurance</td>
          <td>1400</td>
          <td>14000</td>
          
        </tr>
        <tr >
          <td>1015</td>
          <td>Personal Insurance</td>
          <td>1500</td>
          <td>15000</td>
          
        </tr>
        <tr >
          <td>1015</td>
          <td>Long Term Savings</td>
          <td>1600</td>
          <td>16000</td>
          
        </tr>
        <tr >
          <td>1015</td>
          <td>Retirement Plans</td>
          <td>1700</td>
          <td>17000</td>
          
        </tr>
        <tr >
          <td>1015</td>
          <td>Savings Plans</td>
          <td>1800</td>
          <td>18000</td>
          
        </tr>
        <tr >
          <td>1015</td>
          <td>Child Savings</td>
          <td>1900</td>
          <td>19000</td>
          
        </tr>
        
        <tr >
          <td>1016</td>
          <td>Savings plan</td>
          <td>1000</td>
          <td>10000</td>
          
        </tr>
        
        <tr >
          <td>1017</td>
          <td>Vechicle Insurance</td>
          <td>2000</td>
          <td>20000</td>
          
        </tr>
 
        <tr >
        <td>1018</td>
        <td>Medical Insurance</td>
        <td>4000</td>
        <td>40000</td>
        
      </tr>

        
      </tbody>
    </table>
    </div>
    
        `;
  }

 
/**properties
 * 
 * */
  static get properties() {
    return {
      
      
      routeData: Object,
      subroute: Object
    };
  }
}
/**window.customElements.define
 * this is will register our component to browser
 * 
 * */
window.customElements.define('my-policy', MyPolicy);
