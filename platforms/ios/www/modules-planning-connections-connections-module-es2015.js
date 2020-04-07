(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-planning-connections-connections-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/connections/connections.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/connections/connections.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      <strong>Conexiones</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"connections\">\n    <ion-list>\n      <ion-item\n        (click)=\"selectConnection(connection)\"\n        *ngFor=\"let connection of connections\"\n        [ngClass]=\"{'connection-active': connection.token === currentConnection.token, 'connection-inactive': connection.token !== currentConnection.token}\">\n        <ion-icon [color]=\"connection.token === currentConnection.token ? 'success': 'danger'\" name=\"switch\" slot=\"start\"></ion-icon>\n        <ion-label>\n          {{ connection.name }}\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modules/planning/connections/connections.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/planning/connections/connections.module.ts ***!
  \********************************************************************/
/*! exports provided: ConnectionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionsPageModule", function() { return ConnectionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _connections_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connections.page */ "./src/app/modules/planning/connections/connections.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _connections_page__WEBPACK_IMPORTED_MODULE_3__["ConnectionsPage"]
    }
];
let ConnectionsPageModule = class ConnectionsPageModule {
};
ConnectionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [_connections_page__WEBPACK_IMPORTED_MODULE_3__["ConnectionsPage"]]
    })
], ConnectionsPageModule);



/***/ }),

/***/ "./src/app/modules/planning/connections/connections.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/planning/connections/connections.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.title-menu {\n  margin-top: 0;\n}\n\n.connection-active {\n  --color: black;\n}\n\n.connection-inactive {\n  --color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL3BsYW5uaW5nL2Nvbm5lY3Rpb25zL2Nvbm5lY3Rpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbGFubmluZy9jb25uZWN0aW9ucy9jb25uZWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BsYW5uaW5nL2Nvbm5lY3Rpb25zL2Nvbm5lY3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZS1tZW51IHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmNvbm5lY3Rpb24tYWN0aXZlIHtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG5cbi5jb25uZWN0aW9uLWluYWN0aXZlIHtcbiAgLS1jb2xvcjogZ3JheTtcbn1cbiIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZS1tZW51IHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmNvbm5lY3Rpb24tYWN0aXZlIHtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG5cbi5jb25uZWN0aW9uLWluYWN0aXZlIHtcbiAgLS1jb2xvcjogZ3JheTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/planning/connections/connections.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/planning/connections/connections.page.ts ***!
  \******************************************************************/
/*! exports provided: ConnectionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionsPage", function() { return ConnectionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/user/user.service */ "./src/app/shared/services/user/user.service.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/sync/sync.service */ "./src/app/shared/services/sync/sync.service.ts");
/* harmony import */ var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/toast/toast.service */ "./src/app/shared/services/toast/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");










let ConnectionsPage = class ConnectionsPage {
    constructor(userService, authService, syncService, toastService, router, httpService, loaderService, storeService) {
        this.userService = userService;
        this.authService = authService;
        this.syncService = syncService;
        this.toastService = toastService;
        this.router = router;
        this.httpService = httpService;
        this.loaderService = loaderService;
        this.storeService = storeService;
        this.connections = [];
        this.currentConnection = null;
        this.userData = null;
        /**
         * selectConnection
         * @param connection
         */
        this.selectConnection = (connection) => {
            if (connection.token !== this.currentConnection.token) {
                this.storeService.setActiveConnection(connection);
                this.syncMobile();
            }
        };
        /**
         * syncMobile
         */
        this.syncMobile = () => {
            this.loaderService.startLoader('Sincronizando...');
            this.syncService.syncData(this.userData.username, this.currentConnection.superuser ? 1 : 0).subscribe((success) => {
                const data = success.data;
                this.storeService.setSyncedData(data);
                this.loadConnections();
                this.router.navigate(['home-page']);
                this.loaderService.stopLoader();
            }, error => {
                this.loaderService.stopLoader();
                this.httpService.errorHandler(error);
            });
        };
        /**
         * loadConnections
         */
        this.loadConnections = () => {
            this.loaderService.startLoader('Cargando conexiones...');
            this.userData = this.storeService.getUser();
            this.currentConnection = this.storeService.getActiveConnection();
            this.connections = this.storeService.getUserConnections();
            this.loaderService.stopLoader();
        };
    }
    ngOnInit() {
        this.loadConnections();
    }
};
ConnectionsPage.ctorParameters = () => [
    { type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"] },
    { type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_9__["StoreService"] }
];
ConnectionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-connections',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./connections.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/connections/connections.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./connections.page.scss */ "./src/app/modules/planning/connections/connections.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"],
        _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_9__["StoreService"]])
], ConnectionsPage);



/***/ })

}]);
//# sourceMappingURL=modules-planning-connections-connections-module-es2015.js.map