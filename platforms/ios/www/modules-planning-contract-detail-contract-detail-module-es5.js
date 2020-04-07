function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-planning-contract-detail-contract-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/contract-detail/contract-detail.page.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/contract-detail/contract-detail.page.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPlanningContractDetailContractDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <strong>Detalle Centro de Costo</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<div (click)=\"openSelected = !openSelected\" [class.selected]=\"openSelected\" class=\"header-content background-color--header\">\n  <ng-container *ngIf=\"costCenterListItem\">\n    <ion-row>\n      <ion-col size=\"10\">\n        <div class=\"white\">{{ costCenterListItem.code }}</div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ng-container *ngIf=\"costCenter\">\n          <ion-button (click)=\"myGeolocation()\" fill=\"clear\" size=\"small\">\n            <ion-icon [ngClass]=\"{ 'geolocation': costCenter.latitude && costCenter.longitude, 'no-geolocation': !costCenter.latitude || !costCenter.longitude }\" name=\"globe\" slot=\"icon-only\" style=\"color:white;\"></ion-icon>\n          </ion-button>\n        </ng-container>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row\">\n      <ion-col size=\"12\" style=\"padding-bottom: 0;\">\n        <div class=\"white\" style=\"font-weight: bold;font-size: 20px;padding-left: 1rem;\">{{ costCenterListItem.name }}</div>\n      </ion-col>\n      <ion-col size=\"12\" style=\"padding-top: 0;\">\n        <div class=\"white\" style=\"font-size: 14px;padding-left: 1rem;\">{{ costCenterListItem.producerName }}</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"white\">{{ costCenterListItem.speciesName }} / {{ costCenterListItem.varietyName }}</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"white\">Fecha Cosecha: {{ costCenterListItem.harvestDate | customDate }}</div>\n      </ion-col>\n      <ion-col *ngIf=\"costCenterListItem.contractResponsible\" size=\"12\">\n        <div class=\"white\">Numero de Contratos: {{ costCenterListItem.contractsNumber }}</div>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n\n  <ng-container *ngFor=\"let contract of productionContracts; let index = index\">\n    <div [class.scroll-card-custom]=\"openSelected\" class=\"scroll-card\">\n      <ng-container>\n        <div class=\"card-text\">\n          <div class=\"card-text-one\">\n            <p>{{ contract.totalQuantity }} {{ showUnitName() | uppercase }}</p>\n            <p># {{ contract.documentNumber }}</p>\n            <p>{{ contract.date| customDate }}</p>\n            <p>{{ contract.responsibleName }}</p>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n\n<!--  header-->\n<ion-content>\n\n  <!--  estimaciones-->\n  <div class=\"estimates-card\">\n    <div>\n      <p>{{ showUnitName() | uppercase }} CONTRATADOS</p>\n      <p>\n        <ion-icon color=\"danger\" name=\"arrow-round-up\"></ion-icon>&nbsp;\n        <span>{{ getTotal() | number:'1.0-0':'es-CL' }}</span>\n      </p>\n    </div>\n    <div>\n      <p>{{ showUnitName() | uppercase }} RECIBIDOS</p>\n      <p>\n        <ion-icon color=\"primary\" name=\"arrow-round-down\"></ion-icon>&nbsp;<span>3.200</span></p>\n    </div>\n  </div>\n\n  <!-- ESTIMACION DE COSECHA -->\n  <ion-list class=\"item-list\">\n    <ion-list-header>\n      <ion-label>ESTIMACION DE COSECHA</ion-label>\n    </ion-list-header>\n    <ng-container *ngIf=\"harvestEstimate; else emptyHarvest\">\n      <app-harvest-estimate-item\n        (harvestSelected)=\"harvestPage($event)\"\n        [item]=\"harvestEstimate[0]\"\n        [units]=\"units\">\n      </app-harvest-estimate-item>\n    </ng-container>\n    <ng-template #emptyHarvest>\n      <app-harvest-estimate-item (harvestSelected)=\"harvestPage($event)\"></app-harvest-estimate-item>\n    </ng-template>\n  </ion-list>\n\n  <!-- ESTIMACION DE CALIDAD -->\n  <ion-list class=\"item-list\">\n    <ion-list-header>\n      <ion-label>ESTIMACION DE CALIDAD</ion-label>\n    </ion-list-header>\n    <ng-container *ngIf=\"qualityEstimate; else emptyQuality\">\n      <app-quality-estimate-item\n        (itemSelected)=\"qualityPage($event)\"\n        [costCenter]=\"costCenter\"\n        [details]=\"getItemDetails(qualityEstimate[0])\"\n        [item]=\"qualityEstimate[0]\">\n      </app-quality-estimate-item>\n    </ng-container>\n    <ng-template #emptyQuality>\n      <app-quality-estimate-item (itemSelected)=\"qualityPage($event)\"></app-quality-estimate-item>\n    </ng-template>\n  </ion-list>\n\n  <!--  NOTAS-->\n  <ion-list class=\"item-list\">\n    <ion-list-header>\n      <ion-label>NOTA</ion-label>\n    </ion-list-header>\n    <ng-container *ngIf=\"notes; else emptyNote\">\n      <app-note-item (noteClicked)=\"noteListPage($event)\" [item]=\"notes[0]\"></app-note-item>\n    </ng-container>\n    <ng-template #emptyNote>\n      <app-note-item (noteClicked)=\"noteListPage($event)\"></app-note-item>\n    </ng-template>\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/modules/planning/contract-detail/contract-detail.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/planning/contract-detail/contract-detail.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ContractDetailPageModule */

  /***/
  function srcAppModulesPlanningContractDetailContractDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContractDetailPageModule", function () {
      return ContractDetailPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _contract_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contract-detail.page */
    "./src/app/modules/planning/contract-detail/contract-detail.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var routes = [{
      path: ':id',
      component: _contract_detail_page__WEBPACK_IMPORTED_MODULE_3__["ContractDetailPage"]
    }];

    var ContractDetailPageModule = function ContractDetailPageModule() {
      _classCallCheck(this, ContractDetailPageModule);
    };

    ContractDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_contract_detail_page__WEBPACK_IMPORTED_MODULE_3__["ContractDetailPage"]]
    })], ContractDetailPageModule);
    /***/
  },

  /***/
  "./src/app/modules/planning/contract-detail/contract-detail.page.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/planning/contract-detail/contract-detail.page.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPlanningContractDetailContractDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-back-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-content {\n  --background: var(--color-background-tabs);\n  background: var(--color-background-tabs);\n}\n\n.white {\n  color: white;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.card {\n  display: table;\n  width: 100%;\n  padding: 0 25px 0 25px;\n}\n\n.card .card-text-one, .card .card-text-two {\n  width: 50%;\n  display: table-cell;\n  color: white;\n}\n\n.card .card-text-two {\n  text-align: right;\n}\n\n.card-text {\n  display: table;\n  width: 100%;\n  padding: 0 25px 0 25px;\n  position: relative;\n}\n\n.card-text .card-text-one, .card-text .card-text-two {\n  width: 100%;\n  display: table-cell;\n  color: white;\n}\n\n.card-text .card-text-one p:nth-child(1), .card-text .card-text-two p:nth-child(1) {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: 15px !important;\n  margin-right: 15px;\n  padding: 10px;\n  background: var(--color-light-card-hard);\n  border-radius: 20px;\n}\n\n.card-text .card-text-one p:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-text .card-text-two {\n  text-align: right;\n}\n\n.card-text .card-text-two p:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-contrato {\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: underline;\n  margin-bottom: -1px;\n}\n\n.scroll-card {\n  max-height: 0;\n  -webkit-transition: max-height 0.15s ease-out;\n  transition: max-height 0.15s ease-out;\n  overflow: hidden;\n}\n\n.scroll-card-custom {\n  padding: 3px 5px 3px 5px;\n}\n\n.scroll-card-custom .card-text {\n  background-color: var(--color-searchbar-menu);\n  border-radius: 10px;\n  border: none !important;\n}\n\n.scroll-card-custom .card-text .card-text-one {\n  padding: 12px 0;\n}\n\n.scroll-card-custom .card-text p {\n  margin: 0;\n}\n\n.header-content.selected .scroll-card {\n  max-height: 500px;\n  -webkit-transition: max-height 0.25s ease-in;\n  transition: max-height 0.25s ease-in;\n}\n\n.estimates-card {\n  display: table;\n  width: 100%;\n  text-align: center;\n  background: white;\n  padding: 10px 0;\n  margin-bottom: 5px;\n  border-radius: 0 0 12px 12px;\n}\n\n.estimates-card div {\n  display: table-cell;\n}\n\n.estimates-card div p {\n  margin: 5px 0;\n}\n\n.estimates-card div:nth-child(1) {\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n\n.font-10 {\n  font-size: 10px;\n}\n\n#container {\n  max-height: 0;\n  -webkit-transition: max-height 0.15s ease-out;\n  transition: max-height 0.15s ease-out;\n  overflow: hidden;\n  display: block;\n}\n\n.graphics.selected #container {\n  max-height: 500px;\n  -webkit-transition: max-height 0.25s ease-in;\n  transition: max-height 0.25s ease-in;\n}\n\n.item-list {\n  margin: 0 5px 5px;\n  border-radius: 10px;\n  padding-bottom: 5px;\n}\n\nion-list-header {\n  min-height: 25px;\n}\n\n.geolocation {\n  color: #2fff2f !important;\n}\n\n.no-geolocation {\n  color: var(--ion-color-danger) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL3BsYW5uaW5nL2NvbnRyYWN0LWRldGFpbC9jb250cmFjdC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BsYW5uaW5nL2NvbnRyYWN0LWRldGFpbC9jb250cmFjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7RUFDQSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURDRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0FDQUo7O0FESUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNESjs7QURHSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUNETjs7QURNSTtFQUNFLGFBQUE7QUNKTjs7QURRRTtFQUNFLGlCQUFBO0FDTko7O0FEUUk7RUFDRSxhQUFBO0FDTk47O0FEV0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FDUkY7O0FEV0E7RUFDRSxhQUFBO0VBQ0EsNkNBQUE7RUFBQSxxQ0FBQTtFQUNBLGdCQUFBO0FDUkY7O0FEV0E7RUFDRSx3QkFBQTtBQ1JGOztBRFVFO0VBQ0UsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDUko7O0FEVUk7RUFDRSxlQUFBO0FDUk47O0FEV0k7RUFDRSxTQUFBO0FDVE47O0FEY0E7RUFDRSxpQkFBQTtFQUNBLDRDQUFBO0VBQUEsb0NBQUE7QUNYRjs7QURjQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDWEY7O0FEYUU7RUFDRSxtQkFBQTtBQ1hKOztBRGFJO0VBQ0UsYUFBQTtBQ1hOOztBRGNJO0VBQ0Usb0RBQUE7QUNaTjs7QURpQkE7RUFDRSxlQUFBO0FDZEY7O0FEaUJBO0VBQ0UsYUFBQTtFQUNBLDZDQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNkRjs7QURpQkE7RUFDRSxpQkFBQTtFQUNBLDRDQUFBO0VBQUEsb0NBQUE7QUNkRjs7QURrQkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNmRjs7QURtQkE7RUFDRSxnQkFBQTtBQ2hCRjs7QURvQkE7RUFDRSx5QkFBQTtBQ2pCRjs7QURvQkE7RUFDRSx5Q0FBQTtBQ2pCRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGxhbm5pbmcvY29udHJhY3QtZGV0YWlsL2NvbnRyYWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFja2dyb3VuZC10YWJzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFja2dyb3VuZC10YWJzKTtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyNXB4IDAgMjVweDtcblxuICAuY2FyZC10ZXh0LW9uZSwgLmNhcmQtdGV4dC10d28ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuY2FyZC10ZXh0LXR3byB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cblxuLmNhcmQtdGV4dCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyNXB4IDAgMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5jYXJkLXRleHQtb25lLCAuY2FyZC10ZXh0LXR3byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBwOm50aC1jaGlsZCgxKSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1saWdodC1jYXJkLWhhcmQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gIH1cblxuICAuY2FyZC10ZXh0LW9uZSB7XG4gICAgcDpudGgtY2hpbGQoMSkge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIH1cblxuICAuY2FyZC10ZXh0LXR3byB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICBwOm50aC1jaGlsZCgxKSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZC1jb250cmF0byB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG4uc2Nyb2xsLWNhcmQge1xuICBtYXgtaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMTVzIGVhc2Utb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2Nyb2xsLWNhcmQtY3VzdG9tIHtcbiAgcGFkZGluZzogM3B4IDVweCAzcHggNXB4O1xuXG4gIC5jYXJkLXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlYXJjaGJhci1tZW51KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuXG4gICAgLmNhcmQtdGV4dC1vbmUge1xuICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG4uaGVhZGVyLWNvbnRlbnQuc2VsZWN0ZWQgLnNjcm9sbC1jYXJkIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbn1cblxuLmVzdGltYXRlcy1jYXJkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcbiAgLy9ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgZGl2IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDVweCAwO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgfVxuICB9XG59XG5cbi5mb250LTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjE1cyBlYXNlLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ncmFwaGljcy5zZWxlY3RlZCAjY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbn1cblxuXG4uaXRlbS1saXN0IHtcbiAgbWFyZ2luOiAwIDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC8vYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMilcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogMjVweDtcbn1cblxuXG4uZ2VvbG9jYXRpb24ge1xuICBjb2xvcjogIzJmZmYyZiAhaW1wb3J0YW50O1xufVxuXG4ubm8tZ2VvbG9jYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbn1cbiIsImlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLXRhYnMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLXRhYnMpO1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDI1cHggMCAyNXB4O1xufVxuLmNhcmQgLmNhcmQtdGV4dC1vbmUsIC5jYXJkIC5jYXJkLXRleHQtdHdvIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQgLmNhcmQtdGV4dC10d28ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyNXB4IDAgMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcmQtdGV4dCAuY2FyZC10ZXh0LW9uZSwgLmNhcmQtdGV4dCAuY2FyZC10ZXh0LXR3byB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZC10ZXh0IC5jYXJkLXRleHQtb25lIHA6bnRoLWNoaWxkKDEpLCAuY2FyZC10ZXh0IC5jYXJkLXRleHQtdHdvIHA6bnRoLWNoaWxkKDEpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtY2FyZC1oYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXJkLXRleHQgLmNhcmQtdGV4dC1vbmUgcDpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmNhcmQtdGV4dCAuY2FyZC10ZXh0LXR3byB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcmQtdGV4dCAuY2FyZC10ZXh0LXR3byBwOm50aC1jaGlsZCgxKSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jYXJkLWNvbnRyYXRvIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5zY3JvbGwtY2FyZCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xNXMgZWFzZS1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtY2FyZC1jdXN0b20ge1xuICBwYWRkaW5nOiAzcHggNXB4IDNweCA1cHg7XG59XG4uc2Nyb2xsLWNhcmQtY3VzdG9tIC5jYXJkLXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWFyY2hiYXItbWVudSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnNjcm9sbC1jYXJkLWN1c3RvbSAuY2FyZC10ZXh0IC5jYXJkLXRleHQtb25lIHtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuLnNjcm9sbC1jYXJkLWN1c3RvbSAuY2FyZC10ZXh0IHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5oZWFkZXItY29udGVudC5zZWxlY3RlZCAuc2Nyb2xsLWNhcmQge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xufVxuXG4uZXN0aW1hdGVzLWNhcmQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xufVxuLmVzdGltYXRlcy1jYXJkIGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG4uZXN0aW1hdGVzLWNhcmQgZGl2IHAge1xuICBtYXJnaW46IDVweCAwO1xufVxuLmVzdGltYXRlcy1jYXJkIGRpdjpudGgtY2hpbGQoMSkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuXG4uZm9udC0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuI2NvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xNXMgZWFzZS1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZ3JhcGhpY3Muc2VsZWN0ZWQgI2NvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG59XG5cbi5pdGVtLWxpc3Qge1xuICBtYXJnaW46IDAgNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogMjVweDtcbn1cblxuLmdlb2xvY2F0aW9uIHtcbiAgY29sb3I6ICMyZmZmMmYgIWltcG9ydGFudDtcbn1cblxuLm5vLWdlb2xvY2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/planning/contract-detail/contract-detail.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/planning/contract-detail/contract-detail.page.ts ***!
    \**************************************************************************/

  /*! exports provided: ContractDetailPage */

  /***/
  function srcAppModulesPlanningContractDetailContractDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContractDetailPage", function () {
      return ContractDetailPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/contract-detail/contract-detail.service */
    "./src/app/modules/planning/services/contract-detail/contract-detail.service.ts");
    /* harmony import */


    var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/sync/sync.service */
    "./src/app/shared/services/sync/sync.service.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/services/geolocation/geolocation.service */
    "./src/app/shared/services/geolocation/geolocation.service.ts");
    /* harmony import */


    var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/services/user/user.service */
    "./src/app/shared/services/user/user.service.ts");
    /* harmony import */


    var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/services/alert/alert.service */
    "./src/app/shared/services/alert/alert.service.ts");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var ContractDetailPage =
    /*#__PURE__*/
    function () {
      function ContractDetailPage(route, contractDetailService, syncService, httpService, router, loaderService, geolocationService, userService, toastService, alertService, storeService) {
        var _this = this;

        _classCallCheck(this, ContractDetailPage);

        this.route = route;
        this.contractDetailService = contractDetailService;
        this.syncService = syncService;
        this.httpService = httpService;
        this.router = router;
        this.loaderService = loaderService;
        this.geolocationService = geolocationService;
        this.userService = userService;
        this.toastService = toastService;
        this.alertService = alertService;
        this.storeService = storeService;
        this.openSelected = false;
        this.geolocationClass = false;
        this.costCenterListItem = null;
        this.costCenter = null;
        this.productionContracts = [];
        this.harvestEstimate = [];
        this.qualityEstimate = [];
        this.notes = [];
        this.units = [];
        /**
         * getTotal
         */

        this.getTotal = function () {
          return _this.productionContracts.reduce(function (accumulator, contract) {
            return accumulator + contract.totalQuantity;
          }, 0);
        };
        /**
         * showUnitName
         */


        this.showUnitName = function () {
          if (_this.costCenter) {
            var find = _this.units.find(function (item) {
              return item.id === _this.costCenter.controlUnit;
            });

            return find ? find.code : 'N/A';
          }

          return 'N/A';
        };
        /**
         * getItemDetails
         * @param id
         */


        this.getItemDetails = function (quality) {
          if (quality) {
            return _this.qualityEstimateDetail.filter(function (item) {
              return item.qualityEstimate === quality.id;
            });
          }

          return [];
        };
        /**
         * goToList
         * @param note
         */


        this.noteListPage = function () {
          var note = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          _this.router.navigate(['/home-page/notes']);
        };
        /**
         * harvestPage
         * @param item
         */


        this.harvestPage = function (item) {
          _this.router.navigate(['/home-page/harvest-estimate']);
        };
        /**
         * qualityPage
         * @param item
         */


        this.qualityPage = function (item) {
          _this.router.navigate(['/home-page/quality-estimate']);
        };
        /**
         * @description actualizacion de la geolocation al centro de costo
         */


        this.myGeolocation = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var alert, user, object;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertService.confirmAlert('Desea actualizar la ubicacion del CC de costo con su ubicacion actual?');

                  case 2:
                    alert = _context.sent;

                    if (alert) {
                      _context.next = 5;
                      break;
                    }

                    return _context.abrupt("return");

                  case 5:
                    user = this.storeService.getUser();
                    object = {
                      lat: this.lat,
                      lng: this.lng,
                      id_user: user.id,
                      id_cost_center: this.costCenter.id
                    };
                    this.updateGeolocation(object);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        };
        /**
         * @description actualizar localizacion
         * @param data
         */


        this.updateGeolocation = function (data) {
          _this.geolocationClass = true;

          _this.loaderService.startLoader('Actualizando posicion');

          _this.contractDetailService.updateGeolocationCostCenter(data).subscribe(function () {
            _this.geolocationClass = false;

            _this.syncData();

            _this.loaderService.stopLoader();

            _this.toastService.successToast('posicion actualizada.');
          }, function (error) {
            _this.geolocationClass = false;

            _this.loaderService.stopLoader();

            _this.toastService.errorToast('No se ha cambiado la localización');

            _this.httpService.errorHandler(error);
          });
        };
        /**
         * loadUnits
         */


        this.loadUnits = function () {
          _this.units = _this.storeService.getUnits();
        };
        /**
         * loadContractDetail
         * @param id
         */


        this.loadContractDetail = function (id) {
          _this.loaderService.startLoader();

          _this.contractDetailService.getCostCenterDetail(id).subscribe(function (success) {
            _this.storeService.setContractData(success.data);

            _this.loaderService.stopLoader();
          }, function (error) {
            _this.loaderService.stopLoader();
          });
        };
        /**
         * syncData
         * @param username
         */


        this.syncData = function () {
          var user = _this.storeService.getUser();

          var activeConnection = _this.storeService.getActiveConnection();

          var username = user.username;

          _this.syncService.syncData(username, activeConnection.superuser ? 1 : 0).subscribe(function (success) {
            _this.storeService.setSyncedData(success.data);
          }, function (error) {
            _this.httpService.errorHandler(error);
          });
        };
      }

      _createClass(ContractDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.loadUnits();
          this.costCenterListItem = this.storeService.getActiveCostCenter();
          var id = this.route.snapshot.paramMap.get('id');

          if (id) {
            this.loadContractDetail(id);
          }

          this.geolocationService$ = this.geolocationService.getCurrentPosition().subscribe(function (data) {
            _this2.lat = data.lat;
            _this2.lng = data.lng;
          });
          this.store$ = this.storeService.stateChanged.subscribe(function (data) {
            var contract = data.contract;
            _this2.costCenter = contract.costCenter;
            _this2.productionContracts = _toConsumableArray(contract.productionContracts);
            _this2.harvestEstimate = _toConsumableArray(contract.harvestEstimate);
            _this2.qualityEstimate = _toConsumableArray(contract.qualityEstimate);
            _this2.qualityEstimateDetail = _toConsumableArray(contract.qualityEstimateDetail);
            _this2.notes = _toConsumableArray(contract.notes);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.geolocationService$.unsubscribe();
          this.store$.unsubscribe();
        }
      }]);

      return ContractDetailPage;
    }();

    ContractDetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_3__["ContractDetailService"]
      }, {
        type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_7__["GeolocationService"]
      }, {
        type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
      }, {
        type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
      }, {
        type: _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"]
      }];
    };

    ContractDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contract-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contract-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/contract-detail/contract-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contract-detail.page.scss */
      "./src/app/modules/planning/contract-detail/contract-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_3__["ContractDetailService"], _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"], _shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_7__["GeolocationService"], _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"], _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"]])], ContractDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=modules-planning-contract-detail-contract-detail-module-es5.js.map