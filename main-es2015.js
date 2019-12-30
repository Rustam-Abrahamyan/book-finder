(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-top></app-nav-top>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-result/search-result.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-result/search-result.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mx-auto\">\n\n  <div class=\"row\">\n    <div class=\"col mt-3 mb-5\">\n\n      <table class=\"table table-hover mb-3\">\n        <thead>\n        <tr>\n          <th scope=\"col\"><i class=\"fas fa-search\"></i> Search results - \"{{ userInput }}\"</th>\n          <th></th>\n        </tr>\n        </thead>\n\n        <tbody>\n        <ng-container *ngIf=\"searchGoogle.length > 0 && userSelect === 'google' ; else itBooks\">\n          <tr *ngFor=\"let item of searchGoogle | paginate: { itemsPerPage: 10, currentPage: numOfPages }\">\n            <td>\n              <a href=\"{{item.volumeInfo?.previewLink}}\" target=\"_blank\"\n                 *ngIf=\"item.volumeInfo.imageLinks?.smallThumbnail\">\n                <img src=\"{{ item.volumeInfo.imageLinks?.smallThumbnail }}\" class=\"mr-3\"\n                     alt=\"{{ item.volumeInfo.imageLinks?.smallThumbnail }}\">\n              </a>\n              <a href=\"{{item.volumeInfo?.previewLink}}\" target=\"_blank\" class=\"res-name\">\n                <h5>{{ item.volumeInfo.title }}</h5>\n              </a>\n\n              <div class=\"res-description\" *ngIf=\"item.volumeInfo?.description ; else noDesc\">\n                {{ item.volumeInfo.description }}\n              </div>\n\n              <ng-template #noDesc>no description was found!</ng-template>\n\n              <div class=\"book-details mt-3\">\n                  <span class=\"author\" style=\"float: left\">\n                    <i class=\"fas fa-book\"></i> by {{ item.volumeInfo?.authors }}\n                  </span>\n                <span style=\"float: right\" class=\"ml-3\">\n                    <i class=\"fas fa-file-alt\"></i> {{ item.volumeInfo?.pageCount}}\n                  </span>\n                <span style=\"float: right\">\n                    <i class=\"fas fa-star\"></i> {{ item.volumeInfo?.ratingsCount }}\n                  </span>\n                <span style=\"float: right\"><a href=\"{{ item.volumeInfo?.previewLink }}\" target=\"_blank\">\n                      <i class=\"fas fa-link mr-3\"></i> </a>\n                  </span>\n              </div>\n\n            </td>\n\n          </tr>\n        </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div><!-- End row -->\n\n  <ng-template #itBooks>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3 mb-3\"\n           *ngFor=\"let item of searchItBooks | paginate: { itemsPerPage: 10, currentPage: numOfPages }\">\n        <div class=\"card h-100\">\n          <a href=\"{{item.url}}\" target=\"_blank\" *ngIf=\"item?.image\">\n            <img src=\"{{ item.image }}\" alt=\"{{ item.image }\">\n          </a>\n          <div class=\"card-body\">\n            <a href=\"{{item.url}}\" target=\"_blank\" class=\"res-name\">\n              <h5>{{ item.title }}</h5>\n            </a>\n            <p class=\"card-text\">{{ item.subtitle }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </ng-template>\n\n  <div class=\"res-pagination mt-3\" *ngIf=\"numOfPages > 10\">\n    <pagination-controls (pageChange)=\"numOfPages = $event\"></pagination-controls>\n  </div>\n\n\n</div><!-- End container -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partials/footer/footer.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partials/footer/footer.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n  <div class=\"card text-center\">\n\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Created with ❤️ by <a href=\"https://github.com/rustam-abrahamyan\" target=\"_blank\">Rustam Abrahamyan</a></h5>\n      <p class=\"card-text\">Find books with just one search.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go TOP</a>\n    </div>\n\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partials/nav-top/nav-top.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partials/nav-top/nav-top.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div id=\"header\" *ngIf=\"!hideHeader\">\n    <div class=\"container\">\n\n      <h2 class=\"bounce\"><a routerLink=\"/\">Book Finder <i class=\"fas fa-search\"></i></a></h2>\n      <p class=\"animated fadeInUp delay-1s\">Find books with just one search</p>\n\n      <app-top-search></app-top-search>\n\n    </div>\n  </div>\n\n  <button class=\"min-header\" (click)=\"hideShow()\"\n  data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Hide Top Header\">\n    <i class=\"fas fa-minus\"></i>\n  </button>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Book Finder';
        this.bookTitle = '';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search-result/search-result.component */ "./src/app/components/search-result/search-result.component.ts");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routing/app-routing.module */ "./src/app/routing/app-routing.module.ts");
