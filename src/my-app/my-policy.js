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

  /**
 * @Array
 * 
 */
let Policy = [
  {policyNo: 1011, Name: 'Health Insurance', MonthlyPremium: '1000', AnnualPremium: '100000'},
  {policyNo: 1012, Name: 'Vehicle Insurance', MonthlyPremium: '2000', AnnualPremium: '200000'},
  {policyNo: 1013, Name: 'Savings Traditional', MonthlyPremium: '3000', AnnualPremium: '300000'},
  {policyNo: 1014, Name: 'Medical Insurance', MonthlyPremium: '4000', AnnualPremium: '400000'},
  {policyNo: 1015, Name: 'Personal Insurance', MonthlyPremium: '5000', AnnualPremium: '500000'},
  {policyNo: 1016, Name: 'Long Term Savings', MonthlyPremium: '6000', AnnualPremium: '600000'},
  {policyNo: 1017, Name: 'Retirement Plans', MonthlyPremium: '7000', AnnualPremium: '700000'},
  {policyNo: 1018, Name: 'Savings Plans ', MonthlyPremium: '8000', AnnualPremium: '800000'},
  {policyNo: 1019, Name: 'Child Savings', MonthlyPremium: '9000', AnnualPremium: '900000'},
  {policyNo: 1010, Name: 'Future plans', MonthlyPremium: '10000', AnnualPremium: '1000000'},
  {policyNo: 1011, Name: 'Car Insurance', MonthlyPremium: '11000', AnnualPremium: '1100000'},
  {policyNo: 1012, Name: 'Home booster', MonthlyPremium: '12000', AnnualPremium: '1200000'},
  {policyNo: 1013, Name: 'Life Insurance', MonthlyPremium: '13000', AnnualPremium: '1300000'},
  {policyNo: 1014, Name: 'Future plans', MonthlyPremium: '14000', AnnualPremium: '1400000'}
  
]


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
          <th>Policyno</th>
          <th>Insurance</th>
          <th>Premium</th>
          <th>AnnualPremium</th>
          
        </tr>
      </thead>
     
    </table>
    
    <!--<tabledata></tabledata>-->
      
    <dom-repeat items="{{Policy}}">
      <template >
      
    <tr>
      <td>[[item.policyNo]]</td>
      <td>[[item.Name]]</td>
      <td>[[item.MonthlyPremium]]</td>
      <td>[[item.AnnualPremium]]</td>
      
    </tr>
    </template>
    </dom-repeat>
  
    </div>
    
        `;
  }

 
/**properties
 * 
 * */
  static get properties() {
    return {
      
      Policy: {
        type: Array,
        value: Policy,
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
window.customElements.define('my-policy', MyPolicy);
