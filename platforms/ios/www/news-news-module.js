(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./src/app/pages/tabs/news/news.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/tabs/news/news.module.ts ***!
  \************************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.page */ "./src/app/pages/tabs/news/news.page.ts");







var routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
    }
];
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/news/news.page.html":
/*!************************************************!*\
  !*** ./src/app/pages/tabs/news/news.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title text-center>News</ion-title>\n    </ion-toolbar>\n\n    <!-- <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"secondary\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"contact\"></ion-icon>\n            </ion-button>\n            <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"primary\">\n                <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Secondary Toolbar</ion-title>\n    </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content [style.background-color]=\"'white'\" pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <!-- [routerLink]=\"['/', 'news', item.id]\" routerDirection=\"forward\"  -->\n    <ion-list>\n        <ion-item class=\"news_item\" button *ngFor=\"let item of (results | async)\" (click)=\"onNewsDetail(item.id)\" detail>\n            <ion-thumbnail slot=\"start\">\n                <ion-img class=\"news_cover_image\" [src]=\"item.coverImageUrl\"></ion-img>\n            </ion-thumbnail>\n\n            <ion-label text-wrap>\n                <h3 class=\"time\">{{item.time | date:'d MMM, H:mm'}}</h3>\n                <h3 class=\"title\">{{item.title}}</h3>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tabs/news/news.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/tabs/news/news.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  height: 20vw; }\n\n.news_item {\n  height: 20vw;\n  margin-bottom: 10px; }\n\n.news_item ion-thumbnail {\n    width: 30vw;\n    height: 16.8vw; }\n\n.news_item ion-thumbnail ion-image.news_cover_image {\n      width: 100%;\n      height: 100%; }\n\n.news_item ion-label {\n    width: 60vw;\n    height: 20vw;\n    margin: 0;\n    padding-top: 4px; }\n\n.news_item ion-label h3.time {\n      color: red; }\n\n.news_item ion-label h3.title {\n      height: 2.6em;\n      line-height: 1.3em;\n      width: 100%;\n      white-space: normal;\n      overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9acXJUYWxlbnQvRGVza3RvcC9EZXYvaW9uaWMvUnVzdGF2aTJJb25pY0FwcC9zcmMvYXBwL3BhZ2VzL3RhYnMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBRnZCO0lBSVEsV0FBVztJQUNYLGNBQWMsRUFBQTs7QUFMdEI7TUFPWSxXQUFXO01BQ1gsWUFBWSxFQUFBOztBQVJ4QjtJQVlRLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGdCQUFnQixFQUFBOztBQWZ4QjtNQWlCWSxVQUFVLEVBQUE7O0FBakJ0QjtNQW9CWSxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzL25ld3MvbmV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gICAgaGVpZ2h0OiAyMHZ3O1xufVxuXG4ubmV3c19pdGVtIHtcbiAgICBoZWlnaHQ6IDIwdnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgd2lkdGg6IDMwdnc7XG4gICAgICAgIGhlaWdodDogMTYuOHZ3O1xuICAgICAgICBpb24taW1hZ2UubmV3c19jb3Zlcl9pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICB3aWR0aDogNjB2dztcbiAgICAgICAgaGVpZ2h0OiAyMHZ3O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgIGgzLnRpbWUge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICBoMy50aXRsZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIuNmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/news/news.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/news/news.page.ts ***!
  \**********************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_latestnews_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/latestnews.service */ "./src/app/services/latestnews.service.ts");




var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, newsService) {
        this.navCtrl = navCtrl;
        this.newsService = newsService;
    }
    NewsPage.prototype.ngOnInit = function () {
        this.results = this.newsService.getLatestNews();
    };
    NewsPage.prototype.onNewsDetail = function (id) {
        this.navCtrl.navigateForward(['/', 'tabs', 'news', id]);
    };
    NewsPage.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        this.results = this.newsService.getLatestNews();
        this.results.subscribe(function (data) {
            console.log('Async operation has ended');
            event.target.complete();
        });
        // setTimeout(() => {
        //   console.log('Async operation has ended');
        //   event.target.complete();
        // }, 2000);
    };
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.page.html */ "./src/app/pages/tabs/news/news.page.html"),
            styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/pages/tabs/news/news.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_latestnews_service__WEBPACK_IMPORTED_MODULE_3__["LatestnewsService"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=news-news-module.js.map