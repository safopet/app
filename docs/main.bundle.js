webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vending_machine_component__ = __webpack_require__("../../../../../src/app/vending-machine.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/vending-machine', pathMatch: 'full' },
    { path: 'vending-machine', component: __WEBPACK_IMPORTED_MODULE_2__vending_machine_component__["a" /* VendingMachineComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Vending Machine';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vending_machine_component__ = __webpack_require__("../../../../../src/app/vending-machine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vending_machine_service__ = __webpack_require__("../../../../../src/app/vending-machine.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Imports for loading & configuring the in-memory web api



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__vending_machine_component__["a" /* VendingMachineComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__vending_machine_service__["a" /* VendingMachineService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/coin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coin; });
/* harmony export (immutable) */ __webpack_exports__["b"] = push;
/* harmony export (immutable) */ __webpack_exports__["c"] = merge;
var Coin = (function () {
    function Coin(id, title, amount, count) {
        this.id = id;
        this.title = title;
        this.amount = amount;
        this.count = count;
    }
    Object.defineProperty(Coin.prototype, "totalAmount", {
        get: function () {
            return this.amount * this.count;
        },
        enumerable: true,
        configurable: true
    });
    return Coin;
}());

function push(pocket, coinId) {
    var coin = pocket.find(function (c) { return c.id == coinId; });
    coin.count++;
    return pocket;
}
function merge(pocket, coins) {
    var _loop_1 = function (c) {
        var pocketCoin = pocket.find(function (p) { return p.id == c.id; });
        pocketCoin.count += c.count;
    };
    for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
        var c = coins_1[_i];
        _loop_1(c);
    }
    return pocket;
}
//# sourceMappingURL=coin.js.map

/***/ }),

