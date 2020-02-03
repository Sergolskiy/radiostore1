(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-component-material-module"],{

/***/ "./src/app/material-component/buttons/buttons.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/buttons/buttons.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>    \r\n  <mat-card-title>Buttons</mat-card-title>\r\n      <mat-card-subtitle>Angular Material buttons are native <code> button or a </code> elements enhanced with Material Design styling and ink ripples. <code><a href=\"https://material.angular.io/components/button/overview\" target=\"_blank\">Official Doc</a></code></mat-card-subtitle>\r\n  \r\n      <h4>Basic Buttons <br/><code class=\"bg-light\">&lt;button mat-button color=\"primary\"&gt;Primary&lt;/button&gt;</code></h4>\r\n    <div class=\"button-row\">\r\n      <button mat-button>Basic</button>\r\n      <button mat-button color=\"primary\">Primary</button>\r\n      <button mat-button color=\"accent\">Accent</button>\r\n      <button mat-button color=\"warn\">Warn</button>\r\n      <button mat-button disabled>Disabled</button>\r\n      <a mat-button routerLink=\".\">Link</a>\r\n    </div>\r\n\r\n    <h4>Raised Buttons <br/><code class=\"bg-light\">&lt;button mat-raised-button color=\"primary\"&gt;Primary&lt;/button&gt;</code></h4>\r\n    <div class=\"button-row\">\r\n      <button mat-raised-button>Basic</button>\r\n      <button mat-raised-button color=\"primary\">Primary</button>\r\n      <button mat-raised-button color=\"accent\">Accent</button>\r\n      <button mat-raised-button color=\"warn\">Warn</button>\r\n      <button mat-raised-button disabled>Disabled</button>\r\n      <a mat-raised-button routerLink=\".\">Link</a>\r\n    </div>\r\n\r\n    <h4>Icon Buttons <br/><code class=\"bg-light\">&lt;button mat-icon-button color=\"primary\"&gt; <br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-icon aria-label=\"Example icon-button with a heart icon\"&gt;favorite&lt;/mat-icon&gt;<br/>&lt;/button&gt;</code></h4>\r\n    <div class=\"button-row\">\r\n      <button mat-icon-button>\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"primary\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"accent\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"warn\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <button mat-icon-button disabled>\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n    </div>\r\n\r\n    <h4>Fab Buttons <br/><code class=\"bg-light\">&lt;button mat-fab color=\"primary\"&gt;Primary&lt;/button&gt;</code></h4>\r\n    <div class=\"button-row\">\r\n      <button mat-fab>Basic</button>\r\n      <button mat-fab color=\"primary\">Primary</button>\r\n      <button mat-fab color=\"accent\">Accent</button>\r\n      <button mat-fab color=\"warn\">Warn</button>\r\n      <button mat-fab disabled>Disabled</button>\r\n      <button mat-fab>\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <a mat-fab routerLink=\".\">Link</a>\r\n    </div>\r\n\r\n    <h4>Mini Fab Buttons <br/><code class=\"bg-light\">&lt;button mat-mini-fab color=\"primary\"&gt;Primary&lt;/button&gt;</code></h4>\r\n    <div class=\"button-row\">\r\n      <button mat-mini-fab>Base</button>\r\n      <button mat-mini-fab color=\"primary\">Pri</button>\r\n      <button mat-mini-fab color=\"accent\">Acc</button>\r\n      <button mat-mini-fab color=\"warn\">Warn</button>\r\n      <button mat-mini-fab disabled>Dis</button>\r\n      <button mat-mini-fab>\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <a mat-mini-fab routerLink=\".\">Link</a>\r\n    </div>\r\n    <h4>Button toggle </h4>  \r\n    <mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n      <mat-button-toggle value=\"left\">\r\n        <mat-icon>format_align_left</mat-icon>\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"center\">\r\n        <mat-icon>format_align_center</mat-icon>\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"right\">\r\n        <mat-icon>format_align_right</mat-icon>\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"justify\" disabled>\r\n        <mat-icon>format_align_justify</mat-icon>\r\n      </mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n    <div class=\"m-t-20\">Selected value: {{group.value}}</div>  \r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/material-component/buttons/buttons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/buttons/buttons.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n"

/***/ }),

/***/ "./src/app/material-component/buttons/buttons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/buttons/buttons.component.ts ***!
  \*****************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/material-component/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/material-component/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/material-component/chips/chips.component.html":
/*!***************************************************************!*\
  !*** ./src/app/material-component/chips/chips.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <mat-card>\r\n    <mat-card-content>  \r\n    <mat-card-title>Basic Chips</mat-card-title>\r\n    <mat-card-subtitle><code>&lt;mat-chip&gt;</code>displays a list of values as individual, keyboard accessible, chips. <code class=\"\"><a href=\"https://material.angular.io/components/chips/overview\">Official Component</a></code></mat-card-subtitle>\r\n    <mat-chip-list>\r\n      <mat-chip>One fish</mat-chip>\r\n      <mat-chip>Two fish</mat-chip>\r\n      <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\r\n      <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\r\n    </mat-chip-list>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card>\r\n    <mat-card-content>  \r\n    <mat-card-title>Chip input</mat-card-title>\r\n    <mat-card-subtitle>The MatChipInput directive can be used together with a chip-list to streamline the interaction between the two components. This directive adds chip-specific behaviors to the input element within for adding and removing chips. </mat-card-subtitle>\r\n    \r\n      <mat-form-field class=\"demo-chip-list\">\r\n          <mat-chip-list #chipList>\r\n            <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\r\n                     [removable]=\"removable\" (removed)=\"remove(fruit)\">\r\n              {{fruit.name}}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input placeholder=\"New fruit...\"\r\n                   [matChipInputFor]=\"chipList\"\r\n                   [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                   [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                   (matChipInputTokenEnd)=\"add($event)\" />\r\n          </mat-chip-list>\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card>\r\n    <mat-card-content>  \r\n    <mat-card-title>Stacked Chips</mat-card-title>\r\n    <mat-card-subtitle>You can also stack the chips if you want them on top of each other and/or use the\r\n        <code>(focus)</code> event to run custom code.</mat-card-subtitle>\r\n    \r\n      <mat-chip-list class=\"mat-chip-list-stacked\">\r\n        <mat-chip *ngFor=\"let aColor of availableColors\"\r\n                 (focus)=\"color = aColor.color\" color=\"{{aColor.color}}\" selected=\"true\">\r\n          {{aColor.name}}\r\n        </mat-chip>\r\n      </mat-chip-list>\r\n    </mat-card-content>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/material-component/chips/chips.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/material-component/chips/chips.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-chip-list {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/material-component/chips/chips.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-component/chips/chips.component.ts ***!
  \*************************************************************/
/*! exports provided: ChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsComponent", function() { return ChipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChipsComponent = /** @class */ (function () {
    function ChipsComponent() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
        this.availableColors = [
            { name: 'none', color: 'gray' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ChipsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chips',
            template: __webpack_require__(/*! ./chips.component.html */ "./src/app/material-component/chips/chips.component.html"),
            styles: [__webpack_require__(/*! ./chips.component.scss */ "./src/app/material-component/chips/chips.component.scss")]
        })
    ], ChipsComponent);
    return ChipsComponent;
}());



