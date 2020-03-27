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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <strong>Cuadrillas</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher (ionRefresh)=\"reload($event)\" class=\"refresher\" slot=\"fixed\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Cargando...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <h2 class=\"ion-text-center\">\r\n    Tus Cuadrillas\r\n\r\n    <ion-badge class=\"quadrille-badge\" color=\"primary\">{{ filteredQuadrilles.length }}</ion-badge>\r\n  </h2>\r\n\r\n  <ng-container *ngIf=\"filteredQuadrilles.length > 0\">\r\n    <ion-list>\r\n      <ion-virtual-scroll [items]=\"filteredQuadrilles\">\r\n        <ion-item (click)=\"goToWorkers(quadrille)\" *virtualItem=\"let quadrille\" detail=\"true\">\r\n          <ion-icon name=\"clipboard\" slot=\"start\"></ion-icon>\r\n          <ion-label>\r\n            <h2>{{ quadrille.name }}</h2>\r\n            <p class=\"label-padding\">{{ quadrille.responsibleName }}</p>\r\n            <p class=\"label-padding\">\r\n              <ion-badge color=\"primary\">\r\n                {{ getQuadrilleWorkers(quadrille.id) }} Personas\r\n              </ion-badge>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-virtual-scroll>\r\n    </ion-list>\r\n  </ng-container>\r\n\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = "ion-menu-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.label-padding {\n  padding-top: 8px;\n  font-size: 18px;\n}\n\n.quadrille-badge {\n  --padding-top: 5px;\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3JlbS9yZW0tcXVhZHJpbGxlL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxob21lLXBhZ2VcXHJlbVxccmVtLXF1YWRyaWxsZVxccmVtLXF1YWRyaWxsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9yZW0vcmVtLXF1YWRyaWxsZS9yZW0tcXVhZHJpbGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvcmVtL3JlbS1xdWFkcmlsbGUvcmVtLXF1YWRyaWxsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxhYmVsLXBhZGRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ucXVhZHJpbGxlLWJhZGdlIHtcclxuICAtLXBhZGRpbmctdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuIiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxhYmVsLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5xdWFkcmlsbGUtYmFkZ2Uge1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xufSJdfQ== */";
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