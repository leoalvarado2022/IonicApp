(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-quality-estimate-quality-estimate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\" color=\"secondary\">\r\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\" style=\"color:white;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ qualityEstimate ? 'Ver' : 'Registrar' }} Calidad</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"qualityForm\">\r\n    <ng-container formGroupName=\"quality\">\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">Calidad</ion-label>\r\n        <ion-select [interfaceOptions]=\"customActionSheetOptions\" [selectedText]=\"getSelectedQuality()\" cancelText=\"Cancelar\" formControlName=\"quality\" interface=\"action-sheet\">\r\n          <ion-select-option *ngFor=\"let q of qualities\" [value]=\"q.id\">\r\n            {{ q.name }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ng-container *ngIf=\"qualityForm.get(['quality', 'quality']).hasError('required')\">\r\n        <span class=\"errorMsg\">Seleccione la Calidad</span>\r\n      </ng-container>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">% de Exportación</ion-label>\r\n        <ion-input clearInput formControlName=\"exportPercentage\" placeholder=\"Ingrese el %\" type=\"number\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ng-container *ngIf=\"qualityForm.get(['quality', 'exportPercentage']).hasError('max')\">\r\n        <span class=\"errorMsg\">El porcentaje maximo es 100</span>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"qualityForm.get(['quality', 'exportPercentage']).hasError('min')\">\r\n        <span class=\"errorMsg\">El porcentaje minimo es 0</span>\r\n      </ng-container>\r\n\r\n    </ng-container>\r\n\r\n    <ng-container formArrayName=\"calibers\">\r\n      <ion-list>\r\n        <ion-list-header>\r\n          Datos Calibres\r\n        </ion-list-header>\r\n\r\n        <ng-container *ngFor=\"let item of qualityForm.get('calibers')['controls']; let index = index\" [formGroupName]=\"index.toString()\">\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">{{ getCaliberName(item) }}</ion-label>\r\n            <ion-input clearInput formControlName=\"percentage\" placeholder=\"Ingrese el %\" type=\"number\"></ion-input>\r\n          </ion-item>\r\n          <ng-container *ngIf=\"item.get('percentage').hasError('max')\">\r\n            <span class=\"errorMsg\">El porcentaje maximo es 100</span>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"item.get('percentage').hasError('min')\">\r\n            <span class=\"errorMsg\">El porcentaje minimo es 0</span>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Total</ion-label>\r\n          <ion-input [disabled]=\"isView\" [ngClass]=\"{ 'total-padding': !isView }\" [value]=\"getTotal()\" clearInput readonly=\"true\" type=\"number\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ng-container *ngIf=\"!isView && qualityForm.hasError('wrongPercentage')\">\r\n          <span class=\"errorMsg\">El porcentaje total debe sumar 100%</span>\r\n        </ng-container>\r\n\r\n      </ion-list>\r\n    </ng-container>\r\n\r\n    <br><br>\r\n    <ng-container *ngIf=\"!qualityEstimate\">\r\n      <ion-button (click)=\"submit()\" [disabled]=\"qualityForm.invalid || isSaving\" color=\"primary\" expand=\"block\">\r\n        Guardar\r\n      </ion-button>\r\n    </ng-container>\r\n\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/quality-estimate/quality-estimate.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/quality-estimate/quality-estimate.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"white\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"white\">\r\n      <strong>Estimación de Calidad</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-searchbar\r\n  placeholder=\"Buscar...\"\r\n  (ionChange)=\"searchQuality($event.target.value)\"\r\n  (ionClear)=\"cancelSearch()\"\r\n  animated\r\n  class=\"production\"\r\n  showCancelButton=\"never\">\r\n</ion-searchbar>\r\n\r\n<ion-content class=\"content\">\r\n\r\n  <ng-container *ngFor=\"let quality of filteredQualityEstimate; let index = index\">\r\n    <div class=\"card-sli\">\r\n      <div class=\"card-sli-back\">\r\n        <app-quality-estimate-item\r\n          (itemDelete)=\"deleteQuality(quality)\"\r\n          (itemSelected)=\"viewQuality(quality)\"\r\n          [costCenter]=\"costCenter\"\r\n          [details]=\"getItemDetails(quality.id)\"\r\n          [isOld]=\"index > 0 \"\r\n          [item]=\"quality\"\r\n          [slideDisabled]=\"false\">\r\n        </app-quality-estimate-item>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"checkButton()\">\r\n    <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\r\n      <ion-fab-button (click)=\"openForm()\" [disabled]=\"!costCenter || !isOnline\" color=\"success\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </ng-container>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home-page/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/home-page/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".errorMsg {\n  color: red;\n  padding-left: 15px;\n}\n\nion-item ion-label {\n  min-width: 50%;\n}\n\nion-item ion-input {\n  text-align: right;\n}\n\n.total-padding {\n  --padding-end: 37px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL3F1YWxpdHktZXN0aW1hdGUvcXVhbGl0eS1lc3RpbWF0ZS1mb3JtL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxob21lLXBhZ2VcXHBsYW5uaW5nXFxxdWFsaXR5LWVzdGltYXRlXFxxdWFsaXR5LWVzdGltYXRlLWZvcm1cXHF1YWxpdHktZXN0aW1hdGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL3F1YWxpdHktZXN0aW1hdGUvcXVhbGl0eS1lc3RpbWF0ZS1mb3JtL3F1YWxpdHktZXN0aW1hdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdFO0VBQ0UsY0FBQTtBQ0FKOztBREdFO0VBQ0UsaUJBQUE7QUNESjs7QURLQTtFQUNFLG1CQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvcXVhbGl0eS1lc3RpbWF0ZS9xdWFsaXR5LWVzdGltYXRlLWZvcm0vcXVhbGl0eS1lc3RpbWF0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yTXNnIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBtaW4td2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi50b3RhbC1wYWRkaW5nIHtcclxuICAtLXBhZGRpbmctZW5kOiAzN3B4O1xyXG59XHJcbiIsIi5lcnJvck1zZyB7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWluLXdpZHRoOiA1MCU7XG59XG5pb24taXRlbSBpb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRvdGFsLXBhZGRpbmcge1xuICAtLXBhZGRpbmctZW5kOiAzN3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home-page/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/home-page/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: QualityEstimateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityEstimateFormComponent", function() { return QualityEstimateFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/contract-detail/contract-detail.service */ "./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts");
/* harmony import */ var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/sync/sync.service */ "./src/app/shared/services/sync/sync.service.ts");
/* harmony import */ var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/toast/toast.service */ "./src/app/shared/services/toast/toast.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");











