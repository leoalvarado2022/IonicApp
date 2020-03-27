(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/register/register.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/register/register.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <br>\r\n  <div *ngIf=\"device.cordova\">\r\n    <ion-avatar class=\"ion-no-margin\" style=\"margin: 0 auto !important\">\r\n      <img [src]=\"avatarPreview || 'assets/imgs/user.png'\">\r\n    </ion-avatar>\r\n  </div>\r\n\r\n  <br><br><br>\r\n  <ng-container *ngIf=\"device.cordova\">\r\n    <ion-item>\r\n      <ion-button (click)=\"openCamera()\" slot=\"start\">\r\n        <ion-icon name=\"camera\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n      <ion-label>&nbsp;</ion-label>\r\n      <ion-button (click)=\"openGallery()\" slot=\"end\">\r\n        <ion-icon name=\"image\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ng-container>\r\n\r\n  <div>\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"registerForm\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Rut</ion-label>\r\n        <ion-input (keyup)=\"formatIdentifier($event.target.value)\" formControlName=\"rut\" tabindex=\"0\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('rut').dirty && registerForm.get('rut').errors\">\r\n          <span *ngIf=\"registerForm.get('rut').hasError('required')\" style=\"color: red\">El rut es requerido.</span>\r\n          <span *ngIf=\"registerForm.get('rut').hasError('validRut')\" style=\"color: red\">El rut es inválido.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nombres</ion-label>\r\n        <ion-input formControlName=\"names\" tabindex=\"1\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('names').dirty && registerForm.get('names').errors\">\r\n          <span *ngIf=\"registerForm.get('names').hasError('required')\" style=\"color: red\">Los nombres son requeridos.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Apellido Paterno</ion-label>\r\n        <ion-input formControlName=\"lastName\" tabindex=\"2\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('lastName').dirty && registerForm.get('lastName').errors\">\r\n          <span *ngIf=\"registerForm.get('lastName').hasError('required')\" style=\"color: red\">El apellido parterno es requerido.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Apellido Materno</ion-label>\r\n        <ion-input class=\"input-text\" formControlName=\"surName\" tabindex=\"3\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('surName').dirty && registerForm.get('surName').errors\">\r\n          <span *ngIf=\"registerForm.get('surName').hasError('required')\" style=\"color: red\">El apellido materno es requerido.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input formControlName=\"email\" tabindex=\"4\" type=\"email\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('email').dirty && registerForm.get('email').errors\">\r\n          <span *ngIf=\"registerForm.get('email').hasError('required')\" style=\"color: red\">El correo es requerido.</span>\r\n          <span *ngIf=\"registerForm.get('email').hasError('email')\" style=\"color: red\">Ingrese un email valido.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Telefono</ion-label>\r\n        <ion-input formControlName=\"phone\" tabindex=\"5\" type=\"tel\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('phone').dirty && registerForm.get('phone').errors\">\r\n          <span *ngIf=\"registerForm.get('phone').hasError('required')\" style=\"color: red\">El telefono es requerido.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Contraseña</ion-label>\r\n        <ion-input formControlName=\"password\" type=\"password\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('password').dirty && registerForm.get('password').errors\">\r\n          <span *ngIf=\"registerForm.get('password').hasError('required')\" style=\"color: red\">La contraseña es requerida.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Confirmar Contraseña</ion-label>\r\n        <ion-input formControlName=\"confirm\" tabindex=\"7\" type=\"password\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('confirm').dirty && registerForm.get('confirm').errors\">\r\n          <span *ngIf=\"registerForm.get('confirm').hasError('required')\" style=\"color: red\">Debe confirmar la contraseña.</span>\r\n          <span *ngIf=\"registerForm.get('confirm').hasError('notSame')\" style=\"color: red\">Las contraseñas no son iguales.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <br>\r\n      <ion-radio-group formControlName=\"access\">\r\n        <ion-list-header>\r\n          Tipo de Acceso\r\n        </ion-list-header>\r\n\r\n        <ion-item>\r\n          <ion-label>Rut</ion-label>\r\n          <ion-radio value=\"1\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Correo</ion-label>\r\n          <ion-radio value=\"2\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n      <ng-container *ngIf=\"registerForm.get('access').errors\">\r\n        <span *ngIf=\"registerForm.get('access').hasError('required')\" style=\"color: red\">Debe seleccionar una opción.</span>\r\n      </ng-container>\r\n\r\n      <br><br>\r\n      <ion-button\r\n        [disabled]=\"registerForm.invalid\"\r\n        color=\"danger\"\r\n        expand=\"block\"\r\n        type=\"submit\">\r\n        Registrar\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/auth/pages/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/pages/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/auth/pages/register/register.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/auth/pages/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/auth/pages/register/register.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cameras {\n  font-size: 40px;\n  text-align: center;\n}\n\nion-avatar {\n  width: 100px;\n}\n\nion-avatar img {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy9yZWdpc3Rlci9EOlxcbnBtXFxmeDExX21vYmlsZS9zcmNcXGFwcFxcYXV0aFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1lcmFzIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tYXZhdGFyIHtcclxuICB3aWR0aDogMTAwcHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuY2FtZXJhcyB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuaW9uLWF2YXRhciBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/pages/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/pages/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _validators_confirm_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../validators/confirm-password.validator */ "./src/app/validators/confirm-password.validator.ts");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/user/user.service */ "./src/app/shared/services/user/user.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/toast/toast.service */ "./src/app/shared/services/toast/toast.service.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _primetec_primetec_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @primetec/primetec-angular */ "./node_modules/@primetec/primetec-angular/fesm2015/primetec-primetec-angular.js");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/camera/camera.service */ "./src/app/shared/services/camera/camera.service.ts");













let RegisterPage = class RegisterPage {
    constructor(formBuilder, userService, loaderService, toastService, router, authService, httpService, device, cameraService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.loaderService = loaderService;
        this.toastService = toastService;
        this.router = router;
        this.authService = authService;
        this.httpService = httpService;
        this.device = device;
        this.cameraService = cameraService;
        this.avatarPreview = null;
        /**
         * formatIdentifier
         * @param identifier
         */
        this.formatIdentifier = (rut) => {
            if (rut.length > 0) {
                this.registerForm.patchValue({
                    rut: Object(_primetec_primetec_angular__WEBPACK_IMPORTED_MODULE_9__["formatRut"])(rut)
                });
            }
            else {
                this.registerForm.patchValue({
                    rut: Object(_primetec_primetec_angular__WEBPACK_IMPORTED_MODULE_9__["cleanRut"])(rut)
                });
            }
            return rut;
        };
        /**
         * openCamera
         */
        this.openCamera = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const image = yield this.cameraService.openCamera();
            if (image) {
                this.getImage(image);
            }
        });
        /**
         * openGallery
         */
        this.openGallery = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const image = yield this.cameraService.openGallery();
            if (image) {
                this.getImage(image);
            }
        });
        /**
         * getImage
         * @param image
         */
        this.getImage = (image) => {
            const imageUrl = image;
            this.avatarPreview = `data:image/jpeg;base64,${image}`;
            this.registerForm.patchValue({
                avatar: imageUrl
            });
            this.registerForm.updateValueAndValidity();
        };
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            names: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rut: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _primetec_primetec_angular__WEBPACK_IMPORTED_MODULE_9__["ValidateRut"]
                ]],
            phone: ['+569', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            avatar: [''],
            access: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, { validator: _validators_confirm_password_validator__WEBPACK_IMPORTED_MODULE_3__["confirmPassword"] });
    }
    /**
     * onSubmit
     */
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = Object.assign({}, this.registerForm.value);
            yield this.create(data);
        });
    }
    /**
     * create
     * @param data
     */
    create(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loaderService.startLoader();
            return new Promise((resolve, reject) => {
                this.userService.createUser(data).subscribe(success => {
                    this.toastService.successToast('Se creo el usuario correctamente, inicia sesión');
                    this.loaderService.stopLoader();
                    this.registerForm.reset();
                    this.router.navigate(['auth/login']);
                    resolve(true);
                }, error => {
                    this.loaderService.stopLoader();
                    this.httpService.errorHandler(error);
                    resolve(false);
                });
            });
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"] },
    { type: _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_12__["CameraService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/register/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/auth/pages/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
        _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"],
        _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_12__["CameraService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map