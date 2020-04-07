function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-crm-ticket-details-list-ticket-details-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCrmTicketDetailsListTicketDetailCardTicketDetailCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card class=\"ticket-detail-item\">\n  <ion-item>\n    <ion-label>{{ detail.assignedName }}</ion-label>\n    <ion-icon color=\"primary\" name=\"document\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-card-content>\n    <p *ngIf=\"detail.active_state\"><strong>Estado:</strong> {{ detail.state }}</p>\n    <p>{{ detail.observations || 'Sin Observacion' }}</p>\n    <p class=\"text-confirm\" *ngIf=\"detail.active_commit\">Fecha Compromiso: {{ detail.commitmentAt | customDate }}</p>\n\n    <ng-container *ngIf=\"detail.attached && detail.attached.length\">\n      Adjuntos:\n      <ng-container *ngFor=\"let file of detail.attached\">\n        <a [href]=\"buildLink(file)\" target=\"_blank\">{{ file.name }}</a>\n      </ng-container>\n    </ng-container>\n\n  </ion-card-content>\n</ion-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/ticket-details-list/ticket-details-list.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/ticket-details-list/ticket-details-list.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCrmTicketDetailsListTicketDetailsListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <strong>Listado Detalles</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ng-container *ngIf=\"ticket\">\n  <div class=\"header-content background-color--header\">\n<!--    <ion-row class=\"text-white\">-->\n<!--      <p class=\"h\">{{remainingTime(ticket.clientCommitment)}}</p>-->\n      <div class=\"texto-ticket\">\n        <p class=\"h\"><strong>{{remainingTime(ticket.clientCommitment)}}</strong></p>\n        <p class=\"ticket-p\"><strong>#Ticket:</strong> {{ ticket.id }}</p>\n        <p class=\"ticket-p\"><strong>Cliente:</strong> {{ ticket.client }}</p>\n        <p class=\"ticket-p\"><strong>Tipo:</strong> {{ ticket.type }}</p>\n        <p class=\"ticket-p\"><strong>Producto:</strong> {{ ticket.productName }}</p>\n        <p class=\"ticket-p\"><strong>Funcionalidad:</strong> {{ ticket.funcionalityName }}</p>\n        <!--    <p>Fecha Maxima: {{ ticket.maxResolution | customDatetime }}</p>-->\n        <p class=\"ticket-p\"><strong>Estado:</strong> {{ ticket.state  }}</p>\n        <p class=\"ticket-p\"><strong>Referencia:</strong> {{ ticket.reference }}</p>\n        <p class=\"ticket-p\"><strong>Creador:</strong> {{ ticket.creator }}</p>\n        <p class=\"date-compromiso ticket-p\">Fecha de Compromiso: {{ ticket.clientCommitment }}</p>\n      </div>\n  </div>\n</ng-container>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)=\"reSync($event)\" class=\"refresher\" slot=\"fixed\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Sincronizando...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ng-container *ngIf=\"details.length > 0\">\n    <ion-virtual-scroll [items]=\"details\">\n      <app-ticket-detail-card *virtualItem=\"let detail\" [detail]=\"detail\"></app-ticket-detail-card>\n    </ion-virtual-scroll>\n  </ng-container>\n\n  <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\n    <ion-fab-button (click)=\"openForm()\" [disabled]=\"!isOnline\" color=\"primary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/modules/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/modules/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCrmTicketDetailsListTicketDetailCardTicketDetailCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ticket-detail-item {\n  margin: 5px;\n  background: white;\n  box-shadow: none !important;\n}\n\n.id {\n  text-align: left;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.name {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.date {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n  margin-top: 15px;\n}\n\n.totales {\n  vertical-align: top;\n  top: 5px;\n  position: relative;\n}\n\n.title {\n  font-size: 14px;\n  text-align: center;\n}\n\n.value {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bolder;\n  color: black;\n}\n\n.icon {\n  font-size: 40px;\n}\n\n.old {\n  --background: var(--color-box-light) !important;\n}\n\nion-label {\n  margin: 0;\n  padding-bottom: 5px;\n}\n\nion-item-sliding {\n  border-radius: 10px !important;\n}\n\n.text-confirm {\n  text-align: right;\n  font-style: italic;\n  font-size: 12px;\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL2NybS90aWNrZXQtZGV0YWlscy1saXN0L3RpY2tldC1kZXRhaWwtY2FyZC90aWNrZXQtZGV0YWlsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY3JtL3RpY2tldC1kZXRhaWxzLWxpc3QvdGlja2V0LWRldGFpbC1jYXJkL3RpY2tldC1kZXRhaWwtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FET0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtFQUVBLFVBQUE7QUNORjs7QURTQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBRUEsVUFBQTtBQ1JGOztBRFdBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7RUFFQSxVQUFBO0VBQ0EsZ0JBQUE7QUNWRjs7QURhQTtFQUNFLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDVkY7O0FEYUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNWRjs7QURhQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtBQ1ZGOztBRGlCQTtFQUNFLCtDQUFBO0FDZEY7O0FEaUJBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FDZEY7O0FEaUJBO0VBQ0UsOEJBQUE7QUNkRjs7QURpQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNkRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL3RpY2tldC1kZXRhaWxzLWxpc3QvdGlja2V0LWRldGFpbC1jYXJkL3RpY2tldC1kZXRhaWwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWNrZXQtZGV0YWlsLWl0ZW0ge1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4uaGFydmVzdCB7XG4gIC8vbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaWQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC8vcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uYW1lIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLy9wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRhdGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAvL3BhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udG90YWxlcyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHRvcDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmFsdWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmhpZ2hsaWdodCB7XG4gIC8vIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxpZ2h0LWJveCk7XG59XG5cbi5vbGQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJveC1saWdodCkgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jb25maXJte1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmVlbjtcbn1cbiIsIi50aWNrZXQtZGV0YWlsLWl0ZW0ge1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uYW1lIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGF0ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRvdGFsZXMge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0b3A6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5vbGQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJveC1saWdodCkgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jb25maXJtIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JlZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/modules/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: TicketDetailCardComponent */

  /***/
  function srcAppModulesCrmTicketDetailsListTicketDetailCardTicketDetailCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketDetailCardComponent", function () {
      return TicketDetailCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TicketDetailCardComponent =
    /*#__PURE__*/
    function () {
      function TicketDetailCardComponent() {
        _classCallCheck(this, TicketDetailCardComponent);

        /**
         * buildLink
         * @param file
         */
        this.buildLink = function (file) {
          if (file.link && file.link !== 'undefined') {
            return "https://drive.google.com/file/d/".concat(file.link, "/view?usp=sharing");
          }

          return '#';
        };
      }

      _createClass(TicketDetailCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TicketDetailCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TicketDetailCardComponent.prototype, "detail", void 0);
    TicketDetailCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ticket-detail-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ticket-detail-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ticket-detail-card.component.scss */
      "./src/app/modules/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TicketDetailCardComponent);
    /***/
  },

  /***/
  "./src/app/modules/crm/ticket-details-list/ticket-details-list.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/crm/ticket-details-list/ticket-details-list.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: TicketDetailsListPageModule */

  /***/
  function srcAppModulesCrmTicketDetailsListTicketDetailsListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketDetailsListPageModule", function () {
      return TicketDetailsListPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ticket_details_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ticket-details-list.page */
    "./src/app/modules/crm/ticket-details-list/ticket-details-list.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ticket_detail_card_ticket_detail_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ticket-detail-card/ticket-detail-card.component */
    "./src/app/modules/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.ts");

    var routes = [{
      path: ':id',
      component: _ticket_details_list_page__WEBPACK_IMPORTED_MODULE_2__["TicketDetailsListPage"]
    }];

    var TicketDetailsListPageModule = function TicketDetailsListPageModule() {
      _classCallCheck(this, TicketDetailsListPageModule);
    };

    TicketDetailsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      declarations: [_ticket_details_list_page__WEBPACK_IMPORTED_MODULE_2__["TicketDetailsListPage"], _ticket_detail_card_ticket_detail_card_component__WEBPACK_IMPORTED_MODULE_5__["TicketDetailCardComponent"]]
    })], TicketDetailsListPageModule);
    /***/
  },

  /***/
  "./src/app/modules/crm/ticket-details-list/ticket-details-list.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/crm/ticket-details-list/ticket-details-list.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCrmTicketDetailsListTicketDetailsListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-tab-button {\n  font-size: 16px;\n  color: white;\n  --color: white;\n}\n\n.tab-selected {\n  border-bottom: 1px solid white !important;\n}\n\nion-content {\n  --background: var(--color-background-tabs);\n}\n\nion-tab-bar {\n  height: 45px;\n  --background: var(--color-home-header-menu);\n  --color: white;\n}\n\n.text-white {\n  color: white !important;\n}\n\n.ticket-p {\n  margin: 0 !important;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.texto-ticket {\n  padding: 10px 0;\n  color: white;\n}\n\n.h {\n  position: absolute;\n  right: 20px;\n  font-style: italic;\n}\n\n.date-compromiso {\n  font-size: 12px;\n  float: right;\n  margin-bottom: 11px !important;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL2NybS90aWNrZXQtZGV0YWlscy1saXN0L3RpY2tldC1kZXRhaWxzLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NybS90aWNrZXQtZGV0YWlscy1saXN0L3RpY2tldC1kZXRhaWxzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFFQSwyQ0FBQTtFQUNBLGNBQUE7QUNBRjs7QURJQTtFQUNFLHVCQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDREY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NybS90aWNrZXQtZGV0YWlscy1saXN0L3RpY2tldC1kZXRhaWxzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFja2dyb3VuZC10YWJzKTtcbn1cblxuaW9uLXRhYi1iYXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIC8vaGVpZ2h0OiAxMDBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ob21lLWhlYWRlci1tZW51KTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC8vIG1hcmdpbi1ib3R0b206IDU4cHg7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi50aWNrZXQtcHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi50ZXh0by10aWNrZXR7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi5oe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5kYXRlLWNvbXByb21pc297XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbiIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLXRhYnMpO1xufVxuXG5pb24tdGFiLWJhciB7XG4gIGhlaWdodDogNDVweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ob21lLWhlYWRlci1tZW51KTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi50aWNrZXQtcCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4udGV4dG8tdGlja2V0IHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uZGF0ZS1jb21wcm9taXNvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDExcHggIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/crm/ticket-details-list/ticket-details-list.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/crm/ticket-details-list/ticket-details-list.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: TicketDetailsListPage */

  /***/
  function srcAppModulesCrmTicketDetailsListTicketDetailsListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketDetailsListPage", function () {
      return TicketDetailsListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");
    /* harmony import */


    var _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/tickets/tickets.service */
    "./src/app/modules/crm/services/tickets/tickets.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/services/network/network.service */
    "./src/app/shared/services/network/network.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var TicketDetailsListPage =
    /*#__PURE__*/
    function () {
      function TicketDetailsListPage(storeService, ticketsService, activatedRoute, loaderService, httpService, networkService, router) {
        var _this = this;

        _classCallCheck(this, TicketDetailsListPage);

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
        this.now = moment__WEBPACK_IMPORTED_MODULE_8__();
        /**
         * loadTicket
         */

        this.loadTicket = function () {
          _this.loaderService.startLoader();

          var user = _this.storeService.getActiveCompany();

          var data = {
            user: user.user
          };

          _this.ticketsService.getTicket(_this.id, data).subscribe(function (success) {
            var _success$data = success.data,
                ticket = _success$data.ticket,
                details = _success$data.details,
                states = _success$data.states,
                workers = _success$data.workers,
                priorities = _success$data.priorities;
            _this.ticket = ticket;
            _this.details = _toConsumableArray(details);

            _this.storeService.setActiveTicket(_this.ticket);

            _this.storeService.setTicketStates(states);

            _this.storeService.setTicketUsers(workers);

            _this.storeService.setTicketPriorities(priorities);

            _this.storeService.setTicketDetails(details);

            _this.loaderService.stopLoader();
          }, function (error) {
            _this.loaderService.stopLoader();

            _this.httpService.errorHandler(error);
          });
        };
        /**
         * reSync
         * @param event
         */


        this.reSync = function (event) {
          _this.loadTicket();

          event.target.complete();
        };
        /**
         * openForm
         */


        this.openForm = function () {
          _this.router.navigate(['home-page/ticket-form']);
        };
      }

      _createClass(TicketDetailsListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.id = this.activatedRoute.snapshot.paramMap.get('id');
          this.network$ = this.networkService.getNetworkStatus().subscribe(function (status) {
            return _this2.isOnline = status;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.network$.unsubscribe();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.loadTicket();
        }
        /**
         * @description tiempo restante
         * @param date
         */

      }, {
        key: "remainingTime",
        value: function remainingTime(date) {
          var _date = moment__WEBPACK_IMPORTED_MODULE_8__(date, 'DD/MM/YYYY HH:mm:ss');

          var difference = _date.diff(this.now, 'hours');

          return difference + ' h';
        }
      }]);

      return TicketDetailsListPage;
    }();

    TicketDetailsListPage.ctorParameters = function () {
      return [{
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]
      }, {
        type: _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
      }, {
        type: _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    TicketDetailsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ticket-details-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ticket-details-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/ticket-details-list/ticket-details-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ticket-details-list.page.scss */
      "./src/app/modules/crm/ticket-details-list/ticket-details-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"], _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], TicketDetailsListPage);
    /***/
  }
}]);
//# sourceMappingURL=modules-crm-ticket-details-list-ticket-details-list-module-es5.js.map