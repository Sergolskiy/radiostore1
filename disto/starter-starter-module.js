(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starter-starter-module"],{

/***/ "./src/app/starter/starter.component.html":
/*!************************************************!*\
  !*** ./src/app/starter/starter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Simple four boxes Row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <!-- column -->    \r\n    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <!-- Row -->\r\n                <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n                    <!-- column -->\r\n                    <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\">\r\n                        Buy our Pro version with tones of features\r\n                        <br/><br/>\r\n                        <a href=\"https://wrappixel.com/templates/materialpro-angular-dashboard/\" mat-raised-button color=\"warn\">Upgrade To Pro</a>\r\n                    </div>\r\n                </div>      \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <!-- column -->    \r\n</div>"

/***/ }),

/***/ "./src/app/starter/starter.component.scss":
/*!************************************************!*\
  !*** ./src/app/starter/starter.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/starter/starter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/starter/starter.component.ts ***!
  \**********************************************/
/*! exports provided: StarterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterComponent", function() { return StarterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StarterComponent = /** @class */ (function () {
    function StarterComponent() {
    }
    StarterComponent.prototype.ngAfterViewInit = function () { };
    StarterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'starter',
            template: __webpack_require__(/*! ./starter.component.html */ "./src/app/starter/starter.component.html"),
            styles: [__webpack_require__(/*! ./starter.component.scss */ "./src/app/starter/starter.component.scss")]
        })
    ], StarterComponent);
    return StarterComponent;
}());



/***/ }),

/***/ "./src/app/starter/starter.module.ts":
/*!*******************************************!*\
  !*** ./src/app/starter/starter.module.ts ***!
  \*******************************************/
/*! exports provided: StarterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterModule", function() { return StarterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starter.component */ "./src/app/starter/starter.component.ts");
/* harmony import */ var _starter_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starter.routing */ "./src/app/starter/starter.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var StarterModule = /** @class */ (function () {
    function StarterModule() {
    }
    StarterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_starter_routing__WEBPACK_IMPORTED_MODULE_6__["StarterRoutes"])
            ],
            declarations: [_starter_component__WEBPACK_IMPORTED_MODULE_5__["StarterComponent"]]
        })
    ], StarterModule);
    return StarterModule;
}());



/***/ }),

/***/ "./src/app/starter/starter.routing.ts":
/*!********************************************!*\
  !*** ./src/app/starter/starter.routing.ts ***!
  \********************************************/
/*! exports provided: StarterRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterRoutes", function() { return StarterRoutes; });
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./starter.component */ "./src/app/starter/starter.component.ts");

var StarterRoutes = [{
        path: '',
        component: _starter_component__WEBPACK_IMPORTED_MODULE_0__["StarterComponent"]
    }];


/***/ })

}]);
//# sourceMappingURL=starter-starter-module.js.map