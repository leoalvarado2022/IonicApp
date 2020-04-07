function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-home-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageHomePagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\n  <app-menu></app-menu>\n  <ion-router-outlet [swipeGesture]=\"false\" id=\"loggedContent\" main></ion-router-outlet>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/menu/menu.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/menu/menu.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCommonMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-menu (ionWillOpen)=\"menuReload($event)\" [swipeGesture]=\"false\" contentId=\"loggedContent\" menuId=\"menu\" side=\"start\" type=\"overlay\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <div class=\"profile ion-text-center\">\n      <div>\n        <ion-avatar class=\"ion-no-margin\" style=\"margin: 0 auto !important;\">\n          <img [src]=\"getAvatar() || 'assets/imgs/user.png'\">\n        </ion-avatar>\n      </div>\n      <p class=\"nameProfile\">\n        {{profile?.name + ' ' + profile?.lastName}}\n      </p>\n      <div>\n        <ion-button (click)=\"routerLink('profile')\" color=\"danger\" fill=\"clear\">\n          Ver Perfil\n        </ion-button>\n      </div>\n    </div>\n\n    <ion-list>\n      <ion-item (click)=\"closeMenu()\" button>\n        <ion-icon name=\"home\" slot=\"start\"></ion-icon>\n        <ion-label>Inicio</ion-label>\n      </ion-item>\n      <ng-container *ngIf=\"companies.length > 1\">\n        <ion-item (click)=\"routerLink('companies')\" button>\n          <ion-icon name=\"business\" slot=\"start\"></ion-icon>\n          <ion-label>Empresas</ion-label>\n        </ion-item>\n      </ng-container>\n      <ng-container *ngIf=\"connections.length > 1\">\n        <ion-item (click)=\"routerLink('connections')\" button>\n          <ion-icon name=\"switch\" slot=\"start\"></ion-icon>\n          <ion-label>Conexiones</ion-label>\n        </ion-item>\n      </ng-container>\n      <ion-item button>\n        <ion-icon name=\"cloud-download\" slot=\"start\"></ion-icon>\n        <ion-label>Agregar PIN</ion-label>\n      </ion-item>\n      <ion-item button>\n        <ion-icon name=\"information-circle\" slot=\"start\"></ion-icon>\n        <ion-label>Soporte</ion-label>\n      </ion-item>\n      <ion-item (click)=\"close()\" button>\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n        <ion-label>Cerrar Sesión</ion-label>\n      </ion-item>\n    </ion-list>\n\n  </ion-content>\n</ion-menu>\n\n";
    /***/
  },

  /***/
  "./src/app/home-page/home-page.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/home-page/home-page.module.ts ***!
    \***********************************************/

  /*! exports provided: HomePagePageModule */

  /***/
  function srcAppHomePageHomePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePagePageModule", function () {
      return HomePagePageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-page.page */
    "./src/app/home-page/home-page.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _modules_common_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../modules/common/menu/menu.component */
    "./src/app/modules/common/menu/menu.component.ts");
    /* harmony import */


    var _modules_planning_services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modules/planning/services/contract-detail/contract-detail.service */
    "./src/app/modules/planning/services/contract-detail/contract-detail.service.ts");

    var routes = [{
      path: '',
      component: _home_page_page__WEBPACK_IMPORTED_MODULE_3__["HomePagePage"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-common-menu-list-menu-list-module */
          "modules-common-menu-list-menu-list-module").then(__webpack_require__.bind(null,
          /*! ../modules/common/menu-list/menu-list.module */
          "./src/app/modules/common/menu-list/menu-list.module.ts")).then(function (module) {
            return module.MenuListPageModule;
          });
        }
      }, {
        path: 'companies',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-planning-companies-companies-module */
          "modules-planning-companies-companies-module").then(__webpack_require__.bind(null,
          /*! ../modules/planning/companies/companies.module */
          "./src/app/modules/planning/companies/companies.module.ts")).then(function (module) {
            return module.CompaniesPageModule;
          });
        }
      }, {
        path: 'connections',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-planning-connections-connections-module */
          "modules-planning-connections-connections-module").then(__webpack_require__.bind(null,
          /*! ../modules/planning/connections/connections.module */
          "./src/app/modules/planning/connections/connections.module.ts")).then(function (module) {
            return module.ConnectionsPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-planning-profile-profile-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modules-planning-profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ../modules/planning/profile/profile.module */
          "./src/app/modules/planning/profile/profile.module.ts")).then(function (module) {
            return module.ProfilePageModule;
          });
        }
      }, {
        path: 'produccion_centrocosto',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-planning-center-cost-center-cost-module */
          "modules-planning-center-cost-center-cost-module").then(__webpack_require__.bind(null,
          /*! ../modules/planning/center-cost/center-cost.module */
          "./src/app/modules/planning/center-cost/center-cost.module.ts")).then(function (module) {
            return module.CenterCostPageModule;
          });
        }
      }, {
        path: 'contract-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-planning-contract-detail-contract-detail-module */
          "modules-planning-contract-detail-contract-detail-module").then(__webpack_require__.bind(null,
          /*! ../modules/planning/contract-detail/contract-detail.module */
          "./src/app/modules/planning/contract-detail/contract-detail.module.ts")).then(function (module) {
            return module.ContractDetailPageModule;
          });
        }
      }, {
        path: 'harvest-estimate',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-planning-harvest-estimate-harvest-estimate-module */
          "modules-planning-harvest-estimate-harvest-estimate-module").then(__webpack_require__.bind(null,
          /*! ../modules/planning/harvest-estimate/harvest-estimate.module */
          "./src/app/modules/planning/harvest-estimate/harvest-estimate.module.ts")).then(function (module) {
            return module.HarvestEstimatePageModule;
          });
        }
      }, {
        path: 'quality-estimate',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-planning-quality-estimate-quality-estimate-module */
          "modules-planning-quality-estimate-quality-estimate-module").then(__webpack_require__.bind(null,
          /*! ../modules/planning/quality-estimate/quality-estimate.module */
          "./src/app/modules/planning/quality-estimate/quality-estimate.module.ts")).then(function (module) {
            return module.QualityEstimatePageModule;
          });
        }
      }, {
        path: 'notes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-planning-notes-notes-module */
          "modules-planning-notes-notes-module").then(__webpack_require__.bind(null,
          /*! ../modules/planning/notes/notes.module */
          "./src/app/modules/planning/notes/notes.module.ts")).then(function (module) {
            return module.NotesPageModule;
          });
        }
      }, {
        path: 'tarja_cuadrillas',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-rem-rem-quadrille-rem-quadrille-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modules-rem-rem-quadrille-rem-quadrille-module")]).then(__webpack_require__.bind(null,
          /*! ../modules/rem/rem-quadrille/rem-quadrille.module */
          "./src/app/modules/rem/rem-quadrille/rem-quadrille.module.ts")).then(function (module) {
            return module.RemQuadrillePageModule;
          });
        }
      }, {
        path: 'rem-workers',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-rem-rem-workers-rem-workers-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modules-rem-rem-workers-rem-workers-module")]).then(__webpack_require__.bind(null,
          /*! ../modules/rem/rem-workers/rem-workers.module */
          "./src/app/modules/rem/rem-workers/rem-workers.module.ts")).then(function (module) {
            return module.RemWorkersPageModule;
          });
        }
      }, {
        path: 'crm_tickets',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-crm-tickets-tickets-module */
          "modules-crm-tickets-tickets-module").then(__webpack_require__.bind(null,
          /*! ../modules/crm/tickets/tickets.module */
          "./src/app/modules/crm/tickets/tickets.module.ts")).then(function (module) {
            return module.TicketsPageModule;
          });
        }
      }, {
        path: 'ticket-details-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-crm-ticket-details-list-ticket-details-list-module */
          "modules-crm-ticket-details-list-ticket-details-list-module").then(__webpack_require__.bind(null,
          /*! ../modules/crm/ticket-details-list/ticket-details-list.module */
          "./src/app/modules/crm/ticket-details-list/ticket-details-list.module.ts")).then(function (module) {
            return module.TicketDetailsListPageModule;
          });
        }
      }, {
        path: 'ticket-form',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-crm-ticket-form-ticket-form-module */
          "modules-crm-ticket-form-ticket-form-module").then(__webpack_require__.bind(null,
          /*! ../modules/crm/ticket-form/ticket-form.module */
          "./src/app/modules/crm/ticket-form/ticket-form.module.ts")).then(function (module) {
            return module.TicketFormPageModule;
          });
        }
      }, {
        path: 'tarja_contrato',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-contracts-contracts-list-contracts-list-module */
          "modules-contracts-contracts-list-contracts-list-module").then(__webpack_require__.bind(null,
          /*! ../modules/contracts/contracts-list/contracts-list.module */
          "./src/app/modules/contracts/contracts-list/contracts-list.module.ts")).then(function (module) {
            return module.ContractsListPageModule;
          });
        }
      }]
    }];

    var HomePagePageModule = function HomePagePageModule() {
      _classCallCheck(this, HomePagePageModule);
    };

    HomePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_home_page_page__WEBPACK_IMPORTED_MODULE_3__["HomePagePage"], _modules_common_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]],
      providers: [_modules_planning_services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_6__["ContractDetailService"]]
    })], HomePagePageModule);
    /***/
  },

  /***/
  "./src/app/home-page/home-page.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/home-page/home-page.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageHomePagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home-page/home-page.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/home-page/home-page.page.ts ***!
    \*********************************************/

  /*! exports provided: HomePagePage */

  /***/
  function srcAppHomePageHomePagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePagePage", function () {
      return HomePagePage;
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


    var _shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/geolocation/geolocation.service */
    "./src/app/shared/services/geolocation/geolocation.service.ts");
    /* harmony import */


    var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var HomePagePage =
    /*#__PURE__*/
    function () {
      function HomePagePage(geolocationService, authService, storeService) {
        _classCallCheck(this, HomePagePage);

        this.geolocationService = geolocationService;
        this.authService = authService;
        this.storeService = storeService;
      }

      _createClass(HomePagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var user = this.storeService.getUser();
          var token = this.storeService.getPushToken();
          this.authService.savePushToken(user.id, token).subscribe(function (success) {// BIEN
          }, function (error) {// MAL
          });
        }
      }]);

      return HomePagePage;
    }();

    HomePagePage.ctorParameters = function () {
      return [{
        type: _shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"]
      }, {
        type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]
      }];
    };

    HomePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.page.scss */
      "./src/app/home-page/home-page.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]])], HomePagePage);
    /***/
  },

  /***/
  "./src/app/modules/common/menu/menu.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/modules/common/menu/menu.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCommonMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\nion-item{\n  --padding-start: 0 !important;\n  --border-color: var(--color-line-light);\n  span{\n    padding: 20px;\n  }\n}\n*/\n.profile {\n  padding: 20px 20px 0 20px !important;\n}\n.nameProfile {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL2NvbW1vbi9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29tbW9uL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Q0FBQTtBQVVBO0VBQ0Usb0NBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9uL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5pb24taXRlbXtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1saW5lLWxpZ2h0KTtcbiAgc3BhbntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4qL1xuXG4ucHJvZmlsZSB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHggIWltcG9ydGFudDtcbn1cblxuLm5hbWVQcm9maWxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiIsIi8qXG5pb24taXRlbXtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1saW5lLWxpZ2h0KTtcbiAgc3BhbntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4qL1xuLnByb2ZpbGUge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lUHJvZmlsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/common/menu/menu.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/common/menu/menu.component.ts ***!
    \*******************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppModulesCommonMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/user/user.service */
    "./src/app/shared/services/user/user.service.ts");
    /* harmony import */


    var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/sync/sync.service */
    "./src/app/shared/services/sync/sync.service.ts");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(menu, authService, userService, syncService, router, storeService) {
        var _this = this;

        _classCallCheck(this, MenuComponent);

        this.menu = menu;
        this.authService = authService;
        this.userService = userService;
        this.syncService = syncService;
        this.router = router;
        this.storeService = storeService;
        this.profile = null;
        this.connections = [];
        this.companies = [];
        /**
         * routerLink
         * @param router
         */

        this.routerLink = function (router) {
          _this.closeMenu();

          _this.router.navigate(['home-page/' + router]);
        };
        /**
         * closeMenu
         */


        this.closeMenu = function () {
          _this.menu.close('menu');
        };
        /**
         * close
         */


        this.close = function () {
          _this.closeMenu();

          _this.storeService.logout();

          _this.router.navigate(['auth/login']);
        };
        /**
         * menuReload
         * @param event
         */


        this.menuReload = function (event) {
          _this.loadData();
        };
        /**
         * getAvatar
         */


        this.getAvatar = function () {
          if (_this.profile && _this.profile.avatar) {
            return "data:image/jpeg;base64,".concat(_this.profile.avatar);
          }

          return null;
        };
        /**
         *
         */


        this.loadData = function () {
          var user = _this.storeService.getUser();

          var connections = _this.storeService.getUserConnections();

          var companies = _this.storeService.getCompanies();

          _this.profile = user;
          _this.connections = _toConsumableArray(connections);
          _this.companies = _toConsumableArray(companies);
        };
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/modules/common/menu/menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"]])], MenuComponent);
    /***/
  }
}]);
//# sourceMappingURL=home-page-home-page-module-es5.js.map