/***/ }),

/***/ "./src/app/material-component/dialog/dialog.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/dialog/dialog.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card> \r\n            <mat-card-content>\r\n              <mat-card-title>Dialog Overview</mat-card-title>\r\n              <mat-card-subtitle>The <code>&lt;MatDialog&gt;</code>  service can be used to open modal dialogs with Material Design styling and animations.</mat-card-subtitle>\r\n              <ol>\r\n                  <li>\r\n                    <mat-form-field>\r\n                      <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\r\n                    </mat-form-field>\r\n                  </li>\r\n                  <li>\r\n                    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\r\n                  </li>\r\n                  <li *ngIf=\"animal\">\r\n                    You chose: <i>{{animal}}</i>\r\n                  </li>\r\n                </ol>  \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div>    \r\n<!-- ============================================================== -->\r\n<!-- Basic Card Grid-->\r\n<!-- ============================================================== -->\r\n\r\n"

/***/ }),

/***/ "./src/app/material-component/dialog/dialog.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/dialog/dialog.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/material-component/dialog/dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/material-component/dialog/dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: DialogComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
    }
    DialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/material-component/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/material-component/dialog/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogComponent);
    return DialogComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"data.animal\" tabindex=\"2\">Ok</button>\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button>\n</div>"
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/material-component/expansion/expansion.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/material-component/expansion/expansion.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Basic-->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n    <mat-card-content>\r\n        <mat-card-title>Basic Expansion</mat-card-title>\r\n        <mat-card-subtitle>Expansion panel <code class=\"\"><a href=\"https://material.angular.io/components/expansion/overview\">Official Component</a></code></mat-card-subtitle>\r\n        <mat-accordion>\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title> Personal data </mat-panel-title>\r\n                    <mat-panel-description> Type your name and age </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"First name\"> </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Age\"> </mat-form-field>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title> Self aware panel </mat-panel-title>\r\n                    <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <p>I'm visible because I am open</p>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </mat-card-content>\r\n</mat-card>\r\n<!-- ============================================================== -->\r\n<!-- As an Accordion -->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n    <mat-card-content>\r\n    <mat-card-title>Accordion</mat-card-title>\r\n    <mat-card-subtitle>Expansion panel</mat-card-subtitle>\r\n    \r\n        <mat-accordion class=\"example-headers-align\">\r\n            <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title> Personal data </mat-panel-title>\r\n                    <mat-panel-description> Type your name and age\r\n                        <mat-icon>account_circle</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"First name\"> </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput type=\"number\" min=\"1\" placeholder=\"Age\"> </mat-form-field>\r\n                <mat-action-row>\r\n                    <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                </mat-action-row>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title> Destination </mat-panel-title>\r\n                    <mat-panel-description> Type the country name\r\n                        <mat-icon>map</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Country\"> </mat-form-field>\r\n                <mat-action-row>\r\n                    <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                    <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                </mat-action-row>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title> Day of the trip </mat-panel-title>\r\n                    <mat-panel-description> Inform the date you wish to travel\r\n                        <mat-icon>date_range</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly> </mat-form-field>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n                <mat-action-row>\r\n                    <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                    <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n                </mat-action-row>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/material-component/expansion/expansion.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/material-component/expansion/expansion.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/material-component/expansion/expansion.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/expansion/expansion.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExpansionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionComponent", function() { return ExpansionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExpansionComponent = /** @class */ (function () {
    function ExpansionComponent() {
        this.panelOpenState = false;
        this.step = 0;
    }
    ExpansionComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ExpansionComponent.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionComponent.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expansion',
            template: __webpack_require__(/*! ./expansion.component.html */ "./src/app/material-component/expansion/expansion.component.html"),
            styles: [__webpack_require__(/*! ./expansion.component.scss */ "./src/app/material-component/expansion/expansion.component.scss")]
        })
    ], ExpansionComponent);
    return ExpansionComponent;
}());



/***/ }),

/***/ "./src/app/material-component/grid/grid.component.html":
/*!*************************************************************!*\
  !*** ./src/app/material-component/grid/grid.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Fixed height grid-list</mat-card-title>\r\n                <mat-card-subtitle><code>&lt;mat-grid-list&gt;</code> is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec. <code><a href=\"https://material.io/guidelines/components/grid-lists.html\">Official Doc here</a></code></mat-card-subtitle>\r\n              <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n                  <mat-grid-tile\r\n                      *ngFor=\"let tile of tiles\"\r\n                      [colspan]=\"tile.cols\"\r\n                      [rowspan]=\"tile.rows\"\r\n                      [style.background]=\"tile.color\">\r\n                    {{tile.text}}\r\n                  </mat-grid-tile>\r\n                </mat-grid-list>  \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div>    \r\n<!-- ============================================================== -->\r\n<!-- Basic Card Grid-->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n    <mat-card-content>\r\n      <mat-card-title>Basic grid-list</mat-card-title>\r\n      <mat-card-subtitle><code>&lt;mat-grid-list&gt;</code> is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec. <a href=\"https://material.io/guidelines/components/grid-lists.html\">here</a></mat-card-subtitle>\r\n      <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n        <mat-grid-tile>1</mat-grid-tile>\r\n        <mat-grid-tile>2</mat-grid-tile>\r\n        <mat-grid-tile>3</mat-grid-tile>\r\n        <mat-grid-tile>4</mat-grid-tile>\r\n      </mat-grid-list>  \r\n    </mat-card-content>        \r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/material-component/grid/grid.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-component/grid/grid.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue; }\n"

/***/ }),

