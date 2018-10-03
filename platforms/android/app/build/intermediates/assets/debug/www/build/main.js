webpackJsonp([0],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_generic__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__(38);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SignupPage = (function (_super) {
    __extends(SignupPage, _super);
    function SignupPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.password_min_length = 8;
        _this.full_screen = __WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* CONFIG */].NOT_AUTHENTICATED_FULL_SCREEN;
        _this.error_data = {};
        _this.signupForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(1)]),
            surname: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(1)]),
            username: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_-]+$')]),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(_this.password_min_length)]),
            password_repeat: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(_this.password_min_length)]),
        }, _this.matchingPasswords('password', 'password_repeat'));
        return _this;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
    };
    SignupPage.prototype.register = function () {
        var _this = this;
        this.showLoader('Registrando');
        this.ws.userRegister(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.username, this.signupForm.value.name, this.signupForm.value.surname).then(function (result) {
            _this.loading.dismiss();
            _this.clearForm();
            _this.showAlert('Cuenta creada', 'Su cuenta de usuario ha sido creada con éxito!');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }, function (err) {
            _this.loading.dismiss();
            _this.error_data = err.data;
            _this.showAlert('Error', err.message);
        });
    };
    SignupPage.prototype.cancel = function () {
        this.signupForm.reset();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.clearForm = function () {
        this.name = "";
        this.surname = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.password_repeat = "";
    };
    SignupPage.prototype.matchingPasswords = function (field1, field2) {
        return function (group) {
            var password = group.controls[field1];
            var confirmPassword = group.controls[field2];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    return SignupPage;
}(__WEBPACK_IMPORTED_MODULE_3__generic_generic__["a" /* GenericPage */]));
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/signup/signup.html"*/'<!--\n  Generated template for the Signup page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header *ngIf="!full_screen">\n\n    <ion-navbar color="secondary">\n        <ion-title>Crear cuenta</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div id="signup_form">\n        <form [formGroup]="signupForm" (ngSubmit)="register()">\n            <ion-list>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name="person"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName= name placeholder="{{\'SIGNUP_NAME\'|translate}}" type="text"></ion-input>\n                </ion-item>\n                <ng-container *ngIf="error_data.name || (signupForm.controls.name.errors && signupForm.controls.name.dirty) ">\n                    <ng-container *ngFor="let error of error_data.name">\n                        <p class="alert">{{error}}</p>\n                    </ng-container>\n                    <ng-container *ngIf="signupForm.controls.name.errors && signupForm.controls.name.dirty">\n                        <p class="alert">El nombre es obligatorio</p>\n                    </ng-container>\n                </ng-container>\n\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name="person"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName="surname" placeholder="{{\'SIGNUP_SURNAME\'|translate}}" type="text"></ion-input>\n                </ion-item>\n                <ng-container *ngIf="error_data.surname || (signupForm.controls.surname.errors && signupForm.controls.surname.dirty)">\n                    <ng-container *ngFor="let error of error_data.surname">\n                        <p class="alert">{{error}}</p>\n                    </ng-container>\n                    <ng-container *ngIf="signupForm.controls.surname.errors && signupForm.controls.surname.dirty">\n                        <p class="alert">El apellido es obligatorio</p>\n                    </ng-container>\n                </ng-container>\n\n\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name="person"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName="username" placeholder="{{\'SIGNUP_USERNAME\'|translate}}" type="text"></ion-input>\n                </ion-item>\n                <ng-container *ngIf="error_data.username || (signupForm.controls.username.errors && signupForm.controls.username.dirty)">\n                    <ng-container *ngFor="let error of error_data.username">\n                        <p class="alert">{{error}}</p>\n                    </ng-container>\n                    <ng-container *ngIf="signupForm.controls.username.errors && signupForm.controls.username.dirty">\n                        <p class="alert">Al menos 5 caracteres (alfanuméricos, guión bajo o medio).</p>\n                    </ng-container>\n                </ng-container>\n\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name="mail"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName="email" placeholder="{{\'SIGNUP_EMAIL\'|translate}}" type="email"></ion-input>\n                </ion-item>\n                <ng-container *ngIf="error_data.email || (signupForm.controls.email.errors && signupForm.controls.email.dirty)">\n                    <ng-container *ngFor="let error of error_data.email">\n                        <p class="alert">{{error}}</p>\n                    </ng-container>\n                    <ng-container *ngIf="signupForm.controls.email.errors && signupForm.controls.email.dirty">\n                        <p class="alert">Tenés que ingresar una dirección de correo electrónico válida.</p>\n                    </ng-container>\n                </ng-container>\n\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name="lock"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName="password" placeholder="{{\'SIGNUP_PASSWORD\'|translate}}" type="password"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name="lock"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName="password_repeat" placeholder="{{\'SIGNUP_REPEAT_PASSWORD\'|translate}}" type="password"></ion-input>\n                </ion-item>\n                <ng-container *ngIf="error_data.password || (signupForm.controls.password.errors && signupForm.controls.password.dirty)">\n                    <ng-container *ngFor="let error of error_data.password">\n                        <p class="alert">{{error}}</p>\n                    </ng-container>\n                    <ng-container *ngIf="signupForm.controls.password.errors && signupForm.controls.password.dirty">\n                        <p class="alert">Las contraseñas son obligatorias, deben coincidir y tener al menos {{password_min_length}} caracteres.</p>\n                    </ng-container>\n                </ng-container>\n\n            </ion-list>\n\n            <button ion-button block [disabled]="!signupForm.valid" type="submit" class="continue-button">{{\'REGISTER\'|translate}}</button>\n\n        </form>\n        <button ion-button block (click)="cancel()" color="danger">Cancelar</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/signup/signup.html"*/,
        providers: []
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generic_generic__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_forgot_password_login_forgot_password__ = __webpack_require__(296);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, auth, events) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.auth = auth;
        _this.events = events;
        _this.full_screen = __WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* CONFIG */].NOT_AUTHENTICATED_FULL_SCREEN;
        _this.credentials = { username: "", password: "" };
        return _this;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (credentials) {
        var _this = this;
        this.showLoader('Validando');
        this.auth.login(credentials.username, credentials.password).then(function () {
            _this.loading.dismiss();
        }).catch(function (error) {
            _this.loading.dismiss();
            _this.showAlert("Error", "Usuario o clave incorrectos.");
        });
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_forgot_password_login_forgot_password__["a" /* LoginForgotPasswordPage */]);
        //this.navCtrl.setRoot(LoginForgotPasswordPage);
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        this.auth.loginFacebook(function () {
            _this.showLoader('Ingresando');
        }).then(function () {
            _this.loading.dismiss();
        }).catch(function (error) {
            if (_this.loading) {
                _this.loading.dismiss();
            }
            _this.showAlert("Error", "Ocurró un error al intentar ingresar.");
        });
    };
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_5__generic_generic__["a" /* GenericPage */]));
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/login/login.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header *ngIf="!full_screen">\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<div id="login_form">\n  <ion-list>\n    <ion-item>\n      <ion-input [(ngModel)]="credentials.username" type="text" clearInput="true" placeholder="{{\'EMAIL_OR_USERNAME\'|translate}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input [(ngModel)]="credentials.password" type="password" placeholder="{{\'PASSWORD\'|translate}}"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block (click)="login(credentials)">{{\'SIGN_IN\'|translate}}</button>\n  <button ion-button block color="secondary" (click)="register()">{{\'CREATE_ACCOUNT\'|translate}}</button>\n  <button ion-button block icon-left (click)="facebookLogin()">\n    <ion-icon name="logo-facebook"></ion-icon> {{\'LOG_IN_WITH_FACEBOOK\'|translate}}\n  </button>\n  <button ion-button block small clear (click)="forgotPassword()">{{\'FORGOT_PASSWORD\'|translate}}</button>  \n</div>\n\n</ion-content>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Webservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cache_MemoryCache__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the Webservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Webservice = (function () {
    function Webservice(http, cache) {
        this.http = http;
        this.cache = cache;
        this.host_url = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* CONFIG */].API_URL;
        //console.log('Hello Webservice Provider');
    }
    Webservice.prototype.fetch = function (action, header, external_url, force_load) {
        var _this = this;
        if (external_url === void 0) { external_url = false; }
        if (force_load === void 0) { force_load = false; }
        return new Promise(function (resolve, reject) {
            var local_action = "";
            if (!external_url) {
                local_action = _this.host_url + action;
            }
            else {
                local_action = action;
            }
            console.log("Por cargar (get): " + action);
            if (_this.cache.has(local_action) && !force_load) {
                resolve(_this.cache.get(local_action));
            }
            else {
                _this.http.get(local_action, { 'headers': header }).map(function (res) { return res.json(); }).subscribe(function (data) {
                    console.log('webservice: get(' + action + '). Response:');
                    console.log(data);
                    _this.cache.set(local_action, data, __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* CONFIG */].MEMORY_CACHE_DEFAULT_TTL * 1000);
                    resolve(data);
                }, function (err) {
                    console.log('webservice: get(' + action + '): Error.');
                    reject(err);
                });
            }
        });
    };
    Webservice.prototype.put = function (action, data, header) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.host_url + action, data, { 'headers': header }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log('webservice: put(' + action + '). Response:');
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log('webservice: put(' + action + '): Error ' + err.status);
                var return_error = null;
                if (err.status == 422) {
                    return_error = err.json();
                }
                else {
                    return_error = err;
                }
                reject(return_error);
            });
        });
    };
    Webservice.prototype.post = function (action, data, header) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (data == undefined) {
                data = {};
            }
            _this.http.post(_this.host_url + action, data, { 'headers': header }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log('webservice: post(' + action + '). Response:');
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log('webservice: post(' + action + '): Error ' + err.status);
                var return_error = null;
                if (err.status == 422) {
                    return_error = err.json();
                }
                else {
                    return_error = err;
                }
                reject(return_error);
            });
        });
    };
    Webservice.prototype.delete = function (action, header) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.host_url + action, { 'headers': header }).map(function (res) {
                try {
                    return res.json();
                }
                catch (ex) {
                    return null;
                }
            }).subscribe(function (data) {
                console.log('webservice: delete (' + action + '). Response:');
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log('webservice: delete (' + action + '): Error ' + err.status);
                var return_error = null;
                if (err.status == 422) {
                    return_error = err.json();
                }
                else {
                    return_error = err;
                }
                reject(return_error);
            });
        });
    };
    Webservice.prototype.serviceStatus = function () {
        return this.fetch('api/v1/config/service_status');
    };
    Webservice.prototype.available = function () {
        return this.serviceStatus().then(function (status) {
            if (status.http && status.db && status.app) {
                Promise.resolve();
            }
            else {
                Promise.reject(status);
            }
        });
    };
    Webservice.prototype.init = function () {
        return this.fetch('api/v1/config/init');
    };
    Webservice.prototype.userRegister = function (email, password, username, name, surname) {
        return this.post('api/v1/user', { 'email': email, 'password': password, 'username': username, 'name': name, 'surname': surname });
    };
    Webservice.prototype.login = function (username, password, client_id, client_secret) {
        var data = {
            'username': username,
            'password': password,
            'grant_type': 'password',
            'client_id': client_id,
            'client_secret': client_secret,
            'scope': '',
        };
        return this.post('oauth/token', data).then(function (auth_data) {
            auth_data.grant_type = "password";
            return auth_data;
        });
    };
    Webservice.prototype.loginFacebook = function (client_id, fb_info) {
        var data = {
            'grant_type': 'facebook',
            'client_id': client_id,
            'payload': fb_info,
        };
        return this.post('api/v1/auth/facebook', data).then(function (auth_data) {
            auth_data.grant_type = "facebook";
            auth_data.facebook_data = fb_info;
            return auth_data;
        });
    };
    Webservice.prototype.userLogout = function (auth) {
        return this.delete('oauth/tokens/' + this.auth.getAccessTokenId(), this.headersFromAuth(auth));
    };
    Webservice.prototype.setAuth = function (auth) {
        this.auth = auth;
    };
    Webservice.prototype.userNewsfeeds = function (page, auth, force_load) {
        if (page === void 0) { page = 0; }
        if (force_load === void 0) { force_load = false; }
        return this.fetch('mobile/api/v1/newsfeed?page=' + page, this.headersFromAuth(auth), false, force_load);
    };
    Webservice.prototype.userData = function (auth) {
        return this.fetch('mobile/api/v1/user', this.headersFromAuth(auth));
    };
    Webservice.prototype.headersFromAuth = function (auth) {
        if (!auth) {
            auth = this.auth;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Authorization': 'Bearer ' + auth.getAccessToken() });
        return headers;
    };
    Webservice.prototype.userApplicationsAvailable = function (search, page, auth, force_load) {
        if (search === void 0) { search = ""; }
        if (page === void 0) { page = 0; }
        if (force_load === void 0) { force_load = false; }
        return this.fetch('mobile/api/v1/application/available?page=' + page + '&search=' + search, this.headersFromAuth(auth), false, force_load);
    };
    Webservice.prototype.userApplicationsSubscribed = function (search, page, auth, force_load) {
        if (search === void 0) { search = ""; }
        if (page === void 0) { page = 0; }
        if (force_load === void 0) { force_load = false; }
        return this.fetch('mobile/api/v1/application?page=' + page + '&search=' + search, this.headersFromAuth(auth), false, force_load);
    };
    Webservice.prototype.userNotifications = function (page, auth, force_load) {
        if (page === void 0) { page = 0; }
        if (force_load === void 0) { force_load = false; }
        return this.fetch('mobile/api/v1/notification?page=' + page, this.headersFromAuth(auth), false, force_load);
    };
    Webservice.prototype.applicationContextsAvailable = function (application_name, search, page, auth, force_load) {
        if (search === void 0) { search = ""; }
        if (page === void 0) { page = 0; }
        if (force_load === void 0) { force_load = false; }
        return this.fetch('mobile/api/v1/contexts/' + application_name + '?page=' + page + '&search=' + search, this.headersFromAuth(auth), false, force_load);
    };
    Webservice.prototype.userSubscribeContext = function (application_name, context_name, auth) {
        return this.post('mobile/api/v1/context/subscription', { 'application_name': application_name, 'context_name': context_name }, this.headersFromAuth(auth));
    };
    Webservice.prototype.userUnsubscribeContext = function (application_name, context_name, auth) {
        return this.delete('mobile/api/v1/context/subscription/' + application_name + '/' + context_name, this.headersFromAuth(auth));
    };
    Webservice.prototype.userContextSubscriptions = function (search, page, auth, force_load) {
        if (search === void 0) { search = ""; }
        if (page === void 0) { page = 0; }
        if (force_load === void 0) { force_load = false; }
        return this.fetch('mobile/api/v1/context/subscriptions?page=' + page + '&search=' + search, this.headersFromAuth(auth), false, force_load);
    };
    Webservice.prototype.userApplicationContextSubscriptions = function (application_name, search, page, auth, force_load) {
        if (search === void 0) { search = ""; }
        if (page === void 0) { page = 0; }
        if (force_load === void 0) { force_load = false; }
        return this.fetch('mobile/api/v1/context/subscriptions/' + application_name + '?page=' + page + '&search=' + search, this.headersFromAuth(auth), false, force_load);
    };
    Webservice.prototype.userRegisterPushToken = function (token, type, auth) {
        return this.post('mobile/api/v1/user/push_token', { 'token': token, 'type': type }, this.headersFromAuth(auth));
    };
    Webservice.prototype.userUnregisterPushToken = function (token, type, auth) {
        return this.delete('mobile/api/v1/user/push_token/' + type + '/' + token, this.headersFromAuth(auth));
    };
    Webservice.prototype.userApplicationContents = function (auth, force_load) {
        if (force_load === void 0) { force_load = false; }
        return this.fetch('mobile/api/v1/application/content', this.headersFromAuth(auth), false, force_load);
    };
    Webservice.prototype.contentLoadExternal = function (url, force_load) {
        if (force_load === void 0) { force_load = false; }
        return this.fetch(url, null, true, force_load);
    };
    Webservice.prototype.contentLoad = function (content_id, data, auth) {
        if (data === void 0) { data = null; }
        return this.post('mobile/api/v1/content/data_url/' + content_id, data, this.headersFromAuth(auth));
    };
    Webservice.prototype.userCalendarEvents = function (auth, force_load) {
        if (force_load === void 0) { force_load = false; }
        return this.fetch('mobile/api/v1/calendar_event', this.headersFromAuth(auth), false, force_load);
    };
    Webservice.prototype.userCalendarEventsBetweenDates = function (start, end, auth, force_load) {
        if (force_load === void 0) { force_load = false; }
        return this.fetch('mobile/api/v1/calendar_event/between_dates/' + start.toISOString().split('T')[0] + '/' + end.toISOString().split('T')[0], this.headersFromAuth(auth), false, force_load);
    };
    Webservice.prototype.userAddApplication = function (application_name, auth) {
        return this.post('mobile/api/v1/application/subscription', { application_name: application_name }, this.headersFromAuth(auth));
    };
    Webservice.prototype.userRemoveApplication = function (application_name, auth) {
        return this.delete('mobile/api/v1/application/subscription/' + application_name, this.headersFromAuth(auth));
    };
    Webservice.prototype.registerLocation = function (data, auth) {
        if (data === void 0) { data = null; }
        return this.post('mobile/api/v1/user/location', data, this.headersFromAuth(auth));
    };
    Webservice.prototype.userNotificationRead = function (notifiable_type, notifiable_id, auth) {
        return this.post('mobile/api/v1/notification/read', { notifiable_type: notifiable_type, notifiable_id: notifiable_id }, this.headersFromAuth(auth));
    };
    Webservice.prototype.sendForgotPasswordCode = function (email) {
        return this.post('api/v1/user/password', { email: email });
    };
    Webservice.prototype.resetForgotPassword = function (email, code, password) {
        return this.put('api/v1/user/password', { email: email, code: code, password: password });
    };
    return Webservice;
}());
Webservice = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__cache_MemoryCache__["a" /* MemoryCache */]])
], Webservice);

