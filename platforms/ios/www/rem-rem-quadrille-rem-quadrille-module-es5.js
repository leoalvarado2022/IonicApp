function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rem-rem-quadrille-rem-quadrille-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/rem/rem-quadrille/rem-quadrille.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/rem/rem-quadrille/rem-quadrille.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageRemRemQuadrilleRemQuadrillePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"background-color-header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <strong>Cuadrillas</strong>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-notifications></app-notifications>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)=\"reload($event)\" class=\"refresher\" slot=\"fixed\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Cargando...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <h2 class=\"ion-text-center\">\n    Tus Cuadrillas\n\n    <ion-badge class=\"quadrille-badge\" color=\"primary\">{{ filteredQuadrilles.length }}</ion-badge>\n  </h2>\n\n  <ng-container *ngIf=\"filteredQuadrilles.length > 0\">\n    <ion-list>\n      <ion-virtual-scroll [items]=\"filteredQuadrilles\">\n        <ion-item (click)=\"goToWorkers(quadrille)\" *virtualItem=\"let quadrille\" detail=\"true\">\n          <ion-icon name=\"clipboard\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h2>{{ quadrille.name }}</h2>\n            <p class=\"label-padding\">{{ quadrille.responsibleName }}</p>\n            <p class=\"label-padding\">\n              <ion-badge color=\"primary\">\n                {{ getQuadrilleWorkers(quadrille.id) }} Personas\n              </ion-badge>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-virtual-scroll>\n    </ion-list>\n  </ng-container>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home-page/rem/rem-quadrille/rem-quadrille.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/home-page/rem/rem-quadrille/rem-quadrille.module.ts ***!
    \*********************************************************************/

  /*! exports provided: RemQuadrillePageModule */

  /***/
  function srcAppHomePageRemRemQuadrilleRemQuadrilleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemQuadrillePageModule", function () {
      return RemQuadrillePageModule;
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


    var _rem_quadrille_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rem-quadrille.page */
    "./src/app/home-page/rem/rem-quadrille/rem-quadrille.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/quadrille/quadrille.service */
    "./src/app/home-page/rem/rem-quadrille/services/quadrille/quadrille.service.ts");

    var routes = [{
      path: '',
      component: _rem_quadrille_page__WEBPACK_IMPORTED_MODULE_3__["RemQuadrillePage"]
    }];

    var RemQuadrillePageModule = function RemQuadrillePageModule() {
      _classCallCheck(this, RemQuadrillePageModule);
    };

    RemQuadrillePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_rem_quadrille_page__WEBPACK_IMPORTED_MODULE_3__["RemQuadrillePage"]],
      providers: [_services_quadrille_quadrille_service__WEBPACK_IMPORTED_MODULE_5__["QuadrilleService"]]
    })], RemQuadrillePageModule);
    /***/
  },

  /***/
  "./src/app/home-page/rem/rem-quadrille/rem-quadrille.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/home-page/rem/rem-quadrille/rem-quadrille.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageRemRemQuadrilleRemQuadrillePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.label-padding {\n  padding-top: 8px;\n  font-size: 18px;\n}\n\n.quadrille-badge {\n  --padding-top: 5px;\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9ob21lLXBhZ2UvcmVtL3JlbS1xdWFkcmlsbGUvcmVtLXF1YWRyaWxsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9yZW0vcmVtLXF1YWRyaWxsZS9yZW0tcXVhZHJpbGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvcmVtL3JlbS1xdWFkcmlsbGUvcmVtLXF1YWRyaWxsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGFiZWwtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnF1YWRyaWxsZS1iYWRnZSB7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG4iLCJpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGFiZWwtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnF1YWRyaWxsZS1iYWRnZSB7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home-page/rem/rem-quadrille/rem-quadrille.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home-page/rem/rem-quadrille/rem-quadrille.page.ts ***!
    \*******************************************************************/

  /*! exports provided: RemQuadrillePage */

  /***/
  function srcAppHomePageRemRemQuadrilleRemQuadrillePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemQuadrillePage", function () {
      return RemQuadrillePage;
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


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var RemQuadrillePage =
    /*#__PURE__*/
    function () {
      function RemQuadrillePage(router, storeService) {
        var _this = this;

        _classCallCheck(this, RemQuadrillePage);

        this.router = router;
        this.storeService = storeService;
        this.filteredQuadrilles = [];
        this.workers = [];
        this.quadrilles = [];
        /**
         * reload
         */

        this.reload = function (event) {
          _this.loadQuadrilles();

          event.target.complete();
        };
        /**
         * goToWorkers
         * @param quadrille
         */


        this.goToWorkers = function (quadrille) {
          _this.router.navigate(['/home-page/rem-workers', quadrille.id]);
        };
        /**
         * getQuadrilleWorkers
         * @param id
         */


        this.getQuadrilleWorkers = function (id) {
          if (_this.workers) {
            return _this.workers.filter(function (item) {
              return item.quadrille === id;
            }).length;
          }

          return 0;
        };
        /**
         * loadQuadrilles
         */


        this.loadQuadrilles = function () {
          var quadrilles = _this.storeService.getQuadrilles();

          var workers = _this.storeService.getWorkers();

          _this.quadrilles = _toConsumableArray(quadrilles);
          _this.filteredQuadrilles = _toConsumableArray(quadrilles);
          _this.workers = _toConsumableArray(workers);
        };
      }

      _createClass(RemQuadrillePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.storeService.stateChanged.subscribe(function (data) {
            _this2.loadQuadrilles();
          });
        }
      }]);

      return RemQuadrillePage;
    }();

    RemQuadrillePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]
      }];
    };

    RemQuadrillePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rem-quadrille',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rem-quadrille.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/rem/rem-quadrille/rem-quadrille.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rem-quadrille.page.scss */
      "./src/app/home-page/rem/rem-quadrille/rem-quadrille.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])], RemQuadrillePage);
    /***/
  }
}]);
//# sourceMappingURL=rem-rem-quadrille-rem-quadrille-module-es5.js.map