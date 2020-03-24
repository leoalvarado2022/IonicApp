function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-notes-notes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes-form/notes-form.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes-form/notes-form.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagePlanningNotesNotesFormNotesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\" color=\"secondary\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\" style=\"color:white;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ note ? 'Ver' : 'Registrar'}} Nota</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"noteForm\">\n    <ng-container *ngIf=\"!note && detectPlatformService.hasCordova\">\n      <ion-item>\n        <ion-button (click)=\"openCamera()\" slot=\"start\">\n          <ion-icon name=\"camera\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n        <ion-label>Imagen</ion-label>\n        <ion-button (click)=\"openGallery()\" slot=\"end\">\n          <ion-icon name=\"image\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ng-container>\n\n    <div *ngIf=\"loadingImg\" class=\"loadingImg\">\n      Cargando Imagen...\n    </div>\n\n    <div *ngIf=\"imageSrc\">\n      <ion-img [src]=\"imageSrc\"></ion-img>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\">Nota</ion-label>\n      <ion-textarea cols=\"5\" formControlName=\"note\" placeholder=\"Escriba la nota...\" rows=\"5\"></ion-textarea>\n      <ng-container *ngIf=\"noteForm.get('note').dirty && noteForm.get('note').hasError('required')\">\n        <span class=\"errorMsg\">Ingrese la nota</span>\n      </ng-container>\n    </ion-item>\n\n    <ng-container *ngIf=\"!note\">\n      <ion-button (click)=\"submit()\" [disabled]=\"noteForm.invalid || isSaving \" color=\"primary\" expand=\"block\">\n        Guardar\n      </ion-button>\n    </ng-container>\n\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagePlanningNotesNotesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"white\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"white\">\n      <strong>Notas</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-searchbar placeholder=\"Buscar...\" (ionChange)=\"searchNote($event.target.value)\" (ionClear)=\"cancelSearch()\" animated class=\"production\"\n               showCancelButton=\"never\"></ion-searchbar>\n\n<ion-content class=\"content\">\n  <ng-container *ngFor=\"let item of filteredNotes\">\n    <div class=\"card-sli\">\n      <div class=\"card-sli-back\">\n        <app-note-item\n          (deleteNote)=\"deleteNoteConfirm($event)\"\n          (noteClicked)=\"viewNote(item)\"\n          [item]=\"item\"\n          [slideDisabled]=\"false\"\n        ></app-note-item>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"checkButton()\">\n    <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\n      <ion-fab-button (click)=\"openForm()\" [disabled]=\"!costCenter || !isOnline\" color=\"danger\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ng-container>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home-page/planning/notes/notes-form/notes-form.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/home-page/planning/notes/notes-form/notes-form.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagePlanningNotesNotesFormNotesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-textarea textarea {\n  min-height: 50px;\n}\n\n.loadingImg {\n  text-align: center;\n  font-size: 1em;\n  padding-top: 2em;\n  padding-bottom: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvbm90ZXMvbm90ZXMtZm9ybS9ub3Rlcy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvbm90ZXMvbm90ZXMtZm9ybS9ub3Rlcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUNBSjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9wbGFubmluZy9ub3Rlcy9ub3Rlcy1mb3JtL25vdGVzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dGFyZWEge1xuICB0ZXh0YXJlYSB7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgfVxufVxuXG4ubG9hZGluZ0ltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmctdG9wOiAyZW07XG4gIHBhZGRpbmctYm90dG9tOiAyZW07XG59XG4iLCJpb24tdGV4dGFyZWEgdGV4dGFyZWEge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9hZGluZ0ltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmctdG9wOiAyZW07XG4gIHBhZGRpbmctYm90dG9tOiAyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home-page/planning/notes/notes-form/notes-form.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/home-page/planning/notes/notes-form/notes-form.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: NotesFormComponent */

  /***/
  function srcAppHomePagePlanningNotesNotesFormNotesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesFormComponent", function () {
      return NotesFormComponent;
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


    var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/contract-detail/contract-detail.service */
    "./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts");
    /* harmony import */


    var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _shared_services_detect_platform_detect_platform_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/detect-platform/detect-platform.service */
    "./src/app/shared/services/detect-platform/detect-platform.service.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/services/camera/camera.service */
    "./src/app/shared/services/camera/camera.service.ts");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var NotesFormComponent =
    /*#__PURE__*/
    function () {
      function NotesFormComponent(modalController, formBuilder, authService, httpService, contractDetailService, toastService, detectPlatformService, loaderService, cameraService, storeService) {
        var _this = this;

        _classCallCheck(this, NotesFormComponent);

        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.httpService = httpService;
        this.contractDetailService = contractDetailService;
        this.toastService = toastService;
        this.detectPlatformService = detectPlatformService;
        this.loaderService = loaderService;
        this.cameraService = cameraService;
        this.storeService = storeService;
        this.note = null;
        this.imageSrc = '';
        this.isSaving = false;
        this.loadingImg = false;
        /**
         * closeModal
         */

        this.closeModal = function () {
          var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          _this.noteForm.reset();

          _this.modalController.dismiss(status);
        };
        /**
         * submit
         */


        this.submit = function () {
          if ((_this.noteForm.get('note').value || _this.noteForm.get('image').value) && !_this.isSaving) {
            var note = Object.assign({}, _this.noteForm.value);
            _this.isSaving = true;

            _this.storeNote(note);
          } else {
            _this.isSaving = false;

            _this.toastService.warningToast('Debe ingresar la nota o la imagen');
          }
        };
        /**
         * openCamera
         */


        this.openCamera = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var image;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.cameraService.openCamera();

                  case 2:
                    image = _context.sent;

                    if (image) {
                      this.getImage(image);
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        };
        /**
         * openGallery
         */


        this.openGallery = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var image;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.cameraService.openGallery();

                  case 2:
                    image = _context2.sent;

                    if (image) {
                      this.getImage(image);
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        };
        /**
         * loadBigImage
         */


        this.loadBigImage = function () {
          if (_this.note && _this.note.image) {
            _this.loadingImg = true;

            _this.contractDetailService.getNoteImage(_this.note.id.toString()).subscribe(function (success) {
              _this.imageSrc = 'data:image/jpeg;base64,' + success.image;
              _this.loadingImg = false;
            }, function (error) {
              _this.loadingImg = false;

              _this.httpService.errorHandler(error);
            });
          }
        };
        /**
         * storeNote
         * @param data
         */


        this.storeNote = function (data) {
          _this.loaderService.startLoader('Guardando nota');

          _this.contractDetailService.storeNote(data).subscribe(function (success) {
            _this.isSaving = false;

            _this.loaderService.stopLoader();

            _this.closeModal(true);
          }, function (error) {
            _this.isSaving = false;

            _this.loaderService.stopLoader();

            _this.httpService.errorHandler(error);
          });
        };
        /**
         * getImage
         * @param image
         */


        this.getImage = function (image) {
          var imageUrl = image;
          _this.imageSrc = "data:image/jpeg;base64,".concat(image);

          _this.noteForm.patchValue({
            image: imageUrl
          });

          _this.noteForm.updateValueAndValidity();
        };
      }

      _createClass(NotesFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userCompany = this.storeService.getActiveCompany();
          this.noteForm = this.formBuilder.group({
            id: [this.note ? this.note.id : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            costCenter: [this.costCenter.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            user: [this.userCompany.user, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            note: [{
              value: this.note ? this.note.note : '',
              disabled: !!this.note
            }],
            image: [{
              value: this.note ? this.note.image : '',
              disabled: !!this.note
            }]
          }); // this.imageSrc = this.note && this.note.image ? 'data:image/jpeg;base64,' + this.note.image : '';
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.loadBigImage();
        }
      }]);

      return NotesFormComponent;
    }();

    NotesFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]
      }, {
        type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"]
      }, {
        type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }, {
        type: _shared_services_detect_platform_detect_platform_service__WEBPACK_IMPORTED_MODULE_7__["DetectPlatformService"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]
      }, {
        type: _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_10__["CameraService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NotesFormComponent.prototype, "costCenter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NotesFormComponent.prototype, "note", void 0);
    NotesFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notes-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notes-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes-form/notes-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notes-form.component.scss */
      "./src/app/home-page/planning/notes/notes-form/notes-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _shared_services_detect_platform_detect_platform_service__WEBPACK_IMPORTED_MODULE_7__["DetectPlatformService"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"], _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_10__["CameraService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"]])], NotesFormComponent);
    /***/
  },

  /***/
  "./src/app/home-page/planning/notes/notes.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home-page/planning/notes/notes.module.ts ***!
    \**********************************************************/

  /*! exports provided: NotesPageModule */

  /***/
  function srcAppHomePagePlanningNotesNotesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesPageModule", function () {
      return NotesPageModule;
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


    var _notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notes.page */
    "./src/app/home-page/planning/notes/notes.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _notes_form_notes_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notes-form/notes-form.component */
    "./src/app/home-page/planning/notes/notes-form/notes-form.component.ts");

    var routes = [{
      path: '',
      component: _notes_page__WEBPACK_IMPORTED_MODULE_3__["NotesPage"]
    }];

    var NotesPageModule = function NotesPageModule() {
      _classCallCheck(this, NotesPageModule);
    };

    NotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_notes_page__WEBPACK_IMPORTED_MODULE_3__["NotesPage"], _notes_form_notes_form_component__WEBPACK_IMPORTED_MODULE_5__["NotesFormComponent"]],
      entryComponents: [_notes_form_notes_form_component__WEBPACK_IMPORTED_MODULE_5__["NotesFormComponent"]]
    })], NotesPageModule);
    /***/
  },

  /***/
  "./src/app/home-page/planning/notes/notes.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/home-page/planning/notes/notes.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagePlanningNotesNotesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9wbGFubmluZy9ub3Rlcy9ub3Rlcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home-page/planning/notes/notes.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/home-page/planning/notes/notes.page.ts ***!
    \********************************************************/

  /*! exports provided: NotesPage */

  /***/
  function srcAppHomePagePlanningNotesNotesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesPage", function () {
      return NotesPage;
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


    var _notes_form_notes_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./notes-form/notes-form.component */
    "./src/app/home-page/planning/notes/notes-form/notes-form.component.ts");
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

    var NotesPage =
    /*#__PURE__*/
    function () {
      function NotesPage(modalController, contractDetailService, router, httpService, loaderService, alertService, networkService, storeService) {
        var _this2 = this;

        _classCallCheck(this, NotesPage);

        this.modalController = modalController;
        this.contractDetailService = contractDetailService;
        this.router = router;
        this.httpService = httpService;
        this.loaderService = loaderService;
        this.alertService = alertService;
        this.networkService = networkService;
        this.storeService = storeService;
        /**
         * checkButton
         */

        this.checkButton = function () {
          return _this2.currentUrl === '/home-page/notes';
        };
        /**
         * searchNote
         * @param search
         */


        this.searchNote = function (search) {
          if (search) {
            _this2.filteredNotes = _this2.notes.filter(function (item) {
              return item.note.toLowerCase().includes(search.toLowerCase()) || item.responsibleName.toLowerCase().includes(search.toLowerCase());
            });
          } else {
            _this2.filteredNotes = _this2.notes;
          }
        };
        /**
         * cancelSearch
         */


        this.cancelSearch = function () {
          _this2.filteredNotes = _this2.notes;
        };
        /**
         * viewNote
         * @param item
         */


        this.viewNote = function (note) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.openForm(note);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        };
        /**
         * openForm
         */


        this.openForm = function () {
          var note = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: _notes_form_notes_form_component__WEBPACK_IMPORTED_MODULE_4__["NotesFormComponent"],
                      componentProps: {
                        costCenter: this.costCenter,
                        note: note
                      },
                      backdropDismiss: false,
                      keyboardClose: false,
                      cssClass: 'full-screen-modal'
                    });

                  case 2:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data) {
                        _this3.reloadList();
                      }
                    });
                    _context4.next = 6;
                    return modal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        };
        /**
         * deleteNoteConfirm
         */


        this.deleteNoteConfirm = function (note) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var response, newNote;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertService.confirmAlert('Desea borrar esta nota?');

                  case 2:
                    response = _context5.sent;

                    if (response) {
                      newNote = Object.assign({}, note, {
                        id: -note.id
                      });
                      this.storeNote(newNote);
                    }

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        };
        /**
         * reloadList
         */


        this.reloadList = function () {
          _this2.loaderService.startLoader('Cargando notas');

          _this2.contractDetailService.getCostCenterDetail(_this2.costCenter.id.toString()).subscribe(function (success) {
            _this2.storeService.setContractData(success.data);

            _this2.loaderService.stopLoader();
          }, function (error) {
            _this2.loaderService.stopLoader();
          });
        };
        /**
         * storeNote
         * @param data
         */


        this.storeNote = function (data) {
          _this2.loaderService.startLoader('Borrando nota');

          _this2.contractDetailService.storeNote(data).subscribe(function (success) {
            _this2.reloadList();

            _this2.loaderService.stopLoader();
          }, function (error) {
            _this2.loaderService.stopLoader();

            _this2.httpService.errorHandler(error);
          });
        };

        this.isOnline$ = this.networkService.getNetworkStatus().subscribe(function (status) {
          _this2.isOnline = status;
        });
      }

      _createClass(NotesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.router$ = this.router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              _this4.currentUrl = route.url;
            }
          });
          this.store$ = this.storeService.stateChanged.subscribe(function (data) {
            _this4.costCenter = _this4.storeService.getCostCenter();
            _this4.notes = _this4.storeService.getNotes();
            _this4.filteredNotes = _this4.storeService.getNotes();
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

      return NotesPage;
    }();

    NotesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
      }, {
        type: _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
      }, {
        type: _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]
      }];
    };

    NotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notes.page.scss */
      "./src/app/home-page/planning/notes/notes.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"], _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"], _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]])], NotesPage);
    /***/
  }
}]);
//# sourceMappingURL=planning-notes-notes-module-es5.js.map