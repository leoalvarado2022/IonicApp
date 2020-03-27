(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rem-rem-workers-rem-workers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/rem/rem-workers/rem-workers.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/rem/rem-workers/rem-workers.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <strong>Trabajadores</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher (ionRefresh)=\"reload($event)\" class=\"refresher\" slot=\"fixed\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Cargando...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ng-container *ngIf=\"quadrille\">\r\n    <h2 class=\"ion-text-center\">\r\n      {{ quadrille.name }}\r\n      <ion-badge class=\"quadrille-badge\" color=\"primary\">{{ filteredWorkers.length }}</ion-badge>\r\n    </h2>\r\n\r\n    <ng-container *ngIf=\"filteredWorkers.length > 0\">\r\n      <ion-list lines=\"none\">\r\n        <ion-virtual-scroll [items]=\"filteredWorkers\">\r\n          <ion-item (click)=\"markWorker(worker)\" *virtualItem=\"let worker\" [ngClass]=\"{ 'workerSelected': selectedWorkers.includes(worker) }\">\r\n            <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\r\n            <ion-label>\r\n              <h3 class=\"label-padding\">{{ worker.name }}</h3>\r\n              <div class=\"label-padding\">\r\n\r\n                <div class=\"ion-text-left\">\r\n                  {{ worker.identifier | rut }}\r\n                </div>\r\n                <div class=\"ion-text-right\">\r\n                  <ng-container *ngIf=\"worker.quadrilleToApprove > 0\">\r\n                    <ion-badge *ngIf=\"worker.quadrilleStatus === 'POR APROBAR' && worker.quadrille === quadrille.id\" color=\"warning\">\r\n                      Traspasando\r\n                    </ion-badge>\r\n                    <ion-badge *ngIf=\"worker.quadrilleStatus === 'POR APROBAR' && worker.quadrille !== quadrille.id\" color=\"warning\">\r\n                      Por Aprobar\r\n                    </ion-badge>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"worker.quadrilleToApprove === 0\">\r\n                    <ion-badge color=\"danger\">{{ worker.quadrilleStatus | uppercase }}</ion-badge>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-virtual-scroll>\r\n      </ion-list>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ng-container *ngIf=\"selectedWorkers.length > 0\">\r\n    <ion-row>\r\n      <ng-container *ngIf=\"selectedWorkers[0].quadrilleToApprove === 0\">\r\n        <ion-col>\r\n          <ng-container *ngIf=\"selectedWorkers[0].quadrilleStatus === ''\">\r\n            <ion-button (click)=\"selectQuadrille();\" color=\"warning\" expand=\"block\">\r\n              Traspasar {{ selectedWorkers.length }}\r\n            </ion-button>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"selectedWorkers[0].quadrilleStatus === 'rechazado'\">\r\n            <ion-button (click)=\"acceptRejectWorkers()\" color=\"success\" expand=\"block\">\r\n              Aprobar {{ selectedWorkers.length }}\r\n            </ion-button>\r\n          </ng-container>\r\n        </ion-col>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"selectedWorkers[0].quadrilleToApprove > 0\">\r\n        <ion-col>\r\n          <ion-button (click)=\"acceptWorkers();\" color=\"success\" expand=\"block\">\r\n            Aprobar {{ selectedWorkers.length }}\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button (click)=\"rejectWorkers();\" color=\"danger\" expand=\"block\">\r\n            Rechazar {{ selectedWorkers.length }}\r\n          </ion-button>\r\n        </ion-col>\r\n      </ng-container>\r\n    </ion-row>\r\n  </ng-container>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/home-page/rem/rem-workers/rem-workers.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home-page/rem/rem-workers/rem-workers.module.ts ***!
  \*****************************************************************/
/*! exports provided: RemWorkersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemWorkersPageModule", function() { return RemWorkersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rem_workers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rem-workers.page */ "./src/app/home-page/rem/rem-workers/rem-workers.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _rem_quadrille_services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rem-quadrille/services/quadrille/quadrille.service */ "./src/app/home-page/rem/rem-quadrille/services/quadrille/quadrille.service.ts");






const routes = [
    {
        path: ':id',
        component: _rem_workers_page__WEBPACK_IMPORTED_MODULE_3__["RemWorkersPage"]
    }
];
let RemWorkersPageModule = class RemWorkersPageModule {
};
RemWorkersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [_rem_workers_page__WEBPACK_IMPORTED_MODULE_3__["RemWorkersPage"]],
        providers: [
            _rem_quadrille_services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_5__["QuadrilleService"]
        ]
    })
], RemWorkersPageModule);



