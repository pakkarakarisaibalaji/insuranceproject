/**
 * import @polymer/app-layout/app-drawer/app-drawer.js;
*import @polymer/app-layout/app-drawer-layout/app-drawer-layout.js;
 * app-drawer-layout is layout 
 *import @polymer/app-route/app-location.js;
 * import @polymer/app-route/app-route.js; 
 * app-route is used for routing 
 *import '@polymer/iron-pages/iron-pages.js';
 *import '@polymer/iron-selector/iron-selector.js'; 
 * iron-selector we will have pages to select 
 * import '@polymer/iron-form/iron-form.js';
 * Ironform is used for form 
 * import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
 * drop down
 * import '@polymer/paper-item/paper-item.js';
 * items in dropdown 
 * import '@polymer/paper-listbox/paper-listbox.js';
 * listbox which will hold items
 */




import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input';
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
import './styles-global.js';
/**
 * @customElement
 * @polymer
 */
class newForm extends PolymerElement {
  static get template() {
    return html`
      <style include="styles-global">
   
     
      </style>
     
      <!--<routing></routing>-->
      <app-location route="{{route}}"></app-location>
   
      <div class="card2">

      <!--<Header></Header>-->
    
      
      <!--<ironform></ironform>-->
      
      <iron-form>
      <form >
  
    <h2>Form</h2>

<!--<paperdropdown></paperdropdown>-->

<paper-dropdown-menu label="Insurance" >
<paper-listbox slot="dropdown-content" selected="0">
  <paper-item></paper-item>
  <paper-item>Car Insurance</paper-item>
  <paper-item>Home Insurance</paper-item>
  <paper-item>Health Insurance</paper-item>
</paper-listbox>
</paper-dropdown-menu>
   

<!--<paperinput></paperinput>-->

<paper-input always-float-label  maxlength="10" auto-validate="true"  label="Name" id="username" value="[[username]]" required>
</paper-input>

<!--<paperinput></paperinput>-->

<paper-input always-float-label  maxlength="10" auto-validate="true"  label="Age" id="age" value="[[age]]" required>
</paper-input>

<!--<paperinput></paperinput>-->

<paper-input always-float-label  maxlength="10" auto-validate="true"  label="Address" id="address" value="[[address]]" required>
</paper-input>

<!--<paperinput></paperinput>-->

<paper-input  maxlength="10" auto-validate="true" always-float-label label="Monthly Premium" id="premium" value="{{premium}}" required>
</paper-input>

<!--<paperinput></paperinput>-->

<paper-input  maxlength="10" auto-validate="true" always-float-label label=" Annual Premium" id="annpremium" value="{{premium}}" required>
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

  /**submit
 * submit method for form
 * 
 * */
  submit(){
     var user1 = this.$.username.value;
     var age = this.$.age.value;
     var add     = this.$.address.value;
     var mon = this.$.premium.value;
     var ann = this.$.annpremium.value;
this.$.warning.style.display="none";
this.$.warning.innerText="";

/**<login condition></login condition>
*/
/**validations
 * */
   if(user1 == "saibalaji" && age == "28" && add=="banglore" && mon=="1000" && ann=="1000"){

this.set('route.path', '/sucesspage');   
 }
/**validations
 * */
else {
   this.$.warning.style.display = "block";
   if(user1=="" &&  age=="" && add=="" && mon=="" && ann==""){
 this.$.warning.innerText= "All fields are required";
 
   }
   else if(user1=="") {
     this.$.warning.innerText= "customerid is required";
   }
   else if(age=="" ){
     this.$.warning.innerText= "age is required";
   }
   else if(add=="" ){
    this.$.warning.innerText= "address is required";
  }
  
 }   

    
   
}


/**properties
 * */
  static get properties() {
    return {
     
      username: {
        type: String,
        
        
      },
      age: {
          type: String,
        
      },
      address: {
          type:String,
          
      },
      premium: {
        type: String,
      
        notify:true

      },
      annpremium: {
        type: String,
      
        notify:true

      },
      routeData: Object,
      subroute: Object
    };
  }

}
/**window.customElements.define
 * */
window.customElements.define('new-form', newForm);
