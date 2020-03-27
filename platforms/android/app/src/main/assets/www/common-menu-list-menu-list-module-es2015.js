(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-menu-list-menu-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/common/menu-list/menu-list.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/common/menu-list/menu-list.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      <strong>Menú</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content\">\r\n  <ion-refresher (ionRefresh)=\"reSync($event)\" class=\"refresher\" slot=\"fixed\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Sincronizando...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div *ngFor=\"let menu of menus; let i = index\" class=\"card-menu-item\">\r\n    <div\r\n      (click)=\"navigate(menu)\"\r\n      [ngClass]=\"{ 'disabled': checkDisabled(menu) }\"\r\n      class=\"ion-text-center card-menu row-menu\">\r\n      <div>\r\n        <ion-icon [color]=\"menu.icon_color\" [name]=\"menu.icon_url\" class=\"icon-size\"></ion-icon>\r\n        <!--\r\n        <ion-badge class=\"menu-badge\">1</ion-badge>\r\n        -->\r\n        <p class=\"title-menu ion-text-capitalize\">\r\n          {{ menu.caption }}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home-page/common/menu-list/menu-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home-page/common/menu-list/menu-list.module.ts ***!
  \****************************************************************/
/*! exports provided: MenuListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListPageModule", function() { return MenuListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-list.page */ "./src/app/home-page/common/menu-list/menu-list.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _menu_list_page__WEBPACK_IMPORTED_MODULE_3__["MenuListPage"]
    }
];
let MenuListPageModule = class MenuListPageModule {
};
MenuListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _menu_list_page__WEBPACK_IMPORTED_MODULE_3__["MenuListPage"]
        ]
    })
], MenuListPageModule);



/***/ }),

/***/ "./src/app/home-page/common/menu-list/menu-list.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/home-page/common/menu-list/menu-list.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.border-separator-right {\n  border-right: 1px solid var(--color-light-separator);\n  border-top: 1px solid var(--color-light-separator);\n}\n\n.border-separator-right:first-child {\n  border-top: 0 !important;\n}\n\n.border-separator-left {\n  border-top: 1px solid var(--color-light-separator);\n}\n\n.border-separator-left:first-child {\n  border-top: 0 !important;\n}\n\n.border-separator-left:nth-child(2) {\n  border-top: 0 !important;\n}\n\n.title-menu {\n  margin-top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.disabled {\n  opacity: 0.5;\n}\n\n.row-menu {\n  background: white;\n  border-radius: 8px;\n  padding: 8px;\n  height: 115px;\n  width: 100%;\n}\n\n.card-menu-item {\n  width: 48.5%;\n  display: inline-block;\n  vertical-align: top;\n  margin: 0.7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NvbW1vbi9tZW51LWxpc3QvRDpcXG5wbVxcZngxMV9tb2JpbGUvc3JjXFxhcHBcXGhvbWUtcGFnZVxcY29tbW9uXFxtZW51LWxpc3RcXG1lbnUtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9jb21tb24vbWVudS1saXN0L21lbnUtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvREFBQTtFQUNBLGtEQUFBO0FDQ0Y7O0FEQ0U7RUFDRSx3QkFBQTtBQ0NKOztBREdBO0VBQ0Usa0RBQUE7QUNBRjs7QURFRTtFQUNFLHdCQUFBO0FDQUo7O0FER0U7RUFDRSx3QkFBQTtBQ0RKOztBREtBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2NvbW1vbi9tZW51LWxpc3QvbWVudS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYm9yZGVyLXNlcGFyYXRvci1yaWdodCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tY29sb3ItbGlnaHQtc2VwYXJhdG9yKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItbGlnaHQtc2VwYXJhdG9yKTtcclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9yZGVyLXNlcGFyYXRvci1sZWZ0IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItbGlnaHQtc2VwYXJhdG9yKTtcclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUtbWVudSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbi5yb3ctbWVudSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBoZWlnaHQ6IDExNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1tZW51LWl0ZW0ge1xyXG4gIHdpZHRoOiA0OC41JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtYXJnaW46IDAuNyU7XHJcbn1cclxuIiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvcmRlci1zZXBhcmF0b3ItcmlnaHQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1saWdodC1zZXBhcmF0b3IpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItbGlnaHQtc2VwYXJhdG9yKTtcbn1cbi5ib3JkZXItc2VwYXJhdG9yLXJpZ2h0OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXNlcGFyYXRvci1sZWZ0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWxpZ2h0LXNlcGFyYXRvcik7XG59XG4uYm9yZGVyLXNlcGFyYXRvci1sZWZ0OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLmJvcmRlci1zZXBhcmF0b3ItbGVmdDpudGgtY2hpbGQoMikge1xuICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZS1tZW51IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5yb3ctbWVudSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLW1lbnUtaXRlbSB7XG4gIHdpZHRoOiA0OC41JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW46IDAuNyU7XG59Il19 */");

