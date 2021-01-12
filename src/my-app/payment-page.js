/**
 * import @polymer/app-layout/app-drawer/app-drawer.js;
*import @polymer/app-layout/app-drawer-layout/app-drawer-layout.js;
 * app-drawer-layout is layout 
 *import @polymer/app-route/app-location.js;
 * import @polymer/app-route/app-route.js; 
 * app-route is used for routing 
 *import '@polymer/paper-icon-button/paper-icon-button.js';
*import '@polymer/iron-icon/iron-icon.js';
 *Icons are used
 */
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-button/paper-button.js';
import './styles-global.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
/**
 * @customElement
 * @polymer
 */
class Payment extends PolymerElement {
  static get template() {
    return html`
      <style include="styles-global">
      #drop{
        width:50px;
      }
      </style>
     
      <!--<routing></routing>-->
      <app-location route="{{route}}"></app-location>
      <div class="savings">
      <div class="card4">
      <iron-form>
      <form >
  
      <!--<Header></Header>-->
      <h2>Payment Gateway</h2>
     
      <paper-dropdown-menu label="Insurance Name" id="drop">
<paper-listbox slot="dropdown-content" selected="0">
  <paper-item></paper-item>
  <paper-item>Car Insurance</paper-item>
  <paper-item>Home Insurance</paper-item>
  <paper-item>Health Insurance</paper-item>
  <paper-item>Savings Traditional"</paper-item>
  <paper-item>Personal Insurance</paper-item>
  <paper-item>Long Term Savings</paper-item>
  <paper-item>Retirement Plans</paper-item>
  <paper-item>Savings Plans</paper-item>
  <paper-item>Car Insurance/paper-item>
</paper-listbox>
</paper-dropdown-menu>

      <!--<paper-input></paper-input>-->
      
      <paper-input always-float-label  maxlength="15"  label="Cardno" id="Cardno" value="{{username}}" required></paper-input>
      <paper-input always-float-label label="ExpiryDate" maxlength="5" id="expirydate" value="{{password}}" required></paper-input>
      <paper-input always-float-label label="CVV" maxlength="3" id="CVV" value="{{CVV}}" required></paper-input>
      
      <span id="warning" style="display:none;color:red;">this user credentials is correct</span>
      </form>
    </iron-form>
      <div class="center2">
      <!--<paper-button></paper-button>-->
<paper-button raised class="custom indigo" on-click="Payment">Make Payment
</paper-button>
</div>

    </div>
    </div>
    
        `;
  }

  /**
   * <Payment></Payment>
   * */
  Payment(){
    console.log('sai');
   

    var user1 = this.$.Cardno.value;
    var pass = this.$.expirydate.value;
var cvv = this.$.CVV.value;


this.$.warning.style.display="none";
this.$.warning.innerText="";


/**validations
 * */
if(user1 == "123456789" && pass == "02/12" && cvv=="365" ){

    this.set('route.path', '/sucesspage');   
     }
    //validations
    else {
       this.$.warning.style.display = "block";
       if(user1=="" &&  pass=="" && cvv=="" ){
     this.$.warning.innerText= "All fields are required";
     
       }
       else if(user1=="") {
         this.$.warning.innerText= "Card is required";
       }
       else if(pass=="" ){
         this.$.warning.innerText= "expirydate is required";
       }
       else if(cvv=="" ){
        this.$.warning.innerText= "CVV is required";
      }
    }      
  }
/**properties
 * 
 * */
  static get properties() {
    return {
      
      Cardno: {
        type: Number,
        value: ''
      },
      expirydate: {
        type: Number,
        value: ''
      },
      CVV: {
        type: Number,
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
window.customElements.define('payment-page', Payment);
