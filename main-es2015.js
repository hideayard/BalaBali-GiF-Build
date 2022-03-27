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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- <app-footer></app-footer> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/about/about.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/about/about.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\r\n  <h1 dir=\"auto\"><a id=\"user-content-gif\" class=\"anchor\" aria-hidden=\"true\" href=\"#gif\"></a>GiF</h1>\r\n  <p dir=\"auto\"><strong>GiF</strong> (<strong>Gi</strong>t Repositories <strong>F</strong>inder) is a SPA (Single Page Application)\r\n  built on top of <a href=\"https://angular.io\" rel=\"nofollow\">Angular</a>.</p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/detail/detail.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/detail/detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title style=\"text-align: center;\"><u>Repository Detail - {{detailRepo.full_name}}</u></h2>\r\n<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <div style=\"text-align: center;\">\r\n    <h1><strong>@{{detailRepo.owner.login}}</strong></h1>\r\n    <img src=\"{{detailRepo.owner.avatar_url}}\" alt=\"{{detailRepo.owner.login}}\" style=\"width: 400px; height: 400px;\">\r\n  </div>\r\n  <div style=\"text-align: center;\">\r\n    <table>\r\n      <tr>\r\n        <td>\r\n          <h3>Description</h3>\r\n        </td>\r\n        <td>\r\n          <p>{{detailRepo.description}}</p>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <h3>Language</h3>\r\n        </td>\r\n        <td>\r\n          <p>{{detailRepo.language}}</p>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <h3>Created at</h3>\r\n        </td>\r\n        <td>\r\n          <p>{{detailRepo.created_at | date:'dd MMMM yyyy'}}</p>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <h3>Updated at</h3>\r\n        </td>\r\n        <td>\r\n          <p>{{detailRepo.updated_at | date:'dd MMMM yyyy'}}</p>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <h3>Open Issues</h3>\r\n        </td>\r\n        <td>\r\n          <p>{{detailRepo.open_issues}}</p>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <h3>Watchers</h3>\r\n        </td>\r\n        <td>\r\n          <p>{{detailRepo.watchers}}</p>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <h3>Forks</h3>\r\n        </td>\r\n        <td>\r\n          <p>{{detailRepo.forks}}</p>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <h3>Stars</h3>\r\n        </td>\r\n        <td>\r\n          <p>{{detailRepo.stargazers_count}}</p>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\" cdkFocusInitial>Close</button>\r\n\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <nav class=\"footer-nav\">\r\n                <ul>\r\n                    <li><a href=\"https://www.facebook.com/hideayard\">Facebook</a></li>\r\n                    <li><a href=\"https://twitter.com/hideayard\">Twitter</a></li>\r\n                    <li><a href=\"https://www.instagram.com/hideayard\">Instagram</a></li>\r\n                    <li><a href=\"https://www.linkedin.com/hideayard\">LinkedIn</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"credits ml-auto\">\r\n                <span class=\"copyright\"> © {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by 4lv1n3 Studio </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/home/home.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/home/home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\r\n  <div class=\"container\" id=\"menu-dropdown\">\r\n      <div class=\"tim-title\">\r\n          <h3>Menu</h3>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n              <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                  <div class=\"container\">\r\n                      <a class=\"navbar-brand\" href=\"#\">Menu</a>\r\n                      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span class=\"navbar-toggler-icon\"></span>\r\n                          <span class=\"navbar-toggler-icon\"></span>\r\n                          <span class=\"navbar-toggler-icon\"></span>\r\n                      </button>\r\n                      <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\r\n                          <ul class=\"navbar-nav\">\r\n                              <li class=\"nav-item\">\r\n                                  <a class=\"nav-link\" href=\"#pk\">Link</a>\r\n                              </li>\r\n                              <li class=\"nav-item\">\r\n                                  <a class=\"nav-link\" href=\"#pk\">Link</a>\r\n                              </li>\r\n                              <li class=\"nav-item\">\r\n                                  <div ngbDropdown class=\"d-inline-block dropdown\">\r\n                                      <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\r\n                                      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\r\n                                          <a class=\"dropdown-item\">Action - 1</a>\r\n                                          <a class=\"dropdown-item\">Another Action</a>\r\n                                          <a class=\"dropdown-item\">Something else is here</a>\r\n                                      </div>\r\n                                  </div>\r\n                              </li>\r\n                          </ul>\r\n                      </div>\r\n                  </div>\r\n              </nav>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                  <div class=\"container\">\r\n                      <a class=\"navbar-brand\" href=\"#\">Icons</a>\r\n                      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span class=\"navbar-toggler-icon\"></span>\r\n                          <span class=\"navbar-toggler-icon\"></span>\r\n                          <span class=\"navbar-toggler-icon\"></span>\r\n                      </button>\r\n                      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\r\n                          <ul class=\"navbar-nav\">\r\n                              <li class=\"nav-item\">\r\n                                  <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\r\n                              </li>\r\n                              <li class=\"nav-item\">\r\n                                  <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\r\n                              </li>\r\n                              <li class=\"nav-item \">\r\n                                  <div ngbDropdown class=\"dropdown\" placement=\"bottom-left\">\r\n                                  <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\r\n                                      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\r\n                                          <a class=\"dropdown-item\">Action - 1</a>\r\n                                          <a class=\"dropdown-item\">Another Action</a>\r\n                                          <a class=\"dropdown-item\">Something else is here</a>\r\n                                          <div class=\"dropdown-divider\"></div>\r\n                                          <a class=\"dropdown-item\">Separated link</a>\r\n                                      </div>\r\n                                  </div>\r\n                              </li>\r\n                          </ul>\r\n                      </div>\r\n                  </div>\r\n              </nav>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div id=\"navbar\">\r\n      <div class=\"container\">\r\n          <div class=\"tim-title\">\r\n              <h3>Navigation</h3>\r\n              <br/>\r\n          </div>\r\n      </div>\r\n      <div class=\"navigation-example\">\r\n          <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n              <div class=\"container\">\r\n                  <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\r\n                  <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                  </button>\r\n                  <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\r\n                      <ul class=\"navbar-nav ml-auto\">\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n          </nav>\r\n          <nav class=\"navbar navbar-expand-lg bg-info\">\r\n              <div class=\"container\">\r\n                  <a class=\"navbar-brand\" href=\"#\">Info Color</a>\r\n                  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                  </button>\r\n                  <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\r\n                      <ul class=\"navbar-nav ml-auto\">\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\">Discover</a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\">Profile</a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\">Settings</a>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n          </nav>\r\n          <nav class=\"navbar navbar-expand-lg bg-success\">\r\n              <div class=\"container\">\r\n                  <a class=\"navbar-brand\" href=\"#\">Success Color</a>\r\n                  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                  </button>\r\n                  <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\r\n                      <ul class=\"navbar-nav ml-auto\">\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n          </nav>\r\n          <nav class=\"navbar navbar-expand-lg bg-warning\">\r\n              <div class=\"container\">\r\n                  <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\r\n                  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                  </button>\r\n                  <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\r\n                      <ul class=\"navbar-nav ml-auto\">\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n          </nav>\r\n          <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n              <div class=\"container\">\r\n                  <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\r\n                  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                  </button>\r\n                  <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\r\n                      <ul class=\"navbar-nav ml-auto\">\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n          </nav>\r\n          <nav class=\"navbar navbar-expand-lg navbar-transparent\">\r\n              <div class=\"container\">\r\n                  <a class=\"navbar-brand\" href=\"#\">Transparent</a>\r\n                  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                      <span class=\"navbar-toggler-bar\"></span>\r\n                  </button>\r\n                  <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\r\n                      <ul class=\"navbar-nav ml-auto\">\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n          </nav>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>layout works!</p>\r\n\r\n<p>\r\n  Resize your browser window to see the current screen size change.\r\n</p>\r\n<p>\r\n  The current screen size is <strong>{{currentScreenSize}}</strong>\r\n</p>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button mat-icon-button>\r\n      <mat-icon [routerLink]=\"'/search'\">menu</mat-icon>\r\n    </button>\r\n    <h1>GiF</h1>\r\n    <span class=\"menu-spacer\"></span>\r\n    <div>\r\n      <!-- <a mat-button [routerLink]=\"'/home'\"> Home </a> -->\r\n      <a mat-button [routerLink]=\"'/search'\"> Search Repositories </a>\r\n      <a mat-button [routerLink]=\"'/about'\"> About </a>\r\n\r\n    </div>\r\n  </mat-toolbar-row>\r\n\r\n  <mat-toolbar-row>\r\n      <span style=\"font-size: 12px;\">GiF (Git repositories Finder) helps you easily find your repositories</span>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/search/search.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/search/search.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<br>\r\n<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n<div style=\"text-align: center;\">\r\n  <h2>Search Here</h2>\r\n  <br>\r\n  <form class=\"example-form\">\r\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n      <mat-label>Input</mat-label>\r\n      <input matInput [(ngModel)]=\"form.text\" name=\"formText\">\r\n\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" (click)=\"submit()\">Find</button>\r\n\r\n  </form>\r\n</div>\r\n\r\n<mat-grid-list cols=\"1\" rowHeight=\"150px\" >\r\n\r\n  <mat-grid-tile >\r\n    <mat-card class=\"elevation-demo-surface\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>GitHub</mat-card-title>\r\n        <mat-card-subtitle>Repositories</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-form-field appearance=\"fill\">\r\n          <mat-label>Sorted By</mat-label>\r\n          <mat-select [(value)]=\"form.sort\" (selectionChange)=\"onSortChange($event)\">\r\n            <mat-option>None</mat-option>\r\n            <mat-option value=\"stars\">Stars</mat-option>\r\n            <mat-option value=\"forks\">Forks</mat-option>\r\n            <mat-option value=\"updated\">Updated At</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-card-content>\r\n      </mat-card>\r\n  </mat-grid-tile>\r\n\r\n  <div *ngFor=\"let data of dataRepo; let i=index;\">\r\n      <mat-grid-tile >\r\n        <mat-card class=\"example-card \">\r\n          <mat-card-header style=\"text-align: left;\">\r\n            <div mat-card-avatar class=\"example-header-image\" [ngStyle]=\"{ 'background-image': 'url(' + data.owner.avatar_url + ')'}\"></div>\r\n            <mat-card-title><a href=\"{{data.html_url}}\" target=\"_blank\">{{data.full_name}}</a></mat-card-title>\r\n            <mat-card-subtitle>{{data.owner.login}}</mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content class=\"left\">\r\n            <span> <mat-icon>account_tree</mat-icon> {{data.forks}} </span>\r\n            <span> - <mat-icon>star</mat-icon> {{data.stargazers_count}} </span>\r\n            <span> - Updated at {{data.updated_at | date:'dd MMMM yyyy'}}</span>\r\n            <span> . <button mat-stroked-button color=\"primary\" (click)=\"showDetail(data.full_name)\">More Info</button></span>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </mat-grid-tile>\r\n  </div>\r\n\r\n  <mat-grid-tile >\r\n    <mat-paginator [length]=\"length\"\r\n      [pageSize]=\"pageSize\"\r\n      [pageSizeOptions]=\"pageSizeOptions\"\r\n      (page)=\"pageEvent = getServerData($event)\"\r\n      aria-label=\"Select page\">\r\n  </mat-paginator>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n\r\n\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/about/about.component */ "./src/app/layout/about/about.component.ts");
/* harmony import */ var _layout_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/search/search.component */ "./src/app/layout/search/search.component.ts");





