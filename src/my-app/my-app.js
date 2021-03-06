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
 *import '@polymer/paper-icon-button/paper-icon-button.js';
*import '@polymer/iron-icon/iron-icon.js';
 *Icons are used
 */


import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
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

/**
 *passivetouches
 */
setPassiveTouchGestures(true);
/**
 *routing(path)
 */
setRootPath(MyAppGlobals.rootPath);

/**
 *main class MyApp
 */

class MyApp extends PolymerElement {
  static get template() {
    return html`

      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
      
        
        }
        app-drawer {
          color: #fff;
          --app-drawer-scrim-background: rgba(0, 0, 100, 0.8);
          --app-drawer-content-container: {
            background: #20B2AA;
          }
          
        }
        app-header {
          color: #fff;
          background-color: #9370DB;
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
          color: white;
          font-weight: bold;
        }
      </style>


      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      


      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]" >
          <app-toolbar>Life Insurance</app-toolbar>
          
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="policy" href="[[rootPath]]policy">Policy</a>
            <a name="renewalspage" href="[[rootPath]]renewalspage">Renewals</a>
            <a name="new-policy" href="[[rootPath]]new-policy">New Policy</a>
            <a name="loginpage" href="[[rootPath]]loginpage">LogOut</a>
            <a name="sucesspage" href="[[rootpath]]sucesspage"></a>
            <a name="newform" href="[[rootpath]]newform"></a>
            <a name="payment" href="[[rootpath]]payment"></a>
          </iron-selector>
        </app-drawer>


        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header  id="myheader" slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button src="src/assests/icon.jpg"  drawer-toggle=""></paper-icon-button>
              <div main-title="">Life Insurance</div>
            </app-toolbar>
          </app-header>
          


          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <login-page name="loginpage"></login-page>
            <renewals-page name="renewalspage"></renewals-page>
            <my-policy name="policy"></my-policy>
           <new-policy name="new-policy"></new-policy>
           <sucess-page name="sucesspage"></sucess-page>
           <new-form name="newform"></new-form>
           <payment-page name="payment"></payment-page>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }
/**
*properties which will have type and reflect to attribute and observer

* type can be anything boolean,String , number
           
* reflectto attribute it will  change when the value changes

* observe is method or call or function 
*/
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: 'routing'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }
  
  _routePageChanged(page) {
  
    if (!page) {
      this.page = 'loginpage';
    } else if (['loginpage','renewalspage','policy','new-policy','sucesspage','newform','payment'].indexOf(page) !== -1) {
      this.page = page;
    }

  
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }
/**
 * switch case with import the page compoent
 * 
 * */
  routing(page) {
    
    this.$.drawer.style.display = 'block';
    this.$.myheader.style.display = 'block';
    switch (page) {
     case 'loginpage':
        import('./login-page.js');
        this.$.drawer.style.display = 'none';
        this.$.myheader.style.display = 'none';
        break;
        case 'renewalspage':
          import('./renewals-page.js');
          break;
          case 'policy':
            import('./my-policy.js');
            break;
            case 'new-policy':
            import('./new-policy.js');
            break;
            case 'sucesspage':
            import('./sucess-page.js');
            break;
            case 'newform':
              import('./new-form.js');
              break;
              case 'payment':
              import('./payment-page.js');
              break;
              
    }
  }
}
/**window.customElements.define
 * this is will register our component to browser
 * 
 * */
window.customElements.define('my-app', MyApp);
