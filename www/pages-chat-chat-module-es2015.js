(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/chats\"></ion-back-button>\n      </ion-buttons>\n      <!-- <ion-title>{{ chat?.title }}</ion-title> -->\n      <ion-title>{{ chatTitle }}</ion-title>\n      <ion-buttons slot=\"end\">\n        <!-- <ion-button  fill=\"clear\" (click)=\"leave()\">\n          Leave Group\n        </ion-button> -->\n        <ion-button *ngIf=\"leaveGroupFlag\" fill=\"clear\" (click)=\"leave()\">\n          Leave\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content #content class=\"ion-padding\">\n\n    <ion-grid>\n        <ion-row *ngFor=\"let message of messages | async\">\n\n          <ion-col size=\"9\" size-md=\"6\" *ngIf=\"message.from !== currentUserId\" class=\"message other-message\">\n            <small>{{ message.user }}</small><br>\n            <span>{{ message.msg }}\n              <img [src]=\"message.file\" *ngIf=\"message.file\">\n            </span>\n    \n            <div class=\"time ion-text-right\"><br>{{ message.createdAt?.toMillis() | date:'short' }}</div>\n          </ion-col>\n    \n          <ion-col offset=\"3\" offset-md=\"6\" size=\"9\" size-md=\"6\" *ngIf=\"message.from === currentUserId\" class=\"message my-message\">\n          <small>{{ message.user }}</small><br>\n            <span>{{ message.msg }}\n              <img [src]=\"message.file\" *ngIf=\"message.file\">\n            </span>\n            <div class=\"time ion-text-right\"><br>{{ message.createdAt?.toMillis() | date:'short' }}</div>\n          </ion-col>\n    \n        </ion-row>\n      </ion-grid>\n\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-list side=\"top\">\n            <ion-fab-button  (click)=\"sendFileCamera()\"> \n              <ion-icon name=\"camera\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button  (click)=\"sendFileGallery()\">\n              <ion-icon name=\"image\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab-list>\n      </ion-fab>\n        \n      \n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-textarea class=\"message-input\" rows=\"1\" (keyup)=\"resize()\" \n            [(ngModel)]=\"newMsg\"></ion-textarea>\n      </ion-col>\n      <ion-col size=\"2\">\n        <!-- style=\"padding-bottom: 20px;\" -->\n        <ion-button fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\" (click)=\"sendMessage()\">\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-toolbar>\n    <!-- <ion-toolbar color=\"light\">\n      <ion-item>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-textarea class=\"message-input\" #input rows=\"1\" maxLength=\"500\" (keyup)=\"resize()\" \n            [(ngModel)]=\"newMsg\"></ion-textarea>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\" (click)=\"sendMessage()\">\n              <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-toolbar> -->\n</ion-footer>\n  ");

/***/ }),

/***/ "./src/app/pages/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/pages/chat/chat.page.ts");