/***/ "../../../../../src/app/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(id, name, price, count) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/vending-machine.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Кошелёк пользователя ({{userAmount}})</h4>\r\n<div>\r\n  <span *ngFor=\"let coin of userPocket\">\r\n      <button [disabled]='coin.count == 0' (click)='push(coin)'>{{coin.amount}} ({{coin.count}})</button>\r\n    </span>\r\n</div>\r\n<h4>Внесенно: {{pendingAmount}}</h4>\r\n<h4 *ngIf=\"showMessage\">Сообщение: {{message}}</h4>\r\n<button (click)='change()'>Сдача</button>\r\n<h4>Кошелёк машины ({{machineAmount}})</h4>\r\n<div> |\r\n  <span *ngFor=\"let coin of machinePocket\">\r\n      <span>{{coin.amount}} ({{coin.count}}) |</span>\r\n    </span>\r\n</div>\r\n<h4>Товары</h4>\r\n<div>\r\n  <span *ngFor=\"let product of products\">\r\n      <button [disabled]='product.count == 0' (click)='buy(product)'>{{product.name}} - {{product.price}} ({{product.count}})</button>\r\n    </span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vending-machine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vending_machine_service__ = __webpack_require__("../../../../../src/app/vending-machine.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendingMachineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VendingMachineComponent = (function () {
    function VendingMachineComponent(vendingMachineService) {
        this.vendingMachineService = vendingMachineService;
        this.message = null;
    }
    Object.defineProperty(VendingMachineComponent.prototype, "products", {
        get: function () {
            return this.vendingMachineService.products;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendingMachineComponent.prototype, "userPocket", {
        get: function () {
            return this.vendingMachineService.userPocket.sort(function (a, b) { return a.amount - b.amount; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendingMachineComponent.prototype, "userAmount", {
        get: function () {
            var x = 0;
            for (var _i = 0, _a = this.vendingMachineService.userPocket; _i < _a.length; _i++) {
                var c = _a[_i];
                x += c.totalAmount;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendingMachineComponent.prototype, "machinePocket", {
        get: function () {
            return this.vendingMachineService.machinePocket.sort(function (a, b) { return a.amount - b.amount; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendingMachineComponent.prototype, "machineAmount", {
        get: function () {
            var x = 0;
            for (var _i = 0, _a = this.vendingMachineService.machinePocket; _i < _a.length; _i++) {
                var c = _a[_i];
                x += c.totalAmount;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendingMachineComponent.prototype, "pendingAmount", {
        get: function () {
            return this.vendingMachineService.pendingAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendingMachineComponent.prototype, "showMessage", {
        get: function () {
            return this.message !== null;
        },
        enumerable: true,
        configurable: true
    });
    VendingMachineComponent.prototype.ngOnInit = function () { };
    VendingMachineComponent.prototype.push = function (coin) {
        this.vendingMachineService.pushCoin(coin);
        this.message = null;
    };
    VendingMachineComponent.prototype.change = function () {
        this.vendingMachineService.getChange();
        this.message = null;
    };
    VendingMachineComponent.prototype.buy = function (product) {
        if (!this.vendingMachineService.getProduct(product.id)) {
            this.message = 'Недостаточно денег';
        }
        else {
            this.message = 'Спасибо!';
        }
    };
    return VendingMachineComponent;
}());
VendingMachineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'vending-machine',
        template: __webpack_require__("../../../../../src/app/vending-machine.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vending_machine_service__["a" /* VendingMachineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vending_machine_service__["a" /* VendingMachineService */]) === "function" && _a || Object])
], VendingMachineComponent);

var _a;
//# sourceMappingURL=vending-machine.component.js.map

/***/ }),

/***/ "../../../../../src/app/vending-machine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coin__ = __webpack_require__("../../../../../src/app/coin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product__ = __webpack_require__("../../../../../src/app/product.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendingMachineService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VendingMachineService = (function () {
    function VendingMachineService() {
        this.userPocket = [
            new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */](1, '', 1, 10),
            new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */](2, '', 2, 30),
            new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */](5, '', 5, 20),
            new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */](10, '', 10, 15),
        ];
        this.machinePocket = [
            new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */](1, '', 1, 100),
            new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */](2, '', 2, 100),
            new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */](5, '', 5, 100),
            new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */](10, '', 10, 100),
        ];
        this.products = [
            new __WEBPACK_IMPORTED_MODULE_2__product__["a" /* Product */](13, 'Чай', 13, 10),
            new __WEBPACK_IMPORTED_MODULE_2__product__["a" /* Product */](18, 'Кофе', 18, 20),
            new __WEBPACK_IMPORTED_MODULE_2__product__["a" /* Product */](21, 'Кофе с молоком', 21, 20),
            new __WEBPACK_IMPORTED_MODULE_2__product__["a" /* Product */](35, 'Сок', 35, 15),
        ];
        this.pendingAmountValue = 0;
    }
    Object.defineProperty(VendingMachineService.prototype, "pendingAmount", {
        get: function () {
            return this.pendingAmountValue;
        },
        enumerable: true,
        configurable: true
    });
    VendingMachineService.prototype.pushCoin = function (coin) {
        this.userPocket.find(function (p) { return p.id == coin.id; }).count--;
        this.pendingAmountValue += coin.amount;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__coin__["b" /* push */])(this.machinePocket, coin.id);
    };
    VendingMachineService.prototype.getProduct = function (id) {
        var product = this.products.find(function (p) { return p.id == id; });
        if (this.pendingAmount < product.price || product.count < 1) {
            return false;
        }
        product.count--;
        this.pendingAmountValue -= product.price;
        return true;
    };
    VendingMachineService.prototype.getChange = function () {
        var changeAmount = this.pendingAmountValue;
        var change = [];
        for (var _i = 0, _a = this.machinePocket.sort(function (a, b) { return b.amount - a.amount; }); _i < _a.length; _i++) {
            var coin = _a[_i];
            var x = Math.min(coin.count, Math.trunc(changeAmount / coin.amount));
            if (x > 0) {
                var changeCoin = new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */](coin.id, coin.title, coin.amount, x);
                change.push(changeCoin);
                coin.count -= x;
                changeAmount -= changeCoin.totalAmount;
                if (changeAmount == 0) {
                    break;
                }
            }
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__coin__["c" /* merge */])(this.userPocket, change);
        this.pendingAmountValue = changeAmount;
        return this.pendingAmountValue == 0;
    };
    return VendingMachineService;
}());
VendingMachineService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])()
], VendingMachineService);

//# sourceMappingURL=vending-machine.service.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map