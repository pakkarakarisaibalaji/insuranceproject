/**
 * import @polymer/app-layout/app-drawer/app-drawer.js;
*import @polymer/app-layout/app-drawer-layout/app-drawer-layout.js;
 * app-drawer-layout is layout 
 *import @polymer/app-route/app-location.js;
 * import @polymer/app-route/app-route.js; 
 * app-route is used for routing 
 
 */





import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import './styles-global.js';
import '@polymer/iron-ajax/iron-ajax.js';

/**
 * @customElement
 * @polymer
 */

  /**
 * @Array
 * 
 */


class MyPolicy extends PolymerElement {
  constructor () {
    super ();


  };

  static get template() {
    return html`
      <style >
           
      .center-width{
        width:40%;
        margin:0 auto;
      }
      .card{
        background: #fff;
        border: 1px solid #e4e9f0;
        width: 90%;
        
    
    }
      .bg-clr{
        background: #f1f7fa;
        padding: 2em;
        font-family: 'Roboto';
       }

       .pad-table{
        padding:20px;
      }
      .pad-table p{
          border: 1px solid #ccc;
          margin: 0;
          border-bottom: none;
          padding: 15px 15px 45px;
          font-size: 20px;
          font-family: 'Roboto';
      }

      td, th {
        border-bottom: 1px solid #dddddd;
        text-align: left;
        padding: 14px;
      }

      .pad-table{
        padding:20px;
      }
      .pad-table p{
          border: 1px solid #ccc;
          margin: 0;
          border-bottom: none;
          padding: 15px 15px 45px;
          font-size: 20px;
          font-family: 'Roboto';
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
      .container-box{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-flow: wrap;
      }
      .box{
          width: 13%;
          height: 100px;
          background: yellow;
          margin: 20px;
          box-sizing: border-box;
          font-size: 16px;
          margin-bottom: 60px;
          text-align: center;
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
      </style>
      <!--<routing></routing>-->

      <app-location route="{{route}}"></app-location>
    
  <div class="card">  
      <div class="bg-color">

      <!--<ironajax></ironajax>-->

      <iron-ajax
    auto
   
    url="src/assests/data.json"
   
    handle-as="json"
    on-response="handleDataResponse"
   >
  </iron-ajax>

  

    <h1>My Policy</h1>
      <table>
        <thead>
            <tr class="head-tr">
                <th>policyNo</th>
                <th>Name</th>
                <th>MonthlyPremium</th>
                <th>AnnualPremium</th>
                
            </tr>
        </thead>
          
        <tbody>
            <!-- dom-repate used to iterate an array values from iron-jax respose -->
            <template is="dom-repeat" items="{{data}}">
                <tr>
                    <td>[[item.policyNo]]</td>
                    <td>[[item.Name]]</td>
                    <td>₹[[item.MonthlyPremium]]</td>
                    <td>₹[[item.AnnualPremium]]</td>
                    
                </tr>
            </template>
        </tbody>
    </table>
    

</div>
</div>
</div>
        `;
  }

 
/**properties
 * 
 * */
  static get properties() {
    return {
      
      data: {
        type: Array,
        value: []
      },
     
    };
  }

  handleDataResponse(event, request){
    var response = request.response;  
    this.data = response.sdata;
  }
}
/**window.customElements.define
 * this is will register our component to browser
 * 
 * */
window.customElements.define('my-policy', MyPolicy);
