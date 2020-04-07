(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contracts-contracts-list-contracts-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contracts/contracts-list/contracts-list.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contracts/contracts-list/contracts-list.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <strong>Tickets</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modules/contracts/contracts-list/contracts-list.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/contracts/contracts-list/contracts-list.module.ts ***!
  \***************************************************************************/
/*! exports provided: ContractsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsListPageModule", function() { return ContractsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contracts_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contracts-list.page */ "./src/app/modules/contracts/contracts-list/contracts-list.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _contracts_list_page__WEBPACK_IMPORTED_MODULE_2__["ContractsListPage"]
    }
];
let ContractsListPageModule = class ContractsListPageModule {
};
ContractsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_contracts_list_page__WEBPACK_IMPORTED_MODULE_2__["ContractsListPage"]]
    })
], ContractsListPageModule);



/***/ }),

/***/ "./src/app/modules/contracts/contracts-list/contracts-list.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/contracts/contracts-list/contracts-list.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJhY3RzL2NvbnRyYWN0cy1saXN0L2NvbnRyYWN0cy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/contracts/contracts-list/contracts-list.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/contracts/contracts-list/contracts-list.page.ts ***!
  \*************************************************************************/
/*! exports provided: ContractsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsListPage", function() { return ContractsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContractsListPage = class ContractsListPage {
    constructor() { }
    ngOnInit() {
    }
};
ContractsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contracts-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contracts-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contracts/contracts-list/contracts-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contracts-list.page.scss */ "./src/app/modules/contracts/contracts-list/contracts-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContractsListPage);



/***/ })

}]);
//# sourceMappingURL=modules-contracts-contracts-list-contracts-list-module-es2015.js.map