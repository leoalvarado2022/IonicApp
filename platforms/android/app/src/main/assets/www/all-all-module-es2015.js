(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-all-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/all/all.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/all/all.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-searchbar placeholder=\"Buscar...\" (ionChange)=\"searchTickets($event.target.value)\" (ionClear)=\"cancelSearch()\" animated class=\"production\" showCancelButton=\"never\"></ion-searchbar>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher (ionRefresh)=\"reSync($event)\" class=\"refresher\" slot=\"fixed\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Sincronizando...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ng-container *ngIf=\"filteredTickets.length > 0\">\r\n    <ion-virtual-scroll [items]=\"filteredTickets\">\r\n      <app-ticket-card\r\n        *virtualItem=\"let ticket\"\r\n        [ticket]=\"ticket\"\r\n        (ticketSelected)=\"ticketSelected($event)\"\r\n        (deleteTicketEvent)=\"deleteTicket($event)\">\r\n      </app-ticket-card>\r\n    </ion-virtual-scroll>\r\n  </ng-container>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home-page/crm/tickets/all/all-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home-page/crm/tickets/all/all-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AllPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPageRoutingModule", function() { return AllPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _all_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all.page */ "./src/app/home-page/crm/tickets/all/all.page.ts");




const routes = [
    {
        path: '',
        component: _all_page__WEBPACK_IMPORTED_MODULE_3__["AllPage"]
    }
];
let AllPageRoutingModule = class AllPageRoutingModule {
};
AllPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllPageRoutingModule);



/***/ }),

/***/ "./src/app/home-page/crm/tickets/all/all.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/home-page/crm/tickets/all/all.module.ts ***!
  \*********************************************************/
/*! exports provided: AllPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPageModule", function() { return AllPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _all_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-routing.module */ "./src/app/home-page/crm/tickets/all/all-routing.module.ts");
/* harmony import */ var _all_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all.page */ "./src/app/home-page/crm/tickets/all/all.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





let AllPageModule = class AllPageModule {
};
AllPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _all_routing_module__WEBPACK_IMPORTED_MODULE_2__["AllPageRoutingModule"]
        ],
        declarations: [_all_page__WEBPACK_IMPORTED_MODULE_3__["AllPage"]]
    })
], AllPageModule);



/***/ }),

/***/ "./src/app/home-page/crm/tickets/all/all.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/home-page/crm/tickets/all/all.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jcm0vdGlja2V0cy9hbGwvYWxsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home-page/crm/tickets/all/all.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/home-page/crm/tickets/all/all.page.ts ***!
  \*******************************************************/
/*! exports provided: AllPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPage", function() { return AllPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tickets/tickets.service */ "./src/app/home-page/crm/services/tickets/tickets.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AllPage = class AllPage {
    constructor(ticketsService, storeService, httpService, loaderService, router) {
        this.ticketsService = ticketsService;
        this.storeService = storeService;
        this.httpService = httpService;
        this.loaderService = loaderService;
        this.router = router;
        this.allTickets = [];
        this.filteredTickets = [];
        /**
         * loadTickets
         */
        this.loadTickets = () => {
            this.loaderService.startLoader('Cargando tickets');
            const user = this.storeService.getActiveCompany();
            const data = {
                filter: 'todos',
                user: user.user,
                init: 0,
                registers: 0,
                order: 0,
                search: ''
            };
            this.ticketsService.getTickets(data).subscribe((success) => {
                this.allTickets = success.data.listTickets;
                this.filteredTickets = success.data.listTickets;
                this.loaderService.stopLoader();
            }, error => {
                this.loaderService.stopLoader();
                this.httpService.errorHandler(error);
            });
        };
        /**
         * searchTickets
         * @param search
         */
        this.searchTickets = (search) => {
            if (search) {
                this.filteredTickets = this.allTickets.filter(item => {
                    return (item.id.toString().includes(search.toLowerCase()) ||
                        item.client.toLowerCase().includes(search.toLowerCase()) ||
                        item.maxResolution.toLowerCase().includes(search.toLowerCase()) ||
                        item.state.toLowerCase().includes(search.toLowerCase()) ||
                        item.createdAt.toLowerCase().includes(search.toLowerCase()));
                });
            }
            else {
                this.filteredTickets = this.allTickets;
            }
        };
        /**
         * cancelSearch
         */
        this.cancelSearch = () => {
            this.filteredTickets = this.allTickets;
        };
        /**
         * ticketSelected
         * @param ticket
         */
        this.ticketSelected = (ticket) => {
            this.router.navigate(['/home-page/ticket-details-list', ticket.id]);
        };
        /**
         * reSync
         * @param event
         */
        this.reSync = (event) => {
            this.allTickets = [];
            this.filteredTickets = [];
            this.loadTickets();
            event.target.complete();
        };
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.loadTickets();
    }
    /**
     * deleteTicket
     * @param ticket
     */
    deleteTicket(ticket) {
        console.log('deleteTicket', ticket);
    }
};
AllPage.ctorParameters = () => [
    { type: _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__["TicketsService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AllPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/all/all.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all.page.scss */ "./src/app/home-page/crm/tickets/all/all.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__["TicketsService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AllPage);



/***/ })

}]);
//# sourceMappingURL=all-all-module-es2015.js.map