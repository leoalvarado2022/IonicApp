(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crm-ticket-form-ticket-form-module"],{

/***/ "./node_modules/@ionic-native/chooser/ngx/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ionic-native/chooser/ngx/index.js ***!
  \*********************************************************/
/*! exports provided: Chooser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chooser", function() { return Chooser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var Chooser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Chooser, _super);
    function Chooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chooser.prototype.getFile = function (accept) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getFile", {}, arguments); };
    Chooser.pluginName = "Chooser";
    Chooser.plugin = "cordova-plugin-chooser";
    Chooser.pluginRef = "chooser";
    Chooser.repo = "https://github.com/cyph/cordova-plugin-chooser";
    Chooser.platforms = ["Android", "iOS"];
    Chooser = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Chooser);
    return Chooser;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nob29zZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBc0QzQywyQkFBaUI7Ozs7SUFRNUMseUJBQU8sYUFBQyxNQUFlOzs7Ozs7SUFSWixPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBdkRwQjtFQXVENkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaG9vc2VyUmVzdWx0IHtcbiAgZGF0YTogVWludDhBcnJheTtcbiAgZGF0YVVSSTogc3RyaW5nO1xuICBtZWRpYVR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB1cmk6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBDaG9vc2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEZpbGUgY2hvb3NlciBwbHVnaW4gZm9yIENvcmRvdmEuXG4gKlxuICogVGhlIGZvbGxvd2luZyBtdXN0IGJlIGFkZGVkIHRvIGNvbmZpZy54bWwgdG8gcHJldmVudCBjcmFzaGluZyB3aGVuIHNlbGVjdGluZyBsYXJnZSBmaWxlcyBvbiBBbmRyb2lkOlxuICogYGBgeG1sXG4gKiA8cGxhdGZvcm0gbmFtZT1cImFuZHJvaWRcIj5cbiAqICA8ZWRpdC1jb25maWdcbiAqICAgIGZpbGU9XCJhcHAvc3JjL21haW4vQW5kcm9pZE1hbmlmZXN0LnhtbFwiXG4gKiAgICBtb2RlPVwibWVyZ2VcIlxuICogICAgdGFyZ2V0PVwiL21hbmlmZXN0L2FwcGxpY2F0aW9uXCI+XG4gKiAgICA8YXBwbGljYXRpb24gYW5kcm9pZDpsYXJnZUhlYXA9XCJ0cnVlXCIgLz5cbiAqICA8L2VkaXQtY29uZmlnPlxuICogPC9wbGF0Zm9ybT5cbiAqIGBgYFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2hvb3NlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2hvb3Nlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNob29zZXI6IENob29zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNob29zZXIuZ2V0RmlsZSgpXG4gKiAgIC50aGVuKGZpbGUgPT4gY29uc29sZS5sb2coZmlsZSA/IGZpbGUubmFtZSA6ICdjYW5jZWxlZCcpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogQ2hvb3NlclJlc3VsdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Nob29zZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jaG9vc2VyJyxcbiAgcGx1Z2luUmVmOiAnY2hvb3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY3lwaC9jb3Jkb3ZhLXBsdWdpbi1jaG9vc2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hvb3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIERpc3BsYXlzIG5hdGl2ZSBwcm9tcHQgZm9yIHVzZXIgdG8gc2VsZWN0IGEgZmlsZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFthY2NlcHRdIE9wdGlvbmFsIE1JTUUgdHlwZSBmaWx0ZXIgKGUuZy4gJ2ltYWdlL2dpZix2aWRlby8qJykuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUHJvbWlzZSBjb250YWluaW5nIHNlbGVjdGVkIGZpbGUncyByYXcgYmluYXJ5IGRhdGEsXG4gICAqIGJhc2U2NC1lbmNvZGVkIGRhdGE6IFVSSSwgTUlNRSB0eXBlLCBkaXNwbGF5IG5hbWUsIGFuZCBvcmlnaW5hbCBVUkkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEZpbGUoYWNjZXB0Pzogc3RyaW5nKTogUHJvbWlzZTxDaG9vc2VyUmVzdWx0IHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-form/ticket-form.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-form/ticket-form.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <strong>Crear Detalle</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-tabs class=\"ticket-detail-tabs\">\r\n    <!-- Tab bar -->\r\n    <ion-tab-bar slot=\"top\">\r\n      <ion-tab-button (click)=\"activeTab = 1\" [selected]=\"activeTab === 1\">\r\n        <span>Detalle</span>\r\n      </ion-tab-button>\r\n      <ion-tab-button (click)=\"activeTab = 2\" [selected]=\"activeTab === 2\">\r\n        <span>Adjuntos</span>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n\r\n  <div class=\"detail-content-tab\">\r\n    <form [formGroup]=\"ticketForm\">\r\n      <ng-container *ngIf=\"activeTab === 1\">\r\n\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Observaciones</ion-label>\r\n          <ion-textarea rows=\"5\" formControlName=\"observations\"></ion-textarea>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Estado</ion-label>\r\n          <ion-select placeholder=\"Estado\" formControlName=\"state\">\r\n            <ion-select-option *ngFor=\"let state of states\" [value]=\"state.name\">{{ state.name | titlecase }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Asignado</ion-label>\r\n          <ion-select placeholder=\"Asignado\" formControlName=\"assigned_id\">\r\n            <ion-select-option *ngFor=\"let user of users\" [value]=\"user.id\">{{ user.name | titlecase }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Prioridad</ion-label>\r\n          <ion-select placeholder=\"Prioridad\" formControlName=\"priority\">\r\n            <ion-select-option *ngFor=\"let priority of priorities\" [value]=\"priority.id\">{{ priority.name | titlecase }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Dificultad</ion-label>\r\n          <ion-select placeholder=\"Dificultad\" formControlName=\"difficulty\">\r\n            <ion-select-option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty.level\">{{ difficulty.name | titlecase }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Compromiso Interno</ion-label>\r\n          <ion-datetime formControlName=\"commitmentAt\" [displayFormat]=\"dateFormat\" [max]=\"maxDate\" [pickerFormat]=\"dateFormat\"></ion-datetime>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Compromiso Cliente</ion-label>\r\n          <ion-datetime formControlName=\"commitmentInternAt\" [displayFormat]=\"dateFormat\" [max]=\"maxDate\" [pickerFormat]=\"dateFormat\"></ion-datetime>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Publico</ion-label>\r\n          <ion-select placeholder=\"Publico\" formControlName=\"public\">\r\n            <ion-select-option value=\"true\">Si</ion-select-option>\r\n            <ion-select-option value=\"false\">No</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"activeTab === 2\">\r\n        <!-- [disabled]=\"ticketForm.invalid\" -->\r\n        <ion-button expand=\"block\" color=\"warning\" (click)=\"pickFiles()\">\r\n          Agregar Archivos\r\n        </ion-button>\r\n\r\n        <!-- List of Sliding Items -->\r\n        <ion-list *ngIf=\"attachments.length > 0\">\r\n          <ion-item-sliding *ngFor=\"let item of attachments\">\r\n            <ion-item>\r\n              <ion-label>{{ item.name }}</ion-label>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"danger\" (click)=\"deleteFile(item)\">Borrar</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ng-container>\r\n\r\n      <ion-button expand=\"block\" (click)=\"submitDetail()\" [disabled]=\"ticketForm.invalid\">\r\n        Crear Detalle\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home-page/crm/ticket-form/ticket-form.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home-page/crm/ticket-form/ticket-form.module.ts ***!
  \*****************************************************************/
/*! exports provided: TicketFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketFormPageModule", function() { return TicketFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ticket_form_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket-form.page */ "./src/app/home-page/crm/ticket-form/ticket-form.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/chooser/ngx */ "./node_modules/@ionic-native/chooser/ngx/index.js");






const routes = [
    {
        path: '',
        component: _ticket_form_page__WEBPACK_IMPORTED_MODULE_2__["TicketFormPage"]
    }
];
let TicketFormPageModule = class TicketFormPageModule {
};
TicketFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ticket_form_page__WEBPACK_IMPORTED_MODULE_2__["TicketFormPage"]],
        providers: [_ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["Chooser"]]
    })
], TicketFormPageModule);



