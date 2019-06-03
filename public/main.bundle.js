webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ ng2-smart-table  {\r\n\tfont-size:16px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_productall_component__ = __webpack_require__("../../../../../src/app/product/productall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_productadd_component__ = __webpack_require__("../../../../../src/app/product/productadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__supplier_supplier_component__ = __webpack_require__("../../../../../src/app/supplier/supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__supplier_supplierall_component__ = __webpack_require__("../../../../../src/app/supplier/supplierall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__supplier_supplieradd_component__ = __webpack_require__("../../../../../src/app/supplier/supplieradd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__stock_stock_component__ = __webpack_require__("../../../../../src/app/stock/stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__stock_stockadd_component__ = __webpack_require__("../../../../../src/app/stock/stockadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__stock_stockall_component__ = __webpack_require__("../../../../../src/app/stock/stockall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__transaction_transaction_component__ = __webpack_require__("../../../../../src/app/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__defect_defect_component__ = __webpack_require__("../../../../../src/app/defect/defect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__defect_defectall_component__ = __webpack_require__("../../../../../src/app/defect/defectall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__defect_defectadd_component__ = __webpack_require__("../../../../../src/app/defect/defectadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__warehouse_warehouseadd_component__ = __webpack_require__("../../../../../src/app/warehouse/warehouseadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__warehouse_warehouseall_component__ = __webpack_require__("../../../../../src/app/warehouse/warehouseall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_supplier_service__ = __webpack_require__("../../../../../src/app/services/supplier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_warehouse_service__ = __webpack_require__("../../../../../src/app/services/warehouse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__warehouse_warehouse_component__ = __webpack_require__("../../../../../src/app/warehouse/warehouse.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_14__product_productall_component__["a" /* AllProductComponent */],
                __WEBPACK_IMPORTED_MODULE_15__product_productadd_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_16__supplier_supplier_component__["a" /* SupplierComponent */],
                __WEBPACK_IMPORTED_MODULE_17__supplier_supplierall_component__["a" /* AllSupplierComponent */],
                __WEBPACK_IMPORTED_MODULE_18__supplier_supplieradd_component__["a" /* AddSupplierComponent */],
                __WEBPACK_IMPORTED_MODULE_19__stock_stock_component__["a" /* StockComponent */],
                __WEBPACK_IMPORTED_MODULE_22__transaction_transaction_component__["a" /* TransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_23__defect_defect_component__["a" /* DefectComponent */],
                __WEBPACK_IMPORTED_MODULE_24__defect_defectall_component__["a" /* AllDefectComponent */],
                __WEBPACK_IMPORTED_MODULE_25__defect_defectadd_component__["a" /* AddDefectComponent */],
                __WEBPACK_IMPORTED_MODULE_37__warehouse_warehouse_component__["a" /* WarehouseComponent */],
                __WEBPACK_IMPORTED_MODULE_26__warehouse_warehouseadd_component__["a" /* AddWarehouseComponent */],
                __WEBPACK_IMPORTED_MODULE_27__warehouse_warehouseall_component__["a" /* AllWarehouseComponent */],
                __WEBPACK_IMPORTED_MODULE_21__stock_stockall_component__["a" /* AllStockComponent */],
                __WEBPACK_IMPORTED_MODULE_20__stock_stockadd_component__["a" /* AddStockComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_36__app_routes__["a" /* ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_34_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__["a" /* Ng2SmartTableModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_28__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_29__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_35__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_30__services_supplier_service__["a" /* SupplierService */], __WEBPACK_IMPORTED_MODULE_31__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_32__services_warehouse_service__["a" /* WarehouseService */], __WEBPACK_IMPORTED_MODULE_33__services_stock_service__["a" /* StockService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_productall_component__ = __webpack_require__("../../../../../src/app/product/productall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_productadd_component__ = __webpack_require__("../../../../../src/app/product/productadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__supplier_supplier_component__ = __webpack_require__("../../../../../src/app/supplier/supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__supplier_supplierall_component__ = __webpack_require__("../../../../../src/app/supplier/supplierall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__supplier_supplieradd_component__ = __webpack_require__("../../../../../src/app/supplier/supplieradd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stock_stock_component__ = __webpack_require__("../../../../../src/app/stock/stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stock_stockadd_component__ = __webpack_require__("../../../../../src/app/stock/stockadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stock_stockall_component__ = __webpack_require__("../../../../../src/app/stock/stockall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__transaction_transaction_component__ = __webpack_require__("../../../../../src/app/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__defect_defect_component__ = __webpack_require__("../../../../../src/app/defect/defect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__defect_defectall_component__ = __webpack_require__("../../../../../src/app/defect/defectall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__defect_defectadd_component__ = __webpack_require__("../../../../../src/app/defect/defectadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__warehouse_warehouse_component__ = __webpack_require__("../../../../../src/app/warehouse/warehouse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__warehouse_warehouseadd_component__ = __webpack_require__("../../../../../src/app/warehouse/warehouseadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__warehouse_warehouseall_component__ = __webpack_require__("../../../../../src/app/warehouse/warehouseall.component.ts");





















var ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
            {
                path: 'products',
                component: __WEBPACK_IMPORTED_MODULE_4__product_product_component__["a" /* ProductComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: '', redirectTo: 'all', pathMatch: 'full'
                    },
                    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_5__product_productall_component__["a" /* AllProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_6__product_productadd_component__["a" /* AddProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }
                ]
            },
            {
                path: 'suppliers',
                component: __WEBPACK_IMPORTED_MODULE_8__supplier_supplier_component__["a" /* SupplierComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: '', redirectTo: 'all', pathMatch: 'full'
                    },
                    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_9__supplier_supplierall_component__["a" /* AllSupplierComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_10__supplier_supplieradd_component__["a" /* AddSupplierComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }
                ]
            },
            {
                path: 'transaction',
                component: __WEBPACK_IMPORTED_MODULE_14__transaction_transaction_component__["a" /* TransactionComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'defect',
                component: __WEBPACK_IMPORTED_MODULE_15__defect_defect_component__["a" /* DefectComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: '', redirectTo: 'all', pathMatch: 'full'
                    },
                    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_16__defect_defectall_component__["a" /* AllDefectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_17__defect_defectadd_component__["a" /* AddDefectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }
                ]
            },
            {
                path: 'warehouse',
                component: __WEBPACK_IMPORTED_MODULE_18__warehouse_warehouse_component__["a" /* WarehouseComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: '', redirectTo: 'all', pathMatch: 'full'
                    },
                    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_20__warehouse_warehouseall_component__["a" /* AllWarehouseComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_19__warehouse_warehouseadd_component__["a" /* AddWarehouseComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }
                ]
            },
            {
                path: 'stock',
                component: __WEBPACK_IMPORTED_MODULE_11__stock_stock_component__["a" /* StockComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: '', redirectTo: 'all', pathMatch: 'full'
                    },
                    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_13__stock_stockall_component__["a" /* AllStockComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_12__stock_stockadd_component__["a" /* AddStockComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n      <a class=\"navbar-brand\" href=\"#\">MEAN Auth App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span></span></a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"name\">company</label>\n    <input type=\"text\" [(ngModel)]=\"company\" name=\"company\" class=\"form-control\" id=\"company\" placeholder=\"Enter Name\">\n  </div>\n  <div class=\"form-group\">\t\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n  </div>\n    <div class=\"form-group\">\n    <label for=\"name\">type</label>\n    <input type=\"text\" [(ngModel)]=\"type\" name=\"type\" class=\"form-control\" id=\"type\" placeholder=\"Enter Name\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            company: this.company,
            email: this.email,
            usercompany: this.usercompany,
            password: this.password,
            type: this.type
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\n\r\n#wrapper {\r\n  padding-left: 250px;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n\r\n#sidebar-wrapper {\r\n  margin-left: -250px;\r\n  top: 51px;\r\n  left: 250px;\r\n  width: 250px;\r\n  background: #000;\r\n  position: fixed;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n  z-index: 1000;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n\r\n#wrapper.active {\r\n  padding-left: 0;\r\n}\r\n\r\n#wrapper.active #sidebar-wrapper {\r\n  left: 0;\r\n}\r\n\r\n#page-content-wrapper {\r\n  width: 100%;\r\n  padding-top: 70px;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n\r\n.sidebar-nav {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 250px;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.sidebar-nav li {\r\n  line-height: 40px;\r\n  text-indent: 20px;\r\n}\r\n\r\n.sidebar-nav li a {\r\n  color: #999999;\r\n  display: block;\r\n  text-decoration: none;\r\n  padding-left: 60px;\r\n}\r\n\r\n.sidebar-nav li a span:before {\r\n  position: absolute;\r\n  left: 0;\r\n  color: #41484c;\r\n  text-align: center;\r\n  width: 20px;\r\n  line-height: 18px;\r\n}\r\n\r\n.sidebar-nav li a:hover,\r\n.sidebar-nav li.active {\r\n\r\n  background: rgba(255,255,255,0.2);\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar-nav li a:active,\r\n.sidebar-nav li a:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.nav>li>a:focus, .nav>li>a:hover {\r\n    text-decoration: none;\r\n    background-color: #41484c;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand {\r\n  height: 65px;\r\n  line-height: 60px;\r\n  font-size: 18px;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a {\r\n  color: #999999;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a:hover {\r\n color: #41484c;\r\n  background: none;\r\n}\r\n\r\n#menu-toggle {\r\n    text-decoration: none;\r\n    float: left;\r\n    color: #fff;\r\n    padding-right: 15px;\r\n}\r\n\r\n@media (max-width:767px) {\r\n\r\n#wrapper {\r\n  padding-left: 0;\r\n}\r\n\r\n#sidebar-wrapper {\r\n  left: 0;\r\n}\r\n\r\n#wrapper.active {\r\n  position: relative;\r\n  left: 250px;\r\n}\r\n\r\n#wrapper.active #sidebar-wrapper {\r\n  left: 250px;\r\n  width: 250px;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n\r\n#menu-toggle {\r\n  display: inline-block;\r\n}\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"navbar-header\">\n    \t\t <div  class=\"navbar-brand\">\n\t\t\t\t   <a  id=\"menu-toggle\"  class=\"glyphicon glyphicon-align-justify btn-menu toggle\">\n                        <i class=\"fa fa-bars\"></i>\n                       \n                    </a>\n\t\t\t\t\t</div>\n                   \n    \t\t\t\t<a href=\"#\" class=\"navbar-brand\">Inventory</a>\n        \n\t\t\t\t\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#mainNavBar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        \t\t\t<span class=\"sr-only\">Toggle navigation</span>\n        \t\t\t<span class=\"icon-bar\"></span>\n        \t\t\t<span class=\"icon-bar\"></span>\n        \t\t\t<span class=\"icon-bar\"></span>\n    \t\t\t</button>\n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t  <div class=\"collapse navbar-collapse\" id=\"mainNavBar\">\n            \n\t\t\t\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n           \n                <li class=\"dropdown nav-item\">\n                    <a href=\"\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i> John Smith <b class=\"caret\"></b></a>\n                    <ul class=\"dropdown-menu\">\n                        <li class=\"dropdown-item\">\n                            <a href=\"\"><i class=\"fa fa-fw fa-user\"></i> Profile</a>\n                        </li>\n                        <li class=\"dropdown-item\">\n                            <a href=\"\"><i class=\"fa fa-fw fa-envelope\"></i> Inbox</a>\n                        </li>\n                        <li class=\"dropdown-item\">\n                            <a href=\"\"><i class=\"fa fa-fw fa-gear\"></i> Settings</a>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li class=\"dropdown-item\">\n                            <a href=\"\"><i class=\"fa fa-fw fa-power-off\"></i> Log Out</a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n\t\n\t\t</div>\n\t</nav>\n    <!-- Sidebar -->\n    <div id=\"sidebar-wrapper\"  >\n        <nav id=\"spy\">\n            <ul class=\"sidebar-nav nav\">\n                <li class=\"sidebar-brand\">\n                    <a href=\"#home\"><span class=\"fa fa-home solo\">Home</span></a>\n                </li>\n                <li class=\"sidebar-brand\">\n                    <a  routerLink=\"products\"><span class=\"fa fa-home solo\">Products</span></a>\n                </li>\n                 <li class=\"sidebar-brand\">\n                    <a  routerLink=\"suppliers\"><span class=\"fa fa-home solo\">Supplier</span></a>\n                </li>\n                  <li class=\"sidebar-brand\">\n                    <a  routerLink=\"stock\"><span class=\"fa fa-home solo\">Stock</span></a>\n                </li>\n                <li class=\"sidebar-brand\">\n                    <a  routerLink=\"recipe\"><span class=\"fa fa-home solo\">Recipe</span></a>\n                </li>\n                 <li class=\"sidebar-brand\">\n                    <a  routerLink=\"defect\"><span class=\"fa fa-home solo\">Defect</span></a>\n                </li>\n                 <li class=\"sidebar-brand\">\n                    <a  routerLink=\"warehouse\"><span class=\"fa fa-home solo\">Warehouses</span></a>\n                </li>\n                 <li class=\"sidebar-brand\">\n                    <a  routerLink=\"transaction\"><span class=\"fa fa-home solo\">Transactions</span></a>\n                </li>\n                  <li class=\"sidebar-brand\">\n                    <a  routerLink=\"invoices\"><span class=\"fa fa-home solo\">Invoices</span></a>\n                </li>\n                 <li class=\"sidebar-brand\">\n                    <a  routerLink=\"contact\"><span class=\"fa fa-home solo\">Contact</span></a>\n                </li>\n                 <li class=\"sidebar-brand\">\n                    <a  routerLink=\"misc\"><span class=\"fa fa-home solo\">Misc Charges</span></a>\n                </li>\n                 <li>\n                        <a class=\"accordion-toggle collapsed toggle-switch\" data-toggle=\"collapse\" href=\"#submenu-2\">\n                            <span class=\"sidebar-icon\"><i class=\"fa fa-users\"></i></span>\n                            <span class=\"sidebar-title\">Management</span>\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul id=\"submenu-2\" class=\"panel-collapse collapse panel-switch\" role=\"menu\">\n                            <li><a href=\"\"><i class=\"fa fa-caret-right\"></i>Users</a></li>\n                            <li><a href=\"\"><i class=\"fa fa-caret-right\"></i>Roles</a></li>\n                        </ul>\n                 </li>\n            </ul>\n        </nav>\n    </div>\n    <!-- Page content -->\n    <router-outlet></router-outlet>\n\n\n\n    \n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("active");
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/defect/defect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topcontend2{\r\n\tmargin-top: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/defect/defect.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"topcontend\">\n    \n<div class=\"container\">\n    <h3 class=\"well\">Defect</h3>\n    <ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"./all\">OVERVIEW</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"./add\">ADD</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#!\">UPDATE</a>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n\n\n     \n</div>   \n</div>"

/***/ }),

/***/ "../../../../../src/app/defect/defect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefectComponent = (function () {
    function DefectComponent() {
        this.settings = {
            columns: {
                defectid: {
                    title: 'Defect ID'
                },
                status: {
                    title: 'Status'
                },
                productname: {
                    title: 'Product Name'
                },
                productcompany: {
                    title: 'Product Company'
                },
                productfamily: {
                    title: 'Product Family'
                },
                contact: {
                    title: 'Contact'
                },
                type: {
                    title: 'Type'
                },
                startdate: {
                    title: 'Start date'
                },
                enddate: {
                    title: 'enddate'
                },
                quantity: {
                    title: 'Quantity'
                },
                unitprice: {
                    title: 'Unit Price'
                },
                totalcost: {
                    title: 'Total Cost'
                },
            },
            pager: {
                perPage: 15
            },
            actions: {
                add: false,
                edit: false,
                delete: false
            }
        };
        this.data = [
            {
                defectid: 123,
                status: "open",
                productfamily: "Mobile",
                productcompany: "Samsung",
                productname: "note 8",
                contact: "warehouse a",
                type: "defect",
                startdate: '2017-01-01',
                enddate: '2017-01-05',
                quantity: 10,
                unitprice: 100,
                totalcost: 100000,
            }
        ];
    }
    DefectComponent.prototype.ngOnInit = function () {
    };
    DefectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-defect',
            template: __webpack_require__("../../../../../src/app/defect/defect.component.html"),
            styles: [__webpack_require__("../../../../../src/app/defect/defect.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DefectComponent);
    return DefectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/defect/defectadd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<p> add defect works</p>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/defect/defectadd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDefectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddDefectComponent = (function () {
    function AddDefectComponent() {
    }
    AddDefectComponent.prototype.ngOnInit = function () {
    };
    AddDefectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/defect/defectadd.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AddDefectComponent);
    return AddDefectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/defect/defectall.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"topcontend2\">\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/defect/defectall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllDefectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllDefectComponent = (function () {
    function AllDefectComponent() {
        this.settings = {
            columns: {
                defectid: {
                    title: 'Defect ID'
                },
                status: {
                    title: 'Status'
                },
                productname: {
                    title: 'Product Name'
                },
                productcompany: {
                    title: 'Product Company'
                },
                productfamily: {
                    title: 'Product Family'
                },
                contact: {
                    title: 'Contact'
                },
                type: {
                    title: 'Type'
                },
                startdate: {
                    title: 'Start date'
                },
                enddate: {
                    title: 'enddate'
                },
                quantity: {
                    title: 'Quantity'
                },
                unitprice: {
                    title: 'Unit Price'
                },
                totalcost: {
                    title: 'Total Cost'
                },
            },
            pager: {
                perPage: 15
            },
            actions: {
                add: false,
                edit: false,
                delete: false
            }
        };
        this.data = [
            {
                defectid: 123,
                status: "open",
                productfamily: "Mobile",
                productcompany: "Samsung",
                productname: "note 8",
                contact: "warehouse a",
                type: "defect",
                startdate: '2017-01-01',
                enddate: '2017-01-05',
                quantity: 10,
                unitprice: 100,
                totalcost: 100000,
            }
        ];
    }
    AllDefectComponent.prototype.ngOnInit = function () {
    };
    AllDefectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/defect/defectall.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AllDefectComponent);
    return AllDefectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topcontend{\r\n    margin-top: 80px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"topcontend\">\n \n <div id=\"page-content-wrapper\">\n        <div class=\"page-content\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"panel panel-danger\">\n                            <div class=\"panel-heading\">\n                                    Panel 1\n                            </div>\n                            <div class=\"panel-body\">\n                                content body\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">                    \n                        <div class=\"panel panel-success\">\n                            <div class=\"panel-heading\">\n                                    Panel 1\n                            </div>\n                            <div class=\"panel-body\">\n                                content body\n                            </div>\n                        </div>\n                    </div>\n\t\t\t\t\t  <div class=\"col-md-3\">                    \n                        <div class=\"panel panel-success\">\n                            <div class=\"panel-heading\">\n                                    Panel 1\n                            </div>\n                            <div class=\"panel-body\">\n                                content body\n                            </div>\n                        </div>\n                    </div>\n\t\t\t\t\t  <div class=\"col-md-3\">                    \n                        <div class=\"panel panel-success\">\n                            <div class=\"panel-heading\">\n                                    Panel 1\n                            </div>\n                            <div class=\"panel-body\">\n                                content body\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #eee;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">\n\n      <form class=\"form-signin\">\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" id=\"inputEmail\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" placeholder=\"Email address\" required autofocus>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"onLoginSubmit()\">Sign in</button>\n      </form>\n\n    </div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                //this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
                _this.router.navigate(['dashboard']);
            }
            else {
                // this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
                _this.router.navigate(['login']);
                console.log("invalid pass");
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topcontend{\r\n\tmargin-top: 80px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"topcontend\">\r\n    \r\n<div class=\"container\">\r\n     <h3 class=\"well\">Product</h3>\r\n    <ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link active\" routerLink=\"./all\">OVERVIEW</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"./add\">ADD</a>\r\n  </li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>\r\n     \r\n</div>   \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/productadd.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"topcontend\">\r\n    \r\n<div class=\"container\">\r\n\r\n\r\n\r\n    <form>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Product Family</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"productfamily\"  [(ngModel)]=\"addproduct.productfamily\" placeholder=\"Enter Product Family Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Product Company</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"productcompany\"  [(ngModel)]=\"addproduct.productcompany\" placeholder=\"Enter Product Company Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n                            \t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Product Name</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"productname\"  [(ngModel)]=\"addproduct.productname\" placeholder=\"Enter Product Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n                            <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Cost</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"price\"  [(ngModel)]=\"addproduct.price\" placeholder=\"Enter Cost Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n                        \r\n\t\t\t\t\t\r\n                        \t<button type=\"button\" (click)=\"onaddproduct()\" class=\"btn btn-lg btn-info\">Submit</button>\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t</form> \r\n\t\t\t\t\r\n    \t</div>\t\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/product/productadd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddProductComponent = (function () {
    function AddProductComponent(_ProductService) {
        this._ProductService = _ProductService;
        this.addproduct = { productfamily: "", productcompany: "", productname: "", price: "" };
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ProductService.getProducts().subscribe(function (data) { _this.data = data; console.log(_this.data); }, function (err) { console.log(err); });
    };
    AddProductComponent.prototype.onaddproduct = function () {
        console.log("on add prod clicked" + this.addproduct);
        for (var s in this.data) {
            if (this.data[s]["productfamily"] == this.addproduct.productfamily && this.data[s]["productname"] == this.addproduct.productname && this.data[s]["productcompany"] == this.addproduct.productcompany && this.data[s]["price"] == this.addproduct.price) {
                alert("Product already exists");
                return;
            }
        }
        if (this.addproduct.productname && this.addproduct.productfamily && this.addproduct.productcompany && isNaN(this.addproduct.price) == false) {
            this._ProductService.addProduct(this.addproduct).subscribe(function (data) {
                if (data) {
                    alert("product added");
                }
            });
        }
        else {
            alert("incorrect data submitted");
        }
    };
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/product/productadd.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/productall.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"topcontend\">\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\" (editConfirm)=\"onupdate($event)\" (deleteConfirm)=\"ondelete($event)\"  ></ng2-smart-table>\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/product/productall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllProductComponent = (function () {
    function AllProductComponent(authService, _ProductService) {
        this.authService = authService;
        this._ProductService = _ProductService;
        this.settings = {
            mode: 'inline',
            columns: {
                productfamily: {
                    title: 'Product Family'
                },
                productcompany: {
                    title: 'Product Company'
                },
                productname: {
                    title: 'Product Name'
                },
                price: {
                    title: 'Cost'
                }
            },
            pager: {
                perPage: 15
            },
            attr: {
                class: 'table-bordered table-striped'
            },
            actions: {
                add: false,
                edit: true,
                delete: true
            },
            edit: {
                confirmSave: true
            },
            delete: {
                confirmDelete: true
            }
        };
    }
    AllProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ProductService.getProducts().subscribe(function (data) { _this.data = data; console.log(_this.data); }, function (err) { console.log(err); });
    };
    AllProductComponent.prototype.onupdate = function ($event) {
        console.log($event.newData);
        var updateproduct = $event.newData;
        this._ProductService.updateProduct(updateproduct).subscribe(function (data) {
            if (data) {
                alert("product updated");
            }
        });
        $event.confirm.resolve();
    };
    AllProductComponent.prototype.ondelete = function ($event) {
        console.log($event.data);
        var deleteproduct = $event.data;
        this._ProductService.deleteProduct(deleteproduct).subscribe(function (data) {
            if (data) {
                alert("product deleted");
            }
        });
        $event.confirm.resolve();
    };
    AllProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/product/productall.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]])
    ], AllProductComponent);
    return AllProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        //this.isDev = false;  // Change to false before deployment
    }
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(_authService, _http) {
        this._authService = _authService;
        this._http = _http;
    }
    ProductService.prototype.getProducts = function () {
        var temp = localStorage.getItem('user');
        this.user = JSON.parse(temp);
        console.log(this.user);
        this.company = this.user.company;
        console.log(this.company);
        return this._http.get('api/products/' + this.company)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.addProduct = function (addproduct) {
        addproduct.company = this.company;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('api/products/', addproduct, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.updateProduct = function (updateProduct) {
        var productid = updateProduct._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.patch('api/products/' + productid, updateProduct, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (deleteProduct) {
        var productid = deleteProduct._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.delete('api/products/' + productid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/services/stock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockService = (function () {
    function StockService(_authService, _http) {
        this._authService = _authService;
        this._http = _http;
    }
    StockService.prototype.getCompany = function () {
    };
    StockService.prototype.getStock = function () {
        var temp = localStorage.getItem('user');
        this.user = JSON.parse(temp);
        console.log(this.user);
        this.company = this.user.company;
        console.log(this.company);
        return this._http.get('api/stocks/' + this.company)
            .map(function (response) { return response.json(); });
    };
    StockService.prototype.updateStock = function (updatestock) {
        var stockid = updatestock._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.patch('api/stocks/' + stockid, updatestock, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StockService.prototype.addStock = function (addstock) {
        addstock.company = this.company;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('api/stocks/', addstock, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StockService.prototype.deleteStock = function (deletestock) {
        var id = deletestock._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.delete('api/stocks/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], StockService);
    return StockService;
}());



/***/ }),

/***/ "../../../../../src/app/services/supplier.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupplierService = (function () {
    function SupplierService(_authService, _http) {
        this._authService = _authService;
        this._http = _http;
    }
    SupplierService.prototype.getCompany = function () {
    };
    SupplierService.prototype.getSupliers = function () {
        var temp = localStorage.getItem('user');
        this.user = JSON.parse(temp);
        console.log(this.user);
        this.company = this.user.company;
        console.log(this.company);
        return this._http.get('api/suppliers/' + this.company)
            .map(function (response) { return response.json(); });
    };
    SupplierService.prototype.updateSupplier = function (updatesupplier) {
        var supplierid = updatesupplier._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.patch('api/suppliers/' + supplierid, updatesupplier, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SupplierService.prototype.addSupplier = function (addsupplier) {
        addsupplier.company = this.company;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('api/suppliers/', addsupplier, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SupplierService.prototype.deleteSupplier = function (deletesupplier) {
        var supplierid = deletesupplier._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.delete('api/suppliers/' + supplierid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SupplierService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], SupplierService);
    return SupplierService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/services/warehouse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarehouseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WarehouseService = (function () {
    function WarehouseService(_authService, _http) {
        this._authService = _authService;
        this._http = _http;
    }
    WarehouseService.prototype.getCompany = function () {
    };
    WarehouseService.prototype.getWarehouse = function () {
        var temp = localStorage.getItem('user');
        this.user = JSON.parse(temp);
        console.log(this.user);
        this.company = this.user.company;
        console.log(this.company);
        return this._http.get('api/warehouses/' + this.company)
            .map(function (response) { return response.json(); });
    };
    WarehouseService.prototype.updateWarehouse = function (updatewarehouse) {
        var warehouseid = updatewarehouse._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.patch('api/warehouses/' + warehouseid, updatewarehouse, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WarehouseService.prototype.addWarehouse = function (addwarehouse) {
        addwarehouse.company = this.company;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('api/warehouses/', addwarehouse, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WarehouseService.prototype.deleteWarehouse = function (deletewarehouse) {
        var warehouseid = deletewarehouse._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.delete('api/warehouses/' + warehouseid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WarehouseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], WarehouseService);
    return WarehouseService;
}());



/***/ }),

/***/ "../../../../../src/app/stock/stock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topcontend{\r\n\tmargin-top: 80px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stock/stock.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"topcontend\">\n    \n<div class=\"container\">\n   <h3 class=\"well\">Stocks</h3>\n    <ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"./all\">OVERVIEW</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"./add\">ADD</a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n     \n</div>   \n</div>"

/***/ }),

/***/ "../../../../../src/app/stock/stock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StockComponent = (function () {
    function StockComponent() {
        this.settings = {
            columns: {
                productname: {
                    title: 'Product Name'
                },
                productcompany: {
                    title: 'Product Company'
                },
                productfamily: {
                    title: 'Product Family'
                },
                quantity: {
                    title: 'Quantity'
                },
                totalsalescount: {
                    title: 'Total Sales Count'
                },
                totalpurchasecount: {
                    title: 'Total Purchase Count'
                },
                totalsales: {
                    title: 'Total Purchase'
                },
                totalpurchase: {
                    title: 'Total Purchase'
                }
            },
            pager: {
                perPage: 15
            },
            actions: {
                add: false,
                edit: false,
                delete: false
            }
        };
        this.data = [
            {
                productfamily: "Mobile",
                productcompany: "Samsung",
                productname: "note 8",
                quantity: 75000,
                totalsalescount: 10,
                totalpurchasecount: 10,
                totalsales: 100000,
                totalpurchase: 1000000
            },
            {
                productfamily: "TV",
                productcompany: "Sony",
                productname: "Bravia",
                quantity: 75000,
                totalsalescount: 10,
                totalpurchasecount: 10,
                totalsales: 100000,
                totalpurchase: 1000000
            },
        ];
    }
    StockComponent.prototype.ngOnInit = function () {
    };
    StockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stock',
            template: __webpack_require__("../../../../../src/app/stock/stock.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stock/stock.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StockComponent);
    return StockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stock/stockadd.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/stock/stockadd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddStockComponent = (function () {
    function AddStockComponent(_StockService) {
        this._StockService = _StockService;
        this.addstock = { warehouse: "", productfamily: "", productcompany: "", productname: "", quantity: "", price: "" };
    }
    AddStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._StockService.getStock().subscribe(function (data) { _this.data = data; console.log(_this.data); }, function (err) { console.log(err); });
    };
    AddStockComponent.prototype.onaddstock = function () {
        console.log("on add prod clicked" + this.addstock);
        for (var s in this.data) {
            if (this.data[s]["name"] == this.addstock.name && this.data[s]["capacity"] == this.addstock.capacity && this.data[s]["reorder"] == this.addstock.reorder && this.data[s]["productfamily"] == this.addstock.productfamily && this.data[s]["productname"] == this.addstock.productname && this.data[s]["productcompany"] == this.addstock.productcompany) {
                alert("stock already exists");
                return;
            }
        }
        if (this.addstock.name && this.addstock.productname && this.addstock.productfamily && this.addstock.productcompany && isNaN(this.addstock.capacity) == false && isNaN(this.addstock.reorder) == false) {
            this._StockService.addStock(this.addstock).subscribe(function (data) {
                if (data) {
                    alert("stock added");
                }
            });
        }
        else {
            alert("incorrect data submitted");
        }
    };
    AddStockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/stock/stockadd.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]])
    ], AddStockComponent);
    return AddStockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stock/stockall.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"topcontend\">\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\" (editConfirm)=\"onupdate($event)\" (deleteConfirm)=\"ondelete($event)\" ></ng2-smart-table>\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/stock/stockall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllStockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllStockComponent = (function () {
    function AllStockComponent(_StockService) {
        this._StockService = _StockService;
        this.settings = {
            mode: 'inline',
            columns: {
                warehouse: {
                    title: 'Warehouse Name'
                },
                productname: {
                    title: 'Product Name'
                },
                productcompany: {
                    title: 'Product Company'
                },
                productfamily: {
                    title: 'Product Family'
                },
                quantity: {
                    title: 'Quantity'
                },
                price: {
                    title: 'Price'
                }
            },
            attr: {
                class: 'table-bordered table-striped'
            },
            pager: {
                perPage: 15
            },
            actions: {
                add: false,
                edit: true,
                delete: true
            },
            edit: {
                confirmSave: true
            },
            delete: {
                confirmDelete: true
            }
        };
    }
    AllStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._StockService.getStock().subscribe(function (data) { _this.data = data; console.log(_this.data); }, function (err) { console.log(err); });
    };
    AllStockComponent.prototype.onupdate = function ($event) {
        console.log($event.newData);
        var updatestock = $event.newData;
        this._StockService.updateStock(updatestock).subscribe(function (data) {
            if (data) {
                alert("stock updated");
            }
        });
        $event.confirm.resolve();
    };
    AllStockComponent.prototype.ondelete = function ($event) {
        console.log($event.data);
        var deletestock = $event.data;
        this._StockService.deleteStock(deletestock).subscribe(function (data) {
            if (data) {
                alert("stock deleted");
            }
        });
        $event.confirm.resolve();
    };
    AllStockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/stock/stockall.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]])
    ], AllStockComponent);
    return AllStockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/supplier/supplier.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topcontend{\r\n\tmargin-top: 80px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/supplier/supplier.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"topcontend\">\n    \n<div class=\"container\">\n   <h3 class=\"well\">Suppliers</h3>\n    <ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"./all\">OVERVIEW</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"./add\">ADD</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#!\">UPDATE</a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n     \n</div>   \n</div>"

/***/ }),

/***/ "../../../../../src/app/supplier/supplier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupplierComponent = (function () {
    function SupplierComponent() {
    }
    SupplierComponent.prototype.ngOnInit = function () {
    };
    SupplierComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-supplier',
            template: __webpack_require__("../../../../../src/app/supplier/supplier.component.html"),
            styles: [__webpack_require__("../../../../../src/app/supplier/supplier.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupplierComponent);
    return SupplierComponent;
}());



/***/ }),

/***/ "../../../../../src/app/supplier/supplieradd.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"topcontend\">\r\n    \r\n<div class=\"container\">\r\n\r\n\r\n\r\n    <form>\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Supplier Name</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"name\" [(ngModel)]=\"addsupplier.name\" placeholder=\"Enter Supplier  Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Product Family</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"productfamily\" [(ngModel)]=\"addsupplier.productfamily\" placeholder=\"Enter Product Family Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Product Company</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"productcompany\" [(ngModel)]=\"addsupplier.productcompany\" placeholder=\"Enter Product Company Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n                            \t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Product Name</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"productname\" [(ngModel)]=\"addsupplier.productname\" placeholder=\"Enter Product Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n                            <div class=\"col-sm-6 form-group\">\r\n\t\t\t\t\t\t\t\t<label>Min Order Count</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"quantity\"  [(ngModel)]=\"addsupplier.quantity\" placeholder=\"Enter Min Orde Count Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n            \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 form-group\">\r\n\t\t\t\t\t\t\t\t<label>Min Order Cost</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"price\" [(ngModel)]=\"addsupplier.price\" placeholder=\"Enter Max Cost  Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n                        \t<button type=\"button\" (click)=\"onaddsupplier()\" class=\"btn btn-lg btn-info\">Submit</button>\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t</form> \r\n\t\t\t\t\r\n    \t</div>\t\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/supplier/supplieradd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSupplierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_supplier_service__ = __webpack_require__("../../../../../src/app/services/supplier.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddSupplierComponent = (function () {
    function AddSupplierComponent(_SupplierService) {
        this._SupplierService = _SupplierService;
        this.addsupplier = { name: "", productfamily: "", productcompany: "", productname: "", quantity: "", price: "" };
    }
    AddSupplierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._SupplierService.getSupliers().subscribe(function (data) { _this.data = data; console.log(_this.data); }, function (err) { console.log(err); });
    };
    AddSupplierComponent.prototype.onaddsupplier = function () {
        console.log("on add prod clicked" + this.addsupplier);
        for (var s in this.data) {
            if (this.data[s]["name"] == this.addsupplier.name && this.data[s]["quantity"] == this.addsupplier.quantity && this.data[s]["productfamily"] == this.addsupplier.productfamily && this.data[s]["productname"] == this.addsupplier.productname && this.data[s]["productcompany"] == this.addsupplier.productcompany && this.data[s]["price"] == this.addsupplier.price) {
                alert("Supplier already exists");
                return;
            }
        }
        if (this.addsupplier.name && this.addsupplier.productname && this.addsupplier.productfamily && this.addsupplier.productcompany && isNaN(this.addsupplier.price) == false && isNaN(this.addsupplier.quantity) == false) {
            this._SupplierService.addSupplier(this.addsupplier).subscribe(function (data) {
                if (data) {
                    alert("product added");
                }
            });
        }
        else {
            alert("incorrect data submitted");
        }
    };
    AddSupplierComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/supplier/supplieradd.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_supplier_service__["a" /* SupplierService */]])
    ], AddSupplierComponent);
    return AddSupplierComponent;
}());



/***/ }),

/***/ "../../../../../src/app/supplier/supplierall.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"topcontend\">\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\" (editConfirm)=\"onupdate($event)\" (deleteConfirm)=\"ondelete($event)\" ></ng2-smart-table>\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/supplier/supplierall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllSupplierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_supplier_service__ = __webpack_require__("../../../../../src/app/services/supplier.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllSupplierComponent = (function () {
    function AllSupplierComponent(_SupplierService) {
        this._SupplierService = _SupplierService;
        this.settings = {
            mode: 'inline',
            columns: {
                name: {
                    title: 'Supplier Name'
                },
                productname: {
                    title: 'Product Name'
                },
                productcompany: {
                    title: 'Product Company'
                },
                productfamily: {
                    title: 'Product Family'
                },
                quantity: {
                    title: 'Min quantity'
                },
                price: {
                    title: 'price'
                }
            },
            attr: {
                class: 'table-bordered table-striped'
            },
            pager: {
                perPage: 15
            },
            actions: {
                add: false,
                edit: true,
                delete: true
            },
            edit: {
                confirmSave: true
            },
            delete: {
                confirmDelete: true
            }
        };
    }
    AllSupplierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._SupplierService.getSupliers().subscribe(function (data) { _this.data = data; console.log(_this.data); }, function (err) { console.log(err); });
    };
    AllSupplierComponent.prototype.onupdate = function ($event) {
        console.log($event.newData);
        var updatesupplier = $event.newData;
        this._SupplierService.updateSupplier(updatesupplier).subscribe(function (data) {
            if (data) {
                alert("supplier updated");
            }
        });
        $event.confirm.resolve();
    };
    AllSupplierComponent.prototype.ondelete = function ($event) {
        console.log($event.data);
        var deletesupplier = $event.data;
        this._SupplierService.deleteSupplier(deletesupplier).subscribe(function (data) {
            if (data) {
                alert("supplier deleted");
            }
        });
        $event.confirm.resolve();
    };
    AllSupplierComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/supplier/supplierall.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_supplier_service__["a" /* SupplierService */]])
    ], AllSupplierComponent);
    return AllSupplierComponent;
}());



