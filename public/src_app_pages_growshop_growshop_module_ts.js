"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_growshop_growshop_module_ts"],{

/***/ 9074:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/publicaciones/cuatro-productos/cuatro-productos.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuatroProductosComponent": () => (/* binding */ CuatroProductosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cuatro_productos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuatro-productos.component.html?ngResource */ 8590);
/* harmony import */ var _cuatro_productos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuatro-productos.component.scss?ngResource */ 4245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let CuatroProductosComponent = class CuatroProductosComponent {
    constructor() {
        this.titulo = '';
    }
    ngOnInit() {
        this.titulo = this.data.shift();
    }
};
CuatroProductosComponent.ctorParameters = () => [];
CuatroProductosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cuatro-productos',
        template: _cuatro_productos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cuatro_productos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CuatroProductosComponent);



/***/ }),

/***/ 150:
/*!******************************************************************!*\
  !*** ./src/app/components/publicaciones/publicaciones.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacionesModule": () => (/* binding */ PublicacionesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cuatro_productos_cuatro_productos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuatro-productos/cuatro-productos.component */ 9074);
/* harmony import */ var _tres_productos_tres_productos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tres-productos/tres-productos.component */ 6308);
/* harmony import */ var _un_producto_un_producto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./un-producto/un-producto.component */ 137);
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video/video.component */ 4687);
/* harmony import */ var _seis_productos_seis_productos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seis-productos/seis-productos.component */ 4829);









let PublicacionesModule = class PublicacionesModule {
};
PublicacionesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _seis_productos_seis_productos_component__WEBPACK_IMPORTED_MODULE_4__.SeisProductosComponent,
            _cuatro_productos_cuatro_productos_component__WEBPACK_IMPORTED_MODULE_0__.CuatroProductosComponent,
            _tres_productos_tres_productos_component__WEBPACK_IMPORTED_MODULE_1__.TresProductosComponent,
            _un_producto_un_producto_component__WEBPACK_IMPORTED_MODULE_2__.UnProductoComponent,
            _video_video_component__WEBPACK_IMPORTED_MODULE_3__.VideoComponent
        ],
        exports: [
            _seis_productos_seis_productos_component__WEBPACK_IMPORTED_MODULE_4__.SeisProductosComponent,
            _cuatro_productos_cuatro_productos_component__WEBPACK_IMPORTED_MODULE_0__.CuatroProductosComponent,
            _tres_productos_tres_productos_component__WEBPACK_IMPORTED_MODULE_1__.TresProductosComponent,
            _un_producto_un_producto_component__WEBPACK_IMPORTED_MODULE_2__.UnProductoComponent,
            _video_video_component__WEBPACK_IMPORTED_MODULE_3__.VideoComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule
        ]
    })
], PublicacionesModule);



/***/ }),

/***/ 4829:
/*!*************************************************************************************!*\
  !*** ./src/app/components/publicaciones/seis-productos/seis-productos.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeisProductosComponent": () => (/* binding */ SeisProductosComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _seis_productos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seis-productos.component.html?ngResource */ 9761);
/* harmony import */ var _seis_productos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seis-productos.component.scss?ngResource */ 7573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pages_producto_producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/producto/producto.page */ 6143);







let SeisProductosComponent = class SeisProductosComponent {
  constructor(modalController) {
    this.modalController = modalController;
    this.titulo = '';
  }

  ngOnInit() {
    this.titulo = this.data.shift();
  }

  verProducto(producto) {
    var _this = this;

    return (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_pages_producto_producto_page__WEBPACK_IMPORTED_MODULE_3__.ProductoPage,
        cssClass: 'transparent-modal',
        componentProps: {
          producto
        }
      });
      yield modal.present();
    })();
  }

};

SeisProductosComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

SeisProductosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-seis-productos',
  template: _seis_productos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_seis_productos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SeisProductosComponent);


/***/ }),