/***/ }),

/***/ "./src/app/home-page/crm/ticket-form/ticket-form.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home-page/crm/ticket-form/ticket-form.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-tab-button {\n  font-size: 16px;\n  color: white;\n  --color: white;\n}\n\n.tab-selected {\n  border-bottom: 1px solid white !important;\n}\n\nion-tab-bar {\n  height: 45px;\n  --background: var(--color-home-header-menu);\n  --color: white;\n}\n\n.ticket-detail-tabs {\n  height: 50px;\n}\n\n.detail-content-tab {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NybS90aWNrZXQtZm9ybS9EOlxcbnBtXFxmeDExX21vYmlsZS9zcmNcXGFwcFxcaG9tZS1wYWdlXFxjcm1cXHRpY2tldC1mb3JtXFx0aWNrZXQtZm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9jcm0vdGlja2V0LWZvcm0vdGlja2V0LWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUVBLDJDQUFBO0VBQ0EsY0FBQTtBQ0FGOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jcm0vdGlja2V0LWZvcm0vdGlja2V0LWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10YWItYnV0dG9uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGFiLXNlbGVjdGVkIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRhYi1iYXIge1xyXG4gIGhlaWdodDogNDVweDtcclxuICAvL2hlaWdodDogMTAwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ob21lLWhlYWRlci1tZW51KTtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICAvLyBtYXJnaW4tYm90dG9tOiA1OHB4O1xyXG59XHJcblxyXG4udGlja2V0LWRldGFpbC10YWJzIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtY29udGVudC10YWIge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuIiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRhYi1iYXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItaG9tZS1oZWFkZXItbWVudSk7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4udGlja2V0LWRldGFpbC10YWJzIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZGV0YWlsLWNvbnRlbnQtdGFiIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home-page/crm/ticket-form/ticket-form.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/home-page/crm/ticket-form/ticket-form.page.ts ***!
  \***************************************************************/
