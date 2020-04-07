(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-router-outlet [swipeGesture]=\"false\"></ion-router-outlet>\n");

/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.page */ "./src/app/modules/auth/auth.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");






const routes = [
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-welcome-welcome-module */ "pages-welcome-welcome-module").then(__webpack_require__.bind(null, /*! ./pages/welcome/welcome.module */ "./src/app/modules/auth/pages/welcome/welcome.module.ts")).then(module => module.WelcomePageModule)
    },
    {
        path: 'password-recovery',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-recovery-recovery-module */ "pages-recovery-recovery-module").then(__webpack_require__.bind(null, /*! ./pages/recovery/recovery.module */ "./src/app/modules/auth/pages/recovery/recovery.module.ts")).then(module => module.RecoveryPageModule)
    },
    {
        path: 'auth/pin',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-pin-pin-module */ "pages-pin-pin-module").then(__webpack_require__.bind(null, /*! ./pages/pin/pin.module */ "./src/app/modules/auth/pages/pin/pin.module.ts")).then(module => module.PinPageModule)
    },
    {
        path: 'expired',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-expired-expired-module */ "pages-expired-expired-module").then(__webpack_require__.bind(null, /*! ./pages/expired/expired.module */ "./src/app/modules/auth/pages/expired/expired.module.ts")).then(module => module.ExpiredPageModule)
    },
    {
        path: '',
        redirectTo: 'auth'
    }
];
let AuthPageModule = class AuthPageModule {
};
AuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
        ],
        providers: [
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]
        ]
    })
], AuthPageModule);



/***/ }),

/***/ "./src/app/modules/auth/auth.page.scss":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9hdXRoLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/auth/auth.page.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/auth/auth.page.ts ***!
  \*******************************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthPage = class AuthPage {
    constructor() {
    }
    ngOnInit() {
    }
};
AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.page.scss */ "./src/app/modules/auth/auth.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthPage);



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module-es2015.js.map