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
class Sucesspage extends PolymerElement {
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

          color: #212121;
          font-size: 22px;

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
      <h1>Thank you</h1>
     

    </div>
    
        `;
  }

  //<login method></login method>
  login(){

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

window.customElements.define('sucess-page', Sucesspage);
