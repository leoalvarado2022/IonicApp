(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-connections-connections-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/connections/connections.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/connections/connections.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      <strong>Conexiones</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ng-container *ngIf=\"connections\">\r\n    <ion-list>\r\n      <ion-item\r\n        (click)=\"selectConnection(connection)\"\r\n        *ngFor=\"let connection of connections\"\r\n        [ngClass]=\"{'connection-active': connection.token === currentConnection.token, 'connection-inactive': connection.token !== currentConnection.token}\">\r\n        <ion-icon [color]=\"connection.token === currentConnection.token ? 'success': 'danger'\" name=\"switch\" slot=\"start\"></ion-icon>\r\n        <ion-label>\r\n          {{ connection.name }}\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ng-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home-page/planning/connections/connections.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home-page/planning/connections/connections.module.ts ***!
  \**********************************************************************/
/*! exports provided: ConnectionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionsPageModule", function() { return ConnectionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _connections_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connections.page */ "./src/app/home-page/planning/connections/connections.page.ts");
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

/***/ "./src/app/home-page/planning/connections/connections.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/home-page/planning/connections/connections.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.title-menu {\n  margin-top: 0;\n}\n\n.connection-active {\n  --color: black;\n}\n\n.connection-inactive {\n  --color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL2Nvbm5lY3Rpb25zL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxob21lLXBhZ2VcXHBsYW5uaW5nXFxjb25uZWN0aW9uc1xcY29ubmVjdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvY29ubmVjdGlvbnMvY29ubmVjdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL2Nvbm5lY3Rpb25zL2Nvbm5lY3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUtbWVudSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmNvbm5lY3Rpb24tYWN0aXZlIHtcclxuICAtLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNvbm5lY3Rpb24taW5hY3RpdmUge1xyXG4gIC0tY29sb3I6IGdyYXk7XHJcbn1cclxuIiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlLW1lbnUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY29ubmVjdGlvbi1hY3RpdmUge1xuICAtLWNvbG9yOiBibGFjaztcbn1cblxuLmNvbm5lY3Rpb24taW5hY3RpdmUge1xuICAtLWNvbG9yOiBncmF5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home-page/planning/connections/connections.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/home-page/planning/connections/connections.page.ts ***!
  \********************************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./connections.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/connections/connections.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./connections.page.scss */ "./src/app/home-page/planning/connections/connections.page.scss")).default]
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
//# sourceMappingURL=planning-connections-connections-module-es2015.js.map