/***/ "./src/app/material-component/grid/grid.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-component/grid/grid.component.ts ***!
  \***********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this.tiles = [{
                text: 'One',
                cols: 3,
                rows: 1,
                color: 'lightblue'
            }, {
                text: 'Two',
                cols: 1,
                rows: 2,
                color: 'lightgreen'
            }, {
                text: 'Three',
                cols: 1,
                rows: 1,
                color: 'lightpink'
            }, {
                text: 'Four',
                cols: 2,
                rows: 1,
                color: '#DDBDF1'
            }];
    }
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/material-component/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/material-component/grid/grid.component.scss")]
        })
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/material-component/lists/lists.component.html":
/*!***************************************************************!*\
  !*** ./src/app/material-component/lists/lists.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Basic list</mat-card-title>\r\n              <mat-card-subtitle><code>&lt;mat-list&gt;</code> is a container component that wraps and formats a series of line items. As the base list component, it provides Material Design styling, but no behavior of its own.<code><a href=\"https://material.angular.io/components/list/overview\">Official Doc here</a></code></mat-card-subtitle>\r\n              <mat-list role=\"list\">\r\n                <mat-list-item role=\"listitem\">Item 1</mat-list-item>\r\n                <mat-list-item role=\"listitem\">Item 2</mat-list-item>\r\n                <mat-list-item role=\"listitem\">Item 3</mat-list-item>\r\n              </mat-list>\r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- List with selection-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"50%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>List with selection</mat-card-title>\r\n              <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n              <mat-selection-list #shoes>\r\n                 <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\r\n                    {{shoe}}\r\n                 </mat-list-option>\r\n              </mat-selection-list>\r\n              <p>\r\n                  Options selected: {{shoes.selectedOptions.selected.length}}\r\n              </p>    \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex.gt-sm=\"50%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Multiline lists</mat-card-title>\r\n              <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n              <mat-list>\r\n                <mat-list-item *ngFor=\"let message of messages\">\r\n                  <h3 matLine>{{message.from}}</h3>\r\n                  <p matLine class=\"text-muted\">{{message.subject}}</p>\r\n                  <p matLine class=\"text-muted\">{{message.content}}</p>    \r\n                </mat-list-item>\r\n              </mat-list>    \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- List with icons selection-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Multiline lists</mat-card-title>\r\n              <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n              <mat-list>\r\n                <mat-list-item *ngFor=\"let message of messages\">\r\n                  <img mat-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">    \r\n                  <h3 matLine>{{message.from}}</h3>\r\n                  <p matLine class=\"text-muted\">{{message.content}}</p>     \r\n                </mat-list-item>\r\n              </mat-list>    \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div> \r\n<!-- ============================================================== -->\r\n<!-- List with icons selection-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content class=\"p-b-0 m-b-0\">\r\n              <mat-card-title>List with sections</mat-card-title>\r\n              <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n            </mat-card-content>   \r\n                <mat-list>\r\n                <mat-card-content class=\"p-t-0\">    \r\n                  <h3 mat-subheader>Folders</h3>\r\n                  <mat-list-item *ngFor=\"let folder of folders\">\r\n                    <mat-icon mat-list-icon>folder</mat-icon>\r\n                    <h4 mat-line>{{folder.name}}</h4>\r\n                    <p mat-line> {{folder.updated | date}} </p>\r\n                  </mat-list-item>\r\n                </mat-card-content>   \r\n                   \r\n                  <mat-divider></mat-divider>\r\n                <mat-card-content>    \r\n                  <h3 mat-subheader>Notes</h3>\r\n                  <mat-list-item *ngFor=\"let note of notes\">\r\n                    <mat-icon mat-list-icon>note</mat-icon>\r\n                    <h4 mat-line>{{note.name}}</h4>\r\n                    <p mat-line> {{note.updated | date}} </p>\r\n                  </mat-list-item>\r\n                </mat-card-content>      \r\n                </mat-list>    \r\n                  \r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/material-component/lists/lists.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/material-component/lists/lists.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/material-component/lists/lists.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-component/lists/lists.component.ts ***!
  \*************************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListsComponent = /** @class */ (function () {
    function ListsComponent() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        this.messages = [{
                from: 'Nirav joshi (nbj@gmail.com)',
                image: 'assets/images/users/1.jpg',
                subject: 'Material angular',
                content: 'This is the material angular template'
            }, {
                from: 'Sunil joshi (sbj@gmail.com)',
                image: 'assets/images/users/2.jpg',
                subject: 'Wrappixel',
                content: 'We have wrappixel launched'
            }, {
                from: 'Vishal Bhatt (bht@gmail.com)',
                image: 'assets/images/users/3.jpg',
                subject: 'Task list',
                content: 'This is the latest task hasbeen done'
            }];
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/material-component/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.scss */ "./src/app/material-component/lists/lists.component.scss")]
        })
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/material-component/material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/material-component/material.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _material_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.routing */ "./src/app/material-component/material.routing.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/material-component/buttons/buttons.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/material-component/grid/grid.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/material-component/lists/lists.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/material-component/menu/menu.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/material-component/tabs/tabs.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/material-component/stepper/stepper.component.ts");
/* harmony import */ var _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./expansion/expansion.component */ "./src/app/material-component/expansion/expansion.component.ts");
/* harmony import */ var _chips_chips_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chips/chips.component */ "./src/app/material-component/chips/chips.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/material-component/toolbar/toolbar.component.ts");
/* harmony import */ var _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./progress-snipper/progress-snipper.component */ "./src/app/material-component/progress-snipper/progress-snipper.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/material-component/progress/progress.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/material-component/dialog/dialog.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/material-component/tooltip/tooltip.component.ts");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./snackbar/snackbar.component */ "./src/app/material-component/snackbar/snackbar.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/material-component/slider/slider.component.ts");
/* harmony import */ var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./slide-toggle/slide-toggle.component */ "./src/app/material-component/slide-toggle/slide-toggle.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./users/users.component */ "./src/app/material-component/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_material_routing__WEBPACK_IMPORTED_MODULE_9__["MaterialRoutes"]),
                _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"]
            ],
            providers: [],
            entryComponents: [
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DialogOverviewExampleDialog"]
            ],
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_11__["GridComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_12__["ListsComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_14__["TabsComponent"],
                _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_15__["StepperComponent"],
                _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_16__["ExpansionComponent"],
                _chips_chips_component__WEBPACK_IMPORTED_MODULE_17__["ChipsComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["ToolbarComponent"],
                _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_19__["ProgressSnipperComponent"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_20__["ProgressComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DialogComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DialogOverviewExampleDialog"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_22__["TooltipComponent"],
                _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_23__["SnackbarComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_24__["SliderComponent"],
                _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_25__["SlideToggleComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_26__["CategoriesComponent"]
            ]
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/material-component/material.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/material-component/material.routing.ts ***!
  \********************************************************/
/*! exports provided: MaterialRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRoutes", function() { return MaterialRoutes; });
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/material-component/buttons/buttons.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/material-component/grid/grid.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/material-component/lists/lists.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/material-component/menu/menu.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/material-component/tabs/tabs.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/material-component/stepper/stepper.component.ts");
/* harmony import */ var _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expansion/expansion.component */ "./src/app/material-component/expansion/expansion.component.ts");
/* harmony import */ var _chips_chips_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chips/chips.component */ "./src/app/material-component/chips/chips.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/material-component/toolbar/toolbar.component.ts");
/* harmony import */ var _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress-snipper/progress-snipper.component */ "./src/app/material-component/progress-snipper/progress-snipper.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/material-component/progress/progress.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/material-component/dialog/dialog.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/material-component/tooltip/tooltip.component.ts");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./snackbar/snackbar.component */ "./src/app/material-component/snackbar/snackbar.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/material-component/slider/slider.component.ts");
/* harmony import */ var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./slide-toggle/slide-toggle.component */ "./src/app/material-component/slide-toggle/slide-toggle.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/users.component */ "./src/app/material-component/users/users.component.ts");

















var MaterialRoutes = [
    {
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesComponent"]
    }, {
        path: 'button',
        component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__["ButtonsComponent"]
    }, {
        path: 'grid',
        component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]
    }, {
        path: 'lists',
        component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_2__["ListsComponent"]
    }, {
        path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]
    }, {
        path: 'tabs',
        component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]
    }, {
        path: 'stepper',
        component: _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__["StepperComponent"]
    }, {
        path: 'expansion',
        component: _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_6__["ExpansionComponent"]
    }, {
        path: 'chips',
        component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_7__["ChipsComponent"]
    }, {
        path: 'toolbar',
        component: _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"]
    }, {
        path: 'progress-snipper',
        component: _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_9__["ProgressSnipperComponent"]
    }, {
        path: 'progress',
        component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_10__["ProgressComponent"]
    }, {
        path: 'dialog',
        component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]
    }, {
        path: 'tooltip',
        component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_12__["TooltipComponent"]
    }, {
        path: 'snackbar',
        component: _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__["SnackbarComponent"]
    }, {
        path: 'slider',
        component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_14__["SliderComponent"]
    }, {
        path: 'slide-toggle',
        component: _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_15__["SlideToggleComponent"]
    }
];


