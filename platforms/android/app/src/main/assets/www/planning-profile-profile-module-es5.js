function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/profile/change-password/change-password.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/profile/change-password/change-password.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagePlanningProfileChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"form\">\r\n    <p class=\"p\">\r\n      <strong>Cambiar contraseña</strong>\r\n      <span (click)=\"modalClose()\" class=\"closeModal\">x</span>\r\n    </p>\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"passwordForm\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Contraseña</ion-label>\r\n        <ion-input formControlName=\"password\" type=\"password\"></ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"passwordForm.controls.password.dirty && passwordForm.hasError('required', 'password')\"\r\n           style=\"color: red\">\r\n        La\r\n        contraseña es requerida.\r\n      </div>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Confirmar Contraseña</ion-label>\r\n        <ion-input formControlName=\"confirm\"\r\n                   tabindex=\"7\" type=\"password\"></ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"passwordForm.controls.confirm.dirty && passwordForm.hasError('required', 'confirm')\"\r\n           style=\"color: red\">\r\n        Debe\r\n        confirmar la contraseña\r\n      </div>\r\n      <div *ngIf=\"passwordForm.controls.confirm.dirty && passwordForm.hasError('notSame')\"\r\n           style=\"color: red\">Las\r\n        contraseñas no son iguales\r\n      </div>\r\n\r\n      <br>\r\n      <ion-button\r\n        [disabled]=\"passwordForm.invalid\"\r\n        color=\"danger\"\r\n        expand=\"block\"\r\n        type=\"submit\">\r\n        Cambiar Contraseña\r\n      </ion-button>\r\n\r\n    </form>\r\n\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/profile/profile.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/profile/profile.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagePlanningProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"background-color-header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"header-back-button\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center white\">\r\n      <strong>Perfil</strong>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <app-notifications></app-notifications>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"profile ion-text-center\">\r\n    <div *ngIf=\"device.cordova\">\r\n      <ion-avatar class=\"ion-no-margin\" style=\"margin: 0 auto !important\">\r\n        <img [src]=\"avatarPreview || 'assets/imgs/user.png'\">\r\n      </ion-avatar>\r\n    </div>\r\n  </div>\r\n\r\n  <br><br>\r\n  <ng-container *ngIf=\"device.cordova\">\r\n    <ion-item>\r\n      <ion-button (click)=\"openCamera()\" slot=\"start\">\r\n        <ion-icon name=\"camera\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n      <ion-label>&nbsp;</ion-label>\r\n      <ion-button (click)=\"openGallery()\" slot=\"end\">\r\n        <ion-icon name=\"image\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ng-container>\r\n\r\n  <div>\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"registerForm\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Rut</ion-label>\r\n        <ion-input formControlName=\"rut\" tabindex=\"0\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('rut').errors\">\r\n          <span *ngIf=\"registerForm.get('rut').hasError('required')\" style=\"color: red\">El rut es requerido.</span>\r\n          <span *ngIf=\"registerForm.get('rut').hasError('notRut')\" style=\"color: red\">El rut es inválido.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nombres</ion-label>\r\n        <ion-input formControlName=\"nombre\" tabindex=\"1\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('nombre').errors\">\r\n          <span *ngIf=\"registerForm.get('nombre').hasError('required')\" style=\"color: red\">Los nombres son requeridos.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Apellido Paterno</ion-label>\r\n        <ion-input formControlName=\"apellido_paterno\" tabindex=\"2\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('apellido_paterno').errors\">\r\n          <span *ngIf=\"registerForm.get('apellido_paterno').hasError('required')\" style=\"color: red\">El apellido parterno es requerido.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Apellido Materno</ion-label>\r\n        <ion-input class=\"input-text\" formControlName=\"apellido_materno\" tabindex=\"3\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('apellido_materno').errors\">\r\n          <span *ngIf=\"registerForm.get('apellido_materno').hasError('required')\" style=\"color: red\">El apellido materno es requerido.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Correo</ion-label>\r\n        <ion-input formControlName=\"email\" tabindex=\"4\" type=\"email\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('email').errors\">\r\n          <span *ngIf=\"registerForm.get('email').hasError('required')\" style=\"color: red\">El correo es requerido.</span>\r\n          <span *ngIf=\"registerForm.get('email').hasError('email')\" style=\"color: red\">Ingrese un correo valido.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Telefono</ion-label>\r\n        <ion-input formControlName=\"telefono\" tabindex=\"5\" type=\"tel\"></ion-input>\r\n        <ng-container *ngIf=\"registerForm.get('telefono').errors\">\r\n          <span *ngIf=\"registerForm.get('telefono').hasError('required')\" style=\"color: red\">El telefono es requerido.</span>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <br>\r\n      <ion-radio-group formControlName=\"acceso\">\r\n        <ion-list-header>\r\n          Tipo de Acceso\r\n        </ion-list-header>\r\n\r\n        <ion-item>\r\n          <ion-label>Rut</ion-label>\r\n          <ion-radio value=\"1\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Correo</ion-label>\r\n          <ion-radio value=\"2\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n      <div *ngIf=\"registerForm.get('acceso').hasError('required')\" style=\"color: red\">\r\n        Debe seleccionar una opción\r\n      </div>\r\n\r\n      <div>\r\n        <ion-button (click)=\"changePassword()\" color=\"danger\" fill=\"clear\">\r\n          Cambiar contraseña\r\n        </ion-button>\r\n      </div>\r\n\r\n      <br><br>\r\n      <ion-button\r\n        [disabled]=\"registerForm.invalid\"\r\n        color=\"danger\"\r\n        expand=\"block\"\r\n        type=\"submit\">\r\n        Actualizar\r\n      </ion-button>\r\n    </form>\r\n\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/home-page/planning/profile/change-password/change-password.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/home-page/planning/profile/change-password/change-password.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagePlanningProfileChangePasswordChangePasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  padding: 20px;\n}\n\n.form {\n  padding: 20px;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n}\n\np {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL3Byb2ZpbGUvY2hhbmdlLXBhc3N3b3JkL0Q6XFxucG1cXGZ4MTFfbW9iaWxlL3NyY1xcYXBwXFxob21lLXBhZ2VcXHBsYW5uaW5nXFxwcm9maWxlXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL3Byb2ZpbGUvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL3Byb2ZpbGUvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mb3JtIHtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home-page/planning/profile/change-password/change-password.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/home-page/planning/profile/change-password/change-password.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppHomePagePlanningProfileChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
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


    var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _validators_confirm_password_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../validators/confirm-password.validator */
    "./src/app/validators/confirm-password.validator.ts");
    /* harmony import */


    var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/user/user.service */
    "./src/app/shared/services/user/user.service.ts");
    /* harmony import */


    var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var ChangePasswordComponent =
    /*#__PURE__*/
    function () {
      function ChangePasswordComponent(formBuilder, userService, authService, loaderService, toastService, modalController, httpService, storeService) {
        var _this = this;

        _classCallCheck(this, ChangePasswordComponent);

        this.formBuilder = formBuilder;
        this.userService = userService;
        this.authService = authService;
        this.loaderService = loaderService;
        this.toastService = toastService;
        this.modalController = modalController;
        this.httpService = httpService;
        this.storeService = storeService;
        /**
         * @description actualizar usuario
         */

        this.onSubmit = function () {
          var user = _this.storeService.getRememberData();

          var password = user.password;

          var token = _this.storeService.getToken();

          var custom = {
            token: token,
            password: password,
            newPassword: _this.passwordForm.get('password').value,
            newPassword_confirm: _this.passwordForm.get('confirm').value
          };
          var data = Object.assign({}, custom);

          _this.update(data, user);
        };

        this.modalClose = function () {
          _this.modalController.dismiss();
        };
        /**
         * create
         * @param data
         */


        this.update = function (data, userRemember) {
          _this.loaderService.startLoader();

          _this.userService.updatePassword(data).subscribe(function (success) {
            userRemember.password = data.newPassword;

            _this.storeService.setRememberData(userRemember);

            _this.toastService.successToast('Se actualizo la contraseña correctamente');

            _this.modalClose();

            _this.loaderService.stopLoader();
          }, function (error) {
            _this.loaderService.stopLoader();

            _this.httpService.errorHandler(error);
          });
        };
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.passwordForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: _validators_confirm_password_validator__WEBPACK_IMPORTED_MODULE_5__["confirmPassword"]
          });
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
      }, {
        type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]
      }];
    };

    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/profile/change-password/change-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.component.scss */
      "./src/app/home-page/planning/profile/change-password/change-password.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"]])], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/home-page/planning/profile/profile.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/home-page/planning/profile/profile.module.ts ***!
    \**************************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppHomePagePlanningProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/home-page/planning/profile/profile.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/home-page/planning/profile/change-password/change-password.component.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }];

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      entryComponents: [_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/home-page/planning/profile/profile.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/home-page/planning/profile/profile.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagePlanningProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile {\n  padding: 20px 20px 0 20px !important;\n  height: 86px;\n}\n\nion-avatar {\n  width: 100px;\n}\n\nion-avatar img {\n  height: 100px;\n}\n\n/*\nion-label {\n  opacity: .8 !important;\n  font-style: italic;\n}\n\n.cameras {\n  font-size: 40px;\n  text-align: center;\n}\n\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL3Byb2ZpbGUvRDpcXG5wbVxcZngxMV9tb2JpbGUvc3JjXFxhcHBcXGhvbWUtcGFnZVxccGxhbm5pbmdcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvcGxhbm5pbmcvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREVFO0VBQ0UsYUFBQTtBQ0FKOztBRElBOzs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL3BsYW5uaW5nL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByb2ZpbGUge1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDg2cHg7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG5pb24tbGFiZWwge1xyXG4gIG9wYWNpdHk6IC44ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uY2FtZXJhcyB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuKi9cclxuIiwiLnByb2ZpbGUge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogODZweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbmlvbi1hdmF0YXIgaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLypcbmlvbi1sYWJlbCB7XG4gIG9wYWNpdHk6IC44ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmNhbWVyYXMge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/planning/profile/profile.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/home-page/planning/profile/profile.page.ts ***!
    \************************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppHomePagePlanningProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/user/user.service */
    "./src/app/shared/services/user/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/loader/loader.service */
    "./src/app/shared/services/loader/loader.service.ts");
    /* harmony import */


    var _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/toast/toast.service */
    "./src/app/shared/services/toast/toast.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _primetec_primetec_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @primetec/primetec-angular */
    "./node_modules/@primetec/primetec-angular/fesm2015/primetec-primetec-angular.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/home-page/planning/profile/change-password/change-password.component.ts");
    /* harmony import */


    var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/services/http/http.service */
    "./src/app/shared/services/http/http.service.ts");
    /* harmony import */


    var _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/services/camera/camera.service */
    "./src/app/shared/services/camera/camera.service.ts");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/services/store/store.service */
    "./src/app/shared/services/store/store.service.ts");

    var ProfilePage =
    /*#__PURE__*/
    function () {
      function ProfilePage(userService, formBuilder, loaderService, toastService, router, modalController, device, authService, httpService, cameraService, storeService) {
        var _this2 = this;

        _classCallCheck(this, ProfilePage);

        this.userService = userService;
        this.formBuilder = formBuilder;
        this.loaderService = loaderService;
        this.toastService = toastService;
        this.router = router;
        this.modalController = modalController;
        this.device = device;
        this.authService = authService;
        this.httpService = httpService;
        this.cameraService = cameraService;
        this.storeService = storeService;
        this.profile = null;
        this.avatarPreview = null;
        /**
         * changePassword
         */

        this.changePassword = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"],
                      cssClass: 'change-modal-password'
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        };
        /**
         * openCamera
         */


        this.openCamera = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var image;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.cameraService.openCamera();

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
         * openGallery
         */


        this.openGallery = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var image;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.cameraService.openGallery();

                  case 2:
                    image = _context3.sent;

                    if (image) {
                      this.getImage(image);
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
         * loadUserData
         */


        this.loadUserData = function () {
          _this2.profile = _this2.storeService.getUser();
          _this2.avatarPreview = "data:image/jpeg;base64,".concat(_this2.profile.avatar);
          _this2.rutValue = _this2.profile.rut;
        };
        /**
         * update
         * @param data
         */


        this.update = function (data) {
          _this2.loaderService.startLoader();

          _this2.userService.updateUser(data).subscribe(function (success) {
            _this2.profile.access = data.acceso;
            _this2.profile.surName = data.apellido_materno;
            _this2.profile.lastName = data.apellido_paterno;
            _this2.profile.name = data.nombre;
            _this2.profile.phone = data.telefono;
            _this2.profile.avatar = data.avatar;

            _this2.storeService.setUser(_this2.profile);

            _this2.loaderService.stopLoader();

            _this2.router.navigate(['home-page']);
          }, function (error) {
            _this2.loaderService.stopLoader();

            _this2.httpService.errorHandler(error);
          });
        };
        /**
         * getImage
         * @param image
         */


        this.getImage = function (image) {
          var imageUrl = image;
          _this2.avatarPreview = "data:image/jpeg;base64,".concat(image);

          _this2.registerForm.patchValue({
            avatar: imageUrl
          });

          _this2.registerForm.updateValueAndValidity();
        };
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadUserData();
          this.registerForm = this.formBuilder.group({
            id: [this.profile.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nombre: [this.profile.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatar: [this.profile.avatar],
            apellido_paterno: [this.profile.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            apellido_materno: [this.profile.surName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rut: [{
              value: this.profile.rut,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _primetec_primetec_angular__WEBPACK_IMPORTED_MODULE_8__["ValidateRut"]]],
            telefono: [this.profile.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [this.profile.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            acceso: [this.profile.access.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
        /**
         * onSubmit
         */

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var list = {
            password: '',
            token: this.storeService.getToken()
          };
          var data = Object.assign(list, this.registerForm.value);
          data.rut = this.rutValue;
          this.update(data);
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }, {
        type: _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"]
      }, {
        type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"]
      }, {
        type: _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_12__["CameraService"]
      }, {
        type: _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_14__["StoreService"]
      }];
    };

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/planning/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/home-page/planning/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], _shared_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"], _shared_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_12__["CameraService"], _shared_services_store_store_service__WEBPACK_IMPORTED_MODULE_14__["StoreService"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=planning-profile-profile-module-es5.js.map