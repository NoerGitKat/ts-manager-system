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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9NYWluLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50Ly4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9EYXNoYm9hcmRDb250cm9sbGVyLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50Ly4vc3JjL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9NYWluQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9zZXJ2aWNlcy9Mb2dpblNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUU5QixNQUFNLElBQUk7SUFHUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksNENBQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFB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LE1BQU0sS0FBSyxDQUFDLEdBQUcsT0FBTyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRTFELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7b0JBQzNCLE1BQU0sY0FBYyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUM3QyxPQUFPLGNBQWMsQ0FBQztpQkFDdkI7cUJBQU07b0JBQ0wsT0FBTyxTQUFTLENBQUM7aUJBQ2xCO2FBQ0Y7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqRDtRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDbkM1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcblxuY2xhc3MgTWFpbiB7XG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBhbiBpbnN0YW5jZSBvZiBUUyFcIik7XG5cbiAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBsYXVuY2hBcHAoKSB7XG4gICAgdGhpcy5yb3V0ZXIuaGFuZGxlUmVxdWVzdCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cbm5ldyBNYWluKCkubGF1bmNoQXBwKCk7XG4iLCJpbXBvcnQgRGFzaGJvYXJkQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9EYXNoYm9hcmRDb250cm9sbGVyXCI7XG5pbXBvcnQgTG9naW5Db250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlclwiO1xuaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyXCI7XG5pbXBvcnQgeyBTZXNzaW9uVG9rZW4gfSBmcm9tIFwiLi9tb2RlbHMvTW9kZWxcIjtcblxuY2xhc3MgUm91dGVyIHtcbiAgcHJpdmF0ZSByb290RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgcHVibGljIGhhbmRsZVJlcXVlc3QoKSB7XG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLmdldFJvdXRlKCk7XG5cbiAgICBzd2l0Y2ggKHJvdXRlKSB7XG4gICAgICBjYXNlIFwiL1wiOlxuICAgICAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgICAgICBjb25zdCBtYWluQ29udHJvbGxlcjogTWFpbkNvbnRyb2xsZXIgPSBuZXcgTWFpbkNvbnRyb2xsZXIodGhpcyk7XG4gICAgICAgICAgdGhpcy5yb290RWwuYXBwZW5kKG1haW5Db250cm9sbGVyLmNyZWF0ZVZpZXcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiL2xvZ2luXCI6XG4gICAgICAgIGlmICh0aGlzLnJvb3RFbCkge1xuICAgICAgICAgIGNvbnN0IGxvZ2luQ29udHJvbGxlcjogTG9naW5Db250cm9sbGVyID0gbmV3IExvZ2luQ29udHJvbGxlcih0aGlzKTtcbiAgICAgICAgICB0aGlzLnJvb3RFbC5hcHBlbmQobG9naW5Db250cm9sbGVyLmNyZWF0ZVZpZXcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiL2Rhc2hib2FyZFwiOlxuICAgICAgICB0aGlzLnN3aXRjaFRvRGFzaGJvYXJkUGFnZSh1bmRlZmluZWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICh0aGlzLnJvb3RFbCkge1xuICAgICAgICAgIHRoaXMucm9vdEVsLmlubmVyVGV4dCA9IFwiTm90aGluZyB0byBzZWUgaGVyZS5cIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3dpdGNoVG9EYXNoYm9hcmRQYWdlKHRva2VuOiBTZXNzaW9uVG9rZW4gfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICBjb25zdCBkYXNoYm9hcmRDb250cm9sbGVyOiBEYXNoYm9hcmRDb250cm9sbGVyID0gbmV3IERhc2hib2FyZENvbnRyb2xsZXIoXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhc2hib2FyZENvbnRyb2xsZXIuc2V0U2Vzc2lvblRva2VuKHRva2VuKTtcblxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gXCIvZGFzaGJvYXJkXCI7XG5cbiAgICAgIGlmICh0aGlzLnJvb3RFbCkge1xuICAgICAgICB0aGlzLnJvb3RFbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLnJvb3RFbC5hcHBlbmQoZGFzaGJvYXJkQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRva2VuIGdvbmVcIiwgdG9rZW4pO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gXCIvXCI7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZShcIi9jbGllbnRcIiwgXCJcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIiwiLy8gQWJzdHJhY3QgY2xhc3NlcyBhcmUgdXNlZCB0byBwcm92aWRlIGEgY29tbW9uIGRlc2lnbiBhY3Jvc3MgY2xhc3Nlc1xuXG5pbXBvcnQgUm91dGVyIGZyb20gXCIuLi9Sb3V0ZXJcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uL3R5cGVzL2NvbnRyb2xsZXItdHlwZXNcIjtcblxuYWJzdHJhY3QgY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xuICBwcm90ZWN0ZWQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IGNyZWF0ZVZpZXcoKTogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZURvbUVsKFxuICAgIGVsOiBzdHJpbmcsXG4gICAgdGV4dD86IHN0cmluZyB8IG51bGwsXG4gICAgYWN0aW9uPzogYW55XG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBlbGVtZW50Lm9uY2xpY2sgPSBhY3Rpb247XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUlucHV0RWwob3B0aW9uczogSW5wdXQpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG5cbiAgICBrZXlzLm1hcChmdW5jdGlvbiAocHJvcGVydHk6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgaW5wdXRbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgeyBTZXNzaW9uVG9rZW4gfSBmcm9tIFwiLi4vbW9kZWxzL01vZGVsXCI7XG5pbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcblxuY2xhc3MgRGFzaGJvYXJkQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSB0b2tlbjogU2Vzc2lvblRva2VuIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIHBhZ2VUaXRsZTogSFRNTEhlYWRFbGVtZW50ID0gdGhpcy5jcmVhdGVEb21FbChcImgyXCIsIFwiVGhlIERhc2hib2FyZFwiKTtcbiAgcHJpdmF0ZSBwYXJhZ3JhcGg6IEhUTUxFbGVtZW50ID0gdGhpcy5jcmVhdGVEb21FbChcInBcIiwgXCJXZWxjb21lLlwiKTtcblxuICBwdWJsaWMgc2V0U2Vzc2lvblRva2VuKHRva2VuOiBTZXNzaW9uVG9rZW4pOiB2b2lkIHtcbiAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgaWYgKHRoaXMudG9rZW4pIHtcbiAgICAgIHRoaXMucGFyYWdyYXBoID0gdGhpcy5jcmVhdGVEb21FbChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIGBXZWxjb21lLCAke3RoaXMudG9rZW4udXNlcm5hbWV9IWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJ3aGF0cyBoYXBwZW5pbmdcIik7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wYWdlVGl0bGUsIHRoaXMucGFyYWdyYXBoKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRDb250cm9sbGVyO1xuIiwiaW1wb3J0IExvZ2luU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvTG9naW5TZXJ2aWNlXCI7XG5pbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcblxuY2xhc3MgTG9naW5Db250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICBwcml2YXRlIGxvZ2luU2VydmljZSA9IG5ldyBMb2dpblNlcnZpY2UoKTtcbiAgcHJpdmF0ZSBwYWdlVGl0bGUgPSB0aGlzLmNyZWF0ZURvbUVsKFwiaDJcIiwgXCJQbGVhc2UgTG9naW4gSGVyZSFcIik7XG4gIHByaXZhdGUgdXNlcm5hbWUgPSB0aGlzLmNyZWF0ZURvbUVsKFwibGFiZWxcIiwgXCJVc2VybmFtZTpcIik7XG4gIHByaXZhdGUgcGFzc3dvcmQgPSB0aGlzLmNyZWF0ZURvbUVsKFwibGFiZWxcIiwgXCJQYXNzd29yZDpcIik7XG4gIHByaXZhdGUgZXJyb3IgPSB0aGlzLmNyZWF0ZURvbUVsKFwibGFiZWxcIik7XG4gIHByaXZhdGUgbG9naW5CdXR0b24gPSB0aGlzLmNyZWF0ZURvbUVsKFwiYnV0dG9uXCIsIFwiTG9naW4hXCIsIGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy51c2VybmFtZUlucHV0LnZhbHVlICYmIHRoaXMucGFzc3dvcmRJbnB1dC52YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldEVycm9yTWVzc2FnZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmxvZ2luU2VydmljZS5sb2dpbihcbiAgICAgICAgICB0aGlzLnVzZXJuYW1lSW5wdXQudmFsdWUsXG4gICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnZhbHVlXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIuc3dpdGNoVG9EYXNoYm9hcmRQYWdlKHRva2VuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoXCJJbmNvcnJlY3QgbG9naW4gY3JlZGVudGlhbHMuXCIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaGFwcGVuZWQhXCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoXCJQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzLlwiKTtcbiAgICB9XG4gIH0pO1xuICBwcml2YXRlIHVzZXJuYW1lSW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0RWwoe1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIlVzZXJuYW1lXCIsXG4gIH0pO1xuXG4gIHByaXZhdGUgcGFzc3dvcmRJbnB1dCA9IHRoaXMuY3JlYXRlSW5wdXRFbCh7XG4gICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsXG4gIH0pO1xuICBwcml2YXRlIGJyZWFrRWwgPSB0aGlzLmNyZWF0ZURvbUVsKFwiYnJcIiwgbnVsbCk7XG5cbiAgcHVibGljIGNyZWF0ZVZpZXcoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChcbiAgICAgIHRoaXMucGFnZVRpdGxlLFxuICAgICAgdGhpcy51c2VybmFtZSxcbiAgICAgIHRoaXMudXNlcm5hbWVJbnB1dCxcbiAgICAgIHRoaXMucGFzc3dvcmQsXG4gICAgICB0aGlzLnBhc3N3b3JkSW5wdXQsXG4gICAgICB0aGlzLmJyZWFrRWwsXG4gICAgICB0aGlzLmxvZ2luQnV0dG9uLFxuICAgICAgdGhpcy5lcnJvclxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RXJyb3JNZXNzYWdlKCk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIH1cbiAgcHJpdmF0ZSBzaG93RXJyb3JNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3IuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgICB0aGlzLmVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB0aGlzLmVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcblxuY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgcGFnZVRpdGxlID0gdGhpcy5jcmVhdGVEb21FbChcbiAgICBcImgyXCIsXG4gICAgXCJXZWxjb21lIHRvIHRoZSBiZXN0IHdlYnNpdGUgZXZlciFcIlxuICApO1xuICBwcml2YXRlIGJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWwoXCJidXR0b25cIiwgXCJUbyBMb2dpblwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIndpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSFcIixcbiAgICAgICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSBcIi9sb2dpblwiKVxuICAgICk7XG4gIH0pO1xuICBwcml2YXRlIGFydGljbGUgPSB0aGlzLmNyZWF0ZURvbUVsKFxuICAgIFwiYXJ0aWNsZVwiLFxuICAgIFwiSSBrbm93LCBjcmF6eSBzdGF0ZW1lbnQgYnV0IHRydWUhXCJcbiAgKTtcblxuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMucGFnZVRpdGxlLCB0aGlzLmFydGljbGUsIHRoaXMuYnV0dG9uKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udHJvbGxlcjtcbiIsImltcG9ydCB7IFNlc3Npb25Ub2tlbiB9IGZyb20gXCIuLi9tb2RlbHMvTW9kZWxcIjtcblxuY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XG5cbmNsYXNzIExvZ2luU2VydmljZSB7XG4gIHB1YmxpYyBhc3luYyBsb2dpbihcbiAgICB1c2VybmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxTZXNzaW9uVG9rZW4gfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KSxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vbG9naW5gLCByZXF1ZXN0KTtcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gcGFyc2VkUmVzcG9uc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaGFwcGVuZWQhXCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblNlcnZpY2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9NYWluLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==