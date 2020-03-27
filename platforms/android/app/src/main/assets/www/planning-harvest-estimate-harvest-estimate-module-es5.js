function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-harvest-estimate-harvest-estimate-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagePlanningHarvestEstimateHarvestEstimateFormHarvestEstimateFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\" color=\"secondary\">\r\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\" style=\"color:white;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title> {{ harvestEstimate ? 'Ver' : 'Registrar'  }}  Estimacion</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"harvestForm\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">\r\n        Cantidad {{ showUnitName() | uppercase }}\r\n      </ion-label>\r\n      <ion-input [value]=\"harvestForm.get('quantity') .value | mask: 'separator'\" clearInput formControlName=\"quantity\" placeholder=\"Ingresar Cantidad\" type=\"tel\"></ion-input>\r\n      <ng-container *ngIf=\"harvestForm.get('quantity').dirty\">\r\n        <span *ngIf=\"harvestForm.get('quantity').hasError('required')\" class=\"errorMsg\">Ingrese Cantidad</span>\r\n        <span *ngIf=\"harvestForm.get('quantity').hasError('pattern')\" class=\"errorMsg\">Solo numeros</span>\r\n      </ng-container>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">\r\n        Cantidad Diaria {{ showUnitName() | uppercase }}\r\n      </ion-label>\r\n      <ion-input [value]=\"harvestForm.get('dailyAmount') .value | mask: 'separator'\" clearInput formControlName=\"dailyAmount\" placeholder=\"Ingresar Cantidad Diaria\" type=\"tel\"></ion-input>\r\n      <ng-container *ngIf=\"harvestForm.get('dailyAmount').dirty\">\r\n        <span *ngIf=\"harvestForm.get('dailyAmount').hasError('required')\" class=\"errorMsg\">Ingrese cantidad diaria</span>\r\n        <span *ngIf=\"harvestForm.get('quantity').hasError('pattern')\" class=\"errorMsg\">Solo numeros</span>\r\n      </ng-container>\r\n    </ion-item>\r\n\r\n    <ion-list>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>Trabaja Festivos ?</ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-item>\r\n          <ion-label>Si</ion-label>\r\n          <ion-radio (ionSelect)=\"workHolidaysEvent($event.detail.value)\" [checked]=\"harvestForm.get('workHolidays').value === 1\" [disabled]=\"isView\" slot=\"start\" value=\"1\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>No</ion-label>\r\n          <ion-radio (ionSelect)=\"workHolidaysEvent($event.detail.value)\" [checked]=\"harvestForm.get('workHolidays').value === 0\" [disabled]=\"isView\" slot=\"start\" value=\"0\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ng-container *ngIf=\"harvestForm.get('workHolidays').dirty && harvestForm.get('workHolidays').hasError('required')\">\r\n          <span class=\"errorMsg\">Indique si trabaja los feriados.</span>\r\n        </ng-container>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Fecha Inicio</ion-label>\r\n      <ion-datetime [displayFormat]=\"dateFormat\" [max]=\"maxDate\" [pickerFormat]=\"dateFormat\" formControlName=\"startDate\" placeholder=\"Ingresar Fecha Inicio\"></ion-datetime>\r\n      <ng-container *ngIf=\"harvestForm.get('startDate').dirty && harvestForm.get('startDate').hasError('required')\">\r\n        <span class=\"errorMsg\">Ingrese fecha inicio</span>\r\n      </ng-container>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Fecha Fin</ion-label>\r\n      <ion-input [value]=\" harvestForm.get('endDate').value\" disabled=\"true\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">Plantas de Proceso</ion-label>\r\n      <ion-select [interfaceOptions]=\"processPlantAction\" [selectedText]=\"getSelectedProcessPlant()\" cancelText=\"Cancelar\" formControlName=\"processPlant\" interface=\"action-sheet\">\r\n        <ion-select-option *ngFor=\"let plant of processPlants\" [value]=\"plant.id\">\r\n          {{ plant.name }}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">Destino</ion-label>\r\n      <ion-select [interfaceOptions]=\"destinationAction\" [selectedText]=\"getSelectedDestination()\" cancelText=\"Cancelar\" formControlName=\"destination\" interface=\"action-sheet\">\r\n        <ion-select-option *ngFor=\"let destination of destinations\" [value]=\"destination.id\">\r\n          {{ destination.name }}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <br><br>\r\n    <ng-container *ngIf=\"!harvestEstimate\">\r\n      <ion-button (click)=\"submit()\" [disabled]=\"harvestForm.invalid || isSaving\" color=\"primary\" expand=\"block\">\r\n        Guardar\r\n      </ion-button>\r\n    </ng-container>\r\n\r\n  </form>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/harvest-estimate/harvest-estimate.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/harvest-estimate/harvest-estimate.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagePlanningHarvestEstimateHarvestEstimatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"white\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"white\">\r\n      <strong>Estimación de Cosecha</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-searchbar placeholder=\"Buscar...\" (ionChange)=\"searchHarvest($event.target.value)\" (ionClear)=\"cancelSearch()\" animated class=\"production\" showCancelButton=\"never\"></ion-searchbar>\r\n\r\n<ion-content class=\"content\">\r\n\r\n  <ng-container *ngFor=\"let harvest of filteredHarvestEstimate ; let index =index\">\r\n    <div class=\"card-sli\">\r\n      <div class=\"card-sli-back\">\r\n        <app-harvest-estimate-item\r\n          (deleteHarvest)=\"deleteHarvest($event)\"\r\n          (harvestSelected)=\"viewHarvest($event)\"\r\n          [isOld]=\"index > 0\"\r\n          [item]=\"harvest\"\r\n          [slideDisabled]=\"false\">\r\n        </app-harvest-estimate-item>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"checkButton()\">\r\n    <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\r\n      <ion-fab-button (click)=\"openForm()\" [disabled]=\"!costCenter || !isOnline\" color=\"warning\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </ng-container>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/home-page/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.scss":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/home-page/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.scss ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagePlanningHarvestEstimateHarvestEstimateFormHarvestEstimateFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".errorMsg {\n  color: red;\n}\n\nion-item ion-label {\n  min-width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL2hhcnZlc3QtZXN0aW1hdGUvaGFydmVzdC1lc3RpbWF0ZS1mb3JtL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxob21lLXBhZ2VcXHBsYW5uaW5nXFxoYXJ2ZXN0LWVzdGltYXRlXFxoYXJ2ZXN0LWVzdGltYXRlLWZvcm1cXGhhcnZlc3QtZXN0aW1hdGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL2hhcnZlc3QtZXN0aW1hdGUvaGFydmVzdC1lc3RpbWF0ZS1mb3JtL2hhcnZlc3QtZXN0aW1hdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURHRTtFQUNFLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9wbGFubmluZy9oYXJ2ZXN0LWVzdGltYXRlL2hhcnZlc3QtZXN0aW1hdGUtZm9ybS9oYXJ2ZXN0LWVzdGltYXRlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3JNc2cge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICBpb24tbGFiZWwge1xyXG4gICAgbWluLXdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcbiIsIi5lcnJvck1zZyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1pbi13aWR0aDogNTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home-page/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/home-page/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: HarvestEstimateFormComponent */

  /***/
  function srcAppHomePagePlanningHarvestEstimateHarvestEstimateFormHarvestEstimateFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HarvestEstimateFormComponent", function () {
      return HarvestEstimateFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/sync/sync.service */
    "./src/app/shared/services/sync/sync.service.ts");
    /* harmony import */


    var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/contract-detail/contract-detail.service */
    "./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var HarvestEstimateFormComponent =
    /*#__PURE__*/
    function () {
      function HarvestEstimateFormComponent(modalController, formBuilder, syncService, contractDetailService, authService, toastService, httpService, loaderService, storeService) {
        var _this = this;

        _classCallCheck(this, HarvestEstimateFormComponent);

        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.syncService = syncService;
        this.contractDetailService = contractDetailService;
        this.authService = authService;
        this.toastService = toastService;
        this.httpService = httpService;
        this.loaderService = loaderService;
        this.storeService = storeService;
        this.processPlantAction = {
          header: 'Plantas de Proceso',
          keyboardClose: false,
          backdropDismiss: false
        };
        this.destinationAction = {
          header: 'Destinos',
          keyboardClose: false,
          backdropDismiss: false
        };
        this.dateFormat = 'DD/MM/YYYY';
        this.maxDate = '2030';
        this.units = [];
        this.processPlants = [];
        this.destinations = [];
        this.isSaving = false;
        this.holidays = [];
        /**
         * closeModal
         */

        this.closeModal = function () {
          var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          _this.modalController.dismiss(status);
        };
        /**
         * submit
         */


        this.submit = function () {
          if (_this.harvestForm.valid && !_this.isSaving) {
            _this.isSaving = true;
            var estimation = Object.assign({}, _this.harvestForm.value);
            estimation.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(estimation.endDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
            estimation.quantity = _this.cleanParseNumber(estimation.quantity);
            estimation.dailyAmount = _this.cleanParseNumber(estimation.dailyAmount);
            delete _this.costCenter.active;
            var data = {
              costCenter: _this.costCenter,
              harvestEstimate: estimation
            };

            _this.storeEstimation(data);
          } else {
            _this.isSaving = false;
          }
        };
        /**
         * showUnitName
         */


        this.showUnitName = function () {
          var find = _this.units.find(function (item) {
            return item.id === _this.costCenter.controlUnit;
          });

          return find ? find.code : 'N/A';
        };
        /**
         * workHolidaysEvent
         * @param event
         */


        this.workHolidaysEvent = function (value) {
          _this.harvestForm.patchValue({
            workHolidays: parseInt(value, 10)
          });

          _this.harvestForm.updateValueAndValidity();
        };
        /**
         * getSelectedProcessPlant
         */


        this.getSelectedProcessPlant = function () {
          if (_this.processPlants) {
            var id = _this.harvestForm.get('processPlant').value;

            var find = _this.processPlants.find(function (item) {
              return item.id === id;
            });

            return find ? find.name : '';
          }

          return '';
        };
        /**
         * getSelectedDestination
         */


        this.getSelectedDestination = function () {
          if (_this.destinations) {
            var id = _this.harvestForm.get('destination').value;

            var find = _this.destinations.find(function (item) {
              return item['id'] === id;
            });

            return find ? find['name'] : '';
          }

          return '';
        };
        /**
         * loadData
         */


        this.loadData = function () {
          _this.units = _this.storeService.getUnits();
          _this.processPlants = _this.storeService.getProcessPlants();
          _this.destinations = _this.storeService.getDestinations();

          _this.preSelectProcessPlant();

          _this.preSelectDestination();
        };
        /**
         * storeEstimation
         * @param data
         */


        this.storeEstimation = function (data) {
          _this.loaderService.startLoader('Guardando estimacion...');

          _this.contractDetailService.storeHarvest(data).subscribe(function (success) {
            _this.loaderService.stopLoader();

            _this.isSaving = false;

            _this.closeModal(true);
          }, function (error) {
            _this.loaderService.stopLoader();

            _this.isSaving = false;

            _this.httpService.errorHandler(error);
          });
        };
        /**
         * calculateEndDate
         */


        this.calculateEndDate = function () {
          var _this$harvestForm$val = _this.harvestForm.value,
              quantity = _this$harvestForm$val.quantity,
              dailyAmount = _this$harvestForm$val.dailyAmount,
              workHolidays = _this$harvestForm$val.workHolidays,
              startDate = _this$harvestForm$val.startDate;

          if (quantity && dailyAmount) {
            var days = Math.ceil((_this.cleanParseNumber(quantity) > 0 ? _this.cleanParseNumber(quantity) : 1) / (_this.cleanParseNumber(dailyAmount) > 0 ? _this.cleanParseNumber(dailyAmount) : 1));
            var holidays = [];
            var daysAdded = 1;
            var momentDate = moment__WEBPACK_IMPORTED_MODULE_6__["utc"](startDate);

            if (workHolidays === 0) {
              _this.holidays.forEach(function (holiday) {
                holidays.push(moment__WEBPACK_IMPORTED_MODULE_6__["utc"](holiday.fecha).format(_this.dateFormat));
              });
            }

            momentDate = _this.computeEndDate(days, daysAdded, momentDate, holidays);

            _this.harvestForm.patchValue({
              endDate: momentDate.format(_this.dateFormat)
            });

            _this.harvestForm.updateValueAndValidity();
          }
        };
        /**
         * cleanDate
         * @param date
         */


        this.cleanDate = function (date) {
          if (date.includes('T')) {
            return date.split('T')[0];
          }

          return date;
        };
        /**
         * computeEndDate
         * @param workingDays
         * @param daysAdded
         * @param momentDate
         */


        this.computeEndDate = function () {
          var workingDays = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var daysAdded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var momentDate = arguments.length > 2 ? arguments[2] : undefined;
          var holidays = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

          if (workingDays > daysAdded && daysAdded < 60) {
            if (momentDate.weekday() > 0 && !holidays.includes(momentDate.format(_this.dateFormat))) {
              daysAdded++;
            }

            momentDate = momentDate.add(1, 'days');
            return _this.computeEndDate(workingDays, daysAdded, momentDate, holidays);
          }

          return momentDate;
        };
        /**
         * cleanParseNumber
         * @param value
         */


        this.cleanParseNumber = function (value) {
          return parseInt(String(value).replace('.', ''), 10);
        };
        /**
         * preSelectProcessPlant
         */


        this.preSelectProcessPlant = function () {
          if (_this.processPlants.length === 1) {
            _this.harvestForm.patchValue({
              processPlant: _this.processPlants[0].id
            });

            _this.harvestForm.updateValueAndValidity();
          }
        };
        /**
         * preSelectDestination
         */


        this.preSelectDestination = function () {
          if (_this.destinations.length === 1) {
            _this.harvestForm.patchValue({
              destination: _this.destinations[0].id
            });

            _this.harvestForm.updateValueAndValidity();
          }
        };
      }

      _createClass(HarvestEstimateFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.holidays = this.storeService.getHolidays();
          this.userCompany = this.storeService.getActiveCompany();

          if (this.isView) {
            this.harvestForm = this.formBuilder.group({
              id: [this.harvestEstimate.id],
              costCenter: [this.costCenter.id],
              user: [this.userCompany.user],
              unit: [this.costCenter.controlUnit],
              quantity: [{
                value: this.harvestEstimate.quantity,
                disabled: true
              }],
              dailyAmount: [{
                value: this.harvestEstimate.dailyAmount,
                disabled: true
              }],
              workHolidays: [{
                value: this.harvestEstimate.workHolidays ? 1 : 0,
                disabled: true
              }],
              startDate: [{
                value: moment__WEBPACK_IMPORTED_MODULE_6__["utc"](this.harvestEstimate.startDate).format('YYYY-MM-DD'),
                disabled: true
              }],
              endDate: [moment__WEBPACK_IMPORTED_MODULE_6__["utc"](this.harvestEstimate.endDate).format('DD/MM/YYYY')],
              processPlant: [{
                value: this.harvestEstimate ? this.harvestEstimate.processPlant : '',
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              destination: [{
                value: this.harvestEstimate ? this.harvestEstimate.destination : '',
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
          } else {
            this.harvestForm = this.formBuilder.group({
              id: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              costCenter: [this.costCenter.id],
              user: [this.userCompany.user, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              unit: [this.costCenter.controlUnit, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              quantity: [this.previous ? this.previous.quantity : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^([0-9.])+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]],
              dailyAmount: [this.previous ? this.previous.dailyAmount : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^([0-9.])+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]],
              workHolidays: [this.previous ? this.previous.workHolidays ? 1 : 0 : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              startDate: [this.previous ? moment__WEBPACK_IMPORTED_MODULE_6__(this.cleanDate(this.previous.startDate), 'YYYY-MM-DD').format('YYYY-MM-DD') : this.costCenter.harvestDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              endDate: [this.previous ? moment__WEBPACK_IMPORTED_MODULE_6__(this.cleanDate(this.previous.endDate), 'YYYY-MM-DD').format('DD/MM/YYYY') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              processPlant: [this.previous ? this.previous.processPlant : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              destination: [this.previous ? this.previous.destination : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            this.harvestForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(1000)).subscribe(function (data) {
              _this2.calculateEndDate();
            });
          }

          this.loadData();
        }
      }]);

      return HarvestEstimateFormComponent;
    }();

    HarvestEstimateFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"]
      }, {
        type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"]
      }, {
        type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_12__["StoreService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HarvestEstimateFormComponent.prototype, "costCenter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HarvestEstimateFormComponent.prototype, "harvestEstimate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], HarvestEstimateFormComponent.prototype, "isView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HarvestEstimateFormComponent.prototype, "previous", void 0);
    HarvestEstimateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-harvest-estimate-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./harvest-estimate-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./harvest-estimate-form.component.scss */
      "./src/app/home-page/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"], _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_12__["StoreService"]])], HarvestEstimateFormComponent);
    /***/
  },

  /***/
  "./src/app/home-page/planning/harvest-estimate/harvest-estimate.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/home-page/planning/harvest-estimate/harvest-estimate.module.ts ***!
    \********************************************************************************/

  /*! exports provided: HarvestEstimatePageModule */

  /***/
  function srcAppHomePagePlanningHarvestEstimateHarvestEstimateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HarvestEstimatePageModule", function () {
      return HarvestEstimatePageModule;
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


    var _harvest_estimate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./harvest-estimate.page */
    "./src/app/home-page/planning/harvest-estimate/harvest-estimate.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _harvest_estimate_form_harvest_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./harvest-estimate-form/harvest-estimate-form.component */
    "./src/app/home-page/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.ts");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/fesm2015/ngx-mask.js");

    var routes = [{
      path: '',
      component: _harvest_estimate_page__WEBPACK_IMPORTED_MODULE_3__["HarvestEstimatePage"]
    }];

    var HarvestEstimatePageModule = function HarvestEstimatePageModule() {
      _classCallCheck(this, HarvestEstimatePageModule);
    };

    HarvestEstimatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"]],
      declarations: [_harvest_estimate_page__WEBPACK_IMPORTED_MODULE_3__["HarvestEstimatePage"], _harvest_estimate_form_harvest_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__["HarvestEstimateFormComponent"]],
      entryComponents: [_harvest_estimate_form_harvest_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__["HarvestEstimateFormComponent"]]
    })], HarvestEstimatePageModule);
    /***/
  },

  /***/
  "./src/app/home-page/planning/harvest-estimate/harvest-estimate.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/home-page/planning/harvest-estimate/harvest-estimate.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagePlanningHarvestEstimateHarvestEstimatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-content {\n  margin-bottom: 5px;\n}\n.card-content .estimate-content {\n  display: table;\n  width: 100%;\n}\n.card-content .estimate-content.old .card {\n  background: var(--color-box-light) !important;\n}\n.card-content .estimate-content .card {\n  display: table-cell;\n  text-align: center;\n  width: 33.3%;\n  padding: 5px;\n  background: white;\n}\n.card-content .estimate-content .card p {\n  margin: 0;\n}\n.card-content .estimate-content .card p:nth-child(1) {\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n}\n.card-content .estimate-content .card p:nth-child(2) {\n  font-size: 14px;\n}\n.card-content .update-card {\n  background: var(--color-login-header);\n  width: 100%;\n}\n.card-content .update-card.old {\n  background: white !important;\n  height: 16px;\n  padding: 0 5px;\n}\n.card-content .update-card.old p {\n  color: var(--ion-color-light-shade) !important;\n}\n.card-content .update-card p {\n  color: white;\n  margin: 0;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL2hhcnZlc3QtZXN0aW1hdGUvRDpcXG5wbVxcZngxMV9tb2JpbGUvc3JjXFxhcHBcXGhvbWUtcGFnZVxccGxhbm5pbmdcXGhhcnZlc3QtZXN0aW1hdGVcXGhhcnZlc3QtZXN0aW1hdGUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvaGFydmVzdC1lc3RpbWF0ZS9oYXJ2ZXN0LWVzdGltYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0FDQUY7QURFRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQUo7QURHTTtFQUNFLDZDQUFBO0FDRFI7QURLSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0FDSk47QURNTTtFQUNFLFNBQUE7QUNKUjtBRE1RO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0FDSlY7QURPUTtFQUNFLGVBQUE7QUNMVjtBRFdFO0VBV0UscUNBQUE7RUFDQSxXQUFBO0FDbkJKO0FEUUk7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTk47QURRTTtFQUNFLDhDQUFBO0FDTlI7QURhSTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ1hOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL2hhcnZlc3QtZXN0aW1hdGUvaGFydmVzdC1lc3RpbWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAuZXN0aW1hdGUtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICYub2xkIHtcclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJveC1saWdodCkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItbG9naW4taGVhZGVyKTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVwZGF0ZS1jYXJkIHtcclxuICAgICYub2xkIHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDVweDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2FyZC1jb250ZW50IC5lc3RpbWF0ZS1jb250ZW50IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtY29udGVudCAuZXN0aW1hdGUtY29udGVudC5vbGQgLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ib3gtbGlnaHQpICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1jb250ZW50IC5lc3RpbWF0ZS1jb250ZW50IC5jYXJkIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzMuMyU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uY2FyZC1jb250ZW50IC5lc3RpbWF0ZS1jb250ZW50IC5jYXJkIHAge1xuICBtYXJnaW46IDA7XG59XG4uY2FyZC1jb250ZW50IC5lc3RpbWF0ZS1jb250ZW50IC5jYXJkIHA6bnRoLWNoaWxkKDEpIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG4uY2FyZC1jb250ZW50IC5lc3RpbWF0ZS1jb250ZW50IC5jYXJkIHA6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQtY29udGVudCAudXBkYXRlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkLWNvbnRlbnQgLnVwZGF0ZS1jYXJkLm9sZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4uY2FyZC1jb250ZW50IC51cGRhdGUtY2FyZC5vbGQgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1jb250ZW50IC51cGRhdGUtY2FyZCBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/planning/harvest-estimate/harvest-estimate.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/home-page/planning/harvest-estimate/harvest-estimate.page.ts ***!
    \******************************************************************************/

  /*! exports provided: HarvestEstimatePage */

  /***/
  function srcAppHomePagePlanningHarvestEstimateHarvestEstimatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HarvestEstimatePage", function () {
      return HarvestEstimatePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _harvest_estimate_form_harvest_estimate_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./harvest-estimate-form/harvest-estimate-form.component */
    "./src/app/home-page/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.ts");
    /* harmony import */


    var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/contract-detail/contract-detail.service */
    "./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/services/alert/alert.service */
    "./src/app/shared/services/alert/alert.service.ts");
    /* harmony import */


    var _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/services/network/network.service */
    "./src/app/shared/services/network/network.service.ts");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var HarvestEstimatePage =
    /*#__PURE__*/
    function () {
      function HarvestEstimatePage(router, modalController, contractDetailService, alertService, httpService, loaderService, networkService, storeService) {
        var _this3 = this;

        _classCallCheck(this, HarvestEstimatePage);

        this.router = router;
        this.modalController = modalController;
        this.contractDetailService = contractDetailService;
        this.alertService = alertService;
        this.httpService = httpService;
        this.loaderService = loaderService;
        this.networkService = networkService;
        this.storeService = storeService;
        /**
         * checkButton
         */

        this.checkButton = function () {
          return _this3.currentUrl === '/home-page/harvest-estimate';
        };
        /**
         * openForm
         */


        this.openForm = function () {
          var harvestEstimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _harvest_estimate_form_harvest_estimate_form_component__WEBPACK_IMPORTED_MODULE_4__["HarvestEstimateFormComponent"],
                      componentProps: {
                        costCenter: this.costCenter,
                        harvestEstimate: harvestEstimate,
                        isView: harvestEstimate !== null,
                        previous: this.harvestEstimate.length > 0 ? this.harvestEstimate[0] : null
                      },
                      backdropDismiss: false,
                      keyboardClose: false,
                      cssClass: 'full-screen-modal'
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data) {
                        _this4.reloadList();
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        };
        /**
         * searchHarvest
         * @param search
         */


        this.searchHarvest = function (search) {
          if (search) {
            _this3.filteredHarvestEstimate = _this3.harvestEstimate.filter(function (item) {
              return item.userName.toLowerCase().includes(search.toLowerCase()) || item.quantity === parseInt(search, 10);
            });
          } else {
            _this3.filteredHarvestEstimate = _this3.harvestEstimate;
          }
        };
        /**
         * cancelSearch
         */


        this.cancelSearch = function () {
          _this3.filteredHarvestEstimate = _this3.harvestEstimate;
        };
        /**
         * harvestSelected
         * @param item
         */


        this.viewHarvest = function (harvestEstimate) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.openForm(harvestEstimate);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        };
        /**
         * deleteHarvest
         * @param harvestEstimate
         */


        this.deleteHarvest = function (harvestEstimate) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var respuesta, newHarvest, data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertService.confirmAlert('Desea borrar esta estimacion de cosecha?');

                  case 2:
                    respuesta = _context3.sent;

                    if (respuesta) {
                      newHarvest = Object.assign({}, harvestEstimate, {
                        id: -harvestEstimate.id,
                        workHolidays: harvestEstimate ? 1 : 0
                      });
                      delete this.costCenter.active;
                      data = {
                        costCenter: this.costCenter,
                        harvestEstimate: newHarvest
                      };
                      this.storeEstimation(data);
                    }

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        };
        /**
         * reloadList
         */


        this.reloadList = function () {
          _this3.loaderService.startLoader();

          _this3.contractDetailService.getCostCenterDetail(_this3.costCenter.id.toString()).subscribe(function (success) {
            _this3.storeService.setContractData(success.data);

            _this3.loaderService.stopLoader();
          }, function (error) {
            _this3.loaderService.stopLoader();

            _this3.httpService.errorHandler(error);
          });
        };
        /**
         * storeEstimation
         * @param data
         */


        this.storeEstimation = function (data) {
          _this3.loaderService.startLoader('Borrando estimacion de cosecha');

          _this3.contractDetailService.storeHarvest(data).subscribe(function (success) {
            _this3.reloadList();

            _this3.loaderService.stopLoader();
          }, function (error) {
            _this3.loaderService.stopLoader();

            _this3.httpService.errorHandler(error);
          });
        };

        this.isOnline$ = this.networkService.getNetworkStatus().subscribe(function (status) {
          _this3.isOnline = status;
        });
      }

      _createClass(HarvestEstimatePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.router$ = this.router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              _this5.currentUrl = route.url;
            }
          });
          this.store$ = this.storeService.stateChanged.subscribe(function (data) {
            _this5.costCenter = _this5.storeService.getCostCenter();
            _this5.harvestEstimate = _this5.storeService.getHarvestEstimate();
            _this5.filteredHarvestEstimate = _this5.storeService.getHarvestEstimate();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isOnline$.unsubscribe();
          this.router$.unsubscribe();
          this.store$.unsubscribe();
        }
      }]);

      return HarvestEstimatePage;
    }();

    HarvestEstimatePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"]
      }, {
        type: _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
      }, {
        type: _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]
      }];
    };

    HarvestEstimatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-harvest-estimate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./harvest-estimate.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/harvest-estimate/harvest-estimate.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./harvest-estimate.page.scss */
      "./src/app/home-page/planning/harvest-estimate/harvest-estimate.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"], _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"], _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]])], HarvestEstimatePage);
    /***/
  }
}]);
//# sourceMappingURL=planning-harvest-estimate-harvest-estimate-module-es5.js.map