(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login/login.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"pd-default\">\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\">\r\n      <br>\r\n      <ion-item>\r\n\r\n        <ion-label position=\"floating\">Usuario o correo</ion-label>\r\n        <ion-input\r\n          formControlName=\"username\"\r\n          type=\"text\">\r\n        </ion-input>\r\n\r\n        <div *ngIf=\"loginForm.controls.username.dirty && loginForm.hasError('required', 'username')\" style=\"color: red\">\r\n          El Usuario o correo es requerido.\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Contraseña</ion-label>\r\n        <ion-input\r\n          formControlName=\"password\"\r\n          type=\"password\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <br/>\r\n      <ion-button\r\n        [disabled]=\"loginForm.invalid\"\r\n        color=\"danger\"\r\n        expand=\"block\"\r\n        type=\"submit\">\r\n        Iniciar Sesión\r\n      </ion-button>\r\n\r\n      <ng-container *ngIf=\"innerWidth < 575\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item lines=\"none\">\r\n              <ion-checkbox [checked]=\"loginForm.get('remember').value\" formControlName=\"remember\" slot=\"start\"></ion-checkbox>\r\n              <ion-label>Recordarme</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"ion-text-center\" color=\"danger\">Olvide mi contraseña</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"innerWidth > 575\">\r\n        <div class=\"ion-text-left recordarme\">\r\n          <ion-checkbox [checked]=\"false\" color=\"primary\" formControlName=\"remember\" id=\"remember\" name='remember'></ion-checkbox>\r\n          <span>Recordarme</span>\r\n        </div>\r\n\r\n        <div class=\"ion-text-right\">\r\n          <ion-button color=\"danger\" fill=\"clear\" routerDirection=\"forward\" routerLink=\"/auth/password-recovery\">Olvide mi\r\n            contraseña\r\n          </ion-button>\r\n        </div>\r\n      </ng-container>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/auth/pages/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/pages/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/pages/login/login.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/auth/pages/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/pages/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".recordarme {\n  position: absolute;\n  padding: 11px 5px;\n}\n.recordarme span {\n  padding: 10px;\n  position: relative;\n  top: -5px;\n}\n.bottom {\n  position: absolute;\n  width: 90%;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy9sb2dpbi9EOlxcbnBtXFxmeDExX21vYmlsZS9zcmNcXGFwcFxcYXV0aFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQ0o7QURHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY29yZGFybWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAxMXB4IDVweDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbiIsIi5yZWNvcmRhcm1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMXB4IDVweDtcbn1cbi5yZWNvcmRhcm1lIHNwYW4ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbn1cblxuLmJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/pages/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/pages/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/toast/toast.service */ "./src/app/shared/services/toast/toast.service.ts");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/user/user.service */ "./src/app/shared/services/user/user.service.ts");
/* harmony import */ var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/sync/sync.service */ "./src/app/shared/services/sync/sync.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var src_app_shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");











let LoginPage = class LoginPage {
    constructor(formBuilder, loaderService, authService, router, toastService, syncService, userService, httpService, storeService) {
        this.formBuilder = formBuilder;
        this.loaderService = loaderService;
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
        this.syncService = syncService;
        this.userService = userService;
        this.httpService = httpService;
        this.storeService = storeService;
        /**
         * onSubmit
         */
        this.onSubmit = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const data = Object.assign({}, this.loginForm.value);
                data.username = data.username.toLowerCase();
                const login = yield this.login(data);
                // recordar usuario
                if (data.remember) {
                    this.storeService.setRemember(true);
                    this.storeService.setRememberData(data);
                }
                else {
                    this.storeService.setRemember(false);
                    this.storeService.removeRememberData();
                }
                if (login && login.code === 1) {
                    this.addPin(login);
                }
                else {
                    if (login !== null) {
                        this.storeService.setUser(login.user);
                        this.storeService.setUserConnections(login.connections);
                        this.storeService.setToken(login.token);
                        this.storeService.setLoginStatus(true);
                        this.makeLogin();
                    }
                }
            }
            catch (e) {
                console.log({ e });
            }
        });
        /**
         * addPin
         * @param login add PIN
         */
        this.addPin = (login) => {
            this.toastService.warningToast(login.message);
            this.loginForm.reset();
            this.storeService.setToken(login.token);
            this.router.navigate(['auth/pin']);
        };
        /**
         * @description hacer login si no tiene pin
         */
        this.makeLogin = () => {
            this.loginForm.reset();
            this.router.navigate(['/home-page']);
        };
        /**
         * filterKeys
         * @param event
         */
        this.filterKeys = (event) => {
            const filter = '0123456789.-kK';
            if (event.key) {
                return filter.includes(event.key);
            }
            return false;
        };
        /**
         * checkRemember
         */
        this.checkRemember = () => {
            if (this.storeService.getRemember()) {
                const rememberData = this.storeService.getRememberData();
                if (rememberData) {
                    this.loginForm.patchValue({
                        username: rememberData.username,
                        password: rememberData.password,
                        remember: [true]
                    });
                    this.loginForm.updateValueAndValidity();
                }
            }
        };
        /**
         * loginEndpoint
         * @param data LoginEndpoint
         */
        this.login = (data) => {
            this.loaderService.startLoader('Iniciando sesion...');
            return new Promise((resolve) => {
                this.authService.login(data).subscribe((success) => {
                    this.loaderService.stopLoader();
                    resolve(success);
                }, error => {
                    this.loaderService.stopLoader();
                    const name = error.error.name;
                    if (name === 'ConnectionsNotFound') {
                        const token = error.error.data.token;
                        resolve({ code: 1, token, user: data, message: error.error.message });
                    }
                    else {
                        this.httpService.errorHandler(error);
                        resolve(null);
                    }
                });
            });
        };
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remember: [false]
        });
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                this.checkRemember();
            }
        });
        this.checkRemember();
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_8__["SyncService"] },
    { type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"] },
    { type: src_app_shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_8__["SyncService"],
        _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
        src_app_shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map