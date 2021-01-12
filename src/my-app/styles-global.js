import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="styles-global">
  <template>
    <style>
    :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
    
      
      }

      app-header {
        color: #fff;
        background-color: var(--app-primary-color);
      }

      app-header paper-icon-button {
        --paper-icon-button-ink-color: white;
      }
.
      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        text-decoration: none;
        color: var(--app-secondary-color);
        line-height: 40px;
      }

      .drawer-list a.iron-selected {
        color: black;
        font-weight: bold;
      }
      :host {
        display: block;
        height: 100%;
        color: var(--container-text);
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
      td, th {
        padding: 8px;
        box-sizing: border-box;
        white-space: nowrap;
      }
    
      .savings{
      padding-left: 20em;
    
      }
      .center{
        padding-left: 8em;
      }
      .center1{
        padding-left: 0em;
      }
      .center2{
        padding-left: 6em;
      }
      .card1{
        width:97%%;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      .card2{
        width:30%;
        position: relative;
        left: 20em;        
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      .card3{
      
        position: relative;
        padding: 16px;
        left:0em;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      .card4{
        width:43%;
        position: relative;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      .header1{
      
        color: #212121;
        font-size: 22px;
        margin: 16px 0;
        padding-left: 0em;
      
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
          color: var(--container-text);
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

        
        .card2{
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
        .card3{
      
          position: relative;
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
        h2{
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
        .card1{
          width:97%;
          padding: 16px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        .header1{
        
          color: #212121;
          font-size: 22px;
          margin: 16px 0;
         padding-left: 0em;
        
        }
        .center1{
          padding-left: 0em;
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
        td, th {
            padding: 8px;
            box-sizing: border-box;
            white-space: nowrap;
          }
      }
      /*media quiery for min-width-600px*/
      @media only screen and (min-width: 600px){
        :host {
          display: block;
          height: 100%;
          color: var(--container-text);
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
        .card1{
          width:97%;
          padding: 16px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        .card2{
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
        .card3{
      
          position: relative;
          padding: 16px;
          left:0em;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        .header1{
        
          color: #212121;
          font-size: 22px;
          margin: 16px 0;
        
          padding-left: 0em;
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
        .center1{
          padding-left: 0em;
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
        td, th {
            padding: 8px;
            box-sizing: border-box;
            white-space: nowrap;
          }  
    }
      
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