/***/ 6308:
/*!*************************************************************************************!*\
  !*** ./src/app/components/publicaciones/tres-productos/tres-productos.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TresProductosComponent": () => (/* binding */ TresProductosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tres_productos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tres-productos.component.html?ngResource */ 5686);
/* harmony import */ var _tres_productos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tres-productos.component.scss?ngResource */ 4819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TresProductosComponent = class TresProductosComponent {
    constructor() {
        this.titulo = '';
    }
    ngOnInit() {
        this.titulo = this.data.shift();
    }
};
TresProductosComponent.ctorParameters = () => [];
TresProductosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tres-productos',
        template: _tres_productos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tres_productos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TresProductosComponent);



/***/ }),

/***/ 137:
/*!*******************************************************************************!*\
  !*** ./src/app/components/publicaciones/un-producto/un-producto.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnProductoComponent": () => (/* binding */ UnProductoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _un_producto_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./un-producto.component.html?ngResource */ 1197);
/* harmony import */ var _un_producto_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./un-producto.component.scss?ngResource */ 1362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let UnProductoComponent = class UnProductoComponent {
    constructor() {
        this.titulo = '';
    }
    ngOnInit() {
        this.titulo = this.data.shift();
    }
};
UnProductoComponent.ctorParameters = () => [];
UnProductoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-un-producto',
        template: _un_producto_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_un_producto_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnProductoComponent);



/***/ }),

/***/ 4687:
/*!*******************************************************************!*\
  !*** ./src/app/components/publicaciones/video/video.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoComponent": () => (/* binding */ VideoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _video_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.component.html?ngResource */ 7025);
/* harmony import */ var _video_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.component.scss?ngResource */ 8200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let VideoComponent = class VideoComponent {
    constructor() {
        this.titulo = '';
    }
    ngOnInit() {
        this.titulo = this.data.shift();
    }
};
VideoComponent.ctorParameters = () => [];
VideoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-video',
        template: _video_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_video_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VideoComponent);



/***/ }),

/***/ 7341:
/*!************************************************************!*\
  !*** ./src/app/directives/dynamic-components.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicComponentDirective": () => (/* binding */ DynamicComponentDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


let DynamicComponentDirective = class DynamicComponentDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
DynamicComponentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }
];
DynamicComponentDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appDynamicComponent]',
    })
], DynamicComponentDirective);



/***/ }),

/***/ 2548:
/*!***********************************************************!*\
  !*** ./src/app/pages/growshop/growshop-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrowshopPageRoutingModule": () => (/* binding */ GrowshopPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _growshop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./growshop.page */ 2623);




const routes = [
    {
        path: '',
        component: _growshop_page__WEBPACK_IMPORTED_MODULE_0__.GrowshopPage
    }
];
let GrowshopPageRoutingModule = class GrowshopPageRoutingModule {
};
GrowshopPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GrowshopPageRoutingModule);



/***/ }),

/***/ 3576:
/*!***************************************************!*\
  !*** ./src/app/pages/growshop/growshop.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrowshopPageModule": () => (/* binding */ GrowshopPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _growshop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./growshop-routing.module */ 2548);
/* harmony import */ var _growshop_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./growshop.page */ 2623);
/* harmony import */ var src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/web/components.module */ 3816);
/* harmony import */ var src_app_components_publicaciones_publicaciones_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/publicaciones/publicaciones.module */ 150);
/* harmony import */ var src_app_directives_dynamic_components_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/dynamic-components.directive */ 7341);










let GrowshopPageModule = class GrowshopPageModule {
};
GrowshopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _growshop_routing_module__WEBPACK_IMPORTED_MODULE_0__.GrowshopPageRoutingModule,
            src_app_components_web_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_components_publicaciones_publicaciones_module__WEBPACK_IMPORTED_MODULE_3__.PublicacionesModule
        ],
        declarations: [_growshop_page__WEBPACK_IMPORTED_MODULE_1__.GrowshopPage, src_app_directives_dynamic_components_directive__WEBPACK_IMPORTED_MODULE_4__.DynamicComponentDirective]
    })
], GrowshopPageModule);



