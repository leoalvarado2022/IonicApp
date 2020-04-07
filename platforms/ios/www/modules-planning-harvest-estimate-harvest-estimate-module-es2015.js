(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-planning-harvest-estimate-harvest-estimate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\" color=\"secondary\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\" style=\"color:white;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{ harvestEstimate ? 'Ver' : 'Registrar'  }}  Estimacion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"harvestForm\">\n    <ion-item>\n      <ion-label position=\"floating\">\n        Cantidad {{ showUnitName() | uppercase }}\n      </ion-label>\n      <ion-input [value]=\"harvestForm.get('quantity') .value | mask: 'separator'\" clearInput formControlName=\"quantity\" placeholder=\"Ingresar Cantidad\" type=\"tel\"></ion-input>\n      <ng-container *ngIf=\"harvestForm.get('quantity').dirty\">\n        <span *ngIf=\"harvestForm.get('quantity').hasError('required')\" class=\"errorMsg\">Ingrese Cantidad</span>\n        <span *ngIf=\"harvestForm.get('quantity').hasError('pattern')\" class=\"errorMsg\">Solo numeros</span>\n      </ng-container>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">\n        Cantidad Diaria {{ showUnitName() | uppercase }}\n      </ion-label>\n      <ion-input [value]=\"harvestForm.get('dailyAmount') .value | mask: 'separator'\" clearInput formControlName=\"dailyAmount\" placeholder=\"Ingresar Cantidad Diaria\" type=\"tel\"></ion-input>\n      <ng-container *ngIf=\"harvestForm.get('dailyAmount').dirty\">\n        <span *ngIf=\"harvestForm.get('dailyAmount').hasError('required')\" class=\"errorMsg\">Ingrese cantidad diaria</span>\n        <span *ngIf=\"harvestForm.get('quantity').hasError('pattern')\" class=\"errorMsg\">Solo numeros</span>\n      </ng-container>\n    </ion-item>\n\n    <ion-list>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label>Trabaja Festivos ?</ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Si</ion-label>\n          <ion-radio (ionSelect)=\"workHolidaysEvent($event.detail.value)\" [checked]=\"harvestForm.get('workHolidays').value === 1\" [disabled]=\"isView\" slot=\"start\" value=\"1\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio (ionSelect)=\"workHolidaysEvent($event.detail.value)\" [checked]=\"harvestForm.get('workHolidays').value === 0\" [disabled]=\"isView\" slot=\"start\" value=\"0\"></ion-radio>\n        </ion-item>\n\n        <ng-container *ngIf=\"harvestForm.get('workHolidays').dirty && harvestForm.get('workHolidays').hasError('required')\">\n          <span class=\"errorMsg\">Indique si trabaja los feriados.</span>\n        </ng-container>\n      </ion-radio-group>\n    </ion-list>\n\n    <ion-item>\n      <ion-label position=\"floating\">Fecha Inicio</ion-label>\n      <ion-datetime [displayFormat]=\"dateFormat\" [max]=\"maxDate\" [pickerFormat]=\"dateFormat\" formControlName=\"startDate\" placeholder=\"Ingresar Fecha Inicio\"></ion-datetime>\n      <ng-container *ngIf=\"harvestForm.get('startDate').dirty && harvestForm.get('startDate').hasError('required')\">\n        <span class=\"errorMsg\">Ingrese fecha inicio</span>\n      </ng-container>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Fecha Fin</ion-label>\n      <ion-input [value]=\" harvestForm.get('endDate').value\" disabled=\"true\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"fixed\">Plantas de Proceso</ion-label>\n      <ion-select [interfaceOptions]=\"processPlantAction\" [selectedText]=\"getSelectedProcessPlant()\" cancelText=\"Cancelar\" formControlName=\"processPlant\" interface=\"action-sheet\">\n        <ion-select-option *ngFor=\"let plant of processPlants\" [value]=\"plant.id\">\n          {{ plant.name }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"fixed\">Destino</ion-label>\n      <ion-select [interfaceOptions]=\"destinationAction\" [selectedText]=\"getSelectedDestination()\" cancelText=\"Cancelar\" formControlName=\"destination\" interface=\"action-sheet\">\n        <ion-select-option *ngFor=\"let destination of destinations\" [value]=\"destination.id\">\n          {{ destination.name }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <br><br>\n    <ng-container *ngIf=\"!harvestEstimate\">\n      <ion-button (click)=\"submit()\" [disabled]=\"harvestForm.invalid || isSaving\" color=\"primary\" expand=\"block\">\n        Guardar\n      </ion-button>\n    </ng-container>\n\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/harvest-estimate/harvest-estimate.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/harvest-estimate/harvest-estimate.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"white\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"white\">\n      <strong>Estimación de Cosecha</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-searchbar placeholder=\"Buscar...\" (ionChange)=\"searchHarvest($event.target.value)\" (ionClear)=\"cancelSearch()\" animated class=\"production\" showCancelButton=\"never\"></ion-searchbar>\n\n<ion-content class=\"content\">\n\n  <ng-container *ngFor=\"let harvest of filteredHarvestEstimate ; let index =index\">\n    <div class=\"card-sli\">\n      <div class=\"card-sli-back\">\n        <app-harvest-estimate-item\n          (deleteHarvest)=\"deleteHarvest($event)\"\n          (harvestSelected)=\"viewHarvest($event)\"\n          [isOld]=\"index > 0\"\n          [item]=\"harvest\"\n          [slideDisabled]=\"false\">\n        </app-harvest-estimate-item>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"checkButton()\">\n    <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\n      <ion-fab-button (click)=\"openForm()\" [disabled]=\"!costCenter || !isOnline\" color=\"warning\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ng-container>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modules/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".errorMsg {\n  color: red;\n}\n\nion-item ion-label {\n  min-width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL3BsYW5uaW5nL2hhcnZlc3QtZXN0aW1hdGUvaGFydmVzdC1lc3RpbWF0ZS1mb3JtL2hhcnZlc3QtZXN0aW1hdGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbGFubmluZy9oYXJ2ZXN0LWVzdGltYXRlL2hhcnZlc3QtZXN0aW1hdGUtZm9ybS9oYXJ2ZXN0LWVzdGltYXRlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FER0U7RUFDRSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BsYW5uaW5nL2hhcnZlc3QtZXN0aW1hdGUvaGFydmVzdC1lc3RpbWF0ZS1mb3JtL2hhcnZlc3QtZXN0aW1hdGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvck1zZyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgaW9uLWxhYmVsIHtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgfVxufVxuIiwiLmVycm9yTXNnIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWluLXdpZHRoOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: HarvestEstimateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HarvestEstimateFormComponent", function() { return HarvestEstimateFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/sync/sync.service */ "./src/app/shared/services/sync/sync.service.ts");
/* harmony import */ var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/contract-detail/contract-detail.service */ "./src/app/modules/planning/services/contract-detail/contract-detail.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/toast/toast.service */ "./src/app/shared/services/toast/toast.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");













let HarvestEstimateFormComponent = class HarvestEstimateFormComponent {
    constructor(modalController, formBuilder, syncService, contractDetailService, authService, toastService, httpService, loaderService, storeService) {
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
        this.closeModal = (status = false) => {
            this.modalController.dismiss(status);
        };
        /**
         * submit
         */
        this.submit = () => {
            if (this.harvestForm.valid && !this.isSaving) {
                this.isSaving = true;
                const estimation = Object.assign({}, this.harvestForm.value);
                estimation.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(estimation.endDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
                estimation.quantity = this.cleanParseNumber(estimation.quantity);
                estimation.dailyAmount = this.cleanParseNumber(estimation.dailyAmount);
                delete this.costCenter.active;
                const data = {
                    costCenter: this.costCenter,
                    harvestEstimate: estimation
                };
                this.storeEstimation(data);
            }
            else {
                this.isSaving = false;
            }
        };
        /**
         * showUnitName
         */
        this.showUnitName = () => {
            const find = this.units.find(item => item.id === this.costCenter.controlUnit);
            return find ? find.code : 'N/A';
        };
        /**
         * workHolidaysEvent
         * @param event
         */
        this.workHolidaysEvent = (value) => {
            this.harvestForm.patchValue({
                workHolidays: parseInt(value, 10)
            });
            this.harvestForm.updateValueAndValidity();
        };
        /**
         * getSelectedProcessPlant
         */
        this.getSelectedProcessPlant = () => {
            if (this.processPlants) {
                const id = this.harvestForm.get('processPlant').value;
                const find = this.processPlants.find(item => item.id === id);
                return find ? find.name : '';
            }
            return '';
        };
        /**
         * getSelectedDestination
         */
        this.getSelectedDestination = () => {
            if (this.destinations) {
                const id = this.harvestForm.get('destination').value;
                const find = this.destinations.find(item => item['id'] === id);
                return find ? find['name'] : '';
            }
            return '';
        };
        /**
         * loadData
         */
        this.loadData = () => {
            this.units = this.storeService.getUnits();
            this.processPlants = this.storeService.getProcessPlants();
            this.destinations = this.storeService.getDestinations();
            this.preSelectProcessPlant();
            this.preSelectDestination();
        };
        /**
         * storeEstimation
         * @param data
         */
        this.storeEstimation = (data) => {
            this.loaderService.startLoader('Guardando estimacion...');
            this.contractDetailService.storeHarvest(data).subscribe(success => {
                this.loaderService.stopLoader();
                this.isSaving = false;
                this.closeModal(true);
            }, error => {
                this.loaderService.stopLoader();
                this.isSaving = false;
                this.httpService.errorHandler(error);
            });
        };
        /**
         * calculateEndDate
         */
        this.calculateEndDate = () => {
            const { quantity, dailyAmount, workHolidays, startDate } = this.harvestForm.value;
            if (quantity && dailyAmount) {
                const days = Math.ceil((this.cleanParseNumber(quantity) > 0 ? this.cleanParseNumber(quantity) : 1) / (this.cleanParseNumber(dailyAmount) > 0 ? this.cleanParseNumber(dailyAmount) : 1));
                const holidays = [];
                const daysAdded = 1;
                let momentDate = moment__WEBPACK_IMPORTED_MODULE_6__["utc"](startDate);
                if (workHolidays === 0) {
                    this.holidays.forEach(holiday => {
                        holidays.push(moment__WEBPACK_IMPORTED_MODULE_6__["utc"](holiday.fecha).format(this.dateFormat));
                    });
                }
                momentDate = this.computeEndDate(days, daysAdded, momentDate, holidays);
                this.harvestForm.patchValue({
                    endDate: momentDate.format(this.dateFormat)
                });
                this.harvestForm.updateValueAndValidity();
            }
        };
        /**
         * cleanDate
         * @param date
         */
        this.cleanDate = (date) => {
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
        this.computeEndDate = (workingDays = 1, daysAdded = 1, momentDate, holidays = []) => {
            if (workingDays > daysAdded && daysAdded < 60) {
                if (momentDate.weekday() > 0 && !holidays.includes(momentDate.format(this.dateFormat))) {
                    daysAdded++;
                }
                momentDate = momentDate.add(1, 'days');
                return this.computeEndDate(workingDays, daysAdded, momentDate, holidays);
            }
            return momentDate;
        };
        /**
         * cleanParseNumber
         * @param value
         */
        this.cleanParseNumber = (value) => {
            return parseInt(String(value).replace('.', ''), 10);
        };
        /**
         * preSelectProcessPlant
         */
        this.preSelectProcessPlant = () => {
            if (this.processPlants.length === 1) {
                this.harvestForm.patchValue({
                    processPlant: this.processPlants[0].id
                });
                this.harvestForm.updateValueAndValidity();
            }
        };
        /**
         * preSelectDestination
         */
        this.preSelectDestination = () => {
            if (this.destinations.length === 1) {
                this.harvestForm.patchValue({
                    destination: this.destinations[0].id
                });
                this.harvestForm.updateValueAndValidity();
            }
        };
    }
    ngOnInit() {
        this.holidays = this.storeService.getHolidays();
        this.userCompany = this.storeService.getActiveCompany();
        if (this.isView) {
            this.harvestForm = this.formBuilder.group({
                id: [this.harvestEstimate.id],
                costCenter: [this.costCenter.id],
                user: [this.userCompany.user],
                unit: [this.costCenter.controlUnit],
                quantity: [{ value: this.harvestEstimate.quantity, disabled: true }],
                dailyAmount: [{ value: this.harvestEstimate.dailyAmount, disabled: true }],
                workHolidays: [{ value: this.harvestEstimate.workHolidays ? 1 : 0, disabled: true }],
                startDate: [{ value: moment__WEBPACK_IMPORTED_MODULE_6__["utc"](this.harvestEstimate.startDate).format('YYYY-MM-DD'), disabled: true }],
                endDate: [moment__WEBPACK_IMPORTED_MODULE_6__["utc"](this.harvestEstimate.endDate).format('DD/MM/YYYY')],
                processPlant: [{ value: this.harvestEstimate ? this.harvestEstimate.processPlant : '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                destination: [{ value: this.harvestEstimate ? this.harvestEstimate.destination : '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
        }
        else {
            this.harvestForm = this.formBuilder.group({
                id: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                costCenter: [this.costCenter.id],
                user: [this.userCompany.user, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                unit: [this.costCenter.controlUnit, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                quantity: [this.previous ? this.previous.quantity : '', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^([0-9.])+$/),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)
                    ]],
                dailyAmount: [this.previous ? this.previous.dailyAmount : '', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^([0-9.])+$/),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)
                    ]],
                workHolidays: [this.previous ? this.previous.workHolidays ? 1 : 0 : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                startDate: [this.previous ? moment__WEBPACK_IMPORTED_MODULE_6__(this.cleanDate(this.previous.startDate), 'YYYY-MM-DD').format('YYYY-MM-DD') : this.costCenter.harvestDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                endDate: [this.previous ? moment__WEBPACK_IMPORTED_MODULE_6__(this.cleanDate(this.previous.endDate), 'YYYY-MM-DD').format('DD/MM/YYYY') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                processPlant: [this.previous ? this.previous.processPlant : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                destination: [this.previous ? this.previous.destination : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            this.harvestForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(1000)).subscribe((data) => {
                this.calculateEndDate();
            });
        }
        this.loadData();
    }
};
HarvestEstimateFormComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"] },
    { type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"] },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_12__["StoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HarvestEstimateFormComponent.prototype, "costCenter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HarvestEstimateFormComponent.prototype, "harvestEstimate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], HarvestEstimateFormComponent.prototype, "isView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HarvestEstimateFormComponent.prototype, "previous", void 0);
HarvestEstimateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-harvest-estimate-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./harvest-estimate-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./harvest-estimate-form.component.scss */ "./src/app/modules/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"],
        _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"],
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_12__["StoreService"]])
], HarvestEstimateFormComponent);



/***/ }),

/***/ "./src/app/modules/planning/harvest-estimate/harvest-estimate.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/planning/harvest-estimate/harvest-estimate.module.ts ***!
  \******************************************************************************/
/*! exports provided: HarvestEstimatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HarvestEstimatePageModule", function() { return HarvestEstimatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _harvest_estimate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./harvest-estimate.page */ "./src/app/modules/planning/harvest-estimate/harvest-estimate.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _harvest_estimate_form_harvest_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./harvest-estimate-form/harvest-estimate-form.component */ "./src/app/modules/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");







const routes = [
    {
        path: '',
        component: _harvest_estimate_page__WEBPACK_IMPORTED_MODULE_3__["HarvestEstimatePage"]
    }
];
let HarvestEstimatePageModule = class HarvestEstimatePageModule {
};
HarvestEstimatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"]
        ],
        declarations: [
            _harvest_estimate_page__WEBPACK_IMPORTED_MODULE_3__["HarvestEstimatePage"],
            _harvest_estimate_form_harvest_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__["HarvestEstimateFormComponent"]
        ],
        entryComponents: [
            _harvest_estimate_form_harvest_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__["HarvestEstimateFormComponent"]
        ]
    })
], HarvestEstimatePageModule);



