function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-planning-quality-estimate-quality-estimate-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPlanningQualityEstimateQualityEstimateFormQualityEstimateFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\" color=\"secondary\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\" style=\"color:white;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ qualityEstimate ? 'Ver' : 'Registrar' }} Calidad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"qualityForm\">\n    <ng-container formGroupName=\"quality\">\n      <ion-item>\n        <ion-label position=\"fixed\">Calidad</ion-label>\n        <ion-select [interfaceOptions]=\"customActionSheetOptions\" [selectedText]=\"getSelectedQuality()\" cancelText=\"Cancelar\" formControlName=\"quality\" interface=\"action-sheet\">\n          <ion-select-option *ngFor=\"let q of qualities\" [value]=\"q.id\">\n            {{ q.name }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ng-container *ngIf=\"qualityForm.get(['quality', 'quality']).hasError('required')\">\n        <span class=\"errorMsg\">Seleccione la Calidad</span>\n      </ng-container>\n\n      <ion-item>\n        <ion-label position=\"fixed\">% de Exportación</ion-label>\n        <ion-input clearInput formControlName=\"exportPercentage\" placeholder=\"Ingrese el %\" type=\"number\"></ion-input>\n      </ion-item>\n\n      <ng-container *ngIf=\"qualityForm.get(['quality', 'exportPercentage']).hasError('max')\">\n        <span class=\"errorMsg\">El porcentaje maximo es 100</span>\n      </ng-container>\n      <ng-container *ngIf=\"qualityForm.get(['quality', 'exportPercentage']).hasError('min')\">\n        <span class=\"errorMsg\">El porcentaje minimo es 0</span>\n      </ng-container>\n\n    </ng-container>\n\n    <ng-container formArrayName=\"calibers\">\n      <ion-list>\n        <ion-list-header>\n          Datos Calibres\n        </ion-list-header>\n\n        <ng-container *ngFor=\"let item of qualityForm.get('calibers')['controls']; let index = index\" [formGroupName]=\"index.toString()\">\n          <ion-item>\n            <ion-label position=\"fixed\">{{ getCaliberName(item) }}</ion-label>\n            <ion-input clearInput formControlName=\"percentage\" placeholder=\"Ingrese el %\" type=\"number\"></ion-input>\n          </ion-item>\n          <ng-container *ngIf=\"item.get('percentage').hasError('max')\">\n            <span class=\"errorMsg\">El porcentaje maximo es 100</span>\n          </ng-container>\n          <ng-container *ngIf=\"item.get('percentage').hasError('min')\">\n            <span class=\"errorMsg\">El porcentaje minimo es 0</span>\n          </ng-container>\n        </ng-container>\n\n        <ion-item>\n          <ion-label position=\"fixed\">Total</ion-label>\n          <ion-input [disabled]=\"isView\" [ngClass]=\"{ 'total-padding': !isView }\" [value]=\"getTotal()\" clearInput readonly=\"true\" type=\"number\"></ion-input>\n        </ion-item>\n\n        <ng-container *ngIf=\"!isView && qualityForm.hasError('wrongPercentage')\">\n          <span class=\"errorMsg\">El porcentaje total debe sumar 100%</span>\n        </ng-container>\n\n      </ion-list>\n    </ng-container>\n\n    <br><br>\n    <ng-container *ngIf=\"!qualityEstimate\">\n      <ion-button (click)=\"submit()\" [disabled]=\"qualityForm.invalid || isSaving\" color=\"primary\" expand=\"block\">\n        Guardar\n      </ion-button>\n    </ng-container>\n\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPlanningQualityEstimateQualityEstimatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"white\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"white\">\n      <strong>Estimación de Calidad</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-searchbar\n  placeholder=\"Buscar...\"\n  (ionChange)=\"searchQuality($event.target.value)\"\n  (ionClear)=\"cancelSearch()\"\n  animated\n  class=\"production\"\n  showCancelButton=\"never\">\n</ion-searchbar>\n\n<ion-content class=\"content\">\n\n  <ng-container *ngFor=\"let quality of filteredQualityEstimate; let index = index\">\n    <div class=\"card-sli\">\n      <div class=\"card-sli-back\">\n        <app-quality-estimate-item\n          (itemDelete)=\"deleteQuality(quality)\"\n          (itemSelected)=\"viewQuality(quality)\"\n          [costCenter]=\"costCenter\"\n          [details]=\"getItemDetails(quality.id)\"\n          [isOld]=\"index > 0 \"\n          [item]=\"quality\"\n          [slideDisabled]=\"false\">\n        </app-quality-estimate-item>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"checkButton()\">\n    <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\n      <ion-fab-button (click)=\"openForm()\" [disabled]=\"!costCenter || !isOnline\" color=\"success\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ng-container>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.scss":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPlanningQualityEstimateQualityEstimateFormQualityEstimateFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".errorMsg {\n  color: red;\n  padding-left: 15px;\n}\n\nion-item ion-label {\n  min-width: 50%;\n}\n\nion-item ion-input {\n  text-align: right;\n}\n\n.total-padding {\n  --padding-end: 37px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL3BsYW5uaW5nL3F1YWxpdHktZXN0aW1hdGUvcXVhbGl0eS1lc3RpbWF0ZS1mb3JtL3F1YWxpdHktZXN0aW1hdGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbGFubmluZy9xdWFsaXR5LWVzdGltYXRlL3F1YWxpdHktZXN0aW1hdGUtZm9ybS9xdWFsaXR5LWVzdGltYXRlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURHRTtFQUNFLGNBQUE7QUNBSjs7QURHRTtFQUNFLGlCQUFBO0FDREo7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbGFubmluZy9xdWFsaXR5LWVzdGltYXRlL3F1YWxpdHktZXN0aW1hdGUtZm9ybS9xdWFsaXR5LWVzdGltYXRlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3JNc2cge1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgaW9uLWxhYmVsIHtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgfVxuXG4gIGlvbi1pbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cblxuLnRvdGFsLXBhZGRpbmcge1xuICAtLXBhZGRpbmctZW5kOiAzN3B4O1xufVxuIiwiLmVycm9yTXNnIHtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG5pb24taXRlbSBpb24tbGFiZWwge1xuICBtaW4td2lkdGg6IDUwJTtcbn1cbmlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udG90YWwtcGFkZGluZyB7XG4gIC0tcGFkZGluZy1lbmQ6IDM3cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: QualityEstimateFormComponent */

  /***/
  function srcAppModulesPlanningQualityEstimateQualityEstimateFormQualityEstimateFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QualityEstimateFormComponent", function () {
      return QualityEstimateFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/contract-detail/contract-detail.service */
    "./src/app/modules/planning/services/contract-detail/contract-detail.service.ts");
    /* harmony import */


    var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/sync/sync.service */
    "./src/app/shared/services/sync/sync.service.ts");
    /* harmony import */


    var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var QualityEstimateFormComponent =
    /*#__PURE__*/
    function () {
      function QualityEstimateFormComponent(modalController, formBuilder, authService, contractDetailService, syncService, toastService, httpService, loaderService, storeService) {
        var _this = this;

        _classCallCheck(this, QualityEstimateFormComponent);

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

        this.closeModal = function () {
          var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          _this.qualityForm.reset();

          _this.modalController.dismiss(status);
        };
        /**
         * submit
         */


        this.submit = function () {
          if (_this.qualityForm.valid && !_this.isSaving) {
            _this.isSaving = true;
            delete _this.costCenter.active;
            var data = Object.assign({}, _this.qualityForm.value, {
              costCenter: _this.costCenter
            });
            data.calibers = data.calibers.map(function (caliber) {
              return Object.assign({}, caliber, {
                percentage: caliber.percentage === '' ? 0 : caliber.percentage
              });
            }).filter(function (caliber) {
              return caliber.percentage > 0;
            });

            _this.storeQuality(data);
          } else {
            _this.isSaving = false;
          }
        };
        /**
         * getCaliberName
         * @param item
         */


        this.getCaliberName = function (item) {
          var caliber = _this.calibers.find(function (caliber) {
            return caliber.id === item.get('caliber').value;
          });

          return caliber ? caliber.name : 'NOMBRE CALIBRE';
        };
        /**
         * validateCalibers
         * @param form
         */


        this.validateCalibers = function (form) {
          var items = form.get('calibers');
          var accum = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = items.controls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              var percentage = item.get('percentage').value ? item.get('percentage').value : 0;

              if (percentage) {
                accum = accum + percentage;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return accum < 100 || accum > 100 ? {
            wrongPercentage: true
          } : null;
        };
        /**
         * getTotal
         */


        this.getTotal = function () {
          var items = _this.qualityForm.get('calibers');

          var accum = 0;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = items.controls[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var item = _step2.value;
              var percentage = item.get('percentage').value ? item.get('percentage').value : 0;

              if (percentage && percentage > 0) {
                accum = accum + percentage;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return accum;
        };
        /**
         * getSelectedQuality
         */


        this.getSelectedQuality = function () {
          if (_this.qualities) {
            var id = _this.qualityForm.get('quality.quality').value;

            var find = _this.qualities.find(function (item) {
              return item.id === id;
            });

            return find ? find.name : '';
          }

          return '';
        };
        /**
         * loadCalibers
         */


        this.loadCalibers = function () {
          _this.calibers = _this.storeService.getCalibers();
          _this.qualities = _this.storeService.getQualities();
          _this.filteredCalibers = _this.calibers.filter(function (item) {
            return item.species === _this.costCenter.species;
          });

          var items = _this.qualityForm.get('calibers');

          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            var _loop = function _loop() {
              var item = _step3.value;
              var find = null;

              if (_this.qualityEstimateDetail) {
                find = _this.qualityEstimateDetail.find(function (detail) {
                  return detail.caliber === item.id;
                });
              }

              var newCaliber = _this.formBuilder.group({
                id: [find ? find.id : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                quality: [find ? find.qualityEstimate : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                caliber: [item.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                percentage: [{
                  value: find ? find.value : '',
                  disabled: _this.isView
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
                temp: [1]
              });

              items.push(newCaliber);
            };

            for (var _iterator3 = _this.filteredCalibers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        };
      }

      _createClass(QualityEstimateFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userCompany = this.storeService.getActiveCompany();

          if (this.isView) {
            this.qualityForm = this.formBuilder.group({
              quality: this.formBuilder.group({
                id: [this.qualityEstimate.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                costCenter: [this.costCenter.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                user: [this.userCompany.user, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                quality: [{
                  value: this.qualityEstimate.quality,
                  disabled: true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                exportPercentage: [{
                  value: this.qualityEstimate.exportPercentage,
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
                temp: [1]
              }),
              calibers: this.formBuilder.array([])
            }, {
              validator: this.validateCalibers
            });
          } else {
            this.qualityForm = this.formBuilder.group({
              quality: this.formBuilder.group({
                id: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                costCenter: [this.costCenter.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                user: [this.userCompany.user, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                quality: [this.previous ? this.previous.quality : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                exportPercentage: [this.previous ? this.previous.exportPercentage : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
                temp: [1]
              }),
              calibers: this.formBuilder.array([])
            }, {
              validator: this.validateCalibers
            });
          }

          this.loadCalibers();
        }
        /**
         * storeQuality
         * @param data
         */

      }, {
        key: "storeQuality",
        value: function storeQuality(data) {
          var _this2 = this;

          this.loaderService.startLoader('Guardando estimacion...');
          this.contractDetailService.storeQuality(data).subscribe(function (success) {
            _this2.isSaving = false;

            _this2.loaderService.stopLoader();

            _this2.closeModal(true);
          }, function (error) {
            _this2.isSaving = false;

            _this2.loaderService.stopLoader();

            _this2.httpService.errorHandler(error);
          });
        }
      }]);

      return QualityEstimateFormComponent;
    }();

    QualityEstimateFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"]
      }, {
        type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncService"]
      }, {
        type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QualityEstimateFormComponent.prototype, "costCenter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QualityEstimateFormComponent.prototype, "qualityEstimate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], QualityEstimateFormComponent.prototype, "qualityEstimateDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], QualityEstimateFormComponent.prototype, "isView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QualityEstimateFormComponent.prototype, "previous", void 0);
    QualityEstimateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quality-estimate-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quality-estimate-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quality-estimate-form.component.scss */
      "./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"], _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncService"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]])], QualityEstimateFormComponent);
    /***/
  },

  /***/
  "./src/app/modules/planning/quality-estimate/quality-estimate.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/planning/quality-estimate/quality-estimate.module.ts ***!
    \******************************************************************************/

  /*! exports provided: QualityEstimatePageModule */

  /***/
  function srcAppModulesPlanningQualityEstimateQualityEstimateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QualityEstimatePageModule", function () {
      return QualityEstimatePageModule;
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


    var _quality_estimate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quality-estimate.page */
    "./src/app/modules/planning/quality-estimate/quality-estimate.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quality-estimate-form/quality-estimate-form.component */
    "./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts");

    var routes = [{
      path: '',
      component: _quality_estimate_page__WEBPACK_IMPORTED_MODULE_3__["QualityEstimatePage"]
    }];

    var QualityEstimatePageModule = function QualityEstimatePageModule() {
      _classCallCheck(this, QualityEstimatePageModule);
    };

    QualityEstimatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_quality_estimate_page__WEBPACK_IMPORTED_MODULE_3__["QualityEstimatePage"], _quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__["QualityEstimateFormComponent"]],
      entryComponents: [_quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__["QualityEstimateFormComponent"]]
    })], QualityEstimatePageModule);
    /***/
  },

  /***/
  "./src/app/modules/planning/quality-estimate/quality-estimate.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/planning/quality-estimate/quality-estimate.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPlanningQualityEstimateQualityEstimatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGxhbm5pbmcvcXVhbGl0eS1lc3RpbWF0ZS9xdWFsaXR5LWVzdGltYXRlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/planning/quality-estimate/quality-estimate.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/planning/quality-estimate/quality-estimate.page.ts ***!
    \****************************************************************************/

  /*! exports provided: QualityEstimatePage */

  /***/
  function srcAppModulesPlanningQualityEstimateQualityEstimatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QualityEstimatePage", function () {
      return QualityEstimatePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quality-estimate-form/quality-estimate-form.component */
    "./src/app/modules/planning/quality-estimate/quality-estimate-form/quality-estimate-form.component.ts");
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

    var QualityEstimatePage =
    /*#__PURE__*/
    function () {
      function QualityEstimatePage(router, contractDetailService, modalController, alertService, httpService, loaderService, networkService, storeService) {
        var _this3 = this;

        _classCallCheck(this, QualityEstimatePage);

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

        this.checkButton = function () {
          return _this3.currentUrl === '/home-page/quality-estimate';
        };
        /**
         * openForm
         */


        this.openForm = function () {
          var qualityEstimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
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
                      component: _quality_estimate_form_quality_estimate_form_component__WEBPACK_IMPORTED_MODULE_5__["QualityEstimateFormComponent"],
                      componentProps: {
                        costCenter: this.costCenter,
                        qualityEstimate: qualityEstimate,
                        qualityEstimateDetail: qualityEstimate ? this.qualityEstimateDetail.filter(function (item) {
                          return item.qualityEstimate === qualityEstimate.id;
                        }) : [],
                        isView: qualityEstimate !== null,
                        previous: this.qualityEstimate.length > 0 ? this.qualityEstimate[0] : null
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
         * searchQuality
         * @param search
         */


        this.searchQuality = function (search) {
          if (search) {
            _this3.filteredQualityEstimate = _this3.qualityEstimate.filter(function (item) {
              return item.userName.toLowerCase().includes(search.toLowerCase()) || item.qualityName.toLowerCase().includes(search.toLowerCase()) || item.exportPercentage === parseInt(search, 10);
            });
          } else {
            _this3.filteredQualityEstimate = _this3.qualityEstimate;
          }
        };
        /**
         * cancelSearch
         */


        this.cancelSearch = function () {
          _this3.filteredQualityEstimate = _this3.qualityEstimate;
        };
        /**
         * viewQuality
         * @param qualityEstimate
         */


        this.viewQuality = function (qualityEstimate) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.openForm(qualityEstimate);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        };
        /**
         * deleteQuality
         * @param qualityEstimate
         */


        this.deleteQuality = function (qualityEstimate) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var response, newQuality, data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertService.confirmAlert('Desea borrar esta estimacion de calidad?');

                  case 2:
                    response = _context3.sent;

                    if (response) {
                      newQuality = Object.assign({}, qualityEstimate, {
                        id: -qualityEstimate.id
                      });
                      delete this.costCenter.active;
                      data = {
                        costCenter: this.costCenter,
                        quality: newQuality
                      };
                      this.storeQuality(data);
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
          _this3.loaderService.startLoader('Cargando estimaciones de calidad');

          _this3.contractDetailService.getCostCenterDetail(_this3.costCenter.id.toString()).subscribe(function (success) {
            _this3.storeService.setContractData(success.data);

            _this3.loaderService.stopLoader();
          }, function (error) {
            _this3.loaderService.stopLoader();
          });
        };
        /**
         * getItemDetails
         * @param id
         */


        this.getItemDetails = function (id) {
          return _this3.qualityEstimateDetail.filter(function (item) {
            return item.qualityEstimate === id;
          });
        };
        /**
         * storeQuality
         * @param data
         */


        this.storeQuality = function (data) {
          _this3.loaderService.startLoader('Borrando estimacion de calidad');

          _this3.contractDetailService.storeQuality(data).subscribe(function (success) {
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

      _createClass(QualityEstimatePage, [{
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
            _this5.qualityEstimate = _this5.storeService.getQualityEstimate();
            _this5.filteredQualityEstimate = _this5.storeService.getQualityEstimate();
            _this5.qualityEstimateDetail = _this5.storeService.getQualityEstimateDetail();
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

      return QualityEstimatePage;
    }();

    QualityEstimatePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_3__["ContractDetailService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
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

    QualityEstimatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quality-estimate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quality-estimate.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/planning/quality-estimate/quality-estimate.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quality-estimate.page.scss */
      "./src/app/modules/planning/quality-estimate/quality-estimate.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_3__["ContractDetailService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"], _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]])], QualityEstimatePage);
    /***/
  }
}]);
//# sourceMappingURL=modules-planning-quality-estimate-quality-estimate-module-es5.js.map