function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-oferta-oferta-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oferta/oferta.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oferta/oferta.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOfertaOfertaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"Regresar\" defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-title slot=\"end\">\n            MI SENA\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <img [src]=\"imagen_banner | imagen\">\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <h3>Programa</h3>\n            </ion-col>\n            <ion-col>\n                <h6>{{ nombre_programa }}</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <h3>Jornada</h3>\n            </ion-col>\n            <ion-col>\n                <h6>{{ nombre_jornada }}</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <h3>Centro de Formacion</h3>\n            </ion-col>\n            <ion-col>\n                <h6>{{ nombre_centro }}</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <h3>Localidad</h3>\n            </ion-col>\n            <ion-col>\n                <h6>{{ departamento }}, {{ municipio }}</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n<app-footer-inscribirse></app-footer-inscribirse>";
    /***/
  },

  /***/
  "./src/app/pages/oferta/oferta-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/oferta/oferta-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: OfertaPageRoutingModule */

  /***/
  function srcAppPagesOfertaOfertaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfertaPageRoutingModule", function () {
      return OfertaPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _oferta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./oferta.page */
    "./src/app/pages/oferta/oferta.page.ts");

    var routes = [{
      path: '',
      component: _oferta_page__WEBPACK_IMPORTED_MODULE_3__["OfertaPage"]
    }];

    var OfertaPageRoutingModule = function OfertaPageRoutingModule() {
      _classCallCheck(this, OfertaPageRoutingModule);
    };

    OfertaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OfertaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/oferta/oferta.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/oferta/oferta.module.ts ***!
    \***********************************************/

  /*! exports provided: OfertaPageModule */

  /***/
  function srcAppPagesOfertaOfertaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfertaPageModule", function () {
      return OfertaPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _oferta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./oferta-routing.module */
    "./src/app/pages/oferta/oferta-routing.module.ts");
    /* harmony import */


    var _oferta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./oferta.page */
    "./src/app/pages/oferta/oferta.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var OfertaPageModule = function OfertaPageModule() {
      _classCallCheck(this, OfertaPageModule);
    };

    OfertaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _oferta_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfertaPageRoutingModule"]],
      declarations: [_oferta_page__WEBPACK_IMPORTED_MODULE_6__["OfertaPage"]]
    })], OfertaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/oferta/oferta.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/oferta/oferta.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOfertaOfertaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29mZXJ0YS9vZmVydGEucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/oferta/oferta.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/oferta/oferta.page.ts ***!
    \*********************************************/

  /*! exports provided: OfertaPage */

  /***/
  function srcAppPagesOfertaOfertaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfertaPage", function () {
      return OfertaPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/programas.service */
    "./src/app/services/programas.service.ts");

    var OfertaPage = /*#__PURE__*/function () {
      function OfertaPage(route, router, programasServices) {
        _classCallCheck(this, OfertaPage);

        this.route = route;
        this.router = router;
        this.programasServices = programasServices;
      }

      _createClass(OfertaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            _this.programasServices.getOfertsFind(params['oferta_id']).subscribe(function (resp) {
              console.log(resp.oferta);
              _this.nombre_programa = resp.oferta[0].nombre_programa;
              _this.nombre_jornada = resp.oferta[0].nombre_jornada;
              _this.nombre_centro = resp.oferta[0].nombre_centro;
              _this.nombre_region = resp.oferta[0].nombre_region;
              _this.departamento = resp.oferta[0].departamento;
              _this.municipio = resp.oferta[0].municipio;
              _this.imagen_banner = resp.oferta[0].imagen_banner;
            });
          });
        }
      }]);

      return OfertaPage;
    }();

    OfertaPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_3__["ProgramasService"]
      }];
    };

    OfertaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-oferta',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./oferta.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oferta/oferta.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./oferta.page.scss */
      "./src/app/pages/oferta/oferta.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_3__["ProgramasService"]])], OfertaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-oferta-oferta-module-es5.js.map