let QualityEstimateFormComponent = class QualityEstimateFormComponent {
    constructor(modalController, formBuilder, authService, contractDetailService, syncService, toastService, httpService, loaderService, storeService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.contractDetailService = contractDetailService;
        this.syncService = syncService;
        this.toastService = toastService;
        this.httpService = httpService;
        this.loaderService = loaderService;
        this.storeService = storeService;
        this.customActionSheetOptions = {
            header: 'Calidades',
            keyboardClose: false,
            backdropDismiss: false
        };
        this.isSaving = false;
        /**
         * closeModal
         */
        this.closeModal = (status = false) => {
            this.qualityForm.reset();
            this.modalController.dismiss(status);
        };
        /**
         * submit
         */
        this.submit = () => {
            if (this.qualityForm.valid && !this.isSaving) {
                this.isSaving = true;
                delete this.costCenter.active;
                const data = Object.assign({}, this.qualityForm.value, {
                    costCenter: this.costCenter
                });
                data.calibers = data.calibers.map(caliber => Object.assign({}, caliber, {
                    percentage: caliber.percentage === '' ? 0 : caliber.percentage
                })).filter(caliber => caliber.percentage > 0);
                this.storeQuality(data);
            }
            else {
                this.isSaving = false;
            }
        };
        /**
         * getCaliberName
         * @param item
         */
        this.getCaliberName = (item) => {
            const caliber = this.calibers.find((caliber) => caliber.id === item.get('caliber').value);
            return caliber ? caliber.name : 'NOMBRE CALIBRE';
        };
        /**
         * validateCalibers
         * @param form
         */
        this.validateCalibers = (form) => {
            const items = form.get('calibers');
            let accum = 0;
            for (const item of items.controls) {
                const percentage = item.get('percentage').value ? item.get('percentage').value : 0;
                if (percentage) {
                    accum = accum + percentage;
                }
            }
            return accum < 100 || accum > 100 ? { wrongPercentage: true } : null;
        };
        /**
         * getTotal
         */
        this.getTotal = () => {
            const items = this.qualityForm.get('calibers');
            let accum = 0;
            for (const item of items.controls) {
                const percentage = item.get('percentage').value ? item.get('percentage').value : 0;
                if (percentage && percentage > 0) {
                    accum = accum + percentage;
                }
            }
            return accum;
        };
        /**
         * getSelectedQuality
         */
        this.getSelectedQuality = () => {
            if (this.qualities) {
                const id = this.qualityForm.get('quality.quality').value;
                const find = this.qualities.find(item => item.id === id);
                return find ? find.name : '';
            }
            return '';
        };
        /**
         * loadCalibers
         */
        this.loadCalibers = () => {
            this.calibers = this.storeService.getCalibers();
            this.qualities = this.storeService.getQualities();
            this.filteredCalibers = this.calibers.filter((item) => item.species === this.costCenter.species);
            const items = this.qualityForm.get('calibers');
            for (const item of this.filteredCalibers) {
                let find = null;
                if (this.qualityEstimateDetail) {
                    find = this.qualityEstimateDetail.find(detail => detail.caliber === item.id);
                }
                const newCaliber = this.formBuilder.group({
                    id: [find ? find.id : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    quality: [find ? find.qualityEstimate : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    caliber: [item.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    percentage: [{ value: find ? find.value : '', disabled: this.isView }, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)
                        ]],
                    temp: [1]
                });
                items.push(newCaliber);
            }
        };
    }
    ngOnInit() {
        this.userCompany = this.storeService.getActiveCompany();
        if (this.isView) {
            this.qualityForm = this.formBuilder.group({
                quality: this.formBuilder.group({
                    id: [this.qualityEstimate.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    costCenter: [this.costCenter.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    user: [this.userCompany.user, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    quality: [{ value: this.qualityEstimate.quality, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    exportPercentage: [{ value: this.qualityEstimate.exportPercentage, disabled: true }, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)
                        ]],
                    temp: [1]
                }),
                calibers: this.formBuilder.array([])
            }, { validator: this.validateCalibers });
        }
        else {
            this.qualityForm = this.formBuilder.group({
                quality: this.formBuilder.group({
                    id: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    costCenter: [this.costCenter.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    user: [this.userCompany.user, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    quality: [this.previous ? this.previous.quality : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    exportPercentage: [this.previous ? this.previous.exportPercentage : '', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)
                        ]],
                    temp: [1]
                }),
                calibers: this.formBuilder.array([])
            }, { validator: this.validateCalibers });
        }
        this.loadCalibers();
    }
    /**
     * storeQuality
     * @param data
     */
    storeQuality(data) {
        this.loaderService.startLoader('Guardando estimacion...');
        this.contractDetailService.storeQuality(data).subscribe(success => {
            this.isSaving = false;
            this.loaderService.stopLoader();
            this.closeModal(true);
        }, error => {
            this.isSaving = false;
            this.loaderService.stopLoader();
            this.httpService.errorHandler(error);
        });
    }
};
QualityEstimateFormComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"] },
    { type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncService"] },
    { type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QualityEstimateFormComponent.prototype, "costCenter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QualityEstimateFormComponent.prototype, "qualityEstimate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], QualityEstimateFormComponent.prototype, "qualityEstimateDetail", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], QualityEstimateFormComponent.prototype, "isView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QualityEstimateFormComponent.prototype, "previous", void 0);
QualityEstimateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quality-estimate-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quality-estimate-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quality-estimate-form.component.scss */ "./src/app/home-page/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"],
        _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncService"],
        _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]])
], QualityEstimateFormComponent);



