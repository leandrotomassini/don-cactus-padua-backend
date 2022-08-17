"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_carrito_carrito_module_ts"],{

/***/ 6135:
/*!*********************************************************!*\
  !*** ./src/app/pages/carrito/carrito-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoPageRoutingModule": () => (/* binding */ CarritoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrito.page */ 2905);




const routes = [
    {
        path: '',
        component: _carrito_page__WEBPACK_IMPORTED_MODULE_0__.CarritoPage
    }
];
let CarritoPageRoutingModule = class CarritoPageRoutingModule {
};
CarritoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarritoPageRoutingModule);



/***/ }),

/***/ 4646:
/*!*************************************************!*\
  !*** ./src/app/pages/carrito/carrito.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoPageModule": () => (/* binding */ CarritoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _carrito_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrito-routing.module */ 6135);
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrito.page */ 2905);
/* harmony import */ var src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/web/components.module */ 3816);








let CarritoPageModule = class CarritoPageModule {
};
CarritoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _carrito_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarritoPageRoutingModule,
            src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_carrito_page__WEBPACK_IMPORTED_MODULE_1__.CarritoPage]
    })
], CarritoPageModule);



/***/ }),

/***/ 2905:
/*!***********************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoPage": () => (/* binding */ CarritoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _carrito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrito.page.html?ngResource */ 4202);
/* harmony import */ var _carrito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrito.page.scss?ngResource */ 1237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let CarritoPage = class CarritoPage {
    constructor() { }
    ngOnInit() {
    }
};
CarritoPage.ctorParameters = () => [];
CarritoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-carrito',
        template: _carrito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_carrito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarritoPage);



/***/ }),

/***/ 1237:
/*!************************************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #EBEBEB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpdG8ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFdpbmRvd3MlMjAxMFxcRGVza3RvcFxcZG9uLWNhY3R1cy1wYWR1YVxcc3JjXFxhcHBcXHBhZ2VzXFxjYXJyaXRvXFxjYXJyaXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoiY2Fycml0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRUJFQkVCO1xufSJdfQ== */";

/***/ }),

/***/ 4202:
/*!************************************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-menu-principal></app-menu-principal>\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_carrito_carrito_module_ts.js.map