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
class LoginPage extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        display: block;
        height: 100%;
        color: var(--container-text, blue);
        background-image: var(--container-background, "ins.jpg");
      

      }
      .card{
        width:50%;
        position: relative;
        top: 6em;
        right: 6em;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      h1{
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
        padding-left: 6em;
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
        padding-left: 8em;
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
      /*media quiery for max-width-619px*/
      @media (max-width: 619px){
        :host {
          display: block;
          height: 100%;
          color: var(--container-text, blue);
          background-image: var(--container-background, "ins.jpg");
        
  
        }
        .card{
          width:70%;
          position: relative;
          top: 6em;
          padding: 16px;
          left:3em;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        h1{
          margin: 16px 0;
          color: #212121;
          font-size: 22px;
          padding-left: 4em;
        }
        h5{
          margin: 16px 0;
          color: #212121;
          font-size: 12px;
          
        }
        .savings{
        padding-left: 0em;
      
        }
        .center{
          padding-left: 5em;
        }
        paper-button.custom {
          
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
      }
      /*media quiery for min-width-600px*/
      @media only screen and (min-width: 600px){
        :host {
          display: block;
          height: 100%;
          color: var(--container-text, blue);
          background-image: var(--container-background, "ins.jpg");
        
  
        }
        .card{
          width:70%;
          position: relative;
          top: 6em;
          padding: 16px;
          left:0em;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        h1{
          margin: 16px 0;
          color: #212121;
          font-size: 22px;
          padding-left: 4em;
        }
        h5{
          margin: 16px 0;
          color: #212121;
          font-size: 12px;
          
        }
        .savings{
        padding-left: 0em;
      
        }
        .center{
          padding-left: 5em;
        }
        paper-button.custom {
          
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
      }
      }
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

  //<login method></login method>
  login(){
    console.log('sai');
   

    var user1 = this.$.customer.value;
    var pass = this.$.password.value;
this.$.warning.style.display="none";
this.$.warning.innerText="";

//<login condition></login condition>
//validations
    if(user1 == "123456789" && pass == "name"){
localStorage.setItem("username",user1);
this.$.customer.value="";
this.$.password.value="";
this.set('route.path', '/policy');   
}
//validations
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
//properties
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'sai'
      },
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

window.customElements.define('login-page', LoginPage);
