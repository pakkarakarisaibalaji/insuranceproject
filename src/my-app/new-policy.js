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
class NewPolicy extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        display: block;
        height: 100%;
        
      }
      .card{
        width:50%;
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
        padding-left: 8em;
      }
      
      </style>
     
      <!--<routing></routing>-->
      <app-location route="{{route}}"></app-location>
    
      <div class="card">
      <!--<header></header>-->
      <h1>New Policy Registration</h1>

      <!--<paperinput></paperinput>-->

      <paper-input always-float-label label="Insurance Name" value="{{username}}"></paper-input>
      
      <paper-input   always-float-label label="Premium Amount" value="[[password]]"></paper-input>
      
      <paper-input   always-float-label label="Monthly Premium" value="[[month]]"></paper-input>
      <paper-input   always-float-label label="Name" value="[[Name]]"></paper-input>
      <paper-input   always-float-label label="LastName" value="[[LastName]]"></paper-input>
      
    </div>

    <div class="card">
    <!--<header></header>-->
    <h1>New Policy Registration</h1>

    <!--<paperinput></paperinput>-->

    <paper-input always-float-label label="Insurance Name" value="{{username}}"></paper-input>
   
    <paper-input   always-float-label label="Premium Amount" value="[[password]]"></paper-input>
   
    <paper-input   always-float-label label="Monthly Premium" value="[[month]]"></paper-input>
    <paper-input   always-float-label label="Name" value="[[Name]]"></paper-input>
    <paper-input   always-float-label label="LastName" value="[[LastName]]"></paper-input>
    
  </div>

  <div class="card">
  <!--<header></header>-->
  <h1>New Policy Registration</h1>

  <!--<paperinput></paperinput>-->

  <paper-input always-float-label label="Insurance Name" value="{{username}}"></paper-input>
  
  <paper-input   always-float-label label="Premium Amount" value="[[password]]"></paper-input>
  
  <paper-input   always-float-label label="Monthly Premium" value="[[month]]"></paper-input>
  <paper-input   always-float-label label="Name" value="[[Name]]"></paper-input>
  <paper-input   always-float-label label="LastName" value="[[LastName]]"></paper-input>
  
</div>
    
    
        `;
  }
  
//properties

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
      premium: {
        type: Number,
        value: ''
      },
      month: {
        type: String,
        value: ''
      },
      Name: {
        type: String,
        value: ''
      },
      LastName: {
        type: String,
        value: ''
      },
      routeData: Object,
      subroute: Object
    };
  }
}

window.customElements.define('new-policy', NewPolicy);
