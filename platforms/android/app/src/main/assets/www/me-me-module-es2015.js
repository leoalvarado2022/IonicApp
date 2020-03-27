(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["me-me-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/me/me.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/me/me.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-searchbar placeholder=\"Buscar...\" (ionChange)=\"searchTickets($event.target.value)\" (ionClear)=\"cancelSearch()\" animated class=\"production\" showCancelButton=\"never\"></ion-searchbar>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher (ionRefresh)=\"reSync($event)\" class=\"refresher\" slot=\"fixed\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Sincronizando...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-virtual-scroll [items]=\"filteredTickets\">\r\n    <app-ticket-card\r\n      *virtualItem=\"let ticket\"\r\n      [ticket]=\"ticket\"\r\n      (ticketSelected)=\"ticketSelected($event)\"\r\n      (deleteTicketEvent)=\"deleteTicket($event)\">\r\n    </app-ticket-card>\r\n  </ion-virtual-scroll>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home-page/crm/tickets/me/me-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/home-page/crm/tickets/me/me-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MePageRoutingModule", function() { return MePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _me_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./me.page */ "./src/app/home-page/crm/tickets/me/me.page.ts");




const routes = [
    {
        path: '',
        component: _me_page__WEBPACK_IMPORTED_MODULE_3__["MePage"]
    }
];
let MePageRoutingModule = class MePageRoutingModule {
};
MePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MePageRoutingModule);



/***/ }),

/***/ "./src/app/home-page/crm/tickets/me/me.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/home-page/crm/tickets/me/me.module.ts ***!
  \*******************************************************/
/*! exports provided: MePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MePageModule", function() { return MePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _me_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./me-routing.module */ "./src/app/home-page/crm/tickets/me/me-routing.module.ts");
/* harmony import */ var _me_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./me.page */ "./src/app/home-page/crm/tickets/me/me.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





let MePageModule = class MePageModule {
};
MePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _me_routing_module__WEBPACK_IMPORTED_MODULE_2__["MePageRoutingModule"]
        ],
        declarations: [_me_page__WEBPACK_IMPORTED_MODULE_3__["MePage"]]
    })
], MePageModule);



/***/ }),

/***/ "./src/app/home-page/crm/tickets/me/me.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/home-page/crm/tickets/me/me.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jcm0vdGlja2V0cy9tZS9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home-page/crm/tickets/me/me.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/home-page/crm/tickets/me/me.page.ts ***!
  \*****************************************************/
/*! exports provided: MePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MePage", function() { return MePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tickets/tickets.service */ "./src/app/home-page/crm/services/tickets/tickets.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let MePage = class MePage {
    constructor(ticketsService, storeService, httpService, loaderService, router) {
        this.ticketsService = ticketsService;
        this.storeService = storeService;
        this.httpService = httpService;
        this.loaderService = loaderService;
        this.router = router;
        this.myTickets = [];
        this.filteredTickets = [];
        /**
         * loadTickets
         */
        this.loadTickets = () => {
            this.loaderService.startLoader('Cargando tickets');
            const user = this.storeService.getActiveCompany();
            const data = {
                filter: 'activo',
                user: user.user,
                init: 0,
                registers: 0,
                order: 0,
                search: ''
            };
            this.ticketsService.getTickets(data).subscribe((success) => {
                this.myTickets = success.data.listTickets;
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
                this.filteredTickets = this.myTickets.filter(item => {
                    return (item.id.toString().includes(search.toLowerCase()) ||
                        item.client.toLowerCase().includes(search.toLowerCase()) ||
                        item.maxResolution.toLowerCase().includes(search.toLowerCase()) ||
                        item.state.toLowerCase().includes(search.toLowerCase()) ||
                        item.createdAt.toLowerCase().includes(search.toLowerCase()));
                });
            }
            else {
                this.filteredTickets = this.myTickets;
            }
        };
        /**
         * cancelSearch
         */
        this.cancelSearch = () => {
            this.filteredTickets = this.myTickets;
        };
        /**
         * reSync
         * @param event
         */
        this.reSync = (event) => {
            this.myTickets = [];
            this.filteredTickets = [];
            this.loadTickets();
            event.target.complete();
        };
        /**
         * ticketSelected
         * @param ticket
         */
        this.ticketSelected = (ticket) => {
            this.router.navigate(['/home-page/ticket-details-list', ticket.id]);
        };
    }
    ngOnInit() {
        this.loadTickets();
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
MePage.ctorParameters = () => [
    { type: _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__["TicketsService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
MePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-me',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./me.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/me/me.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./me.page.scss */ "./src/app/home-page/crm/tickets/me/me.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__["TicketsService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], MePage);



/***/ })

}]);
//# sourceMappingURL=me-me-module-es2015.js.map