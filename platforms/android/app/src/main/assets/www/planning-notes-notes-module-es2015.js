(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-notes-notes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes-form/notes-form.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes-form/notes-form.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\" color=\"secondary\">\r\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\" style=\"color:white;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ note ? 'Ver' : 'Registrar'}} Nota</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"noteForm\">\r\n    <ng-container *ngIf=\"!note && detectPlatformService.hasCordova\">\r\n      <ion-item>\r\n        <ion-button (click)=\"openCamera()\" slot=\"start\">\r\n          <ion-icon name=\"camera\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n        <ion-label>Imagen</ion-label>\r\n        <ion-button (click)=\"openGallery()\" slot=\"end\">\r\n          <ion-icon name=\"image\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ng-container>\r\n\r\n    <div *ngIf=\"loadingImg\" class=\"loadingImg\">\r\n      Cargando Imagen...\r\n    </div>\r\n\r\n    <div *ngIf=\"imageSrc\">\r\n      <ion-img [src]=\"imageSrc\"></ion-img>\r\n    </div>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nota</ion-label>\r\n      <ion-textarea cols=\"5\" formControlName=\"note\" placeholder=\"Escriba la nota...\" rows=\"5\"></ion-textarea>\r\n      <ng-container *ngIf=\"noteForm.get('note').dirty && noteForm.get('note').hasError('required')\">\r\n        <span class=\"errorMsg\">Ingrese la nota</span>\r\n      </ng-container>\r\n    </ion-item>\r\n\r\n    <ng-container *ngIf=\"!note\">\r\n      <ion-button (click)=\"submit()\" [disabled]=\"noteForm.invalid || isSaving \" color=\"primary\" expand=\"block\">\r\n        Guardar\r\n      </ion-button>\r\n    </ng-container>\r\n\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"white\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"white\">\r\n      <strong>Notas</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-searchbar placeholder=\"Buscar...\" (ionChange)=\"searchNote($event.target.value)\" (ionClear)=\"cancelSearch()\" animated class=\"production\"\r\n               showCancelButton=\"never\"></ion-searchbar>\r\n\r\n<ion-content class=\"content\">\r\n  <ng-container *ngFor=\"let item of filteredNotes\">\r\n    <div class=\"card-sli\">\r\n      <div class=\"card-sli-back\">\r\n        <app-note-item\r\n          (deleteNote)=\"deleteNoteConfirm($event)\"\r\n          (noteClicked)=\"viewNote(item)\"\r\n          [item]=\"item\"\r\n          [slideDisabled]=\"false\"\r\n        ></app-note-item>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"checkButton()\">\r\n    <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\r\n      <ion-fab-button (click)=\"openForm()\" [disabled]=\"!costCenter || !isOnline\" color=\"danger\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </ng-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home-page/planning/notes/notes-form/notes-form.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/home-page/planning/notes/notes-form/notes-form.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-textarea textarea {\n  min-height: 50px;\n}\n\n.loadingImg {\n  text-align: center;\n  font-size: 1em;\n  padding-top: 2em;\n  padding-bottom: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL25vdGVzL25vdGVzLWZvcm0vRDpcXG5wbVxcZngxMV9tb2JpbGUvc3JjXFxhcHBcXGhvbWUtcGFnZVxccGxhbm5pbmdcXG5vdGVzXFxub3Rlcy1mb3JtXFxub3Rlcy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvbm90ZXMvbm90ZXMtZm9ybS9ub3Rlcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUNBSjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9wbGFubmluZy9ub3Rlcy9ub3Rlcy1mb3JtL25vdGVzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dGFyZWEge1xyXG4gIHRleHRhcmVhIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGluZ0ltZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG4iLCJpb24tdGV4dGFyZWEgdGV4dGFyZWEge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9hZGluZ0ltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmctdG9wOiAyZW07XG4gIHBhZGRpbmctYm90dG9tOiAyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/home-page/planning/notes/notes-form/notes-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home-page/planning/notes/notes-form/notes-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NotesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesFormComponent", function() { return NotesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/contract-detail/contract-detail.service */ "./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts");
/* harmony import */ var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/toast/toast.service */ "./src/app/shared/services/toast/toast.service.ts");
/* harmony import */ var _shared_services_detect_platform_detect_platform_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/detect-platform/detect-platform.service */ "./src/app/shared/services/detect-platform/detect-platform.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/camera/camera.service */ "./src/app/shared/services/camera/camera.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");












