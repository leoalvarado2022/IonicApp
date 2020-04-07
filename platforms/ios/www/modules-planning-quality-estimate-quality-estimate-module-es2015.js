(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-planning-quality-estimate-quality-estimate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\" color=\"secondary\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\" style=\"color:white;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ qualityEstimate ? 'Ver' : 'Registrar' }} Calidad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"qualityForm\">\n    <ng-container formGroupName=\"quality\">\n      <ion-item>\n        <ion-label position=\"fixed\">Calidad</ion-label>\n        <ion-select [interfaceOptions]=\"customActionSheetOptions\" [selectedText]=\"getSelectedQuality()\" cancelText=\"Cancelar\" formControlName=\"quality\" interface=\"action-sheet\">\n          <ion-select-option *ngFor=\"let q of qualities\" [value]=\"q.id\">\n            {{ q.name }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ng-container *ngIf=\"qualityForm.get(['quality', 'quality']).hasError('required')\">\n        <span class=\"errorMsg\">Seleccione la Calidad</span>\n      </ng-container>\n\n      <ion-item>\n        <ion-label position=\"fixed\">% de Exportación</ion-label>\n        <ion-input clearInput formControlName=\"exportPercentage\" placeholder=\"Ingrese el %\" type=\"number\"></ion-input>\n      </ion-item>\n\n      <ng-container *ngIf=\"qualityForm.get(['quality', 'exportPercentage']).hasError('max')\">\n        <span class=\"errorMsg\">El porcentaje maximo es 100</span>\n      </ng-container>\n      <ng-container *ngIf=\"qualityForm.get(['quality', 'exportPercentage']).hasError('min')\">\n        <span class=\"errorMsg\">El porcentaje minimo es 0</span>\n      </ng-container>\n\n    </ng-container>\n\n    <ng-container formArrayName=\"calibers\">\n      <ion-list>\n        <ion-list-header>\n          Datos Calibres\n        </ion-list-header>\n\n        <ng-container *ngFor=\"let item of qualityForm.get('calibers')['controls']; let index = index\" [formGroupName]=\"index.toString()\">\n          <ion-item>\n            <ion-label position=\"fixed\">{{ getCaliberName(item) }}</ion-label>\n            <ion-input clearInput formControlName=\"percentage\" placeholder=\"Ingrese el %\" type=\"number\"></ion-input>\n          </ion-item>\n          <ng-container *ngIf=\"item.get('percentage').hasError('max')\">\n            <span class=\"errorMsg\">El porcentaje maximo es 100</span>\n          </ng-container>\n          <ng-container *ngIf=\"item.get('percentage').hasError('min')\">\n            <span class=\"errorMsg\">El porcentaje minimo es 0</span>\n          </ng-container>\n        </ng-container>\n\n        <ion-item>\n          <ion-label position=\"fixed\">Total</ion-label>\n          <ion-input [disabled]=\"isView\" [ngClass]=\"{ 'total-padding': !isView }\" [value]=\"getTotal()\" clearInput readonly=\"true\" type=\"number\"></ion-input>\n        </ion-item>\n\n        <ng-container *ngIf=\"!isView && qualityForm.hasError('wrongPercentage')\">\n          <span class=\"errorMsg\">El porcentaje total debe sumar 100%</span>\n        </ng-container>\n\n      </ion-list>\n    </ng-container>\n\n    <br><br>\n    <ng-container *ngIf=\"!qualityEstimate\">\n      <ion-button (click)=\"submit()\" [disabled]=\"qualityForm.invalid || isSaving\" color=\"primary\" expand=\"block\">\n        Guardar\n      </ion-button>\n    </ng-container>\n\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"white\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"white\">\n      <strong>Estimación de Calidad</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-searchbar\n  placeholder=\"Buscar...\"\n  (ionChange)=\"searchQuality($event.target.value)\"\n  (ionClear)=\"cancelSearch()\"\n  animated\n  class=\"production\"\n  showCancelButton=\"never\">\n</ion-searchbar>\n\n<ion-content class=\"content\">\n\n  <ng-container *ngFor=\"let quality of filteredQualityEstimate; let index = index\">\n    <div class=\"card-sli\">\n      <div class=\"card-sli-back\">\n        <app-quality-estimate-item\n          (itemDelete)=\"deleteQuality(quality)\"\n          (itemSelected)=\"viewQuality(quality)\"\n          [costCenter]=\"costCenter\"\n          [details]=\"getItemDetails(quality.id)\"\n          [isOld]=\"index > 0 \"\n          [item]=\"quality\"\n          [slideDisabled]=\"false\">\n        </app-quality-estimate-item>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"checkButton()\">\n    <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\n      <ion-fab-button (click)=\"openForm()\" [disabled]=\"!costCenter || !isOnline\" color=\"success\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ng-container>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".errorMsg {\n  color: red;\n  padding-left: 15px;\n}\n\nion-item ion-label {\n  min-width: 50%;\n}\n\nion-item ion-input {\n  text-align: right;\n}\n\n.total-padding {\n  --padding-end: 37px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL3BsYW5uaW5nL3F1YWxpdHktZXN0aW1hdGUvcXVhbGl0eS1lc3RpbWF0ZS1mb3JtL3F1YWxpdHktZXN0aW1hdGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbGFubmluZy9xdWFsaXR5LWVzdGltYXRlL3F1YWxpdHktZXN0aW1hdGUtZm9ybS9xdWFsaXR5LWVzdGltYXRlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURHRTtFQUNFLGNBQUE7QUNBSjs7QURHRTtFQUNFLGlCQUFBO0FDREo7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbGFubmluZy9xdWFsaXR5LWVzdGltYXRlL3F1YWxpdHktZXN0aW1hdGUtZm9ybS9xdWFsaXR5LWVzdGltYXRlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3JNc2cge1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgaW9uLWxhYmVsIHtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgfVxuXG4gIGlvbi1pbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cblxuLnRvdGFsLXBhZGRpbmcge1xuICAtLXBhZGRpbmctZW5kOiAzN3B4O1xufVxuIiwiLmVycm9yTXNnIHtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG5pb24taXRlbSBpb24tbGFiZWwge1xuICBtaW4td2lkdGg6IDUwJTtcbn1cbmlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udG90YWwtcGFkZGluZyB7XG4gIC0tcGFkZGluZy1lbmQ6IDM3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts ***!
  \************************************************************************************************************/
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
/* harmony import */ var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/contract-detail/contract-detail.service */ "./src/app/modules/planning/services/contract-detail/contract-detail.service.ts");
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quality-estimate-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quality-estimate-form.component.scss */ "./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.scss")).default]
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