//# sourceMappingURL=webservice.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationContents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_google_map_google_map__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_text_text__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the ApplicationContents provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ApplicationContents = (function () {
    function ApplicationContents(auth, ws, storage) {
        this.auth = auth;
        this.ws = ws;
        this.storage = storage;
        this.CONTENTS_KEY = 'ApplicationContents.contents';
        this.CONTENT_GOOGLE_MAP = "App\\ContentGoogleMap";
        this.CONTENT_TEXT = "App\\ContentText";
        this.loaded = false;
    }
    ApplicationContents.prototype.setContents = function (someContents) {
        this.contents = someContents;
        return this.storage.set(this.CONTENTS_KEY, this.contents);
    };
    ApplicationContents.prototype.getContents = function () {
        return this.contents;
    };
    ApplicationContents.prototype.loadFromWS = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            return this.ws.userApplicationContents(this.auth, true)
                .then(function (app_contents) {
                _this.setContents(app_contents);
                _this.loaded = true;
            });
        }
        else {
            this.setContents([]);
            this.loaded = true;
            return Promise.resolve();
        }
    };
    ApplicationContents.prototype.load = function (force_load) {
        if (force_load === void 0) { force_load = false; }
        return this.loadFromWS();
    };
    ApplicationContents.prototype.isLoaded = function () {
        return this.loaded;
    };
    ApplicationContents.prototype.stringTypeToPage = function (type) {
        if (type == this.CONTENT_GOOGLE_MAP) {
            return __WEBPACK_IMPORTED_MODULE_5__pages_google_map_google_map__["a" /* GoogleMapPage */];
        }
        else if (type == this.CONTENT_TEXT) {
            return __WEBPACK_IMPORTED_MODULE_6__pages_text_text__["a" /* TextPage */];
        }
    };
    ApplicationContents.prototype.getPages = function () {
        var _this = this;
        var pages = [];
        this.getContents().forEach(function (application) {
            var subpages_loaded = [];
            application.contents.forEach(function (content) {
                subpages_loaded.push({
                    title: content.name,
                    root: _this.stringTypeToPage(content.contained_type),
                    icon: content.icon_name,
                    raw_data: content
                });
            });
            if (subpages_loaded.length > 0) {
                pages.push({
                    title: application.description,
                    root: null,
                    icon: "apps",
                    subpages: subpages_loaded,
                    show_subpages: false,
                    display: ['authenticated']
                });
            }
        });
        return pages;
    };
    ApplicationContents.prototype.contentLoad = function (content_params, user_info) {
        if (user_info === void 0) { user_info = null; }
        if (content_params.contained.data_url != null) {
            return this.ws.contentLoadExternal(content_params.contained.data_url);
        }
        else {
            if (content_params.contained.send_user_info) {
                return this.ws.contentLoad(content_params.id, user_info);
            }
            else {
                return this.ws.contentLoad(content_params.id);
            }
        }
    };
    return ApplicationContents;
}());
ApplicationContents = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_2__webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], ApplicationContents);