/***/ }),

/***/ 2623:
/*!*************************************************!*\
  !*** ./src/app/pages/growshop/growshop.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrowshopPage": () => (/* binding */ GrowshopPage)
/* harmony export */ });
/* harmony import */ var C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _growshop_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./growshop.page.html?ngResource */ 3681);
/* harmony import */ var _growshop_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./growshop.page.scss?ngResource */ 6242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_components_publicaciones_cuatro_productos_cuatro_productos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/publicaciones/cuatro-productos/cuatro-productos.component */ 9074);
/* harmony import */ var src_app_components_publicaciones_seis_productos_seis_productos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/publicaciones/seis-productos/seis-productos.component */ 4829);
/* harmony import */ var src_app_components_publicaciones_tres_productos_tres_productos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/publicaciones/tres-productos/tres-productos.component */ 6308);
/* harmony import */ var src_app_components_publicaciones_un_producto_un_producto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/publicaciones/un-producto/un-producto.component */ 137);
/* harmony import */ var src_app_directives_dynamic_components_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/dynamic-components.directive */ 7341);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/productos.service */ 4893);











let GrowshopPage = class GrowshopPage {
  constructor(productosService) {
    this.productosService = productosService;
    this.numeroPar = 0;
    this.etiquetas = [];
    this.categorias = [];
    this.textoBuscar = '';
    this.mostrarBuscadorCss = false;
    this.mostrarProductosCss = true;
  }

  ngAfterViewInit() {}

  ngOnInit() {
    var _this = this;

    return (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.productosSubscripcion = yield _this.productosService.getProductos().subscribe(productos => {
        _this.productos = productos;

        _this.mostrarProductos();
      });
    })();
  }

  ngOnDestroy() {
    this.productosSubscripcion.unsubscribe();
  }

  mostrarProductos() {
    if (this.numeroPar % 2 == 0) {
      this.obtenerEtiquetas();
      this.obtenerCategorias();
      this.mostrarProductosEtiquetas();
      this.mostrarProductosCategorias();
    }

    this.numeroPar++;
  }

  obtenerEtiquetas() {
    this.etiquetas = [];
    this.productos.forEach(producto => {
      producto.etiquetas.forEach(etiqueta => {
        let existe = false;
        this.etiquetas.forEach(etiquetaGuardada => {
          if (etiqueta.nombre == etiquetaGuardada.nombre) {
            existe = true;
          }
        });

        if (!existe) {
          this.etiquetas.push(etiqueta);
        }
      });
    });
  }

  obtenerCategorias() {
    this.productos.forEach(producto => {
      if (!this.categorias.includes(producto.categoria.nombre)) {
        this.categorias.push(producto.categoria.nombre);
      }
    });
  }

  obtenerProductosDeUnaEtiqueta(etiqueta, tituloEtiqueta) {
    let productosEtiqueta = [];
    productosEtiqueta.push(tituloEtiqueta);
    this.productos.forEach(producto => {
      producto.etiquetas.forEach(etiquetaProducto => {
        if (etiquetaProducto.nombre == etiqueta) {
          productosEtiqueta.push(producto);
        }
      });
    });
    return productosEtiqueta;
  }

  generateComponent(componente, productosData) {
    const viewContainerRef = this.dynamic.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(productosData[componente].component);
    componentRef.instance.data = productosData[componente].data.productos;
  }

  mostrarProductosEtiquetas() {
    var _this2 = this;

    this.etiquetas.forEach( /*#__PURE__*/function () {
      var _ref = (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (etiqueta) {
        let tituloEtiqueta = null;
        yield _this2.productosService.otenerTituloEtiqueta(etiqueta.nombre).then(resp => {
          tituloEtiqueta = resp;
        });
        let cantidadProductos = _this2.obtenerProductosDeUnaEtiqueta(etiqueta.nombre, '').length - 1;

        if (cantidadProductos < 1) {} else if (cantidadProductos == 1) {
          let productosData = [{
            data: {
              productos: _this2.obtenerProductosDeUnaEtiqueta(etiqueta.nombre, tituloEtiqueta)
            },
            component: src_app_components_publicaciones_un_producto_un_producto_component__WEBPACK_IMPORTED_MODULE_6__.UnProductoComponent
          }];

          _this2.generateComponent(0, productosData);
        } else if (cantidadProductos > 1 && cantidadProductos < 4) {
          let productosData = [{
            data: {
              productos: _this2.obtenerProductosDeUnaEtiqueta(etiqueta.nombre, tituloEtiqueta)
            },
            component: src_app_components_publicaciones_tres_productos_tres_productos_component__WEBPACK_IMPORTED_MODULE_5__.TresProductosComponent
          }];

          _this2.generateComponent(0, productosData);
        } else if (cantidadProductos > 3 && cantidadProductos < 6) {
          let productosData = [{
            data: {
              productos: _this2.obtenerProductosDeUnaEtiqueta(etiqueta.nombre, tituloEtiqueta)
            },
            component: src_app_components_publicaciones_cuatro_productos_cuatro_productos_component__WEBPACK_IMPORTED_MODULE_3__.CuatroProductosComponent
          }];

          _this2.generateComponent(0, productosData);
        } else {
          let productosData = [{
            data: {
              productos: _this2.obtenerProductosDeUnaEtiqueta(etiqueta.nombre, tituloEtiqueta)
            },
            component: src_app_components_publicaciones_seis_productos_seis_productos_component__WEBPACK_IMPORTED_MODULE_4__.SeisProductosComponent
          }];

          _this2.generateComponent(0, productosData);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  mostrarProductosCategorias() {
    this.categorias.forEach(categoria => {
      let cantidadProductos = this.obtenerProductosDeUnaCategoria(categoria, '').length - 1;

      if (cantidadProductos < 1) {} else if (cantidadProductos == 1) {
        let productosData = [{
          data: {
            productos: this.obtenerProductosDeUnaCategoria(categoria, `Lo mejor en ${categoria}`)
          },
          component: src_app_components_publicaciones_un_producto_un_producto_component__WEBPACK_IMPORTED_MODULE_6__.UnProductoComponent
        }];
        this.generateComponent(0, productosData);
      } else if (cantidadProductos > 1 && cantidadProductos < 4) {
        let productosData = [{
          data: {
            productos: this.obtenerProductosDeUnaCategoria(categoria, `Nuestra selección especial en ${categoria}`)
          },
          component: src_app_components_publicaciones_tres_productos_tres_productos_component__WEBPACK_IMPORTED_MODULE_5__.TresProductosComponent
        }];
        this.generateComponent(0, productosData);
      } else if (cantidadProductos > 3 && cantidadProductos < 6) {
        let productosData = [{
          data: {
            productos: this.obtenerProductosDeUnaCategoria(categoria, `Destacados en ${categoria}`)
          },
          component: src_app_components_publicaciones_cuatro_productos_cuatro_productos_component__WEBPACK_IMPORTED_MODULE_3__.CuatroProductosComponent
        }];
        this.generateComponent(0, productosData);
      } else {
        let productosData = [{
          data: {
            productos: this.obtenerProductosDeUnaCategoria(categoria, `Más vendidos en ${categoria}`)
          },
          component: src_app_components_publicaciones_seis_productos_seis_productos_component__WEBPACK_IMPORTED_MODULE_4__.SeisProductosComponent
        }];
        this.generateComponent(0, productosData);
      }
    });
  }

  obtenerProductosDeUnaCategoria(categoria = '', titulo = '') {
    let productosTemporales = [];
    productosTemporales.push(titulo);
    this.productos.forEach(producto => {
      if (producto.categoria.nombre == categoria) {
        productosTemporales.push(producto);
      }
    });
    return productosTemporales;
  }

  buscar(textoBuscar) {
    this.textoBuscar = textoBuscar;

    if (this.textoBuscar != '') {
      this.mostrarBuscadorCss = true;
      this.mostrarProductosCss = false;
    } else {
      this.mostrarBuscadorCss = false;
      this.mostrarProductosCss = true;
    }
  }

};

GrowshopPage.ctorParameters = () => [{
  type: src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_8__.ProductosService
}];

GrowshopPage.propDecorators = {
  dynamic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [src_app_directives_dynamic_components_directive__WEBPACK_IMPORTED_MODULE_7__.DynamicComponentDirective]
  }]
};
GrowshopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-growshop',
  template: _growshop_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_growshop_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], GrowshopPage);


/***/ }),

