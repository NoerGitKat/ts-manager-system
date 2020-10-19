/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "./src/Router.ts");

class Main {
    constructor() {
        console.log("Running an instance of TS!");
        this.router = new _Router__WEBPACK_IMPORTED_MODULE_0__.default();
    }
    launchApp() {
        this.router.handleRequest();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);
new Main().launchApp();


/***/ }),

/***/ "./src/Router.ts":
/*!***********************!*\
  !*** ./src/Router.ts ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _controllers_DashboardController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/DashboardController */ "./src/controllers/DashboardController.ts");
/* harmony import */ var _controllers_LoginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/LoginController */ "./src/controllers/LoginController.ts");
/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/MainController */ "./src/controllers/MainController.ts");



class Router {
    constructor() {
        this.rootEl = document.getElementById("root");
    }
    handleRequest() {
        const route = this.getRoute();
        switch (route) {
            case "/":
                if (this.rootEl) {
                    const mainController = new _controllers_MainController__WEBPACK_IMPORTED_MODULE_2__.default(this);
                    this.rootEl.append(mainController.createView());
                }
                break;
            case "/login":
                if (this.rootEl) {
                    const loginController = new _controllers_LoginController__WEBPACK_IMPORTED_MODULE_1__.default(this);
                    this.rootEl.append(loginController.createView());
                }
                break;
            case "/dashboard":
                this.switchToDashboardPage(undefined);
                break;
            default:
                if (this.rootEl) {
                    this.rootEl.innerText = "Nothing to see here.";
                }
                break;
        }
    }
    switchToDashboardPage(token) {
        const dashboardController = new _controllers_DashboardController__WEBPACK_IMPORTED_MODULE_0__.default(this);
        if (token) {
            dashboardController.setSessionToken(token);
            // window.location.pathname = "/dashboard";
            if (this.rootEl) {
                this.rootEl.innerHTML = "";
                this.rootEl.append(dashboardController.createView());
            }
        }
        else {
            console.log("token gone", token);
            window.location.pathname = "/";
        }
    }
    getRoute() {
        return window.location.pathname.replace("/client", "");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);


/***/ }),

/***/ "./src/controllers/BaseController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/BaseController.ts ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// Abstract classes are used to provide a common design across classes
class BaseController {
    constructor(router) {
        this.container = document.createElement("div");
        this.router = router;
    }
    createDomEl(el, text, action) {
        const element = document.createElement(el);
        if (text) {
            element.innerText = text;
        }
        if (action) {
            element.onclick = action;
        }
        return element;
    }
    createInputEl(options) {
        const input = document.createElement("input");
        const keys = Object.keys(options);
        keys.map(function (property, index) {
            input[property] = options[property];
        });
        return input;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseController);


/***/ }),

/***/ "./src/controllers/DashboardController.ts":
/*!************************************************!*\
  !*** ./src/controllers/DashboardController.ts ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _models_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Model */ "./src/models/Model.ts");
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseController */ "./src/controllers/BaseController.ts");


class DashboardController extends _BaseController__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor() {
        super(...arguments);
        this.pageTitle = this.createDomEl("h2", "The Dashboard");
        this.paragraph = this.createDomEl("p", "Welcome.");
    }
    setSessionToken(token) {
        this.token = token;
    }
    createView() {
        if (this.token) {
            this.paragraph = this.createDomEl("p", `Welcome, ${this.token.username}!`);
            this.generatePrivilegeButtons();
        }
        this.container.append(this.pageTitle, this.paragraph);
        return this.container;
    }
    generatePrivilegeButtons() {
        if (this.token) {
            let element;
            for (const privilege of this.token.privileges) {
                element = this.createDomEl("button", _models_Model__WEBPACK_IMPORTED_MODULE_0__.Privilege[privilege]);
                this.container.append(element);
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardController);


/***/ }),

