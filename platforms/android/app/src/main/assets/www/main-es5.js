function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <app-loader></app-loader>\r\n  <ion-router-outlet [swipeGesture]=\"false\"></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/ticket-card/ticket-card.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/ticket-card/ticket-card.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageCrmTicketsTicketCardTicketCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card class=\"ticket-card-height\" (click)=\"viewTicket(ticket)\">\r\n  <ion-item>\r\n    <ion-badge slot=\"start\">#{{ ticket.id }}</ion-badge>\r\n    <ion-label>{{ ticket.client }}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-card-content>\r\n    <p>Tipo: {{ ticket.type }}</p>\r\n    <p>Producto: {{ ticket.productName }}</p>\r\n    <p>Fecha Maxima: {{ ticket.maxResolution | customDatetime }}</p>\r\n    <p>Estado: {{ ticket.state  }}</p>\r\n    <p>Referencia: {{ ticket.reference }}</p>\r\n    <p>Creador: {{ ticket.user }}</p>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<!--  <ion-item (click)=\"viewTicket(ticket)\" class=\"ticket-card-height\" lines=\"none\">-->\r\n<!--    <ion-icon class=\"icon\" color=\"primary\" name=\"document\"></ion-icon>-->\r\n<!--    <ion-label>-->\r\n\r\n<!--      &lt;!&ndash; FIRST ROW &ndash;&gt;-->\r\n<!--      <ion-row>-->\r\n<!--        <ion-col size=\"3\" class=\"ion-float-left\">-->\r\n<!--          <div class=\"id\">#{{ ticket.id }}</div>-->\r\n<!--        </ion-col>-->\r\n<!--        <ion-col size=\"9\" class=\"ion-float-right\">-->\r\n<!--          <div class=\"name\">{{ ticket.client }}</div>-->\r\n<!--        </ion-col>-->\r\n<!--      </ion-row>-->\r\n\r\n<!--      &lt;!&ndash; SECOND ROW &ndash;&gt;-->\r\n<!--      <ion-row class=\"highlight\">-->\r\n<!--        <ion-col size=\"6\">-->\r\n<!--          <div class=\"title\">Tipo</div>-->\r\n<!--        </ion-col>-->\r\n<!--        <ion-col size=\"6\">-->\r\n<!--          <div class=\"title\">Producto</div>-->\r\n<!--        </ion-col>-->\r\n<!--      </ion-row>-->\r\n<!--      <ion-row class=\"highlight\">-->\r\n<!--        <ion-col class=\"ion-no-padding\" size=\"6\">-->\r\n<!--          <div class=\"value totales\">{{ ticket.type }}</div>-->\r\n<!--        </ion-col>-->\r\n<!--        <ion-col class=\"ion-no-padding\" size=\"6\">-->\r\n<!--          <div class=\"value\">-->\r\n<!--            <span class=\"totales\">{{ ticket.productName }}</span>-->\r\n<!--          </div>-->\r\n<!--        </ion-col>-->\r\n<!--      </ion-row>-->\r\n\r\n<!--      &lt;!&ndash; THIRD ROW &ndash;&gt;-->\r\n<!--      <ion-row class=\"highlight\">-->\r\n<!--        <ion-col size=\"6\">-->\r\n<!--          <div class=\"title\">Fecha Maxima</div>-->\r\n<!--        </ion-col>-->\r\n<!--        <ion-col size=\"6\">-->\r\n<!--          <div class=\"title\">Estado</div>-->\r\n<!--        </ion-col>-->\r\n<!--      </ion-row>-->\r\n<!--      <ion-row class=\"highlight\">-->\r\n<!--        <ion-col class=\"ion-no-padding\" size=\"6\">-->\r\n<!--          <div class=\"value totales\">{{ ticket.maxResolution | customDatetime }}</div>-->\r\n<!--        </ion-col>-->\r\n<!--        <ion-col class=\"ion-no-padding\" size=\"6\">-->\r\n<!--          <div class=\"value\">-->\r\n<!--            <span class=\"totales\">{{ ticket.state  }}</span>-->\r\n<!--          </div>-->\r\n<!--        </ion-col>-->\r\n<!--      </ion-row>-->\r\n\r\n<!--      &lt;!&ndash; FOURTH &ndash;&gt;-->\r\n<!--      <ion-row class=\"highlight\">-->\r\n<!--        <ion-col>-->\r\n<!--          <div class=\"title\">Referencia</div>-->\r\n<!--        </ion-col>-->\r\n<!--      </ion-row>-->\r\n<!--      <ion-row class=\"highlight\">-->\r\n<!--        <ion-col class=\"ion-no-padding\" size=\"6\">-->\r\n<!--          <div class=\"value totales\">{{ ticket.reference }}</div>-->\r\n<!--        </ion-col>-->\r\n<!--      </ion-row>-->\r\n\r\n<!--      <div class=\"date\">{{ ticket.user }}</div>-->\r\n<!--    </ion-label>-->\r\n<!--  </ion-item>-->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagePlanningHarvestEstimateHarvestEstimateItemHarvestEstimateItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"item; else empty\">\r\n  <ion-item-sliding [disabled]=\"slideDisabled\">\r\n    <ion-item (click)=\"clickHarvest(item)\" [ngClass]=\"{ 'old': isOld}\" class=\"harvest\" lines=\"none\">\r\n      <ion-icon class=\"icon\" color=\"warning\" name=\"cart\"></ion-icon>\r\n      <ion-label>\r\n        <div class=\"name\">{{ item.userName }}</div>\r\n        <ion-row class=\"highlight\">\r\n          <ion-col size=\"6\">\r\n            <div class=\"title\">Fecha Inicio</div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div class=\"title\">{{ showUnitCode() | uppercase }} Totales</div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"highlight\">\r\n          <ion-col class=\"ion-no-padding\" size=\"6\">\r\n            <div class=\"value totales\">{{ item.startDate | customDate }}</div>\r\n          </ion-col>\r\n          <ion-col class=\"ion-no-padding\" size=\"6\">\r\n            <div class=\"value\">\r\n              <ion-icon [color]=\"item.color\" [name]=\"item.arrow\" size=\"large\"></ion-icon>&nbsp;\r\n              <span class=\"totales\">{{ item.quantity | number:'1.0-0':'es-CL' }} {{ showUnitCode() | uppercase }}</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"date\">Ult. Act. {{ item.registrationDate | customDatetime }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item-options side=\"start\">\r\n      <ion-item-option (click)=\"deleteItem(item)\" color=\"danger\">\r\n        <ion-icon name=\"trash\"></ion-icon>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ng-container>\r\n\r\n<ng-template #empty>\r\n  <ion-item (click)=\"clickHarvest()\" [ngClass]=\"{ 'old': isOld}\" class=\"harvest\" lines=\"none\">\r\n    <ion-icon class=\"icon\" color=\"warning\" name=\"cart\"></ion-icon>\r\n    <ion-label>\r\n      <div class=\"name\">N/A</div>\r\n      <ion-row class=\"highlight\">\r\n        <ion-col size=\"6\">\r\n          <div class=\"title\">Fecha Inicio</div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"title\">Totales</div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"highlight\">\r\n        <ion-col size=\"6\">\r\n          <div class=\"value\">00/00/0000</div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"value\">\r\n            <span>0</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"date\">Ult. Act. 00/00/0000</div>\r\n    </ion-label>\r\n  </ion-item>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/note-item/note-item.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/note-item/note-item.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagePlanningNotesNoteItemNoteItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"item; else empty\">\r\n\r\n  <ion-item-sliding [disabled]=\"slideDisabled\">\r\n    <ion-item class=\"note-item\" lines=\"none\">\r\n      <ng-container *ngIf=\"getPhotoPath()\">\r\n        <ion-thumbnail (click)=\"viewPicture()\" slot=\"start\">\r\n          <img [src]=\"getPhotoPath()\">\r\n        </ion-thumbnail>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!getPhotoPath()\" slot=\"start\">\r\n        <ion-icon class=\"icon\" color=\"danger\" name=\"mail\"></ion-icon>\r\n      </ng-container>\r\n      <ion-label (click)=\"itemClicked(item)\">\r\n        <h6 class=\"name\">{{ item.responsibleName }}</h6>\r\n        <div class=\"note\">{{ item.note || 'Sin mensaje' }}</div>\r\n        <div class=\"date\">Ult. Act. {{ item.registrationDate | customDate }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item-options side=\"start\">\r\n      <ion-item-option (click)=\"deleteItem(item)\" color=\"danger\">\r\n        <ion-icon name=\"trash\"></ion-icon>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ng-container>\r\n\r\n<ng-template #empty>\r\n  <ion-item (click)=\"itemClicked(item)\" class=\"note-item\" lines=\"none\">\r\n    <ng-container *ngIf=\"getPhotoPath()\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"getPhotoPath()\">\r\n      </ion-thumbnail>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!getPhotoPath()\" slot=\"start\">\r\n      <ion-icon class=\"icon\" color=\"danger\" name=\"mail\"></ion-icon>\r\n    </ng-container>\r\n    <ion-label>\r\n      <h6 class=\"name\">N/A</h6>\r\n      <div class=\"note\">N/A</div>\r\n      <div class=\"date\">Ult. Act. 00/00/0000</div>\r\n    </ion-label>\r\n  </ion-item>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagePlanningQualityEstimateQualityEstimateItemQualityEstimateItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"item; else empty\">\r\n\r\n  <ion-item-sliding [disabled]=\"slideDisabled\">\r\n    <ion-item (click)=\"clickItem(item)\" [ngClass]=\"{ 'old': isOld}\" class=\"quality\" lines=\"none\">\r\n      <ion-icon class=\"icon\" color=\"success\" name=\"card\"></ion-icon>\r\n      <ion-label>\r\n        <div class=\"name\">{{ item.userName }}</div>\r\n        <ion-row class=\"highlight\">\r\n          <ion-col size=\"6\">\r\n            <div class=\"title\">Calidad</div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div class=\"title\">% Exportación</div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"highlight\">\r\n          <ion-col class=\"ion-no-padding\" size=\"6\">\r\n            <div class=\"value totales\">{{ item.qualityName }}</div>\r\n          </ion-col>\r\n          <ion-col class=\"ion-no-padding\" size=\"6\">\r\n            <div class=\"value\">\r\n              <ion-icon [color]=\"item.color\" [name]=\"item.arrow\" size=\"large\"></ion-icon>&nbsp;\r\n              <span class=\"totales\">{{ item.exportPercentage }} %</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"date\">Ult. Act. {{ item.registrationDate | customDatetime }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ng-container *ngIf=\"!showChart\">\r\n      <div (click)=\"openChart()\" [ngClass]=\"{ 'old': isOld}\" class=\"chart-button\">\r\n        Desplegar Grafico\r\n        <ion-icon name=\"analytics\" slot=\"end\"></ion-icon>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"showChart\">\r\n      <div (click)=\"showChart = false\" [ngClass]=\"{ 'old': isOld}\" class=\"chart-button\">\r\n        Ocultar Grafico\r\n        <ion-icon name=\"analytics\" slot=\"end\"></ion-icon>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"showChart\">\r\n      <div [ngClass]=\"{ 'old': isOld}\" [options]=\"this.chartData\" class=\"chart\" echarts></div>\r\n    </ng-container>\r\n\r\n    <ion-item-options side=\"start\">\r\n      <ion-item-option (click)=\"deleteItem(item)\" color=\"danger\">\r\n        <ion-icon name=\"trash\"></ion-icon>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ng-container>\r\n\r\n<ng-template #empty>\r\n  <ion-item (click)=\"clickItem()\" [ngClass]=\"{ 'old': isOld}\" class=\"quality\" lines=\"none\">\r\n    <ion-icon class=\"icon\" color=\"success\" name=\"card\"></ion-icon>\r\n    <ion-label>\r\n      <div class=\"name\">N/A</div>\r\n      <ion-row class=\"highlight\">\r\n        <ion-col size=\"6\">\r\n          <div class=\"title\">Calidad</div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"title\">% Exportación</div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"highlight\">\r\n        <ion-col size=\"6\">\r\n          <div class=\"value\">N/A</div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"value\">\r\n            <span>0 %</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"date\">Ult. Act. 00/00/0000</div>\r\n    </ion-label>\r\n  </ion-item>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/image-viewer/image-viewer.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/image-viewer/image-viewer.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsImageViewerImageViewerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\" color=\"secondary\">\r\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\" style=\"color:white;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Imagen</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <ion-img (ionError)=\"showError()\" [src]=\"image\" class=\"full-image\"></ion-img>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"isLoading\">\r\n  <section class=\"bg\">\r\n    <div class=\"loader-mensaje\">\r\n      <div class=\"loader\"></div>\r\n      <div class=\"loader-text\">\r\n        {{ this.loaderService.getMessage() }}\r\n      </div>\r\n    </div>\r\n  </section>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/notifications/notifications.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/notifications/notifications.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-icon name=\"notifications\"></ion-icon>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/logged/logged.guard */
    "./src/app/guards/logged/logged.guard.ts");
    /* harmony import */


    var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guards/auth/auth.guard */
    "./src/app/guards/auth/auth.guard.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (module) {
          return module.HomePageModule;
        });
      },
      canActivate: [_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedGuard"]]
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (module) {
          return module.HomePageModule;
        });
      },
      canActivate: [_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedGuard"]]
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | auth-auth-module */
        "auth-auth-module").then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (module) {
          return module.AuthPageModule;
        });
      },
      canActivate: [_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedGuard"]]
    }, {
      path: 'home-page',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-page-home-page-module */
        "home-page-home-page-module").then(__webpack_require__.bind(null,
        /*! ./home-page/home-page.module */
        "./src/app/home-page/home-page.module.ts")).then(function (module) {
          return module.HomePagePageModule;
        });
      },
      canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/services/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/services/network/network.service */
    "./src/app/shared/services/network/network.service.ts");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/ngx/index.js");
    /* harmony import */


    var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, networkService, storeService, fcm, toastService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.networkService = networkService;
        this.storeService = storeService;
        this.fcm = fcm;
        this.toastService = toastService;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            if (_this.platform.is('ios')) {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            } else {
              _this.statusBar.overlaysWebView(false);

              _this.splashScreen.hide();
            } // CHECK PUSH PERMISSION


            _this.fcm.hasPermission().then(function () {
              // get token
              _this.fcm.getToken().then(function (token) {
                // Validar que el token no esta vacio o nulo
                if (token) {
                  _this.storeService.setPushToken(token);
                }
              }); // get refresh token


              _this.fcm.onTokenRefresh().subscribe(function (token) {
                // Validar que el token no esta vacio o nulo
                if (token) {
                  _this.storeService.setPushToken(token);
                }
              }); // Listen to notifications if app is open


              _this.fcm.onNotification().subscribe(function (data) {
                var note = data.aps.alert;

                _this.toastService.normalToast(note.body);
              });
            });

            _this.platform.pause.subscribe(function (e) {
              _this.storeService.backupState();
            });

            _this.platform.resume.subscribe(function (e) {// PENDIENTE DEFINIR SI HACE FALTA ESTE EVENTO
            });

            _this.networkService.initializeNetworkEvents();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"]
      }, {
        type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"]
      }, {
        type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      providers: [_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/components/loader/loader.component */
    "./src/app/shared/components/loader/loader.component.ts");
    /* harmony import */


    var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _angular_common_locales_es_CL__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/locales/es-CL */
    "./node_modules/@angular/common/locales/es-CL.js");
    /* harmony import */


    var _angular_common_locales_es_CL__WEBPACK_IMPORTED_MODULE_16___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_es_CL__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _angular_common_locales_extra_es_CL__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/locales/extra/es-CL */
    "./node_modules/@angular/common/locales/extra/es-CL.js");
    /* harmony import */


    var _angular_common_locales_extra_es_CL__WEBPACK_IMPORTED_MODULE_17___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_extra_es_CL__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/services/network/network.service */
    "./src/app/shared/services/network/network.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shared/services/geolocation/geolocation.service */
    "./src/app/shared/services/geolocation/geolocation.service.ts");
    /* harmony import */


    var _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./shared/services/sync/sync.service */
    "./src/app/shared/services/sync/sync.service.ts");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/ngx/index.js");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_18__["registerLocaleData"])(_angular_common_locales_es_CL__WEBPACK_IMPORTED_MODULE_16___default.a, 'es-CL', _angular_common_locales_extra_es_CL__WEBPACK_IMPORTED_MODULE_17___default.a);
    var ngxMaskOptions = {
      thousandSeparator: '.',
      decimalMarker: ','
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot({
        swipeBackEnabled: false
      }), _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(), ngx_mask__WEBPACK_IMPORTED_MODULE_25__["NgxMaskModule"].forRoot(ngxMaskOptions), _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]],
      providers: [{
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"]
      }, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__["AppVersion"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_24__["LoaderService"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _shared_services_network_network_service__WEBPACK_IMPORTED_MODULE_19__["NetworkService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_21__["Geolocation"], _shared_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_22__["GeolocationService"], _shared_services_sync_sync_service__WEBPACK_IMPORTED_MODULE_23__["SyncService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_26__["StoreService"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_27__["FCM"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guards/auth/auth.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/guards/auth/auth.guard.ts ***!
    \*******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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
    /*! ../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var AuthGuard = function AuthGuard(router, storeService) {
      var _this2 = this;

      _classCallCheck(this, AuthGuard);

      this.router = router;
      this.storeService = storeService;
      /**
       * canActivate
       */

      this.canActivate = function () {
        if (!_this2.storeService.getLoginStatus()) {
          _this2.router.navigate(['auth']);

          return false;
        }

        return true;
      };
    };

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guards/logged/logged.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/guards/logged/logged.guard.ts ***!
    \***********************************************/

  /*! exports provided: LoggedGuard */

  /***/
  function srcAppGuardsLoggedLoggedGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggedGuard", function () {
      return LoggedGuard;
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
    /*! ../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var LoggedGuard = function LoggedGuard(router, storeService) {
      var _this3 = this;

      _classCallCheck(this, LoggedGuard);

      this.router = router;
      this.storeService = storeService;
      /**
       * canActivate
       */

      this.canActivate = function () {
        if (_this3.storeService.getLoginStatus()) {
          _this3.router.navigate(['home-page']);
        }

        return true;
      };
    };

    LoggedGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]
      }];
    };

    LoggedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])], LoggedGuard);
    /***/
  },

  /***/
  "./src/app/home-page/crm/services/tickets/tickets.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home-page/crm/services/tickets/tickets.service.ts ***!
    \*******************************************************************/

  /*! exports provided: TicketsService */

  /***/
  function srcAppHomePageCrmServicesTicketsTicketsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketsService", function () {
      return TicketsService;
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


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TicketsService = function TicketsService(httpService, httpClient) {
      var _this4 = this;

      _classCallCheck(this, TicketsService);

      this.httpService = httpService;
      this.httpClient = httpClient;
      this.ticketsUrl = 'crm/ticket/list';
      this.getTicketUrl = 'mobile/ticket';
      this.storeTicketUrl = 'crm/ticket/store';
      this.ticketUsersUrl = 'crm/ticket/client';
      /**
       * getTickets
       * @param data
       */

      this.getTickets = function (data) {
        var url = _this4.httpService.buildUrl(_this4.ticketsUrl);

        return _this4.httpClient.post(url, _this4.httpService.buildBody(data), {
          headers: _this4.httpService.getHeaders()
        });
      };
      /**
       * getTicket
       * @param id
       * @param data
       */


      this.getTicket = function (id, data) {
        var url = _this4.httpService.buildUrl(_this4.getTicketUrl, id);

        return _this4.httpClient.post(url, _this4.httpService.buildBody(data), {
          headers: _this4.httpService.getHeaders()
        });
      };
      /**
       * storeTicket
       * @param data
       */


      this.storeTicket = function (data) {
        var url = _this4.httpService.buildUrl(_this4.storeTicketUrl);

        return _this4.httpClient.post(url, _this4.httpService.buildBody(data), {
          headers: _this4.httpService.getHeaders()
        });
      };
      /**
       * getTicketUsers
       * @param client
       * @param user
       */


      this.getTicketUsers = function (client, user) {
        var url = _this4.httpService.buildUrl(_this4.ticketUsersUrl);

        return _this4.httpClient.post(url, _this4.httpService.buildBody({
          id: client,
          user: user
        }), {
          headers: _this4.httpService.getHeaders()
        });
      };
    };

    TicketsService.ctorParameters = function () {
      return [{
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    TicketsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TicketsService);
    /***/
  },

  /***/
  "./src/app/home-page/crm/tickets/ticket-card/ticket-card.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/home-page/crm/tickets/ticket-card/ticket-card.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageCrmTicketsTicketCardTicketCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ticket-card-height {\n  margin: 5px;\n  width: 100%;\n}\n\n.id {\n  text-align: left;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.name {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.date {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n  margin-top: 15px;\n}\n\n.totales {\n  vertical-align: top;\n  top: 5px;\n  position: relative;\n}\n\n.title {\n  font-size: 14px;\n  text-align: center;\n}\n\n.value {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bolder;\n  color: black;\n}\n\n.icon {\n  font-size: 40px;\n}\n\n.old {\n  --background: var(--color-box-light) !important;\n}\n\nion-label {\n  margin: 0;\n  padding-bottom: 5px;\n}\n\nion-item-sliding {\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NybS90aWNrZXRzL3RpY2tldC1jYXJkL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxob21lLXBhZ2VcXGNybVxcdGlja2V0c1xcdGlja2V0LWNhcmRcXHRpY2tldC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvY3JtL3RpY2tldHMvdGlja2V0LWNhcmQvdGlja2V0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRE1BO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7RUFFQSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtFQUVBLFVBQUE7QUNQRjs7QURVQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBRUEsVUFBQTtFQUNBLGdCQUFBO0FDVEY7O0FEWUE7RUFDRSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFlBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDVEY7O0FEWUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNURjs7QURZQTtFQUNFLGVBQUE7QUNURjs7QURnQkE7RUFDRSwrQ0FBQTtBQ2JGOztBRGdCQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQ2JGOztBRGdCQTtFQUNFLDhCQUFBO0FDYkYiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvY3JtL3RpY2tldHMvdGlja2V0LWNhcmQvdGlja2V0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlja2V0LWNhcmQtaGVpZ2h0IHtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhhcnZlc3Qge1xyXG4gIC8vbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uaWQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAvL3BhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gIC8vcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICAvL3BhZGRpbmctbGVmdDogMTBweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgLy9wYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi50b3RhbGVzIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHRvcDogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi5oaWdobGlnaHQge1xyXG4gIC8vIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxpZ2h0LWJveCk7XHJcbn1cclxuXHJcbi5vbGQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYm94LWxpZ2h0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5pb24taXRlbS1zbGlkaW5nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIi50aWNrZXQtY2FyZC1oZWlnaHQge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubmFtZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRhdGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50b3RhbGVzIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ub2xkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ib3gtbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/crm/tickets/ticket-card/ticket-card.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/home-page/crm/tickets/ticket-card/ticket-card.component.ts ***!
    \****************************************************************************/

  /*! exports provided: TicketCardComponent */

  /***/
  function srcAppHomePageCrmTicketsTicketCardTicketCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketCardComponent", function () {
      return TicketCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TicketCardComponent =
    /*#__PURE__*/
    function () {
      function TicketCardComponent() {
        var _this5 = this;

        _classCallCheck(this, TicketCardComponent);

        this.ticket = null;
        this.ticketSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteTicketEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * viewTicket
         * @param ticket
         */

        this.viewTicket = function (ticket) {
          _this5.ticketSelected.emit(ticket);
        };
      }

      _createClass(TicketCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TicketCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TicketCardComponent.prototype, "ticket", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TicketCardComponent.prototype, "ticketSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TicketCardComponent.prototype, "deleteTicketEvent", void 0);
    TicketCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ticket-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ticket-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/crm/tickets/ticket-card/ticket-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ticket-card.component.scss */
      "./src/app/home-page/crm/tickets/ticket-card/ticket-card.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TicketCardComponent);
    /***/
  },

  /***/
  "./src/app/home-page/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component.scss":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/home-page/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component.scss ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagePlanningHarvestEstimateHarvestEstimateItemHarvestEstimateItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".name {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.date {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.totales {\n  vertical-align: top;\n  top: 5px;\n  position: relative;\n}\n\n.title {\n  font-size: 14px;\n  text-align: center;\n}\n\n.value {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bolder;\n  color: black;\n}\n\n.icon {\n  font-size: 40px;\n}\n\n.old {\n  --background: var(--color-box-light) !important;\n}\n\nion-label {\n  margin: 0;\n  padding-bottom: 5px;\n}\n\nion-item-sliding {\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL2hhcnZlc3QtZXN0aW1hdGUvaGFydmVzdC1lc3RpbWF0ZS1pdGVtL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxob21lLXBhZ2VcXHBsYW5uaW5nXFxoYXJ2ZXN0LWVzdGltYXRlXFxoYXJ2ZXN0LWVzdGltYXRlLWl0ZW1cXGhhcnZlc3QtZXN0aW1hdGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL2hhcnZlc3QtZXN0aW1hdGUvaGFydmVzdC1lc3RpbWF0ZS1pdGVtL2hhcnZlc3QtZXN0aW1hdGUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBRUEsVUFBQTtBQ0xGOztBRFFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7RUFFQSxVQUFBO0FDUEY7O0FEVUE7RUFDRSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNQRjs7QURVQTtFQUNFLGVBQUE7QUNQRjs7QURjQTtFQUNFLCtDQUFBO0FDWEY7O0FEY0E7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7QUNYRjs7QURjQTtFQUNFLDhCQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvaGFydmVzdC1lc3RpbWF0ZS9oYXJ2ZXN0LWVzdGltYXRlLWl0ZW0vaGFydmVzdC1lc3RpbWF0ZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhcnZlc3Qge1xyXG4gIC8vbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAvL3BhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gIC8vcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnRvdGFsZXMge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgLy8gYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtYm94KTtcclxufVxyXG5cclxuLm9sZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ib3gtbGlnaHQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtLXNsaWRpbmcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIubmFtZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRhdGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50b3RhbGVzIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ub2xkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ib3gtbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/home-page/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: HarvestEstimateItemComponent */

  /***/
  function srcAppHomePagePlanningHarvestEstimateHarvestEstimateItemHarvestEstimateItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HarvestEstimateItemComponent", function () {
      return HarvestEstimateItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HarvestEstimateItemComponent =
    /*#__PURE__*/
    function () {
      function HarvestEstimateItemComponent() {
        var _this6 = this;

        _classCallCheck(this, HarvestEstimateItemComponent);

        this.item = null;
        this.isOld = false;
        this.slideDisabled = true;
        this.units = [];
        this.harvestSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteHarvest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * showList
         * @param item
         */

        this.clickHarvest = function () {
          var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          _this6.harvestSelected.emit(item);
        };
        /**
         * deleteHarvest
         * @param item
         */


        this.deleteItem = function (item) {
          _this6.deleteHarvest.emit(item);
        };
        /**
         * showUnitCode
         */


        this.showUnitCode = function () {
          var find = _this6.units.find(function (item) {
            return item.id === _this6.item.unit;
          });

          return find ? find.code : 'N/A';
        };
      }

      _createClass(HarvestEstimateItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HarvestEstimateItemComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HarvestEstimateItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HarvestEstimateItemComponent.prototype, "isOld", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HarvestEstimateItemComponent.prototype, "slideDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], HarvestEstimateItemComponent.prototype, "units", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], HarvestEstimateItemComponent.prototype, "harvestSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], HarvestEstimateItemComponent.prototype, "deleteHarvest", void 0);
    HarvestEstimateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-harvest-estimate-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./harvest-estimate-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./harvest-estimate-item.component.scss */
      "./src/app/home-page/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HarvestEstimateItemComponent);
    /***/
  },

  /***/
  "./src/app/home-page/planning/notes/note-item/note-item.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/home-page/planning/notes/note-item/note-item.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagePlanningNotesNoteItemNoteItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".name {\n  text-align: right;\n  font-size: 10px;\n  padding-left: 10px;\n  color: var(--ion-color-medium-shade);\n  padding-bottom: 10px;\n}\n\n.date {\n  text-align: right;\n  font-size: 10px;\n  padding-left: 10px;\n  color: var(--ion-color-medium-shade);\n  padding-top: 10px;\n}\n\n.note {\n  padding-left: 10px;\n  text-align: left;\n  font-size: 14px;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.icon {\n  font-size: 40px;\n}\n\nion-label {\n  margin: 0;\n  padding-bottom: 5px;\n}\n\nion-item-sliding {\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL25vdGVzL25vdGUtaXRlbS9EOlxcbnBtXFxmeDExX21vYmlsZS9zcmNcXGFwcFxcaG9tZS1wYWdlXFxwbGFubmluZ1xcbm90ZXNcXG5vdGUtaXRlbVxcbm90ZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvbm90ZXMvbm90ZS1pdGVtL25vdGUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsOEJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9wbGFubmluZy9ub3Rlcy9ub3RlLWl0ZW0vbm90ZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGUtaXRlbSB7XHJcbiAgLy9tYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuaW9uLWl0ZW0tc2xpZGluZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5uYW1lIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uZGF0ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home-page/planning/notes/note-item/note-item.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/home-page/planning/notes/note-item/note-item.component.ts ***!
    \***************************************************************************/

  /*! exports provided: NoteItemComponent */

  /***/
  function srcAppHomePagePlanningNotesNoteItemNoteItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoteItemComponent", function () {
      return NoteItemComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/preview-any-file/ngx */
    "./node_modules/@ionic-native/preview-any-file/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/ngx/index.js");
    /* harmony import */


    var _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/contract-detail/contract-detail.service */
    "./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts");

    var NoteItemComponent =
    /*#__PURE__*/
    function () {
      function NoteItemComponent(modalController, file, previewAnyFile, device, platform, fileOpener, contractDetailService) {
        var _this7 = this;

        _classCallCheck(this, NoteItemComponent);

        this.modalController = modalController;
        this.file = file;
        this.previewAnyFile = previewAnyFile;
        this.device = device;
        this.platform = platform;
        this.fileOpener = fileOpener;
        this.contractDetailService = contractDetailService;
        this.noteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.item = null;
        this.slideDisabled = true;
        /**
         * getPhotoPath
         */

        this.getPhotoPath = function () {
          if (_this7.item && _this7.item.image) {
            return 'data:image/jpeg;base64,' + _this7.item.image;
          }

          return null;
        };
        /**
         * itemClicked
         * @param item
         */


        this.itemClicked = function () {
          var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          _this7.noteClicked.emit(item);
        };
        /**
         * deleteItem
         * @param item
         */


        this.deleteItem = function (item) {
          _this7.deleteNote.emit(item);
        };
        /**
         * viewPicture
         */


        this.viewPicture = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var bigImage, fileName, dirName, filePath, mimeType, resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.getPhotoPath() && this.device.cordova)) {
                      _context.next = 12;
                      break;
                    }

                    _context.next = 3;
                    return this.getNoteImage(this.item.id);

                  case 3:
                    bigImage = _context.sent;
                    fileName = "".concat(this.item.id, ".jpeg");
                    dirName = this.iOs ? this.file.tempDirectory : this.file.externalApplicationStorageDirectory;
                    filePath = dirName + '/' + fileName;
                    mimeType = 'image/jpeg';
                    _context.next = 10;
                    return this.createFile(dirName, fileName, mimeType, bigImage);

                  case 10:
                    resp = _context.sent;

                    if (resp) {
                      if (this.iOs) {
                        this.previewAnyFile.preview(filePath).then(function (res) {
                          return console.log(res);
                        }).catch(function (error) {
                          return console.error(error);
                        });
                      } else {
                        this.fileOpener.open(filePath, mimeType).then(function (success) {
                          console.log('File is opened');
                          console.log(success);
                        }).catch(function (e) {
                          return console.log('Error opening file', e);
                        });
                      }
                    } else {
                      console.log('no resp');
                    }

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        };
        /**
         * createFile
         * @param dirName
         * @param fileName
         * @param mimeType
         */


        this.createFile = function (dirName, fileName, mimeType, base64) {
          return new Promise(function (resolve) {
            _this7.file.createFile(dirName, fileName, true).then(function (data) {
              var byteCharacters = atob(base64);
              var byteNumbers = new Array(byteCharacters.length);

              for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              var blob = new Blob([byteArray], {
                type: mimeType
              });

              if (blob) {
                _this7.file.writeExistingFile(dirName, fileName, blob).then(function (response) {
                  resolve(true);
                }, function (error) {
                  console.log('writeExistingFile', error);
                  resolve(false);
                });
              } else {
                console.log('no blob');
                resolve(false);
              }
            }, function (error) {
              console.log('createFile', error);
              resolve(false);
            });
          });
        };
        /**
         * getNoteImage
         * @param id
         */


        this.getNoteImage = function (id) {
          return new Promise(function (resolve) {
            _this7.contractDetailService.getNoteImage(id.toString()).subscribe(function (success) {
              resolve(success.image);
            }, function (error) {
              resolve(null);
            });
          });
        };

        this.platform.ready().then(function () {
          _this7.iOs = _this7.platform.is('ios');
        });
      }

      _createClass(NoteItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NoteItemComponent;
    }();

    NoteItemComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
      }, {
        type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_4__["PreviewAnyFile"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"]
      }, {
        type: _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_7__["ContractDetailService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], NoteItemComponent.prototype, "noteClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], NoteItemComponent.prototype, "deleteNote", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NoteItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NoteItemComponent.prototype, "slideDisabled", void 0);
    NoteItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-note-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./note-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/notes/note-item/note-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./note-item.component.scss */
      "./src/app/home-page/planning/notes/note-item/note-item.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_4__["PreviewAnyFile"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"], _services_contract_detail_contract_detail_service__WEBPACK_IMPORTED_MODULE_7__["ContractDetailService"]])], NoteItemComponent);
    /***/
  },

  /***/
  "./src/app/home-page/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component.scss":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/home-page/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component.scss ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagePlanningQualityEstimateQualityEstimateItemQualityEstimateItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chart-button {\n  text-align: right;\n  padding-top: 10px;\n  padding-right: 20px;\n  padding-bottom: 5px;\n  font-size: 16px;\n}\n\n.chart {\n  height: 400px;\n}\n\n.name {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.date {\n  text-align: right;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  padding: 0;\n}\n\n.title {\n  font-size: 14px;\n  text-align: center;\n}\n\n.totales {\n  vertical-align: top;\n  top: 5px;\n  position: relative;\n}\n\n.value {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bolder;\n  color: black;\n}\n\n.icon {\n  font-size: 40px;\n}\n\n.old {\n  --background: var(--color-box-light) !important;\n  background: var(--color-box-light) !important;\n}\n\nion-label {\n  margin: 0;\n  padding-bottom: 5px;\n}\n\nion-item-sliding {\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL3F1YWxpdHktZXN0aW1hdGUvcXVhbGl0eS1lc3RpbWF0ZS1pdGVtL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxob21lLXBhZ2VcXHBsYW5uaW5nXFxxdWFsaXR5LWVzdGltYXRlXFxxdWFsaXR5LWVzdGltYXRlLWl0ZW1cXHF1YWxpdHktZXN0aW1hdGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL3F1YWxpdHktZXN0aW1hdGUvcXVhbGl0eS1lc3RpbWF0ZS1pdGVtL3F1YWxpdHktZXN0aW1hdGUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7RUFFQSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtFQUVBLFVBQUE7QUNQRjs7QURVQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFdBO0VBQ0UsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNSRjs7QURXQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1JGOztBRFdBO0VBQ0UsZUFBQTtBQ1JGOztBRGVBO0VBQ0UsK0NBQUE7RUFDQSw2Q0FBQTtBQ1pGOztBRGVBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FDWkY7O0FEZUE7RUFDRSw4QkFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL3F1YWxpdHktZXN0aW1hdGUvcXVhbGl0eS1lc3RpbWF0ZS1pdGVtL3F1YWxpdHktZXN0aW1hdGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWFsaXR5IHtcclxuICAvL21hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNoYXJ0LWJ1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNoYXJ0IHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAvL3BhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gIC8vcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnRvdGFsZXMge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi5oaWdobGlnaHQge1xyXG4gIC8vIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxpZ2h0LWJveCk7XHJcbn1cclxuXHJcbi5vbGQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYm94LWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJveC1saWdodCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuaW9uLWl0ZW0tc2xpZGluZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5jaGFydC1idXR0b24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNoYXJ0IHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLm5hbWUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kYXRlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvdGFsZXMge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0b3A6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udmFsdWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLm9sZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYm94LWxpZ2h0KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ib3gtbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/home-page/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: QualityEstimateItemComponent */

  /***/
  function srcAppHomePagePlanningQualityEstimateQualityEstimateItemQualityEstimateItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QualityEstimateItemComponent", function () {
      return QualityEstimateItemComponent;
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


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var QualityEstimateItemComponent =
    /*#__PURE__*/
    function () {
      function QualityEstimateItemComponent(storeService) {
        var _this8 = this;

        _classCallCheck(this, QualityEstimateItemComponent);

        this.storeService = storeService;
        this.item = null;
        this.details = [];
        this.isOld = false;
        this.slideDisabled = true;
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showChart = false;
        /**
         * clickItem
         * @param item
         */

        this.clickItem = function () {
          var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          _this8.itemSelected.emit(item);
        };
        /**
         * deleteItem
         * @param item
         */


        this.deleteItem = function (item) {
          _this8.itemDelete.emit(item);
        };
        /**
         * openChart
         */


        this.openChart = function () {
          _this8.calibers = _this8.storeService.getCalibers();

          var validCalibres = _this8.details.map(function (item) {
            return item.qualityName;
          });

          var filteredCalibers = _this8.calibers.filter(function (item) {
            return item.species === _this8.costCenter.species && validCalibres.includes(item.name.trim());
          });

          var xAxis = {
            type: 'category',
            data: filteredCalibers.map(function (item) {
              return item.code;
            })
          };
          var yAxis = {
            type: 'value',
            min: 0,
            max: 100
          };
          var series = [{
            data: _this8.details.map(function (item) {
              return item.value;
            }),
            type: 'bar',
            name: '%'
          }];
          _this8.chartData = {
            title: {
              text: 'Estimacion de Calidad',
              subtext: 'Porcentajes Calibres'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              },
              formatter: function formatter(params) {
                var code = params[0].name;

                var caliber = _this8.calibers.find(function (item) {
                  return item.code === code;
                });

                return caliber ? caliber.name : 'N/A';
              }
            },
            label: {
              show: true,
              formatter: '{c}{a}'
            },
            yAxis: yAxis,
            xAxis: xAxis,
            series: series
          };
          _this8.showChart = true;
        };
      }

      _createClass(QualityEstimateItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QualityEstimateItemComponent;
    }();

    QualityEstimateItemComponent.ctorParameters = function () {
      return [{
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QualityEstimateItemComponent.prototype, "costCenter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QualityEstimateItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], QualityEstimateItemComponent.prototype, "details", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QualityEstimateItemComponent.prototype, "isOld", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QualityEstimateItemComponent.prototype, "slideDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], QualityEstimateItemComponent.prototype, "itemSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], QualityEstimateItemComponent.prototype, "itemDelete", void 0);
    QualityEstimateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quality-estimate-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quality-estimate-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quality-estimate-item.component.scss */
      "./src/app/home-page/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])], QualityEstimateItemComponent);
    /***/
  },

  /***/
  "./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/home-page/planning/services/contract-detail/contract-detail.service.ts ***!
    \****************************************************************************************/

  /*! exports provided: ContractDetailService */

  /***/
  function srcAppHomePagePlanningServicesContractDetailContractDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContractDetailService", function () {
      return ContractDetailService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");

    var ContractDetailService = function ContractDetailService(authService, httpClient, loaderService, httpService) {
      var _this9 = this;

      _classCallCheck(this, ContractDetailService);

      this.authService = authService;
      this.httpClient = httpClient;
      this.loaderService = loaderService;
      this.httpService = httpService;
      this.getCostCenterUrl = 'costcenter';
      this.storeHarvestUrl = 'costcenter/store/harvest';
      this.storeQualityUrl = 'costcenter/store/quality';
      this.storeNoteUrl = 'costcenter/store/note';
      this.getNoteImageUrl = 'costcenter/note/image';
      this.storeCostCenterGeolocation = 'costcenter/store/geolocation-user';
      /**
       * storeHarvest
       * @param data
       */

      this.storeHarvest = function (data) {
        var url = _this9.httpService.buildUrl(_this9.storeHarvestUrl);

        return _this9.httpClient.post(url, _this9.httpService.buildBody(data), {
          headers: _this9.httpService.getHeaders()
        });
      };
      /**
       * storeQuality
       * @param data
       */


      this.storeQuality = function (data) {
        var url = _this9.httpService.buildUrl(_this9.storeQualityUrl);

        return _this9.httpClient.post(url, _this9.httpService.buildBody(data), {
          headers: _this9.httpService.getHeaders()
        });
      };
      /**
       * storeNote
       * @param data
       */


      this.storeNote = function (data) {
        var url = _this9.httpService.buildUrl(_this9.storeNoteUrl);

        return _this9.httpClient.post(url, _this9.httpService.buildBody({
          note: data
        }), {
          headers: _this9.httpService.getHeaders()
        });
      };
      /**
       * updateGeolocationCostCenter
       * @param data
       */


      this.updateGeolocationCostCenter = function (data) {
        var url = _this9.httpService.buildUrl(_this9.storeCostCenterGeolocation);

        return _this9.httpClient.post(url, _this9.httpService.buildBody(data), {
          headers: _this9.httpService.getHeaders()
        });
      };
      /**
       * getCostCenterDetail
       * @param id
       */


      this.getCostCenterDetail = function (id) {
        var url = _this9.httpService.buildUrl(_this9.getCostCenterUrl, id);

        return _this9.httpClient.post(url, _this9.httpService.buildBody(), {
          headers: _this9.httpService.getHeaders()
        });
      };
      /**
       * getNoteImage
       * @param id
       */


      this.getNoteImage = function (id) {
        var url = _this9.httpService.buildUrl(_this9.getNoteImageUrl, id);

        return _this9.httpClient.post(url, _this9.httpService.buildBody(), {
          headers: _this9.httpService.getHeaders()
        });
      };
    };

    ContractDetailService.ctorParameters = function () {
      return [{
        type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }];
    };

    ContractDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])], ContractDetailService);
    /***/
  },

  /***/
  "./src/app/shared/components/image-viewer/image-viewer.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/image-viewer/image-viewer.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsImageViewerImageViewerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full-image {\n  position: relative;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2Utdmlld2VyL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGltYWdlLXZpZXdlclxcaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLWltYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4iLCIuZnVsbC1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/image-viewer/image-viewer.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/image-viewer/image-viewer.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ImageViewerComponent */

  /***/
  function srcAppSharedComponentsImageViewerImageViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageViewerComponent", function () {
      return ImageViewerComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");

    var ImageViewerComponent =
    /*#__PURE__*/
    function () {
      function ImageViewerComponent(modalController, toastService) {
        var _this10 = this;

        _classCallCheck(this, ImageViewerComponent);

        this.modalController = modalController;
        this.toastService = toastService;
        this.image = null;

        this.showError = function () {
          _this10.toastService.warningToast('No se puede mostrar la imagen');

          _this10.closeModal();
        };
        /**
         * closeModal
         */


        this.closeModal = function () {
          _this10.modalController.dismiss(status);
        };
      }

      _createClass(ImageViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageViewerComponent;
    }();

    ImageViewerComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ImageViewerComponent.prototype, "image", void 0);
    ImageViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-viewer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-viewer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/image-viewer/image-viewer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-viewer.component.scss */
      "./src/app/shared/components/image-viewer/image-viewer.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])], ImageViewerComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/loader/loader.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/loader/loader.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsLoaderLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.24);\n  -webkit-animation-name: view;\n  /* Safari 4.0 - 8.0 */\n  -webkit-animation-duration: 1s;\n  /* Safari 4.0 - 8.0 */\n  -webkit-animation-timing-function: ease-out;\n  animation-name: view;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in;\n          animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes view {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes view {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n  }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n            transform: scale3d(0.97, 0.97, 0.97);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n  }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n            transform: scale3d(0.97, 0.97, 0.97);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n#logo {\n  position: relative;\n  top: 25vh;\n  width: 150px;\n  height: 150px;\n  margin: 0 auto;\n}\n\n#message {\n  position: relative;\n  top: 30vh;\n  width: 75vw;\n  height: 200px;\n  margin: 0 auto;\n  text-align: center;\n  font-weight: bold;\n  font-size: 2em;\n  color: black;\n}\n\n.loader-mensaje {\n  background: white;\n  padding: 20px;\n  width: 57%;\n  border-radius: 10px;\n  position: absolute;\n  top: 46.5%;\n  margin-left: 22.5%;\n  height: 85px;\n  -webkit-animation-duration: 0.75s;\n          animation-duration: 0.75s;\n  -webkit-animation-name: zoomIn;\n          animation-name: zoomIn;\n}\n\n.loader-text {\n  position: absolute;\n  top: 30.5px;\n  left: 59px;\n  width: 56%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: bold;\n}\n\n.loader {\n  top: 12px;\n  color: black;\n  font-size: 20px;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n}\n\n@-webkit-keyframes load6 {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%, 95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%, 59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n\n@keyframes load6 {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%, 95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%, 59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n\n@-webkit-keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQThCLHFCQUFBO0VBQzlCLDhCQUFBO0VBQWdDLHFCQUFBO0VBQ2hDLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsVUFBQTtFQ0dGO0VEREE7SUFDRSxVQUFBO0VDR0Y7QUFDRjs7QURBQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0VEQUE7SUFDRSxVQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFO0lBTUUsc0VBQUE7WUFBQSw4REFBQTtFQ0pGO0VET0E7SUFDRSxVQUFBO0lBQ0EseUNBQUE7WUFBQSxpQ0FBQTtFQ0xGO0VEUUE7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VDTkY7RURTQTtJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RUNQRjtFRFVBO0lBQ0UsVUFBQTtJQUNBLDRDQUFBO1lBQUEsb0NBQUE7RUNSRjtFRFdBO0lBQ0UsNENBQUE7WUFBQSxvQ0FBQTtFQ1RGO0VEWUE7SUFDRSxVQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFQ1ZGO0FBQ0Y7O0FEekJBO0VBQ0U7SUFNRSxzRUFBQTtZQUFBLDhEQUFBO0VDSkY7RURPQTtJQUNFLFVBQUE7SUFDQSx5Q0FBQTtZQUFBLGlDQUFBO0VDTEY7RURRQTtJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RUNORjtFRFNBO0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFQ1BGO0VEVUE7SUFDRSxVQUFBO0lBQ0EsNENBQUE7WUFBQSxvQ0FBQTtFQ1JGO0VEV0E7SUFDRSw0Q0FBQTtZQUFBLG9DQUFBO0VDVEY7RURZQTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDVkY7QUFDRjs7QURjQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHlDQUFBO1lBQUEsaUNBQUE7RUNaRjtFRGVBO0lBQ0UsVUFBQTtFQ2JGO0FBQ0Y7O0FES0E7RUFDRTtJQUNFLFVBQUE7SUFDQSx5Q0FBQTtZQUFBLGlDQUFBO0VDWkY7RURlQTtJQUNFLFVBQUE7RUNiRjtBQUNGOztBRGdCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ2RGOztBRGlCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ2RGOztBRGlCQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FDZEY7O0FEaUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2RGOztBRGtCQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFFQSx3QkFBQTtFQUNBLHFFQUFBO0VBQ0EsNkRBQUE7QUNqQkY7O0FEb0JBO0VBQ0U7SUFDRSxtSEFBQTtFQ2pCRjtFRG1CQTtJQUVFLG1IQUFBO0VDbEJGO0VEb0JBO0lBRUUsbUpBQUE7RUNuQkY7RURxQkE7SUFDRSxrSkFBQTtFQ25CRjtFRHFCQTtJQUNFLGdKQUFBO0VDbkJGO0VEcUJBO0lBQ0UsbUhBQUE7RUNuQkY7QUFDRjs7QURzQkE7RUFDRTtJQUNFLG1IQUFBO0VDcEJGO0VEc0JBO0lBRUUsbUhBQUE7RUNyQkY7RUR1QkE7SUFFRSxtSkFBQTtFQ3RCRjtFRHdCQTtJQUNFLGtKQUFBO0VDdEJGO0VEd0JBO0lBQ0UsZ0pBQUE7RUN0QkY7RUR3QkE7SUFDRSxtSEFBQTtFQ3RCRjtBQUNGOztBRHlCQTtFQUNFO0lBQ0UsK0JBQUE7SUFDQSx1QkFBQTtFQ3ZCRjtFRHlCQTtJQUNFLGlDQUFBO0lBQ0EseUJBQUE7RUN2QkY7QUFDRjs7QUQwQkE7RUFDRTtJQUNFLCtCQUFBO0lBQ0EsdUJBQUE7RUN4QkY7RUQwQkE7SUFDRSxpQ0FBQTtJQUNBLHlCQUFBO0VDeEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHZpZXc7IC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7IC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB2aWV3O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHZpZXcge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdmlldyB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2VJbiB7XHJcbiAgZnJvbSxcclxuICAyMCUsXHJcbiAgNDAlLFxyXG4gIDYwJSxcclxuICA4MCUsXHJcbiAgdG8ge1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XHJcbiAgfVxyXG5cclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NywgMC45NywgMC45Nyk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgem9vbUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyNXZoO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4jbWVzc2FnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMzB2aDtcclxuICB3aWR0aDogNzV2dztcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5sb2FkZXItbWVuc2FqZSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogNTclO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDYuNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIyLjUlO1xyXG4gIGhlaWdodDogODVweDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNzVzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW47XHJcbn1cclxuXHJcbi5sb2FkZXItdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAuNXB4O1xyXG4gIGxlZnQ6IDU5cHg7XHJcbiAgd2lkdGg6IDU2JTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4ubG9hZGVyIHtcclxuICB0b3A6IDEycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICAvL3RleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLy9tYXJnaW46IDcycHggYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ2IDEuN3MgaW5maW5pdGUgZWFzZSwgcm91bmQgMS43cyBpbmZpbml0ZSBlYXNlO1xyXG4gIGFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNiB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgNSUsXHJcbiAgOTUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwJSxcclxuICA1OSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4wODdlbSAtMC44MjVlbSAwIC0wLjQyZW0sIC0wLjE3M2VtIC0wLjgxMmVtIDAgLTAuNDRlbSwgLTAuMjU2ZW0gLTAuNzg5ZW0gMCAtMC40NmVtLCAtMC4yOTdlbSAtMC43NzVlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zMzhlbSAtMC43NThlbSAwIC0wLjQyZW0sIC0wLjU1NWVtIC0wLjYxN2VtIDAgLTAuNDRlbSwgLTAuNjcxZW0gLTAuNDg4ZW0gMCAtMC40NmVtLCAtMC43NDllbSAtMC4zNGVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDM4JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjM3N2VtIC0wLjc0ZW0gMCAtMC40MmVtLCAtMC42NDVlbSAtMC41MjJlbSAwIC0wLjQ0ZW0sIC0wLjc3NWVtIC0wLjI5N2VtIDAgLTAuNDZlbSwgLTAuODJlbSAtMC4wOWVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZDYge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDUlLFxyXG4gIDk1JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMCUsXHJcbiAgNTklIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAzOCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91bmQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3VuZCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsIi5iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB2aWV3O1xuICAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICBhbmltYXRpb24tbmFtZTogdmlldztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHZpZXcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHZpZXcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcbiAgZnJvbSwgMjAlLCA0MCUsIDYwJSwgODAlLCB0byB7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMywgMS4wMywgMS4wMyk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NywgMC45NywgMC45Nyk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuI2xvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjV2aDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuI21lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzB2aDtcbiAgd2lkdGg6IDc1dnc7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubG9hZGVyLW1lbnNhamUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDU3JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2LjUlO1xuICBtYXJnaW4tbGVmdDogMjIuNSU7XG4gIGhlaWdodDogODVweDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1cztcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21Jbjtcbn1cblxuLmxvYWRlci10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwLjVweDtcbiAgbGVmdDogNTlweDtcbiAgd2lkdGg6IDU2JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9hZGVyIHtcbiAgdG9wOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XG4gIGFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNiB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICB9XG4gIDUlLCA5NSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XG4gIH1cbiAgMTAlLCA1OSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcbiAgfVxuICAyMCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xuICB9XG4gIDM4JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZDYge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcbiAgfVxuICA1JSwgOTUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICB9XG4gIDEwJSwgNTklIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XG4gIH1cbiAgMjAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcbiAgfVxuICAzOCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91bmQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3VuZCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/loader/loader.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/loader/loader.component.ts ***!
    \**************************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppSharedComponentsLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
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


    var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");

    var LoaderComponent =
    /*#__PURE__*/
    function () {
      function LoaderComponent(loaderService) {
        _classCallCheck(this, LoaderComponent);

        this.loaderService = loaderService;
        this.isLoading = false;
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.loaderService.getLoaderStatus().subscribe(function (state) {
            return _this11.isLoading = state;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.loading$.unsubscribe();
        }
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ctorParameters = function () {
      return [{
        type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }];
    };

    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loader.component.scss */
      "./src/app/shared/components/loader/loader.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/notifications/notifications.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/notifications/notifications.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsNotificationsNotificationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  font-size: 30px;\n  color: white;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9EOlxcbnBtXFxmeDExX21vYmlsZS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxub3RpZmljYXRpb25zXFxub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4iLCJpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/notifications/notifications.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/notifications/notifications.component.ts ***!
    \****************************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppSharedComponentsNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotificationsComponent =
    /*#__PURE__*/
    function () {
      function NotificationsComponent() {
        _classCallCheck(this, NotificationsComponent);
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/notifications/notifications.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.component.scss */
      "./src/app/shared/components/notifications/notifications.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotificationsComponent);
    /***/
  },

  /***/
  "./src/app/shared/pipes/custom-date/custom-date.pipe.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/pipes/custom-date/custom-date.pipe.ts ***!
    \**************************************************************/

  /*! exports provided: CustomDatePipe */

  /***/
  function srcAppSharedPipesCustomDateCustomDatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDatePipe", function () {
      return CustomDatePipe;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

    var CustomDatePipe =
    /*#__PURE__*/
    function (_angular_common__WEBP) {
      _inherits(CustomDatePipe, _angular_common__WEBP);

      function CustomDatePipe() {
        _classCallCheck(this, CustomDatePipe);

        return _possibleConstructorReturn(this, _getPrototypeOf(CustomDatePipe).apply(this, arguments));
      }

      _createClass(CustomDatePipe, [{
        key: "transform",
        value: function transform(date) {
          if (moment__WEBPACK_IMPORTED_MODULE_3__(date).isValid()) {
            var parsed = moment__WEBPACK_IMPORTED_MODULE_3__(this.cleanDate(date));
            return _get(_getPrototypeOf(CustomDatePipe.prototype), "transform", this).call(this, parsed, 'dd/MM/yyyy');
          }

          console.log('bad date', date);
          return "".concat(date, "*");
        }
        /**
         * cleanDate
         * @param date
         */

      }, {
        key: "cleanDate",
        value: function cleanDate(date) {
          if (date.includes('T')) {
            return date.split('T')[0];
          }

          if (date.includes('Z')) {
            return date.split('.')[0];
          }

          return date;
        }
      }]);

      return CustomDatePipe;
    }(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]);

    CustomDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'customDate'
    })], CustomDatePipe);
    /***/
  },

  /***/
  "./src/app/shared/pipes/custom-datetime/custom-datetime.pipe.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/pipes/custom-datetime/custom-datetime.pipe.ts ***!
    \**********************************************************************/

  /*! exports provided: CustomDatetimePipe */

  /***/
  function srcAppSharedPipesCustomDatetimeCustomDatetimePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDatetimePipe", function () {
      return CustomDatetimePipe;
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


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var CustomDatetimePipe =
    /*#__PURE__*/
    function (_angular_common__WEBP2) {
      _inherits(CustomDatetimePipe, _angular_common__WEBP2);

      function CustomDatetimePipe() {
        _classCallCheck(this, CustomDatetimePipe);

        return _possibleConstructorReturn(this, _getPrototypeOf(CustomDatetimePipe).apply(this, arguments));
      }

      _createClass(CustomDatetimePipe, [{
        key: "transform",
        value: function transform(date) {
          if (moment__WEBPACK_IMPORTED_MODULE_2__(date).isValid()) {
            var parsed = moment__WEBPACK_IMPORTED_MODULE_2__(this.cleanDate(date));
            return _get(_getPrototypeOf(CustomDatetimePipe.prototype), "transform", this).call(this, parsed, 'dd/MM/yyyy HH:mm:ss');
          }

          console.log('bad time', date);
          return "".concat(date, "*");
        }
        /**
         * cleanDate
         * @param date
         */

      }, {
        key: "cleanDate",
        value: function cleanDate(date) {
          if (date.includes('T')) {
            return date.split('T')[0];
          }

          if (date.includes('Z')) {
            return date.split('.')[0];
          }

          return date;
        }
      }]);

      return CustomDatetimePipe;
    }(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]);

    CustomDatetimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'customDatetime'
    })], CustomDatetimePipe);
    /***/
  },

  /***/
  "./src/app/shared/pipes/rut/rut.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/pipes/rut/rut.pipe.ts ***!
    \**********************************************/

  /*! exports provided: RutPipe */

  /***/
  function srcAppSharedPipesRutRutPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RutPipe", function () {
      return RutPipe;
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


    var _primetec_primetec_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @primetec/primetec-angular */
    "./node_modules/@primetec/primetec-angular/fesm2015/primetec-primetec-angular.js");

    var RutPipe =
    /*#__PURE__*/
    function () {
      function RutPipe() {
        _classCallCheck(this, RutPipe);
      }

      _createClass(RutPipe, [{
        key: "transform",
        value: function transform(rut) {
          return Object(_primetec_primetec_angular__WEBPACK_IMPORTED_MODULE_2__["formatRut"])(rut);
        }
      }]);

      return RutPipe;
    }();

    RutPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'rut'
    })], RutPipe);
    /***/
  },

  /***/
  "./src/app/shared/services/alert/alert.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/alert/alert.service.ts ***!
    \********************************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppSharedServicesAlertAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var AlertService =
    /**
     * Este servicio tiene como finalidad convertir las alertas de ionic
     * en promesas y que devuelvan true|false de acuerdo al boton que
     * presionen.
     *
     * Esto se debe a que no se puede usar aync/await dentro de los
     * handlers de la alerta.
     */
    function AlertService(alertController) {
      var _this12 = this;

      _classCallCheck(this, AlertService);

      this.alertController = alertController;
      /**
       * confirmAlert
       * @param message
       */

      this.confirmAlert = function () {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Confirma ?';
        return new Promise(function (resolve) {
          _this12.alertController.create({
            message: message,
            buttons: [{
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: function handler() {
                return resolve(false);
              }
            }, {
              text: 'Si',
              handler: function handler() {
                return resolve(true);
              }
            }]
          }).then(function (alert) {
            alert.present();
          });
        });
      };
    };

    AlertService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], AlertService);
    /***/
  },

  /***/
  "./src/app/shared/services/auth/auth.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/auth/auth.service.ts ***!
    \******************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../http/http.service */
    "./src/app/shared/services/http/http.service.ts");

    var AuthService = function AuthService(httpClient, httpService, storage, router) {
      var _this13 = this;

      _classCallCheck(this, AuthService);

      this.httpClient = httpClient;
      this.httpService = httpService;
      this.storage = storage;
      this.router = router;
      this.loginUrl = 'auth/login';
      this.createConnectionUrl = 'user/create-connection';
      this.testConnectionUrl = 'auth/test-connection';
      this.checkUrl = 'auth/check-token';
      this.recoveryPasswordUrl = 'auth/password';
      this.savePushTokenUrl = 'auth/save-push-token';
      /**
       * savePushToken
       * @param user
       * @param token
       */

      this.savePushToken = function (user, token) {
        var url = _this13.httpService.buildUrl(_this13.savePushTokenUrl);

        return _this13.httpClient.post(url, _this13.httpService.buildBody({
          user: user,
          token: token
        }));
      };
      /**
       * login
       * @param data
       * username
       * password
       */


      this.login = function (data) {
        var url = _this13.httpService.buildUrl(_this13.loginUrl);

        return _this13.httpClient.post(url, _this13.httpService.buildBody(data));
      };
      /**
       * login
       * @param data
       * username
       * password
       */


      this.recoveryPassword = function (data) {
        var url = _this13.httpService.buildUrl(_this13.recoveryPasswordUrl);

        return _this13.httpClient.post(url, _this13.httpService.buildBody(data));
      };
      /**
       * createConnectionPin
       * @param pin
       */


      this.createPinConnection = function (pin) {
        var url = _this13.httpService.buildUrl(_this13.createConnectionUrl);

        return _this13.httpClient.post(url, _this13.httpService.buildBody(pin), {
          headers: _this13.httpService.getHeaders()
        });
      };
      /**
       * check token
       * @param pin
       */


      this.checkToken = function () {
        var url = _this13.httpService.buildUrl(_this13.checkUrl);

        return _this13.httpClient.post(url, _this13.httpService.buildBody(null), {
          headers: _this13.httpService.getHeaders()
        });
      };
      /**
       * setConnection
       * @param connection
       */


      this.setConnection = function (connection) {
        localStorage.setItem('connection', JSON.stringify(connection));
      };
      /**
       * getConnection
       */


      this.getConnection = function () {
        var connection = localStorage.getItem('connection');
        return connection ? JSON.parse(connection) : null;
      };
      /**
       * deleteConnection
       */


      this.removeConnection = function () {
        localStorage.removeItem('connection');
      };
      /**
       * setCompany
       * @param company
       */


      this.setCompany = function (company) {
        localStorage.setItem('company', JSON.stringify(company));
      };
      /**
       * getCompany
       */


      this.getCompany = function () {
        var company = localStorage.getItem('company');
        return company ? JSON.parse(company) : null;
      };
      /**
       * removeCompany
       */


      this.removeCompany = function () {
        localStorage.removeItem('company');
      };
      /**
       * getToken
       */


      this.getToken = function () {
        return localStorage.getItem('token');
      };
      /**
       * setToken
       * @param token
       */


      this.setToken = function (token) {
        localStorage.setItem('token', token);
      };
      /**
       * setToken
       * @param token
       */


      this.removeToken = function () {
        localStorage.removeItem('token');
      };
      /**
       * setLoggedIn
       */


      this.setLoggedIn = function () {
        localStorage.setItem('logged', 'true');
      };
      /**
       * setLoggedOut
       */


      this.setLoggedOut = function () {
        localStorage.setItem('logged', 'false');
      };
      /**
       * getLoggedStatus
       */


      this.getLoggedStatus = function () {
        return localStorage.getItem('logged');
      };
      /**
       * setRemember
       */


      this.setRemember = function () {
        localStorage.setItem('remember', 'true');
      };
      /**
       * removeRemember
       */


      this.removeRemember = function () {
        localStorage.setItem('remember', 'false');
      };
      /**
       * getRememberStatus
       */


      this.getRememberStatus = function () {
        return localStorage.getItem('remember');
      };
      /**
       * closeSesion
       */


      this.closeSesion = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this13, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this.getRememberStatus() !== 'true')) {
                    _context2.next = 5;
                    break;
                  }

                  _context2.next = 3;
                  return localStorage.clear();

                case 3:
                  _context2.next = 5;
                  return this.storage.clear();

                case 5:
                  this.setLoggedOut();
                  this.removeToken();
                  this.removeConnection();
                  this.router.navigate(['auth/login']);

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
      };
    };

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/shared/services/camera/camera.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/camera/camera.service.ts ***!
    \**********************************************************/

  /*! exports provided: CameraService */

  /***/
  function srcAppSharedServicesCameraCameraServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraService", function () {
      return CameraService;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");

    var CameraService = function CameraService(camera, toastService, loaderService) {
      var _this14 = this;

      _classCallCheck(this, CameraService);

      this.camera = camera;
      this.toastService = toastService;
      this.loaderService = loaderService;
      /**
       * openCamera
       */

      this.openCamera = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this14, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          var options;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  options = Object.assign({}, this.commonOptions, {
                    saveToPhotoAlbum: true,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    sourceType: this.camera.PictureSourceType.CAMERA
                  });
                  _context3.next = 3;
                  return this.getImage(options);

                case 3:
                  return _context3.abrupt("return", _context3.sent);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));
      };
      /**
       * openGallery
       */


      this.openGallery = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this14, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          var options;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  options = Object.assign({}, this.commonOptions, {
                    destinationType: this.camera.DestinationType.DATA_URL,
                    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                  });
                  _context4.next = 3;
                  return this.getImage(options);

                case 3:
                  return _context4.abrupt("return", _context4.sent);

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));
      };
      /**
       * getImage
       * @param options
       */


      this.getImage = function (options) {
        return new Promise(function (resolve) {
          _this14.camera.getPicture(options).then(function (image) {
            resolve(image);
          }, function (error) {
            _this14.toastService.warningToast(error);

            resolve(null);
          });
        });
      };

      this.commonOptions = {
        quality: 100,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 1080,
        targetHeight: 720,
        correctOrientation: true
      };
    };

    CameraService.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
      }, {
        type: _loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }];
    };

    CameraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])], CameraService);
    /***/
  },

  /***/
  "./src/app/shared/services/detect-platform/detect-platform.service.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/services/detect-platform/detect-platform.service.ts ***!
    \****************************************************************************/

  /*! exports provided: DetectPlatformService */

  /***/
  function srcAppSharedServicesDetectPlatformDetectPlatformServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetectPlatformService", function () {
      return DetectPlatformService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");

    var DetectPlatformService = function DetectPlatformService(device, platform) {
      var _this15 = this;

      _classCallCheck(this, DetectPlatformService);

      this.device = device;
      this.platform = platform;
      this.isIos = false;
      this.hasCordova = false;
      /**
       * detectPlatform
       * @return {boolean}
       */

      this.detectPlatform = function () {
        return _this15.platform.is('ios') === true;
      };
      /**
       * checkCordova
       */


      this.checkCordova = function () {
        return _this15.device.cordova !== null;
      };

      this.isIos = this.detectPlatform();
      this.hasCordova = this.checkCordova();
    };

    DetectPlatformService.ctorParameters = function () {
      return [{
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    DetectPlatformService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], DetectPlatformService);
    /***/
  },

  /***/
  "./src/app/shared/services/geolocation/geolocation.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/services/geolocation/geolocation.service.ts ***!
    \********************************************************************/

  /*! exports provided: GeolocationService */

  /***/
  function srcAppSharedServicesGeolocationGeolocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationService", function () {
      return GeolocationService;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GeolocationService = function GeolocationService(geolocation) {
      var _this16 = this;

      _classCallCheck(this, GeolocationService);

      this.geolocation = geolocation; // Ubicacion por defecto santiago

      this.lat = -33.4724728;
      this.lng = -70.9100195;
      this.positionHistory = [];
      this.currentPosition = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
        lat: this.lat,
        lng: this.lng
      });
      this.positionOptions = {
        enableHighAccuracy: true,
        timeout: 5000
      };
      /**
       * getCurrentPosition
       */

      this.getCurrentPosition = function () {
        return _this16.currentPosition.asObservable();
      };
      /**
       * showHistory
       */


      this.showHistory = function () {
        return _this16.positionHistory;
      };
      /**
       * updatePosition
       * @param lat
       * @param lng
       */


      this.updatePosition = function (lat, lng) {
        _this16.currentPosition.next({
          lat: lat,
          lng: lng
        });
      };
      /**
       * startTracker
       */


      this.startTracker = function () {
        _this16.geolocation.watchPosition().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (p) {
          return p.coords !== undefined;
        })).subscribe(function (position) {
          _this16.positionHistory.push({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });

          _this16.updatePosition(position.coords.latitude, position.coords.longitude);
        }, function (error) {
          console.log({
            error: error
          });
        });
      };

      this.geolocation.getCurrentPosition(this.positionOptions).then(function (data) {
        _this16.updatePosition(data.coords.latitude, data.coords.longitude);
      }).catch(function (error) {
        console.log('getCurrentPosition', error);
      });
      this.startTracker();
    };

    GeolocationService.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }];
    };

    GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])], GeolocationService);
    /***/
  },

  /***/
  "./src/app/shared/services/http/http.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/http/http.service.ts ***!
    \******************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppSharedServicesHttpHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _store_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var HttpService = function HttpService(router, storeService, toastService) {
      var _this17 = this;

      _classCallCheck(this, HttpService);

      this.router = router;
      this.storeService = storeService;
      this.toastService = toastService;
      this.apiUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url, "/api/");
      /**
       * buildUrl
       * @param url
       * @param id
       */

      this.buildUrl = function (url) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return id == null ? _this17.apiUrl + url : _this17.apiUrl + "".concat(url, "/").concat(id);
      };
      /**
       * getHeaders
       * @return HttpHeaders
       */


      this.getHeaders = function () {
        var token = _this17.storeService.getToken();

        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
          Authorization: token !== null ? 'Bearer ' + token : '',
          'Content-Type': 'application/json'
        });
      };
      /**
       * buildBody
       * @param data
       */


      this.buildBody = function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var connection = _this17.storeService.getActiveConnection();

        if (data) {
          return Object.assign({}, data, {
            app: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].app_name,
            connectionId: connection ? connection.token : null
          });
        } else {
          return {
            app: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].app_name,
            connectionId: connection ? connection.token : null
          };
        }
      };
      /**
       * errorHandler
       * @param error
       */


      this.errorHandler = function (error) {
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
          /*
          console.log('name', error.name);
          console.log('message', error.message);
          console.log('error', error.error);
          console.log('status', error.status);
          console.log('statusText', error.statusText);
          */
          var _error$error = error.error,
              name = _error$error.name,
              message = _error$error.message;

          switch (error.status) {
            case 0:
              _this17.toastService.errorToast('No hay conexion con el servidor.');

              break;

            case 400:
            case 404:
              _this17.toastService.errorToast(message);

              break;

            case 401:
              _this17.toastService.errorToast('Su sesion ha caducado');

              _this17.router.navigate(['/home-page']);

              break;

            case 403:
              _this17.toastService.errorToast('No tiene conexiones disponibles');

              _this17.router.navigate(['/home-page']);

              break;

            case 500:
              _this17.toastService.errorToast('API Error');

              break;

            default:
              _this17.toastService.errorToast(message);

              break;
          }
        } else {
          console.log('No Http error', error);
          return 'No Http error';
        }
      };
    };

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _store_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"]
      }, {
        type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }];
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _store_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"], _toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])], HttpService);
    /***/
  },

  /***/
  "./src/app/shared/services/loader/loader.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/loader/loader.service.ts ***!
    \**********************************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppSharedServicesLoaderLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoaderService =
    /*#__PURE__*/
    function () {
      function LoaderService() {
        var _this18 = this;

        _classCallCheck(this, LoaderService);

        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.message = 'Cargando...';
        /**
         * startLoader
         * @param message
         */

        this.startLoader = function () {
          var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Cargando...';
          _this18.message = message;

          _this18.isLoading.next(true);
        };
        /**
         * stopLoader
         */


        this.stopLoader = function () {
          _this18.message = '';

          _this18.isLoading.next(false);
        };
        /**
         * getMessage
         */


        this.getMessage = function () {
          return _this18.message;
        };
      }
      /**
       * getLoaderStatus
       */


      _createClass(LoaderService, [{
        key: "getLoaderStatus",
        value: function getLoaderStatus() {
          return this.isLoading.asObservable();
        }
      }]);

      return LoaderService;
    }();

    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LoaderService);
    /***/
  },

  /***/
  "./src/app/shared/services/network/network.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/network/network.service.ts ***!
    \************************************************************/

  /*! exports provided: NetworkService */

  /***/
  function srcAppSharedServicesNetworkNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
      return NetworkService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NetworkService = function NetworkService(toastController, platform) {
      var _this19 = this;

      _classCallCheck(this, NetworkService);

      this.toastController = toastController;
      this.platform = platform;
      this.isOnline = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
      /**
       * initializeNetworkEvents
       */

      this.initializeNetworkEvents = function () {
        console.log('listen to online');
        window.addEventListener('online', function () {
          console.log('back online');

          _this19.updateNetworkStatus(true);
        });
        console.log('listen to offline');
        window.addEventListener('offline', function () {
          console.log('went offline');

          _this19.updateNetworkStatus(false);
        });
      };
      /**
       * getNetWorkStatus
       */


      this.getNetworkStatus = function () {
        return _this19.isOnline.asObservable();
      };
      /**
       * updateNetworkStatus
       * @param status
       */


      this.updateNetworkStatus = function (status) {
        _this19.isOnline.next(status);

        _this19.showAlert(status);
      };
      /**
       * showAlert
       * @param status
       */


      this.showAlert = function (status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this19, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          var msg, toast;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  msg = status === true ? 'Online' : 'Offline';
                  _context5.next = 3;
                  return this.toastController.create({
                    message: "App ".concat(msg),
                    duration: 3000,
                    position: 'top',
                    color: msg === 'Online' ? 'success' : 'danger'
                  });

                case 3:
                  toast = _context5.sent;
                  _context5.next = 6;
                  return toast.present();

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));
      };

      this.platform.ready().then(function () {
        _this19.isOnline.next(navigator.onLine);
      });
    };

    NetworkService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], NetworkService);
    /***/
  },

  /***/
  "./src/app/shared/services/storage/storage.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/storage/storage.service.ts ***!
    \************************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppSharedServicesStorageStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var StorageService = function StorageService(storage) {
      var _this20 = this;

      _classCallCheck(this, StorageService);

      this.storage = storage;
      /**
       * @description Add or Update DB
       * @param nameDB
       * @param data
       */

      this.setRow = function (nameDB, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this20, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.storage.set(nameDB, data);

                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));
      };
      /**
       * @description get row DB
       * @param nameDB
       */


      this.getRow = function (nameDB) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this20, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.storage.get(nameDB);

                case 2:
                  return _context7.abrupt("return", _context7.sent);

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));
      };
      /**
       * @description delete row
       * @param nameDB
       */


      this.removeRow = function (nameDB) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this20, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return this.storage.remove(nameDB);

                case 2:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));
      };
      /**
       * @description clear all DB
       */


      this.clearAllRow = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this20, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return this.storage.clear();

                case 2:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));
      };
    };

    StorageService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], StorageService);
    /***/
  },

  /***/
  "./src/app/shared/services/store/actions.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/store/actions.ts ***!
    \**************************************************/

  /*! exports provided: StoreActions */

  /***/
  function srcAppSharedServicesStoreActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreActions", function () {
      return StoreActions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var StoreActions;

    (function (StoreActions) {
      StoreActions["SetRemember"] = "SET_REMEMBER";
      StoreActions["SetRememberData"] = "SET_REMEMBER_DATA";
      StoreActions["SetUserToken"] = "SET_USER_TOKEN";
      StoreActions["SetUserConnections"] = "SET_USER_CONNECTIONS";
      StoreActions["SetUserActiveConnection"] = "SET_USER_ACTIVE_CONNECTION";
      StoreActions["SetLoginStatus"] = "SET_LOGIN_STATUS";
      StoreActions["SetUserActiveCompany"] = "SET_USER_ACTIVE_COMPANY";
      StoreActions["SetUser"] = "SET_USER";
      StoreActions["SetCompanies"] = "SET_COMPANIES";
      StoreActions["SetCostCenters"] = "SET_COST_CENTERS";
      StoreActions["SetMenus"] = "SET_MENUS";
      StoreActions["SetUnits"] = "SET_UNITS";
      StoreActions["SetQualities"] = "SET_QUALITIES";
      StoreActions["SetCalibers"] = "SET_CALIBERS";
      StoreActions["SetAccess"] = "SET_ACCESS";
      StoreActions["SetQuadrilles"] = "SET_QUADRILLES";
      StoreActions["SetWorkers"] = "SET_WORKERS";
      StoreActions["SetProcessPlants"] = "SET_PROCESS_PLANTS";
      StoreActions["SetDestinations"] = "SET_DESTINATIONS";
      StoreActions["SetActiveCostCenter"] = "SET_ACTIVE_COST_CENTER";
      StoreActions["SetCostCenter"] = "SET_COST_CENTER";
      StoreActions["SetProductionContracts"] = "SET_PRODUCTION_CONTRACTS";
      StoreActions["SetProductionContractsDetails"] = "SET_PRODUCTION_CONTRACTS_DETAILS";
      StoreActions["SetHarvestEstimate"] = "SET_HARVEST_ESTIMATE";
      StoreActions["SetQualityEstimate"] = "SET_QUALITY_ESTIMATE";
      StoreActions["SetQualityEstimateDetail"] = "SET_QUALITY_ESTIMATE_DETAIL";
      StoreActions["SetNotes"] = "SET_NOTES";
      StoreActions["SetHolidays"] = "SET_HOLIDAYS";
      StoreActions["SetActiveTicket"] = "SET_ACTIVE_TICKET";
      StoreActions["SetTicketTypes"] = "SET_TICKET_TYPES";
      StoreActions["SetTicketStates"] = "SET_TICKET_STATES";
      StoreActions["SetTicketUsers"] = "SET_TICKET_USERS";
      StoreActions["SetTicketOrigins"] = "SET_TICKET_ORIGINS";
      StoreActions["SetTicketPriorities"] = "SET_TICKET_PRIORITIES";
      StoreActions["SetTicketPeriodicities"] = "SET_TICKET_PERIODICITIES";
      StoreActions["SetPushToken"] = "SET_PUSH_TOKEN";
    })(StoreActions || (StoreActions = {}));
    /***/

  },

  /***/
  "./src/app/shared/services/store/store.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/store/store.service.ts ***!
    \********************************************************/

  /*! exports provided: StoreService */

  /***/
  function srcAppSharedServicesStoreStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreService", function () {
      return StoreService;
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


    var _codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @codewithdan/observable-store */
    "./node_modules/@codewithdan/observable-store/dist/index.js");
    /* harmony import */


    var _codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./actions */
    "./src/app/shared/services/store/actions.ts");

    var StoreService =
    /*#__PURE__*/
    function (_codewithdan_observab) {
      _inherits(StoreService, _codewithdan_observab);

      function StoreService() {
        var _this21;

        _classCallCheck(this, StoreService);

        _this21 = _possibleConstructorReturn(this, _getPrototypeOf(StoreService).call(this, {}));
        /**
         * backupState
         */

        _this21.backupState = function () {
          var currentState = _this21.getState();

          localStorage.setItem('fx11StateBackup', JSON.stringify(currentState));
        };
        /**
         * setRemember
         * @param remember
         */


        _this21.setRemember = function (remember) {
          var auth = Object.assign({}, _this21.getState().auth, {
            remember: remember
          });

          _this21.setState({
            auth: auth
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetRemember);
        };
        /**
         * AUTH STATE METHODS
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         */

        /**
         * getRemember
         */


        _this21.getRemember = function () {
          return _this21.getState().auth.remember;
        };
        /**
         * setRememberData
         * @param rememberData
         */


        _this21.setRememberData = function (rememberData) {
          var auth = Object.assign({}, _this21.getState().auth, {
            rememberData: rememberData
          });

          _this21.setState({
            auth: auth
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetRememberData);
        };
        /**
         * getRememberData
         */


        _this21.getRememberData = function () {
          return _this21.getState().auth.rememberData;
        };
        /**
         * setUser
         */


        _this21.setUser = function (userData) {
          var auth = Object.assign({}, _this21.getState().auth, {
            userData: userData
          });

          _this21.setState({
            auth: auth
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetUser);
        };
        /**
         * getUser
         */


        _this21.getUser = function () {
          return _this21.getState().auth.userData;
        };
        /**
         * setUserConnections
         * @param userConnections
         */


        _this21.setUserConnections = function () {
          var userConnections = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var auth = Object.assign({}, _this21.getState().auth, {
            userConnections: userConnections
          });

          _this21.setState({
            auth: auth
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetUserConnections);

          if (userConnections.length > 0) {
            var defaultConnection = userConnections.find(function (item) {
              return item.default;
            });

            if (defaultConnection) {
              _this21.setActiveConnection(defaultConnection);
            } else {
              _this21.setActiveConnection(userConnections[0]);
            }
          }
        };
        /**
         * setActiveConnection
         * @param activeConnection
         */


        _this21.setActiveConnection = function () {
          var activeConnection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var auth = Object.assign({}, _this21.getState().auth, {
            userActiveConnection: activeConnection
          });

          _this21.setState({
            auth: auth
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetUserActiveConnection);
        };
        /**
         * getActiveConnection
         */


        _this21.getActiveConnection = function () {
          return _this21.getState().auth.userActiveConnection;
        };
        /**
         * setToken
         * @param token
         */


        _this21.setToken = function () {
          var userToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var auth = Object.assign({}, _this21.getState().auth, {
            userToken: userToken
          });

          _this21.setState({
            auth: auth
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetUserToken);
        };
        /**
         * getToken
         */


        _this21.getToken = function () {
          return _this21.getState().auth.userToken;
        };
        /**
         * setLoginStatus
         * @param status
         */


        _this21.setLoginStatus = function (status) {
          var auth = Object.assign({}, _this21.getState().auth, {
            isLogged: status
          });

          _this21.setState({
            auth: auth
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetLoginStatus);
        };
        /**
         * getLoginStatus
         */


        _this21.getLoginStatus = function () {
          return _this21.getState().auth.isLogged;
        };
        /**
         * removeRememberData
         */


        _this21.removeRememberData = function () {
          var auth = Object.assign({}, _this21.getState().auth, {
            rememberData: null
          });

          _this21.setState({
            auth: auth
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetRememberData);
        };
        /**
         * getUserConnections
         */


        _this21.getUserConnections = function () {
          return _this21.getState().auth.userConnections;
        };
        /**
         * logout
         */


        _this21.logout = function () {
          if (_this21.getRemember()) {
            _this21.removeRememberData();
          }

          _this21.setLoginStatus(false);

          _this21.setToken();

          _this21.setActiveConnection();
        };
        /**
         * setCompanies
         * @param companies
         */


        _this21.setCompanies = function (companies) {
          var sync = Object.assign({}, _this21.getState().sync, {
            companies: companies
          });

          _this21.setState({
            sync: sync
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetCompanies);

          if (companies.length > 0) {
            _this21.setActiveCompany(companies[0]);
          }
        };
        /**
         * END OF AUTH STATE METHODS
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         */

        /**
         * SYNC STATE METHODS
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         */

        /**
         * getCompanies
         */


        _this21.getCompanies = function () {
          return _this21.getState().sync.companies;
        };
        /**
         * setActiveCompany
         * @param company
         */


        _this21.setActiveCompany = function (company) {
          var auth = Object.assign({}, _this21.getState().auth, {
            userActiveCompany: company
          });

          _this21.setState({
            auth: auth
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetUserActiveCompany);
        };
        /**
         * getActiveCompany
         */


        _this21.getActiveCompany = function () {
          return _this21.getState().auth.userActiveCompany;
        };
        /**
         * setCostCenters
         */


        _this21.setCostCenters = function (costCenters) {
          var sync = Object.assign({}, _this21.getState().sync, {
            costCenters: costCenters
          });

          _this21.setState({
            sync: sync
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetCostCenters);
        };
        /**
         * getCostCenters
         */


        _this21.getCostCenters = function () {
          return _this21.getState().sync.costCenters;
        };
        /**
         * setMenus
         */


        _this21.setMenus = function (menus) {
          var sync = Object.assign({}, _this21.getState().sync, {
            menus: menus
          });

          _this21.setState({
            sync: sync
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetMenus);
        };
        /**
         * getMenus
         */


        _this21.getMenus = function () {
          return _this21.getState().sync.menus;
        };
        /**
         * setUnits
         * @param units
         */


        _this21.setUnits = function (units) {
          var sync = Object.assign({}, _this21.getState().sync, {
            units: units
          });

          _this21.setState({
            sync: sync
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetUnits);
        };
        /**
         * getUnits
         */


        _this21.getUnits = function () {
          return _this21.getState().sync.units;
        };
        /**
         * setQualities
         * @param menus
         */


        _this21.setQualities = function (qualities) {
          var sync = Object.assign({}, _this21.getState().sync, {
            qualities: qualities
          });

          _this21.setState({
            sync: sync
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetQualities);
        };
        /**
         * getQualities
         */


        _this21.getQualities = function () {
          return _this21.getState().sync.qualities;
        };
        /**
         * setCalibers
         * @param calibers
         */


        _this21.setCalibers = function (calibers) {
          var sync = Object.assign({}, _this21.getState().sync, {
            calibers: calibers
          });

          _this21.setState({
            sync: sync
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetCalibers);
        };
        /**
         * getCalibers
         */


        _this21.getCalibers = function () {
          return _this21.getState().sync.calibers;
        };
        /**
         * getAccess
         */


        _this21.getAccess = function () {
          return _this21.getState().sync.cfgAccess;
        };
        /**
         * getQuadrilles
         */


        _this21.getQuadrilles = function () {
          return _this21.getState().sync.quadrilles;
        };
        /**
         * getWorkers
         */


        _this21.getWorkers = function () {
          return _this21.getState().sync.workers;
        };
        /**
         * getProcessPlants
         */


        _this21.getProcessPlants = function () {
          return _this21.getState().sync.processPlants;
        };
        /**
         * getDestinations
         */


        _this21.getDestinations = function () {
          return _this21.getState().sync.destinations;
        };
        /**
         * setSyncedData
         * @param data
         */


        _this21.setSyncedData = function (data) {
          var companies = data.companies,
              costCenters = data.costCenters,
              menus = data.menus,
              units = data.units,
              qualities = data.qualities,
              calibers = data.calibers,
              cfgAccess = data.cfgAccess,
              quadrilles = data.quadrilles,
              workers = data.workers,
              processPlants = data.processPlants,
              destinations = data.destinations;

          _this21.setCompanies(companies);

          _this21.setCostCenters(costCenters);

          _this21.setMenus(menus);

          _this21.setUnits(units);

          _this21.setQualities(qualities);

          _this21.setCalibers(calibers);

          _this21.setAccess(cfgAccess);

          _this21.setQuadrilles(quadrilles);

          _this21.setWorkers(workers);

          _this21.setProcessPlants(processPlants);

          _this21.setDestinations(destinations);
        };
        /**
         * setActiveCostCenter
         * @param costCenter
         */


        _this21.setActiveCostCenter = function (costCenter) {
          var contract = Object.assign({}, _this21.getState().contract, {
            activeCostCenter: costCenter
          });

          _this21.setState({
            contract: contract
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetActiveCostCenter);
        };
        /**
         * getActiveCostCenter
         */


        _this21.getActiveCostCenter = function () {
          return _this21.getState().contract.activeCostCenter;
        };
        /**
         * setCostCenter
         * @param costCenter
         */


        _this21.setCostCenter = function (costCenter) {
          var contract = Object.assign({}, _this21.getState().contract, {
            costCenter: costCenter
          });

          _this21.setState({
            contract: contract
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetCostCenter);
        };
        /**
         * getCostCenter
         */


        _this21.getCostCenter = function () {
          return _this21.getState().contract.costCenter;
        };
        /**
         * setProductionContracts
         * @param productionContracts
         */


        _this21.setProductionContracts = function (productionContracts) {
          var contract = Object.assign({}, _this21.getState().contract, {
            productionContracts: productionContracts
          });

          _this21.setState({
            contract: contract
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetProductionContracts);
        };
        /**
         * getProductionContracts
         */


        _this21.getProductionContracts = function () {
          return _this21.getState().contract.productionContracts;
        };
        /**
         * END OF SYNC STATE METHODS
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         */

        /**
         * CONTRACT STATE METHODS
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         */

        /**
         * setProductionContractsDetails
         * @param productionContractsDetails
         */


        _this21.setProductionContractsDetails = function (productionContractsDetails) {
          var contract = Object.assign({}, _this21.getState().contract, {
            productionContractsDetails: productionContractsDetails
          });

          _this21.setState({
            contract: contract
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetProductionContractsDetails);
        };
        /**
         * getProductionContractsDetails
         */


        _this21.getProductionContractsDetails = function () {
          return _this21.getState().contract.productionContractsDetails;
        };
        /**
         * setHarvestEstimate
         * @param harvestEstimate
         */


        _this21.setHarvestEstimate = function (harvestEstimate) {
          var contract = Object.assign({}, _this21.getState().contract, {
            harvestEstimate: harvestEstimate
          });

          _this21.setState({
            contract: contract
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetHarvestEstimate);
        };
        /**
         * getHarvestEstimate
         */


        _this21.getHarvestEstimate = function () {
          return _this21.getState().contract.harvestEstimate;
        };
        /**
         * setQualityEstimate
         * @param qualityEstimate
         */


        _this21.setQualityEstimate = function (qualityEstimate) {
          var contract = Object.assign({}, _this21.getState().contract, {
            qualityEstimate: qualityEstimate
          });

          _this21.setState({
            contract: contract
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetQualityEstimate);
        };
        /**
         * getQualityEstimate
         */


        _this21.getQualityEstimate = function () {
          return _this21.getState().contract.qualityEstimate;
        };
        /**
         * setQualityEstimateDetail
         * @param qualityEstimateDetail
         */


        _this21.setQualityEstimateDetail = function (qualityEstimateDetail) {
          var contract = Object.assign({}, _this21.getState().contract, {
            qualityEstimateDetail: qualityEstimateDetail
          });

          _this21.setState({
            contract: contract
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetQualityEstimateDetail);
        };
        /**
         * getQualityEstimateDetail
         */


        _this21.getQualityEstimateDetail = function () {
          return _this21.getState().contract.qualityEstimateDetail;
        };
        /**
         * setNotes
         * @param notes
         */


        _this21.setNotes = function (notes) {
          var contract = Object.assign({}, _this21.getState().contract, {
            notes: notes
          });

          _this21.setState({
            contract: contract
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetNotes);
        };
        /**
         * getNotes
         */


        _this21.getNotes = function () {
          return _this21.getState().contract.notes;
        };
        /**
         * setHolidays
         * @param holidays
         */


        _this21.setHolidays = function (holidays) {
          var contract = Object.assign({}, _this21.getState().contract, {
            holidays: holidays
          });

          _this21.setState({
            contract: contract
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetHolidays);
        };
        /**
         * getHolidays
         */


        _this21.getHolidays = function () {
          return _this21.getState().contract.holidays;
        };
        /**
         * setContractData
         * @param data
         */


        _this21.setContractData = function (data) {
          var costCenter = data.costCenter,
              productionContracts = data.productionContracts,
              productionContractsDetails = data.productionContractsDetails,
              harvestEstimate = data.harvestEstimate,
              qualityEstimate = data.qualityEstimate,
              qualityEstimateDetail = data.qualityEstimateDetail,
              notes = data.notes,
              holidays = data.holidays;

          _this21.setCostCenter(costCenter);

          _this21.setProductionContracts(productionContracts);

          _this21.setProductionContractsDetails(productionContractsDetails);

          _this21.setHarvestEstimate(_this21.defineArrows(harvestEstimate, 'quantity'));

          _this21.setQualityEstimate(_this21.defineArrows(qualityEstimate, 'exportPercentage'));

          _this21.setQualityEstimateDetail(qualityEstimateDetail);

          _this21.setNotes(notes);

          _this21.setHolidays(holidays);
        };
        /**
         * buildInitialState
         */


        _this21.buildInitialState = function () {
          var lastState = JSON.parse(localStorage.getItem('fx11StateBackup'));

          if (lastState) {
            return lastState;
          }

          return {
            auth: {
              isLogged: false,
              remember: false,
              rememberData: null,
              userActiveCompany: null,
              userActiveConnection: null,
              userConnections: [],
              userToken: '',
              userData: null
            },
            sync: {
              companies: [],
              costCenters: [],
              menus: [],
              units: [],
              qualities: [],
              calibers: [],
              cfgAccess: [],
              quadrilles: [],
              workers: [],
              processPlants: [],
              destinations: []
            },
            contract: {
              activeCostCenter: null,
              costCenter: null,
              productionContracts: [],
              productionContractsDetails: [],
              harvestEstimate: [],
              qualityEstimate: [],
              qualityEstimateDetail: [],
              notes: [],
              holidays: []
            },
            ticket: {
              activeTicket: null,
              states: [],
              users: [],
              priorities: []
            },
            pushToken: null
          };
        };
        /**
         * setPushToken
         * @param token
         */


        _this21.setPushToken = function (token) {
          _this21.setState({
            pushToken: token
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetPushToken);
        };
        /**
         * getPushToken
         */


        _this21.getPushToken = function () {
          return _this21.getState().pushToken;
        };
        /**
         * setAccess
         * @param cfgAccess
         */


        _this21.setAccess = function (cfgAccess) {
          var sync = Object.assign({}, _this21.getState().sync, {
            cfgAccess: cfgAccess
          });

          _this21.setState({
            sync: sync
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetAccess);
        };
        /**
         * setQuadrilles
         * @param quadrilles
         */


        _this21.setQuadrilles = function (quadrilles) {
          var sync = Object.assign({}, _this21.getState().sync, {
            quadrilles: quadrilles
          });

          _this21.setState({
            sync: sync
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetQuadrilles);
        };
        /**
         * setWorkers
         * @param workers
         */


        _this21.setWorkers = function (workers) {
          var sync = Object.assign({}, _this21.getState().sync, {
            workers: workers
          });

          _this21.setState({
            sync: sync
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetWorkers);
        };
        /**
         * setProcessPlants
         * @param processPlants
         */


        _this21.setProcessPlants = function (processPlants) {
          var sync = Object.assign({}, _this21.getState().sync, {
            processPlants: processPlants
          });

          _this21.setState({
            sync: sync
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetProcessPlants);
        };
        /**
         * setDestinations
         * @param destinations
         */


        _this21.setDestinations = function (destinations) {
          var sync = Object.assign({}, _this21.getState().sync, {
            destinations: destinations
          });

          _this21.setState({
            sync: sync
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetDestinations);
        };
        /**
         * defineArrows
         * @param data
         * @param field
         */


        _this21.defineArrows = function () {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var field = arguments.length > 1 ? arguments[1] : undefined;

          if (data.length > 0) {
            var mappedData = data.map(function (item, index, arr) {
              if (arr.length === 1) {
                return Object.assign({}, item, {
                  arrow: '',
                  color: 'default'
                });
              } else if (arr.length > 1) {
                var limit = arr.length - 1;

                if (index < limit) {
                  return Object.assign({}, item, {
                    arrow: arr[index][field] > arr[index + 1][field] ? 'arrow-round-up' : 'arrow-round-down',
                    color: arr[index][field] > arr[index + 1][field] ? 'primary' : 'danger'
                  });
                } else {
                  return Object.assign({}, item, {
                    arrow: '',
                    color: 'default'
                  });
                }
              }
            });
            return mappedData;
          }

          return data;
        };
        /**
         * END OF CONTRACT STATE METHODS
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         */

        /**
         * TICKET STATE METHODS
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         * ================================================================================================================
         */

        /**
         * setActiveTicket
         * @param activeTicket
         */


        _this21.setActiveTicket = function (activeTicket) {
          var ticket = Object.assign({}, _this21.getState().ticket, {
            activeTicket: activeTicket
          });

          _this21.setState({
            ticket: ticket
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetActiveTicket);
        };
        /**
         * getActiveTicket
         */


        _this21.getActiveTicket = function () {
          return _this21.getState().ticket.activeTicket;
        };
        /**
         * getTicketStates
         * @param ticketStates
         */


        _this21.setTicketStates = function (ticketStates) {
          var ticket = Object.assign({}, _this21.getState().ticket, {
            states: ticketStates
          });

          _this21.setState({
            ticket: ticket
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetTicketStates);
        };
        /**
         * getTicketStates
         */


        _this21.getTicketStates = function () {
          return _this21.getState().ticket.states;
        };
        /**
         * setTicketUsers
         * @param ticketUsers
         */


        _this21.setTicketUsers = function (ticketUsers) {
          var ticket = Object.assign({}, _this21.getState().ticket, {
            users: ticketUsers
          });

          _this21.setState({
            ticket: ticket
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetTicketUsers);
        };
        /**
         * getTicketUsers
         */


        _this21.getTicketUsers = function () {
          return _this21.getState().ticket.users;
        };
        /**
         * setTicketPriorities
         * @param ticketPriorities
         */


        _this21.setTicketPriorities = function (ticketPriorities) {
          var ticket = Object.assign({}, _this21.getState().ticket, {
            priorities: ticketPriorities
          });

          _this21.setState({
            ticket: ticket
          }, _actions__WEBPACK_IMPORTED_MODULE_3__["StoreActions"].SetTicketPriorities);
        };
        /**
         * getTicketPriorities
         */


        _this21.getTicketPriorities = function () {
          return _this21.getState().ticket.priorities;
        };

        _this21.setState(_this21.buildInitialState, 'INIT_STATE');

        return _this21;
      }

      return StoreService;
    }(_codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_2__["ObservableStore"]);

    StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StoreService);
    /***/
  },

  /***/
  "./src/app/shared/services/sync/sync.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/sync/sync.service.ts ***!
    \******************************************************/

  /*! exports provided: SyncService */

  /***/
  function srcAppSharedServicesSyncSyncServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SyncService", function () {
      return SyncService;
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


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../http/http.service */
    "./src/app/shared/services/http/http.service.ts");

    var SyncService = function SyncService(authService, httpClient, storageService, httpService) {
      var _this22 = this;

      _classCallCheck(this, SyncService);

      this.authService = authService;
      this.httpClient = httpClient;
      this.storageService = storageService;
      this.httpService = httpService;
      this.syncUrl = 'sync/mobile';
      /**
       * syncData
       * @param username
       */

      this.syncData = function (username, superuser) {
        var url = _this22.httpService.buildUrl(_this22.syncUrl);

        return _this22.httpClient.post(url, _this22.httpService.buildBody({
          username: username,
          superuser: superuser
        }), {
          headers: _this22.httpService.getHeaders()
        });
      };
    };

    SyncService.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }];
    };

    SyncService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])], SyncService);
    /***/
  },

  /***/
  "./src/app/shared/services/toast/toast.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/toast/toast.service.ts ***!
    \********************************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppSharedServicesToastToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var ToastService = function ToastService(toastController) {
      var _this23 = this;

      _classCallCheck(this, ToastService);

      this.toastController = toastController;
      /**
       * successToast
       * @param msg
       * @param time
       * @param position
       */

      this.successToast = function () {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Loading...';
        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
        var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this23, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee10() {
          var toast;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return this.toastController.create({
                    message: msg,
                    duration: time,
                    animated: true,
                    color: 'success',
                    keyboardClose: true,
                    position: position,
                    cssClass: 'customToast'
                  });

                case 2:
                  toast = _context10.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));
      };
      /**
       * errorToast
       * @param msg
       * @param time
       * @param position
       */


      this.errorToast = function () {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Loading...';
        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
        var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this23, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee11() {
          var toast;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return this.toastController.create({
                    message: msg,
                    duration: time,
                    animated: true,
                    color: 'danger',
                    keyboardClose: true,
                    position: position,
                    cssClass: 'customToast'
                  });

                case 2:
                  toast = _context11.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));
      };
      /**
       * warningToast
       * @param msg
       * @param time
       * @param position
       */


      this.warningToast = function () {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Loading...';
        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3500;
        var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this23, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee12() {
          var toast;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return this.toastController.create({
                    message: msg,
                    duration: time,
                    animated: true,
                    color: 'warning',
                    keyboardClose: true,
                    position: position,
                    cssClass: 'customToast'
                  });

                case 2:
                  toast = _context12.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));
      };
      /**
       * normalToast
       * @param msg
       * @param time
       * @param position
       */


      this.normalToast = function () {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Loading...';
        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
        var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this23, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee13() {
          var toast;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return this.toastController.create({
                    message: msg,
                    duration: time,
                    animated: true,
                    keyboardClose: true,
                    position: position
                  });

                case 2:
                  toast = _context13.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }));
      };
    };

    ToastService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], ToastService);
    /***/
  },

  /***/
  "./src/app/shared/services/user/user.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/user/user.service.ts ***!
    \******************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServicesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../http/http.service */
    "./src/app/shared/services/http/http.service.ts");

    var UserService = function UserService(httpClient, httpService, storageService) {
      var _this24 = this;

      _classCallCheck(this, UserService);

      this.httpClient = httpClient;
      this.httpService = httpService;
      this.storageService = storageService;
      this.createUrl = 'user/create';
      this.userUrl = 'user';
      this.assignUrl = 'user/assign';
      this.updateUrl = 'user/update';
      this.updatePasswordUrl = 'user/password';
      /**
       * createUser
       * @param data
       */

      this.createUser = function (data) {
        var url = _this24.httpService.buildUrl(_this24.createUrl);

        return _this24.httpClient.post(url, data);
      };
      /**
       * updateUser
       * @param data
       */


      this.getUser = function () {
        var url = _this24.httpService.buildUrl(_this24.userUrl);

        return _this24.httpClient.post(url, _this24.httpService.buildBody(), {
          headers: _this24.httpService.getHeaders()
        });
      };
      /**
       * updateUser
       * @param data
       */


      this.updateUser = function (data) {
        var url = _this24.httpService.buildUrl(_this24.updateUrl);

        return _this24.httpClient.put(url, _this24.httpService.buildBody(data), {
          headers: _this24.httpService.getHeaders()
        });
      };
      /**
       * assign user
       * @param data
       */


      this.assignUser = function (data) {
        var url = _this24.httpService.buildUrl(_this24.assignUrl);

        return _this24.httpClient.post(url, _this24.httpService.buildBody(data), {
          headers: _this24.httpService.getHeaders()
        });
      };
      /**
       * updatePassword
       * @param data
       */


      this.updatePassword = function (data) {
        var url = _this24.httpService.buildUrl(_this24.updatePasswordUrl);

        return _this24.httpClient.put(url, _this24.httpService.buildBody(data), {
          headers: _this24.httpService.getHeaders()
        });
      }; /////////////// USUARIO

      /**
       * @description guradar usuario
       * @param data
       */


      this.setUserData = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this24, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return this.storageService.setRow('userData', data);

                case 2:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));
      };
      /**
       * @description obtener usuario
       */


      this.getUserData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this24, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return this.storageService.getRow('userData');

                case 2:
                  return _context15.abrupt("return", _context15.sent);

                case 3:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this);
        }));
      };
      /**
       * @description remover usuario
       */


      this.removeUserData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this24, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee16() {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return this.storageService.removeRow('userData');

                case 2:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16, this);
        }));
      };
      /**
       * @description recordar usuario login {usuario, password}
       * @param data
       */


      this.setUserRemember = function (data) {
        _this24.storageService.setRow('userRemember', data);
      };
      /**
       * @description obtener usuario login
       */


      this.getUserRemember = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this24, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee17() {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return this.storageService.getRow('userRemember');

                case 2:
                  return _context17.abrupt("return", _context17.sent);

                case 3:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17, this);
        }));
      };
      /**
       * @description remover usuario login
       */


      this.removeUserRemember = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this24, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee18() {
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.next = 2;
                  return this.storageService.removeRow('userRemember');

                case 2:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18, this);
        }));
      };
    };

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])], UserService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/notifications/notifications.component */
    "./src/app/shared/components/notifications/notifications.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/user/user.service */
    "./src/app/shared/services/user/user.service.ts");
    /* harmony import */


    var _services_detect_platform_detect_platform_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/detect-platform/detect-platform.service */
    "./src/app/shared/services/detect-platform/detect-platform.service.ts");
    /* harmony import */


    var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _pipes_custom_date_custom_date_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pipes/custom-date/custom-date.pipe */
    "./src/app/shared/pipes/custom-date/custom-date.pipe.ts");
    /* harmony import */


    var _home_page_planning_harvest_estimate_harvest_estimate_item_harvest_estimate_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../home-page/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component */
    "./src/app/home-page/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component.ts");
    /* harmony import */


    var _home_page_planning_quality_estimate_quality_estimate_item_quality_estimate_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../home-page/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component */
    "./src/app/home-page/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component.ts");
    /* harmony import */


    var _home_page_planning_notes_note_item_note_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../home-page/planning/notes/note-item/note-item.component */
    "./src/app/home-page/planning/notes/note-item/note-item.component.ts");
    /* harmony import */


    var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _services_http_http_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/alert/alert.service */
    "./src/app/shared/services/alert/alert.service.ts");
    /* harmony import */


    var _components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/image-viewer/image-viewer.component */
    "./src/app/shared/components/image-viewer/image-viewer.component.ts");
    /* harmony import */


    var _pipes_custom_datetime_custom_datetime_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pipes/custom-datetime/custom-datetime.pipe */
    "./src/app/shared/pipes/custom-datetime/custom-datetime.pipe.ts");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-echarts */
    "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/preview-any-file/ngx */
    "./node_modules/@ionic-native/preview-any-file/ngx/index.js");
    /* harmony import */


    var _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/camera/camera.service */
    "./src/app/shared/services/camera/camera.service.ts");
    /* harmony import */


    var _pipes_rut_rut_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pipes/rut/rut.pipe */
    "./src/app/shared/pipes/rut/rut.pipe.ts");
    /* harmony import */


    var _services_sync_sync_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/sync/sync.service */
    "./src/app/shared/services/sync/sync.service.ts");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/ngx/index.js");
    /* harmony import */


    var _home_page_crm_tickets_ticket_card_ticket_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../home-page/crm/tickets/ticket-card/ticket-card.component */
    "./src/app/home-page/crm/tickets/ticket-card/ticket-card.component.ts");
    /* harmony import */


    var _home_page_crm_services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../home-page/crm/services/tickets/tickets.service */
    "./src/app/home-page/crm/services/tickets/tickets.service.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"], _pipes_custom_date_custom_date_pipe__WEBPACK_IMPORTED_MODULE_10__["CustomDatePipe"], _home_page_planning_harvest_estimate_harvest_estimate_item_harvest_estimate_item_component__WEBPACK_IMPORTED_MODULE_11__["HarvestEstimateItemComponent"], _home_page_planning_quality_estimate_quality_estimate_item_quality_estimate_item_component__WEBPACK_IMPORTED_MODULE_12__["QualityEstimateItemComponent"], _home_page_planning_notes_note_item_note_item_component__WEBPACK_IMPORTED_MODULE_13__["NoteItemComponent"], _components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ImageViewerComponent"], _pipes_custom_datetime_custom_datetime_pipe__WEBPACK_IMPORTED_MODULE_18__["CustomDatetimePipe"], _pipes_rut_rut_pipe__WEBPACK_IMPORTED_MODULE_23__["RutPipe"], _home_page_crm_tickets_ticket_card_ticket_card_component__WEBPACK_IMPORTED_MODULE_26__["TicketCardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_19__["NgxEchartsModule"]],
      providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_detect_platform_detect_platform_service__WEBPACK_IMPORTED_MODULE_8__["DetectPlatformService"], _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"], _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_15__["HttpService"], _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_16__["AlertService"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_20__["File"], _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_21__["PreviewAnyFile"], _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_22__["CameraService"], _services_sync_sync_service__WEBPACK_IMPORTED_MODULE_24__["SyncService"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_25__["FileOpener"], _home_page_crm_services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_27__["TicketsService"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _pipes_custom_date_custom_date_pipe__WEBPACK_IMPORTED_MODULE_10__["CustomDatePipe"], _home_page_planning_harvest_estimate_harvest_estimate_item_harvest_estimate_item_component__WEBPACK_IMPORTED_MODULE_11__["HarvestEstimateItemComponent"], _home_page_planning_quality_estimate_quality_estimate_item_quality_estimate_item_component__WEBPACK_IMPORTED_MODULE_12__["QualityEstimateItemComponent"], _home_page_planning_notes_note_item_note_item_component__WEBPACK_IMPORTED_MODULE_13__["NoteItemComponent"], _components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ImageViewerComponent"], _pipes_custom_datetime_custom_datetime_pipe__WEBPACK_IMPORTED_MODULE_18__["CustomDatetimePipe"], _pipes_rut_rut_pipe__WEBPACK_IMPORTED_MODULE_23__["RutPipe"], _home_page_crm_tickets_ticket_card_ticket_card_component__WEBPACK_IMPORTED_MODULE_26__["TicketCardComponent"]],
      entryComponents: [_components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ImageViewerComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ios_device_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ios-device-names */
    "./src/environments/ios-device-names.ts"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      app_name: 'FX10',
      api_url: 'https://fx11apiqa.primetec.cl',
      appVersion: 'v1.0.48',
      tz: 'America/Santiago',
      iosDeviceNames: _ios_device_names__WEBPACK_IMPORTED_MODULE_1__["iosDeviceNames"]
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/environments/ios-device-names.ts":
  /*!**********************************************!*\
    !*** ./src/environments/ios-device-names.ts ***!
    \**********************************************/

  /*! exports provided: iosDeviceNames */

  /***/
  function srcEnvironmentsIosDeviceNamesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "iosDeviceNames", function () {
      return iosDeviceNames;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var iosDeviceNames = {
      i386: 'iOS Simulator 32-bit',
      x86_64: 'iOS Simulator 64-bit',
      'iPhone1,1': 'iPhone 1st Gen',
      'iPhone1,2': 'iPhone 3G 2nd Gen',
      'iPhone2,1': 'iPhone 3GS 3rd Gen',
      'iPhone3,1': 'iPhone 4',
      'iPhone3,2': 'iPhone 4 (GSM) Rev A',
      'iPhone3,3': 'iPhone 4 (CDMA)',
      'iPhone4,1': 'iPhone 4s',
      'iPhone5,1': 'iPhone 5 (GSM)',
      'iPhone5,2': 'iPhone 5 (CDMA+LTE)',
      'iPhone5,3': 'iPhone 5c (GSM)',
      'iPhone5,4': 'iPhone 5c (Global)',
      'iPhone6,1': 'iPhone 5s (GSM)',
      'iPhone6,2': 'iPhone 5s (Global)',
      'iPhone7,1': 'iPhone 6 Plus',
      'iPhone7,2': 'iPhone 6',
      'iPhone8,1': 'iPhone 6s',
      'iPhone8,2': 'iPhone 6s Plus',
      'iPhone8,4': 'iPhone SE',
      'iPhone9,1': 'iPhone 7',
      'iPhone9,2': 'iPhone 7 Plus',
      'iPhone9,3': 'iPhone 7 (no CDMA)',
      'iPhone9,4': 'iPhone 7 Plus (no CDMA)',
      'iPhone10,1': 'iPhone 8',
      'iPhone10,2': 'iPhone 8 Plus',
      'iPhone10,3': 'iPhone X',
      'iPhone10,4': 'iPhone 8 (no CDMA)',
      'iPhone10,5': 'iPhone 8 Plus (no CDMA)',
      'iPhone10,6': 'iPhone X (no CDMA)',
      'iPhone11,2': 'iPhone XS',
      'iPhone11,4': 'iPhone XS Max (China)',
      'iPhone11,6': 'iPhone XS Max',
      'iPhone11,8': 'iPhone XR',
      'iPhone12,1': 'iPhone 11',
      'iPhone12,3': 'iPhone 11 Pro',
      'iPhone12,5': 'iPhone 11 Pro Max',
      'iPod1,1': 'iPod 1st Gen',
      'iPod2,1': 'iPod 2nd Gen',
      'iPod3,1': 'iPod 3rd Gen',
      'iPod4,1': 'iPod 4th Gen',
      'iPod5,1': 'iPod 5th Gen',
      'iPod7,1': 'iPod 6th Gen',
      'iPod9,1': 'iPod 7th Gen',
      'iPad1,1': 'iPad 1st Gen (WiFi)',
      'iPad1,2': 'iPad 1st Gen (3G)',
      'iPad2,1': 'iPad 2nd Gen (WiFi)',
      'iPad2,2': 'iPad 2nd Gen (GSM)',
      'iPad2,3': 'iPad 2nd Gen (CDMA)',
      'iPad2,4': 'iPad 2nd Gen New Revision',
      'iPad2,5': 'iPad mini 1st Gen (WiFi)',
      'iPad2,6': 'iPad mini 1st Gen (GSM+LTE)',
      'iPad2,7': 'iPad mini 1st Gen (CDMA+LTE)',
      'iPad3,1': 'iPad 3rd Gen (WiFi)',
      'iPad3,2': 'iPad 3rd Gen (CDMA)',
      'iPad3,3': 'iPad 3rd Gen (GSM)',
      'iPad3,4': 'iPad 4th Gen (WiFi)',
      'iPad3,5': 'iPad 4th Gen (GSM+LTE)',
      'iPad3,6': 'iPad 4th Gen (CDMA+LTE)',
      'iPad4,1': 'iPad Air 1st Gen (WiFi)',
      'iPad4,2': 'iPad Air 1st Gen (GSM+CDMA)',
      'iPad4,3': 'iPad Air 1st Gen (China)',
      'iPad4,4': 'iPad mini 2nd Gen (WiFi)',
      'iPad4,5': 'iPad mini 2nd Gen (WiFi+Cellular)',
      'iPad4,6': 'iPad mini 2nd Gen (China)',
      'iPad4,7': 'iPad mini 3rd Gen (WiFi)',
      'iPad4,8': 'iPad mini 3rd Gen (WiFi+Cellular)',
      'iPad4,9': 'iPad mini 3rd Gen (China)',
      'iPad5,1': 'iPad mini 4th Gen (WiFi)',
      'iPad5,2': 'iPad mini 4th Gen (WiFi+Cellular)',
      'iPad5,3': 'iPad Air 2 (WiFi)',
      'iPad5,4': 'iPad Air 2 (WiFi+Cellular)',
      'iPad6,3': 'iPad Pro 1st Gen (9.7 inch, WiFi)',
      'iPad6,4': 'iPad Pro 1st Gen (9.7 inch, WiFi+Cellular)',
      'iPad6,7': 'iPad Pro 1st Gen (12.9 inch, WiFi)',
      'iPad6,8': 'iPad Pro 1st Gen (12.9 inch, WiFi+Cellular)',
      'iPad6,11': 'iPad 5th Gen (WiFi)',
      'iPad6,12': 'iPad 5th Gen (WiFi+Cellular)',
      'iPad7,1': 'iPad Pro 2nd Gen (12.9 inch, WiFi)',
      'iPad7,2': 'iPad Pro 2nd Gen (12.9 inch, WiFi+Cellular)',
      'iPad7,3': 'iPad Pro 2nd Gen (10.5 inch, WiFi)',
      'iPad7,4': 'iPad Pro 2nd Gen (10.5 inch, WiFi+Cellular)',
      'iPad7,5': 'iPad 6th Gen (WiFi)',
      'iPad7,6': 'iPad 6th Gen (WiFi+Cellular)',
      'iPad7,11': 'iPad 7th Gen 10.2-inch (WiFi)',
      'iPad7,12': 'iPad 7th Gen 10.2-inch (WiFi+Cellular)',
      'iPad8,1': 'iPad Pro 3rd Gen (11 inch, WiFi)',
      'iPad8,2': 'iPad Pro 3rd Gen (11 inch, WiFi, 1TB)',
      'iPad8,3': 'iPad Pro 3rd Gen (11 inch, WiFi+Cellular)',
      'iPad8,4': 'iPad Pro 3rd Gen (11 inch, WiFi+Cellular, 1TB)',
      'iPad8,5': 'iPad Pro 3rd Gen (12.9 inch, WiFi)',
      'iPad8,6': 'iPad Pro 3rd Gen (12.9 inch, WiFi, 1TB)',
      'iPad8,7': 'iPad Pro 3rd Gen (12.9 inch, WiFi+Cellular)',
      'iPad8,8': 'iPad Pro 3rd Gen (12.9 inch, WiFi+Cellular, 1TB)',
      'iPad11,1': 'iPad mini 5th Gen (WiFi)',
      'iPad11,2': 'iPad mini 5th Gen (WiFi+Cellular)',
      'iPad11,3': 'iPad Air 3rd Gen (WiFi)',
      'iPad11,4': 'iPad Air 3rd Gen (WiFi+Cellular)',
      'Watch1,1': 'Apple Watch 1st Gen 38mm case',
      'Watch1,2': 'Apple Watch 1st Gen 42mm case',
      'Watch2,6': 'Apple Watch Series 1 38mm case',
      'Watch2,7': 'Apple Watch Series 1 42mm case',
      'Watch2,3': 'Apple Watch Series 2 38mm case',
      'Watch2,4': 'Apple Watch Series 2 42mm case',
      'Watch3,1': 'Apple Watch Series 3 38mm case (GPS+Cellular)',
      'Watch3,2': 'Apple Watch Series 3 42mm case (GPS+Cellular)',
      'Watch3,3': 'Apple Watch Series 3 38mm case (GPS)',
      'Watch3,4': 'Apple Watch Series 3 42mm case (GPS)',
      'Watch4,1': 'Apple Watch Series 4 40mm case (GPS)',
      'Watch4,2': 'Apple Watch Series 4 44mm case (GPS)',
      'Watch4,3': 'Apple Watch Series 4 40mm case (GPS+Cellular)',
      'Watch4,4': 'Apple Watch Series 4 44mm case (GPS+Cellular)',
      'Watch5,1': 'Apple Watch Series 5 40mm case (GPS)',
      'Watch5,2': 'Apple Watch Series 5 44mm case (GPS)',
      'Watch5,3': 'Apple Watch Series 5 40mm case (GPS+Cellular)',
      'Watch5,4': 'Apple Watch Series 5 44mm case (GPS+Cellular)'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\npm\fx11_mobile\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map