/***/ 4245:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/publicaciones/cuatro-productos/cuatro-productos.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-img {\n  width: 100%;\n  height: 200px;\n}\n\n.ver-mas, .precio {\n  --color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-col ion-card-title {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nion-col ion-card-subtitle {\n  font-size: 1.3em;\n}\n\n.contenedor-principal {\n  --background: var(--ion-color-gris);\n  box-shadow: none !important;\n  border: none !important;\n}\n\n.titulo-principal {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1YXRyby1wcm9kdWN0b3MuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFdpbmRvd3MlMjAxMFxcRGVza3RvcFxcZG9uLWNhY3R1cy1wYWR1YVxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHB1YmxpY2FjaW9uZXNcXGN1YXRyby1wcm9kdWN0b3NcXGN1YXRyby1wcm9kdWN0b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0pSOztBRE9JO0VBQ0ksZ0JBQUE7QUNMUjs7QURTQTtFQUNJLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ05KOztBRFNBO0VBQ0ksaUJBQUE7QUNOSiIsImZpbGUiOiJjdWF0cm8tcHJvZHVjdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi52ZXItbWFzLCAucHJlY2lve1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8vIGlvbi1jYXJkLXRpdGxle1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuXHJcbmlvbi1jb2x7XHJcbiAgICBpb24tY2FyZC10aXRsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbmVkb3ItcHJpbmNpcGFse1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3Jpcyk7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpdHVsby1wcmluY2lwYWx7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSIsImlvbi1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnZlci1tYXMsIC5wcmVjaW8ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY29sIGlvbi1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb2wgaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uY29udGVuZWRvci1wcmluY2lwYWwge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmlzKTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRpdHVsby1wcmluY2lwYWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";

/***/ }),

/***/ 7573:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/publicaciones/seis-productos/seis-productos.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-img {\n  width: 100%;\n  height: 200px;\n}\n\n.ver-mas, .precio {\n  --color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-col ion-card-title {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nion-col ion-card-subtitle {\n  font-size: 1.3em;\n}\n\n.contenedor-principal {\n  --background: var(--ion-color-gris);\n  box-shadow: none !important;\n  border: none !important;\n}\n\n.titulo-principal {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlaXMtcHJvZHVjdG9zLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGRvbi1jYWN0dXMtcGFkdWFcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxwdWJsaWNhY2lvbmVzXFxzZWlzLXByb2R1Y3Rvc1xcc2Vpcy1wcm9kdWN0b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0pSOztBRE9JO0VBQ0ksZ0JBQUE7QUNMUjs7QURTQTtFQUNJLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ05KOztBRFNBO0VBQ0ksaUJBQUE7QUNOSiIsImZpbGUiOiJzZWlzLXByb2R1Y3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4udmVyLW1hcywgLnByZWNpb3tcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vLyBpb24tY2FyZC10aXRsZXtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcblxyXG5pb24tY29se1xyXG4gICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLXByaW5jaXBhbHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyaXMpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXR1bG8tcHJpbmNpcGFse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCJpb24taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi52ZXItbWFzLCAucHJlY2lvIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNvbCBpb24tY2FyZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29sIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLmNvbnRlbmVkb3ItcHJpbmNpcGFsIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3Jpcyk7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8tcHJpbmNpcGFsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

/***/ }),

/***/ 4819:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/publicaciones/tres-productos/tres-productos.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-img {\n  width: 100%;\n  height: 200px;\n}\n\n.ver-mas, .precio {\n  --color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-col ion-card-title {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nion-col ion-card-subtitle {\n  font-size: 1.3em;\n}\n\n.contenedor-principal {\n  --background: var(--ion-color-gris);\n  box-shadow: none !important;\n  border: none !important;\n}\n\n.titulo-principal {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZXMtcHJvZHVjdG9zLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGRvbi1jYWN0dXMtcGFkdWFcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxwdWJsaWNhY2lvbmVzXFx0cmVzLXByb2R1Y3Rvc1xcdHJlcy1wcm9kdWN0b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0pSOztBRE9JO0VBQ0ksZ0JBQUE7QUNMUjs7QURTQTtFQUNJLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ05KOztBRFNBO0VBQ0ksaUJBQUE7QUNOSiIsImZpbGUiOiJ0cmVzLXByb2R1Y3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4udmVyLW1hcywgLnByZWNpb3tcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vLyBpb24tY2FyZC10aXRsZXtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcblxyXG5pb24tY29se1xyXG4gICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLXByaW5jaXBhbHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyaXMpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXR1bG8tcHJpbmNpcGFse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCJpb24taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi52ZXItbWFzLCAucHJlY2lvIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNvbCBpb24tY2FyZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29sIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLmNvbnRlbmVkb3ItcHJpbmNpcGFsIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3Jpcyk7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8tcHJpbmNpcGFsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

/***/ }),

/***/ 1362:
/*!********************************************************************************************!*\
  !*** ./src/app/components/publicaciones/un-producto/un-producto.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-img {\n  width: 100%;\n  height: 200px;\n}\n\n.ver-mas, .precio {\n  --color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-col ion-card-title {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nion-col ion-card-subtitle {\n  font-size: 1.3em;\n}\n\n.contenedor-principal {\n  --background: var(--ion-color-gris);\n  box-shadow: none !important;\n  border: none !important;\n}\n\n.titulo-principal {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuLXByb2R1Y3RvLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGRvbi1jYWN0dXMtcGFkdWFcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxwdWJsaWNhY2lvbmVzXFx1bi1wcm9kdWN0b1xcdW4tcHJvZHVjdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0pSOztBRE9JO0VBQ0ksZ0JBQUE7QUNMUjs7QURTQTtFQUNJLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ05KOztBRFNBO0VBQ0ksaUJBQUE7QUNOSiIsImZpbGUiOiJ1bi1wcm9kdWN0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4udmVyLW1hcywgLnByZWNpb3tcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vLyBpb24tY2FyZC10aXRsZXtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcblxyXG5pb24tY29se1xyXG4gICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLXByaW5jaXBhbHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyaXMpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXR1bG8tcHJpbmNpcGFse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCJpb24taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi52ZXItbWFzLCAucHJlY2lvIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNvbCBpb24tY2FyZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29sIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLmNvbnRlbmVkb3ItcHJpbmNpcGFsIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3Jpcyk7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8tcHJpbmNpcGFsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

/***/ }),

/***/ 8200:
/*!********************************************************************************!*\
  !*** ./src/app/components/publicaciones/video/video.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "ion-img {\n  width: 100%;\n  height: 200px;\n}\n\n.ver-mas, .precio {\n  --color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-col ion-card-title {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nion-col ion-card-subtitle {\n  font-size: 1.3em;\n}\n\n.contenedor-principal {\n  --background: var(--ion-color-gris);\n  box-shadow: none !important;\n  border: none !important;\n}\n\n.titulo-principal {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGRvbi1jYWN0dXMtcGFkdWFcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxwdWJsaWNhY2lvbmVzXFx2aWRlb1xcdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0pSOztBRE9JO0VBQ0ksZ0JBQUE7QUNMUjs7QURTQTtFQUNJLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ05KOztBRFNBO0VBQ0ksaUJBQUE7QUNOSiIsImZpbGUiOiJ2aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4udmVyLW1hcywgLnByZWNpb3tcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vLyBpb24tY2FyZC10aXRsZXtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcblxyXG5pb24tY29se1xyXG4gICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLXByaW5jaXBhbHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyaXMpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXR1bG8tcHJpbmNpcGFse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCJpb24taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi52ZXItbWFzLCAucHJlY2lvIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNvbCBpb24tY2FyZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29sIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLmNvbnRlbmVkb3ItcHJpbmNpcGFsIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3Jpcyk7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8tcHJpbmNpcGFsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

/***/ }),