/***/ }),

/***/ "./src/app/material-component/menu/menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/material-component/menu/menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <!-- Card column -->\r\n    <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Basic menu</mat-card-title>\r\n                <mat-card-subtitle><code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n                <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                  <button mat-menu-item>Item 1</button>\r\n                  <button mat-menu-item>Item 2</button>\r\n                </mat-menu>\r\n            </mat-card-content>    \r\n       </mat-card>\r\n       <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>On icon menu</mat-card-title>\r\n                <mat-card-subtitle><code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu2\"><mat-icon>menu</mat-icon></button>\r\n                <mat-menu #menu2=\"matMenu\">\r\n                  <button mat-menu-item>Item 1</button>\r\n                  <button mat-menu-item>Item 2</button>\r\n                </mat-menu>\r\n            </mat-card-content>    \r\n       </mat-card>\r\n       <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Nested menu</mat-card-title>\r\n                <mat-card-subtitle><code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n                <button mat-raised-button color=\"accent\" [matMenuTriggerFor]=\"animals\">Animal index</button>\r\n\r\n                <mat-menu #animals=\"matMenu\">\r\n                  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\r\n                  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\r\n                </mat-menu>\r\n\r\n                <mat-menu #vertebrates=\"matMenu\">\r\n                  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\r\n                  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\r\n                  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\r\n                  <button mat-menu-item>Birds</button>\r\n                  <button mat-menu-item>Mammals</button>\r\n                </mat-menu>\r\n\r\n                <mat-menu #invertebrates=\"matMenu\">\r\n                  <button mat-menu-item>Insects</button>\r\n                  <button mat-menu-item>Molluscs</button>\r\n                  <button mat-menu-item>Crustaceans</button>\r\n                  <button mat-menu-item>Corals</button>\r\n                  <button mat-menu-item>Arachnids</button>\r\n                  <button mat-menu-item>Velvet worms</button>\r\n                  <button mat-menu-item>Horseshoe crabs</button>\r\n                </mat-menu>\r\n\r\n                <mat-menu #fish=\"matMenu\">\r\n                  <button mat-menu-item>Baikal oilfish</button>\r\n                  <button mat-menu-item>Bala shark</button>\r\n                  <button mat-menu-item>Ballan wrasse</button>\r\n                  <button mat-menu-item>Bamboo shark</button>\r\n                  <button mat-menu-item>Banded killifish</button>\r\n                </mat-menu>\r\n\r\n                <mat-menu #amphibians=\"matMenu\">\r\n                  <button mat-menu-item>Sonoran desert toad</button>\r\n                  <button mat-menu-item>Western toad</button>\r\n                  <button mat-menu-item>Arroyo toad</button>\r\n                  <button mat-menu-item>Yosemite toad</button>\r\n                </mat-menu>\r\n\r\n                <mat-menu #reptiles=\"matMenu\">\r\n                  <button mat-menu-item>Banded Day Gecko</button>\r\n                  <button mat-menu-item>Banded Gila Monster</button>\r\n                  <button mat-menu-item>Black Tree Monitor</button>\r\n                  <button mat-menu-item>Blue Spiny Lizard</button>\r\n                  <button mat-menu-item disabled>Velociraptor</button>\r\n                </mat-menu>\r\n            </mat-card-content>    \r\n       </mat-card>\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>With icon menu</mat-card-title>\r\n                <mat-card-subtitle><code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu4\">\r\n                  <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n                <mat-menu #menu4=\"matMenu\">\r\n                  <button mat-menu-item>\r\n                    <mat-icon>dialpad</mat-icon>\r\n                    <span>Redial</span>\r\n                  </button>\r\n                  <button mat-menu-item disabled>\r\n                    <mat-icon>voicemail</mat-icon>\r\n                    <span>Check voicemail</span>\r\n                  </button>\r\n                  <button mat-menu-item>\r\n                    <mat-icon>notifications_off</mat-icon>\r\n                    <span>Disable alerts</span>\r\n                  </button>\r\n                </mat-menu>\r\n            </mat-card-content>    \r\n       </mat-card>\r\n    </div>    \r\n</div>    "

/***/ }),

/***/ "./src/app/material-component/menu/menu.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-component/menu/menu.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/material-component/menu/menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-component/menu/menu.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/material-component/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/material-component/menu/menu.component.scss")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/material-component/progress-snipper/progress-snipper.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/material-component/progress-snipper/progress-snipper.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Basic Progress spinner</mat-card-title>\r\n              <mat-card-subtitle><code>&lt;mat-progress-spinner&gt;</code> are a circular indicators of progress and activity.</mat-card-subtitle>\r\n              <mat-spinner></mat-spinner>  \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div> \r\n</div>    \r\n<!-- ============================================================== -->\r\n<!-- Basic Card Grid-->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n    <mat-card-content>\r\n      <mat-card-title>Configurable progress spinner</mat-card-title>\r\n      \r\n      <section class=\"example-section\">\r\n      <label class=\"example-margin\">Color:</label>\r\n      <mat-radio-group [(ngModel)]=\"color\">\r\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n          Primary\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n          Accent\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n          Warn\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n        <br/>\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Mode:</label>\r\n      <mat-radio-group [(ngModel)]=\"mode\">\r\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n          Determinate\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n          Indeterminate\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n<br/>\r\n    <section class=\"example-section\" *ngIf=\"mode == 'determinate'\">\r\n      <label class=\"example-margin\">Progress:</label>\r\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\r\n    </section>\r\n    <h4 class=\"example-h2\">Result</h4>\r\n\r\n    <mat-progress-spinner\r\n        class=\"example-margin\"\r\n        [color]=\"color\"\r\n        [mode]=\"mode\"\r\n        [value]=\"value\">\r\n    </mat-progress-spinner>    \r\n    </mat-card-content>        \r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/material-component/progress-snipper/progress-snipper.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/material-component/progress-snipper/progress-snipper.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/material-component/progress-snipper/progress-snipper.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/material-component/progress-snipper/progress-snipper.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProgressSnipperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSnipperComponent", function() { return ProgressSnipperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressSnipperComponent = /** @class */ (function () {
    function ProgressSnipperComponent() {
        this.color = 'warn';
        this.mode = 'determinate';
        this.value = 50;
    }
    ProgressSnipperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snipper',
            template: __webpack_require__(/*! ./progress-snipper.component.html */ "./src/app/material-component/progress-snipper/progress-snipper.component.html"),
            styles: [__webpack_require__(/*! ./progress-snipper.component.scss */ "./src/app/material-component/progress-snipper/progress-snipper.component.scss")]
        })
    ], ProgressSnipperComponent);
    return ProgressSnipperComponent;
}());



