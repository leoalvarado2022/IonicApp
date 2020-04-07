(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["active-active-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/tickets/active/active.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/tickets/active/active.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-searchbar placeholder=\"Buscar...\" (ionChange)=\"searchTickets($event.target.value)\" (ionClear)=\"cancelSearch()\" animated class=\"production\" showCancelButton=\"never\"></ion-searchbar>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)=\"reSync($event)\" class=\"refresher\" slot=\"fixed\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Sincronizando...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ng-container *ngIf=\"filteredTickets.length > 0\">\n    <ion-virtual-scroll [items]=\"filteredTickets\">\n      <app-ticket-card\n        *virtualItem=\"let ticket\"\n        [ticket]=\"ticket\"\n        (ticketSelected)=\"ticketSelected($event)\"\n        (deleteTicketEvent)=\"deleteTicket($event)\">\n      </app-ticket-card>\n    </ion-virtual-scroll>\n  </ng-container>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modules/crm/tickets/active/active-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/crm/tickets/active/active-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ActivePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePageRoutingModule", function() { return ActivePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _active_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active.page */ "./src/app/modules/crm/tickets/active/active.page.ts");




const routes = [
    {
        path: '',
        component: _active_page__WEBPACK_IMPORTED_MODULE_3__["ActivePage"]
    }
];
let ActivePageRoutingModule = class ActivePageRoutingModule {
};
ActivePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActivePageRoutingModule);



/***/ }),

/***/ "./src/app/modules/crm/tickets/active/active.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/crm/tickets/active/active.module.ts ***!
  \*************************************************************/
/*! exports provided: ActiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveModule", function() { return ActiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _active_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active-routing.module */ "./src/app/modules/crm/tickets/active/active-routing.module.ts");
/* harmony import */ var _active_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active.page */ "./src/app/modules/crm/tickets/active/active.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





let ActiveModule = class ActiveModule {
};
ActiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _active_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActivePageRoutingModule"]
        ],
        declarations: [_active_page__WEBPACK_IMPORTED_MODULE_3__["ActivePage"]]
    })
], ActiveModule);



/***/ }),

/***/ "./src/app/modules/crm/tickets/active/active.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/crm/tickets/active/active.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--color-background-tabs);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL2NybS90aWNrZXRzL2FjdGl2ZS9hY3RpdmUucGFnZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NybS90aWNrZXRzL2FjdGl2ZS9hY3RpdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL3RpY2tldHMvYWN0aXZlL2FjdGl2ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLXRhYnMpO1xufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJhY2tncm91bmQtdGFicyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/crm/tickets/active/active.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/crm/tickets/active/active.page.ts ***!
  \***********************************************************/
/*! exports provided: ActivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePage", function() { return ActivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tickets/tickets.service */ "./src/app/modules/crm/services/tickets/tickets.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ActivePage = class ActivePage {
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
                filter: 'activos',
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
ActivePage.ctorParameters = () => [
    { type: _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__["TicketsService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ActivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./active.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/tickets/active/active.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./active.page.scss */ "./src/app/modules/crm/tickets/active/active.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__["TicketsService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], ActivePage);



/***/ })

}]);
//# sourceMappingURL=active-active-module-es2015.js.map