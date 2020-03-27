function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/welcome/welcome.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/welcome/welcome.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthPagesWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ng-container *ngIf=\"showCordovaFeatures\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"showDeviceData()\" class=\"button-text-color\" fill=\"clear\">{{ getVersion() }}</ion-button>\r\n      </ion-buttons>\r\n    </ng-container>\r\n    <ion-title>&nbsp;</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ng-container *ngIf=\"device.uuid\">\r\n        <ion-button (click)=\"showFullUUID()\" class=\"button-text-color\" fill=\"clear\">\r\n          NC: {{ getUUIDLast8() }}\r\n        </ion-button>\r\n      </ng-container>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"title-header\">\r\n    <img (click)=\"confirmClean()\" alt=\"Primetec\" src=\"assets/imgs/logo.png\">\r\n    <h3 class=\"ion-text-left\" style=\"margin-bottom: 0;\">Bienvenido a FX11</h3>\r\n  </div>\r\n\r\n</ion-header>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <ion-tabs>\r\n    <!-- Tab bar -->\r\n    <ion-tab-bar slot=\"top\">\r\n      <ion-tab-button selected=\"true\" tab=\"login\">\r\n        Iniciar sesión\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"register\">\r\n        Registrarse\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/auth/pages/welcome/welcome.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/auth/pages/welcome/welcome.module.ts ***!
    \******************************************************/

  /*! exports provided: WelcomePageModule */

  /***/
  function srcAppAuthPagesWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
      return WelcomePageModule;
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


    var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/auth/pages/welcome/welcome.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var routes = [{
      path: '',
      component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ../login/login.module */
          "./src/app/auth/pages/login/login.module.ts")).then(function (module) {
            return module.LoginPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ../login/login.module */
          "./src/app/auth/pages/login/login.module.ts")).then(function (module) {
            return module.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | register-register-module */
          [__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null,
          /*! ../register/register.module */
          "./src/app/auth/pages/register/register.module.ts")).then(function (module) {
            return module.RegisterPageModule;
          });
        }
      }]
    }];

    var WelcomePageModule = function WelcomePageModule() {
      _classCallCheck(this, WelcomePageModule);
    };

    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]]
    })], WelcomePageModule);
    /***/
  },

  /***/
  "./src/app/auth/pages/welcome/welcome.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/auth/pages/welcome/welcome.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthPagesWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: var(--color-login-header);\n}\n\n.button-text-color {\n  color: white;\n}\n\nion-header {\n  --background: var(--color-login-header);\n  background: var(--color-login-header);\n  --color: white;\n  color: white;\n}\n\nion-header .title-header {\n  margin-top: 5px;\n  background: var(--color-login-header);\n  text-align: center !important;\n}\n\nion-header .title-header img {\n  height: 80px;\n  margin-top: 10px;\n}\n\nion-header .title-header h3 {\n  text-align: center !important;\n}\n\n@media (min-width: 360px) {\n  ion-header .title-header h3 {\n    padding-bottom: 10px;\n  }\n}\n\nion-tab-button {\n  color: white;\n  --color: white;\n}\n\nion-tab-bar {\n  --background: var(--color-login-header);\n}\n\nion-tab-bar ion-tab-button {\n  -webkit-box-align: center;\n          align-items: center;\n  max-width: 130px;\n  font-size: 14px;\n  --background: var(--color-login-header);\n}\n\n@media (max-width: 360px) {\n  ion-tab-bar ion-tab-button {\n    max-width: 120px;\n  }\n}\n\nion-tab-bar ion-tab-button:nth-child(1) {\n  position: relative;\n  left: -15%;\n}\n\nion-tab-bar ion-tab-button:nth-child(2) {\n  position: relative;\n  left: -10%;\n}\n\n.tab-selected {\n  border-bottom: 2px solid white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy93ZWxjb21lL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxhdXRoXFxwYWdlc1xcd2VsY29tZVxcd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFSTtFQUNFLDZCQUFBO0FDQU47O0FERU07RUFIRjtJQUlJLG9CQUFBO0VDQ047QUFDRjs7QURJQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSx1Q0FBQTtBQ0RGOztBREdFO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0FDREo7O0FERUk7RUFMRjtJQU1JLGdCQUFBO0VDQ0o7QUFDRjs7QURDSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0NOOztBREVJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDQU47O0FES0E7RUFDRSx5Q0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbG9naW4taGVhZGVyKTtcclxufVxyXG5cclxuLmJ1dHRvbi10ZXh0LWNvbG9yIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbG9naW4taGVhZGVyKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgLnRpdGxlLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi10YWItYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10YWItYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxvZ2luLWhlYWRlcik7XHJcblxyXG4gIGlvbi10YWItYnV0dG9uIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IC0xNSU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IC0xMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGFiLXNlbGVjdGVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbG9naW4taGVhZGVyKTtcbn1cblxuLmJ1dHRvbi10ZXh0LWNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWhlYWRlciAudGl0bGUtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgLnRpdGxlLWhlYWRlciBpbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24taGVhZGVyIC50aXRsZS1oZWFkZXIgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNjBweCkge1xuICBpb24taGVhZGVyIC50aXRsZS1oZWFkZXIgaDMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRhYi1iYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxvZ2luLWhlYWRlcik7XG59XG5pb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIHtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICB9XG59XG5pb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbjpudGgtY2hpbGQoMSkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xNSU7XG59XG5pb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbjpudGgtY2hpbGQoMikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xMCU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/pages/welcome/welcome.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/auth/pages/welcome/welcome.page.ts ***!
    \****************************************************/

  /*! exports provided: WelcomePage */

  /***/
  function srcAppAuthPagesWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
      return WelcomePage;
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


    var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var _environments_ios_device_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../environments/ios-device-names */
    "./src/environments/ios-device-names.ts");

    var WelcomePage =
    /*#__PURE__*/
    function () {
      function WelcomePage(storage, alertController, toastService, device, platform) {
        var _this = this;

        _classCallCheck(this, WelcomePage);

        this.storage = storage;
        this.alertController = alertController;
        this.toastService = toastService;
        this.device = device;
        this.platform = platform;
        this.showCordovaFeatures = false;
        this.isIos = false;
        /**
         * getVersion
         */

        this.getVersion = function () {
          return _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appVersion;
        };
        /**
         * confirmClean
         */


        this.confirmClean = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      message: 'Desea borrar la base de datos del telefono ?',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return this.cleanCache();

                                  case 2:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        };
        /**
         * cleanCache
         */


        this.cleanCache = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var remember, userRemember;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    remember = localStorage.getItem('remember');

                    if (!(remember === 'true')) {
                      _context3.next = 13;
                      break;
                    }

                    _context3.next = 4;
                    return this.storage.getRow('userRemember');

                  case 4:
                    userRemember = _context3.sent;
                    localStorage.clear();
                    _context3.next = 8;
                    return this.storage.clearAllRow();

                  case 8:
                    _context3.next = 10;
                    return this.storage.setRow('userRemember', userRemember);

                  case 10:
                    localStorage.setItem('remember', 'true');
                    _context3.next = 16;
                    break;

                  case 13:
                    localStorage.clear();
                    _context3.next = 16;
                    return this.storage.clearAllRow();

                  case 16:
                    this.toastService.successToast('Datos eliminados');

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        };
        /**
         * getUUIDLast8
         */


        this.getUUIDLast8 = function () {
          if (_this.device.uuid) {
            return _this.device.uuid.substring(_this.device.uuid.length - 8);
          }

          return '';
        };
        /**
         * showFullUUID
         */


        this.showFullUUID = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.device.uuid) {
                      _context4.next = 6;
                      break;
                    }

                    _context4.next = 3;
                    return this.alertController.create({
                      header: 'NC',
                      message: this.device.uuid,
                      buttons: ['OK']
                    });

                  case 3:
                    alert = _context4.sent;
                    _context4.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        };
        /**
         * showDeviceData
         */


        this.showDeviceData = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var model, alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    model = this.isIos ? _environments_ios_device_names__WEBPACK_IMPORTED_MODULE_7__["iosDeviceNames"][this.device.model] : this.device.model;
                    _context5.next = 3;
                    return this.alertController.create({
                      header: 'Device',
                      message: "\n        <p>Manufacturer: ".concat(this.device.manufacturer, "</p>\n        <p>Model: ").concat(model, "</p>\n        <p>Platform: ").concat(this.device.platform, "</p>\n        <p>Version: ").concat(this.device.version, "</p>\n        <p>Cordova: ").concat(this.device.cordova, "</p>\n      "),
                      buttons: ['OK']
                    });

                  case 3:
                    alert = _context5.sent;
                    _context5.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        };

        this.platform.ready().then(function () {
          _this.showCordovaFeatures = _this.platform.is('cordova');
          _this.isIos = _this.platform.is('ios');
        });
      }

      _createClass(WelcomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomePage;
    }();

    WelcomePage.ctorParameters = function () {
      return [{
        type: _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/welcome/welcome.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.page.scss */
      "./src/app/auth/pages/welcome/welcome.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], WelcomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map