/***/ }),

/***/ "../../../../../src/app/transaction/transaction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"topcontend\">\n    \n<div class=\"container\">\n    <h3 class=\"well\">Transaction</h3>\n    <ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"./all\">OVERVIEW</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"./add\">ADD</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#!\">UPDATE</a>\n  </li>\n</ul>\n\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n     \n</div>   \n</div>"

/***/ }),

/***/ "../../../../../src/app/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionComponent = (function () {
    function TransactionComponent() {
        this.settings = {
            columns: {
                transactionid: {
                    title: 'Transaction ID'
                },
                status: {
                    title: 'Status'
                },
                productname: {
                    title: 'Product Name'
                },
                productcompany: {
                    title: 'Product Company'
                },
                productfamily: {
                    title: 'Product Family'
                },
                contact: {
                    title: 'Contact'
                },
                type: {
                    title: 'Type'
                },
                startdate: {
                    title: 'Start date'
                },
                enddate: {
                    title: 'enddate'
                },
                quantity: {
                    title: 'Quantity'
                },
                unitprice: {
                    title: 'Unit Price'
                },
                totalcost: {
                    title: 'Total Cost'
                },
            },
            pager: {
                perPage: 15
            },
            actions: {
                add: false,
                edit: false,
                delete: false
            }
        };
        this.data = [
            {
                transactionid: 123,
                status: "open",
                productfamily: "Mobile",
                productcompany: "Samsung",
                productname: "note 8",
                contact: "rohan",
                type: "sales",
                startdate: '2017-01-01',
                enddate: '2017-01-05',
                quantity: 10,
                unitprice: 100,
                totalcost: 100000,
            },
            {
                transactionid: 123,
                status: "open",
                productfamily: "Mobile",
                productcompany: "Samsung",
                productname: "note 8",
                contact: "amazon",
                type: "purchase",
                startdate: '2017-01-01',
                enddate: '2017-01-05',
                quantity: 10,
                unitprice: 100,
                totalcost: 100000,
            },
            {
                transactionid: 123,
                status: "open",
                productfamily: "Mobile",
                productcompany: "Samsung",
                productname: "note 8",
                contact: "warehouse a",
                type: "defect",
                startdate: '2017-01-01',
                enddate: '2017-01-05',
                quantity: 10,
                unitprice: 100,
                totalcost: 100000,
            },
            {
                transactionid: 123,
                status: "open",
                productfamily: "Mobile",
                productcompany: "Samsung",
                productname: "note 8",
                contact: "transfer a-b",
                type: "transfer",
                startdate: '2017-01-01',
                enddate: '2017-01-05',
                quantity: 10,
                unitprice: 100,
                totalcost: 100000,
            }
        ];
    }
    TransactionComponent.prototype.ngOnInit = function () {
    };
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__("../../../../../src/app/transaction/transaction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transaction/transaction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/warehouse/warehouse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/warehouse/warehouse.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"topcontend\">\n    \n<div class=\"container\">\n   <h3 class=\"well\">Warehouses</h3>\n    <ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"./all\">OVERVIEW</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"./add\">ADD</a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n     \n</div>   \n</div>"

/***/ }),