const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _layout_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] },
    { path: 'about', component: _layout_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: "search", component: _layout_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] },
    { path: 'detail/:name', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./layout/detail/detail.module */ "./src/app/layout/detail/detail.module.ts")).then(m => m.DetailModule) }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'gif';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ "./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _layout_detail_detail_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/detail/detail.module */ "./src/app/layout/detail/detail.module.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            _layout_detail_detail_module__WEBPACK_IMPORTED_MODULE_15__["DetailModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/layout/about/about.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/about/about.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/layout/about/about.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



/***/ }),

/***/ "./src/app/layout/detail/detail-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/detail/detail-routing.module.ts ***!
  \********************************************************/
/*! exports provided: DetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailRoutingModule", function() { return DetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.component */ "./src/app/layout/detail/detail.component.ts");




const routes = [
    {
        path: '',
        component: _detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"],
    }
];
let DetailRoutingModule = class DetailRoutingModule {
};
DetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DetailRoutingModule);



/***/ }),

/***/ "./src/app/layout/detail/detail.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/detail/detail.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header-image {\n  background-size: cover;\n}\n\n.example-card {\n  max-width: 1200px;\n  min-width: 400px;\n  width: auto;\n  margin: auto;\n  display: block;\n  background: whitesmoke;\n  color: darkslateblue;\n  padding: 16px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nbody {\n  background-color: #91ced4;\n}\n\nbody * {\n  box-sizing: border-box;\n}\n\n.header {\n  background-color: #327a81;\n  color: white;\n  font-size: 1.5em;\n  padding: 1rem;\n  text-align: center;\n  text-transform: uppercase;\n}\n\nimg {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n\n.table-users {\n  border: 1px solid #327a81;\n  border-radius: 10px;\n  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);\n  max-width: calc(100% - 2em);\n  margin: 1em auto;\n  overflow: hidden;\n  width: 800px;\n}\n\ntable {\n  width: 100%;\n}\n\ntable td, table th {\n  color: #2b686e;\n  padding: 10px;\n}\n\ntable td {\n  text-align: center;\n  vertical-align: middle;\n}\n\ntable td:last-child {\n  font-size: 0.95em;\n  line-height: 1.4;\n  text-align: left;\n}\n\ntable th {\n  background-color: #daeff1;\n  font-weight: 300;\n}\n\ntable tr:nth-child(2n) {\n  background-color: white;\n}\n\ntable tr:nth-child(2n+1) {\n  background-color: #edf7f8;\n}\n\n@media screen and (max-width: 700px) {\n  table, tr, td {\n    display: block;\n  }\n\n  td:first-child {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    width: 100px;\n  }\n  td:not(:first-child) {\n    clear: both;\n    margin-left: 100px;\n    padding: 4px 20px 4px 90px;\n    position: relative;\n    text-align: left;\n  }\n  td:not(:first-child):before {\n    color: #91ced4;\n    content: \"\";\n    display: block;\n    left: 0;\n    position: absolute;\n  }\n  td:nth-child(2):before {\n    content: \"Name:\";\n  }\n  td:nth-child(3):before {\n    content: \"Email:\";\n  }\n  td:nth-child(4):before {\n    content: \"Phone:\";\n  }\n  td:nth-child(5):before {\n    content: \"Comments:\";\n  }\n\n  tr {\n    padding: 10px 0;\n    position: relative;\n  }\n  tr:first-child {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .header {\n    background-color: transparent;\n    color: white;\n    font-size: 2em;\n    font-weight: 700;\n    padding: 0;\n    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n  }\n\n  img {\n    border: 3px solid;\n    border-color: #daeff1;\n    height: 100px;\n    margin: 0.5rem 0;\n    width: 100px;\n  }\n\n  td:first-child {\n    background-color: #c8e7ea;\n    border-bottom: 1px solid #91ced4;\n    border-radius: 10px 10px 0 0;\n    position: relative;\n    top: 0;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    width: 100%;\n  }\n  td:not(:first-child) {\n    margin: 0;\n    padding: 5px 1em;\n    width: 100%;\n  }\n  td:not(:first-child):before {\n    font-size: 0.8em;\n    padding-top: 0.3em;\n    position: relative;\n  }\n  td:last-child {\n    padding-bottom: 1rem !important;\n  }\n\n  tr {\n    background-color: white !important;\n    border: 1px solid #6cbec6;\n    border-radius: 10px;\n    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n    margin: 0.5rem 0;\n    padding: 0;\n  }\n\n  .table-users {\n    border: none;\n    box-shadow: none;\n    overflow: visible;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2RldGFpbC9DOlxcbGFyYVxcd3d3XFxiYWxhYmFsaTFcXHRlc3RcXEJhbGFCYWxpLUdpUkxTL3NyY1xcYXBwXFxsYXlvdXRcXGRldGFpbFxcZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw0RUFBQTtBQ0NGOztBRFFBO0VBQ0cseUJBQUE7QUNMSDs7QURNRztFQUFJLHNCQUFBO0FDSFA7O0FETUE7RUFDRyx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDSEg7O0FETUE7RUFDRyxrQkFBQTtFQUNBLFlBbkJVO0VBb0JWLFdBcEJVO0FDaUJiOztBRE1BO0VBQ0cseUJBQUE7RUFDQSxtQkEzQlk7RUE0Qlosd0NBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSEg7O0FETUE7RUFDRyxXQUFBO0FDSEg7O0FES0c7RUFDRyxjQUFBO0VBQ0EsYUFyQ0k7QUNrQ1Y7O0FETUc7RUFDRyxrQkFBQTtFQUNBLHNCQUFBO0FDSk47O0FETU07RUFDRyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKVDs7QURRRztFQUNHLHlCQUFBO0VBQ0EsZ0JBQUE7QUNOTjs7QURVTTtFQUFrQix1QkFBQTtBQ1B4Qjs7QURRTTtFQUFvQix5QkFBQTtBQ0wxQjs7QURTQTtFQUNHO0lBQWdCLGNBQUE7RUNMakI7O0VEUUk7SUFDRyxrQkFBQTtJQUNBLFFBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsWUF4RUU7RUNtRVQ7RURRSTtJQUNHLFdBQUE7SUFDQSxrQkE3RUU7SUE4RUYsMEJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VDTlA7RURRTztJQUNHLGNBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLE9BQUE7SUFDQSxrQkFBQTtFQ05WO0VEVUk7SUFBd0IsZ0JBQUE7RUNQNUI7RURRSTtJQUF3QixpQkFBQTtFQ0w1QjtFRE1JO0lBQXdCLGlCQUFBO0VDSDVCO0VESUk7SUFBd0Isb0JBQUE7RUNENUI7O0VESUM7SUFDRyxlQUFBO0lBQ0Esa0JBQUE7RUNESjtFREVJO0lBQWdCLGFBQUE7RUNDcEI7QUFDRjs7QURFQTtFQUNHO0lBQ0csNkJBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLHlDQUFBO0VDQUo7O0VER0M7SUFDRyxpQkFBQTtJQUNBLHFCQUFBO0lBQ0EsYUFySEs7SUFzSEwsZ0JBQUE7SUFDQSxZQXZISztFQ3VIVDs7RURJSTtJQUNHLHlCQUFBO0lBQ0EsZ0NBQUE7SUFDQSw0QkFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxXQUFBO0VDRFA7RURJSTtJQUNHLFNBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUNGUDtFRElPO0lBQ0csZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDRlY7RURNSTtJQUFnQiwrQkFBQTtFQ0hwQjs7RURNQztJQUNHLGtDQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkF4SlM7SUF5SlQsd0NBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUNISjs7RURNQztJQUNHLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDSEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuJGJhc2VDb2xvcjogIzM5OEI5MztcclxuJGJvcmRlclJhZGl1czogMTBweDtcclxuJGltYWdlQmlnOiAxMDBweDtcclxuJGltYWdlU21hbGw6IDYwcHg7XHJcbiRwYWRkaW5nOiAxMHB4O1xyXG5cclxuYm9keSB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJhc2VDb2xvciwgMzAlKTtcclxuICAgKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFzZUNvbG9yLCA1JSk7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgcGFkZGluZzogMXJlbTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgIGhlaWdodDogJGltYWdlU21hbGw7XHJcbiAgIHdpZHRoOiAkaW1hZ2VTbWFsbDtcclxufVxyXG5cclxuLnRhYmxlLXVzZXJzIHtcclxuICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRiYXNlQ29sb3IsIDUlKTtcclxuICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgYm94LXNoYWRvdzogM3B4IDNweCAwIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xyXG4gICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICB3aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICB0ZCwgdGgge1xyXG4gICAgICBjb2xvcjogZGFya2VuKCRiYXNlQ29sb3IsIDEwJSk7XHJcbiAgICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gICB9XHJcblxyXG4gICB0ZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHRoIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmFzZUNvbG9yLCA1MCUpO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICB9XHJcblxyXG4gICB0ciB7XHJcbiAgICAgICY6bnRoLWNoaWxkKDJuKSB7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDJuKzEpIHsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmFzZUNvbG9yLCA1NSUpIH1cclxuICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICB0YWJsZSwgdHIsIHRkIHsgZGlzcGxheTogYmxvY2s7IH1cclxuXHJcbiAgIHRkIHtcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgd2lkdGg6ICRpbWFnZUJpZztcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogJGltYWdlQmlnO1xyXG4gICAgICAgICBwYWRkaW5nOiA0cHggMjBweCA0cHggOTBweDtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkYmFzZUNvbG9yLCAzMCUpO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm50aC1jaGlsZCgyKTpiZWZvcmUgeyBjb250ZW50OiAnTmFtZTonOyB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDMpOmJlZm9yZSB7IGNvbnRlbnQ6ICdFbWFpbDonOyB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDQpOmJlZm9yZSB7IGNvbnRlbnQ6ICdQaG9uZTonOyB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDUpOmJlZm9yZSB7IGNvbnRlbnQ6ICdDb21tZW50czonOyB9XHJcbiAgIH1cclxuXHJcbiAgIHRyIHtcclxuICAgICAgcGFkZGluZzogJHBhZGRpbmcgMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgIC5oZWFkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY29sb3I6IGxpZ2h0ZW4oJGJhc2VDb2xvciwgNjAlKTtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICB9XHJcblxyXG4gICBpbWcge1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRiYXNlQ29sb3IsIDUwJSk7XHJcbiAgICAgIGhlaWdodDogJGltYWdlQmlnO1xyXG4gICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICB3aWR0aDogJGltYWdlQmlnO1xyXG4gICB9XHJcblxyXG4gICB0ZCB7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRiYXNlQ29sb3IsIDQ1JSk7XHJcbiAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRiYXNlQ29sb3IsIDMwJSk7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMgJGJvcmRlclJhZGl1cyAwIDA7XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICBwYWRkaW5nOiA1cHggMWVtO1xyXG4gICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC4zZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQgIHsgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDsgfVxyXG4gICB9XHJcblxyXG4gICB0ciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0ZW4oJGJhc2VDb2xvciwgMjAlKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgfVxyXG5cclxuICAgLnRhYmxlLXVzZXJzIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgfVxyXG59XHJcbiIsIi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxY2VkNDtcbn1cbmJvZHkgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3YTgxO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4udGFibGUtdXNlcnMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzI3YTgxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDJlbSk7XG4gIG1hcmdpbjogMWVtIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA4MDBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIHRkLCB0YWJsZSB0aCB7XG4gIGNvbG9yOiAjMmI2ODZlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxudGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG50YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG50YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWVmZjE7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG50YWJsZSB0cjpudGgtY2hpbGQoMm4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG50YWJsZSB0cjpudGgtY2hpbGQoMm4rMSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmN2Y4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICB0YWJsZSwgdHIsIHRkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDRweCAyMHB4IDRweCA5MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIHRkOm5vdCg6Zmlyc3QtY2hpbGQpOmJlZm9yZSB7XG4gICAgY29sb3I6ICM5MWNlZDQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICB0ZDpudGgtY2hpbGQoMik6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIk5hbWU6XCI7XG4gIH1cbiAgdGQ6bnRoLWNoaWxkKDMpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJFbWFpbDpcIjtcbiAgfVxuICB0ZDpudGgtY2hpbGQoNCk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlBob25lOlwiO1xuICB9XG4gIHRkOm50aC1jaGlsZCg1KTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiQ29tbWVudHM6XCI7XG4gIH1cblxuICB0ciB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICB0cjpmaXJzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuXG4gIGltZyB7XG4gICAgYm9yZGVyOiAzcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGFlZmYxO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cblxuICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTdlYTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzkxY2VkNDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4IDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICB0ZDpub3QoOmZpcnN0LWNoaWxkKTpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgcGFkZGluZy10b3A6IDAuM2VtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICB0ZDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgdHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZjYmVjNjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnRhYmxlLXVzZXJzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/detail/detail.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/detail/detail.component.ts ***!
  \***************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_git_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/git.service */ "./src/app/service/git.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let DetailComponent = class DetailComponent {
    constructor(gitService, route, dialogref, data) {
        this.gitService = gitService;
        this.route = route;
        this.dialogref = dialogref;
        this.data = data;
        this.name = '';
        this.loading = false;
        this.detailRepo = { full_name: '', owner: { avatar_url: '', login: '' } };
        // this.name = this.route.snapshot.paramMap.get('name');
        console.log("this.data=", this.data);
        if (this.data.name != '') {
            this.gitService.getDetailRepo(this.data.name)
                .subscribe((res) => {
                console.log(res);
                this.detailRepo = res;
            }, (err) => {
                console.log(err);
            });
        }
    }
    ngOnInit() {
    }
};
DetailComponent.ctorParameters = () => [
    { type: src_app_service_git_service__WEBPACK_IMPORTED_MODULE_3__["GitService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/detail/detail.component.html"),
        styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/layout/detail/detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_git_service__WEBPACK_IMPORTED_MODULE_3__["GitService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
], DetailComponent);



/***/ }),

