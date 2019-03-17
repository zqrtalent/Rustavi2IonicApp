(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shows-shows-module"],{

/***/ "./src/app/pages/tabs/shows/shows.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/shows/shows.module.ts ***!
  \**************************************************/
/*! exports provided: ShowsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsPageModule", function() { return ShowsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shows_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shows.page */ "./src/app/pages/tabs/shows/shows.page.ts");







var routes = [
    {
        path: '',
        component: _shows_page__WEBPACK_IMPORTED_MODULE_6__["ShowsPage"]
    }
];
var ShowsPageModule = /** @class */ (function () {
    function ShowsPageModule() {
    }
    ShowsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shows_page__WEBPACK_IMPORTED_MODULE_6__["ShowsPage"]]
        })
    ], ShowsPageModule);
    return ShowsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/shows/shows.page.html":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/shows/shows.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title text-center dark>Shows</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content [style.background-color]=\"'white'\" pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card class=\"show_item\" button *ngFor=\"let item of (results | async)\" (click)=\"onShowDetail(item.name)\">\n        <ion-card-content no-padding>\n            <ion-img [src]=\"item.coverImageUrl\"></ion-img>\n            <ion-text text-center dark>{{item.name}}</ion-text>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tabs/shows/shows.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/shows/shows.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".show_item {\n  width: 114px;\n  padding: 8px;\n  float: left;\n  box-shadow: none;\n  border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9acXJUYWxlbnQvRGVza3RvcC9EZXYvaW9uaWMvUnVzdGF2aTJJb25pY0FwcC9zcmMvYXBwL3BhZ2VzL3RhYnMvc2hvd3Mvc2hvd3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9zaG93cy9zaG93cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd19pdGVtIHtcbiAgICB3aWR0aDogMTE0cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/shows/shows.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/tabs/shows/shows.page.ts ***!
  \************************************************/
/*! exports provided: ShowsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsPage", function() { return ShowsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shows.service */ "./src/app/services/shows.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ShowsPage = /** @class */ (function () {
    function ShowsPage(navCtrl, showsService) {
        this.navCtrl = navCtrl;
        this.showsService = showsService;
    }
    ShowsPage.prototype.ngOnInit = function () {
        this.results = this.showsService.getShows();
    };
    ShowsPage.prototype.onShowDetail = function (name) {
        this.navCtrl.navigateForward(['/', 'tabs', 'shows', name]);
    };
    ShowsPage.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        this.results = this.showsService.getShows();
        this.results.subscribe(function (data) {
            console.log('Async operation has ended');
            event.target.complete();
        });
        // setTimeout(() => {
        //   console.log('Async operation has ended');
        //   event.target.complete();
        // }, 2000);
    };
    ShowsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shows',
            template: __webpack_require__(/*! ./shows.page.html */ "./src/app/pages/tabs/shows/shows.page.html"),
            styles: [__webpack_require__(/*! ./shows.page.scss */ "./src/app/pages/tabs/shows/shows.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_shows_service__WEBPACK_IMPORTED_MODULE_2__["ShowsService"]])
    ], ShowsPage);
    return ShowsPage;
}());



/***/ })

}]);
//# sourceMappingURL=shows-shows-module.js.map