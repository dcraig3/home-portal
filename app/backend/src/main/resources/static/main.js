(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _print_view_print_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./print-view/print-view.component */ "./src/app/print-view/print-view.component.ts");






var routes = [
    {
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
    },
    {
        path: 'print/:id',
        component: _print_view_print_view_component__WEBPACK_IMPORTED_MODULE_3__["PrintViewComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/__ivy_ngcc__/fesm5/ng-snotify.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ng-snotify");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./side-panel/side-panel.component */ "./src/app/side-panel/side-panel.component.ts");
/* harmony import */ var _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-item/create-item.component */ "./src/app/create-item/create-item.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/radio.js");
/* harmony import */ var _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./detail-view/detail-view.component */ "./src/app/detail-view/detail-view.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/__ivy_ngcc__/fesm5/ng-snotify.js");
/* harmony import */ var _print_view_print_view_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./print-view/print-view.component */ "./src/app/print-view/print-view.component.ts");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm5/techiediaries-ngx-qrcode.js");









// Angular Materials



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            {
                provide: 'SnotifyToastConfig',
                useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_24__["ToastDefaults"]
            },
            ng_snotify__WEBPACK_IMPORTED_MODULE_24__["SnotifyService"],
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOptionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_24__["SnotifyModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_26__["NgxQRCodeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
        _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_14__["SidePanelComponent"],
        _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_15__["CreateItemComponent"],
        _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_22__["DetailViewComponent"],
        _print_view_print_view_component__WEBPACK_IMPORTED_MODULE_25__["PrintViewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOptionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        ng_snotify__WEBPACK_IMPORTED_MODULE_24__["SnotifyModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_26__["NgxQRCodeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
                    _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_14__["SidePanelComponent"],
                    _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_15__["CreateItemComponent"],
                    _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_22__["DetailViewComponent"],
                    _print_view_print_view_component__WEBPACK_IMPORTED_MODULE_25__["PrintViewComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOptionModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    ng_snotify__WEBPACK_IMPORTED_MODULE_24__["SnotifyModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_26__["NgxQRCodeModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
                ],
                providers: [
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    {
                        provide: 'SnotifyToastConfig',
                        useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_24__["ToastDefaults"]
                    },
                    ng_snotify__WEBPACK_IMPORTED_MODULE_24__["SnotifyService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/create-item/create-item.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-item/create-item.component.ts ***!
  \******************************************************/
/*! exports provided: CreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateItemComponent", function() { return CreateItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_ref_codes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ref-codes.service */ "./src/app/services/ref-codes.service.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/radio.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/datepicker.js");












function CreateItemComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_div_9_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.newRoom = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateItemComponent_div_9_Template_img_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.saveSpace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Create a new room or space inside of ", ctx_r94.activeRoom.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r94.newRoom);
} }
function CreateItemComponent_div_10_div_43_Template(rf, ctx) { if (rf & 1) {
    var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateItemComponent_div_10_div_43_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r103.setimage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateItemComponent_div_10_div_43_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r102.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateItemComponent_div_10_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r101.imageData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CreateItemComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_div_10_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.item.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_div_10_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.item.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-datepicker", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Model: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_div_10_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.item.model = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Serial: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_div_10_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.item.serial = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_div_10_Template_textarea_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.item.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Notes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_div_10_Template_textarea_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.item.notes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CreateItemComponent_div_10_div_43_Template, 4, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CreateItemComponent_div_10_div_44_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateItemComponent_div_10_Template_img_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.saveItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r95.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r99)("ngModel", ctx_r95.item.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r95.item.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r95.item.serial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r95.item.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r95.item.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r95.imageData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r95.imageData);
} }
var CreateItemComponent = /** @class */ (function () {
    function CreateItemComponent(refCodeService, itemService, dialogRef, modalService) {
        this.refCodeService = refCodeService;
        this.itemService = itemService;
        this.dialogRef = dialogRef;
        this.modalService = modalService;
        this.item = { image: null, imgMime: '', name: '', model: '', serial: '', date: null, description: '', notes: '', refCode: null };
        this.file = null;
    }
    CreateItemComponent.prototype.ngOnInit = function () {
    };
    CreateItemComponent.prototype.setObject = function (itemOrRoom) {
        this.itemOrRoom = itemOrRoom;
    };
    CreateItemComponent.prototype.setimage = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            this.file = event.target.files[0];
            reader.readAsDataURL(this.file);
            reader.onload = function () {
                _this.formData = new FormData();
                _this.formData.append('file', _this.file);
                _this.imageData = reader.result;
            };
        }
    };
    CreateItemComponent.prototype.uploadImage = function (id) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = function () {
            var formData = new FormData();
            formData.append('file', _this.file);
            _this.itemService.uploadImage(id, formData).toPromise().then(function (res) {
                _this.modalService.dismissAll("refresh");
            });
        };
    };
    CreateItemComponent.prototype.saveItem = function () {
        var _this = this;
        if (this.file) {
            this.item.imgMime = this.file.type;
        }
        this.item.refCode = this.activeRoom;
        this.itemService.createItem(this.item).toPromise().then(function (res) {
            var newItem = res;
            if (_this.file != null) {
                _this.uploadImage(newItem.id);
            }
            else {
                _this.modalService.dismissAll("refresh");
            }
        });
    };
    CreateItemComponent.prototype.saveSpace = function () {
        var _this = this;
        var refCode = { name: this.newRoom, parentRefCode: this.activeRoom, parentId: this.activeRoom.id };
        this.refCodeService.newRefCode(refCode).toPromise().then(function (res) {
            _this.modalService.dismissAll("refresh");
        });
    };
    CreateItemComponent.ɵfac = function CreateItemComponent_Factory(t) { return new (t || CreateItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ref_codes_service__WEBPACK_IMPORTED_MODULE_1__["RefCodesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
    CreateItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateItemComponent, selectors: [["app-create-item"]], inputs: { activeRoom: "activeRoom" }, decls: 11, vars: 2, consts: [[2, "margin", "2em"], ["aria-label", "Select an option"], ["value", "1", 3, "click"], ["value", "2", 3, "click"], [4, "ngIf"], ["class", "grid-container", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "type", "text", "name", "Title", 3, "ngModel", "ngModelChange"], ["src", "../../assets/icons/save-solid.svg", 1, "saveButton", 2, "margin-left", "95%", 3, "click"], [1, "grid-container"], [1, "textInfo"], [1, "singleTextItem"], ["appearance", "outline", 1, "formTextFieldArea"], ["matInput", "", "type", "text", "name", "Title", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["appearance", "outline", 1, "formTextArea"], [1, "imageInfo"], ["class", "itemImage", 4, "ngIf"], ["src", "../../assets/icons/save-solid.svg", 1, "saveButton", 3, "click"], [1, "itemImage"], ["type", "file", "onclick", "this.value = null", 2, "display", "none", 3, "change"], ["file", ""], ["src", "../../assets/icons/image-regular.svg", 3, "click"], [2, "max-width", "100%", 3, "src"]], template: function CreateItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select item to add");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-group", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateItemComponent_Template_mat_radio_button_click_5_listener() { return ctx.setObject("room"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Space");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateItemComponent_Template_mat_radio_button_click_7_listener() { return ctx.setObject("item"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateItemComponent_div_9_Template, 10, 2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateItemComponent_div_10_Template, 46, 10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemOrRoom == "room");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemOrRoom == "item");
        } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"]], styles: [".textInfo[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 3;\n}\n\n.imageInfo[_ngcontent-%COMP%] {\n  grid-column-start: 3;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 3;\n}\n\n.saveButton[_ngcontent-%COMP%] {\n  grid-column-start: 3;\n  grid-column-end: 3;\n  grid-row-start: 3;\n  grid-row-end: 3;\n  width: 25px;\n  margin-left: auto;\n  margin-right: 5%;\n}\n\n.saveButton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.5fr 0.5fr 1fr;\n  grid-template-rows: auto auto auto;\n  grid-gap: 10px;\n  padding: 10px;\n}\n\n  .formTextFieldArea .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n  padding: 0px !important;\n  border: 0px;\n  margin: auto;\n  padding-top: 1% !important;\n}\n\n  .formTextFieldArea .mat-form-field-wrapper .mat-form-field-flex {\n  height: 30px;\n  margin: auto;\n}\n\n  .cdk-overlay-container {\n  z-index: 2000;\n}\n\n  .formTextFieldArea .mat-form-field-wrapper {\n  margin: 0px;\n  padding: 0px;\n}\n\n  .formTextArea .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n  padding: 0px !important;\n  border: 0px;\n  margin: auto;\n  padding-top: 2% !important;\n  height: 100%;\n  padding-bottom: 1% !important;\n}\n\n  .formTextArea .mat-form-field-wrapper .mat-form-field-flex {\n  height: 100%;\n  margin: auto;\n}\n\n  .formTextArea .mat-form-field-wrapper {\n  margin: 0px;\n  padding: 0px;\n  height: 7em;\n}\n\n.formTextArea[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n  .formTextArea .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix textarea {\n  height: 100%;\n}\n\n.singleTextItem[_ngcontent-%COMP%] {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.singleTextItem[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.singleTextItem[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 1em;\n  margin-bottom: auto;\n  margin-top: 0.5em;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #000000;\n}\n\n.itemImage[_ngcontent-%COMP%] {\n  margin: 3em auto;\n  width: 45%;\n}\n\n.itemImage[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.imageInfo[_ngcontent-%COMP%] {\n  width: 90%;\n  height: auto;\n  margin: auto;\n  border: solid 1px #000;\n  border-radius: 10px;\n}\n\n.mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWl0ZW0vQzpcXFVzZXJzXFxBbGR1aW5cXERvY3VtZW50c1xcR2l0aHViXFxob21lLXBvcnRhbFxcYXBwXFxmcm9udGVuZC9zcmNcXGFwcFxcY3JlYXRlLWl0ZW1cXGNyZWF0ZS1pdGVtLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jcmVhdGUtaXRlbS9jcmVhdGUtaXRlbS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0tGOztBREhBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDTUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExBO0VBQ0UsYUFBQTtBQ1FGOztBRE5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNTSjs7QURQQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ1VKOztBRFJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNXSjs7QURUQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1lKOztBRFBBO0VBQ0ksVUFBQTtBQ1VKOztBRFJBO0VBQ0ksWUFBQTtBQ1dKOztBRFRBO0VBQ0ksK0JBQUE7RUFBQSx3QkFBQTtBQ1lKOztBRFZBO0VBQ0ksV0FBQTtBQ2FKOztBRFhBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDY0o7O0FEWkE7RUFDSSxjQUFBO0FDZUo7O0FEYkE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUNnQko7O0FEZEE7RUFDSSxlQUFBO0FDaUJKOztBRGZBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxnQkFBQTtBQ21CSiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1pdGVtL2NyZWF0ZS1pdGVtLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRJbmZvXHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMVxyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzXHJcbiAgICBncmlkLXJvdy1zdGFydDogMVxyXG4gICAgZ3JpZC1yb3ctZW5kOiAzXHJcblxyXG4uaW1hZ2VJbmZvXHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogM1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzXHJcbiAgICBncmlkLXJvdy1zdGFydDogMVxyXG4gICAgZ3JpZC1yb3ctZW5kOiAzXHJcblxyXG4uc2F2ZUJ1dHRvblxyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDNcclxuICAgIGdyaWQtY29sdW1uLWVuZDogM1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDNcclxuICAgIGdyaWQtcm93LWVuZDogM1xyXG4gICAgd2lkdGg6MjVweFxyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgIG1hcmdpbi1yaWdodDogNSVcclxuXHJcbi5zYXZlQnV0dG9uOmhvdmVyXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuXHJcbi5ncmlkLWNvbnRhaW5lclxyXG4gIGRpc3BsYXk6IGdyaWRcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC41ZnIgLjVmciAxZnJcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvXHJcbiAgZ3JpZC1nYXA6IDEwcHhcclxuICBwYWRkaW5nOiAxMHB4XHJcblxyXG46Om5nLWRlZXAgLmZvcm1UZXh0RmllbGRBcmVhIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1pbmZpeFxyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnRcclxuICAgIGJvcmRlcjogMHB4XHJcbiAgICBtYXJnaW46IGF1dG9cclxuICAgIHBhZGRpbmctdG9wOiAxJSAhaW1wb3J0YW50XHJcblxyXG46Om5nLWRlZXAgLmZvcm1UZXh0RmllbGRBcmVhIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4XHJcbiAgICBoZWlnaHQ6IDMwcHhcclxuICAgIG1hcmdpbjogYXV0b1xyXG5cclxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXJcclxuICB6LWluZGV4OjIwMDBcclxuXHJcbjo6bmctZGVlcCAuZm9ybVRleHRGaWVsZEFyZWEgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJcclxuICAgIG1hcmdpbjogMHB4XHJcbiAgICBwYWRkaW5nOiAwcHhcclxuICAgIFxyXG46Om5nLWRlZXAgLmZvcm1UZXh0QXJlYSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtaW5maXhcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50XHJcbiAgICBib3JkZXI6IDBweFxyXG4gICAgbWFyZ2luOiBhdXRvXHJcbiAgICBwYWRkaW5nLXRvcDogMiUgIWltcG9ydGFudFxyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMSUgIWltcG9ydGFudFxyXG5cclxuOjpuZy1kZWVwIC5mb3JtVGV4dEFyZWEgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXhcclxuICAgIGhlaWdodDogMTAwJVxyXG4gICAgbWFyZ2luOiBhdXRvXHJcblxyXG46Om5nLWRlZXAgLmZvcm1UZXh0QXJlYSAubWF0LWZvcm0tZmllbGQtd3JhcHBlclxyXG4gICAgbWFyZ2luOiAwcHhcclxuICAgIHBhZGRpbmc6IDBweFxyXG4gICAgaGVpZ2h0OiA3ZW1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleFxyXG4vLyAgICAgaGVpZ2h0OiAzNXB4XHJcblxyXG4uZm9ybVRleHRBcmVhXHJcbiAgICB3aWR0aDogNzUlXHJcblxyXG46Om5nLWRlZXAgLmZvcm1UZXh0QXJlYSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtaW5maXggdGV4dGFyZWFcclxuICAgIGhlaWdodDogMTAwJVxyXG5cclxuLnNpbmdsZVRleHRJdGVtXHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnRcclxuICAgICAgICBcclxuLnNpbmdsZVRleHRJdGVtIC5tYXQtZm9ybS1maWVsZFxyXG4gICAgd2lkdGg6IDEwMCVcclxuXHJcbi5zaW5nbGVUZXh0SXRlbSBzcGFuXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW1cclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG9cclxuICAgIG1hcmdpbi10b3A6IC41ZW1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lXHJcbiAgICBjb2xvcjogIzAwMDAwMFxyXG5cclxuLml0ZW1JbWFnZVxyXG4gICAgbWFyZ2luOiAzZW0gYXV0b1xyXG4gICAgd2lkdGg6IDQ1JVxyXG5cclxuLml0ZW1JbWFnZTpob3ZlclxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcblxyXG4uaW1hZ2VJbmZvXHJcbiAgICB3aWR0aDogOTAlXHJcbiAgICBoZWlnaHQ6IGF1dG9cclxuICAgIG1hcmdpbjogYXV0b1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG5cclxuLm1hdC1yYWRpby1idXR0b25cclxuICAgIG1hcmdpbi1sZWZ0OiAyZW0iLCIudGV4dEluZm8ge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1yb3ctZW5kOiAzO1xufVxuXG4uaW1hZ2VJbmZvIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogMztcbn1cblxuLnNhdmVCdXR0b24ge1xuICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICBncmlkLXJvdy1zdGFydDogMztcbiAgZ3JpZC1yb3ctZW5kOiAzO1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5zYXZlQnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDAuNWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAuZm9ybVRleHRGaWVsZEFyZWEgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxJSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmZvcm1UZXh0RmllbGRBcmVhIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMjAwMDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtVGV4dEZpZWxkQXJlYSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbjo6bmctZGVlcCAuZm9ybVRleHRBcmVhIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMiUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMSUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtVGV4dEFyZWEgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuOjpuZy1kZWVwIC5mb3JtVGV4dEFyZWEgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDdlbTtcbn1cblxuLmZvcm1UZXh0QXJlYSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbjo6bmctZGVlcCAuZm9ybVRleHRBcmVhIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpbmdsZVRleHRJdGVtIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4uc2luZ2xlVGV4dEl0ZW0gLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaW5nbGVUZXh0SXRlbSBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLml0ZW1JbWFnZSB7XG4gIG1hcmdpbjogM2VtIGF1dG87XG4gIHdpZHRoOiA0NSU7XG59XG5cbi5pdGVtSW1hZ2U6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZUluZm8ge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMmVtO1xufSJdfQ== */"] });
    return CreateItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-item',
                templateUrl: './create-item.component.html',
                styleUrls: ['./create-item.component.sass']
            }]
    }], function () { return [{ type: _services_ref_codes_service__WEBPACK_IMPORTED_MODULE_1__["RefCodesService"] }, { type: _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }]; }, { activeRoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/detail-view/detail-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/detail-view/detail-view.component.ts ***!
  \******************************************************/
/*! exports provided: DetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewComponent", function() { return DetailViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/__ivy_ngcc__/fesm5/ng-snotify.js");
/* harmony import */ var _services_ref_codes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ref-codes.service */ "./src/app/services/ref-codes.service.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_documents_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/documents.service */ "./src/app/services/documents.service.ts");
/* harmony import */ var _services_links_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/links.service */ "./src/app/services/links.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/datepicker.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");





















function DetailViewComponent_div_0_img_7_Template(rf, ctx) { if (rf & 1) {
    var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_img_7_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r115.click()(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetailViewComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetailViewComponent_div_0_div_8_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r133); var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r132.setimage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_8_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r133); var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r131.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetailViewComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Model Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Serial Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Date Purchased: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Location: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_10_Template_img_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r137); var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r136.toggleEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "a", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_10_Template_img_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r137); var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30); return _r135.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r118.selectedItem.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r118.selectedItem.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r118.selectedItem.serial);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 6, ctx_r118.selectedItem.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r118.selectedItem.refCode.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/#/print/", ctx_r118.selectedItem.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DetailViewComponent_div_0_div_11_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var r_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", r_r142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r142.name);
} }
function DetailViewComponent_div_0_div_11_mat_spinner_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 43);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 20);
} }
function DetailViewComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetailViewComponent_div_0_div_11_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144); var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r143.selectedItem.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Model Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetailViewComponent_div_0_div_11_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144); var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r145.selectedItem.model = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Serial Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetailViewComponent_div_0_div_11_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144); var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r146.selectedItem.serial = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetailViewComponent_div_0_div_11_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144); var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r147.selectedItem.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-datepicker-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-datepicker", null, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Location: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetailViewComponent_div_0_div_11_Template_mat_select_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144); var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r148.selectedItem.refCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DetailViewComponent_div_0_div_11_mat_option_29_Template, 2, 2, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, DetailViewComponent_div_0_div_11_mat_spinner_31_Template, 1, 1, "mat-spinner", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_11_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144); var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r149.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_11_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144); var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r150.resetFields(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_11_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144); var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r151.itemDeleteWarn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
    var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r119.selectedItem.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r119.selectedItem.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r119.selectedItem.serial);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r139)("ngModel", ctx_r119.selectedItem.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r119.selectedItem.refCode.name)("ngModel", ctx_r119.selectedItem.refCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r119.refCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r119.makingChanges);
} }
function DetailViewComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r120.selectedItem.description);
} }
function DetailViewComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetailViewComponent_div_0_div_14_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r153); var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r152.selectedItem.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r121.selectedItem.description);
} }
function DetailViewComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Notes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r122.selectedItem.notes);
} }
function DetailViewComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Notes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetailViewComponent_div_0_div_17_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r155); var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r154.selectedItem.notes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r123.selectedItem.notes);
} }
function DetailViewComponent_div_0_div_22_img_4_Template(rf, ctx) { if (rf & 1) {
    var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_22_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r160); var d_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r158.removeDocumentWarn(d_r156[0]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetailViewComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    var _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_22_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r162); var d_r156 = ctx.$implicit; var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r161.downloadDocument(d_r156[0]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DetailViewComponent_div_0_div_22_img_4_Template, 1, 0, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_22_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r162); var d_r156 = ctx.$implicit; var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r163.downloadDocument(d_r156[0]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var d_r156 = ctx.$implicit;
    var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r124.editingItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r156[1]);
} }
function DetailViewComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    var _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_23_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r165); var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r164.downloadZip(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_23_Template_p_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r165); var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r166.downloadZip(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "All files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetailViewComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    var _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetailViewComponent_div_0_div_24_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r169); var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r168.uploadDocument($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_24_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r169); var _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r167.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "New Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetailViewComponent_div_0_ul_29_img_2_Template(rf, ctx) { if (rf & 1) {
    var _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_ul_29_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r175); var l_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r173.removeLinkWarning(l_r171.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetailViewComponent_div_0_ul_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DetailViewComponent_div_0_ul_29_img_2_Template, 1, 0, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var l_r171 = ctx.$implicit;
    var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r127.editingItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", l_r171.linkAddress, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](l_r171.linkName);
} }
function DetailViewComponent_div_0_div_30_div_7_ul_1_Template(rf, ctx) { if (rf & 1) {
    var _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Link Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "textarea", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetailViewComponent_div_0_div_30_div_7_ul_1_Template_textarea_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181); var l_r178 = ctx.$implicit; return l_r178.linkName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Link URL: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "textarea", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetailViewComponent_div_0_div_30_div_7_ul_1_Template_textarea_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181); var l_r178 = ctx.$implicit; return l_r178.linkAddress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_30_div_7_ul_1_Template_img_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181); var i_r179 = ctx.index; var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r183.saveLinks(i_r179); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_30_div_7_ul_1_Template_img_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181); var i_r179 = ctx.index; var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r184.removeLinkBuffer(i_r179); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var l_r178 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", l_r178.linkName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", l_r178.linkAddress);
} }
function DetailViewComponent_div_0_div_30_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailViewComponent_div_0_div_30_div_7_ul_1_Template, 13, 2, "ul", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r176.newLinksArray);
} }
function DetailViewComponent_div_0_div_30_Template(rf, ctx) { if (rf & 1) {
    var _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailViewComponent_div_0_div_30_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r186); var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r185.addNewLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "New Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DetailViewComponent_div_0_div_30_div_7_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r128.newLinksArray != null);
} }
function DetailViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetailViewComponent_div_0_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188); var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r187.setimage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DetailViewComponent_div_0_img_7_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DetailViewComponent_div_0_div_8_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DetailViewComponent_div_0_div_10_Template, 32, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DetailViewComponent_div_0_div_11_Template, 40, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DetailViewComponent_div_0_div_13_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DetailViewComponent_div_0_div_14_Template, 5, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DetailViewComponent_div_0_div_16_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DetailViewComponent_div_0_div_17_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Documents:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DetailViewComponent_div_0_div_22_Template, 7, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DetailViewComponent_div_0_div_23_Template, 6, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DetailViewComponent_div_0_div_24_Template, 7, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Links:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DetailViewComponent_div_0_ul_29_Template, 5, 3, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, DetailViewComponent_div_0_div_30_Template, 8, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "data:image/", ctx_r114.selectedItem.imgMime, ";base64,", ctx_r114.selectedItem.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r114.editingItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r114.selectedItem.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r114.editingItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r114.editingItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r114.editingItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r114.editingItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r114.editingItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r114.editingItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r114.documentsArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r114.documentsArray == null ? null : ctx_r114.documentsArray.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r114.editingItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r114.linkArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r114.editingItem);
} }
var DetailViewComponent = /** @class */ (function () {
    function DetailViewComponent(refCodeService, itemService, documentService, linksService, snotifyService, modalService, router) {
        this.refCodeService = refCodeService;
        this.itemService = itemService;
        this.documentService = documentService;
        this.linksService = linksService;
        this.snotifyService = snotifyService;
        this.modalService = modalService;
        this.router = router;
        this.makingChanges = false;
        this.newLinksArray = [];
    }
    DetailViewComponent.prototype.ngOnInit = function () {
        console.log(this.selectedItem);
        this.getDocumentList();
        this.getItemLinks();
        this.getAllRefCodes();
    };
    DetailViewComponent.prototype.getAllRefCodes = function () {
        var _this = this;
        this.refCodeService.getAllRefCodes().toPromise().then(function (res) {
            _this.refCodes = res;
            // console.log(this.refCodes);
        });
    };
    DetailViewComponent.prototype.toggleEdit = function () {
        this.editingItem = !this.editingItem;
    };
    DetailViewComponent.prototype.resetFields = function () {
        var _this = this;
        this.makingChanges = true;
        // console.log(this.selectedItem);
        this.itemService.getItemById(this.selectedItem.id).toPromise().then(function (results) {
            _this.toggleEdit();
            _this.selectedItem = results;
            _this.makingChanges = false;
        });
    };
    DetailViewComponent.prototype.saveChanges = function () {
        var _this = this;
        this.makingChanges = true;
        // console.log(this.selectedItem);
        this.itemService.updateItem(this.selectedItem).toPromise().then(function (res) {
            _this.selectedItem = res;
            _this.makingChanges = false;
            _this.toggleEdit();
        });
    };
    DetailViewComponent.prototype.getDocumentList = function () {
        var _this = this;
        // console.log(this.selectedItem.id);
        this.documentService.getDocumentList(this.selectedItem.id).subscribe(function (res) {
            // console.log(res[0]);
            _this.documentsArray = res;
            console.log(res);
        });
    };
    DetailViewComponent.prototype.uploadDocument = function (event) {
        var _this = this;
        var reader = new FileReader();
        var file = event.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = function () {
            var formData = new FormData();
            formData.append('file', file);
            // console.log(this.selectedItem);
            _this.documentService.uploadDocument(_this.selectedItem.id, formData).toPromise().then(function (res) {
                _this.getDocumentList();
            });
        };
    };
    DetailViewComponent.prototype.downloadDocument = function (attId) {
        var _this = this;
        if (!this.makingChanges) {
            this.documentService.downloadDocument(attId).toPromise().then(function (res) {
                _this.saveToFileSystem(res);
            });
        }
    };
    DetailViewComponent.prototype.downloadZip = function () {
        var _this = this;
        this.documentService.downloadAllAsZip(this.selectedItem.id).toPromise().then(function (res) {
            _this.saveToFileSystem(res);
        });
    };
    DetailViewComponent.prototype.saveToFileSystem = function (response) {
        var contentDispositionHeader = response.headers.get('Content-Disposition');
        var parts = contentDispositionHeader.split(';');
        var filename = parts[1].split('=')[1];
        var blob = new Blob([response.body], { type: 'text/plain' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, filename);
    };
    DetailViewComponent.prototype.removeDocumentWarn = function (documentId) {
        var _this = this;
        this.snotifyService.warning('Are you sure you want to remove this file?', {
            timeout: 100000,
            closeOnClick: true,
            buttons: [
                { text: 'Yes', action: function () { return _this.removeDocument(documentId); }, bold: true },
                { text: 'No', action: null },
            ],
            showProgressBar: false,
            pauseOnHover: false,
            position: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyPosition"].centerBottom,
        });
    };
    DetailViewComponent.prototype.removeDocument = function (documentId) {
        var _this = this;
        this.documentService.deleteDocument(documentId).toPromise().then(function (res) {
            _this.getDocumentList();
        });
    };
    DetailViewComponent.prototype.getItemLinks = function () {
        var _this = this;
        this.linksService.getByItemId(this.selectedItem.id).subscribe(function (res) {
            _this.linkArray = res;
        });
    };
    DetailViewComponent.prototype.addNewLink = function () {
        this.newLinksArray[this.newLinksArray.length] = { linkName: '', linkAddress: '', linkItem: this.selectedItem.id };
        console.log(this.newLinksArray);
    };
    DetailViewComponent.prototype.applyLinks = function (i) {
        console.log(i, this.newLinksArray[i]);
    };
    DetailViewComponent.prototype.removeLinkWarning = function (linkId) {
        var _this = this;
        this.snotifyService.warning('Are you sure you want to remove this file?', {
            timeout: 100000,
            closeOnClick: true,
            buttons: [
                { text: 'Yes', action: function () { return _this.removeLink(linkId); }, bold: true },
                { text: 'No', action: null },
            ],
            showProgressBar: false,
            pauseOnHover: false,
            position: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyPosition"].centerBottom,
        });
    };
    DetailViewComponent.prototype.removeLink = function (linkId) {
        var _this = this;
        this.linksService.removeLink(linkId).toPromise().then(function (res) {
            _this.getItemLinks();
        });
    };
    DetailViewComponent.prototype.removeLinkBuffer = function (i) {
        if (this.newLinksArray.length === 1) {
            this.newLinksArray = [];
        }
        else {
            delete this.newLinksArray[i];
        }
        console.log(this.newLinksArray);
    };
    DetailViewComponent.prototype.saveLinks = function (i) {
        var _this = this;
        console.log(this.newLinksArray[i]);
        this.linksService.saveLink(this.newLinksArray[i]).subscribe(function (res) {
            _this.removeLinkBuffer(i);
            _this.getItemLinks();
        });
    };
    DetailViewComponent.prototype.itemDeleteWarn = function () {
        var _this = this;
        this.snotifyService.warning('Are you sure you want to remove this item?', {
            timeout: 100000,
            closeOnClick: true,
            buttons: [
                { text: 'Yes', action: function () { return _this.removeItemChildren(); }, bold: true },
                { text: 'No', action: null },
            ],
            showProgressBar: false,
            pauseOnHover: false,
            position: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyPosition"].centerBottom,
        });
    };
    DetailViewComponent.prototype.removeItemChildren = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var confirmDone, _loop_1, this_1, i, _loop_2, this_2, l;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmDone = 0;
                        _loop_1 = function (i) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.documentService.deleteDocument(this_1.documentsArray[i][0]).toPromise().then(function (doc) {
                                            if (_this.documentsArray.length - 1 === i) {
                                                if (confirmDone === 1) {
                                                    _this.removeItem();
                                                }
                                                else if (confirmDone === 0 && _this.linkArray.length === 0) {
                                                    _this.removeItem();
                                                }
                                                else {
                                                    confirmDone = confirmDone++;
                                                }
                                            }
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(this.documentsArray.length > i)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        _loop_2 = function (l) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_2.linksService.removeLink(this_2.linkArray[l].id).toPromise().then(function (link) {
                                            if (_this.linkArray.length - 1 === l) {
                                                if (confirmDone === 1) {
                                                    _this.removeItem();
                                                }
                                                else if (confirmDone === 0 && _this.documentsArray.length === 0) {
                                                    _this.removeItem();
                                                }
                                                else {
                                                    confirmDone = confirmDone++;
                                                }
                                            }
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        l = 0;
                        _a.label = 5;
                    case 5:
                        if (!(this.linkArray.length > l)) return [3 /*break*/, 8];
                        return [5 /*yield**/, _loop_2(l)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        l++;
                        return [3 /*break*/, 5];
                    case 8:
                        if (this.documentsArray.length === 0 && this.linkArray.length === 0) {
                            this.removeItem();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailViewComponent.prototype.removeItem = function () {
        var _this = this;
        this.itemService.deleteItem(this.selectedItem.id).subscribe(function (item) {
            _this.modalService.dismissAll("refresh");
            _this.snotifyService.success('Item removed', {
                position: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyPosition"].centerBottom,
                closeOnClick: true,
                timeout: 2000,
            });
        });
    };
    DetailViewComponent.prototype.setimage = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                var formData = new FormData();
                formData.append('file', file_1);
                _this.itemService.uploadImage(_this.selectedItem.id, formData).toPromise().then(function (res) {
                    // const results = res as any;
                    _this.selectedItem.image = res.image;
                    _this.selectedItem.imgMime = res.imgMime;
                });
            };
        }
    };
    DetailViewComponent.ɵfac = function DetailViewComponent_Factory(t) { return new (t || DetailViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ref_codes_service__WEBPACK_IMPORTED_MODULE_4__["RefCodesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_documents_service__WEBPACK_IMPORTED_MODULE_6__["DocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_links_service__WEBPACK_IMPORTED_MODULE_7__["LinksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
    DetailViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailViewComponent, selectors: [["app-detail-view"]], inputs: { selectedItem: "selectedItem" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "grid-container"], [1, "grid-image"], [1, "divImg"], [3, "src"], ["type", "file", "onclick", "this.value = null", 2, "display", "none", 3, "change"], ["file", ""], ["src", "../../assets/icons/edit-regular.svg", "class", "editImageUpload", 3, "click", 4, "ngIf"], ["class", "divImg", 4, "ngIf"], [1, "grid-info"], ["class", "infoLayout", 4, "ngIf"], [1, "grid-description"], ["style", "height:100%", 4, "ngIf"], ["class", "descriptionEdit", 4, "ngIf"], [1, "grid-notes"], ["class", "notesEdit", 4, "ngIf"], [1, "grid-documents"], [1, "fileContainer"], ["class", "documentIcons", 4, "ngFor", "ngForOf"], ["class", "documentIcons", 4, "ngIf"], [1, "grid-links"], [1, "linksContainer"], [4, "ngFor", "ngForOf"], ["class", "linkIcons", 4, "ngIf"], ["src", "../../assets/icons/edit-regular.svg", 1, "editImageUpload", 3, "click"], ["src", "../../assets/icons/plus-solid.svg", 1, "NoImageFound", 3, "click"], [1, "infoLayout"], [1, "editPrintButton"], ["src", "../../assets/icons/edit-regular.svg", 2, "height", "1em", "margin-right", "5px", 3, "click"], ["target", "_blank", 2, "display", "none", 3, "href"], ["print", ""], ["src", "../../assets/icons/print-solid.svg", 2, "height", "1em", 3, "click"], ["appearance", "outline"], ["matInput", "", "type", "text", "name", "Title", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "Title", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["name", "Title", 3, "placeholder", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "editButton"], [3, "diameter", 4, "ngIf"], ["mat-button", "", 3, "click"], [3, "value"], [3, "diameter"], [2, "height", "100%"], [1, "descriptionEdit"], ["appearance", "outline", 1, "formTextAreaDetail"], [1, "notesEdit"], [1, "documentIcons"], [1, "selectorDownloadDocument"], [2, "display", "inline-flex", "width", "100%"], ["src", "../../assets/icons/file-regular.svg", 3, "click"], ["src", "../../assets/icons/times-solid-red.svg", "style", "height:1em;margin: 0px;", 3, "click", 4, "ngIf"], [3, "click"], ["src", "../../assets/icons/times-solid-red.svg", 2, "height", "1em", "margin", "0px", 3, "click"], ["src", "../../assets/icons/file-archive-solid.svg", 3, "click"], [1, "selectorUploadDocument", 3, "click"], ["src", "../../assets/icons/plus-solid.svg"], [1, "linkText"], ["src", "../../assets/icons/times-solid-red.svg", "style", "height:1em;margin: 0px;margin-right: 5px;", 3, "click", 4, "ngIf"], [3, "href"], ["src", "../../assets/icons/times-solid-red.svg", 2, "height", "1em", "margin", "0px", "margin-right", "5px", 3, "click"], [1, "linkIcons"], [1, "selectorCreateLink", 3, "click"], ["class", "newLink", 4, "ngFor", "ngForOf"], [1, "newLink"], [1, "newLinkInformation"], ["matInput", "", "type", "text", "name", "Title", 1, "formTextAreaDetail", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 2, "margin-right", "2em"], ["src", "../../assets/icons/check-solid.svg", 2, "height", "2em", "margin-bottom", "2%", 3, "click"], ["src", "../../assets/icons/times-solid.svg", 2, "height", "2em", "margin-bottom", "2%", 3, "click"]], template: function DetailViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DetailViewComponent_div_0_Template, 31, 15, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItem.id != null);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 0.5fr 0.75fr 1.5fr 1.5fr;\n  grid-gap: 10px;\n  padding: 10px;\n}\n\n.grid-image[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n.grid-image[_ngcontent-%COMP%]   .divImg[_ngcontent-%COMP%] {\n  max-width: 75%;\n  margin: auto;\n}\n\n.grid-image[_ngcontent-%COMP%]   .divImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 1px solid #000000;\n  border-radius: 10px;\n  margin-bottom: 5%;\n  max-height: 25em;\n  max-width: 35em;\n}\n\n.grid-info[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 2;\n}\n\n.editButton[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 10%;\n  display: inherit;\n}\n\n.editPrintButton[_ngcontent-%COMP%] {\n  height: 1em;\n  margin-left: auto;\n  margin-right: 10%;\n  display: inherit;\n}\n\n.editPrintButton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.editImageUpload[_ngcontent-%COMP%] {\n  height: 1em;\n  position: absolute;\n  left: 45%;\n}\n\n.editImageUpload[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.editButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #039be5;\n  height: 9%;\n  color: #ffffff;\n  margin-left: 2%;\n}\n\n.editButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n\n.editButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n  .cdk-overlay-container {\n  z-index: 2000;\n}\n\n.infoLayout[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n}\n\n.infoLayout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.infoLayout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.grid-description[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n\n.grid-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 80%;\n  border: 1px solid #000000;\n  border-radius: 10px;\n  padding: 10px;\n  width: 95%;\n  overflow-y: scroll;\n}\n\n.descriptionEdit[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n  .descriptionEdit .mat-form-field {\n  width: 100%;\n  height: 87%;\n}\n\n  .descriptionEdit .mat-form-field .mat-form-field-wrapper {\n  height: 100%;\n}\n\n  .descriptionEdit .mat-form-field .mat-form-field-wrapper .mat-form-field-flex {\n  height: 100%;\n}\n\n  .descriptionEdit .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n  height: 100%;\n  padding: 0px !important;\n}\n\n  .descriptionEdit .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-input-element {\n  height: 100%;\n}\n\n.grid-notes[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n\n.grid-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 80%;\n  border: 1px solid #000000;\n  border-radius: 10px;\n  padding: 10px;\n  width: 95%;\n  overflow-y: scroll;\n}\n\n.notesEdit[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n  .notesEdit .mat-form-field {\n  width: 100%;\n  height: 87%;\n}\n\n  .notesEdit .mat-form-field .mat-form-field-wrapper {\n  height: 100%;\n}\n\n  .notesEdit .mat-form-field .mat-form-field-wrapper .mat-form-field-flex {\n  height: 100%;\n}\n\n  .notesEdit .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n  height: 100%;\n  padding: 0px !important;\n}\n\n  .notesEdit .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-input-element {\n  height: 100%;\n}\n\n.grid-documents[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 3;\n  grid-row-end: 4;\n}\n\n.fileContainer[_ngcontent-%COMP%] {\n  width: 98%;\n  height: 90%;\n  border: 1px solid #000000;\n  border-radius: 10px;\n  overflow: hidden;\n  overflow-y: scroll;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 1em;\n}\n\n.documentIcons[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 45%;\n  margin-left: 2%;\n}\n\n.documentIcons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: 25%;\n}\n\n.documentIcons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n  text-align: center;\n}\n\n.selectorUploadDocument[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  width: 100%;\n}\n\n.selectorDownloadDocument[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.selectorDownloadDocument[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .selectorDownloadDocument[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.grid-links[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 4;\n  grid-row-end: 5;\n}\n\n.linksContainer[_ngcontent-%COMP%] {\n  width: 98%;\n  height: 90%;\n  border: 1px solid #000000;\n  border-radius: 10px;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 10px;\n}\n\n.linkText[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.linkText[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.linkText[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.selectorCreateLink[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.selectorCreateLink[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 5px;\n}\n\n.linkIcons[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.linkIcons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10px;\n  margin-left: 5px;\n}\n\n.newLink[_ngcontent-%COMP%] {\n  margin-left: 2em;\n}\n\n  .newLinkInformation .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n  padding: 0px;\n  padding-bottom: 3%;\n}\n\n  .mat-form-field-outline {\n  color: #000000 !important;\n}\n\n  .mat-input-element:disabled {\n  color: #000000 !important;\n}\n\n  .formTextArea .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n  padding: 0px !important;\n  border: 0px;\n  margin: auto;\n  padding-top: 2% !important;\n  height: 100%;\n  padding-bottom: 1% !important;\n}\n\n  .formTextArea .mat-form-field-wrapper .mat-form-field-flex {\n  height: 100%;\n  margin: auto;\n}\n\n  .formTextArea .mat-form-field-wrapper {\n  margin: 0px;\n  padding: 0px;\n  height: 7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLXZpZXcvQzpcXFVzZXJzXFxBbGR1aW5cXERvY3VtZW50c1xcR2l0aHViXFxob21lLXBvcnRhbFxcYXBwXFxmcm9udGVuZC9zcmNcXGFwcFxcZGV0YWlsLXZpZXdcXGRldGFpbC12aWV3LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBRUkseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNRSjs7QUROQTtFQUNJLGVBQUE7QUNTSjs7QURQQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDVUo7O0FEUkE7RUFDSSxpQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtBQ1lKOztBRFZBO0VBQ0UsYUFBQTtBQ2FGOztBRFhBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ2NKOztBRFpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDZUo7O0FEYkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNnQko7O0FEZEE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDaUJKOztBRGZBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDa0JKOztBRGhCQTtFQUNJLFlBQUE7QUNtQko7O0FEakJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNvQko7O0FEbEJBO0VBQ0ksWUFBQTtBQ3FCSjs7QURuQkE7RUFDSSxZQUFBO0FDc0JKOztBRHBCQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQ3VCSjs7QURyQkE7RUFDSSxZQUFBO0FDd0JKOztBRHRCQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDMEJKOztBRHhCQTtFQUNJLFlBQUE7QUMyQko7O0FEekJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUM0Qko7O0FEMUJBO0VBQ0ksWUFBQTtBQzZCSjs7QUQzQkE7RUFDSSxZQUFBO0FDOEJKOztBRDVCQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQytCSjs7QUQ3QkE7RUFDSSxZQUFBO0FDZ0NKOztBRDlCQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNpQ0o7O0FEL0JBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNrQ0o7O0FEaENBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDbUNKOztBRGpDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ29DSjs7QURsQ0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FDcUNKOztBRG5DQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDc0NKOztBRHBDQTtFQUVJLFdBQUE7QUNzQ0o7O0FEcENBO0VBQ0ksZUFBQTtBQ3VDSjs7QURyQ0E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDd0NKOztBRHRDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDeUNKOztBRHZDQTtFQUNJLGVBQUE7QUMwQ0o7O0FEeENBO0VBQ0ksY0FBQTtBQzJDSjs7QUR6Q0E7RUFDSSxlQUFBO0FDNENKOztBRDFDQTtFQUNJLDBCQUFBO0FDNkNKOztBRDNDQTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7QUM4Q0o7O0FENUNBO0VBQ0ksZUFBQTtBQytDSjs7QUQ3Q0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNnREo7O0FEOUNBO0VBQ0ksZ0JBQUE7QUNpREo7O0FEL0NBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDa0RKOztBRGhEQTtFQUNJLHlCQUFBO0FDbURKOztBRGpEQTtFQUNJLHlCQUFBO0FDb0RKOztBRGxEQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ3FESjs7QURuREE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ3NESjs7QURwREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUN1REoiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lclxyXG4gIGRpc3BsYXk6IGdyaWRcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnJcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IC41ZnIgMC43NWZyIDEuNWZyIDEuNWZyXHJcbiAgZ3JpZC1nYXA6IDEwcHhcclxuICBwYWRkaW5nOiAxMHB4XHJcblxyXG4uZ3JpZC1pbWFnZVxyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDFcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMlxyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDFcclxuICAgIGdyaWQtcm93LWVuZDogMlxyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXhcclxuXHJcbi5ncmlkLWltYWdlIC5kaXZJbWdcclxuICAgIG1heC13aWR0aDogNzUlXHJcbiAgICBtYXJnaW46IGF1dG9cclxuXHJcbi5ncmlkLWltYWdlIC5kaXZJbWcgaW1nXHJcbiAgICAvLyB3aWR0aDogMTAwJVxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNSVcclxuICAgIG1heC1oZWlnaHQ6IDI1ZW1cclxuICAgIG1heC13aWR0aDogMzVlbVxyXG5cclxuLmdyaWQtaW5mb1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDJcclxuICAgIGdyaWQtY29sdW1uLWVuZDogM1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDFcclxuICAgIGdyaWQtcm93LWVuZDogMlxyXG5cclxuLmVkaXRCdXR0b25cclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJVxyXG4gICAgZGlzcGxheTogaW5oZXJpdFxyXG5cclxuLmVkaXRQcmludEJ1dHRvblxyXG4gICAgaGVpZ2h0OiAxZW1cclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJVxyXG4gICAgZGlzcGxheTogaW5oZXJpdFxyXG5cclxuLmVkaXRQcmludEJ1dHRvbjpob3ZlclxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcblxyXG4uZWRpdEltYWdlVXBsb2FkXHJcbiAgICBoZWlnaHQ6MWVtXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIGxlZnQ6IDQ1JVxyXG5cclxuLmVkaXRJbWFnZVVwbG9hZDpob3ZlclxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcblxyXG4uZWRpdEJ1dHRvbiBidXR0b25cclxuICAgIGJhY2tncm91bmQ6ICMwMzliZTVcclxuICAgIGhlaWdodDogOSVcclxuICAgIGNvbG9yOiAjZmZmZmZmXHJcbiAgICBtYXJnaW4tbGVmdDogMiVcclxuXHJcbi5lZGl0QnV0dG9uIGltZ1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW1cclxuXHJcbi5lZGl0QnV0dG9uIGltZzpob3ZlclxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcblxyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lclxyXG4gIHotaW5kZXg6MjAwMFxyXG5cclxuLmluZm9MYXlvdXRcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGhlaWdodDogMTAwJVxyXG5cclxuLmluZm9MYXlvdXQgcFxyXG4gICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICBmb250LXdlaWdodDogNTAwXHJcblxyXG4uaW5mb0xheW91dCBzcGFuXHJcbiAgICBmb250LXNpemU6IDE0cHhcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDBcclxuXHJcbi5ncmlkLWRlc2NyaXB0aW9uXHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMVxyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyXHJcbiAgICBncmlkLXJvdy1zdGFydDogMlxyXG4gICAgZ3JpZC1yb3ctZW5kOiAzXHJcblxyXG4uZ3JpZC1kZXNjcmlwdGlvbiBwXHJcbiAgICBoZWlnaHQ6IDgwJVxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgcGFkZGluZzogMTBweFxyXG4gICAgd2lkdGg6IDk1JSAgICBcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbFxyXG5cclxuLmRlc2NyaXB0aW9uRWRpdFxyXG4gICAgaGVpZ2h0OjEwMCVcclxuXHJcbjo6bmctZGVlcCAuZGVzY3JpcHRpb25FZGl0IC5tYXQtZm9ybS1maWVsZFxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGhlaWdodDogODclXHJcbiAgICBcclxuOjpuZy1kZWVwIC5kZXNjcmlwdGlvbkVkaXQgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyXHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICAgIFxyXG46Om5nLWRlZXAgLmRlc2NyaXB0aW9uRWRpdCAubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXhcclxuICAgIGhlaWdodDogMTAwJVxyXG4gICAgXHJcbjo6bmctZGVlcCAuZGVzY3JpcHRpb25FZGl0IC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtaW5maXhcclxuICAgIGhlaWdodDogMTAwJVxyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnRcclxuICAgIFxyXG46Om5nLWRlZXAgLmRlc2NyaXB0aW9uRWRpdCAubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1mb3JtLWZpZWxkLWluZml4IC5tYXQtaW5wdXQtZWxlbWVudFxyXG4gICAgaGVpZ2h0OiAxMDAlXHJcblxyXG4uZ3JpZC1ub3Rlc1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDJcclxuICAgIGdyaWQtY29sdW1uLWVuZDogM1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDJcclxuICAgIGdyaWQtcm93LWVuZDogM1xyXG4gICAgXHJcbi5ncmlkLW5vdGVzIHBcclxuICAgIGhlaWdodDogODAlXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICB3aWR0aDogOTUlXHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGxcclxuXHJcbi5ub3Rlc0VkaXRcclxuICAgIGhlaWdodDoxMDAlXHJcblxyXG46Om5nLWRlZXAgLm5vdGVzRWRpdCAubWF0LWZvcm0tZmllbGRcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDg3JVxyXG4gICAgXHJcbjo6bmctZGVlcCAubm90ZXNFZGl0IC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlclxyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgICBcclxuOjpuZy1kZWVwIC5ub3Rlc0VkaXQgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICAgIFxyXG46Om5nLWRlZXAgLm5vdGVzRWRpdCAubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1mb3JtLWZpZWxkLWluZml4XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50XHJcbiAgICBcclxuOjpuZy1kZWVwIC5ub3Rlc0VkaXQgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1pbmZpeCAubWF0LWlucHV0LWVsZW1lbnRcclxuICAgIGhlaWdodDogMTAwJVxyXG5cclxuLmdyaWQtZG9jdW1lbnRzXHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMVxyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzXHJcbiAgICBncmlkLXJvdy1zdGFydDogM1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA0XHJcblxyXG4uZmlsZUNvbnRhaW5lclxyXG4gICAgd2lkdGg6IDk4JVxyXG4gICAgaGVpZ2h0OiA5MCVcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgcGFkZGluZzogMWVtXHJcblxyXG4uZG9jdW1lbnRJY29uc1xyXG4gICAgd2lkdGg6IDE1JVxyXG4gICAgaGVpZ2h0OiA0NSVcclxuICAgIG1hcmdpbi1sZWZ0OiAyJVxyXG5cclxuLmRvY3VtZW50SWNvbnMgaW1nXHJcbiAgICB3aWR0aDogNTAlXHJcbiAgICBtYXJnaW4tbGVmdDogMjUlXHJcblxyXG4uZG9jdW1lbnRJY29ucyBwXHJcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZVxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcblxyXG4uc2VsZWN0b3JVcGxvYWREb2N1bWVudDpob3ZlclxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICB3aWR0aDogMTAwJVxyXG5cclxuLnNlbGVjdG9yRG93bmxvYWREb2N1bWVudFxyXG4gICAgLy8gY3Vyc29yOiBwb2ludGVyXHJcbiAgICB3aWR0aDogMTAwJVxyXG5cclxuLnNlbGVjdG9yRG93bmxvYWREb2N1bWVudCBpbWcsIC5zZWxlY3RvckRvd25sb2FkRG9jdW1lbnQgcFxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcblxyXG4uZ3JpZC1saW5rc1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDFcclxuICAgIGdyaWQtY29sdW1uLWVuZDogM1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDRcclxuICAgIGdyaWQtcm93LWVuZDogNVxyXG4gICAgXHJcbi5saW5rc0NvbnRhaW5lclxyXG4gICAgd2lkdGg6IDk4JVxyXG4gICAgaGVpZ2h0OiA5MCVcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbFxyXG4gICAgcGFkZGluZzogMTBweFxyXG5cclxuLmxpbmtUZXh0IGE6aG92ZXJcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG5cclxuLmxpbmtUZXh0IGFcclxuICAgIGNvbG9yOiAjMDAwMDAwXHJcblxyXG4ubGlua1RleHQgaW1nXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuXHJcbi5zZWxlY3RvckNyZWF0ZUxpbms6aG92ZXJcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXHJcblxyXG4uc2VsZWN0b3JDcmVhdGVMaW5rIGltZ1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweFxyXG5cclxuLmxpbmtJY29uc1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcblxyXG4ubGlua0ljb25zIGltZ1xyXG4gICAgaGVpZ2h0OiAxMHB4XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4XHJcblxyXG4ubmV3TGlua1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJlbVxyXG5cclxuOjpuZy1kZWVwIC5uZXdMaW5rSW5mb3JtYXRpb24gLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1mb3JtLWZpZWxkLWluZml4XHJcbiAgICBwYWRkaW5nOiAwcHhcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lXHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkXHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50XHJcblxyXG46Om5nLWRlZXAgLmZvcm1UZXh0QXJlYSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtaW5maXhcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50XHJcbiAgICBib3JkZXI6IDBweFxyXG4gICAgbWFyZ2luOiBhdXRvXHJcbiAgICBwYWRkaW5nLXRvcDogMiUgIWltcG9ydGFudFxyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMSUgIWltcG9ydGFudFxyXG5cclxuOjpuZy1kZWVwIC5mb3JtVGV4dEFyZWEgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXhcclxuICAgIGhlaWdodDogMTAwJVxyXG4gICAgbWFyZ2luOiBhdXRvXHJcblxyXG46Om5nLWRlZXAgLmZvcm1UZXh0QXJlYSAubWF0LWZvcm0tZmllbGQtd3JhcHBlclxyXG4gICAgbWFyZ2luOiAwcHhcclxuICAgIHBhZGRpbmc6IDBweFxyXG4gICAgaGVpZ2h0OiA3ZW0iLCIuZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC43NWZyIDEuNWZyIDEuNWZyO1xuICBncmlkLWdhcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmdyaWQtaW1hZ2Uge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1yb3ctZW5kOiAyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmdyaWQtaW1hZ2UgLmRpdkltZyB7XG4gIG1heC13aWR0aDogNzUlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ncmlkLWltYWdlIC5kaXZJbWcgaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1heC1oZWlnaHQ6IDI1ZW07XG4gIG1heC13aWR0aDogMzVlbTtcbn1cblxuLmdyaWQtaW5mbyB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLXJvdy1lbmQ6IDI7XG59XG5cbi5lZGl0QnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBkaXNwbGF5OiBpbmhlcml0O1xufVxuXG4uZWRpdFByaW50QnV0dG9uIHtcbiAgaGVpZ2h0OiAxZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cblxuLmVkaXRQcmludEJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVkaXRJbWFnZVVwbG9hZCB7XG4gIGhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ1JTtcbn1cblxuLmVkaXRJbWFnZVVwbG9hZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVkaXRCdXR0b24gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgaGVpZ2h0OiA5JTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLmVkaXRCdXR0b24gaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi5lZGl0QnV0dG9uIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwO1xufVxuXG4uaW5mb0xheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmluZm9MYXlvdXQgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmluZm9MYXlvdXQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmdyaWQtZGVzY3JpcHRpb24ge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICBncmlkLXJvdy1zdGFydDogMjtcbiAgZ3JpZC1yb3ctZW5kOiAzO1xufVxuXG4uZ3JpZC1kZXNjcmlwdGlvbiBwIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmRlc2NyaXB0aW9uRWRpdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZXNjcmlwdGlvbkVkaXQgLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODclO1xufVxuXG46Om5nLWRlZXAgLmRlc2NyaXB0aW9uRWRpdCAubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVzY3JpcHRpb25FZGl0IC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZXNjcmlwdGlvbkVkaXQgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZGVzY3JpcHRpb25FZGl0IC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtaW5maXggLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ3JpZC1ub3RlcyB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xuICBncmlkLXJvdy1lbmQ6IDM7XG59XG5cbi5ncmlkLW5vdGVzIHAge1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubm90ZXNFZGl0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLm5vdGVzRWRpdCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NyU7XG59XG5cbjo6bmctZGVlcCAubm90ZXNFZGl0IC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5ub3Rlc0VkaXQgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLm5vdGVzRWRpdCAubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5ub3Rlc0VkaXQgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1pbmZpeCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ncmlkLWRvY3VtZW50cyB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xuICBncmlkLXJvdy1lbmQ6IDQ7XG59XG5cbi5maWxlQ29udGFpbmVyIHtcbiAgd2lkdGg6IDk4JTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4uZG9jdW1lbnRJY29ucyB7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogNDUlO1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5kb2N1bWVudEljb25zIGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5kb2N1bWVudEljb25zIHAge1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VsZWN0b3JVcGxvYWREb2N1bWVudDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxlY3RvckRvd25sb2FkRG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlbGVjdG9yRG93bmxvYWREb2N1bWVudCBpbWcsIC5zZWxlY3RvckRvd25sb2FkRG9jdW1lbnQgcCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdyaWQtbGlua3Mge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICBncmlkLXJvdy1zdGFydDogNDtcbiAgZ3JpZC1yb3ctZW5kOiA1O1xufVxuXG4ubGlua3NDb250YWluZXIge1xuICB3aWR0aDogOTglO1xuICBoZWlnaHQ6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubGlua1RleHQgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpbmtUZXh0IGEge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmxpbmtUZXh0IGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdG9yQ3JlYXRlTGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2VsZWN0b3JDcmVhdGVMaW5rIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5saW5rSWNvbnMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saW5rSWNvbnMgaW1nIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubmV3TGluayB7XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG59XG5cbjo6bmctZGVlcCAubmV3TGlua0luZm9ybWF0aW9uIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkIHtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtVGV4dEFyZWEgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctdG9wOiAyJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxJSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmZvcm1UZXh0QXJlYSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG46Om5nLWRlZXAgLmZvcm1UZXh0QXJlYSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogN2VtO1xufSJdfQ== */"] });
    return DetailViewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetailViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-detail-view',
                templateUrl: './detail-view.component.html',
                styleUrls: ['./detail-view.component.sass']
            }]
    }], function () { return [{ type: _services_ref_codes_service__WEBPACK_IMPORTED_MODULE_4__["RefCodesService"] }, { type: _services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] }, { type: _services_documents_service__WEBPACK_IMPORTED_MODULE_6__["DocumentsService"] }, { type: _services_links_service__WEBPACK_IMPORTED_MODULE_7__["LinksService"] }, { type: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, { selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _services_ref_codes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ref-codes.service */ "./src/app/services/ref-codes.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../side-panel/side-panel.component */ "./src/app/side-panel/side-panel.component.ts");







var _c0 = ["drawer"];
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(roomService, refCodeService) {
        this.roomService = roomService;
        this.refCodeService = refCodeService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.roomService.setRoom("Home");
        // this.refCodeService.getAllRefCodes().subscribe( res => {
        //   console.log(res);
        // });
    };
    HomepageComponent.prototype.openSideView = function (string) {
        console.log(string);
        this.roomService.setRoom(string);
        this.drawer.toggle();
    };
    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ref_codes_service__WEBPACK_IMPORTED_MODULE_3__["RefCodesService"])); };
    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], viewQuery: function HomepageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])], decls: 19, vars: 0, consts: [[2, "height", "100%"], ["hasBackdrop", "unset", 1, "example-container", 2, "height", "100%"], ["mode", "side", "position", "end", 2, "width", "50%"], ["drawer", ""], ["src", "../../assets/Floor_Plan.png", "width", "891", "height", "775", "usemap", "#image-map", 2, "border", "1px solid #000", "margin", "1em"], ["name", "image-map"], ["alt", "LivingRoom1", "title", "LivingRoom1", "coords", "84,83,631,303", "shape", "rect", 3, "click"], ["alt", "LivingRoom2", "title", "LivingRoom2", "coords", "86,353,362,302", "shape", "rect", 3, "click"], ["alt", "Entryway", "title", "Entryway", "coords", "86,354,369,431", "shape", "rect", 3, "click"], ["alt", "Kitchen", "title", "Kitchen", "coords", "633,84,810,310", "shape", "rect", 3, "click"], ["alt", "BackRoom", "title", "BackRoom", "coords", "370,310,807,431", "shape", "rect", 3, "click"], ["alt", "Bedroom1", "title", "Bedroom1", "coords", "87,437,371,557", "shape", "rect", 3, "click"], ["alt", "Bedroom2", "title", "Bedroom2", "coords", "83,566,369,690", "shape", "rect", 3, "click"], ["alt", "Bedroom3", "title", "Bedroom3", "coords", "511,559,807,688", "shape", "rect", 3, "click"], ["alt", "Bathroom1", "title", "Bathroom1", "coords", "514,437,660,554", "shape", "rect", 3, "click"], ["alt", "Bathroom2", "title", "Bathroom2", "coords", "667,439,806,555", "shape", "rect", 3, "click"], ["alt", "Hallway", "title", "Hallway", "coords", "372,433,512,687", "shape", "rect", 3, "click"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-side-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-drawer-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "map", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "area", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_area_click_8_listener() { return ctx.openSideView("Living Room"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "area", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_area_click_9_listener() { return ctx.openSideView("Living Room"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "area", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_area_click_10_listener() { return ctx.openSideView("Entryway"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "area", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_area_click_11_listener() { return ctx.openSideView("Kitchen"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "area", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_area_click_12_listener() { return ctx.openSideView("Back Room"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "area", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_area_click_13_listener() { return ctx.openSideView("Bedroom1"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "area", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_area_click_14_listener() { return ctx.openSideView("Bedroom2"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "area", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_area_click_15_listener() { return ctx.openSideView("Bedroom3"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "area", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_area_click_16_listener() { return ctx.openSideView("Bathroom1"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "area", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_area_click_17_listener() { return ctx.openSideView("Bathroom2"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "area", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_area_click_18_listener() { return ctx.openSideView("Hallway"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__["SidePanelComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zYXNzIn0= */"] });
    return HomepageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.sass'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]
            }]
    }], function () { return [{ type: _services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"] }, { type: _services_ref_codes_service__WEBPACK_IMPORTED_MODULE_3__["RefCodesService"] }]; }, { drawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['drawer']
        }] }); })();


/***/ }),

/***/ "./src/app/print-view/print-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/print-view/print-view.component.ts ***!
  \****************************************************/
/*! exports provided: PrintViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintViewComponent", function() { return PrintViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm5/techiediaries-ngx-qrcode.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_documents_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/documents.service */ "./src/app/services/documents.service.ts");
/* harmony import */ var _services_links_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/links.service */ "./src/app/services/links.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");









function PrintViewComponent_h3_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Relevant Item Links: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintViewComponent_img_37_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintViewComponent_img_37_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleLinksType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintViewComponent_img_38_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintViewComponent_img_38_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toggleLinksType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintViewComponent_img_39_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintViewComponent_img_39_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.hideLinksToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintViewComponent_img_40_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintViewComponent_img_40_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.hideLinksToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintViewComponent_div_41_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-qrcode", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var l_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r18.linkName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementType", ctx_r20.elementType)("errorCorrectionLevel", ctx_r20.correctionLevel)("value", l_r18.linkAddress);
} }
function PrintViewComponent_div_41_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrintViewComponent_div_41_div_2_div_1_Template, 6, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r19 % 2 == 0);
} }
function PrintViewComponent_div_41_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-qrcode", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var l_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r22.linkName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementType", ctx_r24.elementType)("errorCorrectionLevel", ctx_r24.correctionLevel)("value", l_r22.linkAddress);
} }
function PrintViewComponent_div_41_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrintViewComponent_div_41_div_5_div_1_Template, 6, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r23 % 2 == 1);
} }
function PrintViewComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrintViewComponent_div_41_div_2_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PrintViewComponent_div_41_div_5_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.linkArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.linkArray);
} }
function PrintViewComponent_div_42_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var l_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", l_r27.linkAddress, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r27.linkAddress);
} }
function PrintViewComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrintViewComponent_div_42_li_2_Template, 3, 2, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.linkArray);
} }
var PrintViewComponent = /** @class */ (function () {
    function PrintViewComponent(route, itemService, documentService, linksService) {
        this.route = route;
        this.itemService = itemService;
        this.documentService = documentService;
        this.linksService = linksService;
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_1__["NgxQrcodeElementTypes"].URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_1__["NgxQrcodeErrorCorrectionLevels"].HIGH;
        this.value = 'https://www.techiediaries.com/';
        this.hideLinks = false;
        this.link2qr = false;
    }
    PrintViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.itemId = params.get('id');
            _this.getItem();
            _this.getDocumentList();
            _this.getItemLinks();
        });
    };
    PrintViewComponent.prototype.getItem = function () {
        var _this = this;
        this.itemService.getItemById(this.itemId).toPromise().then(function (res) {
            _this.item = res;
            console.log(res);
        });
    };
    PrintViewComponent.prototype.getDocumentList = function () {
        var _this = this;
        this.documentService.getDocumentList(this.itemId).subscribe(function (res) {
            _this.documentsArray = res;
            console.log(res);
        });
    };
    PrintViewComponent.prototype.getItemLinks = function () {
        var _this = this;
        this.linksService.getByItemId(this.itemId).subscribe(function (res) {
            _this.linkArray = res;
            console.log(res);
        });
    };
    PrintViewComponent.prototype.hideLinksToggle = function () {
        this.hideLinks = !this.hideLinks;
    };
    PrintViewComponent.prototype.toggleLinksType = function () {
        this.link2qr = !this.link2qr;
    };
    PrintViewComponent.ɵfac = function PrintViewComponent_Factory(t) { return new (t || PrintViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_documents_service__WEBPACK_IMPORTED_MODULE_4__["DocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_links_service__WEBPACK_IMPORTED_MODULE_5__["LinksService"])); };
    PrintViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintViewComponent, selectors: [["app-print-view"]], decls: 43, vars: 17, consts: [["size", "A4", 1, "page"], [1, "pageHeader"], [2, "width", "50%"], [1, "itemImage", 3, "src"], [1, "itemGeneralInfo"], [1, "generalInfoData"], [1, "descriptionInfoData"], [2, "display", "inline-flex", "width", "100%"], [4, "ngIf"], [1, "linkIcons"], ["src", "../../assets/icons/qrcode-solid.svg", "class", "linkOrQR no-print", 3, "click", 4, "ngIf"], ["src", "../../assets/icons/link-solid.svg", "class", "linkOrQR no-print", 3, "click", 4, "ngIf"], ["src", "../../assets/icons/eye-slash-solid.svg", "class", "hideShowIcon no-print", 3, "click", 4, "ngIf"], ["src", "../../assets/icons/eye-solid.svg", "class", "hideShowIcon no-print", 3, "click", 4, "ngIf"], ["style", "display: inline-flex;width:100%", 4, "ngIf"], ["src", "../../assets/icons/qrcode-solid.svg", 1, "linkOrQR", "no-print", 3, "click"], ["src", "../../assets/icons/link-solid.svg", 1, "linkOrQR", "no-print", 3, "click"], ["src", "../../assets/icons/eye-slash-solid.svg", 1, "hideShowIcon", "no-print", 3, "click"], ["src", "../../assets/icons/eye-solid.svg", 1, "hideShowIcon", "no-print", 3, "click"], [2, "display", "inline", "width", "45%", "margin-left", "2%"], [4, "ngFor", "ngForOf"], [2, "display", "inline", "width", "45%"], ["class", "itemLinkBorder", 4, "ngIf"], [1, "itemLinkBorder"], [1, "itemLink"], [2, "text-align", "center"], ["cssClass", "bshadow", 3, "elementType", "errorCorrectionLevel", "value"], [3, "href"]], template: function PrintViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Date of purchase: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Model Number: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Serial: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Description: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Notes: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PrintViewComponent_h3_35_Template, 2, 0, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PrintViewComponent_img_37_Template, 1, 0, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PrintViewComponent_img_38_Template, 1, 0, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, PrintViewComponent_img_39_Template, 1, 0, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PrintViewComponent_img_40_Template, 1, 0, "img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PrintViewComponent_div_41_Template, 7, 2, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PrintViewComponent_div_42_Template, 3, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.name, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "data:image/", ctx.item.imgMime, ";base64,", ctx.item.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 15, ctx.item.date), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.model, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.serial, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.description, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.notes, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideLinks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.link2qr && !ctx.hideLinks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link2qr && !ctx.hideLinks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideLinks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideLinks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideLinks && ctx.link2qr);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideLinks && !ctx.link2qr);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_1__["QrcodeComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["body[_ngcontent-%COMP%] {\n  background: #cccccc;\n}\n\n.page[_ngcontent-%COMP%] {\n  background: white;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 0.5cm;\n}\n\n.page[size=A4][_ngcontent-%COMP%] {\n  width: 21cm;\n  height: 29.7cm;\n}\n\n.pageHeader[_ngcontent-%COMP%] {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: 100%;\n  height: 10%;\n}\n\n.pageHeader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n}\n\n.itemImage[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.itemGeneralInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.generalInfoData[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 22px !important;\n  margin-left: 5%;\n}\n\n.descriptionInfoData[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  margin-left: 5%;\n  white-space: pre-line;\n}\n\n  .bshadow {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.itemLink[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.itemLinkBorder[_ngcontent-%COMP%] {\n  margin: 1em;\n  padding: 5px;\n  border: 1px solid #000000;\n  border-radius: 10px;\n}\n\n.linkIcons[_ngcontent-%COMP%] {\n  height: 1em;\n  margin-left: auto;\n  margin-right: 2em;\n}\n\n.linkIcons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1em;\n}\n\n.linkOrQR[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.linkOrQR[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.hideShowIcon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n@media print {\n  .no-print[_ngcontent-%COMP%], .no-print[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnQtdmlldy9DOlxcVXNlcnNcXEFsZHVpblxcRG9jdW1lbnRzXFxHaXRodWJcXGhvbWUtcG9ydGFsXFxhcHBcXGZyb250ZW5kL3NyY1xcYXBwXFxwcmludC12aWV3XFxwcmludC12aWV3LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9wcmludC12aWV3L3ByaW50LXZpZXcuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0FDTUo7O0FESkE7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ09KOztBRExBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNRSjs7QUROQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0FDU0o7O0FEUEE7RUFDSSxZQUFBO0FDVUo7O0FEUkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNXSjs7QURUQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDWUo7O0FEVkE7RUFDSSxXQUFBO0FDYUo7O0FEWEE7RUFDSSxpQkFBQTtBQ2NKOztBRFpBO0VBQ0ksZUFBQTtBQ2VKOztBRGJBO0VBQ0ksZUFBQTtBQ2dCSjs7QURkQTtFQUNJO0lBQ0ksd0JBQUE7RUNpQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ByaW50LXZpZXcvcHJpbnQtdmlldy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgXHJcbiAgYmFja2dyb3VuZDogcmdiKDIwNCwyMDQsMjA0KVxyXG5cclxuLnBhZ2VcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZVxyXG4gIGRpc3BsYXk6IGJsb2NrXHJcbiAgbWFyZ2luOiAwIGF1dG9cclxuICBtYXJnaW4tYm90dG9tOiAwLjVjbVxyXG4vLyAgIGJveC1zaGFkb3c6IDAgMCAwLjVjbSByZ2JhKDAsMCwwLDAuNSlcclxuXHJcbi5wYWdlW3NpemU9XCJBNFwiXVxyXG4gIHdpZHRoOiAyMWNtXHJcbiAgaGVpZ2h0OiAyOS43Y21cclxuXHJcbi5wYWdlSGVhZGVyXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleFxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGhlaWdodDogMTAlXHJcblxyXG4ucGFnZUhlYWRlciBoMSBcclxuICAgIHdpZHRoOiA1MCVcclxuICAgIG1hcmdpbjogYXV0b1xyXG5cclxuLml0ZW1JbWFnZVxyXG4gICAgbWF4LXdpZHRoOiAxMDAlXHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlXHJcblxyXG4uaXRlbUdlbmVyYWxJbmZvIHAgXHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuXHJcbi5nZW5lcmFsSW5mb0RhdGFcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDBcclxuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50XHJcbiAgICBtYXJnaW4tbGVmdDogNSVcclxuXHJcbi5kZXNjcmlwdGlvbkluZm9EYXRhXHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudFxyXG4gICAgbWFyZ2luLWxlZnQ6IDUlXHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmVcclxuXHJcbjo6bmctZGVlcCAuYnNoYWRvd1xyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuXHJcbi5pdGVtTGlua1xyXG4gICAgbWFyZ2luOiBhdXRvXHJcblxyXG4uaXRlbUxpbmtCb3JkZXJcclxuICAgIG1hcmdpbjogMWVtXHJcbiAgICBwYWRkaW5nOiA1cHhcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuXHJcbi5saW5rSWNvbnNcclxuICAgIGhlaWdodDogMWVtXHJcbiAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW1cclxuXHJcbi5saW5rSWNvbnMgaW1nXHJcbiAgICBoZWlnaHQ6IDFlbVxyXG5cclxuLmxpbmtPclFSXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweFxyXG5cclxuLmxpbmtPclFSOmhvdmVyXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuXHJcbi5oaWRlU2hvd0ljb246aG92ZXJcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG5cclxuQG1lZGlhIHByaW50XHJcbiAgICAubm8tcHJpbnQsIC5uby1wcmludCAqXHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50XHJcbiAgICBcclxuIiwiYm9keSB7XG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XG59XG5cbi5wYWdlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMC41Y207XG59XG5cbi5wYWdlW3NpemU9QTRdIHtcbiAgd2lkdGg6IDIxY207XG4gIGhlaWdodDogMjkuN2NtO1xufVxuXG4ucGFnZUhlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMCU7XG59XG5cbi5wYWdlSGVhZGVyIGgxIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaXRlbUltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uaXRlbUdlbmVyYWxJbmZvIHAge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5nZW5lcmFsSW5mb0RhdGEge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uZGVzY3JpcHRpb25JbmZvRGF0YSB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuOjpuZy1kZWVwIC5ic2hhZG93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pdGVtTGluayB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLml0ZW1MaW5rQm9yZGVyIHtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxpbmtJY29ucyB7XG4gIGhlaWdodDogMWVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG5cbi5saW5rSWNvbnMgaW1nIHtcbiAgaGVpZ2h0OiAxZW07XG59XG5cbi5saW5rT3JRUiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubGlua09yUVI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oaWRlU2hvd0ljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5uby1wcmludCwgLm5vLXByaW50ICoge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"] });
    return PrintViewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-view',
                templateUrl: './print-view.component.html',
                styleUrls: ['./print-view.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }, { type: _services_documents_service__WEBPACK_IMPORTED_MODULE_4__["DocumentsService"] }, { type: _services_links_service__WEBPACK_IMPORTED_MODULE_5__["LinksService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/documents.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/documents.service.ts ***!
  \***********************************************/
/*! exports provided: DocumentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsService", function() { return DocumentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var DocumentsService = /** @class */ (function () {
    function DocumentsService(http) {
        this.http = http;
    }
    DocumentsService.prototype.uploadDocument = function (itemId, file) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.set('Accept', 'application/json');
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Documents/uploadDocument?itemId=" + itemId, file, { headers: headers });
    };
    DocumentsService.prototype.downloadDocument = function (documentId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/octet-stream');
        headers.set('Accept', 'text/plain');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Documents/downloadDoc?id=" + documentId, {
            headers: headers, responseType: 'blob',
            observe: 'response'
        });
    };
    DocumentsService.prototype.downloadAllAsZip = function (itemId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/octet-stream');
        headers.set('Accept', 'text/plain');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Documents/downloadZip?itemId=" + itemId, {
            headers: headers, responseType: 'blob',
            observe: 'response'
        });
    };
    DocumentsService.prototype.getDocumentList = function (itemId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Documents/fromRef?id=" + itemId);
    };
    DocumentsService.prototype.deleteDocument = function (documentId) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Documents/deleteDocument?id=" + documentId);
    };
    DocumentsService.ɵfac = function DocumentsService_Factory(t) { return new (t || DocumentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    DocumentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DocumentsService, factory: DocumentsService.ɵfac, providedIn: 'root' });
    return DocumentsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getAllItems = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Item/all");
    };
    ItemService.prototype.getItemsByCode = function (refCodeId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Item/fromRef?code=" + refCodeId);
    };
    ItemService.prototype.getItemById = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Item/fromId?id=" + id);
    };
    ItemService.prototype.uploadImage = function (id, file) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.set('Accept', 'application/json');
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Item/uploadImage?id=" + id, file, { headers: headers });
    };
    ItemService.prototype.createItem = function (item) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Item/uploadItem", item);
    };
    ItemService.prototype.updateItem = function (item) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Item/updateItem", item);
    };
    ItemService.prototype.deleteItem = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAPIUrl + "/Item/deleteItem?id=" + id);
    };
    ItemService.ɵfac = function ItemService_Factory(t) { return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemService, factory: ItemService.ɵfac, providedIn: 'root' });
    return ItemService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/links.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/links.service.ts ***!
  \*******************************************/
