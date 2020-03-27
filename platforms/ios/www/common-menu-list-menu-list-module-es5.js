function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-menu-list-menu-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/common/menu-list/menu-list.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/common/menu-list/menu-list.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageCommonMenuListMenuListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      <strong>Menú</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\">\n  <ion-refresher (ionRefresh)=\"reSync($event)\" class=\"refresher\" slot=\"fixed\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Sincronizando...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngFor=\"let menu of menus; let i = index\" class=\"card-menu-item\">\n    <div\n      (click)=\"navigate(menu)\"\n      [ngClass]=\"{ 'disabled': checkDisabled(menu) }\"\n      class=\"ion-text-center card-menu row-menu\">\n      <div>\n        <ion-icon [color]=\"menu.icon_color\" [name]=\"menu.icon_url\" class=\"icon-size\"></ion-icon>\n        <!--\n        <ion-badge class=\"menu-badge\">1</ion-badge>\n        -->\n        <p class=\"title-menu ion-text-capitalize\">\n          {{ menu.caption }}\n        </p>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home-page/common/menu-list/menu-list.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home-page/common/menu-list/menu-list.module.ts ***!
    \****************************************************************/

  /*! exports provided: MenuListPageModule */

  /***/
  function srcAppHomePageCommonMenuListMenuListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuListPageModule", function () {
      return MenuListPageModule;
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


    var _menu_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu-list.page */
    "./src/app/home-page/common/menu-list/menu-list.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var routes = [{
      path: '',
      component: _menu_list_page__WEBPACK_IMPORTED_MODULE_3__["MenuListPage"]
    }];

    var MenuListPageModule = function MenuListPageModule() {
      _classCallCheck(this, MenuListPageModule);
    };

    MenuListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_menu_list_page__WEBPACK_IMPORTED_MODULE_3__["MenuListPage"]]
    })], MenuListPageModule);
    /***/
  },

  /***/
  "./src/app/home-page/common/menu-list/menu-list.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/home-page/common/menu-list/menu-list.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageCommonMenuListMenuListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.border-separator-right {\n  border-right: 1px solid var(--color-light-separator);\n  border-top: 1px solid var(--color-light-separator);\n}\n\n.border-separator-right:first-child {\n  border-top: 0 !important;\n}\n\n.border-separator-left {\n  border-top: 1px solid var(--color-light-separator);\n}\n\n.border-separator-left:first-child {\n  border-top: 0 !important;\n}\n\n.border-separator-left:nth-child(2) {\n  border-top: 0 !important;\n}\n\n.title-menu {\n  margin-top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.disabled {\n  opacity: 0.5;\n}\n\n.row-menu {\n  background: white;\n  border-radius: 8px;\n  padding: 8px;\n  height: 115px;\n  width: 100%;\n}\n\n.card-menu-item {\n  width: 48.5%;\n  display: inline-block;\n  vertical-align: top;\n  margin: 0.7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9ob21lLXBhZ2UvY29tbW9uL21lbnUtbGlzdC9tZW51LWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvY29tbW9uL21lbnUtbGlzdC9tZW51LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usb0RBQUE7RUFDQSxrREFBQTtBQ0NGOztBRENFO0VBQ0Usd0JBQUE7QUNDSjs7QURHQTtFQUNFLGtEQUFBO0FDQUY7O0FERUU7RUFDRSx3QkFBQTtBQ0FKOztBREdFO0VBQ0Usd0JBQUE7QUNESjs7QURLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jb21tb24vbWVudS1saXN0L21lbnUtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm9yZGVyLXNlcGFyYXRvci1yaWdodCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWxpZ2h0LXNlcGFyYXRvcik7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1saWdodC1zZXBhcmF0b3IpO1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYm9yZGVyLXNlcGFyYXRvci1sZWZ0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWxpZ2h0LXNlcGFyYXRvcik7XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4udGl0bGUtbWVudSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogLjU7XG59XG5cbi5yb3ctbWVudSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLW1lbnUtaXRlbSB7XG4gIHdpZHRoOiA0OC41JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW46IDAuNyU7XG59XG4iLCJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm9yZGVyLXNlcGFyYXRvci1yaWdodCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWxpZ2h0LXNlcGFyYXRvcik7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1saWdodC1zZXBhcmF0b3IpO1xufVxuLmJvcmRlci1zZXBhcmF0b3ItcmlnaHQ6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2VwYXJhdG9yLWxlZnQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItbGlnaHQtc2VwYXJhdG9yKTtcbn1cbi5ib3JkZXItc2VwYXJhdG9yLWxlZnQ6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4uYm9yZGVyLXNlcGFyYXRvci1sZWZ0Om50aC1jaGlsZCgyKSB7XG4gIGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLnRpdGxlLW1lbnUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnJvdy1tZW51IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQtbWVudS1pdGVtIHtcbiAgd2lkdGg6IDQ4LjUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbjogMC43JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/common/menu-list/menu-list.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/home-page/common/menu-list/menu-list.page.ts ***!
    \**************************************************************/

  /*! exports provided: MenuListPage */

  /***/
  function srcAppHomePageCommonMenuListMenuListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuListPage", function () {
      return MenuListPage;
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


    var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/user/user.service */
    "./src/app/shared/services/user/user.service.ts");
    /* harmony import */


    var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/sync/sync.service */
    "./src/app/shared/services/sync/sync.service.ts");
    /* harmony import */


    var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/services/network/network.service */
    "./src/app/shared/services/network/network.service.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var MenuListPage =
    /*#__PURE__*/
    function () {
      function MenuListPage(storage, userService, syncService, authService, toastService, router, networkService, activatedRoute, httpService, loaderService, storeService) {
        var _this = this;

        _classCallCheck(this, MenuListPage);

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

        this.reSync = function (event) {
          _this.syncData();

          event.target.complete();
        };
        /**
         * navigate
         * @param url
         */


        this.navigate = function (menu) {
          if (_this.isOnline || !_this.isOnline && menu.offlineMenu) {
            _this.router.navigate([menu.menu_url], {
              relativeTo: _this.activatedRoute
            });
          }
        };
        /**
         * checkDisabled
         */


        this.checkDisabled = function (menu) {
          return !_this.isOnline && !menu.offlineMenu;
        };
        /**
         * syncData
         */


        this.syncData = function () {
          _this.loaderService.startLoader();

          var user = _this.storeService.getUser();

          var activeConnection = _this.storeService.getActiveConnection();

          _this.syncService.syncData(user.username, activeConnection.superuser ? 1 : 0).subscribe(function (success) {
            var data = success.data;

            _this.storeService.setSyncedData(data);

            _this.loaderService.stopLoader();
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.loaderService.stopLoader();
                      this.httpService.errorHandler(error);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        };
      }

      _createClass(MenuListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.network$ = this.networkService.getNetworkStatus().subscribe(function (status) {
            return _this2.isOnline = status;
          });
          this.store$ = this.storeService.stateChanged.subscribe(function (data) {
            var sync = data.sync;
            _this2.menus = _toConsumableArray(sync.menus);
          });
          this.syncData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.network$.unsubscribe();
          this.store$.unsubscribe();
        }
      }]);

      return MenuListPage;
    }();

    MenuListPage.ctorParameters = function () {
      return [{
        type: _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }, {
        type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"]
      }, {
        type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"]
      }];
    };

    MenuListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/common/menu-list/menu-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu-list.page.scss */
      "./src/app/home-page/common/menu-list/menu-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"]])], MenuListPage);
    /***/
  }
}]);
//# sourceMappingURL=common-menu-list-menu-list-module-es5.js.map