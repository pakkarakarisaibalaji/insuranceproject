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
import '@polymer/iron-ajax/iron-ajax.js';

 /**
 * @Array
 * 
 */


/**
 * @customElement
 * @polymer
 */


class Renewals extends PolymerElement {
  static get template() {
    return html`
      <style >
       
      .center-width{
        width:40%;
        margin:0 auto;
      }
      .card{
        background: #fff;
        border: 1px solid #e4e9f0;
        width: 90%;
        
    
    }
      .bg-clr{
        background: #f1f7fa;
        padding: 2em;
        font-family: 'Roboto';
       }

       .pad-table{
        padding:20px;
      }
      .pad-table p{
          border: 1px solid #ccc;
          margin: 0;
          border-bottom: none;
          padding: 15px 15px 45px;
          font-size: 20px;
          font-family: 'Roboto';
      }

      td, th {
        border-bottom: 1px solid #dddddd;
        text-align: left;
        padding: 14px;
      }

      .pad-table{
        padding:20px;
      }
      .pad-table p{
          border: 1px solid #ccc;
          margin: 0;
          border-bottom: none;
          padding: 15px 15px 45px;
          font-size: 20px;
          font-family: 'Roboto';
      }
     .center-box{
       width:80%;
       margin:0 auto;
     }
      .card{
        background: #fff;
        border: 1px solid #e4e9f0;
        width: 69em;
      
    
    }
      .container-box{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-flow: wrap;
      }
      .box{
          width: 13%;
          height: 100px;
          background: yellow;
          margin: 20px;
          box-sizing: border-box;
          font-size: 16px;
          margin-bottom: 60px;
          text-align: center;
      }
      
      
      
        .head-tr,.head-tr:hover{
          background: #9370DB;
          color: #fff;
        }
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
          border: 1px solid #ccc;
          border-top: none;
        }
    
        td, th {
          border-bottom: 1px solid #dddddd;
          text-align: left;
          padding: 14px;
        }
        .bg-color{
          background: #cccccc1a;
        }      
        paper-dropdown-menu {
          width: 21em;
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
      </style>
      
      <!--<routing></routing>-->
      <app-location route="{{route}}"></app-location>
   
      <div class="card">  
      <div class="bg-color">
          <iron-ajax
    auto
   
    url="src/assests/renewals.json"
   
    handle-as="json"
    on-response="handleDataResponse"
   >
  </iron-ajax>

  

    <h1>My Renewals</h1>
      <table>
        <thead>
            <tr class="head-tr">
                <th>policyNo</th>
                <th>Insurance Name</th>
                <th>Premium Status</th>
                <th>Premium Pending</th>
                
            </tr>
        </thead>
          
        <tbody>
            <!-- dom-repate used to iterate an array values from iron-jax respose -->
            <template is="dom-repeat" items="{{renewals}}">
                <tr>
                    <td>[[item.policyNo]]</td>
                    <td>[[item.Name]]</td>
                    <td>[[item.PremiumStatus]]</td>
                    <td>[[item.PremiumPending]]</td>
                    
                </tr>
            </template>
        </tbody>
    </table>
    
    <div class="center">
    <!--<paper-button></paper-button>-->
    
    <paper-button raised class="custom indigo" on-click="Paynow">Pay now
    </paper-button>
    </div>

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
      renewals: {
        type: Array,
        value: [],
        
      },
      
    };
  }

  handleDataResponse(event, request){
    var response = request.response;  
    this.renewals = response.renewals;
  }
}
/**window.customElements.define
 * this is will register our component to browser
 * 
 * */
window.customElements.define('renewals-page', Renewals);