/* harmony import */ var _partials_nav_top_nav_top_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/nav-top/nav-top.component */ "./src/app/partials/nav-top/nav-top.component.ts");
/* harmony import */ var _partials_top_search_top_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partials/top-search/top-search.component */ "./src/app/partials/top-search/top-search.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__["SearchResultComponent"],
            _partials_nav_top_nav_top_component__WEBPACK_IMPORTED_MODULE_9__["NavTopComponent"],
            _partials_top_search_top_search_component__WEBPACK_IMPORTED_MODULE_10__["TopSearchComponent"],
            _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"],
            _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes bouncing-loader {\n  to {\n    opacity: 0.1;\n    transform: translate3d(0, -1rem, 0);\n  }\n}\n@keyframes bouncing-loader {\n  to {\n    opacity: 0.1;\n    transform: translate3d(0, -1rem, 0);\n  }\n}\n.bouncing-loader {\n  display: flex;\n  justify-content: center;\n}\n.bouncing-loader > div {\n  width: 1rem;\n  height: 1rem;\n  margin: 3rem 0.2rem;\n  background: #8385aa;\n  border-radius: 50%;\n  -webkit-animation: bouncing-loader 0.6s infinite alternate;\n          animation: bouncing-loader 0.6s infinite alternate;\n}\n.bouncing-loader > div:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.bouncing-loader > div:nth-child(3) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvQzpcXFVzZXJzXFxMRU5PVk9cXERlc2t0b3BcXGJvb2stZmluZGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2FkZXJcXGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsbUNBQUE7RUNDRjtBQUNGO0FETEE7RUFDRTtJQUNFLFlBQUE7SUFDQSxtQ0FBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0FGO0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBEQUFBO1VBQUEsa0RBQUE7QUNBRjtBREdBO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ0FGO0FER0E7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGJvdW5jaW5nLWxvYWRlciB7XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMXJlbSwgMCk7XG4gIH1cbn1cblxuLmJvdW5jaW5nLWxvYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm91bmNpbmctbG9hZGVyID4gZGl2IHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbWFyZ2luOiAzcmVtIDAuMnJlbTtcbiAgYmFja2dyb3VuZDogIzgzODVhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGJvdW5jaW5nLWxvYWRlciAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLmJvdW5jaW5nLWxvYWRlciA+IGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5ib3VuY2luZy1sb2FkZXIgPiBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuIiwiQGtleWZyYW1lcyBib3VuY2luZy1sb2FkZXIge1xuICB0byB7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTFyZW0sIDApO1xuICB9XG59XG4uYm91bmNpbmctbG9hZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib3VuY2luZy1sb2FkZXIgPiBkaXYge1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBtYXJnaW46IDNyZW0gMC4ycmVtO1xuICBiYWNrZ3JvdW5kOiAjODM4NWFhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogYm91bmNpbmctbG9hZGVyIDAuNnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uYm91bmNpbmctbG9hZGVyID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuLmJvdW5jaW5nLWxvYWRlciA+IGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: `
    <div class="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/loader/loader.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoaderComponent);



/***/ }),