const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
let ChatPageModule = class ChatPageModule {
};
ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/pages/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message {\n  padding: 10px !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important;\n}\n.message img {\n  width: 100%;\n}\n.my-message {\n  background: lightgreen;\n  color: black;\n}\n.other-message {\n  background: var(--ion-color-light);\n  color: black;\n}\n.time {\n  color: var(--ion-color-medium);\n  float: right;\n  font-size: small;\n}\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvaW9uaWMtZmlyZWJhc2UtY2hhdC12Mi9zcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNDSjtBRENJO0VBQ0UsV0FBQTtBQ0NOO0FERUU7RUFFRSxzQkFBQTtFQUNBLFlBQUE7QUNBSjtBREdFO0VBR0Usa0NBQUE7RUFDQSxZQUFBO0FDRko7QURLQTtFQUVFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSEY7QURNQTtFQUNJLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIC5teS1tZXNzYWdlIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC8vIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5vdGhlci1tZXNzYWdlIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAvLyBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4udGltZSB7XG4gIC8vIGNvbG9yOiAjZGZkZmRmO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbiIsIi5tZXNzYWdlIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xufVxuLm1lc3NhZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRpbWUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHJlc2l6ZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/chat/chat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let ChatPage = class ChatPage {
    constructor(route, auth, chatService, router, camera) {
        this.route = route;
        this.auth = auth;
        this.chatService = chatService;
        this.router = router;
        this.camera = camera;
        this.newMsg = '';
        this.chatTitle = '';
        this.currentUserId = this.auth.currentUserId;
        this.chat = null;
    }
    ngOnInit() {
        // //scroll to bottom on init
        // this.scrollToBottomOnInit();
        this.route.params.subscribe(data => {
            // console.log(data);
            this.chatService.getOneGroup(data.id).subscribe(res => {
                console.log(res);
                console.log("this.currentUserId");
                console.log(this.currentUserId);
                //setting title for this chat page
                if (res['type'] == 'OneOnOne') {
                    // console.log(res['users']);
                    res['users'].forEach(element => {
                        // console.log(element);
                        // console.log(element['id']);
                        if (element['id'] != this.currentUserId) {
                            // console.log("this is the other user's nickname");
                            // console.log(element['nickname']);
                            this.chatTitle = element['nickname'];
                        }
                    });
                    // this.chatTitle = this.getMsgFromName(this.currentUserId);
                    // console.log(this.chatTitle);
                }
                if (res['type'] == 'group') {
                    this.chatTitle = res['title'];
                    this.leaveGroupFlag = true;
                }
                this.chat = res;
                // console.log('my chat: ', this.chat);
                this.messages = this.chatService.getChatMessages(this.chat.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(messages => {
                    for (let msg of messages) {
                        // console.log("msg");
                        // console.log(msg);
                        msg['user'] = this.getMsgFromName(msg['from']);
                    }
                    // console.log('messages: ', messages);
                    //scroll to bottom on init
                    this.scrollToBottomOnInit();
                    return messages;
                }));
            });
        });
    }
    //function for scroll to bottom
    scrollToBottomOnInit() {
        setTimeout(() => {
            if (this.content.scrollToBottom) {
                this.content.scrollToBottom(400);
            }
        }, 500);
    }
    //getting title for this chat page
    gettinChatPageTitle() {
    }
    getMsgFromName(userId) {
        for (let usr of this.chat.users) {
            if (usr.id == userId) {
                return usr.nickname;
            }
        }
        return 'Deleted';
    }
    sendMessage() {
        this.chatService.addChatMessage(this.newMsg, this.chat.id).then(() => {
            this.newMsg = '';
            // this.content.scrollToBottom();
            //for autoscrolling to bottom...
            setTimeout(() => {
                this.content.scrollToBottom(200);
            });
        });
    }
    resize() {
        this.msgInput.nativeElement.style.height = this.msgInput.nativeElement.scrollHeight + 'px';
    }
    leave() {
        let newUsers = this.chat.users.filter(usr => usr.id != this.auth.currentUserId);
        this.chatService.leaveGroup(this.chat.id, newUsers).subscribe(res => {
            this.router.navigateByUrl('/chats');
        });
    }
    sendFileCamera() {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(data => {
            let obj = this.chatService.addFileMessage(data, this.chat.id);
            let task = obj.task;
            task.then(res => {
                obj.ref.getDownloadURL().subscribe(url => {
                    this.chatService.saveFileMessage(url, this.chat.id);
                });
            });
            task.percentageChanges().subscribe(change => {
                // console.log('change: ', change);
            });
        });
    }
    sendFileGallery() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 70,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
            // mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(data => {
            let obj = this.chatService.addFileMessage(data, this.chat.id);
            let task = obj.task;
            task.then(res => {
                obj.ref.getDownloadURL().subscribe(url => {
                    this.chatService.saveFileMessage(url, this.chat.id);
                });
            });
            task.percentageChanges().subscribe(change => {
                // console.log('change: ', change);
            });
        });
    }
};
ChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
], ChatPage.prototype, "content", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('input', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])
], ChatPage.prototype, "msgInput", void 0);
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat.page.scss */ "./src/app/pages/chat/chat.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"]])
], ChatPage);



/***/ })

}]);
//# sourceMappingURL=pages-chat-chat-module-es2015.js.map