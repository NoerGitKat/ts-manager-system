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
        console.log("route", route);
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
    createDomEl(el, text) {
        const element = document.createElement(el);
        if (text) {
            element.innerText = text;
        }
        return element;
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
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controllers/BaseController.ts");

class LoginController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.default {
    createView() {
        const title = this.createDomEl("h2", "Please Login Here!");
        const username = this.createDomEl("label", "Username:");
        const password = this.createDomEl("label", "Password:");
        const loginButton = this.createDomEl("button", "Login!");
        const breakEl = this.createDomEl("br", null);
        const usernameInput = this.createInputEl({
            type: "text",
            placeholder: "Username",
        });
        const passwordInput = this.createInputEl({
            type: "password",
            placeholder: "Password",
        });
        this.container.append(title, username, usernameInput, password, passwordInput, breakEl, loginButton);
        return this.container;
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
    createView() {
        const title = this.createDomEl("h2", "Welcome to the best website ever!");
        const button = this.createDomEl("button", "To Login");
        const article = this.createDomEl("article", "I know, crazy statement but true!");
        this.container.append(title, article, button);
        return this.container;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainController);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9NYWluLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50Ly4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9Mb2dpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvLi9zcmMvY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUU5QixNQUFNLElBQUk7SUFHUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksNENBQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFFRCxpRUFBZSxJQUFJLEVBQUM7QUFFcEIsSUFBSSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5cbmNsYXNzIE1haW4ge1xuICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgYW4gaW5zdGFuY2Ugb2YgVFMhXCIpO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4gIH1cblxuICBwdWJsaWMgbGF1bmNoQXBwKCkge1xuICAgIHRoaXMucm91dGVyLmhhbmRsZVJlcXVlc3QoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5uZXcgTWFpbigpLmxhdW5jaEFwcCgpO1xuIiwiaW1wb3J0IExvZ2luQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9Mb2dpbkNvbnRyb2xsZXJcIjtcbmltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9NYWluQ29udHJvbGxlclwiO1xuXG5jbGFzcyBSb3V0ZXIge1xuICBwcml2YXRlIHJvb3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuICBwdWJsaWMgaGFuZGxlUmVxdWVzdCgpIHtcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuZ2V0Um91dGUoKTtcblxuICAgIGNvbnNvbGUubG9nKFwicm91dGVcIiwgcm91dGUpO1xuICAgIHN3aXRjaCAocm91dGUpIHtcbiAgICAgIGNhc2UgXCIvXCI6XG4gICAgICAgIGlmICh0aGlzLnJvb3RFbCkge1xuICAgICAgICAgIGNvbnN0IG1haW5Db250cm9sbGVyOiBNYWluQ29udHJvbGxlciA9IG5ldyBNYWluQ29udHJvbGxlcigpO1xuICAgICAgICAgIHRoaXMucm9vdEVsLmFwcGVuZChtYWluQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIi9sb2dpblwiOlxuICAgICAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgICAgICBjb25zdCBsb2dpbkNvbnRyb2xsZXI6IExvZ2luQ29udHJvbGxlciA9IG5ldyBMb2dpbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgICB0aGlzLnJvb3RFbC5hcHBlbmQobG9naW5Db250cm9sbGVyLmNyZWF0ZVZpZXcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgICAgICB0aGlzLnJvb3RFbC5pbm5lclRleHQgPSBcIk5vdGhpbmcgdG8gc2VlIGhlcmUuXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZShcIi9jbGllbnRcIiwgXCJcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIiwiLy8gQWJzdHJhY3QgY2xhc3NlcyBhcmUgdXNlZCB0byBwcm92aWRlIGEgY29tbW9uIGRlc2lnbiBhY3Jvc3MgY2xhc3Nlc1xuXG5hYnN0cmFjdCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gIHByb3RlY3RlZCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBjcmVhdGVEb21FbChlbDogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfCBudWxsKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29udHJvbGxlcjtcbiIsImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xuXG5pbnRlcmZhY2UgSW5wdXQge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmNsYXNzIExvZ2luQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgcHVibGljIGNyZWF0ZVZpZXcoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVEb21FbChcImgyXCIsIFwiUGxlYXNlIExvZ2luIEhlcmUhXCIpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5jcmVhdGVEb21FbChcImxhYmVsXCIsIFwiVXNlcm5hbWU6XCIpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5jcmVhdGVEb21FbChcImxhYmVsXCIsIFwiUGFzc3dvcmQ6XCIpO1xuICAgIGNvbnN0IGxvZ2luQnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbChcImJ1dHRvblwiLCBcIkxvZ2luIVwiKTtcbiAgICBjb25zdCBicmVha0VsID0gdGhpcy5jcmVhdGVEb21FbChcImJyXCIsIG51bGwpO1xuXG4gICAgY29uc3QgdXNlcm5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlSW5wdXRFbCh7XG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlVzZXJuYW1lXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXNzd29yZElucHV0ID0gdGhpcy5jcmVhdGVJbnB1dEVsKHtcbiAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoXG4gICAgICB0aXRsZSxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgdXNlcm5hbWVJbnB1dCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgcGFzc3dvcmRJbnB1dCxcbiAgICAgIGJyZWFrRWwsXG4gICAgICBsb2dpbkJ1dHRvblxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUlucHV0RWwob3B0aW9uczogSW5wdXQpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG5cbiAgICBrZXlzLm1hcChmdW5jdGlvbiAocHJvcGVydHk6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgaW5wdXRbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Db250cm9sbGVyO1xuIiwiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG5cbmNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZURvbUVsKFwiaDJcIiwgXCJXZWxjb21lIHRvIHRoZSBiZXN0IHdlYnNpdGUgZXZlciFcIik7XG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbChcImJ1dHRvblwiLCBcIlRvIExvZ2luXCIpO1xuICAgIGNvbnN0IGFydGljbGUgPSB0aGlzLmNyZWF0ZURvbUVsKFxuICAgICAgXCJhcnRpY2xlXCIsXG4gICAgICBcIkkga25vdywgY3Jhenkgc3RhdGVtZW50IGJ1dCB0cnVlIVwiXG4gICAgKTtcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgYXJ0aWNsZSwgYnV0dG9uKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udHJvbGxlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL01haW4udHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9