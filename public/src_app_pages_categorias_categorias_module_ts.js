"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_categorias_categorias_module_ts"],{

/***/ 7122:
/*!***************************************************************!*\
  !*** ./src/app/pages/categorias/categorias-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasPageRoutingModule": () => (/* binding */ CategoriasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorias.page */ 1533);




const routes = [
    {
        path: '',
        component: _categorias_page__WEBPACK_IMPORTED_MODULE_0__.CategoriasPage
    }
];
let CategoriasPageRoutingModule = class CategoriasPageRoutingModule {
};
CategoriasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoriasPageRoutingModule);



/***/ }),

/***/ 1653:
/*!*******************************************************!*\
  !*** ./src/app/pages/categorias/categorias.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasPageModule": () => (/* binding */ CategoriasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorias-routing.module */ 7122);
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorias.page */ 1533);
/* harmony import */ var src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/web/components.module */ 3816);








let CategoriasPageModule = class CategoriasPageModule {
};
CategoriasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _categorias_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriasPageRoutingModule,
            src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_1__.CategoriasPage]
    })
], CategoriasPageModule);



/***/ }),

/***/ 1533:
/*!*****************************************************!*\
  !*** ./src/app/pages/categorias/categorias.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasPage": () => (/* binding */ CategoriasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _categorias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorias.page.html?ngResource */ 659);
/* harmony import */ var _categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorias.page.scss?ngResource */ 3020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let CategoriasPage = class CategoriasPage {
    constructor() { }
    ngOnInit() {
    }
};
CategoriasPage.ctorParameters = () => [];
CategoriasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-categorias',
        template: _categorias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoriasPage);



/***/ }),

/***/ 3020:
/*!******************************************************************!*\
  !*** ./src/app/pages/categorias/categorias.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #EBEBEB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpYXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFdpbmRvd3MlMjAxMFxcRGVza3RvcFxcZG9uLWNhY3R1cy1wYWR1YVxcc3JjXFxhcHBcXHBhZ2VzXFxjYXRlZ29yaWFzXFxjYXRlZ29yaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoiY2F0ZWdvcmlhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRUJFQkVCO1xufSJdfQ== */";

/***/ }),

/***/ 659:
/*!******************************************************************!*\
  !*** ./src/app/pages/categorias/categorias.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<app-menu-principal></app-menu-principal>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_categorias_categorias_module_ts.js.map