/***/ "./src/app/layout/detail/detail.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/detail/detail.module.ts ***!
  \************************************************/
/*! exports provided: DetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function() { return DetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.component */ "./src/app/layout/detail/detail.component.ts");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/layout/detail/detail-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let DetailModule = class DetailModule {
};
DetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["DetailRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
        ]
    })
], DetailModule);



/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
    ngOnInit() { }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/layout/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LayoutComponent = class LayoutComponent {
    constructor(breakpointObserver) {
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Create a map to display breakpoint names for demonstration purposes.
        this.displayNameMap = new Map([
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall, 'XSmall'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small, 'Small'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium, 'Medium'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large, 'Large'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XLarge, 'XLarge'],
        ]);
        breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XLarge,
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed))
            .subscribe(result => {
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentScreenSize = this.displayNameMap.get(query) ? this.displayNameMap.get(query) : 'Unknown';
                }
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
];
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
], LayoutComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/layout/search/search.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/layout/about/about.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let NavbarComponent = class NavbarComponent {
    constructor(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    ;
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    ;
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/layout/navbar/navbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/layout/search/search.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/search/search.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header-image {\n  background-size: cover;\n}\n\n.example-card {\n  max-width: 800px;\n  min-width: 400px;\n  width: auto;\n  margin: auto;\n  display: block;\n  background: whitesmoke;\n  color: darkslateblue;\n  padding: 16px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin: auto;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width {\n  text-align: left;\n}\n\n.elevation-demo-container {\n  display: flex;\n  margin: auto;\n  flex: 1 1 auto;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.elevation-demo-surface {\n  display: inline-flex;\n  justify-content: space-around;\n  min-height: 100px;\n  min-width: 200px;\n  margin: 15px;\n  align-items: center;\n}\n\n.mdc-elevation--z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NlYXJjaC9DOlxcbGFyYVxcd3d3XFxiYWxhYmFsaTFcXHRlc3RcXEJhbGFCYWxpLUdpUkxTL3NyY1xcYXBwXFxsYXlvdXRcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw0RUFBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBRUUsYUFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBRUEsZUFBQTtFQUVBLDhCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBRUUsb0JBQUE7RUFFQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7QUNDRjs7QURDQTtFQUVRLHdIQUFBO0FDRVI7O0FEQ0E7RUFFUSx5SEFBQTtBQ0VSOztBRENBO0VBRVEseUhBQUE7QUNFUjs7QURDQTtFQUVRLHlIQUFBO0FDRVI7O0FEQ0E7RUFFUSwwSEFBQTtBQ0VSOztBRENBO0VBRVEsMEhBQUE7QUNFUjs7QURDQTtFQUVRLDJIQUFBO0FDRVI7O0FEQ0E7RUFFUSwySEFBQTtBQ0VSOztBRENBO0VBRVEsMkhBQUE7QUNFUjs7QURDQTtFQUVRLDJIQUFBO0FDRVI7O0FEQ0E7RUFFUSw0SEFBQTtBQ0VSOztBRENBO0VBRVEsNEhBQUE7QUNFUjs7QURDQTtFQUVRLDRIQUFBO0FDRVI7O0FEQ0E7RUFFUSw0SEFBQTtBQ0VSOztBRENBO0VBRVEsNEhBQUE7QUNFUjs7QURDQTtFQUVRLDRIQUFBO0FDRVI7O0FEQ0E7RUFFUSw2SEFBQTtBQ0VSOztBRENBO0VBRVEsNkhBQUE7QUNFUjs7QURDQTtFQUVRLDZIQUFBO0FDRVI7O0FEQ0E7RUFFUSw2SEFBQTtBQ0VSOztBRENBO0VBRVEsOEhBQUE7QUNFUjs7QURDQTtFQUVRLDhIQUFBO0FDRVI7O0FEQ0E7RUFFUSw4SEFBQTtBQ0VSOztBRENBO0VBRVEsOEhBQUE7QUNFUjs7QURDQTtFQUVRLDhIQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmVsZXZhdGlvbi1kZW1vLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZWxldmF0aW9uLWRlbW8tc3VyZmFjZSB7XHJcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tZGMtZWxldmF0aW9uLS16MCB7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXoxIHtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5tZGMtZWxldmF0aW9uLS16MiB7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4ubWRjLWVsZXZhdGlvbi0tejMge1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXo0IHtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXo1IHtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXo2IHtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4ubWRjLWVsZXZhdGlvbi0tejcge1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggN3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAycHggMTZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDdweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMnB4IDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5tZGMtZWxldmF0aW9uLS16OCB7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXo5IHtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA5cHggMTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCAxNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4ubWRjLWVsZXZhdGlvbi0tejEwIHtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDRweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5tZGMtZWxldmF0aW9uLS16MTEge1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDZweCA3cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMXB4IDE1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA0cHggMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXoxMiB7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4ubWRjLWVsZXZhdGlvbi0tejEzIHtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5tZGMtZWxldmF0aW9uLS16MTQge1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggOXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDdweCA5cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNHB4IDIxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjZweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXoxNSB7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDhweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNXB4IDIycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMjhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE1cHggMjJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAyOHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4ubWRjLWVsZXZhdGlvbi0tejE2IHtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXoxNyB7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDhweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTdweCAyNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDMycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTdweCAyNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDMycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5tZGMtZWxldmF0aW9uLS16MTgge1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA5cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE4cHggMjhweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDdweCAzNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA5cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE4cHggMjhweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDdweCAzNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4ubWRjLWVsZXZhdGlvbi0tejE5IHtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxOXB4IDI5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA3cHggMzZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxOXB4IDI5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA3cHggMzZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXoyMCB7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIwcHggMzFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCAzOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMHB4IDMxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXoyMSB7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIxcHggMzNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXoyMiB7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMnB4IDM1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggNDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXoyMyB7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDExcHggMTRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIzcHggMzZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMXB4IDE0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyM3B4IDM2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1kYy1lbGV2YXRpb24tLXoyNCB7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4iLCIuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmVsZXZhdGlvbi1kZW1vLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVsZXZhdGlvbi1kZW1vLXN1cmZhY2Uge1xuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMTVweDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1kYy1lbGV2YXRpb24tLXowIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1kYy1lbGV2YXRpb24tLXoxIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tZGMtZWxldmF0aW9uLS16MyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1kYy1lbGV2YXRpb24tLXo0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tZGMtZWxldmF0aW9uLS16NSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA1cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejYge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejcge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggN3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAycHggMTZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejgge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOXB4IDEycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA5cHggMTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCAxNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejEwIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDRweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDRweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejExIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNnB4IDdweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDExcHggMTVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDRweCAyMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDdweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDExcHggMTVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDRweCAyMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejEyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejEzIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejE0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDlweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE0cHggMjFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyNnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwcHggN3B4IDlweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE0cHggMjFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyNnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejE1IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE1cHggMjJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAyOHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE1cHggMjJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAyOHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejE2IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tZGMtZWxldmF0aW9uLS16MTcge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE3cHggMjZweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1kYy1lbGV2YXRpb24tLXoxOCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDlweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE4cHggMjhweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDdweCAzNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejE5IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxOXB4IDI5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA3cHggMzZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMHB4IDlweCAxMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTlweCAyOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggN3B4IDM2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tZGMtZWxldmF0aW9uLS16MjAge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMHB4IDMxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIwcHggMzFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCAzOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejIxIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjFweCAzM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDQwcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1kYy1lbGV2YXRpb24tLXoyMiB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxNHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjJweCAzNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDQycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tZGMtZWxldmF0aW9uLS16MjMge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMXB4IDE0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyM3B4IDM2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIzcHggMzZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWRjLWVsZXZhdGlvbi0tejI0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_git_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/git.service */ "./src/app/service/git.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../detail/detail.component */ "./src/app/layout/detail/detail.component.ts");







let SearchComponent = class SearchComponent {
    constructor(gitService, _snackBar, dialog, router) {
        this.gitService = gitService;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.router = router;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.loading = false;
        this.form = { text: "Bali", sort: "updated", order: "desc" };
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.page = 1;
        this.durationInSeconds = 2;
        this.params = {
            q: this.form.text,
            per_page: this.pageSize,
            page: this.page,
            sort: this.form.sort,
            order: this.form.order,
        };
        this.reponame = '';
        this.gitService.repoSelectedObs.subscribe((res) => {
            this.reponame = res;
        });
    }
    ngOnInit() {
        this.loadData(this.params);
    }
    submit() {
        console.log("submit = ", this.form.text);
        if (this.form.text == "") {
            this.openSnackBar("Please enter name to search");
        }
        else {
            this.params = {
                q: this.form.text,
                per_page: this.pageSize,
                page: this.page,
                sort: this.form.sort,
                order: this.form.order,
            };
            this.loadData(this.params);
        }
    }
    openSnackBar(text) {
        this._snackBar.open(text, 'Okay', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    showDetail(name) {
        this.loading = true;
        // this.router.navigate(['/detail', name]);
        this.reponame = name;
        this.gitService.repoSelected.next(this.reponame);
        const dialogRef = this.dialog.open(_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], { data: { name: name } });
        dialogRef.afterClosed().subscribe(result => {
            this.loading = false;
            console.log(`Dialog result: ${result}`);
        });
    }
    onSortChange() {
        console.log("onSortChange");
        this.params = {
            q: this.form.text,
            per_page: this.pageSize,
            page: this.page,
            sort: this.form.sort,
            order: this.form.order,
        };
        this.loadData(this.params);
    }
    loadData(params) {
        this.loading = true;
        this.gitService.searchRepo(params)
            .subscribe((res) => {
            this.loading = false;
            console.log(res);
            this.dataRepo = res.items;
            this.length = res.total_count;
        }, (err) => {
            this.loading = false;
            console.log(err);
        });
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        console.log(setPageSizeOptionsInput);
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }
    getServerData(event) {
        if (this.form.text == "") {
            this.openSnackBar("Please enter name to search");
        }
        else {
            this.page = event.pageIndex;
            const params = {
                q: this.form.text,
                per_page: event.pageSize,
                page: event.pageIndex,
                sort: this.form.sort,
                order: this.form.order,
            };
            this.loadData(params);
        }
    }
};
SearchComponent.ctorParameters = () => [
    { type: _service_git_service__WEBPACK_IMPORTED_MODULE_3__["GitService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/layout/search/search.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_git_service__WEBPACK_IMPORTED_MODULE_3__["GitService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/service/git.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/git.service.ts ***!
  \****************************************/
/*! exports provided: GitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitService", function() { return GitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let GitService = class GitService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.repoSelected = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.repoSelectedObs = this.repoSelected.asObservable();
        this.repoSelected.next('');
    }
    getAll() {
        return this._httpClient.get('https://api.github.com/repositories');
    }
    searchRepo(request) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        Object.keys(request).forEach((key) => {
            httpParams = httpParams.append(key, request[key]);
        });
        return this._httpClient.get('https://api.github.com/search/repositories', { params: httpParams });
    }
    getDetailRepo(name) {
        return this._httpClient.get('https://api.github.com/repos/' + name);
    }
    getPerUser(user) {
        return this._httpClient.get('https://api.github.com/users/' + user);
    }
};
GitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GitService);



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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
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

module.exports = __webpack_require__(/*! C:\lara\www\balabali1\test\BalaBali-GiRLS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map