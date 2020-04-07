function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-crm-tickets-tickets-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/tickets/tickets.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/tickets/tickets.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCrmTicketsTicketsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <strong>Tickets</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollX=\"false\" scrollY=\"false\">\n  <ion-tabs>\n    <!-- Tab bar -->\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"me\">\n        <span>Mis Tickets</span>\n      </ion-tab-button>\n      <ion-tab-button tab=\"all\">\n        <span>Mi Equipo</span>\n      </ion-tab-button>\n      <ion-tab-button tab=\"active\">\n        <span>Activos</span>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/modules/crm/tickets/tickets.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/crm/tickets/tickets.module.ts ***!
    \*******************************************************/

  /*! exports provided: TicketsPageModule */

  /***/
  function srcAppModulesCrmTicketsTicketsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketsPageModule", function () {
      return TicketsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tickets_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tickets.page */
    "./src/app/modules/crm/tickets/tickets.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _tickets_page__WEBPACK_IMPORTED_MODULE_2__["TicketsPage"],
      children: [{
        path: 'me',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | me-me-module */
          "me-me-module").then(__webpack_require__.bind(null,
          /*! ./me/me.module */
          "./src/app/modules/crm/tickets/me/me.module.ts")).then(function (module) {
            return module.MePageModule;
          });
        }
      }, {
        path: 'all',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | all-all-module */
          "all-all-module").then(__webpack_require__.bind(null,
          /*! ./all/all.module */
          "./src/app/modules/crm/tickets/all/all.module.ts")).then(function (module) {
            return module.AllPageModule;
          });
        }
      }, {
        path: 'active',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | active-active-module */
          "active-active-module").then(__webpack_require__.bind(null,
          /*! ./active/active.module */
          "./src/app/modules/crm/tickets/active/active.module.ts")).then(function (module) {
            return module.ActiveModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'me'
      }]
    }];

    var TicketsPageModule = function TicketsPageModule() {
      _classCallCheck(this, TicketsPageModule);
    };

    TicketsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_tickets_page__WEBPACK_IMPORTED_MODULE_2__["TicketsPage"]]
    })], TicketsPageModule);
    /***/
  },

  /***/
  "./src/app/modules/crm/tickets/tickets.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/modules/crm/tickets/tickets.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCrmTicketsTicketsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-tab-button {\n  font-size: 16px;\n  color: white;\n  --color: white;\n}\n\n.tab-selected {\n  border-bottom: 1px solid white !important;\n}\n\nion-tab-bar {\n  height: 45px;\n  --background: var(--color-home-header-menu);\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL2NybS90aWNrZXRzL3RpY2tldHMucGFnZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NybS90aWNrZXRzL3RpY2tldHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUVBLDJDQUFBO0VBQ0EsY0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jcm0vdGlja2V0cy90aWNrZXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICAvL2hlaWdodDogMTAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItaG9tZS1oZWFkZXItbWVudSk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAvLyBtYXJnaW4tYm90dG9tOiA1OHB4O1xufVxuIiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRhYi1iYXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItaG9tZS1oZWFkZXItbWVudSk7XG4gIC0tY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/crm/tickets/tickets.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/crm/tickets/tickets.page.ts ***!
    \*****************************************************/

  /*! exports provided: TicketsPage */

  /***/
  function srcAppModulesCrmTicketsTicketsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketsPage", function () {
      return TicketsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TicketsPage =
    /*#__PURE__*/
    function () {
      function TicketsPage() {
        _classCallCheck(this, TicketsPage);
      }

      _createClass(TicketsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TicketsPage;
    }();

    TicketsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tickets',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tickets.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/tickets/tickets.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tickets.page.scss */
      "./src/app/modules/crm/tickets/tickets.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TicketsPage);
    /***/
  }
}]);
//# sourceMappingURL=modules-crm-tickets-tickets-module-es5.js.map