/***/ 6242:
/*!**************************************************************!*\
  !*** ./src/app/pages/growshop/growshop.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".swiper-container {\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content {\n  --background: #EBEBEB;\n}\n\n.contenedor-productos-inicio-culto {\n  display: none;\n}\n\n.contenedor-productos-inicio-activo {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3dzaG9wLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGRvbi1jYWN0dXMtcGFkdWFcXHNyY1xcYXBwXFxwYWdlc1xcZ3Jvd3Nob3BcXGdyb3dzaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6Imdyb3dzaG9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRUJFQkVCO1xyXG59XHJcblxyXG4uY29udGVuZWRvci1wcm9kdWN0b3MtaW5pY2lvLWN1bHRve1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLXByb2R1Y3Rvcy1pbmljaW8tYWN0aXZve1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiLnN3aXBlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRUJFQkVCO1xufVxuXG4uY29udGVuZWRvci1wcm9kdWN0b3MtaW5pY2lvLWN1bHRvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRlbmVkb3ItcHJvZHVjdG9zLWluaWNpby1hY3Rpdm8ge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";

/***/ }),

/***/ 8590:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/publicaciones/cuatro-productos/cuatro-productos.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card class=\"ion-text-center contenedor-principal\">\r\n\r\n  <ion-card-header>\r\n    <ion-card-title class=\"titulo-principal\">{{titulo | titlecase}}</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"6\" *ngFor=\"let producto of data | slice:0:4\">\r\n        <ion-card class=\"ion-text-center\">\r\n          <ion-card-content>\r\n            <ion-img [src]=\"producto.img[0]\"></ion-img>\r\n            <ion-card-title>{{producto.nombre}}</ion-card-title>\r\n            <ion-card-subtitle class=\"precio\">${{producto.precio | number}}</ion-card-subtitle>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card-header>\r\n          <!-- <ion-card-subtitle class=\"ver-mas\">Ver más</ion-card-subtitle> -->\r\n        </ion-card-header>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-card>";

