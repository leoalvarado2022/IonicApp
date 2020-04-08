(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contracts-contracts-list-contracts-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contracts/contract-list-item/contract-list-item.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contracts/contract-list-item/contract-list-item.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\n  <ion-icon name=\"document\" slot=\"start\"></ion-icon>\n  <ion-label>\n    <h2>{{ contract.workerName + ' ' + contract.workerLastname + ' ' + contract.workerSurname | titlecase }}</h2>\n    <p>{{ contract.contractTypeName | titlecase }}</p>\n  </ion-label>\n  <ion-badge [color]=\"status === 'enviado' ? 'success': 'warning'\" slot=\"end\">{{ status | titlecase }}</ion-badge>\n</ion-item>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contracts/contracts-list/contracts-list.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contracts/contracts-list/contracts-list.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <strong>PreContratos</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-searchbar placeholder=\"Buscar...\" (ionChange)=\"searchContract($event.target.value)\" (ionClear)=\"cancelSearch()\" animated class=\"production\" showCancelButton=\"never\"></ion-searchbar>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)=\"reSync($event)\" class=\"refresher\" slot=\"fixed\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Sincronizando...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ng-container *ngIf=\"filteredContracts.length > 0\">\n    <ion-virtual-scroll [items]=\"filteredContracts\">\n      <app-contract-list-item *virtualItem=\"let contract\" [contract]=\"contract\"></app-contract-list-item>\n    </ion-virtual-scroll>\n  </ng-container>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"contractForm()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modules/contracts/contract-list-item/contract-list-item.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/contracts/contract-list-item/contract-list-item.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJhY3RzL2NvbnRyYWN0LWxpc3QtaXRlbS9jb250cmFjdC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/contracts/contract-list-item/contract-list-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/contracts/contract-list-item/contract-list-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ContractListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractListItemComponent", function() { return ContractListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContractListItemComponent = class ContractListItemComponent {
    constructor() {
        this.contract = null;
        this.status = 'pendiente';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContractListItemComponent.prototype, "contract", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContractListItemComponent.prototype, "status", void 0);
ContractListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract-list-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contract-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contracts/contract-list-item/contract-list-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contract-list-item.component.scss */ "./src/app/modules/contracts/contract-list-item/contract-list-item.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContractListItemComponent);



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
/* harmony import */ var _contract_list_item_contract_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contract-list-item/contract-list-item.component */ "./src/app/modules/contracts/contract-list-item/contract-list-item.component.ts");






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
        declarations: [
            _contracts_list_page__WEBPACK_IMPORTED_MODULE_2__["ContractsListPage"],
            _contract_list_item_contract_list_item_component__WEBPACK_IMPORTED_MODULE_5__["ContractListItemComponent"]
        ]
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-tab-button {\n  font-size: 16px;\n  color: white;\n  --color: white;\n}\n\n.tab-selected {\n  border-bottom: 1px solid white !important;\n}\n\nion-tab-bar {\n  height: 45px;\n  --background: var(--color-home-header-menu);\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL2NvbnRyYWN0cy9jb250cmFjdHMtbGlzdC9jb250cmFjdHMtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29udHJhY3RzL2NvbnRyYWN0cy1saXN0L2NvbnRyYWN0cy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFFQSwyQ0FBQTtFQUNBLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJhY3RzL2NvbnRyYWN0cy1saXN0L2NvbnRyYWN0cy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICAvL2hlaWdodDogMTAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItaG9tZS1oZWFkZXItbWVudSk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAvLyBtYXJnaW4tYm90dG9tOiA1OHB4O1xufVxuIiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRhYi1iYXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItaG9tZS1oZWFkZXItbWVudSk7XG4gIC0tY29sb3I6IHdoaXRlO1xufSJdfQ== */");

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
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ContractsListPage = class ContractsListPage {
    constructor(storeService, router) {
        this.storeService = storeService;
        this.router = router;
        this.contracts = [];
        this.filteredContracts = [];
        /**
         * loadPreContracts
         */
        this.loadPreContracts = () => {
            const preContracts = this.storeService.getPreContracts();
            this.contracts = preContracts;
            this.filteredContracts = preContracts;
        };
        /**
         * searchContract
         * @param search
         */
        this.searchContract = (search) => {
            if (search) {
                this.filteredContracts = this.contracts.filter(item => {
                    return (item.id.toString().includes(search.toLowerCase()) ||
                        item.workerName.toLowerCase().includes(search.toLowerCase()) ||
                        item.workerLastname.toLowerCase().includes(search.toLowerCase()) ||
                        item.workerSurname.toLowerCase().includes(search.toLowerCase()) ||
                        item.contractTypeName.toLowerCase().includes(search.toLowerCase()));
                });
            }
            else {
                this.filteredContracts = this.contracts;
            }
        };
        /**
         * cancelSearch
         */
        this.cancelSearch = () => {
            this.filteredContracts = this.contracts;
        };
        this.reSync = (event) => {
            this.contracts = [];
            this.filteredContracts = [];
            this.loadPreContracts();
            event.target.complete();
        };
        /**
         * contractForm
         */
        this.contractForm = () => {
            this.router.navigate(['contract-form']);
        };
    }
    ngOnInit() {
        this.loadPreContracts();
    }
};
ContractsListPage.ctorParameters = () => [
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ContractsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contracts-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contracts-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contracts/contracts-list/contracts-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contracts-list.page.scss */ "./src/app/modules/contracts/contracts-list/contracts-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ContractsListPage);



/***/ })

}]);
//# sourceMappingURL=modules-contracts-contracts-list-contracts-list-module-es2015.js.map