//# sourceMappingURL=application-contents.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var LocationTrackerProvider = (function () {
    function LocationTrackerProvider(geolocation, ws) {
        this.geolocation = geolocation;
        this.ws = ws;
        this.TYPE_INTERVAL = "interval";
        this.TYPE_WATCH = "watch";
        this.started = false;
        this.current_geolocation = null;
        this.frequency = __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* CONFIG */].GEOLOCATION_UPDATE_INTERVAL * 1000;
        this.options = {
            timeout: 10000,
            //frequency: this.frequency,
            enableHighAccuracy: true
        };
        //this.startInterval();
    }
    LocationTrackerProvider.prototype.startInterval = function () {
        var _this = this;
        if (!this.started) {
            this.type = this.TYPE_INTERVAL;
            this.started = true;
            this.getCurrentPosition();
            this.position_update_handler = setInterval(function () { return _this.getCurrentPosition(); }, this.frequency);
        }
    };
    LocationTrackerProvider.prototype.updatePostition = function (position) {
        this.current_geolocation = this.convertToPosition(position);
        this.ws.registerLocation(this.current_geolocation);
        //console.log(JSON.stringify(this.current_geolocation));
    };
    LocationTrackerProvider.prototype.start = function () {
        var _this = this;
        if (!this.started) {
            this.type = this.TYPE_WATCH;
            this.started = true;
            this.position_update_handler = this.geolocation.watchPosition(this.options)
                .filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
                _this.updatePostition(position);
            });
        }
    };
    LocationTrackerProvider.prototype.stop = function () {
        this.started = false;
        if (this.type == this.TYPE_WATCH) {
            this.position_update_handler.unsubscribe();
        }
        else if (this.type == this.TYPE_INTERVAL) {
            clearInterval(this.position_update_handler);
        }
    };
    LocationTrackerProvider.prototype.getCurrentPosition = function () {
        var _this = this;
        return this.geolocation.getCurrentPosition(this.options)
            .then(function (geo_data) {
            _this.updatePostition(geo_data);
            //console.log("GEOLOCATION DATA (getCurrentPosition()): " + JSON.stringify(this.current_geolocation));
            return _this.current_geolocation;
            //Promise.resolve(this.current_geolocation);
        }).catch(function (e) {
            console.log(JSON.stringify(e));
        });
    };
    LocationTrackerProvider.prototype.getLastPosition = function () {
        return this.current_geolocation;
    };
    LocationTrackerProvider.prototype.convertToPosition = function (position) {
        var positionObject = {};
        if ('coords' in position) {
            positionObject.coords = {};
            if ('latitude' in position.coords) {
                positionObject.coords.latitude = position.coords.latitude;
            }
            if ('longitude' in position.coords) {
                positionObject.coords.longitude = position.coords.longitude;
            }
            if ('accuracy' in position.coords) {
                positionObject.coords.accuracy = position.coords.accuracy;
            }
            if ('altitude' in position.coords) {
                positionObject.coords.altitude = position.coords.altitude;
            }
            if ('altitudeAccuracy' in position.coords) {
                positionObject.coords.altitudeAccuracy = position.coords.altitudeAccuracy;
            }
            if ('heading' in position.coords) {
                positionObject.coords.heading = position.coords.heading;
            }
            if ('speed' in position.coords) {
                positionObject.coords.speed = position.coords.speed;
            }
        }
        if ('timestamp' in position) {
            positionObject.timestamp = position.timestamp;
        }
        //console.log("GEOLOCATION DATA (convert): " + JSON.stringify(positionObject));
        return positionObject;
    };
    return LocationTrackerProvider;
}());
LocationTrackerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__webservice_webservice__["a" /* Webservice */]])
], LocationTrackerProvider);

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 199:
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
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export createTranslateLoader */
/* harmony export (immutable) */ __webpack_exports__["b"] = getLang;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_subscriptions_subscriptions__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_subscriptions_context_subscriptions_context__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_cloud_angular__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__config_config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_application_contents__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_maps__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_google_map_google_map__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic2_calendar__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_calendar_calendar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_in_app_browser__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_text_text__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_notification_detail_notification_detail__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_cache_MemoryCache__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_preferences_preferences__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_calendar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_location_tracker_location_tracker__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_facebook__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_generic_generic__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_generic_dynamic_list_generic_dynamic_list__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_intro_intro__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_login_forgot_password_login_forgot_password__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var cloudSettings = {
    'core': {
        'app_id': __WEBPACK_IMPORTED_MODULE_21__config_config__["a" /* CONFIG */].FIREBASE_APP_ID,
    },
    'auth': {
        'facebook': {
            'scope': ['email', 'public_profile']
        }
    },
    'push': {
        'sender_id': __WEBPACK_IMPORTED_MODULE_21__config_config__["a" /* CONFIG */].FIREBASE_SENDER_ID,
        'pluginConfig': {
            'ios': {
                'badge': true,
                'sound': true
            },
            'android': {
                'iconColor': __WEBPACK_IMPORTED_MODULE_21__config_config__["a" /* CONFIG */].ANDROID_PUSH_ICON_COLOR
            }
        }
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_subscriptions_subscriptions__["a" /* SubscriptionsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_subscriptions_context_subscriptions_context__["a" /* SubscriptionsContextPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_google_map_google_map__["a" /* GoogleMapPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_text_text__["a" /* TextPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_notification_detail_notification_detail__["a" /* NotificationDetailPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_preferences_preferences__["a" /* PreferencesPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_generic_generic__["a" /* GenericPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_generic_dynamic_list_generic_dynamic_list__["a" /* GenericDynamicListPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_login_forgot_password_login_forgot_password__["a" /* LoginForgotPasswordPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_9__angular_http__["Http"]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_20__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_26_ionic2_calendar__["a" /* NgCalendarModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_subscriptions_subscriptions__["a" /* SubscriptionsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_subscriptions_context_subscriptions_context__["a" /* SubscriptionsContextPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_google_map_google_map__["a" /* GoogleMapPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_text_text__["a" /* TextPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_notification_detail_notification_detail__["a" /* NotificationDetailPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_preferences_preferences__["a" /* PreferencesPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_generic_generic__["a" /* GenericPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_generic_dynamic_list_generic_dynamic_list__["a" /* GenericDynamicListPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_login_forgot_password_login_forgot_password__["a" /* LoginForgotPasswordPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__providers_webservice_webservice__["a" /* Webservice */],
            __WEBPACK_IMPORTED_MODULE_11__providers_auth__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_22__providers_application_contents__["a" /* ApplicationContents */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_32__providers_cache_MemoryCache__["a" /* MemoryCache */],
            __WEBPACK_IMPORTED_MODULE_33__angular_common__["c" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_calendar__["a" /* Calendar */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicErrorHandler */] },
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], useValue: getLang },
            __WEBPACK_IMPORTED_MODULE_36__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_facebook__["a" /* Facebook */]
        ]
    })
], AppModule);

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function getLang() {
    var lang = navigator.language.split('-')[0];
    return (lang ? lang : __WEBPACK_IMPORTED_MODULE_21__config_config__["a" /* CONFIG */].DEFAULT_LANG);
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 243:
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
webpackEmptyAsyncContext.id = 243;

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_notifications__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendar_calendar__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabsPage = TabsPage_1 = (function () {
    function TabsPage(auth, events, navCtrl, params) {
        var _this = this;
        this.auth = auth;
        this.events = events;
        this.navCtrl = navCtrl;
        this.params = params;
        this.tabs_hidden = false;
        this.available_tabs = [
            { title: "HOME", root: __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], icon: "home", display: ['authenticated'] },
            { title: "NOTIFICATIONS", root: __WEBPACK_IMPORTED_MODULE_7__notifications_notifications__["a" /* NotificationsPage */], icon: "notifications", display: ['authenticated'] },
            { title: "LOGIN", root: __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], icon: "log-in", display: ['not-authenticated'] },
            { title: "CREATE_ACCOUNT", root: __WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */], icon: "person-add", display: ['not-authenticated'] },
            { title: "CALENDAR", root: __WEBPACK_IMPORTED_MODULE_8__calendar_calendar__["a" /* CalendarPage */], icon: "calendar", display: ['authenticated'] },
        ];
        this.tabs_badge = { "NOTIFICATIONS": 0 };
        this.displayed_tabs = [];
        this.display_modes = ['not-authenticated', 'authenticated',];
        this.display((params.get('mode') ? params.get('mode') : 'not-authenticated'));
        this.events.subscribe('user:authenticated', function (auth) {
            _this.navCtrl.setRoot(TabsPage_1, { mode: 'authenticated' });
        });
        this.events.subscribe('user:unauthenticated', function (auth) {
            _this.navCtrl.setRoot(TabsPage_1, { mode: 'not-authenticated' });
        });
        this.events.subscribe('notification:push', function (msg) {
            _this.tabs_badge["NOTIFICATIONS"] += 1;
            if ((!msg.additionalData.foreground) && _this.current_mode == 'authenticated') {
                _this.tabRef.select(1);
            }
        });
        this.events.subscribe('notification:read', function (msg) {
            _this.tabs_badge["NOTIFICATIONS"] = 0;
        });
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        //if (!this.tabs_hidden) {
        this.tabRef.select(0);
        //}
    };
    TabsPage.prototype.display = function (mode, defaultTab) {
        if (defaultTab != null) {
            this.tabRef.select(defaultTab);
        }
        this.displayed_tabs = this.available_tabs.filter(function (val) { return (val.display.find(function (val_mode) { return val_mode == mode; })); });
        this.current_mode = mode;
        if (mode == 'not-authenticated') {
            this.tabs_hidden = __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG */].NOT_AUTHENTICATED_TABS_HIDDEN;
        }
        else {
            this.tabs_hidden = false;
        }
    };
    TabsPage.prototype.displayedTabs = function () {
        return this.displayed_tabs;
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('menu_tabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* Tabs */])
], TabsPage.prototype, "tabRef", void 0);
TabsPage = TabsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/tabs/tabs.html"*/'<ion-tabs #menu_tabs>\n  <ng-container *ngFor="let tab of displayedTabs()">\n    <ion-tab [show]="!tabs_hidden" [root]="tab.root" [tabTitle]="tab.title|translate" [tabIcon]="tab.icon" [tabBadge]="this.tabs_badge[tab.title] > 0 ? this.tabs_badge[tab.title] : null"></ion-tab>\n  </ng-container>\n</ion-tabs>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* NavParams */]])
], TabsPage);

var TabsPage_1;
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generic_dynamic_list_generic_dynamic_list__ = __webpack_require__(68);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events, modalCtrl) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.modalCtrl = modalCtrl;
        _this.full_screen = false;
        _this.list_searching = true;
        return _this;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.list_searching = true;
        _super.prototype.ionViewDidLoad.call(this);
    };
    HomePage.prototype.getUpdatePromise = function (force_load) {
        if (force_load === void 0) { force_load = false; }
        return this.ws.userNewsfeeds(0, null, force_load);
    };
    HomePage.prototype.getLoadMorePromise = function () {
        return this.ws.userNewsfeeds(this.page);
    };
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_4__generic_dynamic_list_generic_dynamic_list__["a" /* GenericDynamicListPage */]));
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'HOME\'|translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingText="{{\'PULL_DOWN_LOAD\'|translate}}" refreshingText="{{\'LOADING\'|translate}}...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class="empty_message" *ngIf="list.length == 0 && !this.list_searching">\n    <ion-icon name="information-circle"></ion-icon>\n    <h2 class="card-title">{{\'NO_NEWSFEED\'|translate}}</h2>\n  </div>\n\n  <ion-card *ngFor="let news of list">\n    <ion-item>\n      <h2>{{news.title}}</h2>\n      <p>{{news.created_at|date:\'longDate\'}} {{news.created_at|date:\'shortTime\'}}</p>\n      <ion-icon *ngIf="news.global == 1" name="globe" item-right></ion-icon>\n      <ion-icon *ngIf="news.context_name" name="pricetag" item-right></ion-icon>\n    </ion-item>\n    <ion-card-content>\n      <p>{{news.content}}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col  center text-center>\n        <p *ngIf="news.context_name">{{news.context_description}}</p>\n      </ion-col>\n      <ion-col  center text-center>\n        <ion-note>\n          {{news.application_description}}\n        </ion-note>\n      </ion-col>      \n    </ion-row>\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="this.has_next_page">\n    <ion-infinite-scroll-content loadingText="{{\'LOADING\'|translate}}...">></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/home/home.html"*/,
        providers: []
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MemoryCache provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var MemoryCache = (function () {
    function MemoryCache() {
        this.storage = {};
    }
    MemoryCache.prototype.has = function (key) {
        if (this.storage[key] != null) {
            this.clearIfInvalid(key);
            return (this.storage[key] != null);
        }
        return false;
    };
    MemoryCache.prototype.clear = function (key) {
        delete this.storage[key];
    };
    MemoryCache.prototype.set = function (key, value, ttl) {
        if (ttl === void 0) { ttl = 0; }
        var cache_value = { value: value, ttl: Date.now() + ttl };
        this.storage[key] = cache_value;
        console.log("cache set: " + key + " ttl: " + this.storage[key].ttl);
    };
    MemoryCache.prototype.get = function (key) {
        console.log("cache hit: " + key);
        this.clearIfInvalid(key);
        return this.storage[key].value;
    };
    MemoryCache.prototype.valid = function (key) {
        console.log("cache: now " + Date.now() + "<= valid date " + this.storage[key].ttl);
        return (Date.now() <= this.storage[key].ttl);
    };
    MemoryCache.prototype.clearIfInvalid = function (key) {
        if (!this.valid(key)) {
            this.clear(key);
        }
    };
    return MemoryCache;
}());
MemoryCache = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MemoryCache);

//# sourceMappingURL=MemoryCache.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel(user_data, auth) {
        this.auth = auth;
        this.username = user_data.username;
        this.name = user_data.name;
        this.surname = user_data.surname;
        this.email = user_data.email;
        this.hash_id = user_data.email;
        this.created_at = user_data.created_at;
        this.updated_at = user_data.created_at;
        this.origin = user_data.origin;
    }
    UserModel.prototype.getName = function () {
        return this.name;
    };
    UserModel.prototype.getSurname = function () {
        return this.surname;
    };
    UserModel.prototype.getEmail = function () {
        return this.email;
    };
    UserModel.prototype.hasProfilePicture = function () {
        return (this.getProfilePicture() != null);
    };
    return UserModel;
}());

