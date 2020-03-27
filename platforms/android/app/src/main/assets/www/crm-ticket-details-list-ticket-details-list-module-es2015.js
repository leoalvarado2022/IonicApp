(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crm-ticket-details-list-ticket-details-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card class=\"ticket-detail-item\">\r\n  <ion-item>\r\n    <ion-label>{{ detail.assignedName }}</ion-label>\r\n    <ion-icon color=\"primary\" name=\"document\" slot=\"end\"></ion-icon>\r\n  </ion-item>\r\n\r\n  <ion-card-content>\r\n    <p>Fecha Compromiso: {{ detail.commitmentAt | customDate }}</p>\r\n    <p>Fecha Compromiso Interna: {{ detail.commitmentInternAt | customDate }}</p>\r\n    <br>\r\n    <p>{{ detail.observations || 'Sin Observacion' }}</p>\r\n\r\n    <ng-container *ngIf=\"detail.attached\">\r\n      Adjuntos:\r\n      <ng-container *ngFor=\"let file of detail.attached\">\r\n        <a [href]=\"buildLink(file)\" target=\"_blank\">{{ file.name }}</a>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n  </ion-card-content>\r\n</ion-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <strong>Listado Detalles</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ng-container *ngIf=\"ticket\">\r\n  <div class=\"header-content background-color--header\">\r\n    <ion-row class=\"text-white\">\r\n      <ion-col>ID: {{ ticket.id }}</ion-col>\r\n      <ion-col>Cliente: {{ ticket.client }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"text-white\">\r\n      <ion-col>Tipo: {{ ticket.type }}</ion-col>\r\n      <ion-col>Producto: {{ 'pendiente' }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"text-white\">\r\n      <ion-col>Fecha Maxima: {{ ticket.maxResolution | customDate }}</ion-col>\r\n      <ion-col>Estado: {{ ticket.state }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"text-white\">\r\n      <ion-col>Referencia: {{ ticket.reference }}</ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ng-container>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher (ionRefresh)=\"reSync($event)\" class=\"refresher\" slot=\"fixed\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Sincronizando...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ng-container *ngIf=\"details.length > 0\">\r\n    <ion-virtual-scroll [items]=\"details\">\r\n      <app-ticket-detail-card *virtualItem=\"let detail\" [detail]=\"detail\"></app-ticket-detail-card>\r\n    </ion-virtual-scroll>\r\n  </ng-container>\r\n\r\n  <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\r\n    <ion-fab-button (click)=\"openForm()\" [disabled]=\"!isOnline\" color=\"primary\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ticket-detail-item {\n  margin: 5px;\n  width: 100%;\n}\n\n.id {\n  text-align: left;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.name {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.date {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n  margin-top: 15px;\n}\n\n.totales {\n  vertical-align: top;\n  top: 5px;\n  position: relative;\n}\n\n.title {\n  font-size: 14px;\n  text-align: center;\n}\n\n.value {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bolder;\n  color: black;\n}\n\n.icon {\n  font-size: 40px;\n}\n\n.old {\n  --background: var(--color-box-light) !important;\n}\n\nion-label {\n  margin: 0;\n  padding-bottom: 5px;\n}\n\nion-item-sliding {\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NybS90aWNrZXQtZGV0YWlscy1saXN0L3RpY2tldC1kZXRhaWwtY2FyZC9EOlxcbnBtXFxmeDExX21vYmlsZS9zcmNcXGFwcFxcaG9tZS1wYWdlXFxjcm1cXHRpY2tldC1kZXRhaWxzLWxpc3RcXHRpY2tldC1kZXRhaWwtY2FyZFxcdGlja2V0LWRldGFpbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvY3JtL3RpY2tldC1kZXRhaWxzLWxpc3QvdGlja2V0LWRldGFpbC1jYXJkL3RpY2tldC1kZXRhaWwtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FETUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtFQUVBLFVBQUE7QUNMRjs7QURRQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBRUEsVUFBQTtBQ1BGOztBRFVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7RUFFQSxVQUFBO0VBQ0EsZ0JBQUE7QUNURjs7QURZQTtFQUNFLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDVEY7O0FEWUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNURjs7QURZQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRFlBO0VBQ0UsZUFBQTtBQ1RGOztBRGdCQTtFQUNFLCtDQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsOEJBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jcm0vdGlja2V0LWRldGFpbHMtbGlzdC90aWNrZXQtZGV0YWlsLWNhcmQvdGlja2V0LWRldGFpbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpY2tldC1kZXRhaWwtaXRlbSB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oYXJ2ZXN0IHtcclxuICAvL21hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmlkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICAvL3BhZGRpbmctbGVmdDogMTBweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgLy9wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAvL3BhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gIC8vcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4udG90YWxlcyB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB0b3A6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnZhbHVlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1saWdodC1ib3gpO1xyXG59XHJcblxyXG4ub2xkIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJveC1saWdodCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuaW9uLWl0ZW0tc2xpZGluZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIudGlja2V0LWRldGFpbC1pdGVtIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaWQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5hbWUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kYXRlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udG90YWxlcyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHRvcDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmFsdWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLm9sZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYm94LWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: TicketDetailCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailCardComponent", function() { return TicketDetailCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TicketDetailCardComponent = class TicketDetailCardComponent {
    constructor() {
        /**
         * buildLink
         * @param file
         */
        this.buildLink = (file) => {
            if (file.link && file.link !== 'undefined') {
                return `https://drive.google.com/file/d/${file.link}/view?usp=sharing`;
            }
            return '#';
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TicketDetailCardComponent.prototype, "detail", void 0);
TicketDetailCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ticket-detail-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ticket-detail-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ticket-detail-card.component.scss */ "./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TicketDetailCardComponent);



/***/ }),

/***/ "./src/app/home-page/crm/ticket-details-list/ticket-details-list.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home-page/crm/ticket-details-list/ticket-details-list.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TicketDetailsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailsListPageModule", function() { return TicketDetailsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ticket_details_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket-details-list.page */ "./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ticket_detail_card_ticket_detail_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticket-detail-card/ticket-detail-card.component */ "./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.ts");






const routes = [
    {
        path: ':id',
        component: _ticket_details_list_page__WEBPACK_IMPORTED_MODULE_2__["TicketDetailsListPage"]
    }
];
let TicketDetailsListPageModule = class TicketDetailsListPageModule {
};
TicketDetailsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _ticket_details_list_page__WEBPACK_IMPORTED_MODULE_2__["TicketDetailsListPage"],
            _ticket_detail_card_ticket_detail_card_component__WEBPACK_IMPORTED_MODULE_5__["TicketDetailCardComponent"]
        ]
    })
], TicketDetailsListPageModule);