let NotesFormComponent = class NotesFormComponent {
    constructor(modalController, formBuilder, authService, httpService, contractDetailService, toastService, detectPlatformService, loaderService, cameraService, storeService) {
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
        this.closeModal = (status = false) => {
            this.noteForm.reset();
            this.modalController.dismiss(status);
        };
        /**
         * submit
         */
        this.submit = () => {
            if ((this.noteForm.get('note').value || this.noteForm.get('image').value) && !this.isSaving) {
                const note = Object.assign({}, this.noteForm.value);
                this.isSaving = true;
                this.storeNote(note);
            }
            else {
                this.isSaving = false;
                this.toastService.warningToast('Debe ingresar la nota o la imagen');
            }
        };
        /**
         * openCamera
         */
        this.openCamera = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const image = yield this.cameraService.openCamera();
            if (image) {
                this.getImage(image);
            }
        });
        /**
         * openGallery
         */
        this.openGallery = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const image = yield this.cameraService.openGallery();
            if (image) {
                this.getImage(image);
            }
        });
        /**
         * loadBigImage
         */
        this.loadBigImage = () => {
            if (this.note && this.note.image) {
                this.loadingImg = true;
                this.contractDetailService.getNoteImage(this.note.id.toString()).subscribe((success) => {
                    this.imageSrc = 'data:image/jpeg;base64,' + success.image;
                    this.loadingImg = false;
                }, error => {
                    this.loadingImg = false;
                    this.httpService.errorHandler(error);
                });
            }
        };
        /**
         * storeNote
         * @param data
         */
        this.storeNote = (data) => {
            this.loaderService.startLoader('Guardando nota');
            this.contractDetailService.storeNote(data).subscribe(success => {
                this.isSaving = false;
                this.loaderService.stopLoader();
                this.closeModal(true);
            }, error => {
                this.isSaving = false;
                this.loaderService.stopLoader();
                this.httpService.errorHandler(error);
            });
        };
        /**
         * getImage
         * @param image
         */
        this.getImage = (image) => {
            const imageUrl = image;
            this.imageSrc = `data:image/jpeg;base64,${image}`;
            this.noteForm.patchValue({
                image: imageUrl
            });
            this.noteForm.updateValueAndValidity();
        };
    }
    ngOnInit() {
        this.userCompany = this.storeService.getActiveCompany();
        this.noteForm = this.formBuilder.group({
            id: [this.note ? this.note.id : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            costCenter: [this.costCenter.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            user: [this.userCompany.user, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            note: [{ value: this.note ? this.note.note : '', disabled: !!this.note }],
            image: [{ value: this.note ? this.note.image : '', disabled: !!this.note }]
        });
        // this.imageSrc = this.note && this.note.image ? 'data:image/jpeg;base64,' + this.note.image : '';
    }
    ngAfterContentInit() {
        this.loadBigImage();
    }
};
NotesFormComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] },
    { type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"] },
    { type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _shared_services_detect_platform_detect_platform_service__WEBPACK_IMPORTED_MODULE_7__["DetectPlatformService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"] },
    { type: _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_10__["CameraService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NotesFormComponent.prototype, "costCenter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NotesFormComponent.prototype, "note", void 0);
NotesFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notes-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notes-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes-form/notes-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notes-form.component.scss */ "./src/app/home-page/planning/notes/notes-form/notes-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
        _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"],
        _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _shared_services_detect_platform_detect_platform_service__WEBPACK_IMPORTED_MODULE_7__["DetectPlatformService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
        _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_10__["CameraService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_11__["StoreService"]])
], NotesFormComponent);



/***/ }),

/***/ "./src/app/home-page/planning/notes/notes.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home-page/planning/notes/notes.module.ts ***!
  \**********************************************************/