//# sourceMappingURL=user-model.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generic_generic__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__(38);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginForgotPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginForgotPasswordPage = (function (_super) {
    __extends(LoginForgotPasswordPage, _super);
    function LoginForgotPasswordPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, auth, events) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.auth = auth;
        _this.events = events;
        _this.full_screen = __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* CONFIG */].NOT_AUTHENTICATED_FULL_SCREEN;
        _this.step = 1;
        return _this;
    }
    LoginForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginForgotPasswordPage');
    };
    LoginForgotPasswordPage.prototype.goToStep = function (step) {
        this.step = step;
    };
    LoginForgotPasswordPage.prototype.send = function (email) {
        var _this = this;
        console.log(email);
        if (email == undefined) {
            this.showAlert("Error", "No se ingresó un correo electrónico");
            return;
        }
        if (email.length < 6) {
            this.showAlert("Error", "Correo electrónico inválido");
            return;
        }
        this.showLoader("Enviando");
        this.ws.sendForgotPasswordCode(email).then(function () {
            _this.goToStep(2);
            _this.loading.dismiss();
        }).catch(function (error) {
            _this.loading.dismiss();
            _this.showAlert("Error", "Ha ocurrido un error al enviar el código.");
        });
    };
    LoginForgotPasswordPage.prototype.reset = function (email, code, password, password_repeat) {
        var _this = this;
        if (code == undefined) {
            this.showAlert("Error", "No se ingresó el código de recuperación");
            return;
        }
        if (code.length < 6) {
            this.showAlert("Error", "El código de recuperación debe tener al menos 6 caracteres");
            return;
        }
        if (password == undefined) {
            this.showAlert("Error", "Las contraseña no puede estar vacía.");
            return;
        }
        if (password.length < 8) {
            this.showAlert("Error", "Las contraseña debe tener al menos 8 caracteres.");
            return;
        }
        if (password != password_repeat) {
            this.showAlert("Error", "Las contraseñas no coinciden.");
            return;
        }
        this.showLoader("Reestableciendo");
        this.ws.resetForgotPassword(email, code, password).then(function () {
            _this.goToStep(1);
            _this.loading.dismiss();
            _this.navCtrl.pop();
            _this.showAlert("Éxito", "La contraseña se reestableció correctamente.");
        }).catch(function (error) {
            _this.loading.dismiss();
            _this.showAlert("Error", "Ha ocurrido un error al reestablecer la contraseña.");
        });
    };
    return LoginForgotPasswordPage;
}(__WEBPACK_IMPORTED_MODULE_2__generic_generic__["a" /* GenericPage */]));
LoginForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login-forgot-password',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/login-forgot-password/login-forgot-password.html"*/'<!--\n  Generated template for the LoginForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'FORGOT_PASSWORD\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p>{{\'STEP\'|translate}} {{step}}: {{\'FORGOT_PASSWORD_STEP_\'+step+\'_DESCRIPTION\'|translate}}</p>\n<div id="forgot_password_form">\n  <ion-list>\n    <ion-item *ngIf="step == 1">\n      <ion-input [(ngModel)]="email" type="email" clearInput="true" placeholder="{{\'EMAIL\'|translate}}"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="step == 2">\n      <ion-input [(ngModel)]="code" type="password" placeholder="{{\'FORGOT_PASSWORD_CODE\'|translate}}"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="step == 2">\n      <ion-input [(ngModel)]="password" type="password" placeholder="{{\'PASSWORD\'|translate}}"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="step == 2">\n      <ion-input [(ngModel)]="password_repeat" type="password" placeholder="{{\'PASSWORD_REPEAT\'|translate}}"></ion-input>\n    </ion-item>    \n  </ion-list>\n\n  <button *ngIf="step == 1" ion-button block (click)="send(email)">{{\'FORGOT_PASSWORD_SEND\'|translate}}</button>\n  <button *ngIf="step == 2" ion-button block (click)="reset(email,code,password,password_repeat)">{{\'RESET_PASSWORD\'|translate}}</button>\n  <button *ngIf="step == 2" clear small ion-button block (click)="goToStep(1)">{{\'FORGOT_PASSWORD_SEND_AGAIN\'|translate}}</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/login-forgot-password/login-forgot-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], LoginForgotPasswordPage);

//# sourceMappingURL=login-forgot-password.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_dynamic_list_generic_dynamic_list__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_detail_notification_detail__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(35);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationsPage = (function (_super) {
    __extends(NotificationsPage, _super);
    function NotificationsPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events, modalCtrl, datePipe) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.modalCtrl = modalCtrl;
        _this.datePipe = datePipe;
        _this.unread = false;
        _this.full_screen = false;
        _this.list_searching = true;
        _this.events.subscribe('notification:push', function (msg) {
            _this.unread = true;
            _this.refresh();
        });
        return _this;
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        this.list_searching = true;
        _super.prototype.ionViewDidLoad.call(this);
    };
    NotificationsPage.prototype.refresh = function () {
        this.list_searching = true;
        this.update(true);
        this.unread = false;
    };
    NotificationsPage.prototype.ionViewDidLeave = function () {
        this.events.publish('notification:read');
    };
    NotificationsPage.prototype.ionViewDidEnter = function () {
        if (this.unread) {
            this.refresh();
        }
    };
    NotificationsPage.prototype.getUpdatePromise = function (force_load) {
        if (force_load === void 0) { force_load = false; }
        this.events.publish('notification:read');
        return this.ws.userNotifications(0, null, force_load);
    };
    NotificationsPage.prototype.getLoadMorePromise = function () {
        return this.ws.userNotifications(this.page);
    };
    NotificationsPage.prototype.type = function (notification) {
        if (notification.notifiable_type == "App\\CalendarEvent") {
            return 'calendar';
        }
        else if (notification.notifiable_type == "App\\Newsfeed") {
            return 'newsfeed';
        }
        return null;
    };
    NotificationsPage.prototype.is = function (type, notification) {
        return (this.type(notification) == type);
    };
    NotificationsPage.prototype.icon = function (notification) {
        if (this.is('calendar', notification)) {
            return 'calendar';
        }
        else if (this.is('newsfeed', notification)) {
            return 'information-circle';
        }
    };
    NotificationsPage.prototype.title = function (notification) {
        var context = "";
        if (notification.notifiable.context && notification.notifiable.context.description != "") {
            context = " (" + notification.notifiable.context.description + ")";
        }
        if (this.is('calendar', notification)) {
            return notification.notifiable.event_name + " el día " + this.datePipe.transform(notification.notifiable.event_date, 'short') + context;
        }
        else if (this.is('newsfeed', notification)) {
            return notification.notifiable.title + context;
        }
    };
    NotificationsPage.prototype.open = function (notification) {
        //this.navCtrl.parent.select(0);
        if (!notification.read_date) {
            notification.read_date = new Date();
            this.ws.userNotificationRead(notification.notifiable_type, notification.notifiable.id);
        }
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__notification_detail_notification_detail__["a" /* NotificationDetailPage */], { notification: notification.notifiable, type: this.type(notification) });
        profileModal.present();
    };
    return NotificationsPage;
}(__WEBPACK_IMPORTED_MODULE_3__generic_dynamic_list_generic_dynamic_list__["a" /* GenericDynamicListPage */]));
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notifications',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'NOTIFICATIONS\'|translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingText="{{\'PULL_DOWN_LOAD\'|translate}}" refreshingText="{{\'LOADING\'|translate}}...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf="this.list_searching" class="spinner-container">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <div class="empty_message" *ngIf="list.length == 0 && !this.list_searching">\n    <ion-icon name="information-circle"></ion-icon>\n    <h2 class="card-title">{{\'NO_NOTIFICATIONS\'|translate}}</h2>\n  </div>\n\n  <ion-list *ngIf="list.length > 0">\n    <button ion-item detail-none (click)="open(notification)" *ngFor="let notification of list">\n      <ion-icon item-left name="{{icon(notification)}}" [class.read]="notification.read_date"></ion-icon>\n      {{title(notification)}}\n      <p>{{notification.created_at|date:\'short\'}}</p>\n      <!--ion-icon item-right *ngIf="notification.read_date" name="square-outline"></ion-icon-->\n      <!--ion-icon item-right *ngIf="!notification.read_date" name="radio-button-on"></ion-icon-->\n    </button>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="this.has_next_page">\n    <ion-infinite-scroll-content loadingText="{{\'LOADING\'|translate}}...">></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/notifications/notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* DatePipe */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationDetailPage = (function () {
    function NotificationDetailPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.notification = navParams.get('notification');
        this.type = navParams.get('type');
        if (this.type == "calendar") {
            this.title = this.notification.event_name;
        }
        else if (this.type == "newsfeed") {
            this.title = this.notification.title;
        }
    }
    NotificationDetailPage.prototype.ionViewDidLoad = function () {
    };
    NotificationDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return NotificationDetailPage;
}());
NotificationDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notification-detail',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/notification-detail/notification-detail.html"*/'<!--\n  Generated template for the NotificationDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{type|translate}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h1>{{title}}</h1>\n  <ng-container *ngIf="type == \'calendar\'">\n    <p>{{"EVENT_DATE"|translate}}: {{this.notification.event_date|date:\'medium\'}}</p>\n    <p>{{"EVENT_DURATION"|translate}}: {{this.notification.event_duration}}</p>\n    <p>{{this.notification.event_location}}</p>\n    <p>{{this.notification.event_description}}</p>\n  </ng-container>\n  <ng-container *ngIf="type == \'newsfeed\'">\n    <p>{{this.notification.content}}</p>\n    <p>{{this.notification.created_at|date:\'medium\'}}</p>\n  </ng-container>\n</ion-content>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/notification-detail/notification-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
], NotificationDetailPage);

