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
/* harmony import */ var _controllers_LoginController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/LoginController */ "./src/controllers/LoginController.ts");
/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/MainController */ "./src/controllers/MainController.ts");


class Router {
    constructor() {
        this.rootEl = document.getElementById("root");
    }
    handleRequest() {
        const route = this.getRoute();
        switch (route) {
            case "/":
                if (this.rootEl) {
                    const mainController = new _controllers_MainController__WEBPACK_IMPORTED_MODULE_1__.default();
                    this.rootEl.append(mainController.createView());
                }
                break;
            case "/login":
                if (this.rootEl) {
                    const loginController = new _controllers_LoginController__WEBPACK_IMPORTED_MODULE_0__.default();
                    this.rootEl.append(loginController.createView());
                }
                break;
            default:
                if (this.rootEl) {
                    this.rootEl.innerText = "Nothing to see here.";
                }
                break;
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
    constructor() {
        this.container = document.createElement("div");
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
        this.title = this.createDomEl("h2", "Please Login Here!");
        this.username = this.createDomEl("label", "Username:");
        this.password = this.createDomEl("label", "Password:");
        this.error = this.createDomEl("label");
        this.loginButton = this.createDomEl("button", "Login!", () => __awaiter(this, void 0, void 0, function* () {
            if (this.usernameInput.value && this.passwordInput.value) {
                this.resetErrorMessage();
                const token = yield this.loginService.login(this.usernameInput.value, this.passwordInput.value);
                if (token) {
                    console.log("got token!", token);
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
        this.container.append(this.title, this.username, this.usernameInput, this.password, this.passwordInput, this.breakEl, this.loginButton, this.error);
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
        this.title = this.createDomEl("h2", "Welcome to the best website ever!");
        this.button = this.createDomEl("button", "To Login", () => {
            console.log("window.location.pathname!", (window.location.pathname = "/login"));
        });
        this.article = this.createDomEl("article", "I know, crazy statement but true!");
    }
    createView() {
        this.container.append(this.title, this.article, this.button);
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
                return {
                    tokenId: "asdas",
                    username: "user",
                    isValid: true,
                    expirationTime: new Date(),
                    privileges: [0, 2],
                };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9NYWluLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50Ly4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9Mb2dpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvLi9zcmMvY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvLi9zcmMvc2VydmljZXMvTG9naW5TZXJ2aWNlLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hbmFnZXItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hbmFnZXItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFOUIsTUFBTSxJQUFJO0lBR1I7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDRDQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sU0FBUztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBRUQsaUVBQWUsSUFBSSxFQUFD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LElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQUVELGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCOUIsTUFBTSxZQUFZO0lBQ0gsS0FBSyxDQUNoQixRQUFnQixFQUNoQixRQUFnQjs7WUFFaEIsSUFBSSxRQUFRLEtBQUssTUFBTSxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7Z0JBQzdDLE9BQU87b0JBQ0wsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxNQUFNO29CQUNoQixPQUFPLEVBQUUsSUFBSTtvQkFDYixjQUFjLEVBQUUsSUFBSSxJQUFJLEVBQUU7b0JBQzFCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ25CLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLFNBQVMsQ0FBQzthQUNsQjtZQUNELGtEQUFrRDtZQUNsRCxvQ0FBb0M7WUFDcEMsTUFBTTtRQUNSLENBQUM7S0FBQTtDQUNGO0FBRUQsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDeEI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcblxuY2xhc3MgTWFpbiB7XG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBhbiBpbnN0YW5jZSBvZiBUUyFcIik7XG5cbiAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBsYXVuY2hBcHAoKSB7XG4gICAgdGhpcy5yb3V0ZXIuaGFuZGxlUmVxdWVzdCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cbm5ldyBNYWluKCkubGF1bmNoQXBwKCk7XG4iLCJpbXBvcnQgTG9naW5Db250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlclwiO1xuaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyXCI7XG5cbmNsYXNzIFJvdXRlciB7XG4gIHByaXZhdGUgcm9vdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIHB1YmxpYyBoYW5kbGVSZXF1ZXN0KCkge1xuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5nZXRSb3V0ZSgpO1xuXG4gICAgc3dpdGNoIChyb3V0ZSkge1xuICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgaWYgKHRoaXMucm9vdEVsKSB7XG4gICAgICAgICAgY29uc3QgbWFpbkNvbnRyb2xsZXI6IE1haW5Db250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKCk7XG4gICAgICAgICAgdGhpcy5yb290RWwuYXBwZW5kKG1haW5Db250cm9sbGVyLmNyZWF0ZVZpZXcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiL2xvZ2luXCI6XG4gICAgICAgIGlmICh0aGlzLnJvb3RFbCkge1xuICAgICAgICAgIGNvbnN0IGxvZ2luQ29udHJvbGxlcjogTG9naW5Db250cm9sbGVyID0gbmV3IExvZ2luQ29udHJvbGxlcigpO1xuICAgICAgICAgIHRoaXMucm9vdEVsLmFwcGVuZChsb2dpbkNvbnRyb2xsZXIuY3JlYXRlVmlldygpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICh0aGlzLnJvb3RFbCkge1xuICAgICAgICAgIHRoaXMucm9vdEVsLmlubmVyVGV4dCA9IFwiTm90aGluZyB0byBzZWUgaGVyZS5cIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKFwiL2NsaWVudFwiLCBcIlwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCIvLyBBYnN0cmFjdCBjbGFzc2VzIGFyZSB1c2VkIHRvIHByb3ZpZGUgYSBjb21tb24gZGVzaWduIGFjcm9zcyBjbGFzc2VzXG5cbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uL3R5cGVzL2NvbnRyb2xsZXItdHlwZXNcIjtcblxuYWJzdHJhY3QgY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xuICBwcm90ZWN0ZWQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBwdWJsaWMgYWJzdHJhY3QgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudDtcblxuICBwcm90ZWN0ZWQgY3JlYXRlRG9tRWwoXG4gICAgZWw6IHN0cmluZyxcbiAgICB0ZXh0Pzogc3RyaW5nIHwgbnVsbCxcbiAgICBhY3Rpb24/OiBhbnlcbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIGVsZW1lbnQub25jbGljayA9IGFjdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlSW5wdXRFbChvcHRpb25zOiBJbnB1dCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgY29uc3Qga2V5czogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcblxuICAgIGtleXMubWFwKGZ1bmN0aW9uIChwcm9wZXJ0eTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICBpbnB1dFtwcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbnB1dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29udHJvbGxlcjtcbiIsImltcG9ydCBMb2dpblNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL0xvZ2luU2VydmljZVwiO1xuaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG5cbmNsYXNzIExvZ2luQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBsb2dpblNlcnZpY2UgPSBuZXcgTG9naW5TZXJ2aWNlKCk7XG4gIHByaXZhdGUgdGl0bGUgPSB0aGlzLmNyZWF0ZURvbUVsKFwiaDJcIiwgXCJQbGVhc2UgTG9naW4gSGVyZSFcIik7XG4gIHByaXZhdGUgdXNlcm5hbWUgPSB0aGlzLmNyZWF0ZURvbUVsKFwibGFiZWxcIiwgXCJVc2VybmFtZTpcIik7XG4gIHByaXZhdGUgcGFzc3dvcmQgPSB0aGlzLmNyZWF0ZURvbUVsKFwibGFiZWxcIiwgXCJQYXNzd29yZDpcIik7XG4gIHByaXZhdGUgZXJyb3IgPSB0aGlzLmNyZWF0ZURvbUVsKFwibGFiZWxcIik7XG4gIHByaXZhdGUgbG9naW5CdXR0b24gPSB0aGlzLmNyZWF0ZURvbUVsKFwiYnV0dG9uXCIsIFwiTG9naW4hXCIsIGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy51c2VybmFtZUlucHV0LnZhbHVlICYmIHRoaXMucGFzc3dvcmRJbnB1dC52YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldEVycm9yTWVzc2FnZSgpO1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmxvZ2luU2VydmljZS5sb2dpbihcbiAgICAgICAgdGhpcy51c2VybmFtZUlucHV0LnZhbHVlLFxuICAgICAgICB0aGlzLnBhc3N3b3JkSW5wdXQudmFsdWVcbiAgICAgICk7XG5cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdvdCB0b2tlbiFcIiwgdG9rZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKFwiSW5jb3JyZWN0IGxvZ2luIGNyZWRlbnRpYWxzLlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKFwiUGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkcy5cIik7XG4gICAgfVxuICB9KTtcbiAgcHJpdmF0ZSB1c2VybmFtZUlucHV0ID0gdGhpcy5jcmVhdGVJbnB1dEVsKHtcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJVc2VybmFtZVwiLFxuICB9KTtcblxuICBwcml2YXRlIHBhc3N3b3JkSW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0RWwoe1xuICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiLFxuICB9KTtcbiAgcHJpdmF0ZSBicmVha0VsID0gdGhpcy5jcmVhdGVEb21FbChcImJyXCIsIG51bGwpO1xuXG4gIHB1YmxpYyBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoXG4gICAgICB0aGlzLnRpdGxlLFxuICAgICAgdGhpcy51c2VybmFtZSxcbiAgICAgIHRoaXMudXNlcm5hbWVJbnB1dCxcbiAgICAgIHRoaXMucGFzc3dvcmQsXG4gICAgICB0aGlzLnBhc3N3b3JkSW5wdXQsXG4gICAgICB0aGlzLmJyZWFrRWwsXG4gICAgICB0aGlzLmxvZ2luQnV0dG9uLFxuICAgICAgdGhpcy5lcnJvclxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RXJyb3JNZXNzYWdlKCk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIH1cbiAgcHJpdmF0ZSBzaG93RXJyb3JNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3IuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgICB0aGlzLmVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB0aGlzLmVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcblxuY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgdGl0bGUgPSB0aGlzLmNyZWF0ZURvbUVsKFwiaDJcIiwgXCJXZWxjb21lIHRvIHRoZSBiZXN0IHdlYnNpdGUgZXZlciFcIik7XG4gIHByaXZhdGUgYnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbChcImJ1dHRvblwiLCBcIlRvIExvZ2luXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwid2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIVwiLFxuICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL2xvZ2luXCIpXG4gICAgKTtcbiAgfSk7XG4gIHByaXZhdGUgYXJ0aWNsZSA9IHRoaXMuY3JlYXRlRG9tRWwoXG4gICAgXCJhcnRpY2xlXCIsXG4gICAgXCJJIGtub3csIGNyYXp5IHN0YXRlbWVudCBidXQgdHJ1ZSFcIlxuICApO1xuXG4gIHB1YmxpYyBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy50aXRsZSwgdGhpcy5hcnRpY2xlLCB0aGlzLmJ1dHRvbik7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgeyBQcml2aWxlZ2UsIFNlc3Npb25Ub2tlbiB9IGZyb20gXCIuLi9tb2RlbHMvTW9kZWxcIjtcblxuY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgcHVibGljIGFzeW5jIGxvZ2luKFxuICAgIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xuICApOiBQcm9taXNlPFNlc3Npb25Ub2tlbiB8IHVuZGVmaW5lZD4ge1xuICAgIGlmICh1c2VybmFtZSA9PT0gXCJ1c2VyXCIgJiYgcGFzc3dvcmQgPT09IFwiMTIzXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRva2VuSWQ6IFwiYXNkYXNcIixcbiAgICAgICAgdXNlcm5hbWU6IFwidXNlclwiLFxuICAgICAgICBpc1ZhbGlkOiB0cnVlLFxuICAgICAgICBleHBpcmF0aW9uVGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgcHJpdmlsZWdlczogWzAsIDJdLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goKTtcbiAgICAvLyB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblNlcnZpY2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9NYWluLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==