/***/ "./src/app/components/search-result/search-result.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-result/search-result.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table th {\n  font-family: \"Montserrat\", sans-serif;\n  color: #8795a1;\n  font-weight: 100;\n  border: 0;\n}\n.table td {\n  background-color: #ffffff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n}\n.table td .res-name {\n  text-decoration: none;\n}\n.table td .res-description {\n  font-size: 14px;\n}\n.table td .fa-star {\n  color: #FFEB3B;\n}\n.table td .fa-link {\n  color: #8795a1;\n}\n.table td .author {\n  font-size: 14px;\n  color: #8795a1;\n}\n.table td .book-details {\n  font-size: 14px;\n}\n.table td img {\n  float: left;\n}\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n}\n.card img {\n  width: 100%;\n  -o-object-fit: none;\n     object-fit: none;\n}\n.res-pagination {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0L0M6XFxVc2Vyc1xcTEVOT1ZPXFxEZXNrdG9wXFxib29rLWZpbmRlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VhcmNoLXJlc3VsdFxcc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNBSjtBREdFO0VBQ0UseUJBQUE7RUFDQSw0RUFBQTtBQ0RKO0FER0k7RUFDRSxxQkFBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0FDRk47QURLSTtFQUNFLGNBQUE7QUNITjtBRE1JO0VBQ0UsY0FBQTtBQ0pOO0FET0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0xOO0FEUUk7RUFDRSxlQUFBO0FDTk47QURTSTtFQUNFLFdBQUE7QUNQTjtBRFlBO0VBQ0UsNEVBQUE7QUNURjtBRFlBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0tBQUEsZ0JBQUE7QUNURjtBRFlBO0VBQ0Usa0JBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcbiAgdGgge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICM4Nzk1YTE7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICB0ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIC4xMiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgLjA4KTtcblxuICAgIC5yZXMtbmFtZSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gICAgLnJlcy1kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmZhLXN0YXIge1xuICAgICAgY29sb3I6ICNGRkVCM0I7XG4gICAgfVxuXG4gICAgLmZhLWxpbmsge1xuICAgICAgY29sb3I6ICM4Nzk1YTE7XG4gICAgfVxuXG4gICAgLmF1dGhvciB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzg3OTVhMTtcbiAgICB9XG5cbiAgICAuYm9vay1kZXRhaWxzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIC4wOCk7XG59XG5cbi5jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBub25lO1xufVxuXG4ucmVzLXBhZ2luYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIudGFibGUgdGgge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjODc5NWExO1xuICBmb250LXdlaWdodDogMTAwO1xuICBib3JkZXI6IDA7XG59XG4udGFibGUgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuLnRhYmxlIHRkIC5yZXMtbmFtZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi50YWJsZSB0ZCAucmVzLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRhYmxlIHRkIC5mYS1zdGFyIHtcbiAgY29sb3I6ICNGRkVCM0I7XG59XG4udGFibGUgdGQgLmZhLWxpbmsge1xuICBjb2xvcjogIzg3OTVhMTtcbn1cbi50YWJsZSB0ZCAuYXV0aG9yIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzg3OTVhMTtcbn1cbi50YWJsZSB0ZCAuYm9vay1kZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRhYmxlIHRkIGltZyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbi5jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBub25lO1xufVxuXG4ucmVzLXBhZ2luYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/search-result/search-result.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/search-result/search-result.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_book_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book-search.service */ "./src/app/services/book-search.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let SearchResultComponent = class SearchResultComponent {
    constructor(service) {
        this.service = service;
        this.searchGoogle = [];
        this.searchItBooks = [];
        this.userInput = '';
        this.userSelect = 'google';
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.service.bookTitle$, this.service.userSelect$)
            .subscribe(data => {
            this.userSelect = data[1];
            this.userInput = data[0];
            if (this.userSelect === 'google') {
                this.service.getBook(this.userInput).subscribe((books) => {
                    this.searchGoogle = books;
                });
            }
            else {
                this.service.postTitle(this.userInput).subscribe((books) => {
                    this.searchItBooks = books.books;
                }, error => console.log('server down.. '));
            }
        });
    }
};
SearchResultComponent.ctorParameters = () => [
    { type: src_app_services_book_search_service__WEBPACK_IMPORTED_MODULE_2__["BookSearchService"] }
];
SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-result/search-result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-result.component.scss */ "./src/app/components/search-result/search-result.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_book_search_service__WEBPACK_IMPORTED_MODULE_2__["BookSearchService"]])
], SearchResultComponent);



/***/ }),