/***/ "../../../../../src/app/warehouse/warehouse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarehouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WarehouseComponent = (function () {
    function WarehouseComponent() {
    }
    WarehouseComponent.prototype.ngOnInit = function () {
    };
    WarehouseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-warehouse',
            template: __webpack_require__("../../../../../src/app/warehouse/warehouse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/warehouse/warehouse.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WarehouseComponent);
    return WarehouseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/warehouse/warehouseadd.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"topcontend\">\r\n    \r\n<div class=\"container\">\r\n\r\n\r\n\r\n    <form>\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Warehouse Name</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"name\" [(ngModel)]=\"addwarehouse.name\" placeholder=\"Enter Supplier  Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Product Family</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"productfamily\" [(ngModel)]=\"addwarehouse.productfamily\" placeholder=\"Enter Product Family Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Product Company</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"productcompany\" [(ngModel)]=\"addwarehouse.productcompany\" placeholder=\"Enter Product Company Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n                            \t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Product Name</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"productname\" [(ngModel)]=\"addwarehouse.productname\" placeholder=\"Enter Product Name Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n                            <div class=\"col-sm-6 form-group\">\r\n\t\t\t\t\t\t\t\t<label>Capacity</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"capacity\"  [(ngModel)]=\"addwarehouse.capacity\" placeholder=\"Enter Product Capacity Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n                            <div class=\"col-sm-6 form-group\">\r\n\t\t\t\t\t\t\t\t<label>Reorder Point</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"reorder\"  [(ngModel)]=\"addwarehouse.reorder\" placeholder=\"Enter Product Capacity Here..\" class=\"form-control\">\r\n\t\t\t\t\t\t\t</div>\r\n            \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n                        \t<button type=\"button\" (click)=\"onaddwarehouse()\" class=\"btn btn-lg btn-info\">Submit</button>\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t</form> \r\n\t\t\t\t\r\n    \t</div>\t\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/warehouse/warehouseadd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWarehouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__ = __webpack_require__("../../../../../src/app/services/warehouse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddWarehouseComponent = (function () {
    function AddWarehouseComponent(_WarehouseService) {
        this._WarehouseService = _WarehouseService;
        this.addwarehouse = { name: "", productfamily: "", productcompany: "", productname: "", capacity: "", reorder: "" };
    }
    AddWarehouseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._WarehouseService.getWarehouse().subscribe(function (data) { _this.data = data; console.log(_this.data); }, function (err) { console.log(err); });
    };
    AddWarehouseComponent.prototype.onaddwarehouse = function () {
        console.log("on add prod clicked" + this.addwarehouse);
        for (var s in this.data) {
            if (this.data[s]["name"] == this.addwarehouse.name && this.data[s]["capacity"] == this.addwarehouse.capacity && this.data[s]["reorder"] == this.addwarehouse.reorder && this.data[s]["productfamily"] == this.addwarehouse.productfamily && this.data[s]["productname"] == this.addwarehouse.productname && this.data[s]["productcompany"] == this.addwarehouse.productcompany) {
                alert("Warehouse already exists");
                return;
            }
        }
        if (this.addwarehouse.name && this.addwarehouse.productname && this.addwarehouse.productfamily && this.addwarehouse.productcompany && isNaN(this.addwarehouse.capacity) == false && isNaN(this.addwarehouse.reorder) == false) {
            this._WarehouseService.addWarehouse(this.addwarehouse).subscribe(function (data) {
                if (data) {
                    alert("Warehouse added");
                }
            });
        }
        else {
            alert("incorrect data submitted");
        }
    };
    AddWarehouseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/warehouse/warehouseadd.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__["a" /* WarehouseService */]])
    ], AddWarehouseComponent);
    return AddWarehouseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/warehouse/warehouseall.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"topcontend\">\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\" (editConfirm)=\"onupdate($event)\" (deleteConfirm)=\"ondelete($event)\" ></ng2-smart-table>\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/warehouse/warehouseall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllWarehouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__ = __webpack_require__("../../../../../src/app/services/warehouse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllWarehouseComponent = (function () {
    function AllWarehouseComponent(_WarehouseService) {
        this._WarehouseService = _WarehouseService;
        this.settings = {
            mode: 'inline',
            columns: {
                name: {
                    title: 'Warehouse Name'
                },
                productname: {
                    title: 'Product Name'
                },
                productcompany: {
                    title: 'Product Company'
                },
                productfamily: {
                    title: 'Product Family'
                },
                capacity: {
                    title: 'Capacity'
                },
                reorder: {
                    title: 'Reorder point'
                }
            },
            attr: {
                class: 'table-bordered table-striped'
            },
            pager: {
                perPage: 15
            },
            actions: {
                add: false,
                edit: true,
                delete: true
            },
            edit: {
                confirmSave: true
            },
            delete: {
                confirmDelete: true
            }
        };
    }
    AllWarehouseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._WarehouseService.getWarehouse().subscribe(function (data) { _this.data = data; console.log(_this.data); }, function (err) { console.log(err); });
    };
    AllWarehouseComponent.prototype.onupdate = function ($event) {
        console.log($event.newData);
        var updatewarehouse = $event.newData;
        this._WarehouseService.updateWarehouse(updatewarehouse).subscribe(function (data) {
            if (data) {
                alert("warehouse updated");
            }
        });
        $event.confirm.resolve();
    };
    AllWarehouseComponent.prototype.ondelete = function ($event) {
        console.log($event.data);
        var deletewarehouse = $event.data;
        this._WarehouseService.deleteWarehouse(deletewarehouse).subscribe(function (data) {
            if (data) {
                alert("warehouse deleted");
            }
        });
        $event.confirm.resolve();
    };
    AllWarehouseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/warehouse/warehouseall.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__["a" /* WarehouseService */]])
    ], AllWarehouseComponent);
    return AllWarehouseComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map