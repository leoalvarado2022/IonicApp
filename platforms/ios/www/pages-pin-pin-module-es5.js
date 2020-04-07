function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pin-pin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/pin/pin.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/pin/pin.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthPagesPinPinPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"white\" text=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"title-header\">\n    <h3 class=\"ion-text-left\">PIN</h3>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"pd-default\">\n    <br>\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"pinForm\">\n      <ion-item>\n        <ion-label position=\"floating\">PIN</ion-label>\n        <ion-input\n          formControlName=\"pin\"\n          type=\"number\">\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"pinForm.controls.pin.dirty && pinForm.hasError('required', 'pin')\" style=\"color: red\">\n        El Pin es requerido\n      </div>\n\n      <br/>\n      <ion-button\n        [disabled]=\"pinForm.invalid\"\n        color=\"danger\"\n        expand=\"block\"\n        type=\"submit\">\n        Aceptar\n      </ion-button>\n    </form>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/modules/auth/pages/pin/pin.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/auth/pages/pin/pin.module.ts ***!
    \******************************************************/

  /*! exports provided: PinPageModule */

  /***/
  function srcAppModulesAuthPagesPinPinModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PinPageModule", function () {
      return PinPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pin.page */
    "./src/app/modules/auth/pages/pin/pin.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var routes = [{
      path: '',
      component: _pin_page__WEBPACK_IMPORTED_MODULE_6__["PinPage"]
    }];

    var PinPageModule = function PinPageModule() {
      _classCallCheck(this, PinPageModule);
    };

    PinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_pin_page__WEBPACK_IMPORTED_MODULE_6__["PinPage"]]
    })], PinPageModule);
    /***/
  },

  /***/
  "./src/app/modules/auth/pages/pin/pin.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/modules/auth/pages/pin/pin.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthPagesPinPinPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: var(--color-login-header);\n}\n\nion-header {\n  --background: var(--color-login-header);\n  background: var(--color-login-header);\n  --color: white;\n  color: white;\n}\n\nion-header .title-header {\n  background: var(--color-login-header);\n}\n\nion-header .title-header h3 {\n  padding-left: 5%;\n}\n\n@media (min-width: 360px) {\n  ion-header .title-header h3 {\n    padding-bottom: 10px;\n    padding-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29udHJlcmFzL1ByaW1ldGVjL2Z4MTEvZngxMV9tb2JpbGUvc3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFnZXMvcGluL3Bpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9waW4vcGluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDRTtFQUNFLHFDQUFBO0FDQ0o7O0FEQ0k7RUFDRSxnQkFBQTtBQ0NOOztBREFNO0VBRkY7SUFHSSxvQkFBQTtJQUNBLGlCQUFBO0VDR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9waW4vcGluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIC50aXRsZS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxvZ2luLWhlYWRlcik7XG5cbiAgICBoMyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1sb2dpbi1oZWFkZXIpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWhlYWRlciAudGl0bGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbG9naW4taGVhZGVyKTtcbn1cbmlvbi1oZWFkZXIgLnRpdGxlLWhlYWRlciBoMyB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIHtcbiAgaW9uLWhlYWRlciAudGl0bGUtaGVhZGVyIGgzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/auth/pages/pin/pin.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/auth/pages/pin/pin.page.ts ***!
    \****************************************************/

  /*! exports provided: PinPage */

  /***/
  function srcAppModulesAuthPagesPinPinPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PinPage", function () {
      return PinPage;
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


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/user/user.service */
    "./src/app/shared/services/user/user.service.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");

    var PinPage =
    /*#__PURE__*/
    function () {
      function PinPage(formBuilder, loaderService, authService, userService, router, toastService, httpService) {
        var _this = this;

        _classCallCheck(this, PinPage);

        this.formBuilder = formBuilder;
        this.loaderService = loaderService;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.toastService = toastService;
        this.httpService = httpService;
        /**
         * onSubmit pin
         */

        this.onSubmit = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var data, connectionPin, user, checkToken, role, id_conexion, _data, response;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.loaderService.startLoader();
                    _context.prev = 1;
                    data = Object.assign({}, this.pinForm.value);

                    if (!(data && data.pin)) {
                      _context.next = 38;
                      break;
                    }

                    _context.next = 6;
                    return this.createUserConnection(data);

                  case 6:
                    connectionPin = _context.sent;

                    if (!(connectionPin.data && connectionPin.status === 201)) {
                      _context.next = 38;
                      break;
                    }

                    _context.next = 10;
                    return this.userConnection();

                  case 10:
                    user = _context.sent;

                    if (!(user.user && user.status === 200)) {
                      _context.next = 38;
                      break;
                    }

                    _context.next = 14;
                    return this.checkToken();

                  case 14:
                    checkToken = _context.sent;

                    if (!(checkToken.data && checkToken.status === 200)) {
                      _context.next = 38;
                      break;
                    }

                    this.authService.setConnection(checkToken.data[0]);
                    console.log(connectionPin, 'connectionPin');
                    console.log(user, 'user');
                    console.log(checkToken, 'checkToken');
                    role = checkToken.data[0].rol;
                    id_conexion = connectionPin.data[0].id_conexion;
                    _data = Object.assign(user.user[0], {
                      names: user.user[0].name,
                      password: '',
                      role: role,
                      pin: this.pinForm.value.pin,
                      connectionId: id_conexion,
                      app: 'FX10',
                      idUsuario: connectionPin.data[0].id_usuario
                    });
                    _context.next = 25;
                    return this.assignUser(_data);

                  case 25:
                    response = _context.sent;

                    if (!(response === null || response.status !== 200)) {
                      _context.next = 30;
                      break;
                    }

                    this.pinForm.get('pin').setValue(''); // this.toastService.errorToast( 'El PIN ingresado es inválido.')

                    _context.next = 38;
                    break;

                  case 30:
                    this.pinForm.reset();
                    _context.next = 33;
                    return this.userService.removeUserRemember();

                  case 33:
                    _context.next = 35;
                    return this.userService.removeUserData();

                  case 35:
                    this.authService.removeToken();
                    this.authService.removeConnection();
                    this.router.navigate(['auth/login']); // this.router.navigate(['/auth'])

                  case 38:
                    this.loaderService.stopLoader();
                    _context.next = 44;
                    break;

                  case 41:
                    _context.prev = 41;
                    _context.t0 = _context["catch"](1);
                    this.loaderService.stopLoader();

                  case 44:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 41]]);
          }));
        };
        /**
         * check token
         * @param pin
         */


        this.checkToken = function () {
          // this.loaderService.showLoader();
          return new Promise(function (resolve) {
            _this.authService.checkToken().subscribe(function (success) {
              // this.loaderService.hideLoader();
              // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
              resolve(success);
            }, function (error) {
              _this.httpService.errorHandler(error);

              resolve(null);
            });
          });
        };
        /**
         * check token
         * @param pin
         */


        this.assignUser = function (data) {
          // this.loaderService.showLoader();
          return new Promise(function (resolve) {
            _this.userService.assignUser(data).subscribe(function (success) {
              // this.loaderService.hideLoader();
              // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
              resolve(success);
            }, function (error) {
              _this.httpService.errorHandler(error);

              resolve(null);
            });
          });
        };
        /**
         * use connection
         * @param pin
         */


        this.userConnection = function () {
          // this.loaderService.showLoader();
          return new Promise(function (resolve) {
            _this.userService.getUser().subscribe(function (success) {
              // this.loaderService.hideLoader();
              // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
              resolve(success);
            }, function (error) {
              _this.httpService.errorHandler(error);

              resolve(null);
            });
          });
        };
        /**
         * createConnectionPin
         * @param pin
         */


        this.createUserConnection = function (pin) {
          // this.loaderService.showLoader();
          return new Promise(function (resolve) {
            _this.authService.createPinConnection(pin).subscribe(function (success) {
              // this.loaderService.hideLoader();
              // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
              resolve(success);
            }, function (error) {
              _this.httpService.errorHandler(error);

              resolve(null);
            });
          });
        };
      }

      _createClass(PinPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pinForm = this.formBuilder.group({
            pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }]);

      return PinPage;
    }();

    PinPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
      }, {
        type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]
      }];
    };

    PinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/pin/pin.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pin.page.scss */
      "./src/app/modules/auth/pages/pin/pin.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]])], PinPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-pin-pin-module-es5.js.map