/*! exports provided: LinksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksService", function() { return LinksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var LinksService = /** @class */ (function () {
    function LinksService(http) {
        this.http = http;
    }
    LinksService.prototype.getByItemId = function (itemId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mainAPIUrl + "/Links/getByItemId?id=" + itemId);
    };
    LinksService.prototype.saveLink = function (link) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mainAPIUrl + "/Links/uploadLinks", link);
    };
    LinksService.prototype.removeLink = function (linkId) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mainAPIUrl + "/Links/deleteLinks?id=" + linkId);
    };
    LinksService.ɵfac = function LinksService_Factory(t) { return new (t || LinksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    LinksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LinksService, factory: LinksService.ɵfac, providedIn: 'root' });
    return LinksService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/ref-codes.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/ref-codes.service.ts ***!
  \***********************************************/
/*! exports provided: RefCodesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefCodesService", function() { return RefCodesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var RefCodesService = /** @class */ (function () {
    function RefCodesService(http) {
        this.http = http;
    }
    RefCodesService.prototype.getAllRefCodes = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mainAPIUrl + "/RefCodes/all");
    };
    RefCodesService.prototype.getAllRefCodesChildren = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mainAPIUrl + "/RefCodes/getChildren?id=" + id);
    };
    RefCodesService.prototype.getRefCodeByName = function (name) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mainAPIUrl + "/RefCodes/byName?name=" + name);
    };
    RefCodesService.prototype.getRefCodeById = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mainAPIUrl + "/RefCodes/byId?id=" + id);
    };
    RefCodesService.prototype.newRefCode = function (refCode) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mainAPIUrl + "/RefCodes/newRefCode", refCode);
    };
    RefCodesService.prototype.updateRefCode = function (refCode) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mainAPIUrl + "/RefCodes/updateRefCode", refCode);
    };
    RefCodesService.prototype.deleteRefCode = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mainAPIUrl + "/RefCodes/deleteRefCode?id=" + id);
    };
    RefCodesService.ɵfac = function RefCodesService_Factory(t) { return new (t || RefCodesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    RefCodesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RefCodesService, factory: RefCodesService.ɵfac, providedIn: 'root' });
    return RefCodesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefCodesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/room.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ref_codes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ref-codes.service */ "./src/app/services/ref-codes.service.ts");




