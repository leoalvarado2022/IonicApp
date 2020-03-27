(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-home-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/common/menu/menu.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/common/menu/menu.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu (ionWillOpen)=\"menuReload($event)\" [swipeGesture]=\"false\" contentId=\"loggedContent\" menuId=\"menu\" side=\"start\" type=\"overlay\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title>Menu</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <div class=\"profile ion-text-center\">\r\n      <div>\r\n        <ion-avatar class=\"ion-no-margin\" style=\"margin: 0 auto !important;\">\r\n          <img [src]=\"getAvatar() || 'assets/imgs/user.png'\">\r\n        </ion-avatar>\r\n      </div>\r\n      <p class=\"nameProfile\">\r\n        {{profile?.name + ' ' + profile?.lastName}}\r\n      </p>\r\n      <div>\r\n        <ion-button (click)=\"routerLink('profile')\" color=\"danger\" fill=\"clear\">\r\n          Ver Perfil\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-list>\r\n      <ion-item (click)=\"closeMenu()\" button>\r\n        <ion-icon name=\"home\" slot=\"start\"></ion-icon>\r\n        <ion-label>Inicio</ion-label>\r\n      </ion-item>\r\n      <ng-container *ngIf=\"companies.length > 1\">\r\n        <ion-item (click)=\"routerLink('companies')\" button>\r\n          <ion-icon name=\"business\" slot=\"start\"></ion-icon>\r\n          <ion-label>Empresas</ion-label>\r\n        </ion-item>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"connections.length > 1\">\r\n        <ion-item (click)=\"routerLink('connections')\" button>\r\n          <ion-icon name=\"switch\" slot=\"start\"></ion-icon>\r\n          <ion-label>Conexiones</ion-label>\r\n        </ion-item>\r\n      </ng-container>\r\n      <ion-item button>\r\n        <ion-icon name=\"cloud-download\" slot=\"start\"></ion-icon>\r\n        <ion-label>Agregar PIN</ion-label>\r\n      </ion-item>\r\n      <ion-item button>\r\n        <ion-icon name=\"information-circle\" slot=\"start\"></ion-icon>\r\n        <ion-label>Soporte</ion-label>\r\n      </ion-item>\r\n      <ion-item (click)=\"close()\" button>\r\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\r\n        <ion-label>Cerrar Sesión</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n  <app-menu></app-menu>\r\n  <ion-router-outlet [swipeGesture]=\"false\" id=\"loggedContent\" main></ion-router-outlet>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/home-page/common/menu/menu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home-page/common/menu/menu.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nion-item{\n  --padding-start: 0 !important;\n  --border-color: var(--color-line-light);\n  span{\n    padding: 20px;\n  }\n}\n*/\n.profile {\n  padding: 20px 20px 0 20px !important;\n}\n.nameProfile {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NvbW1vbi9tZW51L0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxob21lLXBhZ2VcXGNvbW1vblxcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL2NvbW1vbi9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBQUE7QUFVQTtFQUNFLG9DQUFBO0FDQUY7QURHQTtFQUNFLGdCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvY29tbW9uL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbmlvbi1pdGVte1xyXG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1saW5lLWxpZ2h0KTtcclxuICBzcGFue1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbn1cclxuKi9cclxuXHJcbi5wcm9maWxlIHtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYW1lUHJvZmlsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4iLCIvKlxuaW9uLWl0ZW17XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItbGluZS1saWdodCk7XG4gIHNwYW57XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuKi9cbi5wcm9maWxlIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDAgMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubmFtZVByb2ZpbGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home-page/common/menu/menu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home-page/common/menu/menu.component.ts ***!
  \*********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/user/user.service */ "./src/app/shared/services/user/user.service.ts");
/* harmony import */ var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/sync/sync.service */ "./src/app/shared/services/sync/sync.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");








