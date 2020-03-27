(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-companies-companies-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/companies/companies.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/companies/companies.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"header-back-button\" defaultHref=\"home-page\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      <strong>Empresas</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ng-container *ngIf=\"companies\">\r\n    <ion-list>\r\n      <ion-item\r\n        (click)=\"selectCompany(company)\"\r\n        *ngFor=\"let company of companies\"\r\n        [ngClass]=\"{'company-active': company.id === selectedCompany.id, 'company-inactive': company.id !== selectedCompany.id}\"\r\n      >\r\n        <ion-icon [color]=\"company.id === selectedCompany.id ? 'success': 'danger'\" name=\"switch\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{ company.name }}</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ng-container>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.title-menu {\n  margin-top: 0;\n}\n\n.company-active {\n  --color: black;\n}\n\n.company-inactive {\n  --color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL2NvbXBhbmllcy9EOlxcbnBtXFxmeDExX21vYmlsZS9zcmNcXGFwcFxcaG9tZS1wYWdlXFxwbGFubmluZ1xcY29tcGFuaWVzXFxjb21wYW5pZXMucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvY29tcGFuaWVzL2NvbXBhbmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvY29tcGFuaWVzL2NvbXBhbmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGxlLW1lbnUge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcblxyXG4uY29tcGFueS1hY3RpdmUge1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29tcGFueS1pbmFjdGl2ZSB7XHJcbiAgLS1jb2xvcjogZ3JheTtcclxufVxyXG4iLCJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUtbWVudSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jb21wYW55LWFjdGl2ZSB7XG4gIC0tY29sb3I6IGJsYWNrO1xufVxuXG4uY29tcGFueS1pbmFjdGl2ZSB7XG4gIC0tY29sb3I6IGdyYXk7XG59Il19 */");

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