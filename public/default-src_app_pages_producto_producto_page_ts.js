"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_producto_producto_page_ts"],{

/***/ 6143:
/*!*************************************************!*\
  !*** ./src/app/pages/producto/producto.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPage": () => (/* binding */ ProductoPage)
/* harmony export */ });
/* harmony import */ var C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto.page.html?ngResource */ 1594);
/* harmony import */ var _producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producto.page.scss?ngResource */ 7485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_pedidos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pedidos.service */ 4362);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos.service */ 4893);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/carrito.service */ 1635);












let ProductoPage = class ProductoPage {
  constructor(modalCtrl, activateRoute, productosService, navCtrl, pedidosService, usuarioService, storage, carritoService) {
    this.modalCtrl = modalCtrl;
    this.activateRoute = activateRoute;
    this.productosService = productosService;
    this.navCtrl = navCtrl;
    this.pedidosService = pedidosService;
    this.usuarioService = usuarioService;
    this.storage = storage;
    this.carritoService = carritoService;
    this.producto = {
      _id: "",
      nombre: "",
      url: "",
      estado: true,
      usuario: {
        _id: "",
        nombre: ""
      },
      precio: 0,
      stock: 0,
      categoria: {
        _id: "",
        nombre: ""
      },
      etiquetas: [""],
      descripcion: "",
      img: [""]
    };
    this.storage.create();
  }

  ngOnInit() {
    var _this = this;

    this.activateRoute.params.subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
        tituloProductoUrl
      }) {
        yield _this.productosService.getProductoSlug(tituloProductoUrl).then(producto => {
          _this.producto = producto;
          _this.producto = _this.producto.producto;

          if (_this.producto == undefined) {
            _this.navCtrl.navigateRoot('/');
          }
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre: 'disponible',
      precio: 200
    });
  }

  comprar() {
    var _this2 = this;

    return (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.usuarioService.cargarToken();
      yield _this2.usuarioService.validaToken();

      if (_this2.usuarioService.usuario.nombre == undefined) {
        yield _this2.storage.set('url', _this2.producto.url);

        _this2.navCtrl.navigateRoot('/login');
      } else {
        yield _this2.carritoService.agregarProductoCarrito(_this2.producto._id).then(console.log).catch(console.log);
      }
    })();
  }

};

ProductoPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}, {
  type: src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__.ProductosService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: src_app_services_pedidos_service__WEBPACK_IMPORTED_MODULE_3__.PedidosService
}, {
  type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__.UsuarioService
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.Storage
}, {
  type: src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_6__.CarritoService
}];

ProductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-producto',
  template: _producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductoPage);


/***/ }),

/***/ 1635:
/*!*********************************************!*\
  !*** ./src/app/services/carrito.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoService": () => (/* binding */ CarritoService)
/* harmony export */ });
/* harmony import */ var C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario.service */ 5763);
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./websocket.service */ 8223);







const URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url;
let CarritoService = class CarritoService {
  constructor(http, wsService, usuarioService) {
    this.http = http;
    this.wsService = wsService;
    this.usuarioService = usuarioService;
  }

  obtenerCarrito() {
    return new Promise(resolve => {
      this.http.get(`${URL}/carrito`).subscribe(resp => {
        if (resp['ok']) {
          resolve(resp['carrito']);
        } else {
          resolve(false);
        }
      });
    });
  }

  agregarProductoCarrito(producto) {
    var _this = this;

    return (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.usuarioService.cargarToken();
      const data = {
        "producto": producto
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'x-token': _this.usuarioService.token
      });
      return new Promise(resolve => {
        _this.http.post(`${URL}/carrito`, data, {
          headers
        }).subscribe(resp => {
          if (resp['ok']) {
            resolve(resp);
          } else {
            resolve(false);
          }
        }, err => {
          resolve(err);
        });
      });
    })();
  }

  borrarProductoCarrito(idcarrito) {
    var _this2 = this;

    return (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.usuarioService.cargarToken();
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'x-token': _this2.usuarioService.token
      });
      return new Promise(resolve => {
        _this2.http.delete(`${URL}/carrito/${idcarrito}`, {
          headers
        }).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
            if (resp['ok']) {
              resolve(true);
            } else {
              resolve(false);
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), err => {
          resolve(err);
        });
      });
    })();
  }

  obtenerProductosCarrito(idUsuario) {
    this.wsService.emit('get-productos-carrito', idUsuario);
    return this.wsService.listen('productos-carrito');
  }

  pagar(productos) {
    var _this3 = this;

    return (0,C_Users_Windows_10_Desktop_don_cactus_padua_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.usuarioService.cargarToken();
      const data = {
        "productos": productos
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'x-token': _this3.usuarioService.token
      });
      return new Promise(resolve => {
        _this3.http.post(`${URL}/pedidos/linkPago`, data, {
          headers
        }).subscribe(resp => {
          if (resp['ok']) {
            resolve(resp);
          } else {
            resolve(false);
          }
        }, err => {
          resolve(err);
        });
      });
    })();
  }

};

