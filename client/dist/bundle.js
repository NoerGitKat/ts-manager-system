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
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controllers/BaseController.ts");

class DashboardController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.default {
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
        }
        console.log("whats happening");
        this.container.append(this.pageTitle, this.paragraph);
        return this.container;
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
                const token = yield this.loginService.login(this.usernameInput.value, this.passwordInput.value);
                if (token) {
                    this.router.switchToDashboardPage(token);
                }
                else {
                    this.showErrorMessage("Incorrect login credentials.");
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
class LoginService {
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (username === "user" && password === "123") {
                const token = {
                    tokenId: "asdas",
                    username: "user",
                    isValid: true,
                    expirationTime: new Date(),
                    privileges: [0, 2],
                };
                return token;
            }
            else {
                return undefined;
            }
            // return new Promise(async (resolve, reject) => {
            //   const response = await fetch();
            // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9NYWluLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50Ly4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9EYXNoYm9hcmRDb250cm9sbGVyLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50Ly4vc3JjL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9NYWluQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9zZXJ2aWNlcy9Mb2dpblNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUU5QixNQUFNLElBQUk7SUFHUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksNENBQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFB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QUVELGlFQUFlLFlBQVksRUFBQzs7Ozs7OztVQzFCNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5cbmNsYXNzIE1haW4ge1xuICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgYW4gaW5zdGFuY2Ugb2YgVFMhXCIpO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4gIH1cblxuICBwdWJsaWMgbGF1bmNoQXBwKCkge1xuICAgIHRoaXMucm91dGVyLmhhbmRsZVJlcXVlc3QoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5uZXcgTWFpbigpLmxhdW5jaEFwcCgpO1xuIiwiaW1wb3J0IERhc2hib2FyZENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvRGFzaGJvYXJkQ29udHJvbGxlclwiO1xuaW1wb3J0IExvZ2luQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9Mb2dpbkNvbnRyb2xsZXJcIjtcbmltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9NYWluQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgU2Vzc2lvblRva2VuIH0gZnJvbSBcIi4vbW9kZWxzL01vZGVsXCI7XG5cbmNsYXNzIFJvdXRlciB7XG4gIHByaXZhdGUgcm9vdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIHB1YmxpYyBoYW5kbGVSZXF1ZXN0KCkge1xuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5nZXRSb3V0ZSgpO1xuXG4gICAgc3dpdGNoIChyb3V0ZSkge1xuICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgaWYgKHRoaXMucm9vdEVsKSB7XG4gICAgICAgICAgY29uc3QgbWFpbkNvbnRyb2xsZXI6IE1haW5Db250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKHRoaXMpO1xuICAgICAgICAgIHRoaXMucm9vdEVsLmFwcGVuZChtYWluQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIi9sb2dpblwiOlxuICAgICAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgICAgICBjb25zdCBsb2dpbkNvbnRyb2xsZXI6IExvZ2luQ29udHJvbGxlciA9IG5ldyBMb2dpbkNvbnRyb2xsZXIodGhpcyk7XG4gICAgICAgICAgdGhpcy5yb290RWwuYXBwZW5kKGxvZ2luQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIi9kYXNoYm9hcmRcIjpcbiAgICAgICAgdGhpcy5zd2l0Y2hUb0Rhc2hib2FyZFBhZ2UodW5kZWZpbmVkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgICAgICB0aGlzLnJvb3RFbC5pbm5lclRleHQgPSBcIk5vdGhpbmcgdG8gc2VlIGhlcmUuXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN3aXRjaFRvRGFzaGJvYXJkUGFnZSh0b2tlbjogU2Vzc2lvblRva2VuIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgY29uc3QgZGFzaGJvYXJkQ29udHJvbGxlcjogRGFzaGJvYXJkQ29udHJvbGxlciA9IG5ldyBEYXNoYm9hcmRDb250cm9sbGVyKFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXNoYm9hcmRDb250cm9sbGVyLnNldFNlc3Npb25Ub2tlbih0b2tlbik7XG5cbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL2Rhc2hib2FyZFwiO1xuXG4gICAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgICAgdGhpcy5yb290RWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5yb290RWwuYXBwZW5kKGRhc2hib2FyZENvbnRyb2xsZXIuY3JlYXRlVmlldygpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiBnb25lXCIsIHRva2VuKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL1wiO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoXCIvY2xpZW50XCIsIFwiXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsIi8vIEFic3RyYWN0IGNsYXNzZXMgYXJlIHVzZWQgdG8gcHJvdmlkZSBhIGNvbW1vbiBkZXNpZ24gYWNyb3NzIGNsYXNzZXNcblxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi4vUm91dGVyXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuLi90eXBlcy9jb250cm9sbGVyLXR5cGVzXCI7XG5cbmFic3RyYWN0IGNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJvdGVjdGVkIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBjcmVhdGVEb21FbChcbiAgICBlbDogc3RyaW5nLFxuICAgIHRleHQ/OiBzdHJpbmcgfCBudWxsLFxuICAgIGFjdGlvbj86IGFueVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgZWxlbWVudC5vbmNsaWNrID0gYWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVJbnB1dEVsKG9wdGlvbnM6IElucHV0KTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBjb25zdCBrZXlzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAga2V5cy5tYXAoZnVuY3Rpb24gKHByb3BlcnR5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGlucHV0W3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb250cm9sbGVyO1xuIiwiaW1wb3J0IHsgU2Vzc2lvblRva2VuIH0gZnJvbSBcIi4uL21vZGVscy9Nb2RlbFwiO1xuaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG5cbmNsYXNzIERhc2hib2FyZENvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgdG9rZW46IFNlc3Npb25Ub2tlbiB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBwYWdlVGl0bGU6IEhUTUxIZWFkRWxlbWVudCA9IHRoaXMuY3JlYXRlRG9tRWwoXCJoMlwiLCBcIlRoZSBEYXNoYm9hcmRcIik7XG4gIHByaXZhdGUgcGFyYWdyYXBoOiBIVE1MRWxlbWVudCA9IHRoaXMuY3JlYXRlRG9tRWwoXCJwXCIsIFwiV2VsY29tZS5cIik7XG5cbiAgcHVibGljIHNldFNlc3Npb25Ub2tlbih0b2tlbjogU2Vzc2lvblRva2VuKTogdm9pZCB7XG4gICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVZpZXcoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGlmICh0aGlzLnRva2VuKSB7XG4gICAgICB0aGlzLnBhcmFncmFwaCA9IHRoaXMuY3JlYXRlRG9tRWwoXG4gICAgICAgIFwicFwiLFxuICAgICAgICBgV2VsY29tZSwgJHt0aGlzLnRva2VuLnVzZXJuYW1lfSFgXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwid2hhdHMgaGFwcGVuaW5nXCIpO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMucGFnZVRpdGxlLCB0aGlzLnBhcmFncmFwaCk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkQ29udHJvbGxlcjtcbiIsImltcG9ydCBMb2dpblNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL0xvZ2luU2VydmljZVwiO1xuaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG5cbmNsYXNzIExvZ2luQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBsb2dpblNlcnZpY2UgPSBuZXcgTG9naW5TZXJ2aWNlKCk7XG4gIHByaXZhdGUgcGFnZVRpdGxlID0gdGhpcy5jcmVhdGVEb21FbChcImgyXCIsIFwiUGxlYXNlIExvZ2luIEhlcmUhXCIpO1xuICBwcml2YXRlIHVzZXJuYW1lID0gdGhpcy5jcmVhdGVEb21FbChcImxhYmVsXCIsIFwiVXNlcm5hbWU6XCIpO1xuICBwcml2YXRlIHBhc3N3b3JkID0gdGhpcy5jcmVhdGVEb21FbChcImxhYmVsXCIsIFwiUGFzc3dvcmQ6XCIpO1xuICBwcml2YXRlIGVycm9yID0gdGhpcy5jcmVhdGVEb21FbChcImxhYmVsXCIpO1xuICBwcml2YXRlIGxvZ2luQnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbChcImJ1dHRvblwiLCBcIkxvZ2luIVwiLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRoaXMudXNlcm5hbWVJbnB1dC52YWx1ZSAmJiB0aGlzLnBhc3N3b3JkSW5wdXQudmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXRFcnJvck1lc3NhZ2UoKTtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5sb2dpblNlcnZpY2UubG9naW4oXG4gICAgICAgIHRoaXMudXNlcm5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnZhbHVlXG4gICAgICApO1xuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuc3dpdGNoVG9EYXNoYm9hcmRQYWdlKHRva2VuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZShcIkluY29ycmVjdCBsb2dpbiBjcmVkZW50aWFscy5cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZShcIlBsZWFzZSBmaWxsIGluIGFsbCBmaWVsZHMuXCIpO1xuICAgIH1cbiAgfSk7XG4gIHByaXZhdGUgdXNlcm5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlSW5wdXRFbCh7XG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiVXNlcm5hbWVcIixcbiAgfSk7XG5cbiAgcHJpdmF0ZSBwYXNzd29yZElucHV0ID0gdGhpcy5jcmVhdGVJbnB1dEVsKHtcbiAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmRcIixcbiAgfSk7XG4gIHByaXZhdGUgYnJlYWtFbCA9IHRoaXMuY3JlYXRlRG9tRWwoXCJiclwiLCBudWxsKTtcblxuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKFxuICAgICAgdGhpcy5wYWdlVGl0bGUsXG4gICAgICB0aGlzLnVzZXJuYW1lLFxuICAgICAgdGhpcy51c2VybmFtZUlucHV0LFxuICAgICAgdGhpcy5wYXNzd29yZCxcbiAgICAgIHRoaXMucGFzc3dvcmRJbnB1dCxcbiAgICAgIHRoaXMuYnJlYWtFbCxcbiAgICAgIHRoaXMubG9naW5CdXR0b24sXG4gICAgICB0aGlzLmVycm9yXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRFcnJvck1lc3NhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5lcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgfVxuICBwcml2YXRlIHNob3dFcnJvck1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5lcnJvci5pbm5lclRleHQgPSBtZXNzYWdlO1xuICAgIHRoaXMuZXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIHRoaXMuZXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luQ29udHJvbGxlcjtcbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xuXG5jbGFzcyBNYWluQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBwYWdlVGl0bGUgPSB0aGlzLmNyZWF0ZURvbUVsKFxuICAgIFwiaDJcIixcbiAgICBcIldlbGNvbWUgdG8gdGhlIGJlc3Qgd2Vic2l0ZSBldmVyIVwiXG4gICk7XG4gIHByaXZhdGUgYnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbChcImJ1dHRvblwiLCBcIlRvIExvZ2luXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwid2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIVwiLFxuICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL2xvZ2luXCIpXG4gICAgKTtcbiAgfSk7XG4gIHByaXZhdGUgYXJ0aWNsZSA9IHRoaXMuY3JlYXRlRG9tRWwoXG4gICAgXCJhcnRpY2xlXCIsXG4gICAgXCJJIGtub3csIGNyYXp5IHN0YXRlbWVudCBidXQgdHJ1ZSFcIlxuICApO1xuXG4gIHB1YmxpYyBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wYWdlVGl0bGUsIHRoaXMuYXJ0aWNsZSwgdGhpcy5idXR0b24pO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250cm9sbGVyO1xuIiwiaW1wb3J0IERhc2hib2FyZENvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL0Rhc2hib2FyZENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFNlc3Npb25Ub2tlbiB9IGZyb20gXCIuLi9tb2RlbHMvTW9kZWxcIjtcblxuY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgcHVibGljIGFzeW5jIGxvZ2luKFxuICAgIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xuICApOiBQcm9taXNlPFNlc3Npb25Ub2tlbiB8IHVuZGVmaW5lZD4ge1xuICAgIGlmICh1c2VybmFtZSA9PT0gXCJ1c2VyXCIgJiYgcGFzc3dvcmQgPT09IFwiMTIzXCIpIHtcbiAgICAgIGNvbnN0IHRva2VuID0ge1xuICAgICAgICB0b2tlbklkOiBcImFzZGFzXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcInVzZXJcIixcbiAgICAgICAgaXNWYWxpZDogdHJ1ZSxcbiAgICAgICAgZXhwaXJhdGlvblRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgIHByaXZpbGVnZXM6IFswLCAyXSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCk7XG4gICAgLy8gfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5TZXJ2aWNlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvTWFpbi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=