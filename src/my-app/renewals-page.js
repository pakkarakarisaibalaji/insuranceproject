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
import './my-policy.js';
/**
 * @customElement
 * @polymer
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

class Renewals extends PolymerElement {
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
      .center{
        padding-left:5em;
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
      /*media quiery for min-width-619px*/

      @media (max-width: 619px){
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
        
        td, th {
          padding: 8px;
          box-sizing: border-box;
          white-space: nowrap;
        }
      
      }
      </style>
      
      <!--<routing></routing>-->
      <app-location route="{{route}}"></app-location>
   
      <div class="card">

      <!--<header></header>--> 
      <h1>Policy Renewals</h1>
      
      <!--<table></table>-->

    <table>
      <tr>
      <th>Policy</th>
      <th>Insurance</th>
      <th>PremiumStatus</th>
      <th>PremiumPending</th>
      </tr>
      </table>
      <dom-repeat items="[[profiles]]">
        <template strip-whitespace="">
        
      <tr is="s-tr" multi>
        <td>{{item.policyNo}}</td>
        <td>{{item.Name}}</td>
        <td>{{item.PremiumStatus}}</td>
        <td>{{item.PremiumPending}}</td>
        
      </tr>
      </template>
      </dom-repeat>
    
      <div class="center">
      <!--<paper-button></paper-button>-->
<paper-button raised class="custom indigo" on-click="Paynow">Paynow
</paper-button>
</div>


    </div>

        `;
  }
  


  Paynow(){    
this.set('route.path', '/sucesspage');   
  }

  //<properties></properties>
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'sai'
      },
      username: {
        type: String,
        value: '',
        notify:true
      },
      password: {
        type: String,
        value: ''
      },
      profiles: {
        type: Array,
        value: profilesList,
        notify: true
      },
      routeData: Object,
      subroute: Object
    };
  }
}

window.customElements.define('renewals-page', Renewals);