//# sourceMappingURL=notification-detail.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_generic__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(300);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the Calendar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CalendarPage = (function (_super) {
    __extends(CalendarPage, _super);
    function CalendarPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events, action_sheet, device_calendar, toastCtrl) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.action_sheet = action_sheet;
        _this.device_calendar = device_calendar;
        _this.toastCtrl = toastCtrl;
        _this.calendar = {
            mode: 'month',
            currentDate: new Date(),
            queryMode: 'remote'
        };
        return _this;
    }
    CalendarPage.prototype.doRefresh = function (refresher) {
        this.loadCalendar(true, true)
            .then(function () {
            refresher.complete();
        }).catch(function (error) {
            refresher.complete();
        });
    };
    CalendarPage.prototype.setEventSource = function (ws_events) {
        this.event_source = ws_events;
    };
    CalendarPage.prototype.calendarError = function (error) {
        this.showAlert('Error', 'No pudo cargarse el calendario: ' + error.message);
    };
    CalendarPage.prototype.loadCalendar = function (show_loader, force_reload) {
        var _this = this;
        if (show_loader === void 0) { show_loader = true; }
        if (force_reload === void 0) { force_reload = false; }
        if (show_loader) {
            this.showLoader('Cargando');
        }
        return this
            .loadFromWs(this.current_start_date, this.current_end_date, force_reload)
            .then(function (ws_events) { return _this.setEventSource(ws_events); })
            .then(function () {
            if (show_loader) {
                _this.loading.dismiss();
            }
        })
            .catch(function (error) { return _this.calendarError(error); });
    };
    CalendarPage.prototype.wsEventToCalendar = function (ws_event) {
        var start = new Date(ws_event.event_date);
        var end = new Date(ws_event.event_date);
        var s_time = ws_event.event_duration.split(":");
        var is_all_day = false;
        end.setHours(start.getHours() + parseInt(s_time[0]));
        end.setMinutes(start.getMinutes() + parseInt(s_time[1]));
        end.setSeconds(start.getSeconds() + parseInt(s_time[2]));
        if (start.getHours() == 0 && start.getMinutes() == 0 && start.getSeconds() == 0 && ws_event.event_duration == "24:00:00") {
            is_all_day = true;
        }
        var name = ws_event.event_name + " (" + ws_event.application_description + ")";
        if (ws_event.context_id) {
            name = ws_event.context_description + ": " + name;
        }
        return { name: name, start_date: start, end_date: end, is_all_day: is_all_day, description: ws_event.description, location: ws_event.location };
    };
    CalendarPage.prototype.loadFromWs = function (start, end, force_reload) {
        var _this = this;
        if (force_reload === void 0) { force_reload = false; }
        return this.ws.userCalendarEventsBetweenDates(start, end, null, force_reload).then(function (ws_events) {
            var events = [];
            if (ws_events.data.length > 0) {
                events = ws_events.data.map(function (ws_event) {
                    var calendar_dates = _this.wsEventToCalendar(ws_event);
                    return {
                        title: calendar_dates.name,
                        startTime: calendar_dates.start_date,
                        endTime: calendar_dates.end_date,
                        allDay: calendar_dates.is_all_day,
                        location: calendar_dates.location,
                        description: calendar_dates.description,
                    };
                });
            }
            return Promise.resolve(events);
        });
    };
    CalendarPage.prototype.addEvent = function (title, location, notes, start_date, end_date) {
        var saved_event = this.device_calendar.createEvent(title, location, notes, start_date, end_date);
        this.toast('Evento guardado!');
        return saved_event;
    };
    CalendarPage.prototype.toast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    CalendarPage.prototype.saveEvent = function (event) {
        var _this = this;
        console.log('Saving event...');
        this.device_calendar.hasReadWritePermission().then(function (result) {
            if (result === false) {
                _this.device_calendar.requestReadWritePermission().then(function (v) {
                    _this.addEvent(event.title, event.location, event.description, event.startTime, event.endTime);
                }, function (r) {
                    console.log("Rejected");
                });
            }
            else {
                _this.addEvent(event.title, event.location, event.description, event.startTime, event.endTime);
            }
        });
    };
    CalendarPage.prototype.presentActionSheet = function (event) {
        var _this = this;
        var sheet = this.action_sheet.create({
            title: event.title,
            buttons: [
                {
                    text: 'Guardar',
                    handler: function () {
                        _this.saveEvent(event);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        sheet.present();
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.view_title = title;
    };
    CalendarPage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
        this.presentActionSheet(event);
    };
    CalendarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalendarPage.prototype.onTimeSelected = function (ev) {
        this.title_date = ev.selectedTime;
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    CalendarPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    CalendarPage.prototype.onRangeChanged = function (ev) {
        this.current_start_date = ev.startTime;
        this.current_end_date = ev.endTime;
        if (this.calendar.mode == "month") {
        }
        this.loadCalendar();
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    CalendarPage.prototype.markDisabled = function (date) {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };
    ;
    return CalendarPage;
}(__WEBPACK_IMPORTED_MODULE_3__generic_generic__["a" /* GenericPage */]));
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-calendar',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/calendar/calendar.html"*/'<!--\n  Generated template for the Calendar page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'CALENDAR\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-toolbar>\n    <ion-title id="view_title" start>{{view_title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button [disabled]="isToday" (click)="today()">{{\'TODAY\'|translate}}</button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-segment [(ngModel)]="calendar.mode" color="primary">\n    <ion-segment-button value="month">\n      {{\'MONTH\'|translate}}\n    </ion-segment-button>\n    <ion-segment-button value="week">\n      {{\'WEEK\'|translate}}\n    </ion-segment-button>\n    <ion-segment-button value="day">\n      {{\'DAY\'|translate}}\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingText="{{\'PULL_DOWN_LOAD\'|translate}}" refreshingText="{{\'LOADING\'|translate}}...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <calendar [eventSource]="event_source" [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate" (onCurrentDateChanged)="onCurrentDateChanged($event)"\n    (onEventSelected)="onEventSelected($event)" (onTitleChanged)="onViewTitleChanged($event)" (onTimeSelected)="onTimeSelected($event)"\n    [queryMode]="calendar.queryMode" (onRangeChanged)="onRangeChanged($event)" step="30" noEventsLabel="{{\'NO_EVENTS\'|translate}}"\n    allDayLabel="{{\'ALL_DAY\'|translate}}" formatWeekTitle="MMMM yyyy, \'{{\'WEEK\'|translate}}\' $n">\n  </calendar>\n</ion-content>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/calendar/calendar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_dynamic_list_generic_dynamic_list__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subscriptions_context_subscriptions_context__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(303);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the Subscriptions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SubscriptionsPage = (function (_super) {
    __extends(SubscriptionsPage, _super);
    function SubscriptionsPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events, iab, toastCtrl) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.iab = iab;
        _this.toastCtrl = toastCtrl;
        _this.full_screen = true;
        _this.mode = "unsubscribed";
        _this.activeItemSliding = null;
        _this.list_searching = true;
        _this.mode_method = {
            subscribed: function (s, p) { return _this.ws.userApplicationsSubscribed(s, p); },
            unsubscribed: function (s, p) { return _this.ws.userApplicationsAvailable(s, p); }
        };
        _this.applications = {
            subscribed: null,
            unsubscribed: null
        };
        return _this;
    }
    SubscriptionsPage.prototype.getUpdatePromise = function () {
        return this.mode_method[this.mode](this.search_text);
    };
    SubscriptionsPage.prototype.getLoadMorePromise = function () {
        return this.mode_method[this.mode](this.search_text, this.page);
    };
    SubscriptionsPage.prototype.ionViewDidLoad = function () {
        this.list_searching = true;
        _super.prototype.update.call(this);
    };
    SubscriptionsPage.prototype.update = function () {
        var _this = this;
        return _super.prototype.update.call(this).then(function () {
            _this.applications[_this.mode] = _this.list;
        });
    };
    SubscriptionsPage.prototype.segmentChanged = function (event) {
        if (this.applications[this.mode] == null) {
            this.list_searching = true;
            this.update();
        }
    };
    SubscriptionsPage.prototype.selected = function (application) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__subscriptions_context_subscriptions_context__["a" /* SubscriptionsContextPage */], { 'application': application });
    };
    SubscriptionsPage.prototype.applicationAdded = function (application) {
        this.move(application, 'unsubscribed', 'subscribed');
        this.events.publish('application:subscription_changed');
        this.toast("Servicio añadido correctamente!");
    };
    SubscriptionsPage.prototype.toast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'center'
        });
        toast.present();
    };
    SubscriptionsPage.prototype.addApplication = function (application) {
        var _this = this;
        this.ws.userAddApplication(application.name).then(function (data) {
            if (application.auth_required) {
                var browser = _this.iab.create(data.url_redirect, '_blank', { hardwareback: 'no', location: 'no' });
                _this.onApplicationConnected(browser, application.name)
                    .then(function () {
                    _this.applicationAdded(application);
                }).catch(function () {
                    _this.showAlert('Error', 'Se produjo un error al añadir la aplicación');
                });
            }
            else {
                _this.applicationAdded(application);
            }
        });
    };
    SubscriptionsPage.prototype.move = function (application, from, to) {
        if (to === void 0) { to = null; }
        var index = this.applications[from].indexOf(application);
        if (index !== -1) {
            this.applications[from].splice(index, 1);
        }
        if (to != null && this.applications[to] != null) {
            this.applications[to].push(application);
        }
    };
    SubscriptionsPage.prototype.applicationRemoved = function (application) {
        this.move(application, 'subscribed', 'unsubscribed');
        this.events.publish('application:subscription_changed');
        this.toast('Se ha eliminado el servicio.');
    };
    SubscriptionsPage.prototype.removeApplication = function (application) {
        var _this = this;
        this.ws.userRemoveApplication(application.name).then(function () {
            _this.applicationRemoved(application);
        });
    };
    SubscriptionsPage.prototype.onApplicationConnected = function (browser, application_name) {
        return new Promise(function (resolve, reject) {
            var interval = null;
            var already_loaded = false;
            browser.on("loadstop").subscribe(function () {
                if (!already_loaded) {
                    already_loaded = true;
                    browser.executeScript({ code: "localStorage.setItem('" + application_name + "_status','CONNECTING');" });
                    interval = setInterval(function () {
                        browser.executeScript({ code: "localStorage.getItem('" + application_name + "_status');" })
                            .then(function (status) {
                            var p_status = status[0];
                            if (p_status == "CONNECTED") {
                                clearInterval(interval);
                                browser.close();
                                resolve();
                            }
                            else if (p_status == "ERROR") {
                                clearInterval(interval);
                                browser.close();
                                reject();
                            }
                        }).catch(function () {
                            clearInterval(interval);
                        });
                    }, 1000);
                }
            });
        });
    };
    SubscriptionsPage.prototype.openOption = function (itemSlide, item, options) {
        //@TODO: Cambiar para abrir menu de opciones sobre el elemento al presionar (por ahora solo eliminar). Comportamiento de android
        // snippet from: https://gist.github.com/ihsanberahim/b48f2bf659aafc55f629dac6c32dd52a#file-_ionic3_ionitemsliding_click_event-md
        if (this.activeItemSliding !== null)
            this.closeOption();
        this.activeItemSliding = itemSlide;
        var swipeAmount = 100;
        itemSlide.startSliding(swipeAmount);
        itemSlide.moveSliding(swipeAmount);
        itemSlide.setElementClass('active-options-right', true);
        itemSlide.setElementClass('active-swipe-right', true);
        item.setElementStyle('transition', null);
        item.setElementStyle('transform', 'translate3d(-' + swipeAmount + 'px, 0px, 0px)');
    };
    SubscriptionsPage.prototype.closeOption = function () {
        // snippet from: https://gist.github.com/ihsanberahim/b48f2bf659aafc55f629dac6c32dd52a#file-_ionic3_ionitemsliding_click_event-md
        if (this.activeItemSliding) {
            this.activeItemSliding.close();
            this.activeItemSliding = null;
        }
    };
    return SubscriptionsPage;
}(__WEBPACK_IMPORTED_MODULE_3__generic_dynamic_list_generic_dynamic_list__["a" /* GenericDynamicListPage */]));
SubscriptionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-subscriptions',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/subscriptions/subscriptions.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'SUBSCRIPTIONS\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingText="{{\'PULL_DOWN_LOAD\'|translate}}" refreshingText="{{\'LOADING\'|translate}}...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-searchbar (ionInput)="search($event)" placeholder="{{\'SEARCH\'|translate}}"></ion-searchbar>\n\n  <ion-segment [(ngModel)]="mode" color="primary" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="subscribed">\n      {{\'APP_SUBSCRIBED\'|translate}}\n    </ion-segment-button>\n    <ion-segment-button value="unsubscribed">\n      {{\'APP_UNSUBSCRIBED\'|translate}}\n    </ion-segment-button>\n  </ion-segment>\n\n\n  <div *ngIf="this.list_searching" class="spinner-container">\n    <ion-spinner></ion-spinner>\n  </div>\n\n\n  <div class="empty_message" *ngIf="applications[mode] && applications[mode].length == 0 && !this.list_searching">\n    <ion-icon name="information-circle"></ion-icon>\n    <h2 class="card-title">{{\'NO_APPLICATIONS\'|translate}}</h2>\n  </div>\n\n  <ng-container *ngIf="mode == \'unsubscribed\'">\n\n    <ion-card *ngFor="let application of applications[mode]">\n      <ion-card-header>\n        {{application.description}}\n      </ion-card-header>\n      <ion-card-content>\n        <button ion-button icon-left block medium (click)="addApplication(application)">\n          <ion-icon name="add" item-start></ion-icon>\n          {{\'ADD_APPLICATION\'|translate}}\n        </button>\n        <p text-center class="notes" *ngIf="application.auth_required">\n          <ion-icon name=\'lock\'></ion-icon>\n          {{\'AUTH_REQUIRED\'|translate}}\n        </p>\n        <button ion-button clear block medium icon-left (click)="selected(application)">\n          <ion-icon name=\'pricetag\'></ion-icon>\n          {{\'VIEW_CONTEXTS\'|translate}}\n        </button>\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n\n  <ng-container *ngIf="mode == \'subscribed\'">\n    <ion-list>\n      <ion-item-sliding #slidingItem *ngFor="let application of applications[mode]">\n        <button ion-item #item (press)="openOption(slidingItem, item)" (click)="selected(application)">\n          {{application.description}}\n        </button>\n        <ion-item-options side="right">\n          <button ion-button color="danger" (click)="removeApplication(application)">\n            <ion-icon name="remove-circle"></ion-icon>\n            {{\'REMOVE_APPLICATION\'|translate}}\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ng-container>\n\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="this.has_next_page">\n    <ion-infinite-scroll-content loadingText="{{\'LOADING\'|translate}}...">></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/subscriptions/subscriptions.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], SubscriptionsPage);

//# sourceMappingURL=subscriptions.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionsContextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_dynamic_list_generic_dynamic_list__ = __webpack_require__(68);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Subscriptions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SubscriptionsContextPage = (function (_super) {
    __extends(SubscriptionsContextPage, _super);
    function SubscriptionsContextPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.subscriptions = [];
        _this.full_screen = true;
        _this.list_searching = false;
        return _this;
    }
    SubscriptionsContextPage.prototype.ionViewDidLoad = function () {
        this.list_searching = true;
        this.update();
    };
    SubscriptionsContextPage.prototype.getSelectedApplication = function () {
        return this.navParams.get('application');
    };
    SubscriptionsContextPage.prototype.getUpdatePromise = function () {
        var _this = this;
        return this.updateSubscriptions().then(function () {
            return _this.ws.applicationContextsAvailable(_this.getSelectedApplication().name, _this.search_text);
        });
    };
    SubscriptionsContextPage.prototype.getLoadMorePromise = function () {
        return this.ws.applicationContextsAvailable(this.getSelectedApplication().name, this.search_text, this.page);
    };
    SubscriptionsContextPage.prototype.updateSubscriptions = function () {
        var _this = this;
        return this.ws.userApplicationContextSubscriptions(this.getSelectedApplication().name)
            .then(function (data) {
            _this.subscriptions = [];
            data.forEach(function (element) {
                _this.subscriptions.push(element.name);
            });
        });
    };
    SubscriptionsContextPage.prototype.hasSuscribed = function (context_name) {
        return this.subscriptions.find(function (subscription) { return (subscription == context_name); });
    };
    SubscriptionsContextPage.prototype.subscribe = function (context) {
        var _this = this;
        this.showLoader("Suscribiendo");
        this.ws.userSubscribeContext(this.getSelectedApplication().name, context.name)
            .then(function () {
            _this.loading.dismiss();
            _this.subscriptions.push(context.name);
        })
            .catch(function () {
            _this.showAlert("Error", "Ocurrió un error al suscribirse");
            _this.loading.dismiss();
        });
    };
    SubscriptionsContextPage.prototype.unsubscribe = function (context) {
        var _this = this;
        this.showLoader("Desuscribiendo");
        this.ws.userUnsubscribeContext(this.getSelectedApplication().name, context.name)
            .then(function () {
            _this.loading.dismiss();
            var index = _this.subscriptions.indexOf(context.name);
            if (index !== -1) {
                _this.subscriptions.splice(index, 1);
            }
        })
            .catch(function () {
            _this.showAlert("Error", "Ocurrió un error al desuscribirse");
            _this.loading.dismiss();
        });
    };
    return SubscriptionsContextPage;
}(__WEBPACK_IMPORTED_MODULE_3__generic_dynamic_list_generic_dynamic_list__["a" /* GenericDynamicListPage */]));
SubscriptionsContextPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-subscriptions-context',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/subscriptions-context/subscriptions-context.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'CONTEXTS\'|translate}}: {{this.getSelectedApplication().name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingText="{{\'PULL_DOWN_LOAD\'|translate}}" refreshingText="{{\'LOADING\'|translate}}...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card>\n    <ion-card-content>\n      {{this.getSelectedApplication().description}}\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-searchbar (ionInput)="search($event)" placeholder="{{\'SEARCH\'|translate}}"></ion-searchbar>\n\n  <div *ngIf="this.list_searching" class="spinner-container">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <div class="empty_message" *ngIf="list.length == 0 && !this.list_searching">\n    <ion-icon name="information-circle"></ion-icon>\n    <h2 class="card-title">{{\'NO_CONTEXTS\'|translate}}</h2>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor="let context of list">\n      <h2>{{context.description}}</h2>\n      <button *ngIf="!this.hasSuscribed(context.name)" ion-button item-right icon-left (click)="subscribe(context)">\n        <ion-icon name="pricetag"></ion-icon>\n        {{\'SUBSCRIBE\'|translate}}\n      </button>\n      <button *ngIf="this.hasSuscribed(context.name)" ion-button item-right icon-left clear outline (click)="unsubscribe(context)">\n        <ion-icon name="checkmark"></ion-icon>\n        {{\'SUBSCRIBED\'|translate}}\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="this.has_next_page">\n    <ion-infinite-scroll-content loadingText="{{\'LOADING\'|translate}}..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/subscriptions-context/subscriptions-context.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], SubscriptionsContextPage);