/***/ }),

/***/ "./src/app/modules/planning/harvest-estimate/harvest-estimate.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/planning/harvest-estimate/harvest-estimate.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-content {\n  margin-bottom: 5px;\n}\n.card-content .estimate-content {\n  display: table;\n  width: 100%;\n}\n.card-content .estimate-content.old .card {\n  background: var(--color-box-light) !important;\n}\n.card-content .estimate-content .card {\n  display: table-cell;\n  text-align: center;\n  width: 33.3%;\n  padding: 5px;\n  background: white;\n}\n.card-content .estimate-content .card p {\n  margin: 0;\n}\n.card-content .estimate-content .card p:nth-child(1) {\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n}\n.card-content .estimate-content .card p:nth-child(2) {\n  font-size: 14px;\n}\n.card-content .update-card {\n  background: var(--color-login-header);\n  width: 100%;\n}\n.card-content .update-card.old {\n  background: white !important;\n  height: 16px;\n  padding: 0 5px;\n}\n.card-content .update-card.old p {\n  color: var(--ion-color-light-shade) !important;\n}\n.card-content .update-card p {\n  color: white;\n  margin: 0;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL3BsYW5uaW5nL2hhcnZlc3QtZXN0aW1hdGUvaGFydmVzdC1lc3RpbWF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGxhbm5pbmcvaGFydmVzdC1lc3RpbWF0ZS9oYXJ2ZXN0LWVzdGltYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0FDQUY7QURFRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQUo7QURHTTtFQUNFLDZDQUFBO0FDRFI7QURLSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0FDSk47QURNTTtFQUNFLFNBQUE7QUNKUjtBRE1RO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0FDSlY7QURPUTtFQUNFLGVBQUE7QUNMVjtBRFdFO0VBV0UscUNBQUE7RUFDQSxXQUFBO0FDbkJKO0FEUUk7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTk47QURRTTtFQUNFLDhDQUFBO0FDTlI7QURhSTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ1hOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbGFubmluZy9oYXJ2ZXN0LWVzdGltYXRlL2hhcnZlc3QtZXN0aW1hdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gIC5lc3RpbWF0ZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYub2xkIHtcbiAgICAgIC5jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYm94LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMzMuMyU7XG4gICAgICAvL2JvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWxvZ2luLWhlYWRlcik7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXBkYXRlLWNhcmQge1xuICAgICYub2xkIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbG9naW4taGVhZGVyKTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHAge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNhcmQtY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jYXJkLWNvbnRlbnQgLmVzdGltYXRlLWNvbnRlbnQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZC1jb250ZW50IC5lc3RpbWF0ZS1jb250ZW50Lm9sZCAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJveC1saWdodCkgIWltcG9ydGFudDtcbn1cbi5jYXJkLWNvbnRlbnQgLmVzdGltYXRlLWNvbnRlbnQgLmNhcmQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMy4zJTtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jYXJkLWNvbnRlbnQgLmVzdGltYXRlLWNvbnRlbnQgLmNhcmQgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5jYXJkLWNvbnRlbnQgLmVzdGltYXRlLWNvbnRlbnQgLmNhcmQgcDpudGgtY2hpbGQoMSkge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5jYXJkLWNvbnRlbnQgLmVzdGltYXRlLWNvbnRlbnQgLmNhcmQgcDpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FyZC1jb250ZW50IC51cGRhdGUtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxvZ2luLWhlYWRlcik7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtY29udGVudCAudXBkYXRlLWNhcmQub2xkIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi5jYXJkLWNvbnRlbnQgLnVwZGF0ZS1jYXJkLm9sZCBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSkgIWltcG9ydGFudDtcbn1cbi5jYXJkLWNvbnRlbnQgLnVwZGF0ZS1jYXJkIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/planning/harvest-estimate/harvest-estimate.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/planning/harvest-estimate/harvest-estimate.page.ts ***!
  \****************************************************************************/
