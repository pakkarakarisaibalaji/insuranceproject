/**
 * import @polymer/app-layout/app-drawer/app-drawer.js;
*import @polymer/app-layout/app-drawer-layout/app-drawer-layout.js;
 * app-drawer-layout is layout 
 *import @polymer/app-route/app-location.js;
 * import @polymer/app-route/app-route.js; 
 * app-route is used for routing 
 
 */





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
      /*media quiery for min-width-600px*/

      @media (max-width: 619px){
      
        :host {
          display: block;
          height: 100%;
          
        }
        .card{
          width:100%;
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
      
      }
      </style>
      <!--<routing></routing>-->

      <app-location route="{{route}}"></app-location>
    
    

<div class="card">

<!--<Header></Header>-->

<h1>My Policy</h1>

<!--<table></table>-->

<table is="s-table-lite" fixed-column>
      <thead>
        <tr>
          <th>Policy no</th>
          <th>Insurance Name</th>
          <th>Premium</th>
          <th>AnnualPremium</th>
          
        </tr>
      </thead>
      <tbody is="s-tbody">
        <tr is="s-tr" multi>
          <td>1011</td>
          <td>Health Insurance</td>
          <td>1200</td>
          <td>100000</td>
          
        </tr>
        <tr is="s-tr" multi>
          <td>1012</td>
          <td>Vehicle Insurance</td>
          <td>1100</td>
          <td>12000</td>
         
        </tr>
        <tr is="s-tr" multi>
          <td>1013</td>
          <td>Savings Traditional</td>
          <td>1300</td>
          <td>13000</td>
          
        </tr>
        <tr is="s-tr" multi>
          <td>1014</td>
          <td>Medical Insurance</td>
          <td>1400</td>
          <td>14000</td>
          
        </tr>
        <tr is="s-tr" multi>
          <td>1015</td>
          <td>Personal Insurance</td>
          <td>1500</td>
          <td>15000</td>
          
        </tr>
        <tr is="s-tr" multi>
          <td>1015</td>
          <td>Long Term Savings</td>
          <td>1600</td>
          <td>16000</td>
          
        </tr>
        <tr is="s-tr" multi>
          <td>1015</td>
          <td>Retirement Plans</td>
          <td>1700</td>
          <td>17000</td>
          
        </tr>
        <tr is="s-tr" multi>
          <td>1015</td>
          <td>Savings Plans</td>
          <td>1800</td>
          <td>18000</td>
          
        </tr>
        <tr is="s-tr" multi>
          <td>1015</td>
          <td>Child Savings</td>
          <td>1900</td>
          <td>19000</td>
          
        </tr>
        
        <tr is="s-tr" multi>
          <td>1016</td>
          <td>Savings plan</td>
          <td>1000</td>
          <td>10000</td>
          
        </tr>
        
        <tr is="s-tr" multi>
          <td>1017</td>
          <td>Vechicle Insurance</td>
          <td>2000</td>
          <td>20000</td>
          
        </tr>
 
        <tr is="s-tr" multi>
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

 
 //<properties></properties>

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