/***/ }),

/***/ "./src/app/home-page/rem/rem-workers/rem-workers.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home-page/rem/rem-workers/rem-workers.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.label-padding {\n  padding-top: 8px;\n  font-size: 18px;\n}\n\n.quadrille-badge {\n  --padding-top: 5px;\n  font-size: 1em;\n}\n\n.workerSelected {\n  --background: var(--ion-color-medium);\n  --color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3JlbS9yZW0td29ya2Vycy9EOlxcbnBtXFxmeDExX21vYmlsZS9zcmNcXGFwcFxcaG9tZS1wYWdlXFxyZW1cXHJlbS13b3JrZXJzXFxyZW0td29ya2Vycy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9yZW0vcmVtLXdvcmtlcnMvcmVtLXdvcmtlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0VBQ0EsK0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9yZW0vcmVtLXdvcmtlcnMvcmVtLXdvcmtlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sYWJlbC1wYWRkaW5nIHtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnF1YWRyaWxsZS1iYWRnZSB7XHJcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4ud29ya2VyU2VsZWN0ZWQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG4iLCJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGFiZWwtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnF1YWRyaWxsZS1iYWRnZSB7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi53b3JrZXJTZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/home-page/rem/rem-workers/rem-workers.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/home-page/rem/rem-workers/rem-workers.page.ts ***!
  \***************************************************************/
/*! exports provided: RemWorkersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemWorkersPage", function() { return RemWorkersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/sync/sync.service */ "./src/app/shared/services/sync/sync.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rem_quadrille_services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rem-quadrille/services/quadrille/quadrille.service */ "./src/app/home-page/rem/rem-quadrille/services/quadrille/quadrille.service.ts");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/user/user.service */ "./src/app/shared/services/user/user.service.ts");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/http/http.service */ "./src/app/shared/services/http/http.service.ts");
/* harmony import */ var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/store/store.service */ "./src/app/shared/services/store/store.service.ts");