/*! exports provided: HarvestEstimatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HarvestEstimatePage", function() { return HarvestEstimatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _harvest_estimate_form_harvest_estimate_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./harvest-estimate-form/harvest-estimate-form.component */ "./src/app/modules/planning/harvest-estimate/harvest-estimate-form/harvest-estimate-form.component.ts");
/* harmony import */ var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/contract-detail/contract-detail.service */ "./src/app/modules/planning/services/contract-detail/contract-detail.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/alert/alert.service */ "./src/app/shared/services/alert/alert.service.ts");
/* harmony import */ var _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/network/network.service */ "./src/app/shared/services/network/network.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");











let HarvestEstimatePage = class HarvestEstimatePage {
    constructor(router, modalController, contractDetailService, alertService, httpService, loaderService, networkService, storeService) {
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
        this.checkButton = () => {
            return this.currentUrl === '/home-page/harvest-estimate';
        };
        /**
         * openForm
         */
        this.openForm = (harvestEstimate = null) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _harvest_estimate_form_harvest_estimate_form_component__WEBPACK_IMPORTED_MODULE_4__["HarvestEstimateFormComponent"],
                componentProps: {
                    costCenter: this.costCenter,
                    harvestEstimate,
                    isView: harvestEstimate !== null,
                    previous: this.harvestEstimate.length > 0 ? this.harvestEstimate[0] : null
                },
                backdropDismiss: false,
                keyboardClose: false,
                cssClass: 'full-screen-modal'
            });
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    this.reloadList();
                }
            });
            return yield modal.present();
        });
        /**
         * searchHarvest
         * @param search
         */
        this.searchHarvest = (search) => {
            if (search) {
                this.filteredHarvestEstimate = this.harvestEstimate.filter(item => {
                    return (item.userName.toLowerCase().includes(search.toLowerCase()) ||
                        item.quantity === parseInt(search, 10));
                });
            }
            else {
                this.filteredHarvestEstimate = this.harvestEstimate;
            }
        };
        /**
         * cancelSearch
         */
        this.cancelSearch = () => {
            this.filteredHarvestEstimate = this.harvestEstimate;
        };
        /**
         * harvestSelected
         * @param item
         */
        this.viewHarvest = (harvestEstimate) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.openForm(harvestEstimate);
        });
        /**
         * deleteHarvest
         * @param harvestEstimate
         */
        this.deleteHarvest = (harvestEstimate) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const respuesta = yield this.alertService.confirmAlert('Desea borrar esta estimacion de cosecha?');
            if (respuesta) {
                const newHarvest = Object.assign({}, harvestEstimate, {
                    id: -harvestEstimate.id,
                    workHolidays: harvestEstimate ? 1 : 0
                });
                delete this.costCenter.active;
                const data = {
                    costCenter: this.costCenter,
                    harvestEstimate: newHarvest
                };
                this.storeEstimation(data);
            }
        });
        /**
         * reloadList
         */
        this.reloadList = () => {
            this.loaderService.startLoader();
            this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString()).subscribe((success) => {
                this.storeService.setContractData(success.data);
                this.loaderService.stopLoader();
            }, error => {
                this.loaderService.stopLoader();
                this.httpService.errorHandler(error);
            });
        };
        /**
         * storeEstimation
         * @param data
         */
        this.storeEstimation = (data) => {
            this.loaderService.startLoader('Borrando estimacion de cosecha');
            this.contractDetailService.storeHarvest(data).subscribe(success => {
                this.reloadList();
                this.loaderService.stopLoader();
            }, error => {
                this.loaderService.stopLoader();
                this.httpService.errorHandler(error);
            });
        };
        this.isOnline$ = this.networkService.getNetworkStatus().subscribe(status => {
            this.isOnline = status;
        });
    }
    ngOnInit() {
        this.router$ = this.router.events.subscribe((route) => {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.currentUrl = route.url;
            }
        });
        this.store$ = this.storeService.stateChanged.subscribe(data => {
            this.costCenter = this.storeService.getCostCenter();
            this.harvestEstimate = this.storeService.getHarvestEstimate();
            this.filteredHarvestEstimate = this.storeService.getHarvestEstimate();
        });
    }
    ngOnDestroy() {
        this.isOnline$.unsubscribe();
        this.router$.unsubscribe();
        this.store$.unsubscribe();
    }
};
HarvestEstimatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"] },
    { type: _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"] }
];
HarvestEstimatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-harvest-estimate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./harvest-estimate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/harvest-estimate/harvest-estimate.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./harvest-estimate.page.scss */ "./src/app/modules/planning/harvest-estimate/harvest-estimate.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"],
        _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
        _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]])
], HarvestEstimatePage);



/***/ })

}]);
//# sourceMappingURL=modules-planning-harvest-estimate-harvest-estimate-module-es2015.js.map