/***/ }),

/***/ "./src/app/material-component/progress/progress.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/progress/progress.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Determinate progress-bar</mat-card-title>\r\n              <mat-card-subtitle><code>&lt;mat-progress-bar mode=\"determinate\"&gt;</code> is a horizontal progress-bar for indicating progress and activity.</mat-card-subtitle>\r\n              <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>  \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Indeterminate progress-bar</mat-card-title>\r\n              <mat-card-subtitle><code>&lt;mat-progress-bar mode=\"indeterminate\"&gt;</code> is a horizontal progress-bar for indicating progress and activity.</mat-card-subtitle>\r\n              <mat-progress-bar mode=\"indeterminate\" value=\"40\"></mat-progress-bar>  \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Buffer progress-bar</mat-card-title>\r\n              <mat-card-subtitle><code>&lt;mat-progress-bar mode=\"buffer\"&gt;</code> is a horizontal progress-bar for indicating progress and activity.</mat-card-subtitle>\r\n              <mat-progress-bar mode=\"buffer\"></mat-progress-bar>  \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Query  progress-bar</mat-card-title>\r\n              <mat-card-subtitle><code>&lt;mat-progress-bar mode=\"query\"&gt;</code> is a horizontal progress-bar for indicating progress and activity.</mat-card-subtitle>\r\n              <mat-progress-bar mode=\"query\"></mat-progress-bar>  \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Colored  progress-bar</mat-card-title>\r\n              <mat-card-subtitle><code>&lt;mat-progress-bar mode=\"determinate\"&gt;</code> is a horizontal progress-bar for indicating progress and activity.</mat-card-subtitle>\r\n              <mat-progress-bar mode=\"determinate\" value=\"40\" color=\"primary\"></mat-progress-bar><br/>  \r\n              <mat-progress-bar mode=\"determinate\" value=\"80\" color=\"accent\"></mat-progress-bar><br/>  \r\n              <mat-progress-bar mode=\"determinate\" value=\"20\" color=\"warn\"></mat-progress-bar>      \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Configurable   progress-bar</mat-card-title>\r\n              <mat-card-subtitle><code>&lt;mat-progress-bar mode=\"query\"&gt;</code> is a horizontal progress-bar for indicating progress and activity.</mat-card-subtitle>\r\n              <section class=\"example-section\">\r\n                  <label class=\"example-margin\">Color:</label>\r\n                  <mat-radio-group [(ngModel)]=\"color\">\r\n                    <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n                      Primary\r\n                    </mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n                      Accent\r\n                    </mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n                      Warn\r\n                    </mat-radio-button>\r\n                  </mat-radio-group>\r\n                </section>\r\n                <br/>\r\n                <section class=\"example-section\">\r\n                  <label class=\"example-margin\">Mode:</label>\r\n                  <mat-radio-group [(ngModel)]=\"mode\">\r\n                    <mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n                      Determinate\r\n                    </mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n                      Indeterminate\r\n                    </mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"buffer\">\r\n                      Buffer\r\n                    </mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"query\">\r\n                      Query\r\n                    </mat-radio-button>\r\n                  </mat-radio-group>\r\n                </section>\r\n                \r\n                <section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\">\r\n                  <label class=\"example-margin\">Progress:</label>\r\n                  <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\r\n                </section>\r\n                <section class=\"example-section\" *ngIf=\"mode == 'buffer'\">\r\n                  <label class=\"example-margin\">Buffer:</label>\r\n                  <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\r\n                </section>\r\n                <h2 class=\"example-h2\">Result</h2>\r\n\r\n                <section class=\"example-section\">\r\n                  <mat-progress-bar\r\n                      class=\"example-margin\"\r\n                      [color]=\"color\"\r\n                      [mode]=\"mode\"\r\n                      [value]=\"value\"\r\n                      [bufferValue]=\"bufferValue\">\r\n                  </mat-progress-bar>\r\n                </section>\r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./src/app/material-component/progress/progress.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/progress/progress.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 0 10px; }\n"

/***/ }),

/***/ "./src/app/material-component/progress/progress.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/progress/progress.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/material-component/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.scss */ "./src/app/material-component/progress/progress.component.scss")]
        })
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/material-component/slide-toggle/slide-toggle.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/material-component/slide-toggle/slide-toggle.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Basic slide-toggles</mat-card-title>\r\n              <mat-card-subtitle><code>&lt;mat-slide-toggle&gt;</code> is an on/off control that can be toggled via clicking or dragging.</mat-card-subtitle>\r\n              <mat-slide-toggle>Slide me!</mat-slide-toggle>\r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div>    \r\n<!-- ============================================================== -->\r\n<!-- Basic Card Grid-->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n    <mat-card-content>\r\n      <mat-card-title>Basic grid-list</mat-card-title>\r\n      <mat-card-subtitle><code>&lt;mat-slide-toggle&gt;</code> is an on/off control that can be toggled via clicking or dragging.</mat-card-subtitle>\r\n      <section class=\"example-section\">\r\n      <label class=\"example-margin\">Color:</label>\r\n      <mat-radio-group [(ngModel)]=\"color\">\r\n        <mat-radio-button class=\"example-margin\" color=\"primary\" value=\"primary\">\r\n          Primary\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" color=\"accent\" value=\"accent\">\r\n          Accent\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" color=\"warn\" value=\"warn\">\r\n          Warn\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </section>\r\n    <h2 class=\"example-h2\">Result</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-slide-toggle\r\n          class=\"example-margin\"\r\n          [color]=\"color\"\r\n          [checked]=\"checked\"\r\n          [disabled]=\"disabled\">\r\n        Slide me!\r\n      </mat-slide-toggle>\r\n    </section>  \r\n    </mat-card-content>        \r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/material-component/slide-toggle/slide-toggle.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/material-component/slide-toggle/slide-toggle.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 10px; }\n"

/***/ }),

/***/ "./src/app/material-component/slide-toggle/slide-toggle.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/material-component/slide-toggle/slide-toggle.component.ts ***!
  \***************************************************************************/
/*! exports provided: SlideToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideToggleComponent", function() { return SlideToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideToggleComponent = /** @class */ (function () {
    function SlideToggleComponent() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    SlideToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slide-toggle',
            template: __webpack_require__(/*! ./slide-toggle.component.html */ "./src/app/material-component/slide-toggle/slide-toggle.component.html"),
            styles: [__webpack_require__(/*! ./slide-toggle.component.scss */ "./src/app/material-component/slide-toggle/slide-toggle.component.scss")]
        })
    ], SlideToggleComponent);
    return SlideToggleComponent;
}());



