(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsdetail-newsdetail-module"],{

/***/ "./src/app/pages/tabs/newsdetail/newsdetail.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/newsdetail/newsdetail.module.ts ***!
  \************************************************************/
/*! exports provided: NewsdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsdetailPageModule", function() { return NewsdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newsdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsdetail.page */ "./src/app/pages/tabs/newsdetail/newsdetail.page.ts");
/* harmony import */ var _resolvers_news_detail_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../resolvers/news-detail-resolver.service */ "./src/app/resolvers/news-detail-resolver.service.ts");








var routes = [
    {
        path: '',
        component: _newsdetail_page__WEBPACK_IMPORTED_MODULE_6__["NewsdetailPage"],
        resolve: { detailData: _resolvers_news_detail_resolver_service__WEBPACK_IMPORTED_MODULE_7__["NewsDetailResolverService"] }
    }
];
var NewsdetailPageModule = /** @class */ (function () {
    function NewsdetailPageModule() {
    }
    NewsdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newsdetail_page__WEBPACK_IMPORTED_MODULE_6__["NewsdetailPage"]]
        })
    ], NewsdetailPageModule);
    return NewsdetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/newsdetail/newsdetail.page.html":
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/newsdetail/newsdetail.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'News'\"></ion-back-button>\n        </ion-buttons>\n        <ion-title text-center dark>{{newsDetail.title}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<!-- Custom Refresher Content -->\n<ion-content>\n\n    <ion-thumbnail>\n        <ion-img class=\"news_cover_image\" [src]=\"newsDetail.coverImageUrl\"></ion-img>\n    </ion-thumbnail>\n\n    <div class=\"news_detail_content\">\n        <h3 class=\"newsTitle\">{{newsDetail.title}}</h3>\n\n        <ion-text>\n            <h3>{{newsDetail.time | date:'d MMM, H:mm'}}</h3>\n        </ion-text>\n\n        <div class=\"newsStory\" [innerHtml]=\"newsDetail.storyDetailHtml\">\n        </div>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tabs/newsdetail/newsdetail.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/newsdetail/newsdetail.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-thumbnail {\n  min-width: 100vw;\n  min-height: 56vw; }\n  ion-thumbnail img {\n    width: 100%;\n    height: 100%; }\n  .news_detail_content {\n  padding: 0 10px;\n  /* news title/datetime */ }\n  .news_detail_content .newsTitle {\n    color: black;\n    width: 100%;\n    height: 2.4em;\n    line-height: 1.2em;\n    word-wrap: break-word;\n    white-space: normal;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .news_detail_content h3 {\n    font-size: 16px;\n    color: gray; }\n  .news_detail_content .newsStory {\n    display: inline-block;\n    width: 92vw;\n    line-height: 1.4em;\n    /*font-size: 18px;*/ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9acXJUYWxlbnQvRGVza3RvcC9EZXYvaW9uaWMvUnVzdGF2aTJJb25pY0FwcC9zcmMvYXBwL3BhZ2VzL3RhYnMvbmV3c2RldGFpbC9uZXdzZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtFQUZwQjtJQUlRLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFJcEI7RUFDSSxlQUFlO0VBV2Ysd0JBQUEsRUFBeUI7RUFaN0I7SUFHUSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7RUFWL0I7SUFjUSxlQUFlO0lBQ2YsV0FBVyxFQUFBO0VBZm5CO0lBa0JRLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFBLEVBQW9CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9uZXdzZGV0YWlsL25ld3NkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRodW1ibmFpbCB7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICBtaW4taGVpZ2h0OiA1NnZ3O1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG4ubmV3c19kZXRhaWxfY29udGVudCB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIC5uZXdzVGl0bGUge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIuNGVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuICAgIC8qIG5ld3MgdGl0bGUvZGF0ZXRpbWUgKi9cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuICAgIC5uZXdzU3Rvcnkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiA5MnZ3O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgIC8qZm9udC1zaXplOiAxOHB4OyovXG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/newsdetail/newsdetail.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/tabs/newsdetail/newsdetail.page.ts ***!
  \**********************************************************/
/*! exports provided: NewsdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsdetailPage", function() { return NewsdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_latestnews_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/latestnews.service */ "./src/app/services/latestnews.service.ts");




var NewsdetailPage = /** @class */ (function () {
    function NewsdetailPage(activatedRoute, newsService) {
        this.activatedRoute = activatedRoute;
        this.newsService = newsService;
    }
    NewsdetailPage.prototype.ngOnInit = function () {
        this.newsDetail = this.activatedRoute.snapshot.data.detailData;
        console.log(this.newsDetail);
        console.log(this.newsDetail.coverImageUrl);
    };
    NewsdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsdetail',
            template: __webpack_require__(/*! ./newsdetail.page.html */ "./src/app/pages/tabs/newsdetail/newsdetail.page.html"),
            styles: [__webpack_require__(/*! ./newsdetail.page.scss */ "./src/app/pages/tabs/newsdetail/newsdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_latestnews_service__WEBPACK_IMPORTED_MODULE_3__["LatestnewsService"]])
    ], NewsdetailPage);
    return NewsdetailPage;
}());



/***/ }),

/***/ "./src/app/resolvers/news-detail-resolver.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/resolvers/news-detail-resolver.service.ts ***!
  \***********************************************************/
/*! exports provided: NewsDetailResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailResolverService", function() { return NewsDetailResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_latestnews_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/latestnews.service */ "./src/app/services/latestnews.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NewsDetailResolverService = /** @class */ (function () {
    function NewsDetailResolverService(newsService) {
        this.newsService = newsService;
    }
    NewsDetailResolverService.prototype.resolve = function (route, state) {
        var newsId = route.paramMap.get("id");
        return this.newsService.getNewsDetail(newsId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (results) { return ({
            id: results.id,
            title: results.title,
            time: results.time,
            storyDetailHtml: results.storyDetail,
            coverImageUrl: results.coverImageUrl,
            videoUrl: results.videoUrl,
        }); }));
    };
    NewsDetailResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_latestnews_service__WEBPACK_IMPORTED_MODULE_2__["LatestnewsService"]])
    ], NewsDetailResolverService);
    return NewsDetailResolverService;
}());



/***/ })

}]);
//# sourceMappingURL=newsdetail-newsdetail-module.js.map