/***/ }),

/***/ "./src/app/home-page/planning/quality-estimate/quality-estimate.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home-page/planning/quality-estimate/quality-estimate.module.ts ***!
  \********************************************************************************/
/*! exports provided: QualityEstimatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityEstimatePageModule", function() { return QualityEstimatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quality_estimate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quality-estimate.page */ "./src/app/home-page/planning/quality-estimate/quality-estimate.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quality-estimate-form/quality-estimate-form.component */ "./src/app/home-page/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts");






const routes = [
    {
        path: '',
        component: _quality_estimate_page__WEBPACK_IMPORTED_MODULE_3__["QualityEstimatePage"]
    }
];
let QualityEstimatePageModule = class QualityEstimatePageModule {
};
QualityEstimatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _quality_estimate_page__WEBPACK_IMPORTED_MODULE_3__["QualityEstimatePage"],
            _quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__["QualityEstimateFormComponent"]
        ],
        entryComponents: [
            _quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__["QualityEstimateFormComponent"]
        ]
    })
], QualityEstimatePageModule);



/***/ }),

/***/ "./src/app/home-page/planning/quality-estimate/quality-estimate.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home-page/planning/quality-estimate/quality-estimate.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9wbGFubmluZy9xdWFsaXR5LWVzdGltYXRlL3F1YWxpdHktZXN0aW1hdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home-page/planning/quality-estimate/quality-estimate.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home-page/planning/quality-estimate/quality-estimate.page.ts ***!
  \******************************************************************************/
