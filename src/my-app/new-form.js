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
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
/**
 * @customElement
 * @polymer
 */
class newForm extends PolymerElement {
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
        width:30%;
        position: relative;        
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
      }
      }
      </style>
     
      <!--<routing></routing>-->
      <app-location route="{{route}}"></app-location>
   
      <div class="card">

      <!--<Header></Header>-->
    
      
      <!--<paper-input></paper-input>-->
      
      <iron-form>
      <form method="get" action="/form/handler">
  
    <h2>Form</h2>
<!--<Insurername></Insurername>-->

<paper-dropdown-menu label="Insurance" >
<paper-listbox slot="dropdown-content" selected="0">
  <paper-item></paper-item>
  <paper-item>Car Insurance</paper-item>
  <paper-item>Home Insurance</paper-item>
  <paper-item>Health Insurance</paper-item>
</paper-listbox>
</paper-dropdown-menu>
   


<paper-input always-float-label  min="1" 
max="10" auto-validate="true"  label="Name" id="customer" value="[[username]]" required>
</paper-input>

<paper-input always-float-label  min="1" 
max="10" auto-validate="true"  label="Age" id="age" value="[[age]]" required>
</paper-input>


<paper-input always-float-label  min="1" 
max="10" auto-validate="true"  label="Address" id="address" value="[[address]]" required>
</paper-input>


<paper-input   min="1" 
max="10" auto-validate="true" always-float-label label="Monthly Premium" id="premium" value="{{premium}}" required>
</paper-input>


<paper-input   min="1" 
max="10" auto-validate="true" always-float-label label=" Annual Premium" id="annpremium" value="{{premium}}" required>
</paper-input>

      </form>
    </iron-form>
      
      <span id="warning" style="display:none;color:red;">this user credentials is correct</span>
      
      <div class="center">
      <!--<paper-button></paper-button>-->
<paper-button raised class="custom indigo" on-click="submit">submit
</paper-button>
</div>

    </div>
   
    
        `;
  }

  //<login method></login method>
  submit(){
    console.log('sai');
   

    
this.set('route.path', '/sucesspage');   
}
//validations

//properties
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'sai'
      },
      username: {
        type: String,
        value: '',
        
      },
      age: {
          type: String,
          value:'',
      },
      address: {
          type:String,
          value:''
      },
      premium: {
        type: String,
        value: '',
        notify:true

      },
      routeData: Object,
      subroute: Object
    };
  }

}

window.customElements.define('new-form', newForm);
