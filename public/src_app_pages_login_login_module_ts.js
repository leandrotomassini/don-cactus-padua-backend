"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/web/components.module */ 3816);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui-service.service */ 5623);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);








let LoginPage = class LoginPage {
  constructor(usuarioService, navCtrl, uiService) {
    this.usuarioService = usuarioService;
    this.navCtrl = navCtrl;
    this.uiService = uiService;
    this.loginUser = {
      email: 'pedro@test.com',
      password: '123456'
    };
    this.registerUser = {
      nombre: 'Test 1',
      google: false,
      correo: 'test@test.com',
      password: '123456',
      rol: 'CLIENTE',
      img: ''
    };
  }

  ngAfterViewInit() {
    this.googleInit();
  }

  googleInit() {
    google.accounts.id.initialize({
      client_id: "849386631100-90gnjsrcclc99emafpvtvd781qb6m5c8.apps.googleusercontent.com",
      callback: response => this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(this.googleBtn.nativeElement, {
      theme: "outline",
      size: "large"
    } // customization attributes
    );
  }

  handleCredentialResponse(response) {
    this.usuarioService.loginGoogle(response.credential).subscribe(resp => {//console.log({ login: resp });
    }); //console.log("Encoded JWT ID To`ken: " + response.credential);
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  login(fLogin) {
    var _this = this;

    return (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (fLogin.invalid) {
        return;
      }

      const valido = yield _this.usuarioService.login(_this.loginUser.email, _this.loginUser.password);

      if (valido) {
        _this.navCtrl.navigateRoot('/cuenta', {
          animated: true
        });
      } else {
        _this.uiService.alertaInformativa('Usuario o contraseña no son correctos.');
      }
    })();
  }

  registro(fRegistro) {
    var _this2 = this;

    return (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (fRegistro.invalid) {
        return;
      }

      const valido = yield _this2.usuarioService.registro(_this2.registerUser);

      if (valido) {
        _this2.navCtrl.navigateRoot('/cuenta', {
          animated: true
        });
      } else {
        _this2.uiService.alertaInformativa('Ese correo electrónico ya esta registrado.');
      }
    })();
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

};

LoginPage.ctorParameters = () => [{
  type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_3__.UiServiceService
}];

LoginPage.propDecorators = {
  slides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['slidePrincipal', {
      static: false
    }]
  }],
  googleBtn: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['googleBtn']
  }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 5623:
/*!************************************************!*\
  !*** ./src/app/services/ui-service.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiServiceService": () => (/* binding */ UiServiceService)
/* harmony export */ });
/* harmony import */ var C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);




let UiServiceService = class UiServiceService {
  constructor(alertController) {
    this.alertController = alertController;
  }

  alertaInformativa(message) {
    var _this = this;

    return (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        message,
        buttons: ['OK']
      });
    })();
  }

};

UiServiceService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController
}];

UiServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], UiServiceService);


/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".mainSlide,\n.mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 120px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n\n.btnGoogle {\n  margin-top: 1em;\n  margin-left: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGRvbi1jYWN0dXMtcGFkdWFcXHNyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluU2xpZGUsXHJcbi5tYWluU2xpZGUgaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4ucGljay1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bkdvb2dsZXtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbn0iLCIubWFpblNsaWRlLFxuLm1haW5TbGlkZSBpb24tc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5waWNrLWF2YXRhciB7XG4gIHdpZHRoOiA4MHB4O1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5idG5Hb29nbGUge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG59Il19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n\r\n  <ion-slides class=\"mainSlide\" #slidePrincipal>\r\n\r\n    <ion-slide>\r\n\r\n      <form (ngSubmit)=\"login(flogin)\" #flogin=\"ngForm\">\r\n        <ion-grid fixed>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <img src=\"https://i.imgur.com/85h8DWp.jpeg\">\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n\r\n              <ion-list>\r\n\r\n                <ion-item>\r\n                  <ion-label>Email</ion-label>\r\n                  <ion-input name=\"email\" type=\"email\" [(ngModel)]=\"loginUser.email\" required></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label>Password</ion-label>\r\n                  <ion-input name=\"password\" type=\"password\" [(ngModel)]=\"loginUser.password\" required></ion-input>\r\n                </ion-item>\r\n\r\n              </ion-list>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\r\n                Login\r\n              </ion-button>\r\n              <div #googleBtn  class=\"btnGoogle\"></div>\r\n              </ion-col>\r\n          </ion-row>\r\n\r\n\r\n        </ion-grid>\r\n      </form>\r\n\r\n\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n\r\n\r\n      <ion-grid fixed>\r\n\r\n        <app-avatar-selector (avatarSel)=\"registerUser.img = $event\"></app-avatar-selector>\r\n\r\n        <form (ngSubmit)=\"registro(fRegistro)\" #fRegistro=\"ngForm\">\r\n          <ion-row>\r\n            <ion-col>\r\n\r\n              <ion-list>\r\n\r\n                <ion-item>\r\n                  <ion-label>Email</ion-label>\r\n                  <ion-input name=\"correo\" type=\"email\" [(ngModel)]=\"registerUser.correo\" required></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label>Nombre</ion-label>\r\n                  <ion-input name=\"nombre\" type=\"text\" [(ngModel)]=\"registerUser.nombre\" required></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label>Password</ion-label>\r\n                  <ion-input name=\"password\" type=\"password\" [(ngModel)]=\"registerUser.password\" required></ion-input>\r\n                </ion-item>\r\n\r\n              </ion-list>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\r\n                Crear usuario\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </form>\r\n\r\n\r\n      </ion-grid>\r\n\r\n\r\n    </ion-slide>\r\n\r\n\r\n  </ion-slides>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer no-border>\r\n  <ion-toolbar>\r\n\r\n    <ion-row>\r\n\r\n      <ion-col>\r\n        <ion-button shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\" color=\"tertiary\"\r\n          (click)=\"mostrarRegistro()\">\r\n          Ingresar\r\n        </ion-button>\r\n      </ion-col>\r\n\r\n      <ion-col>\r\n        <ion-button shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\" color=\"tertiary\" (click)=\"mostrarLogin()\">\r\n          Registrarme\r\n        </ion-button>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map