CarritoService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _websocket_service__WEBPACK_IMPORTED_MODULE_3__.WebsocketService
}, {
  type: _usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService
}];

CarritoService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], CarritoService);


/***/ }),

/***/ 4362:
/*!*********************************************!*\
  !*** ./src/app/services/pedidos.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosService": () => (/* binding */ PedidosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let PedidosService = class PedidosService {
    constructor() {
    }
    comprarProductos(productos) {
        console.log(productos);
    }
};
PedidosService.ctorParameters = () => [];
PedidosService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PedidosService);



/***/ }),

/***/ 7485:
/*!**************************************************************!*\
  !*** ./src/app/pages/producto/producto.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #EBEBEB;\n}\n\nswiper {\n  background: #EBEBEB;\n}\n\nswiper img {\n  padding-top: 10%;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RvLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXaW5kb3dzJTIwMTBcXERlc2t0b3BcXGRvbi1jYWN0dXMtcGFkdWFcXHNyY1xcYXBwXFxwYWdlc1xccHJvZHVjdG9cXHByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBRENJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQ0NSIiwiZmlsZSI6InByb2R1Y3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0VCRUJFQjtcclxufVxyXG5cclxuc3dpcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNFQkVCRUI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNFQkVCRUI7XG59XG5cbnN3aXBlciB7XG4gIGJhY2tncm91bmQ6ICNFQkVCRUI7XG59XG5zd2lwZXIgaW1nIHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59Il19 */";

/***/ }),

/***/ 1594:
/*!**************************************************************!*\
  !*** ./src/app/pages/producto/producto.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<app-menu-principal></app-menu-principal>\r\n\r\n<ion-content>\r\n  \r\n<ion-list *ngIf=\"producto.nombre == ''\">\r\n  <ion-title>Iniciando sesión aguarde un instante por favor...</ion-title>\r\n  <ion-list-header>\r\n    <ion-skeleton-text [animated]=\"true\" style=\"width: 80px\"></ion-skeleton-text>\r\n  </ion-list-header>\r\n  <ion-item>\r\n    <ion-thumbnail slot=\"start\">\r\n      <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\r\n      </h3>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\r\n      </p>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\r\n      </p>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n\r\n  <div *ngIf=\"producto.nombre != ''\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-md=\"6\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <app-producto-slide [producto]=\"producto\" *ngIf=\"producto.nombre != ''\"></app-producto-slide>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-md=\"6\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <h1>{{producto.nombre | titlecase }}</h1>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\">\r\n                    <h1>$ {{producto.precio | number}}</h1>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\">\r\n                    <ion-button (click)=\"comprar()\">\r\n                      Comprar\r\n                    </ion-button>\r\n                    <ion-button color=\"danger\">\r\n                      Agregar al carrito\r\n                      <ion-icon name=\"cart-outline\"></ion-icon>\r\n                    </ion-button>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\">\r\n                    <div [innerHTML]=\"producto.descripcion\"></div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_producto_producto_page_ts.js.map