var RoomService = /** @class */ (function () {
    function RoomService(refCodeService) {
        this.refCodeService = refCodeService;
        this.currentRoomObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.currentRoom);
    }
    RoomService.prototype.setRoom = function (name) {
        var _this = this;
        this.refCodeService.getRefCodeByName(name).subscribe(function (res) {
            _this.currentRoom = res;
            _this.currentRoomObservable.next(_this.currentRoom);
            console.log(_this.currentRoom);
        });
    };
    RoomService.prototype.getRoom = function () {
        return this.currentRoomObservable.asObservable();
    };
    RoomService.ɵfac = function RoomService_Factory(t) { return new (t || RoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ref_codes_service__WEBPACK_IMPORTED_MODULE_2__["RefCodesService"])); };
    RoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoomService, factory: RoomService.ɵfac, providedIn: 'root' });
    return RoomService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ref_codes_service__WEBPACK_IMPORTED_MODULE_2__["RefCodesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/side-panel/side-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/side-panel/side-panel.component.ts ***!
  \****************************************************/
/*! exports provided: SidePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidePanelComponent", function() { return SidePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/__ivy_ngcc__/fesm5/ng-snotify.js");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _services_ref_codes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ref-codes.service */ "./src/app/services/ref-codes.service.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_documents_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/documents.service */ "./src/app/services/documents.service.ts");
/* harmony import */ var _services_links_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/links.service */ "./src/app/services/links.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../create-item/create-item.component */ "./src/app/create-item/create-item.component.ts");
/* harmony import */ var _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../detail-view/detail-view.component */ "./src/app/detail-view/detail-view.component.ts");






















function SidePanelComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidePanelComponent_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); return ctx_r36.open(_r32, ctx_r36.activeRoom); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidePanelComponent_div_5_mat_panel_title_4_Template(rf, ctx) { if (rf & 1) {
    var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-panel-title", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidePanelComponent_div_5_mat_panel_title_4_Template_mat_panel_title_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); var c_r38 = ctx_r46.$implicit; var i_r39 = ctx_r46.index; var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.getChildInfomation(c_r38, i_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r38.name, " ");
} }
function SidePanelComponent_div_5_mat_panel_title_5_Template(rf, ctx) { if (rf & 1) {
    var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-panel-title", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SidePanelComponent_div_5_mat_panel_title_5_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); var c_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return c_r38.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", c_r38.name);
} }
function SidePanelComponent_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidePanelComponent_div_5_div_7_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); var c_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); return ctx_r53.open(_r32, c_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidePanelComponent_div_5_div_7_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); var c_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.editContent(c_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidePanelComponent_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidePanelComponent_div_5_div_8_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); var c_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r58.saveRoom(c_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidePanelComponent_div_5_div_8_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); var c_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.removeRoomWarning(c_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidePanelComponent_div_5_app_side_panel_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-side-panel", 25);
} if (rf & 2) {
    var c_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", c_r38.id);
} }
function SidePanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-expansion-panel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SidePanelComponent_div_5_mat_panel_title_4_Template, 2, 1, "mat-panel-title", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SidePanelComponent_div_5_mat_panel_title_5_Template, 3, 1, "mat-panel-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SidePanelComponent_div_5_div_7_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SidePanelComponent_div_5_div_8_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SidePanelComponent_div_5_app_side_panel_9_Template, 1, 1, "app-side-panel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r38 = ctx.$implicit;
    var i_r39 = ctx.index;
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("expanded", ctx_r29.isOpen == i_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.isEditingRoom != c_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.isEditingRoom == c_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.isEditingRoom != c_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.isEditingRoom == c_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.recursive == c_r38.id);
} }
function SidePanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidePanelComponent_div_7_div_2_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 33);
} if (rf & 2) {
    var i_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "data:image/", i_r66.imgMime, ";base64,", i_r66.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SidePanelComponent_div_7_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidePanelComponent_div_7_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidePanelComponent_div_7_div_2_div_1_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); var i_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); return ctx_r72.openDetail(_r34, i_r66); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidePanelComponent_div_7_div_2_div_1_img_2_Template, 1, 2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidePanelComponent_div_7_div_2_div_1_div_3_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r66.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !i_r66.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Name: ", i_r66.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Model: ", i_r66.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Serial: ", i_r66.serial, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Date: ", i_r66.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Desc: ", i_r66.description, "");
} }
function SidePanelComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidePanelComponent_div_7_div_2_div_1_Template, 15, 7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var index_r67 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", index_r67 % 2 == 0);
} }
function SidePanelComponent_div_7_div_5_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 33);
} if (rf & 2) {
    var i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "data:image/", i_r76.imgMime, ";base64,", i_r76.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SidePanelComponent_div_7_div_5_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidePanelComponent_div_7_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidePanelComponent_div_7_div_5_div_1_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83); var i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); return ctx_r82.openDetail(_r34, i_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidePanelComponent_div_7_div_5_div_1_img_2_Template, 1, 2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidePanelComponent_div_7_div_5_div_1_div_3_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r76.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !i_r76.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Name: ", i_r76.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Model: ", i_r76.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Serial: ", i_r76.serial, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Date: ", i_r76.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Desc: ", i_r76.description, "");
} }
function SidePanelComponent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidePanelComponent_div_7_div_5_div_1_Template, 15, 7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var index_r77 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", index_r77 % 2 == 1);
} }
function SidePanelComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidePanelComponent_div_7_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SidePanelComponent_div_7_div_5_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r31.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r31.items);
} }
function SidePanelComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidePanelComponent_ng_template_8_Template_button_click_1_listener() { var modal_r86 = ctx.$implicit; return modal_r86.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-create-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeRoom", ctx_r33.childRoom);
} }
function SidePanelComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidePanelComponent_ng_template_10_Template_button_click_1_listener() { var modal_r90 = ctx.$implicit; return modal_r90.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-detail-view", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedItem", ctx_r35.selectedItem);
} }
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent(roomService, refCodeService, itemService, modalService, config, snotifyService, documentService, linkService) {
        this.roomService = roomService;
        this.refCodeService = refCodeService;
        this.itemService = itemService;
        this.modalService = modalService;
        this.snotifyService = snotifyService;
        this.documentService = documentService;
        this.linkService = linkService;
        this.recursive = false;
        this.activeRoomName = "";
        this.children = null;
    }
    SidePanelComponent.prototype.ngOnInit = function () {
        console.log(this.code);
        if (this.code) {
            this.getSubRoom(this.code);
        }
        else {
            this.getRoom();
        }
    };
    SidePanelComponent.prototype.getRoom = function () {
        var _this = this;
        this.isLoadingItems = true;
        this.subscription = this.roomService.getRoom().subscribe(function (res) {
            if (res) {
                _this.activeRoom = res;
                _this.activeRoomName = _this.activeRoom.name;
                _this.refCodeService.getAllRefCodesChildren(_this.activeRoom.id).subscribe(function (children) {
                    _this.children = children;
                    _this.isLoadingChildren = false;
                });
                _this.itemService.getItemsByCode(_this.activeRoom.id).subscribe(function (items) {
                    _this.items = items;
                    _this.isLoadingItems = false;
                });
            }
        });
    };
    SidePanelComponent.prototype.getChildInfomation = function (RefCode, i) {
        if (this.isOpen === i) {
            this.isOpen = null;
        }
        else {
            this.isOpen = i;
        }
        this.recursive = RefCode.id;
    };
    SidePanelComponent.prototype.getSubRoom = function (id) {
        var _this = this;
        this.isLoadingItems = true;
        this.itemService.getItemsByCode(id).subscribe(function (res) {
            _this.items = res;
            _this.isLoadingItems = false;
        });
        this.refCodeService.getAllRefCodesChildren(id).toPromise().then(function (res) {
            _this.children = res;
            _this.isLoadingChildren = false;
        });
    };
    SidePanelComponent.prototype.uploadImage = function (id, event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                var formData = new FormData();
                formData.append('file', file_1);
                _this.itemService.uploadImage(id, formData).toPromise().then(function (res) {
                });
            };
        }
    };
    SidePanelComponent.prototype.open = function (content, childRoom) {
        var _this = this;
        console.log(childRoom);
        this.childRoom = childRoom;
        this.modalService.open(content, { ariaLabelledBy: 'ngbd-modal-confirm' }).result.then(function (result) {
        }, function (reason) {
            if (reason === "refresh") {
                _this.ngOnInit();
            }
        });
    };
    SidePanelComponent.prototype.editContent = function (childRoom) {
        this.isEditingRoom = childRoom.id;
    };
    SidePanelComponent.prototype.removeRoomWarning = function (refCode) {
        var _this = this;
        this.snotifyService.warning('Are you sure you want to remove this space?', {
            timeout: 100000,
            closeOnClick: true,
            buttons: [
                { text: 'Yes', action: function () { return _this.getAllChildrenRecursive(refCode); }, bold: true },
                { text: 'No', action: null },
            ],
            showProgressBar: false,
            pauseOnHover: false,
            position: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyPosition"].centerBottom,
        });
    };
    SidePanelComponent.prototype.getAllChildrenRecursive = function (refCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var arrayofCodes, i, x;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arrayofCodes = [[refCode]];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < arrayofCodes.length)) return [3 /*break*/, 6];
                        x = 0;
                        _a.label = 2;
                    case 2:
                        if (!(x < arrayofCodes[i].length)) return [3 /*break*/, 5];
                        if (!(arrayofCodes[i][x] != null)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.refCodeService.getAllRefCodesChildren(arrayofCodes[i][x].id).toPromise().then(function (children) {
                                if (children.length > 0) {
                                    arrayofCodes.push(children);
                                }
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        x++;
                        return [3 /*break*/, 2];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        arrayofCodes.reverse();
                        console.log(arrayofCodes);
                        this.getItemsForDeleting(arrayofCodes);
                        return [2 /*return*/];
                }
            });
        });
    };
    SidePanelComponent.prototype.recursiveRemoveRefCode = function (refCodeArray) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i, x;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < refCodeArray.length)) return [3 /*break*/, 6];
                        x = 0;
                        _a.label = 2;
                    case 2:
                        if (!(x < refCodeArray[i].length)) return [3 /*break*/, 5];
                        if (!(refCodeArray[i][x] != null)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.refCodeService.deleteRefCode(refCodeArray[i][x].id).toPromise().then(function (res) {
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        x++;
                        return [3 /*break*/, 2];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SidePanelComponent.prototype.getItemsForDeleting = function (arrayofCodes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var itemArray, i, x;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemArray = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < arrayofCodes.length)) return [3 /*break*/, 6];
                        x = 0;
                        _a.label = 2;
                    case 2:
                        if (!(x < arrayofCodes[i].length)) return [3 /*break*/, 5];
                        if (!(arrayofCodes[i][x] != null)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.itemService.getItemsByCode(arrayofCodes[i][x].id).toPromise().then(function (res) {
                                var results = res;
                                if (results.length > 0) {
                                    for (var item = 0; results.length > item; item++) {
                                        itemArray[itemArray.length] = results[item];
                                    }
                                }
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        x++;
                        return [3 /*break*/, 2];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        this.removeItem(itemArray, arrayofCodes);
                        return [2 /*return*/];
                }
            });
        });
    };
    SidePanelComponent.prototype.removeItem = function (itemArray, arrayofCodes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var documentsArray, linkArray, _loop_1, this_1, i;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function (i) {
                            var _loop_2, d;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!itemArray[i]) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this_1.documentService.getDocumentList(itemArray[i].id).toPromise().then(function (res) {
                                                documentsArray = res;
                                                if (documentsArray.length === 0) {
                                                    documentsArray = [[0]];
                                                }
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this_1.linkService.getByItemId(itemArray[i].id).toPromise().then(function (res) {
                                                linkArray = res;
                                                if (linkArray.length === 0) {
                                                    linkArray = [{ id: 0 }];
                                                }
                                            })];
                                    case 2:
                                        _a.sent();
                                        _loop_2 = function (d) {
                                            this_1.documentService.deleteDocument(documentsArray[d][0]).toPromise().then(function (doc) {
                                                if (documentsArray.length - 1 === d) {
                                                    var _loop_3 = function (l) {
                                                        _this.linkService.removeLink(linkArray[l].id).toPromise().then(function (link) {
                                                            if (linkArray.length - 1 === l) {
                                                                _this.itemService.deleteItem(itemArray[i].id).subscribe(function (item) {
                                                                    if (itemArray.length - 1 === i) {
                                                                        _this.recursiveRemoveRefCode(arrayofCodes);
                                                                        _this.isEditingRoom = null;
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    };
                                                    for (var l = 0; linkArray.length > l; l++) {
                                                        _loop_3(l);
                                                    }
                                                }
                                            });
                                        };
                                        for (d = 0; documentsArray.length > d; d++) {
                                            _loop_2(d);
                                        }
                                        return [3 /*break*/, 4];
                                    case 3:
                                        if (true) {
                                            this_1.recursiveRemoveRefCode(arrayofCodes);
                                            this_1.isEditingRoom = null;
                                        }
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < itemArray.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SidePanelComponent.prototype.removeRoom = function (refCode) {
        this.refCodeService.deleteRefCode(refCode.id).toPromise().then(function (res) {
        });
    };
    SidePanelComponent.prototype.saveRoom = function (reCode) {
        var _this = this;
        this.refCodeService.updateRefCode(reCode).toPromise().then(function (res) {
            _this.isEditingRoom = null;
        });
    };
    SidePanelComponent.prototype.openDetail = function (detail, item) {
        var _this = this;
        this.selectedItem = item;
        this.modalService.open(detail, { ariaLabelledBy: 'ngbd-modal-confirm' }).result.then(function (result) {
        }, function (reason) {
            if (reason === "refresh") {
                _this.ngOnInit();
            }
        });
    };
    SidePanelComponent.ɵfac = function SidePanelComponent_Factory(t) { return new (t || SidePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ref_codes_service__WEBPACK_IMPORTED_MODULE_5__["RefCodesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_documents_service__WEBPACK_IMPORTED_MODULE_7__["DocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_links_service__WEBPACK_IMPORTED_MODULE_8__["LinksService"])); };
    SidePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidePanelComponent, selectors: [["app-side-panel"]], inputs: { code: "code", hideToggle: "hideToggle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], decls: 12, vars: 5, consts: [[1, "sidebar"], [1, "MainRoom"], ["src", "../../assets/icons/plus-solid.svg", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["style", "margin-top: 2em;width: 100px;margin: auto !important;margin-top:2% !important;", 4, "ngIf"], ["style", "display: inline-flex;width: 100%;", 4, "ngIf"], ["content", ""], ["detail", ""], ["src", "../../assets/icons/plus-solid.svg", 3, "click"], ["hideToggle", "", "disabled", "", 3, "expanded"], [3, "click", 4, "ngIf"], ["class", "editingRoomInput", 4, "ngIf"], ["style", "margin-left: auto;width: 5em;display: inline-flex;", 4, "ngIf"], ["style", "margin-left: auto;width: 10em;display: inline-flex;", 4, "ngIf"], [3, "code", 4, "ngIf"], [3, "click"], [1, "editingRoomInput"], ["appearance", "outline"], ["matInput", "", "type", "text", "name", "Title", 3, "ngModel", "ngModelChange"], [2, "margin-left", "auto", "width", "5em", "display", "inline-flex"], ["src", "../../assets/icons/plus-solid.svg", 2, "height", "10px", "width", "10px", "margin-top", "auto", "margin-bottom", "auto", "margin-left", "85%", 3, "click"], ["src", "../../assets/icons/edit-regular.svg", 2, "height", "10px", "width", "10px", "margin-top", "auto", "margin-bottom", "auto", "margin-left", "8px", 3, "click"], [2, "margin-left", "auto", "width", "10em", "display", "inline-flex"], ["src", "../../assets/icons/check-solid-green.svg", 2, "height", "15px", "width", "15px", "margin-top", "auto", "margin-bottom", "auto", "margin-left", "90%", 3, "click"], ["src", "../../assets/icons/trash-solid-red.svg", 2, "height", "15px", "width", "15px", "margin-top", "auto", "margin-bottom", "auto", "margin-left", "8px", 3, "click"], [3, "code"], [2, "margin-top", "2em", "width", "100px", "margin", "auto !important", "margin-top", "2% !important"], [2, "display", "inline-flex", "width", "100%"], [2, "width", "45%"], ["style", "margin-top: 2em;", 4, "ngIf"], [2, "margin-top", "2em"], ["class", "ImageFound", 3, "src", 4, "ngIf"], ["style", "width:50%;", 4, "ngIf"], [1, "ImageFound", 3, "src"], [2, "width", "50%"], ["src", "../../assets/icons/plus-solid.svg", 1, "NoImageFound"], [1, "modalHeader"], ["mat-button", "", "type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modalBody"], [3, "activeRoom"], [3, "selectedItem"]], template: function SidePanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SidePanelComponent_img_4_Template, 1, 0, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SidePanelComponent_div_5_Template, 10, 6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SidePanelComponent_div_6_Template, 2, 0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SidePanelComponent_div_7_Template, 7, 2, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SidePanelComponent_ng_template_8_Template, 6, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SidePanelComponent_ng_template_10_Template, 6, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.activeRoomName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeRoomName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.children);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoadingItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoadingItems);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], SidePanelComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_17__["CreateItemComponent"], _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_18__["DetailViewComponent"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  margin: 0px 1em 0px 1em;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  height: 10em;\n  width: 95%;\n  box-shadow: none !important;\n  border: 1px solid #000;\n  border-radius: 10px;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n.ImageFound[_ngcontent-%COMP%] {\n  height: 100%;\n  border: 1px solid #000;\n  border-radius: 10px;\n  max-width: 50%;\n}\n\n.NoImageFound[_ngcontent-%COMP%] {\n  border: 1px solid #000000;\n  height: 75%;\n  margin: 10%;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.NoImageFound[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.mat-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  min-width: 50%;\n}\n\n.mat-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.MainRoom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: auto;\n  margin-right: 4.5%;\n}\n\n.MainRoom[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  margin-bottom: 1em;\n  margin-left: 2%;\n}\n\n.MainRoom[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n  .modal-dialog {\n  height: 75%;\n  width: 75%;\n  max-width: 100%;\n}\n\n  .modal-content {\n  height: 100%;\n  width: 100%;\n}\n\n  .modal-content {\n  overflow-y: scroll;\n}\n\n  .editingRoomInput .mat-form-field .mat-form-field-wrapper {\n  padding-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1wYW5lbC9DOlxcVXNlcnNcXEFsZHVpblxcRG9jdW1lbnRzXFxHaXRodWJcXGhvbWUtcG9ydGFsXFxhcHBcXGZyb250ZW5kL3NyY1xcYXBwXFxzaWRlLXBhbmVsXFxzaWRlLXBhbmVsLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7QUNNSjs7QURKQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7QUNVSjs7QURSQTtFQUNJLGNBQUE7QUNXSjs7QURUQTtFQUNJLGVBQUE7QUNZSjs7QURWQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ2FKOztBRFhBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNjSjs7QURaQTtFQUNJLGtCQUFBO0FDZUo7O0FEYkE7RUFDSSw4QkFBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIFxyXG4gICAgbWFyZ2luOiAwcHggMWVtIDBweCAxZW1cclxuXHJcbi5tYXQtY2FyZFxyXG4gICAgaGVpZ2h0OiAxMGVtXHJcbiAgICB3aWR0aDogOTUlXHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4XHJcblxyXG4uSW1hZ2VGb3VuZFxyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICBtYXgtd2lkdGg6IDUwJVxyXG5cclxuLk5vSW1hZ2VGb3VuZFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMFxyXG4gICAgaGVpZ2h0OiA3NSVcclxuICAgIG1hcmdpbjogMTAlXHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcblxyXG4uTm9JbWFnZUZvdW5kOmhvdmVyXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuXHJcbi5tYXQtY2FyZCB1bFxyXG4gICAgbWluLXdpZHRoOiA1MCVcclxuXHJcbi5tYXQtY2FyZCB1bCBsaVxyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXNcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXBcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuXHJcbi5NYWluUm9vbSBpbWdcclxuICAgIGhlaWdodDogMTBweFxyXG4gICAgd2lkdGg6IDEwcHhcclxuICAgIG1hcmdpbi10b3A6IGF1dG9cclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG9cclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQuNSVcclxuXHJcbi5NYWluUm9vbSBoM1xyXG4gICAgbWFyZ2luLXRvcDogMWVtXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW1cclxuICAgIG1hcmdpbi1sZWZ0OiAyJVxyXG5cclxuLk1haW5Sb29tXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXhcclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdXHJcbiAgICBjb2xvcjogIzAwMDAwMFxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuXHJcbjo6bmctZGVlcCAubW9kYWwtZGlhbG9nXHJcbiAgICBoZWlnaHQ6IDc1JVxyXG4gICAgd2lkdGg6IDc1JVxyXG4gICAgbWF4LXdpZHRoOiAxMDAlXHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLWNvbnRlbnRcclxuICAgIGhlaWdodDogMTAwJVxyXG4gICAgd2lkdGg6IDEwMCVcclxuXHJcbjo6bmctZGVlcCAubW9kYWwtY29udGVudFxyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsXHJcblxyXG46Om5nLWRlZXAgLmVkaXRpbmdSb29tSW5wdXQgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQiLCIuc2lkZWJhciB7XG4gIG1hcmdpbjogMHB4IDFlbSAwcHggMWVtO1xufVxuXG4ubWF0LWNhcmQge1xuICBoZWlnaHQ6IDEwZW07XG4gIHdpZHRoOiA5NSU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5JbWFnZUZvdW5kIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLk5vSW1hZ2VGb3VuZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGhlaWdodDogNzUlO1xuICBtYXJnaW46IDEwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLk5vSW1hZ2VGb3VuZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdC1jYXJkIHVsIHtcbiAgbWluLXdpZHRoOiA1MCU7XG59XG5cbi5tYXQtY2FyZCB1bCBsaSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uTWFpblJvb20gaW1nIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNC41JTtcbn1cblxuLk1haW5Sb29tIGgzIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLk1haW5Sb29tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjo6bmctZGVlcCAubW9kYWwtZGlhbG9nIHtcbiAgaGVpZ2h0OiA3NSU7XG4gIHdpZHRoOiA3NSU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG46Om5nLWRlZXAgLmVkaXRpbmdSb29tSW5wdXQgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
    return SidePanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidePanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-side-panel',
                templateUrl: './side-panel.component.html',
                styleUrls: ['./side-panel.component.sass'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]]
            }]
    }], function () { return [{ type: _services_room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"] }, { type: _services_ref_codes_service__WEBPACK_IMPORTED_MODULE_5__["RefCodesService"] }, { type: _services_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"] }, { type: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"] }, { type: _services_documents_service__WEBPACK_IMPORTED_MODULE_7__["DocumentsService"] }, { type: _services_links_service__WEBPACK_IMPORTED_MODULE_8__["LinksService"] }]; }, { code: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    mainAPIUrl: 'http://192.168.1.213:80',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alduin\Documents\Github\home-portal\app\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map