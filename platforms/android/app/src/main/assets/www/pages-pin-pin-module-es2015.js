(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pin-pin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/pin/pin.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/pin/pin.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"white\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"title-header\">\r\n    <h3 class=\"ion-text-left\">PIN</h3>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"pd-default\">\r\n    <br>\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"pinForm\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">PIN</ion-label>\r\n        <ion-input\r\n          formControlName=\"pin\"\r\n          type=\"number\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"pinForm.controls.pin.dirty && pinForm.hasError('required', 'pin')\" style=\"color: red\">\r\n        El Pin es requerido\r\n      </div>\r\n\r\n      <br/>\r\n      <ion-button\r\n        [disabled]=\"pinForm.invalid\"\r\n        color=\"danger\"\r\n        expand=\"block\"\r\n        type=\"submit\">\r\n        Aceptar\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/auth/pages/pin/pin.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/pages/pin/pin.module.ts ***!
  \**********************************************/
/*! exports provided: PinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPageModule", function() { return PinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pin.page */ "./src/app/auth/pages/pin/pin.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _pin_page__WEBPACK_IMPORTED_MODULE_6__["PinPage"]
    }
];
let PinPageModule = class PinPageModule {
};
PinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pin_page__WEBPACK_IMPORTED_MODULE_6__["PinPage"]]
    })
], PinPageModule);



/***/ }),

/***/ "./src/app/auth/pages/pin/pin.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/pages/pin/pin.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--color-login-header);\n}\n\nion-header {\n  --background: var(--color-login-header);\n  background: var(--color-login-header);\n  --color: white;\n  color: white;\n}\n\nion-header .title-header {\n  background: var(--color-login-header);\n}\n\nion-header .title-header h3 {\n  padding-left: 5%;\n}\n\n@media (min-width: 360px) {\n  ion-header .title-header h3 {\n    padding-bottom: 10px;\n    padding-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy9waW4vRDpcXG5wbVxcZngxMV9tb2JpbGUvc3JjXFxhcHBcXGF1dGhcXHBhZ2VzXFxwaW5cXHBpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvcGFnZXMvcGluL3Bpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxxQ0FBQTtBQ0NKOztBRENJO0VBQ0UsZ0JBQUE7QUNDTjs7QURBTTtFQUZGO0lBR0ksb0JBQUE7SUFDQSxpQkFBQTtFQ0dOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3BhZ2VzL3Bpbi9waW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbG9naW4taGVhZGVyKTtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxvZ2luLWhlYWRlcik7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAudGl0bGUtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxvZ2luLWhlYWRlcik7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbG9naW4taGVhZGVyKTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbG9naW4taGVhZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbG9naW4taGVhZGVyKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgLnRpdGxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxvZ2luLWhlYWRlcik7XG59XG5pb24taGVhZGVyIC50aXRsZS1oZWFkZXIgaDMge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSB7XG4gIGlvbi1oZWFkZXIgLnRpdGxlLWhlYWRlciBoMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/pages/pin/pin.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/pages/pin/pin.page.ts ***!
  \********************************************/
/*! exports provided: PinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPage", function() { return PinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/toast/toast.service */ "./src/app/shared/services/toast/toast.service.ts");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/user/user.service */ "./src/app/shared/services/user/user.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");









let PinPage = class PinPage {
    constructor(formBuilder, loaderService, authService, userService, router, toastService, httpService) {
        this.formBuilder = formBuilder;
        this.loaderService = loaderService;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.toastService = toastService;
        this.httpService = httpService;
        /**
         * onSubmit pin
         */
        this.onSubmit = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loaderService.startLoader();
            try {
                const data = Object.assign({}, this.pinForm.value);
                if (data && data.pin) {
                    const connectionPin = yield this.createUserConnection(data);
                    if (connectionPin.data && connectionPin.status === 201) {
                        const user = yield this.userConnection();
                        if (user.user && user.status === 200) {
                            const checkToken = yield this.checkToken();
                            if (checkToken.data && checkToken.status === 200) {
                                this.authService.setConnection(checkToken.data[0]);
                                console.log(connectionPin, 'connectionPin');
                                console.log(user, 'user');
                                console.log(checkToken, 'checkToken');
                                const role = checkToken.data[0].rol;
                                const id_conexion = connectionPin.data[0].id_conexion;
                                const data = Object.assign(user.user[0], {
                                    names: user.user[0].name,
                                    password: '',
                                    role,
                                    pin: this.pinForm.value.pin,
                                    connectionId: id_conexion,
                                    app: 'FX10',
                                    idUsuario: connectionPin.data[0].id_usuario
                                });
                                const response = yield this.assignUser(data);
                                if (response === null || response.status !== 200) {
                                    this.pinForm.get('pin').setValue('');
                                    // this.toastService.errorToast( 'El PIN ingresado es inválido.')
                                }
                                else {
                                    this.pinForm.reset();
                                    yield this.userService.removeUserRemember();
                                    yield this.userService.removeUserData();
                                    this.authService.removeToken();
                                    this.authService.removeConnection();
                                    this.router.navigate(['auth/login']);
                                    // this.router.navigate(['/auth'])
                                }
                                //
                            }
                        }
                    }
                }
                this.loaderService.stopLoader();
            }
            catch (e) {
                this.loaderService.stopLoader();
            }
        });
        /**
         * check token
         * @param pin
         */
        this.checkToken = () => {
            // this.loaderService.showLoader();
            return new Promise((resolve) => {
                this.authService.checkToken().subscribe((success) => {
                    // this.loaderService.hideLoader();
                    // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
                    resolve(success);
                }, error => {
                    this.httpService.errorHandler(error);
                    resolve(null);
                });
            });
        };
        /**
         * check token
         * @param pin
         */
        this.assignUser = (data) => {
            // this.loaderService.showLoader();
            return new Promise((resolve) => {
                this.userService.assignUser(data).subscribe((success) => {
                    // this.loaderService.hideLoader();
                    // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
                    resolve(success);
                }, error => {
                    this.httpService.errorHandler(error);
                    resolve(null);
                });
            });
        };
        /**
         * use connection
         * @param pin
         */
        this.userConnection = () => {
            // this.loaderService.showLoader();
            return new Promise((resolve) => {
                this.userService.getUser().subscribe((success) => {
                    // this.loaderService.hideLoader();
                    // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
                    resolve(success);
                }, error => {
                    this.httpService.errorHandler(error);
                    resolve(null);
                });
            });
        };
        /**
         * createConnectionPin
         * @param pin
         */
        this.createUserConnection = (pin) => {
            // this.loaderService.showLoader();
            return new Promise((resolve) => {
                this.authService.createPinConnection(pin).subscribe((success) => {
                    // this.loaderService.hideLoader();
                    // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
                    resolve(success);
                }, error => {
                    this.httpService.errorHandler(error);
                    resolve(null);
                });
            });
        };
    }
    ngOnInit() {
        this.pinForm = this.formBuilder.group({
            pin: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]]
        });
    }
};
PinPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] }
];
PinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/pin/pin.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pin.page.scss */ "./src/app/auth/pages/pin/pin.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]])
], PinPage);



/***/ })

}]);
//# sourceMappingURL=pages-pin-pin-module-es2015.js.map