/***/ "./src/controllers/LoginController.ts":
/*!********************************************!*\
  !*** ./src/controllers/LoginController.ts ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _services_LoginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/LoginService */ "./src/services/LoginService.ts");
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseController */ "./src/controllers/BaseController.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LoginController extends _BaseController__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor() {
        super(...arguments);
        this.loginService = new _services_LoginService__WEBPACK_IMPORTED_MODULE_0__.default();
        this.pageTitle = this.createDomEl("h2", "Please Login Here!");
        this.username = this.createDomEl("label", "Username:");
        this.password = this.createDomEl("label", "Password:");
        this.error = this.createDomEl("label");
        this.loginButton = this.createDomEl("button", "Login!", () => __awaiter(this, void 0, void 0, function* () {
            if (this.usernameInput.value && this.passwordInput.value) {
                this.resetErrorMessage();
                try {
                    const token = yield this.loginService.login(this.usernameInput.value, this.passwordInput.value);
                    if (token) {
                        this.router.switchToDashboardPage(token);
                    }
                    else {
                        this.showErrorMessage("Incorrect login credentials.");
                    }
                }
                catch (error) {
                    console.error("Error happened!", error.message);
                }
            }
            else {
                this.showErrorMessage("Please fill in all fields.");
            }
        }));
        this.usernameInput = this.createInputEl({
            type: "text",
            placeholder: "Username",
        });
        this.passwordInput = this.createInputEl({
            type: "password",
            placeholder: "Password",
        });
        this.breakEl = this.createDomEl("br", null);
    }
    createView() {
        this.container.append(this.pageTitle, this.username, this.usernameInput, this.password, this.passwordInput, this.breakEl, this.loginButton, this.error);
        return this.container;
    }
    resetErrorMessage() {
        this.error.style.visibility = "hidden";
    }
    showErrorMessage(message) {
        this.error.innerText = message;
        this.error.style.color = "red";
        this.error.style.visibility = "visible";
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginController);


/***/ }),

/***/ "./src/controllers/MainController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/MainController.ts ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controllers/BaseController.ts");

class MainController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super(...arguments);
        this.pageTitle = this.createDomEl("h2", "Welcome to the best website ever!");
        this.button = this.createDomEl("button", "To Login", () => {
            console.log("window.location.pathname!", (window.location.pathname = "/login"));
        });
        this.article = this.createDomEl("article", "I know, crazy statement but true!");
    }
    createView() {
        this.container.append(this.pageTitle, this.article, this.button);
        return this.container;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainController);


/***/ }),

/***/ "./src/models/Model.ts":
/*!*****************************!*\
  !*** ./src/models/Model.ts ***!
  \*****************************/
/*! namespace exports */
/*! export Privilege [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Privilege": () => /* binding */ Privilege
/* harmony export */ });
var Privilege;
(function (Privilege) {
    Privilege[Privilege["CREATE"] = 0] = "CREATE";
    Privilege[Privilege["READ"] = 1] = "READ";
    Privilege[Privilege["UPDATE"] = 2] = "UPDATE";
    Privilege[Privilege["DELETE"] = 3] = "DELETE";
})(Privilege || (Privilege = {}));



/***/ }),

