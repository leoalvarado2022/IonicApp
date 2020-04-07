(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-planning-center-cost-center-cost-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/center-cost/center-cost.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/center-cost/center-cost.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <strong>Centros de Costo</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollX=\"false\" scrollY=\"false\">\n  <ion-tabs>\n    <!-- Tab bar -->\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"lista\">\n        <span>Lista</span>\n      </ion-tab-button>\n      <ion-tab-button tab=\"mapa\">\n        <span>Mapa</span>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/modules/planning/center-cost/center-cost.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/planning/center-cost/center-cost.module.ts ***!
  \********************************************************************/
/*! exports provided: CenterCostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterCostPageModule", function() { return CenterCostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _center_cost_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./center-cost.page */ "./src/app/modules/planning/center-cost/center-cost.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _center_cost_page__WEBPACK_IMPORTED_MODULE_3__["CenterCostPage"],
        children: [
            {
                path: 'lista',
                loadChildren: () => __webpack_require__.e(/*! import() | lista-lista-module */ "lista-lista-module").then(__webpack_require__.bind(null, /*! ./lista/lista.module */ "./src/app/modules/planning/center-cost/lista/lista.module.ts")).then(module => module.ListaPageModule),
            },
            {
                path: 'mapa',
                loadChildren: () => __webpack_require__.e(/*! import() | mapa-mapa-module */ "mapa-mapa-module").then(__webpack_require__.bind(null, /*! ./mapa/mapa.module */ "./src/app/modules/planning/center-cost/mapa/mapa.module.ts")).then(module => module.MapaPageModule),
            },
            {
                path: '**',
                redirectTo: 'lista'
            }
        ]
    }
];
let CenterCostPageModule = class CenterCostPageModule {
};
CenterCostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _center_cost_page__WEBPACK_IMPORTED_MODULE_3__["CenterCostPage"]
        ]
    })
], CenterCostPageModule);



/***/ }),

/***/ "./src/app/modules/planning/center-cost/center-cost.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/planning/center-cost/center-cost.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-tab-button {\n  font-size: 16px;\n  color: white;\n  --color: white;\n}\n\n.tab-selected {\n  border-bottom: 1px solid white !important;\n}\n\nion-tab-bar {\n  height: 45px;\n  --background: var(--color-home-header-menu);\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL3BsYW5uaW5nL2NlbnRlci1jb3N0L2NlbnRlci1jb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbGFubmluZy9jZW50ZXItY29zdC9jZW50ZXItY29zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBRUEsMkNBQUE7RUFDQSxjQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BsYW5uaW5nL2NlbnRlci1jb3N0L2NlbnRlci1jb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICAvL2hlaWdodDogMTAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItaG9tZS1oZWFkZXItbWVudSk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAvLyBtYXJnaW4tYm90dG9tOiA1OHB4O1xufVxuIiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRhYi1iYXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItaG9tZS1oZWFkZXItbWVudSk7XG4gIC0tY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/planning/center-cost/center-cost.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/planning/center-cost/center-cost.page.ts ***!
  \******************************************************************/
/*! exports provided: CenterCostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterCostPage", function() { return CenterCostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CenterCostPage = class CenterCostPage {
    constructor() {
    }
    ngOnInit() {
    }
};
CenterCostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-center-cost',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./center-cost.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/center-cost/center-cost.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./center-cost.page.scss */ "./src/app/modules/planning/center-cost/center-cost.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CenterCostPage);



/***/ })

}]);
//# sourceMappingURL=modules-planning-center-cost-center-cost-module-es2015.js.map