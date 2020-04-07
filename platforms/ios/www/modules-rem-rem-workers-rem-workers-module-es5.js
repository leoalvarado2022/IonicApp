function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-rem-rem-workers-rem-workers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/rem/rem-workers/rem-workers.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/rem/rem-workers/rem-workers.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRemRemWorkersRemWorkersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <strong>Trabajadores</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)=\"reload($event)\" class=\"refresher\" slot=\"fixed\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Cargando...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ng-container *ngIf=\"quadrille\">\n    <h2 class=\"ion-text-center\">\n      {{ quadrille.name }}\n      <ion-badge class=\"quadrille-badge\" color=\"primary\">{{ filteredWorkers.length }}</ion-badge>\n    </h2>\n\n    <ng-container *ngIf=\"filteredWorkers.length > 0\">\n      <ion-list lines=\"none\">\n        <ion-virtual-scroll [items]=\"filteredWorkers\">\n          <ion-item (click)=\"markWorker(worker)\" *virtualItem=\"let worker\" [ngClass]=\"{ 'workerSelected': selectedWorkers.includes(worker) }\">\n            <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\n            <ion-label>\n              <h3 class=\"label-padding\">{{ worker.name }}</h3>\n              <div class=\"label-padding\">\n\n                <div class=\"ion-text-left\">\n                  {{ worker.identifier | rut }}\n                </div>\n                <div class=\"ion-text-right\">\n                  <ng-container *ngIf=\"worker.quadrilleToApprove > 0\">\n                    <ion-badge *ngIf=\"worker.quadrilleStatus === 'POR APROBAR' && worker.quadrille === quadrille.id\" color=\"warning\">\n                      Traspasando\n                    </ion-badge>\n                    <ion-badge *ngIf=\"worker.quadrilleStatus === 'POR APROBAR' && worker.quadrille !== quadrille.id\" color=\"warning\">\n                      Por Aprobar\n                    </ion-badge>\n                  </ng-container>\n                  <ng-container *ngIf=\"worker.quadrilleToApprove === 0\">\n                    <ion-badge color=\"danger\">{{ worker.quadrilleStatus | uppercase }}</ion-badge>\n                  </ng-container>\n                </div>\n              </div>\n            </ion-label>\n          </ion-item>\n        </ion-virtual-scroll>\n      </ion-list>\n    </ng-container>\n  </ng-container>\n\n</ion-content>\n\n<ion-footer>\n  <ng-container *ngIf=\"selectedWorkers.length > 0\">\n    <ion-row>\n      <ng-container *ngIf=\"selectedWorkers[0].quadrilleToApprove === 0\">\n        <ion-col>\n          <ng-container *ngIf=\"selectedWorkers[0].quadrilleStatus === ''\">\n            <ion-button (click)=\"selectQuadrille();\" color=\"warning\" expand=\"block\">\n              Traspasar {{ selectedWorkers.length }}\n            </ion-button>\n          </ng-container>\n          <ng-container *ngIf=\"selectedWorkers[0].quadrilleStatus === 'rechazado'\">\n            <ion-button (click)=\"acceptRejectWorkers()\" color=\"success\" expand=\"block\">\n              Aprobar {{ selectedWorkers.length }}\n            </ion-button>\n          </ng-container>\n        </ion-col>\n      </ng-container>\n\n      <ng-container *ngIf=\"selectedWorkers[0].quadrilleToApprove > 0\">\n        <ion-col>\n          <ion-button (click)=\"acceptWorkers();\" color=\"success\" expand=\"block\">\n            Aprobar {{ selectedWorkers.length }}\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button (click)=\"rejectWorkers();\" color=\"danger\" expand=\"block\">\n            Rechazar {{ selectedWorkers.length }}\n          </ion-button>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n  </ng-container>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/modules/rem/rem-workers/rem-workers.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/rem/rem-workers/rem-workers.module.ts ***!
    \***************************************************************/

  /*! exports provided: RemWorkersPageModule */

  /***/
  function srcAppModulesRemRemWorkersRemWorkersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemWorkersPageModule", function () {
      return RemWorkersPageModule;
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


    var _rem_workers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rem-workers.page */
    "./src/app/modules/rem/rem-workers/rem-workers.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _rem_quadrille_services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../rem-quadrille/services/quadrille/quadrille.service */
    "./src/app/modules/rem/rem-quadrille/services/quadrille/quadrille.service.ts");

    var routes = [{
      path: ':id',
      component: _rem_workers_page__WEBPACK_IMPORTED_MODULE_3__["RemWorkersPage"]
    }];

    var RemWorkersPageModule = function RemWorkersPageModule() {
      _classCallCheck(this, RemWorkersPageModule);
    };

    RemWorkersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_rem_workers_page__WEBPACK_IMPORTED_MODULE_3__["RemWorkersPage"]],
      providers: [_rem_quadrille_services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_5__["QuadrilleService"]]
    })], RemWorkersPageModule);
    /***/
  },

  /***/
  "./src/app/modules/rem/rem-workers/rem-workers.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/modules/rem/rem-workers/rem-workers.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRemRemWorkersRemWorkersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.label-padding {\n  padding-top: 8px;\n  font-size: 18px;\n}\n\n.quadrille-badge {\n  --padding-top: 5px;\n  font-size: 1em;\n}\n\n.workerSelected {\n  --background: var(--ion-color-medium);\n  --color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL3JlbS9yZW0td29ya2Vycy9yZW0td29ya2Vycy5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcmVtL3JlbS13b3JrZXJzL3JlbS13b3JrZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLCtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlbS9yZW0td29ya2Vycy9yZW0td29ya2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGFiZWwtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnF1YWRyaWxsZS1iYWRnZSB7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi53b3JrZXJTZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4iLCJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGFiZWwtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnF1YWRyaWxsZS1iYWRnZSB7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi53b3JrZXJTZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/rem/rem-workers/rem-workers.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/rem/rem-workers/rem-workers.page.ts ***!
    \*************************************************************/

  /*! exports provided: RemWorkersPage */

  /***/
  function srcAppModulesRemRemWorkersRemWorkersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemWorkersPage", function () {
      return RemWorkersPage;
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


    var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/sync/sync.service */
    "./src/app/shared/services/sync/sync.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _rem_quadrille_services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../rem-quadrille/services/quadrille/quadrille.service */
    "./src/app/modules/rem/rem-quadrille/services/quadrille/quadrille.service.ts");
    /* harmony import */


    var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/services/user/user.service */
    "./src/app/shared/services/user/user.service.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var WorkerStatus;

    (function (WorkerStatus) {
      WorkerStatus["POR APROBAR"] = "por aprobar";
      WorkerStatus["APROBADO"] = "aprobado";
      WorkerStatus["RECHAZADO"] = "rechazado";
      WorkerStatus["APRUEBA RECHAZO"] = "apruebarechazo";
    })(WorkerStatus || (WorkerStatus = {}));

    var RemWorkersPage =
    /*#__PURE__*/
    function () {
      function RemWorkersPage(syncService, route, loaderService, actionSheetController, quadrilleService, userService, httpService, storeService) {
        var _this = this;

        _classCallCheck(this, RemWorkersPage);

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

        this.reload = function (event) {
          var id = _this.route.snapshot.paramMap.get('id');

          _this.loadWorkers(id);

          event.target.complete();
        };
        /**
         * markWorker
         * @param worker
         */


        this.markWorker = function (worker) {
          if (_this.selectedWorkers.includes(worker)) {
            var index = _this.selectedWorkers.indexOf(worker);

            _this.selectedWorkers.splice(index, 1);
          } else {
            if (_this.selectedWorkers.length > 0) {
              _this.selectedWorkers = _this.selectedWorkers.filter(function (item) {
                return item.quadrilleStatus === worker.quadrilleStatus;
              });
            }

            _this.selectedWorkers.push(worker);
          }
        };
        /**
         * selectQuadrille
         */


        this.selectQuadrille = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: 'Cuadrillas',
                      buttons: [].concat(_toConsumableArray(this.buttons), [{
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          _this2.selectedWorkers = [];
                        }
                      }])
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        };
        /**
         * acceptWorkers
         */


        this.acceptWorkers = function () {
          _this.transferWorkers(_this.quadrille.id, WorkerStatus.APROBADO);
        };
        /**
         * rejectWorkers
         */


        this.rejectWorkers = function () {
          _this.transferWorkers(_this.quadrille.id, WorkerStatus.RECHAZADO);
        };
        /**
         * acceptRejectWorkers
         */


        this.acceptRejectWorkers = function () {
          _this.transferWorkers(_this.quadrille.id, WorkerStatus['APRUEBA RECHAZO']);
        };
        /**
         * loadWorkers
         */


        this.loadWorkers = function (id) {
          _this.loaderService.startLoader();

          var quadrilles = _this.storeService.getQuadrilles();

          var allWorkers = _this.storeService.getWorkers();

          if (quadrilles && allWorkers) {
            _this.quadrilles = _toConsumableArray(quadrilles);
            _this.quadrille = quadrilles.find(function (item) {
              return item.id === +id;
            });
            var workers = allWorkers.filter(function (item) {
              return item.quadrille === _this.quadrille.id || item.quadrilleToApprove === _this.quadrille.id;
            });
            _this.workers = _toConsumableArray(workers);
            _this.filteredWorkers = _toConsumableArray(workers);

            _this.buildButtons();
          }

          _this.loaderService.stopLoader();
        };
        /**
         * buildButtons
         */


        this.buildButtons = function () {
          _this.buttons = _this.quadrilles.filter(function (item) {
            return item !== _this.quadrille;
          }).map(function (item) {
            return {
              text: item.name,
              icon: 'people',
              handler: function handler() {
                _this.transferWorkers(item.id, WorkerStatus['POR APROBAR']);
              }
            };
          });
        };
        /**
         * transferWorkers
         */


        this.transferWorkers = function (quadrille, status) {
          var data = {
            quadrille: quadrille,
            workers: _this.selectedWorkers,
            status: status
          };

          _this.loaderService.startLoader();

          _this.quadrilleService.transferWorkers(data).subscribe(function (success) {
            _this.loaderService.stopLoader();

            _this.selectedWorkers = [];

            _this.reSync();
          }, function (error) {
            _this.loaderService.stopLoader();

            _this.httpService.errorHandler(error);
          });
        };
        /**
         * reSync
         */


        this.reSync = function () {
          _this.loaderService.startLoader();

          var id = _this.route.snapshot.paramMap.get('id');

          _this.syncData(); // this.loadWorkers(id);


          _this.loaderService.stopLoader();
        };
        /**
         * syncData
         * @param username
         */


        this.syncData = function () {
          var username = _this.userData.username;

          var activeConnection = _this.storeService.getActiveConnection();

          _this.syncService.syncData(username, activeConnection.superuser ? 1 : 0).subscribe(function (success) {
            _this.storeService.setSyncedData(success.data);
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.httpService.errorHandler(error);

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        };
      }

      _createClass(RemWorkersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var id = this.route.snapshot.paramMap.get('id');
          this.store$ = this.storeService.stateChanged.subscribe(function (data) {
            _this3.userData = _this3.storeService.getUser();

            _this3.loadWorkers(id);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.store$.unsubscribe();
        }
      }]);

      return RemWorkersPage;
    }();

    RemWorkersPage.ctorParameters = function () {
      return [{
        type: _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_2__["SyncService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
      }, {
        type: _rem_quadrille_services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_6__["QuadrilleService"]
      }, {
        type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_9__["StoreService"]
      }];
    };

    RemWorkersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rem-workers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rem-workers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/rem/rem-workers/rem-workers.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rem-workers.page.scss */
      "./src/app/modules/rem/rem-workers/rem-workers.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_2__["SyncService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _rem_quadrille_services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_6__["QuadrilleService"], _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_9__["StoreService"]])], RemWorkersPage);
    /***/
  }
}]);
//# sourceMappingURL=modules-rem-rem-workers-rem-workers-module-es5.js.map