let MenuComponent = class MenuComponent {
    constructor(menu, authService, userService, syncService, router, storeService) {
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
        this.routerLink = (router) => {
            this.closeMenu();
            this.router.navigate(['home-page/' + router]);
        };
        /**
         * closeMenu
         */
        this.closeMenu = () => {
            this.menu.close('menu');
        };
        /**
         * close
         */
        this.close = () => {
            this.closeMenu();
            this.storeService.logout();
            this.router.navigate(['auth/login']);
        };
        /**
         * menuReload
         * @param event
         */
        this.menuReload = (event) => {
            this.loadData();
        };
        /**
         * getAvatar
         */
        this.getAvatar = () => {
            if (this.profile && this.profile.avatar) {
                return `data:image/jpeg;base64,${this.profile.avatar}`;
            }
            return null;
        };
        /**
         *
         */
        this.loadData = () => {
            const user = this.storeService.getUser();
            const connections = this.storeService.getUserConnections();
            const companies = this.storeService.getCompanies();
            this.profile = user;
            this.connections = [...connections];
            this.companies = [...companies];
        };
    }
    ngOnInit() {
        this.loadData();
    }
};
MenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/common/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.scss */ "./src/app/home-page/common/menu/menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"]])
], MenuComponent);



/***/ }),

/***/ "./src/app/home-page/home-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/home-page/home-page.module.ts ***!
  \***********************************************/
/*! exports provided: HomePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePagePageModule", function() { return HomePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.page */ "./src/app/home-page/home-page.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/menu/menu.component */ "./src/app/home-page/common/menu/menu.component.ts");
/* harmony import */ var _planning_services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planning/services/contract-detail/contract-detail.service */ "./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts");