/*! exports provided: TicketFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketFormPage", function() { return TicketFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");
/* harmony import */ var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/chooser/ngx */ "./node_modules/@ionic-native/chooser/ngx/index.js");
/* harmony import */ var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/toast/toast.service */ "./src/app/shared/services/toast/toast.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/tickets/tickets.service */ "./src/app/home-page/crm/services/tickets/tickets.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let TicketFormPage = class TicketFormPage {
    constructor(formBuilder, storeService, chooser, toastService, loaderService, ticketsService, httpService, router) {
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
        this.difficulties = [
            { level: 1, name: 'facil' },
            { level: 2, name: 'medio' },
            { level: 3, name: 'dificil' }
        ];
        this.attachments = [];
        /**
         * pickFiles
         */
        this.pickFiles = () => {
            this.chooser.getFile('image/*,video/*').then((data) => {
                this.attachments.push({
                    id: 0,
                    file: data.dataURI.replace(/^data:.*,/, ''),
                    name: data.name,
                    application: data.mediaType,
                    type: this.getFileExtension(data.name),
                    detail: this.activeTicket.id
                });
            }, error => {
                this.toastService.errorToast('Ocurrio un error');
            });
        };
        /**
         * getFileExtension3
         * @param filename
         */
        this.getFileExtension = (filename) => {
            return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
        };
        /**
         * submitDetail
         */
        this.submitDetail = () => {
            const formData = Object.assign({}, this.ticketForm.value);
            const userSelected = this.users.find(i => i.id === formData.assigned_id);
            formData.assign_client = userSelected.clientContact === 0 ? false : true;
            formData.commitmentAt = moment__WEBPACK_IMPORTED_MODULE_10__(formData.commitmentAt).format('YYYY-MM-DD');
            formData.commitmentInternAt = moment__WEBPACK_IMPORTED_MODULE_10__(formData.commitmentInternAt).format('YYYY-MM-DD');
            this.activeTicket.maxResolution = moment__WEBPACK_IMPORTED_MODULE_10__(this.activeTicket.maxResolution).format('YYYY-MM-DD HH:mm:ss');
            this.activeTicket.createdAt = moment__WEBPACK_IMPORTED_MODULE_10__(this.activeTicket.createdAt).format('YYYY-MM-DD HH:mm:ss');
            const data = {
                ticket: this.activeTicket,
                detail: formData,
                attachments: this.attachments,
                wsAuthID: userSelected.wsAuthID
            };
            this.storeDetail(data);
        };
        /**
         * storeDetail
         * @param data
         */
        this.storeDetail = (data) => {
            this.loaderService.startLoader();
            this.ticketsService.storeTicket(data).subscribe((success) => {
                this.loaderService.stopLoader();
                this.router.navigate(['home-page/ticket-details-list', this.activeTicket.id]);
            }, error => {
                this.loaderService.stopLoader();
                this.httpService.errorHandler(error);
            });
        };
        /**
         * deleteFile
         * @param item
         */
        this.deleteFile = (item) => {
            const findIndex = this.attachments.findIndex(i => i === item);
            if (findIndex > -1) {
                this.attachments = this.attachments.filter((value, index, array) => findIndex !== index);
            }
        };
    }
    ngOnInit() {
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
};
TicketFormPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_4__["Chooser"] },
    { type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_7__["TicketsService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
TicketFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ticket-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ticket-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/ticket-form/ticket-form.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ticket-form.page.scss */ "./src/app/home-page/crm/ticket-form/ticket-form.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
        _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_4__["Chooser"],
        _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
        _services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_7__["TicketsService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], TicketFormPage);



/***/ })

}]);
//# sourceMappingURL=crm-ticket-form-ticket-form-module-es2015.js.map