/***/ "./src/app/modules/planning/quality-estimate/quality-estimate.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/planning/quality-estimate/quality-estimate.module.ts ***!
  \******************************************************************************/
/*! exports provided: QualityEstimatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityEstimatePageModule", function() { return QualityEstimatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quality_estimate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quality-estimate.page */ "./src/app/modules/planning/quality-estimate/quality-estimate.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quality-estimate-form/quality-estimate-form.component */ "./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts");






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

/***/ "./src/app/modules/planning/quality-estimate/quality-estimate.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/planning/quality-estimate/quality-estimate.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGxhbm5pbmcvcXVhbGl0eS1lc3RpbWF0ZS9xdWFsaXR5LWVzdGltYXRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/planning/quality-estimate/quality-estimate.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/planning/quality-estimate/quality-estimate.page.ts ***!
  \****************************************************************************/
/*! exports provided: QualityEstimatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityEstimatePage", function() { return QualityEstimatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contract-detail/contract-detail.service */ "./src/app/modules/planning/services/contract-detail/contract-detail.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quality-estimate-form/quality-estimate-form.component */ "./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts");
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quality-estimate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quality-estimate.page.scss */ "./src/app/modules/planning/quality-estimate/quality-estimate.page.scss")).default]
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
//# sourceMappingURL=modules-planning-quality-estimate-quality-estimate-module-es2015.js.map