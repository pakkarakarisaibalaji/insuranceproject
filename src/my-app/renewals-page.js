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
    
   
   
      
   
     .center-box{
       width:80%;
       margin:0 auto;
     }
      .card{
        background: #fff;
        border: 1px solid #e4e9f0;
        width: 69em;
      
    
    }
      #paynow{
        padding-left: 28em;
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
        
      paper-button.indigo {
        background-color: var(--paper-indigo-500);
        color: white;
      
      }
        
        }
        
        .btnHidden{
          display: none;
        }
        
        
      </style>
      
      <!--<routing></routing>-->
      <app-location route="{{route}}"></app-location>
   
      <div class="card">  
      <div class="bg-color">
    
      <iron-ajax
    id="ajax"
    url="src/assests/renewals.json"
    handle-as="json"
    on-response="handleDataResponse">
  </iron-ajax>

  

    <h1>My Renewals</h1>
    <div id="divDataTable">
      
    </div>
    <div class="center" id="paynow">
    <paper-button raised class="custom indigo"  on-click="Paynow">Pay now
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
        value: []
      }
    };
  }

//   ready() {
// //this.$.ajax.generateRequest();
//   }

connectedCallback() {
  this.$.ajax.generateRequest();
}
  handleDataResponse(event, request){
    var response = request.response;  
    this.renewals = response.renewals;    

    var arrayLen = this.renewals.length;
    console.log(arrayLen);
    var tBody = document.getElementById("divDataTable");
    var rowString ="";
    var hdr = "<table><thead><tr class='head-tr'><th>Policyno</th><th>Insurance Name</th><th>Premium Status</th><th>Premium Pending</th><th>Payment</th></tr></thead>";
    var allRows = "";
    for (var i=0; i< arrayLen; i++){
      console.log(i);
      if(this.renewals[i].PremiumStatus == "Pending")
        rowString = "<tr><td>" + this.renewals[i].policyNo + "</td><td>" + this.renewals[i].Name + "</td><td>"+ this.renewals[i].PremiumStatus + "</td><td>" +this.renewals[i].PremiumPending + "</td><td>" + "<paper-button raised class='custom indigo' on-click='Paynow'>Pay now</paper-button>" + "</td></tr>";
      else
        rowString = "<tr><td>" +this.renewals[i].policyNo+ "</td><td>" + this.renewals[i].Name + "</td><td>" +this.renewals[i].PremiumStatus + "</td><td>" + this.renewals[i].PremiumPending + "</td><td></td></tr>";
      
        allRows = allRows + rowString;
    }   

    tBody.innerHTML = hdr + "<tbody>" + allRows +  "</tbody></table>" ;
  }

}
/**window.customElements.define
 * this is will register our component to browser
 * 
 * */
window.customElements.define('renewals-page', Renewals);
