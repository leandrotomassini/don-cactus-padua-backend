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
/* harmony import */ var C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _carrito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrito.page.html?ngResource */ 4202);
/* harmony import */ var _carrito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrito.page.scss?ngResource */ 1237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carrito.service */ 1635);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);







let CarritoPage = class CarritoPage {
  constructor(carritoService, usuarioService) {
    this.carritoService = carritoService;
    this.usuarioService = usuarioService;
    this.total = 0;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.usuarioService.cargarToken();
      _this.productosSubscripcion = _this.carritoService.obtenerProductosCarrito(_this.usuarioService.usuario.uid).subscribe(productos => {
        _this.productos = productos;

        _this.calcularTotal();
      });
    })();
  }

  ngOnDestroy() {
    this.productosSubscripcion.unsubscribe();
  }

  calcularTotal() {
    this.total = 0;
    this.productos.forEach(producto => {
      this.total = this.total + producto.producto.precio;
    });
  }

  borrarProducto(idCarrito) {
    this.carritoService.borrarProductoCarrito(idCarrito).then().catch();
  }

  pagar() {
    this.carritoService.pagar(this.productos).then(resp => {
      let link = resp.linkPago;

      if (link != undefined) {
        window.open(link, "_blank");
      }
    }).catch();
  }

};

CarritoPage.ctorParameters = () => [{
  type: src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__.CarritoService
}, {
  type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService
}];

CarritoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-carrito',
  template: _carrito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_carrito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CarritoPage);


/***/ }),

/***/ 1237:
/*!************************************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #EBEBEB;\n}\n\n.icono-borrar {\n  cursor: pointer;\n  margin-left: 1em;\n  margin-top: 0.5em;\n  font-size: 1.5em;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpdG8ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFdpbmRvd3MlMjAxMFxcRGVza3RvcFxcZG9uLWNhY3R1cy1wYWR1YVxcc3JjXFxhcHBcXHBhZ2VzXFxjYXJyaXRvXFxjYXJyaXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0FGIiwiZmlsZSI6ImNhcnJpdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI0VCRUJFQjtcclxufVxyXG5cclxuXHJcbi5pY29uby1ib3JyYXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgY29sb3I6IHJlZDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRUJFQkVCO1xufVxuXG4uaWNvbm8tYm9ycmFyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";

/***/ }),

/***/ 4202:
/*!************************************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-menu-principal></app-menu-principal>\r\n<ion-content>\r\n\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>Carrito de compras</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-list>\r\n            <ion-item *ngFor=\"let producto of productos\">\r\n                <img [src]=\"producto.producto.img[0]\" width=\"50\" height=\"50\">\r\n                <ion-label>{{producto.producto.nombre}}</ion-label>\r\n                <ion-label>$ {{producto.producto.precio | number}}</ion-label>\r\n                <ion-icon name=\"trash-outline\" class=\"icono-borrar\" (click)=\"borrarProducto(producto._id)\">\r\n                </ion-icon>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-center\">\r\n                <ion-label>Total: $ {{total | number}}</ion-label>\r\n                <ion-button (click)=\"pagar()\">\r\n                    Pagar ahora\r\n                </ion-button>\r\n            </ion-item>\r\n        </ion-list>\r\n    </ion-card>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_carrito_carrito_module_ts.js.map