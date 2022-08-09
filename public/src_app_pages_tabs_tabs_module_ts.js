"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 8482:
/*!*****************************************!*\
  !*** ./src/app/guards/usuario.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioGuard": () => (/* binding */ UsuarioGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/usuario.service */ 5763);



let UsuarioGuard = class UsuarioGuard {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    canLoad() {
        return this.usuarioService.validaToken();
    }
};
UsuarioGuard.ctorParameters = () => [
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService }
];
UsuarioGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UsuarioGuard);



/***/ }),

/***/ 5448:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/usuario.guard */ 8482);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 4101);





const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage,
        children: [
            {
                path: 'growshop',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_web_components_module_ts"), __webpack_require__.e("src_app_pages_growshop_growshop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../growshop/growshop.module */ 3576)).then(m => m.GrowshopPageModule)
            },
            {
                path: 'cuenta',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_web_components_module_ts"), __webpack_require__.e("src_app_pages_cuenta_cuenta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../cuenta/cuenta.module */ 4178)).then(m => m.CuentaPageModule),
                canLoad: [src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_0__.UsuarioGuard]
            },
            {
                path: 'carrito',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_web_components_module_ts"), __webpack_require__.e("src_app_pages_carrito_carrito_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../carrito/carrito.module */ 4646)).then(m => m.CarritoPageModule)
            },
            {
                path: 'categorias',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_web_components_module_ts"), __webpack_require__.e("src_app_pages_categorias_categorias_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../categorias/categorias.module */ 1653)).then(m => m.CategoriasPageModule)
            },
            {
                path: 'panel-control',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_web_components_module_ts"), __webpack_require__.e("src_app_pages_panel-control_panel-control_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../panel-control/panel-control.module */ 5666)).then(m => m.PanelControlPageModule)
            },
            {
                path: '',
                redirectTo: 'growshop',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'growshop',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5557:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 5448);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 4101);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 4101:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 7867);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);





let TabsPage = class TabsPage {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
        this.rol = '';
        this.rol = this.usuarioService.usuario.rol;
    }
};
TabsPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 4436:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7867:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"growshop\">\n      <ion-icon name=\"sunny-outline\"></ion-icon>\n      <ion-label>Tienda</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"cuenta\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Cuenta</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"carrito\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <ion-label>Carrito</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"categorias\">\n      <ion-icon name=\"albums-outline\"></ion-icon>\n      <ion-label>Categorías</ion-label>\n    </ion-tab-button>\n    \n    <ion-tab-button tab=\"panel-control\">\n      <ion-icon name=\"analytics-outline\"></ion-icon>\n      <ion-label>Panel de control</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map