function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab5/tab5.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab5/tab5.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTab5Tab5PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content>\n\n    <ion-item>\n        <ion-searchbar animated placeholder=\"Buscar Nivel de Escolaridad\" (ionChange)=\"buscarNivel($event)\">\n        </ion-searchbar>\n    </ion-item>\n\n    <app-niveles [niveles]=\"niveles\" [textoBuscar]=\"textoBuscar\"></app-niveles>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/tab5/tab5.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab5/tab5.module.ts ***!
    \*******************************************/

  /*! exports provided: Tab5PageModule */

  /***/
  function srcAppPagesTab5Tab5ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function () {
      return Tab5PageModule;
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


    var _tab5_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab5.page */
    "./src/app/pages/tab5/tab5.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var Tab5PageModule = function Tab5PageModule() {
      _classCallCheck(this, Tab5PageModule);
    };

    Tab5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_5__["Tab5Page"]
      }])],
      declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_5__["Tab5Page"]]
    })], Tab5PageModule);
    /***/
  },

  /***/
  "./src/app/pages/tab5/tab5.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab5/tab5.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTab5Tab5PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjUvdGFiNS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tab5/tab5.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/tab5/tab5.page.ts ***!
    \*****************************************/

  /*! exports provided: Tab5Page */

  /***/
  function srcAppPagesTab5Tab5PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab5Page", function () {
      return Tab5Page;
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


    var src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/programas.service */
    "./src/app/services/programas.service.ts");

    var Tab5Page = /*#__PURE__*/function () {
      function Tab5Page(programasServices) {
        _classCallCheck(this, Tab5Page);

        this.programasServices = programasServices;
        this.niveles = [];
        this.textoBuscar = '';
      }

      _createClass(Tab5Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.programasServices.getTopHeadlines().subscribe(function (resp) {
            var _this$niveles;

            (_this$niveles = _this.niveles).push.apply(_this$niveles, _toConsumableArray(resp.nivel));
          });
        }
      }, {
        key: "buscarNivel",
        value: function buscarNivel(event) {
          this.textoBuscar = event.target.value;
        }
      }]);

      return Tab5Page;
    }();

    Tab5Page.ctorParameters = function () {
      return [{
        type: src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_2__["ProgramasService"]
      }];
    };

    Tab5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab5',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab5.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab5/tab5.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab5.page.scss */
      "./src/app/pages/tab5/tab5.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_programas_service__WEBPACK_IMPORTED_MODULE_2__["ProgramasService"]])], Tab5Page);
    /***/
  }
}]);
//# sourceMappingURL=tab5-tab5-module-es5.js.map