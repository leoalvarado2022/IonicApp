function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crm-ticket-form-ticket-form-module"], {
  /***/
  "./node_modules/@ionic-native/chooser/ngx/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@ionic-native/chooser/ngx/index.js ***!
    \*********************************************************/

  /*! exports provided: Chooser */

  /***/
  function node_modulesIonicNativeChooserNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chooser", function () {
      return Chooser;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/index.js");

    var Chooser =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Chooser, _super);

      function Chooser() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      Chooser.prototype.getFile = function (accept) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getFile", {}, arguments);
      };

      Chooser.pluginName = "Chooser";
      Chooser.plugin = "cordova-plugin-chooser";
      Chooser.pluginRef = "chooser";
      Chooser.repo = "https://github.com/cyph/cordova-plugin-chooser";
      Chooser.platforms = ["Android", "iOS"];
      Chooser = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Chooser);
      return Chooser;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nob29zZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBc0QzQywyQkFBaUI7Ozs7SUFRNUMseUJBQU8sYUFBQyxNQUFlOzs7Ozs7SUFSWixPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBdkRwQjtFQXVENkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaG9vc2VyUmVzdWx0IHtcbiAgZGF0YTogVWludDhBcnJheTtcbiAgZGF0YVVSSTogc3RyaW5nO1xuICBtZWRpYVR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB1cmk6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBDaG9vc2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEZpbGUgY2hvb3NlciBwbHVnaW4gZm9yIENvcmRvdmEuXG4gKlxuICogVGhlIGZvbGxvd2luZyBtdXN0IGJlIGFkZGVkIHRvIGNvbmZpZy54bWwgdG8gcHJldmVudCBjcmFzaGluZyB3aGVuIHNlbGVjdGluZyBsYXJnZSBmaWxlcyBvbiBBbmRyb2lkOlxuICogYGBgeG1sXG4gKiA8cGxhdGZvcm0gbmFtZT1cImFuZHJvaWRcIj5cbiAqICA8ZWRpdC1jb25maWdcbiAqICAgIGZpbGU9XCJhcHAvc3JjL21haW4vQW5kcm9pZE1hbmlmZXN0LnhtbFwiXG4gKiAgICBtb2RlPVwibWVyZ2VcIlxuICogICAgdGFyZ2V0PVwiL21hbmlmZXN0L2FwcGxpY2F0aW9uXCI+XG4gKiAgICA8YXBwbGljYXRpb24gYW5kcm9pZDpsYXJnZUhlYXA9XCJ0cnVlXCIgLz5cbiAqICA8L2VkaXQtY29uZmlnPlxuICogPC9wbGF0Zm9ybT5cbiAqIGBgYFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2hvb3NlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2hvb3Nlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNob29zZXI6IENob29zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNob29zZXIuZ2V0RmlsZSgpXG4gKiAgIC50aGVuKGZpbGUgPT4gY29uc29sZS5sb2coZmlsZSA/IGZpbGUubmFtZSA6ICdjYW5jZWxlZCcpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogQ2hvb3NlclJlc3VsdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Nob29zZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jaG9vc2VyJyxcbiAgcGx1Z2luUmVmOiAnY2hvb3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY3lwaC9jb3Jkb3ZhLXBsdWdpbi1jaG9vc2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hvb3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIERpc3BsYXlzIG5hdGl2ZSBwcm9tcHQgZm9yIHVzZXIgdG8gc2VsZWN0IGEgZmlsZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFthY2NlcHRdIE9wdGlvbmFsIE1JTUUgdHlwZSBmaWx0ZXIgKGUuZy4gJ2ltYWdlL2dpZix2aWRlby8qJykuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUHJvbWlzZSBjb250YWluaW5nIHNlbGVjdGVkIGZpbGUncyByYXcgYmluYXJ5IGRhdGEsXG4gICAqIGJhc2U2NC1lbmNvZGVkIGRhdGE6IFVSSSwgTUlNRSB0eXBlLCBkaXNwbGF5IG5hbWUsIGFuZCBvcmlnaW5hbCBVUkkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEZpbGUoYWNjZXB0Pzogc3RyaW5nKTogUHJvbWlzZTxDaG9vc2VyUmVzdWx0IHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-form/ticket-form.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-form/ticket-form.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageCrmTicketFormTicketFormPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <strong>Crear Detalle</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs class=\"ticket-detail-tabs\">\n    <!-- Tab bar -->\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button (click)=\"activeTab = 1\" [selected]=\"activeTab === 1\">\n        <span>Detalle</span>\n      </ion-tab-button>\n      <ion-tab-button (click)=\"activeTab = 2\" [selected]=\"activeTab === 2\">\n        <span>Adjuntos</span>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n\n  <div class=\"detail-content-tab\">\n    <form [formGroup]=\"ticketForm\">\n      <ng-container *ngIf=\"activeTab === 1\">\n\n        <ion-item>\n          <ion-label position=\"stacked\">Observaciones</ion-label>\n          <ion-textarea rows=\"5\" formControlName=\"observations\"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Estado</ion-label>\n          <ion-select placeholder=\"Estado\" formControlName=\"state\">\n            <ion-select-option *ngFor=\"let state of states\" [value]=\"state.name\">{{ state.name | titlecase }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Asignado</ion-label>\n          <ion-select placeholder=\"Asignado\" formControlName=\"assigned_id\">\n            <ion-select-option *ngFor=\"let user of users\" [value]=\"user.id\">{{ user.name | titlecase }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Prioridad</ion-label>\n          <ion-select placeholder=\"Prioridad\" formControlName=\"priority\">\n            <ion-select-option *ngFor=\"let priority of priorities\" [value]=\"priority.id\">{{ priority.name | titlecase }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Dificultad</ion-label>\n          <ion-select placeholder=\"Dificultad\" formControlName=\"difficulty\">\n            <ion-select-option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty.level\">{{ difficulty.name | titlecase }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Compromiso Interno</ion-label>\n          <ion-datetime formControlName=\"commitmentAt\" [displayFormat]=\"dateFormat\" [max]=\"maxDate\" [pickerFormat]=\"dateFormat\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Compromiso Cliente</ion-label>\n          <ion-datetime formControlName=\"commitmentInternAt\" [displayFormat]=\"dateFormat\" [max]=\"maxDate\" [pickerFormat]=\"dateFormat\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Publico</ion-label>\n          <ion-select placeholder=\"Publico\" formControlName=\"public\">\n            <ion-select-option value=\"true\">Si</ion-select-option>\n            <ion-select-option value=\"false\">No</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n      </ng-container>\n\n      <ng-container *ngIf=\"activeTab === 2\">\n        <!-- [disabled]=\"ticketForm.invalid\" -->\n        <ion-button expand=\"block\" color=\"warning\" (click)=\"pickFiles()\">\n          Agregar Archivos\n        </ion-button>\n\n        <!-- List of Sliding Items -->\n        <ion-list *ngIf=\"attachments.length > 0\">\n          <ion-item-sliding *ngFor=\"let item of attachments\">\n            <ion-item>\n              <ion-label>{{ item.name }}</ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option color=\"danger\" (click)=\"deleteFile(item)\">Borrar</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ng-container>\n\n      <ion-button expand=\"block\" (click)=\"submitDetail()\" [disabled]=\"ticketForm.invalid\">\n        Crear Detalle\n      </ion-button>\n    </form>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home-page/crm/ticket-form/ticket-form.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/home-page/crm/ticket-form/ticket-form.module.ts ***!
    \*****************************************************************/

  /*! exports provided: TicketFormPageModule */

  /***/
  function srcAppHomePageCrmTicketFormTicketFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketFormPageModule", function () {
      return TicketFormPageModule;
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


    var _ticket_form_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ticket-form.page */
    "./src/app/home-page/crm/ticket-form/ticket-form.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/chooser/ngx */
    "./node_modules/@ionic-native/chooser/ngx/index.js");

    var routes = [{
      path: '',
      component: _ticket_form_page__WEBPACK_IMPORTED_MODULE_2__["TicketFormPage"]
    }];

    var TicketFormPageModule = function TicketFormPageModule() {
      _classCallCheck(this, TicketFormPageModule);
    };

    TicketFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_ticket_form_page__WEBPACK_IMPORTED_MODULE_2__["TicketFormPage"]],
      providers: [_ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["Chooser"]]
    })], TicketFormPageModule);
    /***/
  },

  /***/
  "./src/app/home-page/crm/ticket-form/ticket-form.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/home-page/crm/ticket-form/ticket-form.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageCrmTicketFormTicketFormPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-tab-button {\n  font-size: 16px;\n  color: white;\n  --color: white;\n}\n\n.tab-selected {\n  border-bottom: 1px solid white !important;\n}\n\nion-tab-bar {\n  height: 45px;\n  --background: var(--color-home-header-menu);\n  --color: white;\n}\n\n.ticket-detail-tabs {\n  height: 50px;\n}\n\n.detail-content-tab {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9ob21lLXBhZ2UvY3JtL3RpY2tldC1mb3JtL3RpY2tldC1mb3JtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL2NybS90aWNrZXQtZm9ybS90aWNrZXQtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBRUEsMkNBQUE7RUFDQSxjQUFBO0FDQUY7O0FESUE7RUFDRSxZQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2NybS90aWNrZXQtZm9ybS90aWNrZXQtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYi1zZWxlY3RlZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tdGFiLWJhciB7XG4gIGhlaWdodDogNDVweDtcbiAgLy9oZWlnaHQ6IDEwMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWhvbWUtaGVhZGVyLW1lbnUpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLy8gbWFyZ2luLWJvdHRvbTogNThweDtcbn1cblxuLnRpY2tldC1kZXRhaWwtdGFicyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmRldGFpbC1jb250ZW50LXRhYiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4iLCJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYi1zZWxlY3RlZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tdGFiLWJhciB7XG4gIGhlaWdodDogNDVweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ob21lLWhlYWRlci1tZW51KTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi50aWNrZXQtZGV0YWlsLXRhYnMge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5kZXRhaWwtY29udGVudC10YWIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home-page/crm/ticket-form/ticket-form.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/home-page/crm/ticket-form/ticket-form.page.ts ***!
    \***************************************************************/

  /*! exports provided: TicketFormPage */

  /***/
  function srcAppHomePageCrmTicketFormTicketFormPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketFormPage", function () {
      return TicketFormPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");
    /* harmony import */


    var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/chooser/ngx */
    "./node_modules/@ionic-native/chooser/ngx/index.js");
    /* harmony import */


    var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/tickets/tickets.service */
    "./src/app/home-page/crm/services/tickets/tickets.service.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var TicketFormPage =
    /*#__PURE__*/
    function () {
      function TicketFormPage(formBuilder, storeService, chooser, toastService, loaderService, ticketsService, httpService, router) {
        var _this = this;

        _classCallCheck(this, TicketFormPage);

        this.formBuilder = formBuilder;
        this.storeService = storeService;
        this.chooser = chooser;
        this.toastService = toastService;
        this.loaderService = loaderService;
        this.ticketsService = ticketsService;
        this.httpService = httpService;
        this.router = router;
        this.activeTab = 1;
        this.activeTicket = null;
        this.dateFormat = 'DD/MM/YYYY';
        this.maxDate = '2030';
        this.states = [];
        this.users = [];
        this.priorities = [];
        this.difficulties = [{
          level: 1,
          name: 'facil'
        }, {
          level: 2,
          name: 'medio'
        }, {
          level: 3,
          name: 'dificil'
        }];
        this.attachments = [];
        /**
         * pickFiles
         */

        this.pickFiles = function () {
          _this.chooser.getFile('image/*,video/*').then(function (data) {
            _this.attachments.push({
              id: 0,
              file: data.dataURI.replace(/^data:.*,/, ''),
              name: data.name,
              application: data.mediaType,
              type: _this.getFileExtension(data.name),
              detail: _this.activeTicket.id
            });
          }, function (error) {
            _this.toastService.errorToast('Ocurrio un error');
          });
        };
        /**
         * getFileExtension3
         * @param filename
         */


        this.getFileExtension = function (filename) {
          return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
        };
        /**
         * submitDetail
         */


        this.submitDetail = function () {
          var formData = Object.assign({}, _this.ticketForm.value);

          var userSelected = _this.users.find(function (i) {
            return i.id === formData.assigned_id;
          });

          formData.assign_client = userSelected.clientContact === 0 ? false : true;
          formData.commitmentAt = moment__WEBPACK_IMPORTED_MODULE_10__(formData.commitmentAt).format('YYYY-MM-DD');
          formData.commitmentInternAt = moment__WEBPACK_IMPORTED_MODULE_10__(formData.commitmentInternAt).format('YYYY-MM-DD');
          _this.activeTicket.maxResolution = moment__WEBPACK_IMPORTED_MODULE_10__(_this.activeTicket.maxResolution).format('YYYY-MM-DD HH:mm:ss');
          _this.activeTicket.createdAt = moment__WEBPACK_IMPORTED_MODULE_10__(_this.activeTicket.createdAt).format('YYYY-MM-DD HH:mm:ss');
          var data = {
            ticket: _this.activeTicket,
            detail: formData,
            attachments: _this.attachments,
            wsAuthID: userSelected.wsAuthID
          };

          _this.storeDetail(data);
        };
        /**
         * storeDetail
         * @param data
         */


        this.storeDetail = function (data) {
          _this.loaderService.startLoader();

          _this.ticketsService.storeTicket(data).subscribe(function (success) {
            _this.loaderService.stopLoader();

            _this.router.navigate(['home-page/ticket-details-list', _this.activeTicket.id]);
          }, function (error) {
            _this.loaderService.stopLoader();

            _this.httpService.errorHandler(error);
          });
        };
        /**
         * deleteFile
         * @param item
         */


        this.deleteFile = function (item) {
          var findIndex = _this.attachments.findIndex(function (i) {
            return i === item;
          });

          if (findIndex > -1) {
            _this.attachments = _this.attachments.filter(function (value, index, array) {
              return findIndex !== index;
            });
          }
        };
      }

      _createClass(TicketFormPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activeTicket = this.storeService.getActiveTicket();
          this.states = this.storeService.getTicketStates();
          this.users = this.storeService.getTicketUsers();
          this.priorities = this.storeService.getTicketPriorities();
          this.ticketForm = this.formBuilder.group({
            id: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ticket: [this.activeTicket.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            public: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            created_id: [this.activeTicket.client_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            assigned_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            observations: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            commitmentAt: [this.activeTicket.internalCommitment, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            commitmentInternAt: [this.activeTicket.clientCommitment, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            difficulty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            assign_client: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            temporal_id: [0]
          });
        }
      }]);

      return TicketFormPage;
    }();

    TicketFormPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]
      }, {
        type: _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_4__["Chooser"]
      }, {
        type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_7__["TicketsService"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }];
    };

    TicketFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ticket-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ticket-form.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-form/ticket-form.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ticket-form.page.scss */
      "./src/app/home-page/crm/ticket-form/ticket-form.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"], _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_4__["Chooser"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"], _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_7__["TicketsService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])], TicketFormPage);
    /***/
  }
}]);
//# sourceMappingURL=crm-ticket-form-ticket-form-module-es5.js.map