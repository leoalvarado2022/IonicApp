(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expired-expired-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/expired/expired.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/expired/expired.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background-color-home\">\r\n  <div>\r\n    <div class=\"logo-home\">\r\n      <img alt=\"Primetec\" src=\"assets/imgs/logo.png\">\r\n      <p>FX11</p>\r\n      <p class=\"message\">Su sesión ha expirado presione el boton aceptar para volver Iniciar Sesión</p>\r\n    </div>\r\n    <div class=\"ion-text-center buttons-home\">\r\n      <ion-button class=\"button-primary-home\" routerLink=\"/auth/login\">Aceptar</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/auth/pages/expired/expired.module.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/pages/expired/expired.module.ts ***!
  \******************************************************/
/*! exports provided: ExpiredPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpiredPageModule", function() { return ExpiredPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expired_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expired.page */ "./src/app/auth/pages/expired/expired.page.ts");







const routes = [
    {
        path: '',
        component: _expired_page__WEBPACK_IMPORTED_MODULE_6__["ExpiredPage"]
    }
];
let ExpiredPageModule = class ExpiredPageModule {
};
ExpiredPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_expired_page__WEBPACK_IMPORTED_MODULE_6__["ExpiredPage"]]
    })
], ExpiredPageModule);



/***/ }),

/***/ "./src/app/auth/pages/expired/expired.page.scss":
/*!******************************************************!*\
  !*** ./src/app/auth/pages/expired/expired.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .logo-home {\n  text-align: center;\n  margin-top: 20%;\n}\nion-content .logo-home img {\n  height: 130px;\n}\nion-content .logo-home p {\n  color: white;\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-weight: bold;\n  margin-top: 0;\n}\nion-content .logo-home .message {\n  font-size: 12px !important;\n  padding: 10px 85px;\n}\nion-content .buttons-home {\n  position: absolute;\n  width: 100%;\n  bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy9leHBpcmVkL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxhdXRoXFxwYWdlc1xcZXhwaXJlZFxcZXhwaXJlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvcGFnZXMvZXhwaXJlZC9leHBpcmVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FERUk7RUFDRSxhQUFBO0FDQU47QURHSTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNETjtBRElJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FET0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3BhZ2VzL2V4cGlyZWQvZXhwaXJlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLmxvZ28taG9tZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggODVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAuYnV0dG9ucy1ob21lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAyLjVyZW07XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IC5sb2dvLWhvbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cbmlvbi1jb250ZW50IC5sb2dvLWhvbWUgaW1nIHtcbiAgaGVpZ2h0OiAxMzBweDtcbn1cbmlvbi1jb250ZW50IC5sb2dvLWhvbWUgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmlvbi1jb250ZW50IC5sb2dvLWhvbWUgLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCA4NXB4O1xufVxuaW9uLWNvbnRlbnQgLmJ1dHRvbnMtaG9tZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMi41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/pages/expired/expired.page.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/pages/expired/expired.page.ts ***!
  \****************************************************/
/*! exports provided: ExpiredPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpiredPage", function() { return ExpiredPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpiredPage = class ExpiredPage {
    constructor() {
    }
    ngOnInit() {
    }
};
ExpiredPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expired',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expired.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/expired/expired.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expired.page.scss */ "./src/app/auth/pages/expired/expired.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExpiredPage);



/***/ })

}]);
//# sourceMappingURL=pages-expired-expired-module-es2015.js.map