var WorkerStatus;
(function (WorkerStatus) {
    WorkerStatus["POR APROBAR"] = "por aprobar";
    WorkerStatus["APROBADO"] = "aprobado";
    WorkerStatus["RECHAZADO"] = "rechazado";
    WorkerStatus["APRUEBA RECHAZO"] = "apruebarechazo";
})(WorkerStatus || (WorkerStatus = {}));
let RemWorkersPage = class RemWorkersPage {
    constructor(syncService, route, loaderService, actionSheetController, quadrilleService, userService, httpService, storeService) {
        this.syncService = syncService;
        this.route = route;
        this.loaderService = loaderService;
        this.actionSheetController = actionSheetController;
        this.quadrilleService = quadrilleService;
        this.userService = userService;
        this.httpService = httpService;
        this.storeService = storeService;
        this.filteredWorkers = [];
        this.selectedWorkers = [];
        this.workers = [];
        this.quadrilles = [];
        this.buttons = [];
        this.userData = null;
        /**
         * reload
         * @param event
         */
        this.reload = (event) => {
            const id = this.route.snapshot.paramMap.get('id');
            this.loadWorkers(id);
            event.target.complete();
        };
        /**
         * markWorker
         * @param worker
         */
        this.markWorker = (worker) => {
            if (this.selectedWorkers.includes(worker)) {
                const index = this.selectedWorkers.indexOf(worker);
                this.selectedWorkers.splice(index, 1);
            }
            else {
                if (this.selectedWorkers.length > 0) {
                    this.selectedWorkers = this.selectedWorkers.filter(item => item.quadrilleStatus === worker.quadrilleStatus);
                }
                this.selectedWorkers.push(worker);
            }
        };
        /**
         * selectQuadrille
         */
        this.selectQuadrille = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Cuadrillas',
                buttons: [
                    ...this.buttons,
                    {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            this.selectedWorkers = [];
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
        /**
         * acceptWorkers
         */
        this.acceptWorkers = () => {
            this.transferWorkers(this.quadrille.id, WorkerStatus.APROBADO);
        };
        /**
         * rejectWorkers
         */
        this.rejectWorkers = () => {
            this.transferWorkers(this.quadrille.id, WorkerStatus.RECHAZADO);
        };
        /**
         * acceptRejectWorkers
         */
        this.acceptRejectWorkers = () => {
            this.transferWorkers(this.quadrille.id, WorkerStatus['APRUEBA RECHAZO']);
        };
        /**
         * loadWorkers
         */
        this.loadWorkers = (id) => {
            this.loaderService.startLoader();
            const quadrilles = this.storeService.getQuadrilles();
            const allWorkers = this.storeService.getWorkers();
            if (quadrilles && allWorkers) {
                this.quadrilles = [...quadrilles];
                this.quadrille = quadrilles.find(item => item.id === +id);
                const workers = allWorkers.filter(item => item.quadrille === this.quadrille.id || item.quadrilleToApprove === this.quadrille.id);
                this.workers = [...workers];
                this.filteredWorkers = [...workers];
                this.buildButtons();
            }
            this.loaderService.stopLoader();
        };
        /**
         * buildButtons
         */
        this.buildButtons = () => {
            this.buttons = this.quadrilles
                .filter(item => item !== this.quadrille)
                .map(item => ({
                text: item.name,
                icon: 'people',
                handler: () => {
                    this.transferWorkers(item.id, WorkerStatus['POR APROBAR']);
                }
            }));
        };
        /**
         * transferWorkers
         */
        this.transferWorkers = (quadrille, status) => {
            const data = {
                quadrille,
                workers: this.selectedWorkers,
                status
            };
            this.loaderService.startLoader();
            this.quadrilleService.transferWorkers(data).subscribe(success => {
                this.loaderService.stopLoader();
                this.selectedWorkers = [];
                this.reSync();
            }, error => {
                this.loaderService.stopLoader();
                this.httpService.errorHandler(error);
            });
        };
        /**
         * reSync
         */
        this.reSync = () => {
            this.loaderService.startLoader();
            const id = this.route.snapshot.paramMap.get('id');
            this.syncData();
            // this.loadWorkers(id);
            this.loaderService.stopLoader();
        };
        /**
         * syncData
         * @param username
         */
        this.syncData = () => {
            const username = this.userData.username;
            const activeConnection = this.storeService.getActiveConnection();
            this.syncService.syncData(username, activeConnection.superuser ? 1 : 0).subscribe((success) => {
                this.storeService.setSyncedData(success.data);
            }, (error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.httpService.errorHandler(error);
            }));
        };
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.store$ = this.storeService.stateChanged.subscribe(data => {
            this.userData = this.storeService.getUser();
            this.loadWorkers(id);
        });
    }
    ngOnDestroy() {
        this.store$.unsubscribe();
    }
};
RemWorkersPage.ctorParameters = () => [
    { type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_2__["SyncService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _rem_quadrille_services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_6__["QuadrilleService"] },
    { type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] },
    { type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_9__["StoreService"] }
];
RemWorkersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rem-workers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rem-workers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/rem/rem-workers/rem-workers.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rem-workers.page.scss */ "./src/app/home-page/rem/rem-workers/rem-workers.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_2__["SyncService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _rem_quadrille_services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_6__["QuadrilleService"],
        _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
        _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_9__["StoreService"]])
], RemWorkersPage);



/***/ })

}]);
//# sourceMappingURL=rem-rem-workers-rem-workers-module-es2015.js.map