"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_panel-control_panel-control_module_ts"],{

/***/ 6486:
/*!*********************************************************************!*\
  !*** ./src/app/pages/panel-control/panel-control-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelControlPageRoutingModule": () => (/* binding */ PanelControlPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _panel_control_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-control.page */ 8651);




const routes = [
    {
        path: '',
        component: _panel_control_page__WEBPACK_IMPORTED_MODULE_0__.PanelControlPage
    }
];
let PanelControlPageRoutingModule = class PanelControlPageRoutingModule {
};
PanelControlPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PanelControlPageRoutingModule);



/***/ }),

/***/ 5666:
/*!*************************************************************!*\
  !*** ./src/app/pages/panel-control/panel-control.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelControlPageModule": () => (/* binding */ PanelControlPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _panel_control_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-control-routing.module */ 6486);
/* harmony import */ var src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/web/components.module */ 3816);
/* harmony import */ var _panel_control_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-control.page */ 8651);








let PanelControlPageModule = class PanelControlPageModule {
};
PanelControlPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _panel_control_routing_module__WEBPACK_IMPORTED_MODULE_0__.PanelControlPageRoutingModule,
            src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ],
        declarations: [_panel_control_page__WEBPACK_IMPORTED_MODULE_2__.PanelControlPage]
    })
], PanelControlPageModule);



/***/ }),

/***/ 8651:
/*!***********************************************************!*\
  !*** ./src/app/pages/panel-control/panel-control.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelControlPage": () => (/* binding */ PanelControlPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _panel_control_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-control.page.html?ngResource */ 7874);
/* harmony import */ var _panel_control_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-control.page.scss?ngResource */ 4530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PanelControlPage = class PanelControlPage {
    constructor() { }
    ngOnInit() {
    }
};
PanelControlPage.ctorParameters = () => [];
PanelControlPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-panel-control',
        template: _panel_control_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_panel_control_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PanelControlPage);



/***/ }),

/***/ 4530:
/*!************************************************************************!*\
  !*** ./src/app/pages/panel-control/panel-control.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #EBEBEB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLWNvbnRyb2wucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFdpbmRvd3MlMjAxMFxcRGVza3RvcFxcZG9uLWNhY3R1cy1wYWR1YVxcc3JjXFxhcHBcXHBhZ2VzXFxwYW5lbC1jb250cm9sXFxwYW5lbC1jb250cm9sLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoicGFuZWwtY29udHJvbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0VCRUJFQjtcbn0iXX0= */";

/***/ }),

/***/ 7874:
/*!************************************************************************!*\
  !*** ./src/app/pages/panel-control/panel-control.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Panel de control</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n        <app-tabla-categorias></app-tabla-categorias>\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n        <app-tabla-etiquetas></app-tabla-etiquetas>\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-md=\"12\" size-lg=\"12\">\r\n        <app-tabla-productos></app-tabla-productos>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n    \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_panel-control_panel-control_module_ts.js.map