/***/ }),

/***/ "./src/app/home-page/common/menu-list/menu-list.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/home-page/common/menu-list/menu-list.page.ts ***!
  \**************************************************************/
/*! exports provided: MenuListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListPage", function() { return MenuListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/user/user.service */ "./src/app/shared/services/user/user.service.ts");
/* harmony import */ var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/sync/sync.service */ "./src/app/shared/services/sync/sync.service.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/toast/toast.service */ "./src/app/shared/services/toast/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/network/network.service */ "./src/app/shared/services/network/network.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");












let MenuListPage = class MenuListPage {
    constructor(storage, userService, syncService, authService, toastService, router, networkService, activatedRoute, httpService, loaderService, storeService) {
        this.storage = storage;
        this.userService = userService;
        this.syncService = syncService;
        this.authService = authService;
        this.toastService = toastService;
        this.router = router;
        this.networkService = networkService;
        this.activatedRoute = activatedRoute;
        this.httpService = httpService;
        this.loaderService = loaderService;
        this.storeService = storeService;
        this.menus = [];
        /**
         * reSync
         * @param event
         */
        this.reSync = (event) => {
            this.syncData();
            event.target.complete();
        };
        /**
         * navigate
         * @param url
         */
        this.navigate = (menu) => {
            if (this.isOnline || (!this.isOnline && menu.offlineMenu)) {
                this.router.navigate([menu.menu_url], { relativeTo: this.activatedRoute });
            }
        };
        /**
         * checkDisabled
         */
        this.checkDisabled = (menu) => {
            return !this.isOnline && !menu.offlineMenu;
        };
        /**
         * syncData
         */
        this.syncData = () => {
            this.loaderService.startLoader();
            const user = this.storeService.getUser();
            const activeConnection = this.storeService.getActiveConnection();
            this.syncService.syncData(user.username, activeConnection.superuser ? 1 : 0).subscribe((success) => {
                const data = success.data;
                this.storeService.setSyncedData(data);
                this.loaderService.stopLoader();
            }, (error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.loaderService.stopLoader();
                this.httpService.errorHandler(error);
            }));
        };
    }
    ngOnInit() {
        this.network$ = this.networkService.getNetworkStatus().subscribe((status) => this.isOnline = status);
        this.store$ = this.storeService.stateChanged.subscribe(data => {
            const { sync } = data;
            this.menus = [...sync.menus];
        });
        this.syncData();
    }
    ngOnDestroy() {
        this.network$.unsubscribe();
        this.store$.unsubscribe();
    }
};
MenuListPage.ctorParameters = () => [
    { type: _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"] },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"] }
];
MenuListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/common/menu-list/menu-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-list.page.scss */ "./src/app/home-page/common/menu-list/menu-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
        _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"],
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"]])
], MenuListPage);



/***/ })

}]);
//# sourceMappingURL=common-menu-list-menu-list-module-es2015.js.map