/***/ }),

/***/ "./src/app/material-component/slider/slider.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/slider/slider.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>    \r\n  <mat-card-title>Slider</mat-card-title>\r\n  <mat-card-subtitle>mat-slider allows for the selection of a value from a range via mouse, touch, or keyboard, similar to <code class=\"\"><a href=\"https://material.angular.io/components/slider/overview\">Official Component</a></code></mat-card-subtitle>\r\n    \r\n    <h4 class=\"m-b-0\">Basic Slider</h4>\r\n    <mat-slider color=\"warn\" value=\"40\"></mat-slider>\r\n      \r\n    <h4  class=\"m-b-0\">value Slider</h4>\r\n    Label <mat-slider #slidey color=\"primary\"  value=\"40\"></mat-slider>\r\n    {{slidey.value}}\r\n\r\n    <h4 class=\"m-b-0\">With Min and Max</h4>\r\n    <mat-form-field><input [(ngModel)]=\"min\" matInput > </mat-form-field> <mat-form-field> <input [(ngModel)]=\"max\" matInput></mat-form-field><br/>\r\n    <mat-slider [min]=\"min\" [max]=\"max\" tickInterval=\"5\" #slider2 color=\"warn\"></mat-slider>\r\n    {{slider2.value}}\r\n    \r\n\r\n    <h4 class=\"m-b-0\">Disabled Slider</h4>\r\n    <mat-slider disabled #slider3></mat-slider>\r\n    {{slider3.value}}\r\n\r\n      <h4 class=\"m-b-0\">Vertical slider</h4>\r\n    <mat-slider vertical  value=\"50\"></mat-slider>\r\n      \r\n    <h4 class=\"m-b-0\">Selecting a value</h4>\r\n    <mat-slider min=\"1\" max=\"100\" step=\"20\" #slider5></mat-slider>\r\n    {{slider5.value}}\r\n\r\n      <h4 class=\"m-b-0\">Slider with set tick interval</h4>\r\n    <mat-slider tickInterval=\"auto\"></mat-slider>\r\n    <mat-slider tickInterval=\"9\"></mat-slider>\r\n\r\n      <h4 class=\"m-b-0\">Slider with Thumb Label</h4>\r\n    <mat-slider thumbLabel></mat-slider>\r\n\r\n      <h4 class=\"m-b-0\">Slider with one-way binding</h4>\r\n    <mat-slider [value]=\"val\" step=\"40\"></mat-slider>\r\n      <mat-form-field><input [(ngModel)]=\"val\" matInput></mat-form-field>\r\n\r\n      <h4 class=\"m-b-0\">Slider with two-way binding</h4>\r\n    <mat-slider [(ngModel)]=\"demo\" step=\"40\"></mat-slider>\r\n      <mat-form-field><input [(ngModel)]=\"demo\" matInput></mat-form-field>\r\n\r\n      <h4 class=\"m-b-0\">Inverted slider</h4>\r\n    <mat-slider invert value=\"50\" tickInterval=\"5\"></mat-slider>\r\n\r\n    \r\n\r\n      <h4 class=\"m-b-0\">Inverted vertical slider</h4>\r\n    <mat-slider vertical invert thumbLabel tickInterval=\"auto\" value=\"50\"></mat-slider>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/material-component/slider/slider.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/slider/slider.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/material-component/slider/slider.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/material-component/slider/slider.component.ts ***!
  \***************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.val = 50;
        this.min = 0;
        this.max = 100;
    }
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/material-component/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/material-component/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/material-component/snackbar/snackbar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/snackbar/snackbar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n        <mat-card-title>Basic snack-bar</mat-card-title>\r\n        <mat-card-subtitle>matSnackBar is a service for displaying snack-bar notifications. <code class=\"\"><a href=\"https://material.angular.io/components/snack-bar/overview\">Official Component</a></code></mat-card-subtitle>\r\n        <mat-form-field>\r\n            <input matInput value=\"Disco party!\" placeholder=\"Message\" #message> </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput value=\"Dance\" placeholder=\"Action\" #action> </mat-form-field>\r\n        <button mat-raised-button color=\"warn\" (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/material-component/snackbar/snackbar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/snackbar/snackbar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/material-component/snackbar/snackbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/snackbar/snackbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    SnackbarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/material-component/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/material-component/snackbar/snackbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/material-component/stepper/stepper.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/stepper/stepper.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <!-- Card column -->\r\n    <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Stepper</mat-card-title>\r\n                <mat-card-subtitle>Check the <code class=\"\"><a href=\"https://material.angular.io/components/stepper/overview\">Official Component</a></code></mat-card-subtitle>\r\n                <button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button>\r\n                <mat-horizontal-stepper [linear]=\"isLinear\">\r\n                  <mat-step [stepControl]=\"firstFormGroup\">\r\n                    <form [formGroup]=\"firstFormGroup\">\r\n                      <ng-template matStepLabel>Fill out your name</ng-template>\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n                      </mat-form-field>\r\n                      <div>\r\n                        <button mat-raised-button color=\"warn\" matStepperNext>Next</button>\r\n                      </div>\r\n                    </form>\r\n                  </mat-step>\r\n                  <mat-step [stepControl]=\"secondFormGroup\">\r\n                    <form [formGroup]=\"secondFormGroup\">\r\n                      <ng-template matStepLabel>Fill out your address</ng-template>\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\r\n                      </mat-form-field>\r\n                      <div>\r\n                        <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n                        <button mat-raised-button color=\"warn\" matStepperNext>Next</button>\r\n                      </div>\r\n                    </form>\r\n                  </mat-step>\r\n                  <mat-step>\r\n                    <ng-template matStepLabel>Done</ng-template>\r\n                    You are now done.\r\n                    <div>\r\n                      <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n                    </div>\r\n                  </mat-step>\r\n                </mat-horizontal-stepper>\r\n            \r\n            </mat-card-content>\r\n             \r\n        </mat-card>    \r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/material-component/stepper/stepper.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/stepper/stepper.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/material-component/stepper/stepper.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/stepper/stepper.component.ts ***!
  \*****************************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepperComponent = /** @class */ (function () {
    function StepperComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    StepperComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    StepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stepper',
            template: __webpack_require__(/*! ./stepper.component.html */ "./src/app/material-component/stepper/stepper.component.html"),
            styles: [__webpack_require__(/*! ./stepper.component.scss */ "./src/app/material-component/stepper/stepper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StepperComponent);
    return StepperComponent;
}());



/***/ }),