/***/ "./src/services/LoginService.ts":
/*!**************************************!*\
  !*** ./src/services/LoginService.ts ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = "http://localhost:8080";
class LoginService {
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            };
            try {
                const response = yield fetch(`${baseUrl}/login`, request);
                if (response.status === 200) {
                    const parsedResponse = yield response.json();
                    return parsedResponse;
                }
                else {
                    return undefined;
                }
            }
            catch (error) {
                console.error("Error happened!", error.message);
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginService);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9NYWluLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50Ly4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9EYXNoYm9hcmRDb250cm9sbGVyLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50Ly4vc3JjL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9NYWluQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9tb2RlbHMvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvLi9zcmMvc2VydmljZXMvTG9naW5TZXJ2aWNlLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hbmFnZXItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hbmFnZXItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFOUIsTUFBTSxJQUFJO0lBR1I7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJ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O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5cbmNsYXNzIE1haW4ge1xuICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgYW4gaW5zdGFuY2Ugb2YgVFMhXCIpO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4gIH1cblxuICBwdWJsaWMgbGF1bmNoQXBwKCkge1xuICAgIHRoaXMucm91dGVyLmhhbmRsZVJlcXVlc3QoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5uZXcgTWFpbigpLmxhdW5jaEFwcCgpO1xuIiwiaW1wb3J0IERhc2hib2FyZENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvRGFzaGJvYXJkQ29udHJvbGxlclwiO1xuaW1wb3J0IExvZ2luQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9Mb2dpbkNvbnRyb2xsZXJcIjtcbmltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9NYWluQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgU2Vzc2lvblRva2VuIH0gZnJvbSBcIi4vbW9kZWxzL01vZGVsXCI7XG5cbmNsYXNzIFJvdXRlciB7XG4gIHByaXZhdGUgcm9vdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIHB1YmxpYyBoYW5kbGVSZXF1ZXN0KCkge1xuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5nZXRSb3V0ZSgpO1xuXG4gICAgc3dpdGNoIChyb3V0ZSkge1xuICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgaWYgKHRoaXMucm9vdEVsKSB7XG4gICAgICAgICAgY29uc3QgbWFpbkNvbnRyb2xsZXI6IE1haW5Db250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKHRoaXMpO1xuICAgICAgICAgIHRoaXMucm9vdEVsLmFwcGVuZChtYWluQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIi9sb2dpblwiOlxuICAgICAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgICAgICBjb25zdCBsb2dpbkNvbnRyb2xsZXI6IExvZ2luQ29udHJvbGxlciA9IG5ldyBMb2dpbkNvbnRyb2xsZXIodGhpcyk7XG4gICAgICAgICAgdGhpcy5yb290RWwuYXBwZW5kKGxvZ2luQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIi9kYXNoYm9hcmRcIjpcbiAgICAgICAgdGhpcy5zd2l0Y2hUb0Rhc2hib2FyZFBhZ2UodW5kZWZpbmVkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgICAgICB0aGlzLnJvb3RFbC5pbm5lclRleHQgPSBcIk5vdGhpbmcgdG8gc2VlIGhlcmUuXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN3aXRjaFRvRGFzaGJvYXJkUGFnZSh0b2tlbjogU2Vzc2lvblRva2VuIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgY29uc3QgZGFzaGJvYXJkQ29udHJvbGxlcjogRGFzaGJvYXJkQ29udHJvbGxlciA9IG5ldyBEYXNoYm9hcmRDb250cm9sbGVyKFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXNoYm9hcmRDb250cm9sbGVyLnNldFNlc3Npb25Ub2tlbih0b2tlbik7XG5cbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL2Rhc2hib2FyZFwiO1xuXG4gICAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgICAgdGhpcy5yb290RWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5yb290RWwuYXBwZW5kKGRhc2hib2FyZENvbnRyb2xsZXIuY3JlYXRlVmlldygpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBnb25lXCIsIHRva2VuKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL1wiO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoXCIvY2xpZW50XCIsIFwiXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsIi8vIEFic3RyYWN0IGNsYXNzZXMgYXJlIHVzZWQgdG8gcHJvdmlkZSBhIGNvbW1vbiBkZXNpZ24gYWNyb3NzIGNsYXNzZXNcblxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi4vUm91dGVyXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuLi90eXBlcy9jb250cm9sbGVyLXR5cGVzXCI7XG5cbmFic3RyYWN0IGNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJvdGVjdGVkIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBjcmVhdGVEb21FbChcbiAgICBlbDogc3RyaW5nLFxuICAgIHRleHQ/OiBzdHJpbmcgfCBudWxsLFxuICAgIGFjdGlvbj86IGFueVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgZWxlbWVudC5vbmNsaWNrID0gYWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVJbnB1dEVsKG9wdGlvbnM6IElucHV0KTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBjb25zdCBrZXlzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAga2V5cy5tYXAoZnVuY3Rpb24gKHByb3BlcnR5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGlucHV0W3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb250cm9sbGVyO1xuIiwiaW1wb3J0IHsgUHJpdmlsZWdlLCBTZXNzaW9uVG9rZW4gfSBmcm9tIFwiLi4vbW9kZWxzL01vZGVsXCI7XG5pbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcblxuY2xhc3MgRGFzaGJvYXJkQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSB0b2tlbjogU2Vzc2lvblRva2VuIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIHBhZ2VUaXRsZTogSFRNTEhlYWRFbGVtZW50ID0gdGhpcy5jcmVhdGVEb21FbChcImgyXCIsIFwiVGhlIERhc2hib2FyZFwiKTtcbiAgcHJpdmF0ZSBwYXJhZ3JhcGg6IEhUTUxFbGVtZW50ID0gdGhpcy5jcmVhdGVEb21FbChcInBcIiwgXCJXZWxjb21lLlwiKTtcblxuICBwdWJsaWMgc2V0U2Vzc2lvblRva2VuKHRva2VuOiBTZXNzaW9uVG9rZW4pOiB2b2lkIHtcbiAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgaWYgKHRoaXMudG9rZW4pIHtcbiAgICAgIHRoaXMucGFyYWdyYXBoID0gdGhpcy5jcmVhdGVEb21FbChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIGBXZWxjb21lLCAke3RoaXMudG9rZW4udXNlcm5hbWV9IWBcbiAgICAgICk7XG4gICAgICB0aGlzLmdlbmVyYXRlUHJpdmlsZWdlQnV0dG9ucygpO1xuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLnBhZ2VUaXRsZSwgdGhpcy5wYXJhZ3JhcGgpO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVByaXZpbGVnZUJ1dHRvbnMoKSB7XG4gICAgaWYgKHRoaXMudG9rZW4pIHtcbiAgICAgIGxldCBlbGVtZW50O1xuICAgICAgZm9yIChjb25zdCBwcml2aWxlZ2Ugb2YgdGhpcy50b2tlbi5wcml2aWxlZ2VzKSB7XG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLmNyZWF0ZURvbUVsKFwiYnV0dG9uXCIsIFByaXZpbGVnZVtwcml2aWxlZ2VdKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRDb250cm9sbGVyO1xuIiwiaW1wb3J0IExvZ2luU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvTG9naW5TZXJ2aWNlXCI7XG5pbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcblxuY2xhc3MgTG9naW5Db250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICBwcml2YXRlIGxvZ2luU2VydmljZSA9IG5ldyBMb2dpblNlcnZpY2UoKTtcbiAgcHJpdmF0ZSBwYWdlVGl0bGUgPSB0aGlzLmNyZWF0ZURvbUVsKFwiaDJcIiwgXCJQbGVhc2UgTG9naW4gSGVyZSFcIik7XG4gIHByaXZhdGUgdXNlcm5hbWUgPSB0aGlzLmNyZWF0ZURvbUVsKFwibGFiZWxcIiwgXCJVc2VybmFtZTpcIik7XG4gIHByaXZhdGUgcGFzc3dvcmQgPSB0aGlzLmNyZWF0ZURvbUVsKFwibGFiZWxcIiwgXCJQYXNzd29yZDpcIik7XG4gIHByaXZhdGUgZXJyb3IgPSB0aGlzLmNyZWF0ZURvbUVsKFwibGFiZWxcIik7XG4gIHByaXZhdGUgbG9naW5CdXR0b24gPSB0aGlzLmNyZWF0ZURvbUVsKFwiYnV0dG9uXCIsIFwiTG9naW4hXCIsIGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy51c2VybmFtZUlucHV0LnZhbHVlICYmIHRoaXMucGFzc3dvcmRJbnB1dC52YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldEVycm9yTWVzc2FnZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmxvZ2luU2VydmljZS5sb2dpbihcbiAgICAgICAgICB0aGlzLnVzZXJuYW1lSW5wdXQudmFsdWUsXG4gICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnZhbHVlXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIuc3dpdGNoVG9EYXNoYm9hcmRQYWdlKHRva2VuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoXCJJbmNvcnJlY3QgbG9naW4gY3JlZGVudGlhbHMuXCIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaGFwcGVuZWQhXCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoXCJQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzLlwiKTtcbiAgICB9XG4gIH0pO1xuICBwcml2YXRlIHVzZXJuYW1lSW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0RWwoe1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIlVzZXJuYW1lXCIsXG4gIH0pO1xuXG4gIHByaXZhdGUgcGFzc3dvcmRJbnB1dCA9IHRoaXMuY3JlYXRlSW5wdXRFbCh7XG4gICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsXG4gIH0pO1xuICBwcml2YXRlIGJyZWFrRWwgPSB0aGlzLmNyZWF0ZURvbUVsKFwiYnJcIiwgbnVsbCk7XG5cbiAgcHVibGljIGNyZWF0ZVZpZXcoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChcbiAgICAgIHRoaXMucGFnZVRpdGxlLFxuICAgICAgdGhpcy51c2VybmFtZSxcbiAgICAgIHRoaXMudXNlcm5hbWVJbnB1dCxcbiAgICAgIHRoaXMucGFzc3dvcmQsXG4gICAgICB0aGlzLnBhc3N3b3JkSW5wdXQsXG4gICAgICB0aGlzLmJyZWFrRWwsXG4gICAgICB0aGlzLmxvZ2luQnV0dG9uLFxuICAgICAgdGhpcy5lcnJvclxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RXJyb3JNZXNzYWdlKCk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIH1cbiAgcHJpdmF0ZSBzaG93RXJyb3JNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3IuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgICB0aGlzLmVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB0aGlzLmVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcblxuY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgcGFnZVRpdGxlID0gdGhpcy5jcmVhdGVEb21FbChcbiAgICBcImgyXCIsXG4gICAgXCJXZWxjb21lIHRvIHRoZSBiZXN0IHdlYnNpdGUgZXZlciFcIlxuICApO1xuICBwcml2YXRlIGJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWwoXCJidXR0b25cIiwgXCJUbyBMb2dpblwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIndpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSFcIixcbiAgICAgICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSBcIi9sb2dpblwiKVxuICAgICk7XG4gIH0pO1xuICBwcml2YXRlIGFydGljbGUgPSB0aGlzLmNyZWF0ZURvbUVsKFxuICAgIFwiYXJ0aWNsZVwiLFxuICAgIFwiSSBrbm93LCBjcmF6eSBzdGF0ZW1lbnQgYnV0IHRydWUhXCJcbiAgKTtcblxuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMucGFnZVRpdGxlLCB0aGlzLmFydGljbGUsIHRoaXMuYnV0dG9uKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udHJvbGxlcjtcbiIsImVudW0gUHJpdmlsZWdlIHtcbiAgQ1JFQVRFLFxuICBSRUFELFxuICBVUERBVEUsXG4gIERFTEVURSxcbn1cblxuaW50ZXJmYWNlIFNlc3Npb25Ub2tlbiB7XG4gIHRva2VuSWQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgaXNWYWxpZDogQm9vbGVhbjtcbiAgZXhwaXJhdGlvblRpbWU6IERhdGU7XG4gIHByaXZpbGVnZXM6IFByaXZpbGVnZVtdO1xufVxuXG5leHBvcnQgeyBTZXNzaW9uVG9rZW4sIFByaXZpbGVnZSB9O1xuIiwiaW1wb3J0IHsgU2Vzc2lvblRva2VuIH0gZnJvbSBcIi4uL21vZGVscy9Nb2RlbFwiO1xuXG5jb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcblxuY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgcHVibGljIGFzeW5jIGxvZ2luKFxuICAgIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xuICApOiBQcm9taXNlPFNlc3Npb25Ub2tlbiB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9sb2dpbmAsIHJlcXVlc3QpO1xuXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QgcGFyc2VkUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBwYXJzZWRSZXNwb25zZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBoYXBwZW5lZCFcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luU2VydmljZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL01haW4udHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9