//# sourceMappingURL=subscriptions-context.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Generic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var GenericPage = (function () {
    function GenericPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ws = ws;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.has_next_page = true;
        this.full_screen = false;
    }
    GenericPage.prototype.ionViewDidLoad = function () {
    };
    GenericPage.prototype.showLoader = function (text) {
        if (text === void 0) { text = "Cargando"; }
        this.loading = this.loadingCtrl.create({
            content: text + '...'
        });
        this.loading.present();
    };
    GenericPage.prototype.showAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    GenericPage.prototype.resetPage = function () {
        this.page = 0;
    };
    GenericPage.prototype.nextPage = function () {
        this.page += 1;
    };
    GenericPage.prototype.setPaginationData = function (data) {
        this.per_page = data.per_page;
        this.has_next_page = (data.next_page_url != null);
    };
    GenericPage.prototype.ionViewWillEnter = function () {
        if (this.full_screen) {
            this.events.publish('app:full_screen_on');
        }
        else {
            this.events.publish('app:full_screen_off');
        }
    };
    GenericPage.prototype.ionViewWillLeave = function () {
        this.events.publish('app:full_screen_off');
    };
    return GenericPage;
}());
GenericPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-generic',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/generic/generic.html"*/'<!--\n  Generated template for the Generic page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>generic</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/generic/generic.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], GenericPage);

//# sourceMappingURL=generic.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_dev__ = __webpack_require__(566);

var CONFIG = __WEBPACK_IMPORTED_MODULE_0__config_dev__["a" /* CONFIG_ENV */];
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generic_generic__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_application_contents__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_tracker_location_tracker__ = __webpack_require__(188);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







/*
  Generated class for the GoogleMap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var GoogleMapPage = (function (_super) {
    __extends(GoogleMapPage, _super);
    function GoogleMapPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events, google_map, params, content, location) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.google_map = google_map;
        _this.params = params;
        _this.content = content;
        _this.location = location;
        _this.full_screen = true;
        _this.content_params = _this.navParams.get('data');
        _this.load();
        return _this;
    }
    GoogleMapPage.prototype.load = function () {
        var _this = this;
        this.showLoader('Cargando ' + this.content_params.name);
        this.location.getCurrentPosition()
            .catch(function (error) {
            _this.loading.dismiss();
            _this.showAlert('Error ' + error.code, 'No se pudo obtener la posición actual en el mapa: ' + error.message);
        })
            .then(function (geo_data) {
            //console.log("Geo data: "+JSON.stringify(geo_data));
            if (geo_data) {
                _this.current_geolocation = geo_data;
            }
            else {
                _this.current_geolocation = undefined;
            }
            return _this.content.contentLoad(_this.content_params, _this.current_geolocation);
        })
            .then(function (data) { return _this.loadMap(data); })
            .then(function () {
            _this.loading.dismiss();
        })
            .catch(function (error) {
            console.log(error);
            _this.loading.dismiss();
            _this.showAlert('Error', 'No se pudieron obtener los datos del mapa.');
        });
    };
    GoogleMapPage.prototype.ionViewDidLoad = function () {
    };
    GoogleMapPage.prototype.addCurrentPosition = function () {
        console.log("addCurrentPosition > init");
        if (this.current_geolocation != undefined) {
            console.log("addCurrentPosition > existe posicion" + JSON.stringify(this.current_geolocation));
            var marker_options = {
                position: new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["d" /* LatLng */](this.current_geolocation.coords.latitude, this.current_geolocation.coords.longitude),
                title: 'Estas aquí',
                icon: {
                    url: 'www/assets/img/marker.png',
                    size: {
                        width: 32,
                        height: 32
                    }
                },
                animation: __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* GoogleMapsAnimation */].BOUNCE
            };
            this.map.addMarker(marker_options);
        }
    };
    GoogleMapPage.prototype.addMarkers = function (markers_data) {
        if ((markers_data != null) && (markers_data.length > 0)) {
            for (var _i = 0; _i < markers_data.length; _i++) {
                this.map.addMarker(markers_data[_i]);
            }
        }
    };
    GoogleMapPage.prototype.addPolylines = function (polylines_data) {
        if (polylines_data != null) {
            this.map.addPolyline(polylines_data);
        }
    };
    GoogleMapPage.prototype.loadMap = function (data) {
        var _this = this;
        var polylines_data = null;
        var markers_data = null;
        var center_pos = null;
        if (data.hasOwnProperty('polylines')) {
            polylines_data = data.polylines;
        }
        if (data.hasOwnProperty('markers')) {
            markers_data = data.markers;
        }
        if (data.hasOwnProperty('center')) {
            center_pos = data.center;
        }
        this.map = this.google_map.create(this.map_element.nativeElement);
        return this.map.one(__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            if (!center_pos && _this.current_geolocation != undefined) {
                center_pos = {
                    target: new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["d" /* LatLng */](_this.current_geolocation.coords.latitude, _this.current_geolocation.coords.longitude),
                    zoom: 15,
                    tilt: 0
                };
            }
            _this.map.clear();
            _this.centerMap(center_pos);
            _this.addPolylines(polylines_data);
            _this.addMarkers(markers_data);
            _this.addCurrentPosition();
        });
    };
    GoogleMapPage.prototype.centerMap = function (center_pos) {
        this.map.moveCamera(center_pos);
    };
    return GoogleMapPage;
}(__WEBPACK_IMPORTED_MODULE_2__generic_generic__["a" /* GenericPage */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], GoogleMapPage.prototype, "map_element", void 0);
GoogleMapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-google-map',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/google-map/google-map.html"*/'<!--\n  Generated template for the GoogleMap page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{content_params.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="map-page">\n   <div #map id="map" style="height:100%;"></div> \n</ion-content>\n'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/google-map/google-map.html"*/,
    }),
    __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_5__providers_application_contents__["a" /* ApplicationContents */]; }))),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], Object, __WEBPACK_IMPORTED_MODULE_6__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */]])
], GoogleMapPage);

//# sourceMappingURL=google-map.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generic_generic__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_marked__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_marked__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TextPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TextPage = (function (_super) {
    __extends(TextPage, _super);
    function TextPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.full_screen = true;
        _this.content_params = _this.navParams.get('data');
        return _this;
    }
    TextPage.prototype.ionViewDidLoad = function () {
        this.load();
    };
    TextPage.prototype.load = function () {
        var text = __WEBPACK_IMPORTED_MODULE_4_marked___default()(this.content_params.contained.text);
        this.text = text;
    };
    return TextPage;
}(__WEBPACK_IMPORTED_MODULE_2__generic_generic__["a" /* GenericPage */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], TextPage.prototype, "text", void 0);
TextPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-text',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/text/text.html"*/'<!--\n  Generated template for the TextPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{content_params.description}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [innerHtml]="text"></div>\n</ion-content>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/text/text.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], TextPage);