/***/ "./src/app/material-component/tabs/tabs.component.html":
/*!*************************************************************!*\
  !*** ./src/app/material-component/tabs/tabs.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <!-- Card column -->\r\n    <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Basic Tab </mat-card-title>\r\n                <mat-card-subtitle>Check the <code class=\"\"><a href=\"https://material.angular.io/components/tabs/overview\">Official Component</a></code></mat-card-subtitle>\r\n            </mat-card-content>\r\n            <mat-tab-group>\r\n                <mat-tab label=\"Tab 1\"><mat-card-content>Content 1</mat-card-content></mat-tab>\r\n                <mat-tab label=\"Tab 2\"><mat-card-content>Content 2</mat-card-content></mat-tab>\r\n            </mat-tab-group>\r\n        </mat-card>    \r\n    </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <!-- Card column -->\r\n    <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Complex Tab Example (Responsive tab)</mat-card-title>\r\n            </mat-card-content>\r\n            <mat-tab-group class=\"demo-tab-group\">\r\n              <mat-tab label=\"Tab 1\">\r\n                <div class=\"demo-tab-content\">\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                  Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                  In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                  feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                  orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                </div>\r\n              </mat-tab>\r\n              <mat-tab label=\"Tab 2\">\r\n                <ng-template mat-tab-label>\r\n                  ⭐\r\n                </ng-template>\r\n                <div class=\"demo-tab-content\">\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                  Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                  In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                  feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                  orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                </div>  \r\n              </mat-tab>\r\n              <mat-tab label=\"Tab 3\" disabled>\r\n                No content  \r\n              </mat-tab>\r\n              <mat-tab label=\"Tab 4\">\r\n               <div class=\"demo-tab-content\">\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                  Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                  In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                  feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                  orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                  <br />\r\n                  <br />\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                  Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                  In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                  feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                  orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                </div>  \r\n              </mat-tab>\r\n              <mat-tab label=\"Tab 5\">\r\n                No content  \r\n              </mat-tab>\r\n              <mat-tab label=\"Tab 6\">\r\n                No content  \r\n              </mat-tab>\r\n            </mat-tab-group>\r\n        </mat-card>    \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/material-component/tabs/tabs.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-component/tabs/tabs.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-tab-group {\n  border: 1px solid #e8e8e8; }\n\n.demo-tab-content {\n  padding: 24px; }\n"

/***/ }),

/***/ "./src/app/material-component/tabs/tabs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-component/tabs/tabs.component.ts ***!
  \***********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/material-component/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/material-component/tabs/tabs.component.scss")]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/material-component/toolbar/toolbar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/toolbar/toolbar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"no-shadow\">\r\n  <mat-card-content>\r\n  <mat-card-title>Toolbar</mat-card-title>\r\n  <mat-card-subtitle>matToolbar is a container for headers, titles, or actions.<code class=\"\"><a href=\"https://material.angular.io/components/toolbar/overview\">Official Component</a></code></mat-card-subtitle>\r\n  \r\n    <p>Basic toolbar:</p>\r\n    <mat-toolbar>My App</mat-toolbar>\r\n    <p>The primary color toolbar:</p>\r\n    <mat-toolbar color=\"primary\">\r\n      <span>Primary Toolbar</span>\r\n      <span fxFlex></span>\r\n      <button mat-button href=\"#\" mat-icon-button>\r\n        <mat-icon>search</mat-icon>\r\n      </button>\r\n      <button mat-button href=\"#\" mat-icon-button>\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n    </mat-toolbar>\r\n    <p>Multiple row</p>\r\n    <mat-toolbar>  \r\n      <mat-toolbar-row>\r\n        <span>First Row</span>\r\n      </mat-toolbar-row>\r\n\r\n      <mat-toolbar-row>\r\n        <span>Second Row</span>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <p>Positining toolbar</p>\r\n    <mat-toolbar color=\"primary\">\r\n  <span>Application Title</span>\r\n\r\n  <!-- This fills the remaining space of the current row -->\r\n  <span class=\"example-fill-remaining-space\"></span>\r\n\r\n  <span>Right Aligned Text</span>\r\n</mat-toolbar>  \r\n    <p>An accent toolbar using the second toolbar row:</p>\r\n    <mat-toolbar color=\"accent\">\r\n      <mat-toolbar-row>\r\n        <span>Second Line Toolbar</span>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <p>A primary toolbar using the third toolbar row:</p>\r\n    <mat-toolbar class=\"bg-success\" color=\"warn\">\r\n  <mat-toolbar-row>\r\n    <span>Custom Toolbar</span>\r\n  </mat-toolbar-row>\r\n\r\n  <mat-toolbar-row>\r\n    <span>Second Line</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <mat-icon class=\"example-icon\">verified_user</mat-icon>\r\n  </mat-toolbar-row>\r\n\r\n  <mat-toolbar-row>\r\n    <span>Third Line</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <mat-icon class=\"example-icon\">favorite</mat-icon>\r\n    <mat-icon class=\"example-icon\">delete</mat-icon>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/material-component/toolbar/toolbar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/toolbar/toolbar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-shadow mat-toolbar {\n  box-shadow: none; }\n\n.example-fill-remaining-space {\n  flex: 1 1 auto; }\n\n.example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/material-component/toolbar/toolbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/toolbar/toolbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/material-component/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/material-component/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/material-component/tooltip/tooltip.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/tooltip/tooltip.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Basic Tooltip</mat-card-title>\r\n              <mat-card-subtitle>The Angular Material tooltip provides a text label that is displayed when the user hovers over or longpresses an element. add <code>matTooltip=\"yourtext\"</code> to any element </mat-card-subtitle>\r\n                <span matTooltip=\"Tooltip!\">I have a tooltip</span>\r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div>  \r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Positioning Tooltip</mat-card-title>\r\n              <mat-card-subtitle>Add <code>matTooltipPosition=\"below, above, left, right, before, after\"</code> to any element</mat-card-subtitle>\r\n                <button mat-raised-button color=\"accent\" matTooltip=\"Tooltip!\" matTooltipPosition=\"above\">Above tooltip</button>\r\n                <button mat-raised-button color=\"warn\" matTooltip=\"Tooltip!\" matTooltipPosition=\"below\">below tooltip</button>\r\n                <button mat-raised-button color=\"primary\" matTooltip=\"Tooltip!\" matTooltipPosition=\"left\">left tooltip</button>\r\n                <button mat-raised-button color=\"warn\" matTooltip=\"Tooltip!\" matTooltipPosition=\"right\">right tooltip</button>\r\n                <button mat-raised-button color=\"accent\" matTooltip=\"Tooltip!\" matTooltipPosition=\"before\">Before tooltip</button>\r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<mat-card>\r\n  <mat-card-content>    \r\n  <mat-card-title>Tooltip with custom position</mat-card-title>\r\n  <mat-card-subtitle>The Angular Material tooltip provides a text label that is displayed when the user hovers over or longpresses an element.</mat-card-subtitle>\r\n  \r\n    <div class=\"example-tooltip-host\" matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\">\r\n      <span>Show tooltip</span>\r\n      <mat-form-field>\r\n        <mat-select class=\"example-select\" [(ngModel)]=\"position\">\r\n          <mat-option value=\"before\">Before</mat-option>\r\n          <mat-option value=\"after\">After</mat-option>\r\n          <mat-option value=\"above\">Above</mat-option>\r\n          <mat-option value=\"below\">Below</mat-option>\r\n          <mat-option value=\"left\">Left</mat-option>\r\n          <mat-option value=\"right\">Right</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/material-component/tooltip/tooltip.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/tooltip/tooltip.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tooltip-host {\n  display: inline-flex;\n  align-items: center;\n  margin: 50px; }\n\n.example-select {\n  margin: 0 10px; }\n"

