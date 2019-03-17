(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showsdetail-showsdetail-module"],{

/***/ "./src/app/pages/tabs/showsdetail/showsdetail.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/showsdetail/showsdetail.module.ts ***!
  \**************************************************************/
/*! exports provided: ShowsdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsdetailPageModule", function() { return ShowsdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _showsdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showsdetail.page */ "./src/app/pages/tabs/showsdetail/showsdetail.page.ts");







var routes = [
    {
        path: '',
        component: _showsdetail_page__WEBPACK_IMPORTED_MODULE_6__["ShowsdetailPage"]
    }
];
var ShowsdetailPageModule = /** @class */ (function () {
    function ShowsdetailPageModule() {
    }
    ShowsdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_showsdetail_page__WEBPACK_IMPORTED_MODULE_6__["ShowsdetailPage"]]
        })
    ], ShowsdetailPageModule);
    return ShowsdetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/showsdetail/showsdetail.page.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/showsdetail/showsdetail.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'Shows'\"></ion-back-button>\n        </ion-buttons>\n        <ion-title text-center dark>{{title}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content [style.background-color]=\"'white'\" pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tabs/showsdetail/showsdetail.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/showsdetail/showsdetail.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvc2hvd3NkZXRhaWwvc2hvd3NkZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tabs/showsdetail/showsdetail.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/showsdetail/showsdetail.page.ts ***!
  \************************************************************/
/*! exports provided: ShowsdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsdetailPage", function() { return ShowsdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shows_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shows.service */ "./src/app/services/shows.service.ts");




var ShowsdetailPage = /** @class */ (function () {
    function ShowsdetailPage(activatedRoute, showsService) {
        this.activatedRoute = activatedRoute;
        this.showsService = showsService;
        this.title = '';
    }
    ShowsdetailPage.prototype.ngOnInit = function () {
        this.reload();
    };
    ShowsdetailPage.prototype.reload = function (completed) {
        var _this = this;
        var name = this.activatedRoute.snapshot.paramMap.get('name');
        this.showsService.getShowDetail(name).subscribe(function (data) {
            _this.results = data;
            _this.title = data.name;
            if (completed != null)
                completed();
        });
    };
    ShowsdetailPage.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        this.reload(function () {
            console.log('Async operation has ended');
            event.target.complete();
        });
    };
    ShowsdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showsdetail',
            template: __webpack_require__(/*! ./showsdetail.page.html */ "./src/app/pages/tabs/showsdetail/showsdetail.page.html"),
            styles: [__webpack_require__(/*! ./showsdetail.page.scss */ "./src/app/pages/tabs/showsdetail/showsdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_shows_service__WEBPACK_IMPORTED_MODULE_3__["ShowsService"]])
    ], ShowsdetailPage);
    return ShowsdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=showsdetail-showsdetail-module.js.map