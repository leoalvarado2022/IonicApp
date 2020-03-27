(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crm-tickets-tickets-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/tickets.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/tickets.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <strong>Tickets</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <ion-tabs>\r\n    <!-- Tab bar -->\r\n    <ion-tab-bar slot=\"top\">\r\n      <ion-tab-button tab=\"me\">\r\n        <span>Mis Tickets</span>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"all\">\r\n        <span>Todos</span>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home-page/crm/tickets/tickets.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/home-page/crm/tickets/tickets.module.ts ***!
  \*********************************************************/
/*! exports provided: TicketsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPageModule", function() { return TicketsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tickets_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets.page */ "./src/app/home-page/crm/tickets/tickets.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _tickets_page__WEBPACK_IMPORTED_MODULE_2__["TicketsPage"],
        children: [
            {
                path: 'me',
                loadChildren: () => __webpack_require__.e(/*! import() | me-me-module */ "me-me-module").then(__webpack_require__.bind(null, /*! ./me/me.module */ "./src/app/home-page/crm/tickets/me/me.module.ts")).then(module => module.MePageModule),
            },
            {
                path: 'all',
                loadChildren: () => __webpack_require__.e(/*! import() | all-all-module */ "all-all-module").then(__webpack_require__.bind(null, /*! ./all/all.module */ "./src/app/home-page/crm/tickets/all/all.module.ts")).then(module => module.AllPageModule),
            },
            {
                path: '**',
                redirectTo: 'me'
            }
        ]
    }
];
let TicketsPageModule = class TicketsPageModule {
};
TicketsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _tickets_page__WEBPACK_IMPORTED_MODULE_2__["TicketsPage"]
        ]
    })
], TicketsPageModule);



/***/ }),

/***/ "./src/app/home-page/crm/tickets/tickets.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/home-page/crm/tickets/tickets.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-tab-button {\n  font-size: 16px;\n  color: white;\n  --color: white;\n}\n\n.tab-selected {\n  border-bottom: 1px solid white !important;\n}\n\nion-tab-bar {\n  height: 45px;\n  --background: var(--color-home-header-menu);\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NybS90aWNrZXRzL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxob21lLXBhZ2VcXGNybVxcdGlja2V0c1xcdGlja2V0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9jcm0vdGlja2V0cy90aWNrZXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFFQSwyQ0FBQTtFQUNBLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jcm0vdGlja2V0cy90aWNrZXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGFiLWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRhYi1zZWxlY3RlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10YWItYmFyIHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgLy9oZWlnaHQ6IDEwMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItaG9tZS1oZWFkZXItbWVudSk7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogNThweDtcclxufVxyXG4iLCJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYi1zZWxlY3RlZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tdGFiLWJhciB7XG4gIGhlaWdodDogNDVweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ob21lLWhlYWRlci1tZW51KTtcbiAgLS1jb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/home-page/crm/tickets/tickets.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/home-page/crm/tickets/tickets.page.ts ***!
  \*******************************************************/
/*! exports provided: TicketsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPage", function() { return TicketsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TicketsPage = class TicketsPage {
    constructor() { }
    ngOnInit() {
    }
};
TicketsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tickets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tickets.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/tickets.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tickets.page.scss */ "./src/app/home-page/crm/tickets/tickets.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TicketsPage);



/***/ })

}]);
//# sourceMappingURL=crm-tickets-tickets-module-es2015.js.map