function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-contract-detail-contract-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/contract-detail/contract-detail.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/contract-detail/contract-detail.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagePlanningContractDetailContractDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <strong>Detalle Centro de Costo</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div (click)=\"openSelected = !openSelected\" [class.selected]=\"openSelected\" class=\"header-content background-color--header\">\r\n  <ng-container *ngIf=\"costCenterListItem\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <div class=\"white\">{{ costCenterListItem.code }}</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ng-container *ngIf=\"costCenter\">\r\n          <ion-button (click)=\"myGeolocation()\" fill=\"clear\" size=\"small\">\r\n            <ion-icon [ngClass]=\"{ 'geolocation': costCenter.latitude && costCenter.longitude, 'no-geolocation': !costCenter.latitude || !costCenter.longitude }\" name=\"globe\" slot=\"icon-only\" style=\"color:white;\"></ion-icon>\r\n          </ion-button>\r\n        </ng-container>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row\">\r\n      <ion-col size=\"12\" style=\"padding-bottom: 0;\">\r\n        <div class=\"white\" style=\"font-weight: bold;font-size: 20px;padding-left: 1rem;\">{{ costCenterListItem.name }}</div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" style=\"padding-top: 0;\">\r\n        <div class=\"white\" style=\"font-size: 14px;padding-left: 1rem;\">{{ costCenterListItem.producerName }}</div>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <div class=\"white\">{{ costCenterListItem.speciesName }} / {{ costCenterListItem.varietyName }}</div>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <div class=\"white\">Fecha Cosecha: {{ costCenterListItem.harvestDate | customDate }}</div>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"costCenterListItem.contractResponsible\" size=\"12\">\r\n        <div class=\"white\">Numero de Contratos: {{ costCenterListItem.contractsNumber }}</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container>\r\n\r\n  <ng-container *ngFor=\"let contract of productionContracts; let index = index\">\r\n    <div [class.scroll-card-custom]=\"openSelected\" class=\"scroll-card\">\r\n      <ng-container>\r\n        <div class=\"card-text\">\r\n          <div class=\"card-text-one\">\r\n            <p>{{ contract.totalQuantity }} {{ showUnitName() | uppercase }}</p>\r\n            <p># {{ contract.documentNumber }}</p>\r\n            <p>{{ contract.date| customDate }}</p>\r\n            <p>{{ contract.responsibleName }}</p>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n\r\n<!--  header-->\r\n<ion-content>\r\n\r\n  <!--  estimaciones-->\r\n  <div class=\"estimates-card\">\r\n    <div>\r\n      <p>{{ showUnitName() | uppercase }} CONTRATADOS</p>\r\n      <p>\r\n        <ion-icon color=\"danger\" name=\"arrow-round-up\"></ion-icon>&nbsp;\r\n        <span>{{ getTotal() | number:'1.0-0':'es-CL' }}</span>\r\n      </p>\r\n    </div>\r\n    <div>\r\n      <p>{{ showUnitName() | uppercase }} RECIBIDOS</p>\r\n      <p>\r\n        <ion-icon color=\"primary\" name=\"arrow-round-down\"></ion-icon>&nbsp;<span>3.200</span></p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- ESTIMACION DE COSECHA -->\r\n  <ion-list class=\"item-list\">\r\n    <ion-list-header>\r\n      <ion-label>ESTIMACION DE COSECHA</ion-label>\r\n    </ion-list-header>\r\n    <ng-container *ngIf=\"harvestEstimate; else emptyHarvest\">\r\n      <app-harvest-estimate-item\r\n        (harvestSelected)=\"harvestPage($event)\"\r\n        [item]=\"harvestEstimate[0]\"\r\n        [units]=\"units\">\r\n      </app-harvest-estimate-item>\r\n    </ng-container>\r\n    <ng-template #emptyHarvest>\r\n      <app-harvest-estimate-item (harvestSelected)=\"harvestPage($event)\"></app-harvest-estimate-item>\r\n    </ng-template>\r\n  </ion-list>\r\n\r\n  <!-- ESTIMACION DE CALIDAD -->\r\n  <ion-list class=\"item-list\">\r\n    <ion-list-header>\r\n      <ion-label>ESTIMACION DE CALIDAD</ion-label>\r\n    </ion-list-header>\r\n    <ng-container *ngIf=\"qualityEstimate; else emptyQuality\">\r\n      <app-quality-estimate-item\r\n        (itemSelected)=\"qualityPage($event)\"\r\n        [costCenter]=\"costCenter\"\r\n        [details]=\"getItemDetails(qualityEstimate[0])\"\r\n        [item]=\"qualityEstimate[0]\">\r\n      </app-quality-estimate-item>\r\n    </ng-container>\r\n    <ng-template #emptyQuality>\r\n      <app-quality-estimate-item (itemSelected)=\"qualityPage($event)\"></app-quality-estimate-item>\r\n    </ng-template>\r\n  </ion-list>\r\n\r\n  <!--  NOTAS-->\r\n  <ion-list class=\"item-list\">\r\n    <ion-list-header>\r\n      <ion-label>NOTA</ion-label>\r\n    </ion-list-header>\r\n    <ng-container *ngIf=\"notes; else emptyNote\">\r\n      <app-note-item (noteClicked)=\"noteListPage($event)\" [item]=\"notes[0]\"></app-note-item>\r\n    </ng-container>\r\n    <ng-template #emptyNote>\r\n      <app-note-item (noteClicked)=\"noteListPage($event)\"></app-note-item>\r\n    </ng-template>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/home-page/planning/contract-detail/contract-detail.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/home-page/planning/contract-detail/contract-detail.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ContractDetailPageModule */

  /***/
  function srcAppHomePagePlanningContractDetailContractDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/home-page/planning/contract-detail/contract-detail.page.ts");
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
  "./src/app/home-page/planning/contract-detail/contract-detail.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/home-page/planning/contract-detail/contract-detail.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagePlanningContractDetailContractDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-back-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-content {\n  --background: var(--color-background-tabs);\n  background: var(--color-background-tabs);\n}\n\n.white {\n  color: white;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.card {\n  display: table;\n  width: 100%;\n  padding: 0 25px 0 25px;\n}\n\n.card .card-text-one, .card .card-text-two {\n  width: 50%;\n  display: table-cell;\n  color: white;\n}\n\n.card .card-text-two {\n  text-align: right;\n}\n\n.card-text {\n  display: table;\n  width: 100%;\n  padding: 0 25px 0 25px;\n  position: relative;\n}\n\n.card-text .card-text-one, .card-text .card-text-two {\n  width: 100%;\n  display: table-cell;\n  color: white;\n}\n\n.card-text .card-text-one p:nth-child(1), .card-text .card-text-two p:nth-child(1) {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: 15px !important;\n  margin-right: 15px;\n  padding: 10px;\n  background: var(--color-light-card-hard);\n  border-radius: 20px;\n}\n\n.card-text .card-text-one p:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-text .card-text-two {\n  text-align: right;\n}\n\n.card-text .card-text-two p:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-contrato {\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: underline;\n  margin-bottom: -1px;\n}\n\n.scroll-card {\n  max-height: 0;\n  -webkit-transition: max-height 0.15s ease-out;\n  transition: max-height 0.15s ease-out;\n  overflow: hidden;\n}\n\n.scroll-card-custom {\n  padding: 3px 5px 3px 5px;\n}\n\n.scroll-card-custom .card-text {\n  background-color: var(--color-searchbar-menu);\n  border-radius: 10px;\n  border: none !important;\n}\n\n.scroll-card-custom .card-text .card-text-one {\n  padding: 12px 0;\n}\n\n.scroll-card-custom .card-text p {\n  margin: 0;\n}\n\n.header-content.selected .scroll-card {\n  max-height: 500px;\n  -webkit-transition: max-height 0.25s ease-in;\n  transition: max-height 0.25s ease-in;\n}\n\n.estimates-card {\n  display: table;\n  width: 100%;\n  text-align: center;\n  background: white;\n  padding: 10px 0;\n  margin-bottom: 5px;\n  border-radius: 0 0 12px 12px;\n}\n\n.estimates-card div {\n  display: table-cell;\n}\n\n.estimates-card div p {\n  margin: 5px 0;\n}\n\n.estimates-card div:nth-child(1) {\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n\n.font-10 {\n  font-size: 10px;\n}\n\n#container {\n  max-height: 0;\n  -webkit-transition: max-height 0.15s ease-out;\n  transition: max-height 0.15s ease-out;\n  overflow: hidden;\n  display: block;\n}\n\n.graphics.selected #container {\n  max-height: 500px;\n  -webkit-transition: max-height 0.25s ease-in;\n  transition: max-height 0.25s ease-in;\n}\n\n.item-list {\n  margin: 0 5px 5px;\n  border-radius: 10px;\n  padding-bottom: 5px;\n}\n\nion-list-header {\n  min-height: 25px;\n}\n\n.geolocation {\n  color: #2fff2f !important;\n}\n\n.no-geolocation {\n  color: var(--ion-color-danger) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL2NvbnRyYWN0LWRldGFpbC9EOlxcbnBtXFxmeDExX21vYmlsZS9zcmNcXGFwcFxcaG9tZS1wYWdlXFxwbGFubmluZ1xcY29udHJhY3QtZGV0YWlsXFxjb250cmFjdC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvY29udHJhY3QtZGV0YWlsL2NvbnRyYWN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtFQUNBLHdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNBSjs7QURJQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQ0ROOztBRE1JO0VBQ0UsYUFBQTtBQ0pOOztBRFFFO0VBQ0UsaUJBQUE7QUNOSjs7QURRSTtFQUNFLGFBQUE7QUNOTjs7QURXQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNSRjs7QURXQTtFQUNFLGFBQUE7RUFDQSw2Q0FBQTtFQUFBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNSRjs7QURXQTtFQUNFLHdCQUFBO0FDUkY7O0FEVUU7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNSSjs7QURVSTtFQUNFLGVBQUE7QUNSTjs7QURXSTtFQUNFLFNBQUE7QUNUTjs7QURjQTtFQUNFLGlCQUFBO0VBQ0EsNENBQUE7RUFBQSxvQ0FBQTtBQ1hGOztBRGNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNYRjs7QURhRTtFQUNFLG1CQUFBO0FDWEo7O0FEYUk7RUFDRSxhQUFBO0FDWE47O0FEY0k7RUFDRSxvREFBQTtBQ1pOOztBRGlCQTtFQUNFLGVBQUE7QUNkRjs7QURpQkE7RUFDRSxhQUFBO0VBQ0EsNkNBQUE7RUFBQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2RGOztBRGlCQTtFQUNFLGlCQUFBO0VBQ0EsNENBQUE7RUFBQSxvQ0FBQTtBQ2RGOztBRGtCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ2ZGOztBRG1CQTtFQUNFLGdCQUFBO0FDaEJGOztBRG9CQTtFQUNFLHlCQUFBO0FDakJGOztBRG9CQTtFQUNFLHlDQUFBO0FDakJGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL2NvbnRyYWN0LWRldGFpbC9jb250cmFjdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhY2stYnV0dG9uIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJhY2tncm91bmQtdGFicyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFja2dyb3VuZC10YWJzKTtcclxufVxyXG5cclxuLndoaXRlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgcGFkZGluZy1yaWdodDogMWVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAyNXB4IDAgMjVweDtcclxuXHJcbiAgLmNhcmQtdGV4dC1vbmUsIC5jYXJkLXRleHQtdHdvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtdGV4dC10d28ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDI1cHggMCAyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmNhcmQtdGV4dC1vbmUsIC5jYXJkLXRleHQtdHdvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxpZ2h0LWNhcmQtaGFyZCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZC10ZXh0LW9uZSB7XHJcbiAgICBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZC10ZXh0LXR3byB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1jb250cmF0byB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbn1cclxuXHJcbi5zY3JvbGwtY2FyZCB7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMTVzIGVhc2Utb3V0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zY3JvbGwtY2FyZC1jdXN0b20ge1xyXG4gIHBhZGRpbmc6IDNweCA1cHggM3B4IDVweDtcclxuXHJcbiAgLmNhcmQtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWFyY2hiYXItbWVudSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmNhcmQtdGV4dC1vbmUge1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudC5zZWxlY3RlZCAuc2Nyb2xsLWNhcmQge1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxufVxyXG5cclxuLmVzdGltYXRlcy1jYXJkIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xyXG4gIC8vYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgZGl2IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvbnQtMTAge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMTVzIGVhc2Utb3V0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ncmFwaGljcy5zZWxlY3RlZCAjY29udGFpbmVyIHtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbn1cclxuXHJcblxyXG4uaXRlbS1saXN0IHtcclxuICBtYXJnaW46IDAgNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgLy9ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKVxyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcblxyXG4uZ2VvbG9jYXRpb24ge1xyXG4gIGNvbG9yOiAjMmZmZjJmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1nZW9sb2NhdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiaW9uLWJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJhY2tncm91bmQtdGFicyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJhY2tncm91bmQtdGFicyk7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjVweCAwIDI1cHg7XG59XG4uY2FyZCAuY2FyZC10ZXh0LW9uZSwgLmNhcmQgLmNhcmQtdGV4dC10d28ge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZCAuY2FyZC10ZXh0LXR3byB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDI1cHggMCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZC10ZXh0IC5jYXJkLXRleHQtb25lLCAuY2FyZC10ZXh0IC5jYXJkLXRleHQtdHdvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYXJkLXRleHQgLmNhcmQtdGV4dC1vbmUgcDpudGgtY2hpbGQoMSksIC5jYXJkLXRleHQgLmNhcmQtdGV4dC10d28gcDpudGgtY2hpbGQoMSkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1saWdodC1jYXJkLWhhcmQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNhcmQtdGV4dCAuY2FyZC10ZXh0LW9uZSBwOm50aC1jaGlsZCgxKSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY2FyZC10ZXh0IC5jYXJkLXRleHQtdHdvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2FyZC10ZXh0IC5jYXJkLXRleHQtdHdvIHA6bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmNhcmQtY29udHJhdG8ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLnNjcm9sbC1jYXJkIHtcbiAgbWF4LWhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjE1cyBlYXNlLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNjcm9sbC1jYXJkLWN1c3RvbSB7XG4gIHBhZGRpbmc6IDNweCA1cHggM3B4IDVweDtcbn1cbi5zY3JvbGwtY2FyZC1jdXN0b20gLmNhcmQtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlYXJjaGJhci1tZW51KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4uc2Nyb2xsLWNhcmQtY3VzdG9tIC5jYXJkLXRleHQgLmNhcmQtdGV4dC1vbmUge1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG4uc2Nyb2xsLWNhcmQtY3VzdG9tIC5jYXJkLXRleHQgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhlYWRlci1jb250ZW50LnNlbGVjdGVkIC5zY3JvbGwtY2FyZCB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG59XG5cbi5lc3RpbWF0ZXMtY2FyZCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XG59XG4uZXN0aW1hdGVzLWNhcmQgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cbi5lc3RpbWF0ZXMtY2FyZCBkaXYgcCB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4uZXN0aW1hdGVzLWNhcmQgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbi5mb250LTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjE1cyBlYXNlLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ncmFwaGljcy5zZWxlY3RlZCAjY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbn1cblxuLml0ZW0tbGlzdCB7XG4gIG1hcmdpbjogMCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBtaW4taGVpZ2h0OiAyNXB4O1xufVxuXG4uZ2VvbG9jYXRpb24ge1xuICBjb2xvcjogIzJmZmYyZiAhaW1wb3J0YW50O1xufVxuXG4ubm8tZ2VvbG9jYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/planning/contract-detail/contract-detail.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/home-page/planning/contract-detail/contract-detail.page.ts ***!
    \****************************************************************************/

  /*! exports provided: ContractDetailPage */

  /***/
  function srcAppHomePagePlanningContractDetailContractDetailPageTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts");
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/contract-detail/contract-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contract-detail.page.scss */
      "./src/app/home-page/planning/contract-detail/contract-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_3__["ContractDetailService"], _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"], _shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_7__["GeolocationService"], _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"], _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"]])], ContractDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=planning-contract-detail-contract-detail-module-es5.js.map