/**
 * import @polymer/app-layout/app-drawer/app-drawer.js;
*import @polymer/app-layout/app-drawer-layout/app-drawer-layout.js;
 * app-drawer-layout is layout 
 *import @polymer/app-route/app-location.js;
 * import @polymer/app-route/app-route.js; 
 * app-route is used for routing 
 *import '@polymer/paper-button/paper-button.js';
 *paper button is used for button
 *import '@polymer/paper-input/paper-input.js';
 *paper-input is used as input field
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import './styles-global.js';
/**
 * @customElement
 * @polymer
 */
class LoginPage extends PolymerElement {
  static get template() {
    return html`
      <style include="styles-global">
   
      </style>
     
      <!--<routing></routing>-->

      <app-location route="{{route}}"></app-location>
      <div class="savings">
      <div class="card">

      <!--<Header></Header>-->
      
      <h1>Insurance</h1>
      
      <!--<paper-input></paper-input>-->
      
      <paper-input always-float-label  maxlength="15"  label="CustomerId" id="customer" value="{{username}}" required></paper-input>
      <paper-input type="password"  min="1" 
      max="10" always-float-label label="Password" maxlength="10" id="password" value="{{password}}" required></paper-input>
      
      <span id="warning" style="display:none;color:red;">this user credentials is correct</span>
      
      <div class="center">
      <!--<paper-button></paper-button>-->
      
      <paper-button raised class="custom indigo" on-click="login">Login
      </paper-button>
      </div>

      </div>
      </div>
    
        `;
  }

  /**
   * <login method></login method>
   * 
   * */
  login(){
    console.log('sai');
   

    var user1 = this.$.customer.value;
    var pass = this.$.password.value;
this.$.warning.style.display="none";
this.$.warning.innerText="";

/**<login condition></login condition>
 * */

/**validations
 
 *  */
    if(user1 == "123456789" && pass == "name"){
//localStorage.setItem("username",user1);
this.$.customer.value="";
this.$.password.value="";
this.set('route.path', '/policy');   
}
/**validations
 
 *  */

else {
  this.$.warning.style.display = "block";
  if(user1=="" &&  pass==""){
this.$.warning.innerText= "customerid and password is required";
  }
  else if(user1=="") {
    this.$.warning.innerText= "customerid is required";
  }
  else if(pass=="" ){
    this.$.warning.innerText= "password is required";
  }
  else if(user1 != "123456789" || pass !="name"){
this.$.warning.innerText = "invalid credentials"
  }
}
  }
/**properties
 * 
 * */
  static get properties() {
    return {
      
      username: {
        type: String,
        value: ''
      },
      password: {
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
window.customElements.define('login-page', LoginPage);