/*! exports provided: QualityEstimatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityEstimatePage", function() { return QualityEstimatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contract-detail/contract-detail.service */ "./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quality-estimate-form/quality-estimate-form.component */ "./src/app/home-page/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/alert/alert.service */ "./src/app/shared/services/alert/alert.service.ts");
/* harmony import */ var _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/network/network.service */ "./src/app/shared/services/network/network.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");











let QualityEstimatePage = class QualityEstimatePage {
    constructor(router, contractDetailService, modalController, alertService, httpService, loaderService, networkService, storeService) {
        this.router = router;
        this.contractDetailService = contractDetailService;
        this.modalController = modalController;
        this.alertService = alertService;
        this.httpService = httpService;
        this.loaderService = loaderService;
        this.networkService = networkService;
        this.storeService = storeService;
        /**
         * checkButton
         */
        this.checkButton = () => {
            return this.currentUrl === '/home-page/quality-estimate';
        };
        /**
         * openForm
         */
        this.openForm = (qualityEstimate = null) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__["QualityEstimateFormComponent"],
                componentProps: {
                    costCenter: this.costCenter,
                    qualityEstimate,
                    qualityEstimateDetail: qualityEstimate ? this.qualityEstimateDetail.filter(item => item.qualityEstimate === qualityEstimate.id) : [],
                    isView: qualityEstimate !== null,
                    previous: this.qualityEstimate.length > 0 ? this.qualityEstimate[0] : null
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
         * searchQuality
         * @param search
         */
        this.searchQuality = (search) => {
            if (search) {
                this.filteredQualityEstimate = this.qualityEstimate.filter(item => {
                    return (item.userName.toLowerCase().includes(search.toLowerCase()) ||
                        item.qualityName.toLowerCase().includes(search.toLowerCase()) ||
                        item.exportPercentage === parseInt(search, 10));
                });
            }
            else {
                this.filteredQualityEstimate = this.qualityEstimate;
            }
        };
        /**
         * cancelSearch
         */
        this.cancelSearch = () => {
            this.filteredQualityEstimate = this.qualityEstimate;
        };
        /**
         * viewQuality
         * @param qualityEstimate
         */
        this.viewQuality = (qualityEstimate) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.openForm(qualityEstimate);
        });
        /**
         * deleteQuality
         * @param qualityEstimate
         */
        this.deleteQuality = (qualityEstimate) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = yield this.alertService.confirmAlert('Desea borrar esta estimacion de calidad?');
            if (response) {
                const newQuality = Object.assign({}, qualityEstimate, { id: -qualityEstimate.id });
                delete this.costCenter.active;
                const data = {
                    costCenter: this.costCenter,
                    quality: newQuality
                };
                this.storeQuality(data);
            }
        });
        /**
         * reloadList
         */
        this.reloadList = () => {
            this.loaderService.startLoader('Cargando estimaciones de calidad');
            this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString()).subscribe((success) => {
                this.storeService.setContractData(success.data);
                this.loaderService.stopLoader();
            }, error => {
                this.loaderService.stopLoader();
            });
        };
        /**
         * getItemDetails
         * @param id
         */
        this.getItemDetails = (id) => {
            return this.qualityEstimateDetail.filter(item => item.qualityEstimate === id);
        };
        /**
         * storeQuality
         * @param data
         */
        this.storeQuality = (data) => {
            this.loaderService.startLoader('Borrando estimacion de calidad');
            this.contractDetailService.storeQuality(data).subscribe(success => {
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
            this.qualityEstimate = this.storeService.getQualityEstimate();
            this.filteredQualityEstimate = this.storeService.getQualityEstimate();
            this.qualityEstimateDetail = this.storeService.getQualityEstimateDetail();
        });
    }
    ngOnDestroy() {
        this.isOnline$.unsubscribe();
        this.router$.unsubscribe();
        this.store$.unsubscribe();
    }
};
QualityEstimatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_3__["ContractDetailService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"] }
];
QualityEstimatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quality-estimate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quality-estimate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/quality-estimate/quality-estimate.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quality-estimate.page.scss */ "./src/app/home-page/planning/quality-estimate/quality-estimate.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_3__["ContractDetailService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
        _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]])
], QualityEstimatePage);



/***/ })

}]);
//# sourceMappingURL=planning-quality-estimate-quality-estimate-module-es2015.js.map