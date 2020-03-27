(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-companies-companies-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/companies/companies.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/companies/companies.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"header-back-button\" defaultHref=\"home-page\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      <strong>Empresas</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"companies\">\n    <ion-list>\n      <ion-item\n        (click)=\"selectCompany(company)\"\n        *ngFor=\"let company of companies\"\n        [ngClass]=\"{'company-active': company.id === selectedCompany.id, 'company-inactive': company.id !== selectedCompany.id}\"\n      >\n        <ion-icon [color]=\"company.id === selectedCompany.id ? 'success': 'danger'\" name=\"switch\" slot=\"start\"></ion-icon>\n        <ion-label>{{ company.name }}</ion-label>\n      </ion-item>\n    </ion-list>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home-page/planning/companies/companies.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home-page/planning/companies/companies.module.ts ***!
  \******************************************************************/
/*! exports provided: CompaniesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPageModule", function() { return CompaniesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _companies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companies.page */ "./src/app/home-page/planning/companies/companies.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _companies_page__WEBPACK_IMPORTED_MODULE_3__["CompaniesPage"]
    }
];
let CompaniesPageModule = class CompaniesPageModule {
};
CompaniesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [_companies_page__WEBPACK_IMPORTED_MODULE_3__["CompaniesPage"]]
    })
], CompaniesPageModule);



/***/ }),

/***/ "./src/app/home-page/planning/companies/companies.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/home-page/planning/companies/companies.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.title-menu {\n  margin-top: 0;\n}\n\n.company-active {\n  --color: black;\n}\n\n.company-inactive {\n  --color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvY29tcGFuaWVzL2NvbXBhbmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9wbGFubmluZy9jb21wYW5pZXMvY29tcGFuaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9wbGFubmluZy9jb21wYW5pZXMvY29tcGFuaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZS1tZW51IHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuXG4uY29tcGFueS1hY3RpdmUge1xuICAtLWNvbG9yOiBibGFjaztcbn1cblxuLmNvbXBhbnktaW5hY3RpdmUge1xuICAtLWNvbG9yOiBncmF5O1xufVxuIiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlLW1lbnUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY29tcGFueS1hY3RpdmUge1xuICAtLWNvbG9yOiBibGFjaztcbn1cblxuLmNvbXBhbnktaW5hY3RpdmUge1xuICAtLWNvbG9yOiBncmF5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home-page/planning/companies/companies.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/home-page/planning/companies/companies.page.ts ***!
  \****************************************************************/
/*! exports provided: CompaniesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPage", function() { return CompaniesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");






let CompaniesPage = class CompaniesPage {
    constructor(authService, loaderService, router, storeService) {
        this.authService = authService;
        this.loaderService = loaderService;
        this.router = router;
        this.storeService = storeService;
        this.companies = [];
        this.selectedCompany = null;
        /**
         * selectCompany
         * @param company
         */
        this.selectCompany = (company) => {
            if (company.id !== this.selectedCompany.id) {
                this.storeService.setActiveCompany(company);
                this.loadCompanies();
                this.router.navigate(['home-page']);
            }
        };
        /**
         * loadCompanies
         */
        this.loadCompanies = () => {
            this.loaderService.startLoader('Cargando empresas...');
            const companies = this.storeService.getCompanies();
            const company = this.storeService.getActiveCompany();
            this.companies = [...companies];
            this.selectedCompany = company;
            this.loaderService.stopLoader();
        };
    }
    ngOnInit() {
        this.loadCompanies();
    }
};
CompaniesPage.ctorParameters = () => [
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"] }
];
CompaniesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companies.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/companies/companies.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./companies.page.scss */ "./src/app/home-page/planning/companies/companies.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"]])
], CompaniesPage);



/***/ })

}]);
//# sourceMappingURL=planning-companies-companies-module-es2015.js.map