//# sourceMappingURL=text.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IntroPage = (function () {
    function IntroPage(navCtrl, navParams, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.from_menu = false;
        this.slides = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* CONFIG */].INTRO_SLIDES;
        this.from_menu = navParams.get('from_menu');
    }
    IntroPage.prototype.close = function () {
        this.startUsingApp();
    };
    IntroPage.prototype.startUsingApp = function () {
        this.viewCtrl.dismiss();
    };
    IntroPage.prototype.ionViewWillEnter = function () {
        this.events.publish('app:full_screen_on');
    };
    IntroPage.prototype.ionViewWillLeave = function () {
        if (this.from_menu) {
            this.events.publish('app:full_screen_off');
        }
    };
    return IntroPage;
}());
IntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-intro',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/intro/intro.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <ion-fab top right>\n    <button ion-fab mini color="light" (click)="close()" title="{{\'SKIP\'|translate}}"><ion-icon name="close"></ion-icon></button>\n  </ion-fab>\n  <ion-slides pager="true">\n    <ion-slide padding *ngFor="let s of slides">\n      <ng-container *ngIf="s.IMAGE && s.TITLE == \'\' && s.DESCRIPTION == \'\' ">\n        <img class="full" src="assets/img/{{s.IMAGE|translate}}" />\n      </ng-container>\n      <ng-container *ngIf="s.IMAGE && (s.TITLE != \'\' || s.DESCRIPTION != \'\')">\n        <img src="assets/img/{{s.IMAGE|translate}}" />\n      </ng-container>      \n      <h1>{{s.TITLE|translate}}</h1>\n      <p>{{s.DESCRIPTION|translate}}</p>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-row>\n        <ion-col>\n          <img src="assets/img/{{\'slide_ending.png\'|translate}}" />\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="light" (click)="startUsingApp()">{{\'START_USING_APP\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/intro/intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(200);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_models_factory_user_model__ = __webpack_require__(573);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Auth = (function () {
    function Auth(ws, storage, events, fb) {
        this.ws = ws;
        this.storage = storage;
        this.events = events;
        this.fb = fb;
        this.setClientId(null);
        this.setClientSecret(null);
        this.loaded = false;
        this.authenticated = false;
        this.jwt_helper = new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["JwtHelper"]();
    }
    Auth.prototype.setClientId = function (id) {
        this.client_id = id;
        this.storage.set('Auth.client_id', id);
    };
    Auth.prototype.setClientSecret = function (secret) {
        this.client_secret = secret;
        this.storage.set('Auth.secret', secret);
    };
    Auth.prototype.setAuthData = function (auth_data, store) {
        if (store === void 0) { store = true; }
        this.auth_data = auth_data;
        if (auth_data != null) {
            this.auth_data.access_token_data = this.jwt_helper.decodeToken(this.auth_data.access_token);
            this.setAuthenticated(true);
        }
        else {
            this.setAuthenticated(false);
        }
        if (store) {
            this.storage.set('Auth.auth_data', auth_data);
        }
    };
    Auth.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    Auth.prototype.setAuthenticated = function (authenticated) {
        if (authenticated === void 0) { authenticated = true; }
        this.authenticated = authenticated;
        if (authenticated) {
            this.ws.setAuth(this);
        }
        else {
            this.ws.setAuth(null);
        }
    };
    Auth.prototype.getAuthData = function () {
        if (this.isAuthenticated()) {
            return this.auth_data;
        }
    };
    Auth.prototype.getAccessToken = function () {
        if (this.isAuthenticated()) {
            return this.auth_data.access_token;
        }
    };
    Auth.prototype.getAccessTokenId = function () {
        if (this.isAuthenticated()) {
            return this.auth_data.access_token_data.jti;
        }
    };
    Auth.prototype.initPushToken = function () {
        var _this = this;
        return this.storage.get('Auth.push_token')
            .then(function (push_token) {
            _this.push_token = push_token;
        });
    };
    Auth.prototype.clearPushToken = function () {
        var _this = this;
        return this.storage.set('Auth.push_token', null).then(function () {
            _this.push_token = null;
        });
    };
    Auth.prototype.initAuthData = function (clear_auth_data) {
        var _this = this;
        if (clear_auth_data === void 0) { clear_auth_data = false; }
        return this.storage.get('Auth.auth_data').then(function (auth_data) {
            if (clear_auth_data) {
                auth_data = null;
            }
            _this.setAuthData(auth_data, clear_auth_data);
            return auth_data;
        });
    };
    Auth.prototype.ready = function () {
        return this.loaded;
    };
    Auth.prototype.initReady = function () {
        this.loaded = true;
    };
    Auth.prototype.init = function (clear_auth_data) {
        var _this = this;
        if (clear_auth_data === void 0) { clear_auth_data = false; }
        if (!this.ready()) {
            if (this.init_promise == null) {
                this.init_promise = this
                    .initAuthData(clear_auth_data)
                    .then(function () {
                    return _this.ws.init();
                }).then(function (result) {
                    _this.setClientId(result.client_id);
                    _this.setClientSecret(result.client_secret);
                    return _this.initPushToken();
                }).then(function () {
                    _this.initReady();
                });
            }
            return this.init_promise;
        }
        else {
            return Promise.resolve();
        }
    };
    Auth.prototype.loadStoredData = function () {
        var _this = this;
        return this.init()
            .then(function () {
            if (_this.getAuthData()) {
                return _this.ws.userData()
                    .then(function (user) { _this.setUser(__WEBPACK_IMPORTED_MODULE_7__app_models_factory_user_model__["a" /* FactoryUserModel */].create(user, _this)); });
            }
        });
    };
    Auth.prototype.login = function (username, password) {
        var _this = this;
        var user_login = this.whenReady()
            .then(function () { return _this.ws.login(username, password, _this.client_id, _this.client_secret); });
        return this.doBeforeLogin(user_login);
    };
    Auth.prototype.doBeforeLogin = function (login_promise) {
        var _this = this;
        return login_promise
            .then(function (data) { _this.setAuthData(data); })
            .then(function () { return _this.ws.userData(); })
            .then(function (user) { _this.setUser(__WEBPACK_IMPORTED_MODULE_7__app_models_factory_user_model__["a" /* FactoryUserModel */].create(user, _this)); });
    };
    Auth.prototype.whenReady = function () {
        if (this.ready()) {
            return Promise.resolve();
        }
        else {
            return this.init(true);
        }
    };
    Auth.prototype.loginFacebook = function (fn_fb_post_login) {
        var _this = this;
        if (fn_fb_post_login === void 0) { fn_fb_post_login = null; }
        return this.fb.login(['public_profile', 'email', 'user_friends'])
            .then(function (res) {
            console.log("Logged in FB: " + JSON.stringify(res));
            if (fn_fb_post_login) {
                fn_fb_post_login();
            }
            return _this.doBeforeLogin(_this.whenReady().then(function () { return _this.ws.loginFacebook(_this.client_id, res); }));
        })
            .catch(function (e) { return function () {
            console.log('Error logging into Facebook ' + JSON.stringify(e));
            if (fn_fb_post_login) {
                fn_fb_post_login();
            }
        }; });
    };
    Auth.prototype.doBeforeLogout = function (logout_promise) {
        var _this = this;
        return logout_promise.catch(function (e) {
            console.log("Logout promise error: " + JSON.stringify(e));
        })
            .then(function () { return _this.unregisterPushToken().catch(function () { }); })
            .then(function () { return _this.ws.userLogout(); })
            .then(function () { return _this.clearPushToken(); })
            .then(function () {
            _this.setAuthData(null, true);
            _this.events.publish('user:unauthenticated', _this);
        });
    };
    Auth.prototype.logout = function () {
        return this.doBeforeLogout(Promise.resolve());
    };
    Auth.prototype.logoutFacebook = function () {
        return this.doBeforeLogout(this.fb.logout());
    };
    Auth.prototype.setUser = function (user) {
        this.auth_custom_user = user;
        this.events.publish('user:authenticated', this);
    };
    Auth.prototype.getUser = function () {
        return this.auth_custom_user;
    };
    Auth.prototype.getFacebook = function () {
        return this.fb;
    };
    Auth.prototype.registerPushToken = function (t) {
        this.push_token = t;
        this.storage.set('Auth.push_token', t);
        return this.ws.userRegisterPushToken(t.token, t.type);
    };
    Auth.prototype.unregisterPushToken = function () {
        if (this.push_token) {
            return this.ws.userUnregisterPushToken(this.push_token.token, this.push_token.type);
        }
        else {
            // Para pruebas desde el browser (sin push)
            return Promise.resolve();
        }
    };
    Auth.prototype.isFirstTime = function () {
        var _this = this;
        return this.storage.get('Auth.first_time').then(function (data) {
            if (!data) {
                _this.storage.set('Auth.first_time', true);
                return true;
            }
            return false;
        });
    };
    return Auth;
}());
Auth = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]])
], Auth);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_webservice_webservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_subscriptions_subscriptions__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_cloud_angular__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_application_contents__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_module__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_location_tracker_location_tracker__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_intro_intro__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menu, auth, ws, loadingCtrl, storage, events, translate, push, app_contents, location, alertCtrl, modalCtrl) {
        var _this = this;
        this.menu = menu;
        this.auth = auth;
        this.ws = ws;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.translate = translate;
        this.push = push;
        this.app_contents = app_contents;
        this.location = location;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.user = null;
        this.full_screen = false;
        this.current_display_mode = null;
        this.static_pages = [
            { title: "SUBSCRIPTIONS", root: __WEBPACK_IMPORTED_MODULE_9__pages_subscriptions_subscriptions__["a" /* SubscriptionsPage */], icon: "pricetags", display: ['authenticated'] },
        ];
        this.available_pages = [];
        this.displayed_pages = [];
        this.display_modes = ['not-authenticated', 'authenticated',];
        this.user_profile_pages = [
            //{ title: "PREFERENCES", root: PreferencesPage, icon: "options" },
            { title: "VIEW_INTRO", root: __WEBPACK_IMPORTED_MODULE_15__pages_intro_intro__["a" /* IntroPage */], icon: "help-circle" },
        ];
        //    this.setRoot(IntroPage);
        this.resetPages();
        platform.ready()
            .then(function () { return storage.ready(); })
            .then(function () { return Promise.all([
            _this.ws.available().catch(function () { return _this.errorLoadingService(); }),
            auth.loadStoredData().catch(function () { }),
            _this.initMisc()
        ]); })
            .then(function () {
            statusBar.styleDefault();
            setTimeout(function () {
                splashScreen.hide();
            }, 200);
            //splashScreen.hide();
        });
        this.initEventSubscriptions();
    }
    MyApp.prototype.showIntro = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__pages_intro_intro__["a" /* IntroPage */]);
        profileModal.present();
    };
    MyApp.prototype.initMisc = function () {
        var _this = this;
        this.initTranslation();
        this.display('not-authenticated');
        this.auth.isFirstTime().then(function (first) {
            if (first || __WEBPACK_IMPORTED_MODULE_8__config_config__["a" /* CONFIG */].ALWAYS_SHOW_INTRO) {
                _this.showIntro();
            }
        });
        return Promise.resolve();
    };
    MyApp.prototype.initTranslation = function () {
        this.translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_8__config_config__["a" /* CONFIG */].DEFAULT_LANG);
        this.translate.use(Object(__WEBPACK_IMPORTED_MODULE_13__app_module__["b" /* getLang */])());
    };
    MyApp.prototype.initPush = function () {
        var _this = this;
        return this.push.register()
            .then(function (t) {
            return _this.push.saveToken(t);
        }).then(function (t) {
            return _this.auth.registerPushToken(t);
        });
    };
    MyApp.prototype.initEventSubscriptions = function () {
        var _this = this;
        this.events.subscribe('application:subscription_changed', function () {
            _this.updateContentPages();
        });
        this.events.subscribe('user:authenticated', function (auth) {
            _this.user = auth.getUser();
            _this.initPush().catch(function () { });
            _this.location.startInterval();
            _this.updateContentPages().then(function () {
                _this.display('authenticated');
            });
        });
        this.events.subscribe('user:unauthenticated', function (auth) {
            _this.auth.unregisterPushToken().catch(function () { });
            _this.display('not-authenticated');
        });
        this.events.subscribe('app:full_screen_on', function () {
            _this.fullScreenOn();
        });
        this.events.subscribe('app:full_screen_off', function () {
            _this.fullScreenOff();
        });
        this.push.rx.notification()
            .subscribe(function (notification) {
            console.log("New notification! " + JSON.stringify(notification));
            _this.events.publish('notification:push', notification.raw);
        });
    };
    MyApp.prototype.errorLoadingService = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'No se ha podido establecer la conexión con el servicio. Intente nuevamente más tarde.',
            buttons: ['OK']
        });
        alert.present();
    };
    MyApp.prototype.setRoot = function (page) {
        this.rootPage = page;
    };
    MyApp.prototype.resetPages = function () {
        this.available_pages = this.static_pages;
    };
    MyApp.prototype.updateContentPages = function () {
        var _this = this;
        return this.app_contents.load().then(function () {
            _this.resetPages();
            _this.addAvailablePages(_this.app_contents.getPages());
            _this.updateDisplay();
        });
    };
    MyApp.prototype.updateDisplay = function () {
        var _this = this;
        this.displayed_pages = this.available_pages.filter(function (val) { return (val.display.find(function (val_mode) { return val_mode == _this.current_display_mode; })); });
    };
    MyApp.prototype.addAvailablePages = function (pages) {
        this.available_pages = this.available_pages.concat(pages);
    };
    MyApp.prototype.display = function (mode) {
        this.current_display_mode = mode;
        this.updateDisplay();
    };
    MyApp.prototype.showLoader = function (text) {
        this.loading = this.loadingCtrl.create({
            content: text + '...'
        });
        this.loading.present();
    };
    MyApp.prototype.getAppTitle = function () {
        return __WEBPACK_IMPORTED_MODULE_8__config_config__["a" /* CONFIG */].APP_NAME;
    };
    MyApp.prototype.hideLoader = function () {
        this.loading.dismiss();
    };
    MyApp.prototype.openMenu = function () {
        this.menu.open();
    };
    MyApp.prototype.closeMenu = function () {
        this.menu.close();
    };
    MyApp.prototype.openPage = function (page) {
        if (page.subpages) {
            page.show_subpages = !page.show_subpages;
        }
        else {
            this.nav.push(page.root, { data: page.raw_data, from_menu: true });
        }
    };
    MyApp.prototype.openUserProfile = function () {
    };
    MyApp.prototype.fullScreenOn = function () {
        this.full_screen = true;
    };
    MyApp.prototype.fullScreenOff = function () {
        this.full_screen = false;
    };
    MyApp.prototype.toggleUserMenu = function () {
        this.menu.toggle('right');
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.showLoader('Saliendo');
        this.user.logout().then(function () {
            _this.user = null;
            _this.hideLoader();
        });
    };
    MyApp.prototype.pruebaNotificacion = function () {
        this.events.publish('notification:push', { 'msg': "prueba" });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/app/app.html"*/'<ion-header *ngIf="!this.full_screen">\n  <ion-navbar>\n    <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n    <ion-title>{{getAppTitle()}}</ion-title>\n\n    <ion-buttons *ngIf="user" end>\n      <button ion-button large outline (click)="toggleUserMenu()">\n        <div class="profile_button">\n        {{user.name}}\n        </div>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-menu side="left" [content]="nav">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>{{\'MENU\'|translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list id="sidenav">\n      <ng-container *ngFor="let p of displayed_pages">\n        <button ion-item detail-none [menuClose]="p.subpages" (click)="openPage(p)">\n          <ion-icon item-right name="{{p.icon}}"></ion-icon>\n          {{p.title|translate}}\n        </button>\n        <ion-item-group *ngIf="p.subpages" submenu [class.visible]="p.show_subpages">\n          <button submenu-item ion-item menuClose *ngFor="let subp of p.subpages" (click)="openPage(subp)">\n            <ion-icon item-right name="{{subp.icon}}"></ion-icon>\n            {{subp.title|translate}}\n          </button>\n        </ion-item-group>\n      </ng-container>\n      <!--button ion-item menuClose (click)="pruebaNotificacion()">\n        Notificación! (debug)\n      </button-->\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu *ngIf="user" side="right" [content]="nav">\n  <ion-content>\n    <div id="user_profile">\n      <ion-avatar *ngIf="user.hasProfilePicture()">\n        <img src="{{user.getProfilePicture()}}">\n      </ion-avatar>\n      <ion-avatar *ngIf="!user.hasProfilePicture()">\n        <img src="assets/img/avatar_default.jpg">\n      </ion-avatar>\n      <ion-title>{{user.getName()}} {{user.getSurname()}}</ion-title>\n    </div>\n    <ion-list>\n      <button ion-item detail-none menuClose="right" *ngFor="let p of user_profile_pages" (click)="openPage(p)">\n        <ion-icon item-right name="{{p.icon}}"></ion-icon>\n        {{p.title|translate}}\n      </button>\n      <button ion-item detail-none menuClose="right" (click)="logout()">\n        <ion-icon item-right name="log-out"></ion-icon>\n        {{"LOGOUT"|translate}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #nav swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_6__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_11__ionic_cloud_angular__["b" /* Push */], __WEBPACK_IMPORTED_MODULE_12__providers_application_contents__["a" /* ApplicationContents */],
        __WEBPACK_IMPORTED_MODULE_14__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG_ENV; });