/*! exports provided: NotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageModule", function() { return NotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes.page */ "./src/app/home-page/planning/notes/notes.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _notes_form_notes_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes-form/notes-form.component */ "./src/app/home-page/planning/notes/notes-form/notes-form.component.ts");






const routes = [
    {
        path: '',
        component: _notes_page__WEBPACK_IMPORTED_MODULE_3__["NotesPage"]
    }
];
let NotesPageModule = class NotesPageModule {
};
NotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _notes_page__WEBPACK_IMPORTED_MODULE_3__["NotesPage"],
            _notes_form_notes_form_component__WEBPACK_IMPORTED_MODULE_5__["NotesFormComponent"]
        ],
        entryComponents: [
            _notes_form_notes_form_component__WEBPACK_IMPORTED_MODULE_5__["NotesFormComponent"]
        ]
    })
], NotesPageModule);



/***/ }),

/***/ "./src/app/home-page/planning/notes/notes.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/home-page/planning/notes/notes.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9wbGFubmluZy9ub3Rlcy9ub3Rlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home-page/planning/notes/notes.page.ts":
/*!********************************************************!*\
  !*** ./src/app/home-page/planning/notes/notes.page.ts ***!
  \********************************************************/
/*! exports provided: NotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPage", function() { return NotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notes_form_notes_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes-form/notes-form.component */ "./src/app/home-page/planning/notes/notes-form/notes-form.component.ts");
/* harmony import */ var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/contract-detail/contract-detail.service */ "./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/alert/alert.service */ "./src/app/shared/services/alert/alert.service.ts");
/* harmony import */ var _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/network/network.service */ "./src/app/shared/services/network/network.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");











let NotesPage = class NotesPage {
    constructor(modalController, contractDetailService, router, httpService, loaderService, alertService, networkService, storeService) {
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
        this.checkButton = () => {
            return this.currentUrl === '/home-page/notes';
        };
        /**
         * searchNote
         * @param search
         */
        this.searchNote = (search) => {
            if (search) {
                this.filteredNotes = this.notes.filter(item => {
                    return (item.note.toLowerCase().includes(search.toLowerCase()) ||
                        item.responsibleName.toLowerCase().includes(search.toLowerCase()));
                });
            }
            else {
                this.filteredNotes = this.notes;
            }
        };
        /**
         * cancelSearch
         */
        this.cancelSearch = () => {
            this.filteredNotes = this.notes;
        };
        /**
         * viewNote
         * @param item
         */
        this.viewNote = (note) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.openForm(note);
        });
        /**
         * openForm
         */
        this.openForm = (note = null) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _notes_form_notes_form_component__WEBPACK_IMPORTED_MODULE_4__["NotesFormComponent"],
                componentProps: {
                    costCenter: this.costCenter,
                    note
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
         * deleteNoteConfirm
         */
        this.deleteNoteConfirm = (note) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = yield this.alertService.confirmAlert('Desea borrar esta nota?');
            if (response) {
                const newNote = Object.assign({}, note, { id: -note.id });
                this.storeNote(newNote);
            }
        });
        /**
         * reloadList
         */
        this.reloadList = () => {
            this.loaderService.startLoader('Cargando notas');
            this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString()).subscribe((success) => {
                this.storeService.setContractData(success.data);
                this.loaderService.stopLoader();
            }, error => {
                this.loaderService.stopLoader();
            });
        };
        /**
         * storeNote
         * @param data
         */
        this.storeNote = (data) => {
            this.loaderService.startLoader('Borrando nota');
            this.contractDetailService.storeNote(data).subscribe(success => {
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
            this.notes = this.storeService.getNotes();
            this.filteredNotes = this.storeService.getNotes();
        });
    }
    ngOnDestroy() {
        this.isOnline$.unsubscribe();
        this.router$.unsubscribe();
        this.store$.unsubscribe();
    }
};
NotesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"] }
];
NotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/notes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notes.page.scss */ "./src/app/home-page/planning/notes/notes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_5__["ContractDetailService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
        _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]])
], NotesPage);



/***/ })

}]);
//# sourceMappingURL=planning-notes-notes-module-es2015.js.map