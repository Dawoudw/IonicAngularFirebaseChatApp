(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-start-chat-start-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start-chat/start-chat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start-chat/start-chat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/chats\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Chat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-divider>\n      <ion-label>\n        Welcome {{ currentUserEmail1 }}\n      </ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-input placeholder=\"Group Name\" [(ngModel)]=\"title\"></ion-input>\n    </ion-item>\n\n\n    <ion-item-divider *ngIf=\"users.length!=0\">\n      <!-- <ion-label *ngIf=\"(users | async)?.length!=0\"> -->\n      <ion-label>\n        Users added to this group\n      </ion-label>\n    </ion-item-divider>\n\n    <!-- <ion-item>\n      <ion-input placeholder=\"Nickname / Email\" [(ngModel)]=\"participant\"></ion-input>\n    </ion-item>\n    <ion-button color=\"secondary\" expand=\"block\" (click)=\"addUser()\">Add User</ion-button> -->\n\n    <ion-item *ngFor=\"let usr of users\">\n      <ion-label>\n        {{ usr.email }}\n        <p>{{ usr.nickname }}</p>\n      </ion-label>\n    </ion-item>\n<!-- getting all users -->\n<hr>\n<ion-item-divider>\n  <ion-label>\n    Contacts (All Available Users)\n  </ion-label>\n</ion-item-divider>\n  <ion-item *ngFor=\"let item of items\">\n        <!-- {{item.payload.doc.data().nickname}} -->\n        <ion-label>\n          {{ item.payload.doc.data().email }}\n          <p>{{ item.payload.doc.data().nickname }}</p>\n        </ion-label>\n        <!-- {{item.payload.doc.data().email}} -->\n        <ion-button icon-only (click)=\"addUser(item.payload.doc.data().email)\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-button>\n  </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button color=\"light\" expand=\"full\" fill=\"clear\" [disabled]=\"title == '' || users.length == 0\" \n    (click)=\"createGroup()\">Start\n      Group</ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/pages/start-chat/start-chat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/start-chat/start-chat.module.ts ***!
  \*******************************************************/
/*! exports provided: StartChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartChatPageModule", function() { return StartChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _start_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start-chat.page */ "./src/app/pages/start-chat/start-chat.page.ts");







const routes = [
    {
        path: '',
        component: _start_chat_page__WEBPACK_IMPORTED_MODULE_6__["StartChatPage"]
    }
];
let StartChatPageModule = class StartChatPageModule {
};
StartChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_start_chat_page__WEBPACK_IMPORTED_MODULE_6__["StartChatPage"]]
    })
], StartChatPageModule);



/***/ }),

/***/ "./src/app/pages/start-chat/start-chat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/start-chat/start-chat.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXJ0LWNoYXQvc3RhcnQtY2hhdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/start-chat/start-chat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/start-chat/start-chat.page.ts ***!
  \*****************************************************/
/*! exports provided: StartChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartChatPage", function() { return StartChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let StartChatPage = class StartChatPage {
    constructor(chatService, auth, router) {
        this.chatService = chatService;
        this.auth = auth;
        this.router = router;
        this.users = [];
        // items: Array<any>;
        this.title = '';
        this.participant = '';
        this.participant1 = '';
        this.items = [];
        this.currentUserEmail1 = '';
    }
    ngOnInit() {
        //getting current user nickname
        this.currentUserEmail1 = this.auth.currentUser.email;
        //this gets a list of all users
        this.chatService.getAllUsers()
            .subscribe(result => {
            // this.items = result;
            result.forEach(r => {
                // console.log("r");
                // console.log(r.payload.doc.data()['email']);
                // console.log(this.currentUserEmail1);
                if (r.payload.doc.data()['email'] != this.currentUserEmail1) {
                    this.items.push(r);
                    // console.log(r);
                }
            });
        });
    }
    addUser(participant1) {
        // console.log("when calling addUser function, users array =");
        // console.log(this.users);
        this.participant = participant1;
        let obs = this.chatService.findUser(this.participant);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(obs).subscribe(res => {
            for (let data of res) {
                if (data.length > 0) {
                    if (this.users.indexOf(data[0]) > -1) {
                    }
                    else {
                        // console.log("data[0]");
                        // console.log(data[0]);
                        this.users.push(data[0]);
                    }
                }
            }
            this.participant = '';
        });
    }
    createGroup() {
        // console.log("this.title");
        // console.log(this.title);
        // console.log("this.users");
        // console.log(this.users);
        // console.log("users array length: ");
        // console.log(this.users.length);
        this.chatService.createGroup(this.title, this.users).then(res => {
            this.router.navigateByUrl('/chats');
        });
        this.users = [];
    }
};
StartChatPage.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
StartChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-start-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./start-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start-chat/start-chat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./start-chat.page.scss */ "./src/app/pages/start-chat/start-chat.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], StartChatPage);



/***/ })

}]);
//# sourceMappingURL=pages-start-chat-start-chat-module-es2015.js.map