/***/ }),

/***/ "./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-tab-button {\n  font-size: 16px;\n  color: white;\n  --color: white;\n}\n\n.tab-selected {\n  border-bottom: 1px solid white !important;\n}\n\nion-tab-bar {\n  height: 45px;\n  --background: var(--color-home-header-menu);\n  --color: white;\n}\n\n.text-white {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NybS90aWNrZXQtZGV0YWlscy1saXN0L0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxob21lLXBhZ2VcXGNybVxcdGlja2V0LWRldGFpbHMtbGlzdFxcdGlja2V0LWRldGFpbHMtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9jcm0vdGlja2V0LWRldGFpbHMtbGlzdC90aWNrZXQtZGV0YWlscy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFFQSwyQ0FBQTtFQUNBLGNBQUE7QUNBRjs7QURJQTtFQUNFLHVCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvY3JtL3RpY2tldC1kZXRhaWxzLWxpc3QvdGlja2V0LWRldGFpbHMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRhYi1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50YWItc2VsZWN0ZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdGFiLWJhciB7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIC8vaGVpZ2h0OiAxMDBweDtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWhvbWUtaGVhZGVyLW1lbnUpO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDU4cHg7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRlIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iLCJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYi1zZWxlY3RlZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tdGFiLWJhciB7XG4gIGhlaWdodDogNDVweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ob21lLWhlYWRlci1tZW51KTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.ts ***!
  \*******************************************************************************/
/*! exports provided: TicketDetailsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailsListPage", function() { return TicketDetailsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");
/* harmony import */ var _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tickets/tickets.service */ "./src/app/home-page/crm/services/tickets/tickets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/network/network.service */ "./src/app/shared/services/network/network.service.ts");








let TicketDetailsListPage = class TicketDetailsListPage {
    constructor(storeService, ticketsService, activatedRoute, loaderService, httpService, networkService, router) {
        this.storeService = storeService;
        this.ticketsService = ticketsService;
        this.activatedRoute = activatedRoute;
        this.loaderService = loaderService;
        this.httpService = httpService;
        this.networkService = networkService;
        this.router = router;
        this.details = [];
        this.ticket = null;
        this.isOnline = false;
        /**
         * loadTicket
         */
        this.loadTicket = () => {
            this.loaderService.startLoader();
            const user = this.storeService.getActiveCompany();
            const data = {
                user: user.user
            };
            this.ticketsService.getTicket(this.id, data).subscribe((success) => {
                const { ticket, details, states, workers, priorities } = success.data;
                this.ticket = ticket;
                this.details = [...details];
                this.storeService.setActiveTicket(this.ticket);
                this.storeService.setTicketStates(states);
                this.storeService.setTicketUsers(workers);
                this.storeService.setTicketPriorities(priorities);
                this.loaderService.stopLoader();
            }, error => {
                this.loaderService.stopLoader();
                this.httpService.errorHandler(error);
            });
        };
        /**
         * reSync
         * @param event
         */
        this.reSync = (event) => {
            this.loadTicket();
            event.target.complete();
        };
        /**
         * openForm
         */
        this.openForm = () => {
            this.router.navigate(['home-page/ticket-form']);
        };
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.network$ = this.networkService.getNetworkStatus().subscribe((status) => this.isOnline = status);
    }
    ngOnDestroy() {
        this.network$.unsubscribe();
    }
    ionViewWillEnter() {
        this.loadTicket();
    }
};
TicketDetailsListPage.ctorParameters = () => [
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] },
    { type: _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TicketDetailsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ticket-details-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ticket-details-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ticket-details-list.page.scss */ "./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
        _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
        _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], TicketDetailsListPage);



/***/ })

}]);
//# sourceMappingURL=crm-ticket-details-list-ticket-details-list-module-es2015.js.map