/***/ }),

/***/ 9761:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/publicaciones/seis-productos/seis-productos.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card class=\"ion-text-center contenedor-principal\">\r\n\r\n  <ion-card-header>\r\n    <ion-card-title class=\"titulo-principal\">{{titulo | titlecase}}</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" *ngFor=\"let producto of data | slice:0:6\" (click)=\"verProducto(producto)\">\r\n        <ion-card class=\"ion-text-center\">\r\n          <ion-card-content>\r\n            <ion-img [src]=\"producto.img[0]\"></ion-img>\r\n            <ion-card-title>{{producto.nombre}}</ion-card-title>\r\n            <ion-card-subtitle class=\"precio\">${{producto.precio | number}}</ion-card-subtitle>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card-header>\r\n          <!-- <ion-card-subtitle class=\"ver-mas\">Ver más</ion-card-subtitle> -->\r\n        </ion-card-header>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-card>";

/***/ }),

/***/ 5686:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/publicaciones/tres-productos/tres-productos.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card class=\"ion-text-center contenedor-principal\">\r\n\r\n  <ion-card-header>\r\n    <ion-card-title class=\"titulo-principal\">{{titulo | titlecase}}</ion-card-title>\r\n  </ion-card-header>\r\n \r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" *ngFor=\"let producto of data  | slice:0:3\">\r\n        <ion-card class=\"ion-text-center\">\r\n          <ion-card-content>\r\n            <ion-img [src]=\"producto.img[0]\"></ion-img>\r\n            <ion-card-title>{{producto.nombre}}</ion-card-title>\r\n            <ion-card-subtitle class=\"precio\">${{producto.precio | number}}</ion-card-subtitle>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card-header>\r\n          <!-- <ion-card-subtitle class=\"ver-mas\">Ver más</ion-card-subtitle> -->\r\n        </ion-card-header>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-card>";