const routes = [
    {
        path: '',
        component: _home_page_page__WEBPACK_IMPORTED_MODULE_3__["HomePagePage"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | common-menu-list-menu-list-module */ "common-menu-list-menu-list-module").then(__webpack_require__.bind(null, /*! ./common/menu-list/menu-list.module */ "./src/app/home-page/common/menu-list/menu-list.module.ts")).then(module => module.MenuListPageModule)
            },
            {
                path: 'companies',
                loadChildren: () => __webpack_require__.e(/*! import() | planning-companies-companies-module */ "planning-companies-companies-module").then(__webpack_require__.bind(null, /*! ./planning/companies/companies.module */ "./src/app/home-page/planning/companies/companies.module.ts")).then(module => module.CompaniesPageModule)
            },
            {
                path: 'connections',
                loadChildren: () => __webpack_require__.e(/*! import() | planning-connections-connections-module */ "planning-connections-connections-module").then(__webpack_require__.bind(null, /*! ./planning/connections/connections.module */ "./src/app/home-page/planning/connections/connections.module.ts")).then(module => module.ConnectionsPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | planning-profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("planning-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./planning/profile/profile.module */ "./src/app/home-page/planning/profile/profile.module.ts")).then(module => module.ProfilePageModule)
            },
            {
                path: 'produccion_centrocosto',
                loadChildren: () => __webpack_require__.e(/*! import() | planning-center-cost-center-cost-module */ "planning-center-cost-center-cost-module").then(__webpack_require__.bind(null, /*! ./planning/center-cost/center-cost.module */ "./src/app/home-page/planning/center-cost/center-cost.module.ts")).then(module => module.CenterCostPageModule)
            },
            {
                path: 'contract-detail',
                loadChildren: () => __webpack_require__.e(/*! import() | planning-contract-detail-contract-detail-module */ "planning-contract-detail-contract-detail-module").then(__webpack_require__.bind(null, /*! ./planning/contract-detail/contract-detail.module */ "./src/app/home-page/planning/contract-detail/contract-detail.module.ts")).then(module => module.ContractDetailPageModule),
            },
            {
                path: 'harvest-estimate',
                loadChildren: () => __webpack_require__.e(/*! import() | planning-harvest-estimate-harvest-estimate-module */ "planning-harvest-estimate-harvest-estimate-module").then(__webpack_require__.bind(null, /*! ./planning/harvest-estimate/harvest-estimate.module */ "./src/app/home-page/planning/harvest-estimate/harvest-estimate.module.ts")).then(module => module.HarvestEstimatePageModule),
            },
            {
                path: 'quality-estimate',
                loadChildren: () => __webpack_require__.e(/*! import() | planning-quality-estimate-quality-estimate-module */ "planning-quality-estimate-quality-estimate-module").then(__webpack_require__.bind(null, /*! ./planning/quality-estimate/quality-estimate.module */ "./src/app/home-page/planning/quality-estimate/quality-estimate.module.ts")).then(module => module.QualityEstimatePageModule),
            },
            {
                path: 'notes',
                loadChildren: () => __webpack_require__.e(/*! import() | planning-notes-notes-module */ "planning-notes-notes-module").then(__webpack_require__.bind(null, /*! ./planning/notes/notes.module */ "./src/app/home-page/planning/notes/notes.module.ts")).then(module => module.NotesPageModule)
            },
            {
                path: 'tarja_cuadrillas',
                loadChildren: () => Promise.all(/*! import() | rem-rem-quadrille-rem-quadrille-module */[__webpack_require__.e("common"), __webpack_require__.e("rem-rem-quadrille-rem-quadrille-module")]).then(__webpack_require__.bind(null, /*! ./rem/rem-quadrille/rem-quadrille.module */ "./src/app/home-page/rem/rem-quadrille/rem-quadrille.module.ts")).then(module => module.RemQuadrillePageModule)
            },
            {
                path: 'rem-workers',
                loadChildren: () => Promise.all(/*! import() | rem-rem-workers-rem-workers-module */[__webpack_require__.e("common"), __webpack_require__.e("rem-rem-workers-rem-workers-module")]).then(__webpack_require__.bind(null, /*! ./rem/rem-workers/rem-workers.module */ "./src/app/home-page/rem/rem-workers/rem-workers.module.ts")).then(module => module.RemWorkersPageModule)
            },
            {
                path: 'crm_tickets',
                loadChildren: () => __webpack_require__.e(/*! import() | crm-tickets-tickets-module */ "crm-tickets-tickets-module").then(__webpack_require__.bind(null, /*! ./crm/tickets/tickets.module */ "./src/app/home-page/crm/tickets/tickets.module.ts")).then(module => module.TicketsPageModule)
            },
            {
                path: 'ticket-details-list',
                loadChildren: () => __webpack_require__.e(/*! import() | crm-ticket-details-list-ticket-details-list-module */ "crm-ticket-details-list-ticket-details-list-module").then(__webpack_require__.bind(null, /*! ./crm/ticket-details-list/ticket-details-list.module */ "./src/app/home-page/crm/ticket-details-list/ticket-details-list.module.ts")).then(module => module.TicketDetailsListPageModule)
            },
            {
                path: 'ticket-form',
                loadChildren: () => __webpack_require__.e(/*! import() | crm-ticket-form-ticket-form-module */ "crm-ticket-form-ticket-form-module").then(__webpack_require__.bind(null, /*! ./crm/ticket-form/ticket-form.module */ "./src/app/home-page/crm/ticket-form/ticket-form.module.ts")).then(module => module.TicketFormPageModule)
            }
        ]
    },
];
let HomePagePageModule = class HomePagePageModule {
};
HomePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _home_page_page__WEBPACK_IMPORTED_MODULE_3__["HomePagePage"],
            _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]
        ],
        providers: [
            _planning_services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_6__["ContractDetailService"]
        ]
    })
], HomePagePageModule);



/***/ }),

/***/ "./src/app/home-page/home-page.page.scss":
/*!***********************************************!*\
  !*** ./src/app/home-page/home-page.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home-page/home-page.page.ts":
/*!*********************************************!*\
  !*** ./src/app/home-page/home-page.page.ts ***!
  \*********************************************/
/*! exports provided: HomePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePagePage", function() { return HomePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/geolocation/geolocation.service */ "./src/app/shared/services/geolocation/geolocation.service.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");





let HomePagePage = class HomePagePage {
    constructor(geolocationService, authService, storeService) {
        this.geolocationService = geolocationService;
        this.authService = authService;
        this.storeService = storeService;
    }
    ngOnInit() {
        const user = this.storeService.getUser();
        const token = this.storeService.getPushToken();
        this.authService.savePushToken(user.id, token).subscribe(success => {
            // BIEN
        }, error => {
            // MAL
        });
    }
};
HomePagePage.ctorParameters = () => [
    { type: _shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"] },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }
];
HomePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.page.scss */ "./src/app/home-page/home-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"],
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]])
], HomePagePage);



/***/ })

}]);
//# sourceMappingURL=home-page-home-page-module-es2015.js.map