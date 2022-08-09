"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cuenta_cuenta_module_ts"],{

/***/ 1162:
/*!*******************************************************!*\
  !*** ./src/app/pages/cuenta/cuenta-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPageRoutingModule": () => (/* binding */ CuentaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta.page */ 7399);




const routes = [
    {
        path: '',
        component: _cuenta_page__WEBPACK_IMPORTED_MODULE_0__.CuentaPage
    }
];
let CuentaPageRoutingModule = class CuentaPageRoutingModule {
};
CuentaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CuentaPageRoutingModule);



/***/ }),

/***/ 4178:
/*!***********************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPageModule": () => (/* binding */ CuentaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta-routing.module */ 1162);
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.page */ 7399);
/* harmony import */ var src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/web/components.module */ 3816);








let CuentaPageModule = class CuentaPageModule {
};
CuentaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__.CuentaPageRoutingModule,
            src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_cuenta_page__WEBPACK_IMPORTED_MODULE_1__.CuentaPage]
    })
], CuentaPageModule);



/***/ }),

/***/ 7399:
/*!*********************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPage": () => (/* binding */ CuentaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cuenta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta.page.html?ngResource */ 4479);
/* harmony import */ var _cuenta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.page.scss?ngResource */ 8347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);





let CuentaPage = class CuentaPage {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    ngOnInit() {
        this.usuario = this.usuarioService.usuario;
    }
    salir() {
        this.usuarioService.logout();
    }
};
CuentaPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService }
];
CuentaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cuenta',
        template: _cuenta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cuenta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CuentaPage);



/***/ }),

/***/ 8347:
/*!**********************************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #EBEBEB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1ZW50YS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcV2luZG93cyUyMDEwXFxEZXNrdG9wXFxkb24tY2FjdHVzLXBhZHVhXFxzcmNcXGFwcFxccGFnZXNcXGN1ZW50YVxcY3VlbnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoiY3VlbnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0VCRUJFQjtcbn0iXX0= */";

/***/ }),

/***/ 4479:
/*!**********************************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<app-menu-principal></app-menu-principal>\n\n<ion-content>\n<h1>Mi cuenta</h1>\n\n<ion-item>\n    <ion-title>{{ usuario.nombre }}</ion-title>\n    <ion-card-subtitle>{{ usuario.correo }}</ion-card-subtitle>\n    <ion-card-content>\n        <ion-label (click)=\"salir()\">Salir</ion-label>\n    </ion-card-content>\n</ion-item>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cuenta_cuenta_module_ts.js.map