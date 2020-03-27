function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crm-ticket-details-list-ticket-details-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageCrmTicketDetailsListTicketDetailCardTicketDetailCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card class=\"ticket-detail-item\">\n  <ion-item>\n    <ion-label>{{ detail.assignedName }}</ion-label>\n    <ion-icon color=\"primary\" name=\"document\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-card-content>\n    <p>Fecha Compromiso: {{ detail.commitmentAt | customDate }}</p>\n    <p>Fecha Compromiso Interna: {{ detail.commitmentInternAt | customDate }}</p>\n    <br>\n    <p>{{ detail.observations || 'Sin Observacion' }}</p>\n\n    <ng-container *ngIf=\"detail.attached\">\n      Adjuntos:\n      <ng-container *ngFor=\"let file of detail.attached\">\n        <a [href]=\"buildLink(file)\" target=\"_blank\">{{ file.name }}</a>\n      </ng-container>\n    </ng-container>\n\n  </ion-card-content>\n</ion-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageCrmTicketDetailsListTicketDetailsListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <strong>Listado Detalles</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ng-container *ngIf=\"ticket\">\n  <div class=\"header-content background-color--header\">\n    <ion-row class=\"text-white\">\n      <ion-col>ID: {{ ticket.id }}</ion-col>\n      <ion-col>Cliente: {{ ticket.client }}</ion-col>\n    </ion-row>\n    <ion-row class=\"text-white\">\n      <ion-col>Tipo: {{ ticket.type }}</ion-col>\n      <ion-col>Producto: {{ 'pendiente' }}</ion-col>\n    </ion-row>\n    <ion-row class=\"text-white\">\n      <ion-col>Fecha Maxima: {{ ticket.maxResolution | customDate }}</ion-col>\n      <ion-col>Estado: {{ ticket.state }}</ion-col>\n    </ion-row>\n    <ion-row class=\"text-white\">\n      <ion-col>Referencia: {{ ticket.reference }}</ion-col>\n    </ion-row>\n  </div>\n</ng-container>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)=\"reSync($event)\" class=\"refresher\" slot=\"fixed\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Sincronizando...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ng-container *ngIf=\"details.length > 0\">\n    <ion-virtual-scroll [items]=\"details\">\n      <app-ticket-detail-card *virtualItem=\"let detail\" [detail]=\"detail\"></app-ticket-detail-card>\n    </ion-virtual-scroll>\n  </ng-container>\n\n  <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\n    <ion-fab-button (click)=\"openForm()\" [disabled]=\"!isOnline\" color=\"primary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageCrmTicketDetailsListTicketDetailCardTicketDetailCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ticket-detail-item {\n  margin: 5px;\n  width: 100%;\n}\n\n.id {\n  text-align: left;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.name {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.date {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n  margin-top: 15px;\n}\n\n.totales {\n  vertical-align: top;\n  top: 5px;\n  position: relative;\n}\n\n.title {\n  font-size: 14px;\n  text-align: center;\n}\n\n.value {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bolder;\n  color: black;\n}\n\n.icon {\n  font-size: 40px;\n}\n\n.old {\n  --background: var(--color-box-light) !important;\n}\n\nion-label {\n  margin: 0;\n  padding-bottom: 5px;\n}\n\nion-item-sliding {\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9ob21lLXBhZ2UvY3JtL3RpY2tldC1kZXRhaWxzLWxpc3QvdGlja2V0LWRldGFpbC1jYXJkL3RpY2tldC1kZXRhaWwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL2NybS90aWNrZXQtZGV0YWlscy1saXN0L3RpY2tldC1kZXRhaWwtY2FyZC90aWNrZXQtZGV0YWlsLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRE1BO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7RUFFQSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtFQUVBLFVBQUE7QUNQRjs7QURVQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBRUEsVUFBQTtFQUNBLGdCQUFBO0FDVEY7O0FEWUE7RUFDRSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFlBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDVEY7O0FEWUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNURjs7QURZQTtFQUNFLGVBQUE7QUNURjs7QURnQkE7RUFDRSwrQ0FBQTtBQ2JGOztBRGdCQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQ2JGOztBRGdCQTtFQUNFLDhCQUFBO0FDYkYiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvY3JtL3RpY2tldC1kZXRhaWxzLWxpc3QvdGlja2V0LWRldGFpbC1jYXJkL3RpY2tldC1kZXRhaWwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWNrZXQtZGV0YWlsLWl0ZW0ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYXJ2ZXN0IHtcbiAgLy9tYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLy9wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5hbWUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAvL3BhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGF0ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC8vcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50b3RhbGVzIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uaGlnaGxpZ2h0IHtcbiAgLy8gYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtYm94KTtcbn1cblxuLm9sZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYm94LWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiIsIi50aWNrZXQtZGV0YWlsLWl0ZW0ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubmFtZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRhdGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50b3RhbGVzIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ub2xkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ib3gtbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: TicketDetailCardComponent */

  /***/
  function srcAppHomePageCrmTicketDetailsListTicketDetailCardTicketDetailCardComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ticket-detail-card.component.scss */
      "./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TicketDetailCardComponent);
    /***/
  },

  /***/
  "./src/app/home-page/crm/ticket-details-list/ticket-details-list.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/home-page/crm/ticket-details-list/ticket-details-list.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: TicketDetailsListPageModule */

  /***/
  function srcAppHomePageCrmTicketDetailsListTicketDetailsListModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.ts");
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
    "./src/app/home-page/crm/ticket-details-list/ticket-detail-card/ticket-detail-card.component.ts");

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
  "./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageCrmTicketDetailsListTicketDetailsListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-tab-button {\n  font-size: 16px;\n  color: white;\n  --color: white;\n}\n\n.tab-selected {\n  border-bottom: 1px solid white !important;\n}\n\nion-tab-bar {\n  height: 45px;\n  --background: var(--color-home-header-menu);\n  --color: white;\n}\n\n.text-white {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9ob21lLXBhZ2UvY3JtL3RpY2tldC1kZXRhaWxzLWxpc3QvdGlja2V0LWRldGFpbHMtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9jcm0vdGlja2V0LWRldGFpbHMtbGlzdC90aWNrZXQtZGV0YWlscy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFFQSwyQ0FBQTtFQUNBLGNBQUE7QUNBRjs7QURJQTtFQUNFLHVCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvY3JtL3RpY2tldC1kZXRhaWxzLWxpc3QvdGlja2V0LWRldGFpbHMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYi1zZWxlY3RlZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tdGFiLWJhciB7XG4gIGhlaWdodDogNDVweDtcbiAgLy9oZWlnaHQ6IDEwMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWhvbWUtaGVhZGVyLW1lbnUpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLy8gbWFyZ2luLWJvdHRvbTogNThweDtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWhvbWUtaGVhZGVyLW1lbnUpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: TicketDetailsListPage */

  /***/
  function srcAppHomePageCrmTicketDetailsListTicketDetailsListPageTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/home-page/crm/services/tickets/tickets.service.ts");
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ticket-details-list.page.scss */
      "./src/app/home-page/crm/ticket-details-list/ticket-details-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"], _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], TicketDetailsListPage);
    /***/
  }
}]);
//# sourceMappingURL=crm-ticket-details-list-ticket-details-list-module-es5.js.map