/***/ }),

/***/ "./src/app/material-component/tooltip/tooltip.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/tooltip/tooltip.component.ts ***!
  \*****************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.position = 'before';
    }
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/material-component/tooltip/tooltip.component.html"),
            styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/material-component/tooltip/tooltip.component.scss")]
        })
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/material-component/users/users.component.html":
/*!***************************************************************!*\
  !*** ./src/app/material-component/users/users.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>    \r\n  <mat-card-title>Users</mat-card-title>\r\n{{isTest()}}\r\n      <!--<mat-card-subtitle>Angular Material buttons are native <code> button or a </code> elements enhanced with Material Design styling and ink ripples. <code><a href=\"https://material.angular.io/components/button/overview\" target=\"_blank\">Official Doc</a></code></mat-card-subtitle>-->\r\n  <!---->\r\n      <!--<h4>Basic Buttons <br/><code class=\"bg-light\">&lt;button mat-button color=\"primary\"&gt;Primary&lt;/button&gt;</code></h4>-->\r\n    <!--<div class=\"button-row\">-->\r\n      <!--<button mat-button>Basic</button>-->\r\n      <!--<button mat-button color=\"primary\">Primary</button>-->\r\n      <!--<button mat-button color=\"accent\">Accent</button>-->\r\n      <!--<button mat-button color=\"warn\">Warn</button>-->\r\n      <!--<button mat-button disabled>Disabled</button>-->\r\n      <!--<a mat-button routerLink=\".\">Link</a>-->\r\n    <!--</div>-->\r\n\r\n    <!--<h4>Raised Buttons <br/><code class=\"bg-light\">&lt;button mat-raised-button color=\"primary\"&gt;Primary&lt;/button&gt;</code></h4>-->\r\n    <!--<div class=\"button-row\">-->\r\n      <!--<button mat-raised-button>Basic</button>-->\r\n      <!--<button mat-raised-button color=\"primary\">Primary</button>-->\r\n      <!--<button mat-raised-button color=\"accent\">Accent</button>-->\r\n      <!--<button mat-raised-button color=\"warn\">Warn</button>-->\r\n      <!--<button mat-raised-button disabled>Disabled</button>-->\r\n      <!--<a mat-raised-button routerLink=\".\">Link</a>-->\r\n    <!--</div>-->\r\n\r\n    <!--<h4>Icon Buttons <br/><code class=\"bg-light\">&lt;button mat-icon-button color=\"primary\"&gt; <br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-icon aria-label=\"Example icon-button with a heart icon\"&gt;favorite&lt;/mat-icon&gt;<br/>&lt;/button&gt;</code></h4>-->\r\n    <!--<div class=\"button-row\">-->\r\n      <!--<button mat-icon-button>-->\r\n        <!--<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>-->\r\n      <!--</button>-->\r\n      <!--<button mat-icon-button color=\"primary\">-->\r\n        <!--<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>-->\r\n      <!--</button>-->\r\n      <!--<button mat-icon-button color=\"accent\">-->\r\n        <!--<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>-->\r\n      <!--</button>-->\r\n      <!--<button mat-icon-button color=\"warn\">-->\r\n        <!--<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>-->\r\n      <!--</button>-->\r\n      <!--<button mat-icon-button disabled>-->\r\n        <!--<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>-->\r\n      <!--</button>-->\r\n    <!--</div>-->\r\n\r\n    <!--<h4>Fab Buttons <br/><code class=\"bg-light\">&lt;button mat-fab color=\"primary\"&gt;Primary&lt;/button&gt;</code></h4>-->\r\n    <!--<div class=\"button-row\">-->\r\n      <!--<button mat-fab>Basic</button>-->\r\n      <!--<button mat-fab color=\"primary\">Primary</button>-->\r\n      <!--<button mat-fab color=\"accent\">Accent</button>-->\r\n      <!--<button mat-fab color=\"warn\">Warn</button>-->\r\n      <!--<button mat-fab disabled>Disabled</button>-->\r\n      <!--<button mat-fab>-->\r\n        <!--<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>-->\r\n      <!--</button>-->\r\n      <!--<a mat-fab routerLink=\".\">Link</a>-->\r\n    <!--</div>-->\r\n\r\n    <!--<h4>Mini Fab Buttons <br/><code class=\"bg-light\">&lt;button mat-mini-fab color=\"primary\"&gt;Primary&lt;/button&gt;</code></h4>-->\r\n    <!--<div class=\"button-row\">-->\r\n      <!--<button mat-mini-fab>Base</button>-->\r\n      <!--<button mat-mini-fab color=\"primary\">Pri</button>-->\r\n      <!--<button mat-mini-fab color=\"accent\">Acc</button>-->\r\n      <!--<button mat-mini-fab color=\"warn\">Warn</button>-->\r\n      <!--<button mat-mini-fab disabled>Dis</button>-->\r\n      <!--<button mat-mini-fab>-->\r\n        <!--<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>-->\r\n      <!--</button>-->\r\n      <!--<a mat-mini-fab routerLink=\".\">Link</a>-->\r\n    <!--</div>-->\r\n    <!--<h4>Button toggle </h4>  -->\r\n    <!--<mat-button-toggle-group #group=\"matButtonToggleGroup\">-->\r\n      <!--<mat-button-toggle value=\"left\">-->\r\n        <!--<mat-icon>format_align_left</mat-icon>-->\r\n      <!--</mat-button-toggle>-->\r\n      <!--<mat-button-toggle value=\"center\">-->\r\n        <!--<mat-icon>format_align_center</mat-icon>-->\r\n      <!--</mat-button-toggle>-->\r\n      <!--<mat-button-toggle value=\"right\">-->\r\n        <!--<mat-icon>format_align_right</mat-icon>-->\r\n      <!--</mat-button-toggle>-->\r\n      <!--<mat-button-toggle value=\"justify\" disabled>-->\r\n        <!--<mat-icon>format_align_justify</mat-icon>-->\r\n      <!--</mat-button-toggle>-->\r\n    <!--</mat-button-toggle-group>-->\r\n    <!--<div class=\"m-t-20\">Selected value: {{group.value}}</div>  -->\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/material-component/users/users.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/material-component/users/users.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n"

/***/ }),

/***/ "./src/app/material-component/users/users.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-component/users/users.component.ts ***!
  \*************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent($service) {
        this.$service = $service;
    }
    UsersComponent.prototype.isTest = function () {
        console.log(this.$service.getUsers());
        stop();
        // return this.$service.getUsers();
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/material-component/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/material-component/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.test_value = 'hello)))';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url + '/testss').subscribe(function (res) {
            console.log(res);
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=material-component-material-module.js.map