/***/ "./src/app/partials/footer/footer.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  height: 50px !important;\n}\nfooter .fixed-bottom {\n  font-family: \"Montserrat\", sans-serif;\n  background-color: #ffffff;\n  border-top: 1px solid #eaeaea;\n  font-size: 12px;\n}\nfooter .fixed-bottom a {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL0M6XFxVc2Vyc1xcTEVOT1ZPXFxEZXNrdG9wXFxib29rLWZpbmRlci9zcmNcXGFwcFxccGFydGlhbHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXJ0aWFscy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRjtBRENFO0VBQ0UscUNBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDRSxlQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9wYXJ0aWFscy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG5cbiAgLmZpeGVkLWJvdHRvbSB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgIGEge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuIiwiZm9vdGVyIHtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5mb290ZXIgLmZpeGVkLWJvdHRvbSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmZvb3RlciAuZml4ZWQtYm90dG9tIGEge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partials/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/partials/footer/footer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/partials/nav-top/nav-top.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/partials/nav-top/nav-top.component.ts ***!
  \*******************************************************/
/*! exports provided: NavTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTopComponent", function() { return NavTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavTopComponent = class NavTopComponent {
    constructor() {
        this.hideHeader = false;
    }
    ngOnInit() {
    }
    hideShow() {
        this.hideHeader = this.hideHeader !== true;
    }
};
NavTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-top',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partials/nav-top/nav-top.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavTopComponent);



/***/ }),

/***/ "./src/app/partials/top-search/top-search.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/partials/top-search/top-search.component.ts ***!
  \*************************************************************/
/*! exports provided: TopSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSearchComponent", function() { return TopSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_book_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book-search.service */ "./src/app/services/book-search.service.ts");



let TopSearchComponent = class TopSearchComponent {
    constructor(service) {
        this.service = service;
        this.userInput = '';
        this.userSelect = '';
    }
    ngOnInit() {
    }
    getBookTitle(event) {
        this.userInput = event.target.value;
        if (this.userInput.length > 0 && this.service.validateInput(this.userInput)) {
            this.service.updateBookTitle(this.userInput);
        }
    }
    onChange(event) {
        this.userSelect = event.target.value;
        if (this.userSelect.length > 0 && this.service.validateInput(this.userSelect)) {
            this.service.updateUserSelect(this.userSelect);
        }
    }
};
TopSearchComponent.ctorParameters = () => [
    { type: src_app_services_book_search_service__WEBPACK_IMPORTED_MODULE_2__["BookSearchService"] }
];
TopSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-search',
        template: `
    <form>

      <div class="col-sm-4" style="margin:0 auto;">
        <input type="search" class="form-control" placeholder="Book title..." required
               (keyup)="getBookTitle($event)">
      </div>

      <div class="col-sm-2" style="margin:5px auto 0;">
        <select class="custom-select my-1 mr-sm-2" (change)="onChange($event)">
          <option value="google">Google</option>
          <option value="itbook">itbook.store</option>
        </select>
      </div>

    </form>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_book_search_service__WEBPACK_IMPORTED_MODULE_2__["BookSearchService"]])
], TopSearchComponent);



/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/search-result/search-result.component */ "./src/app/components/search-result/search-result.component.ts");




const routes = [
    { path: '', component: _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultComponent"] },
    { path: '**', redirectTo: '/' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/services/book-search.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/book-search.service.ts ***!
  \*************************************************/
/*! exports provided: BookSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookSearchService", function() { return BookSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let BookSearchService = class BookSearchService {
    constructor(http) {
        this.http = http;
        this.bookTitleSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('javascript');
        this.bookTitle$ = this.bookTitleSource.asObservable();
        this.userSelectSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('google');
        this.userSelect$ = this.userSelectSource.asObservable();
        this.regx = new RegExp('^[a-zA-Z0-9-.+# ]*$');
        this.path = '';
    }
    updateBookTitle(bookTitle) {
        this.bookTitleSource.next(bookTitle);
    }
    updateUserSelect(userSelect) {
        this.userSelectSource.next(userSelect);
    }
    getBook(bookTitle) {
        this.path = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`;
        return this.http.get(this.path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('items'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(2));
    }
    postTitle(book) {
        return this.http.post('https://books-server-10.herokuapp.com/itbooks', { book })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(5));
    }
    validateInput(input) {
        return input.length < 0 ? false : this.regx.test(input);
    }
};
BookSearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BookSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], BookSearchService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LENOVO\Desktop\book-finder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);