var CONFIG_ENV = {
    PRODUCTION: false,
    API_URL: "http://localhost:8800/",
    //API_URL: "https://mobile.guarani.cespi.unlp.edu.ar/",
    APP_NAME: "MiUNLP",
    DEFAULT_LANG: "es",
    FIREBASE_SENDER_ID: "340945493259",
    FIREBASE_APP_ID: "9a72ee71",
    ANDROID_PUSH_ICON_COLOR: "#42a8c1",
    NOT_AUTHENTICATED_TABS_HIDDEN: false,
    NOT_AUTHENTICATED_FULL_SCREEN: true,
    MEMORY_CACHE_DEFAULT_TTL: 60,
    GEOLOCATION_UPDATE_INTERVAL: 300,
    ALWAYS_SHOW_INTRO: false,
    INTRO_SLIDES: [
        { TITLE: "Bienvenido", DESCRIPTION: "Para que estés conectado con tu Universidad donde estés", IMAGE: "logo.png" },
        { TITLE: "Iniciá", DESCRIPTION: "Antes de ingresar, necesitás crear un usuario. Si preferís, podés entrar con tu cuenta de Facebook.", IMAGE: "slide_1.png" },
        { TITLE: "Utilizá", DESCRIPTION: "", IMAGE: "custom/slide_overlay_miunlp_app_1.png" }
    ]
};
//# sourceMappingURL=config.dev.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactoryUserModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_facebook_model__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mobile_model__ = __webpack_require__(575);


var FactoryUserModel = (function () {
    function FactoryUserModel() {
    }
    FactoryUserModel.create = function (user_data, auth) {
        if (user_data.origin == FactoryUserModel.ORIGIN_FACEBOOK) {
            return new __WEBPACK_IMPORTED_MODULE_0__user_facebook_model__["a" /* UserFacebookModel */](user_data, auth);
        }
        else if (user_data.origin == FactoryUserModel.ORIGIN_MOBILE) {
            return new __WEBPACK_IMPORTED_MODULE_1__user_mobile_model__["a" /* UserMobileModel */](user_data, auth);
        }
    };
    return FactoryUserModel;
}());

FactoryUserModel.ORIGIN_FACEBOOK = "facebook";
FactoryUserModel.ORIGIN_MOBILE = "mobile";
//# sourceMappingURL=factory-user-model.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFacebookModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__(295);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UserFacebookModel = (function (_super) {
    __extends(UserFacebookModel, _super);
    function UserFacebookModel(user_data, auth) {
        var _this = _super.call(this, user_data, auth) || this;
        _this.facebook = auth.getFacebook();
        _this.retrieveFacebookProfile();
        return _this;
    }
    UserFacebookModel.prototype.retrieveFacebookProfile = function () {
        var _this = this;
        this.facebook.api("/me?fields=picture", []).then(function (data) {
            _this.facebook_profile = data;
            _this.profile_picture_url = data.picture.data.url;
            console.log("Facebook data: " + JSON.stringify(data.picture));
        });
    };
    UserFacebookModel.prototype.getProfilePicture = function () {
        return this.profile_picture_url;
    };
    UserFacebookModel.prototype.logout = function () {
        return this.auth.logoutFacebook();
    };
    return UserFacebookModel;
}(__WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* UserModel */]));

//# sourceMappingURL=user-facebook-model.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMobileModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__(295);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UserMobileModel = (function (_super) {
    __extends(UserMobileModel, _super);
    function UserMobileModel(user_data, auth) {
        return _super.call(this, user_data, auth) || this;
    }
    UserMobileModel.prototype.getProfilePicture = function () {
        return null;
    };
    UserMobileModel.prototype.logout = function () {
        return this.auth.logout();
    };
    return UserMobileModel;
}(__WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* UserModel */]));

//# sourceMappingURL=user-mobile-model.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericDynamicListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generic_generic__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the GenericDynamicList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var GenericDynamicListPage = (function (_super) {
    __extends(GenericDynamicListPage, _super);
    function GenericDynamicListPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.list = [];
        _this.search_text = "";
        _this.list_searching = false;
        return _this;
    }
    GenericDynamicListPage.prototype.ionViewWillLoad = function () {
        this.update();
    };
    GenericDynamicListPage.prototype.getUpdatePromise = function (force_load) {
        if (force_load === void 0) { force_load = false; }
        return Promise.resolve({});
    };
    GenericDynamicListPage.prototype.getLoadMorePromise = function () {
        return Promise.resolve({});
    };
    GenericDynamicListPage.prototype.update = function (force_load) {
        var _this = this;
        if (force_load === void 0) { force_load = false; }
        return this.getUpdatePromise(force_load).then(function (data) {
            _this.setPaginationData(data);
            _this.list = data.data;
            _this.resetPage();
            _this.list_searching = false;
        });
    };
    GenericDynamicListPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.update(true)
            .then(function (data) {
            refresher.complete();
        }).catch(function (error) {
            _this.showAlert("Error", error);
            refresher.complete();
        });
    };
    GenericDynamicListPage.prototype.loadMore = function () {
        var _this = this;
        this.nextPage();
        return this.getLoadMorePromise().then(function (data) {
            _this.setPaginationData(data);
            _this.list = _this.list.concat(data.data);
        });
    };
    GenericDynamicListPage.prototype.doInfinite = function () {
        return this.loadMore();
    };
    GenericDynamicListPage.prototype.search = function (event) {
        var _this = this;
        this.list_searching = true;
        this.search_text = event.target.value;
        this.update()
            .catch(function (error) {
            _this.showAlert("Error", error);
            _this.list_searching = false;
        });
    };
    return GenericDynamicListPage;
}(__WEBPACK_IMPORTED_MODULE_2__generic_generic__["a" /* GenericPage */]));
GenericDynamicListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-generic-dynamic-list',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/generic-dynamic-list/generic-dynamic-list.html"*/'<!--\n  Generated template for the GenericDynamicList page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>generic-dynamic-list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/generic-dynamic-list/generic-dynamic-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], GenericDynamicListPage);

//# sourceMappingURL=generic-dynamic-list.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generic_generic__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function (_super) {
    __extends(ContactPage, _super);
    function ContactPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.full_screen = true;
        return _this;
    }
    return ContactPage;
}(__WEBPACK_IMPORTED_MODULE_2__generic_generic__["a" /* GenericPage */]));
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contacto\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Información de contacto</ion-list-header>\n    <ion-item>\n      <ion-icon name="logo-github" item-left></ion-icon>\n      tanoinc/mi-universidad-app\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generic_generic__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PreferencesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PreferencesPage = (function (_super) {
    __extends(PreferencesPage, _super);
    function PreferencesPage(navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) {
        var _this = _super.call(this, navCtrl, navParams, ws, loadingCtrl, alertCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ws = ws;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.full_screen = true;
        return _this;
    }
    PreferencesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreferencesPage');
    };
    return PreferencesPage;
}(__WEBPACK_IMPORTED_MODULE_2__generic_generic__["a" /* GenericPage */]));
PreferencesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-preferences',template:/*ion-inline-start:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/preferences/preferences.html"*/'<!--\n  Generated template for the PreferencesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'PREFERENCES\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/paquita/Documentos/app/mi-universidad-app/src/pages/preferences/preferences.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_webservice_webservice__["a" /* Webservice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], PreferencesPage);

//# sourceMappingURL=preferences.js.map

/***/ })

},[518]);
//# sourceMappingURL=main.js.map