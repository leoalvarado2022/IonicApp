function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"0BR9":function(e,t,n){"use strict";n.r(t),n.d(t,"ion_action_sheet_controller",(function(){return c})),n.d(t,"ion_alert_controller",(function(){return a})),n.d(t,"ion_anchor",(function(){return u})),n.d(t,"ion_loading_controller",(function(){return s})),n.d(t,"ion_modal_controller",(function(){return l})),n.d(t,"ion_picker_controller",(function(){return f})),n.d(t,"ion_popover_controller",(function(){return h})),n.d(t,"ion_toast_controller",(function(){return d}));var r=n("c1op"),o=(n("AfW+"),n("pori")),i=n("Dl6n"),c=function(){function e(t){_classCallCheck(this,e),Object(r.l)(this,t)}return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-action-sheet",e)}},{key:"dismiss",value:function(e,t,n){return Object(o.k)(document,e,t,"ion-action-sheet",n)}},{key:"getTop",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-action-sheet"));case 1:case"end":return e.stop()}}))}}]),e}(),a=function(){function e(t){_classCallCheck(this,e),Object(r.l)(this,t)}return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-alert",e)}},{key:"dismiss",value:function(e,t,n){return Object(o.k)(document,e,t,"ion-alert",n)}},{key:"getTop",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-alert"));case 1:case"end":return e.stop()}}))}}]),e}(),u=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.l)(this,t),this.routerDirection="forward",this.onClick=function(e){Object(i.d)(n.href,e,n.routerDirection)}}return _createClass(e,[{key:"componentDidLoad",value:function(){console.warn("[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.")}},{key:"render",value:function(){var e,t=Object(r.d)(this),n={href:this.href,rel:this.rel};return Object(r.i)(r.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(i.a)(this.color)),(e={},_defineProperty(e,t,!0),_defineProperty(e,"ion-activatable",!0),e))},Object(r.i)("a",Object.assign({},n),Object(r.i)("slot",null)))}}],[{key:"style",get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]),e}(),s=function(){function e(t){_classCallCheck(this,e),Object(r.l)(this,t)}return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-loading",e)}},{key:"dismiss",value:function(e,t,n){return Object(o.k)(document,e,t,"ion-loading",n)}},{key:"getTop",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-loading"));case 1:case"end":return e.stop()}}))}}]),e}(),l=function(){function e(t){_classCallCheck(this,e),Object(r.l)(this,t)}return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-modal",e)}},{key:"dismiss",value:function(e,t,n){return Object(o.k)(document,e,t,"ion-modal",n)}},{key:"getTop",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-modal"));case 1:case"end":return e.stop()}}))}}]),e}(),f=function(){function e(t){_classCallCheck(this,e),Object(r.l)(this,t)}return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-picker",e)}},{key:"dismiss",value:function(e,t,n){return Object(o.k)(document,e,t,"ion-picker",n)}},{key:"getTop",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-picker"));case 1:case"end":return e.stop()}}))}}]),e}(),h=function(){function e(t){_classCallCheck(this,e),Object(r.l)(this,t)}return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-popover",e)}},{key:"dismiss",value:function(e,t,n){return Object(o.k)(document,e,t,"ion-popover",n)}},{key:"getTop",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-popover"));case 1:case"end":return e.stop()}}))}}]),e}(),d=function(){function e(t){_classCallCheck(this,e),Object(r.l)(this,t)}return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-toast",e)}},{key:"dismiss",value:function(e,t,n){return Object(o.k)(document,e,t,"ion-toast",n)}},{key:"getTop",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-toast"));case 1:case"end":return e.stop()}}))}}]),e}()}}]);