/***/ }),

/***/ 1197:
/*!********************************************************************************************!*\
  !*** ./src/app/components/publicaciones/un-producto/un-producto.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card class=\"ion-text-center contenedor-principal\">\r\n\r\n  <ion-card-header>\r\n    <ion-card-title class=\"titulo-principal\">{{titulo | titlecase}}</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-lg=\"12\" size-md=\"12\" *ngFor=\"let producto of data | slice:0:1\">\r\n        <ion-card class=\"ion-text-center\">\r\n          <ion-card-content>\r\n            <ion-img [src]=\"producto.img[0]\"></ion-img>\r\n            <ion-card-title>{{producto.nombre}}</ion-card-title>\r\n            <ion-card-subtitle class=\"precio\">${{producto.precio | number}}</ion-card-subtitle>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card-header>\r\n          <!-- <ion-card-subtitle class=\"ver-mas\">Ver más</ion-card-subtitle> -->\r\n        </ion-card-header>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-card>";

/***/ }),

/***/ 7025:
/*!********************************************************************************!*\
  !*** ./src/app/components/publicaciones/video/video.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card class=\"ion-text-center contenedor-principal\">\r\n\r\n  <ion-card-header>\r\n    <ion-card-title class=\"titulo-principal\">{{titulo | titlecase}}</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"6\" *ngFor=\"let producto of productosData\">\r\n        <ion-card class=\"ion-text-center\">\r\n          <ion-card-content>\r\n            <ion-img [src]=\"producto.img[0]\"></ion-img>\r\n            <ion-card-title>{{producto.nombre}}</ion-card-title>\r\n            <ion-card-subtitle class=\"precio\">${{producto.precio | number}}</ion-card-subtitle>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card-header>\r\n          <!-- <ion-card-subtitle class=\"ver-mas\">Ver más</ion-card-subtitle> -->\r\n        </ion-card-header>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-card>";

/***/ }),

/***/ 3681:
/*!**************************************************************!*\
  !*** ./src/app/pages/growshop/growshop.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<app-menu-principal (onBuscar)=\"buscar($event)\"></app-menu-principal>\r\n<ion-content>\r\n    <!-- Mostrar productos página de inicio -->\r\n    <div\r\n        [ngClass]=\"{'contenedor-productos-inicio-activo':mostrarProductosCss,'contenedor-productos-inicio-culto':mostrarBuscadorCss}\">\r\n        <app-slide></app-slide>\r\n        <ng-template appDynamicComponent></ng-template>\r\n    </div>\r\n\r\n    <!-- Resultado de búsquedas -->\r\n    <div [ngClass]=\"{'contenedor-productos-inicio-activo':mostrarBuscadorCss,'contenedor-productos-inicio-culto':mostrarProductosCss}\">\r\n        <app-buscador [textoBuscar]=\"textoBuscar\"></app-buscador>\r\n    </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_growshop_growshop_module_ts.js.map