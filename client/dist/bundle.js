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
        const button = this.createDomEl("button", "To Login", () => {
            console.log("window.location.pathname!", (window.location.pathname = "/login"));
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9NYWluLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50Ly4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9Mb2dpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvLi9zcmMvY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUU5QixNQUFNLElBQUk7SUFHUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksNENBQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFFRCxpRUFBZSxJQUFJLEVBQUM7QUFFcEIsSUFBSSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7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QztJQUN4QixDQUFDO0NBQ0Y7QUFFRCxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7VUN0QjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuXG5jbGFzcyBNYWluIHtcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIGFuIGluc3RhbmNlIG9mIFRTIVwiKTtcblxuICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcigpO1xuICB9XG5cbiAgcHVibGljIGxhdW5jaEFwcCgpIHtcbiAgICB0aGlzLnJvdXRlci5oYW5kbGVSZXF1ZXN0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxubmV3IE1haW4oKS5sYXVuY2hBcHAoKTtcbiIsImltcG9ydCBMb2dpbkNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvTG9naW5Db250cm9sbGVyXCI7XG5pbXBvcnQgTWFpbkNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXJcIjtcblxuY2xhc3MgUm91dGVyIHtcbiAgcHJpdmF0ZSByb290RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgcHVibGljIGhhbmRsZVJlcXVlc3QoKSB7XG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLmdldFJvdXRlKCk7XG5cbiAgICBzd2l0Y2ggKHJvdXRlKSB7XG4gICAgICBjYXNlIFwiL1wiOlxuICAgICAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgICAgICBjb25zdCBtYWluQ29udHJvbGxlcjogTWFpbkNvbnRyb2xsZXIgPSBuZXcgTWFpbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgICB0aGlzLnJvb3RFbC5hcHBlbmQobWFpbkNvbnRyb2xsZXIuY3JlYXRlVmlldygpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIvbG9naW5cIjpcbiAgICAgICAgaWYgKHRoaXMucm9vdEVsKSB7XG4gICAgICAgICAgY29uc3QgbG9naW5Db250cm9sbGVyOiBMb2dpbkNvbnRyb2xsZXIgPSBuZXcgTG9naW5Db250cm9sbGVyKCk7XG4gICAgICAgICAgdGhpcy5yb290RWwuYXBwZW5kKGxvZ2luQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMucm9vdEVsKSB7XG4gICAgICAgICAgdGhpcy5yb290RWwuaW5uZXJUZXh0ID0gXCJOb3RoaW5nIHRvIHNlZSBoZXJlLlwiO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoXCIvY2xpZW50XCIsIFwiXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsIi8vIEFic3RyYWN0IGNsYXNzZXMgYXJlIHVzZWQgdG8gcHJvdmlkZSBhIGNvbW1vbiBkZXNpZ24gYWNyb3NzIGNsYXNzZXNcblxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi4vdHlwZXMvY29udHJvbGxlci10eXBlc1wiO1xuXG5hYnN0cmFjdCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gIHByb3RlY3RlZCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBjcmVhdGVEb21FbChcbiAgICBlbDogc3RyaW5nLFxuICAgIHRleHQ/OiBzdHJpbmcgfCBudWxsLFxuICAgIGFjdGlvbj86IGFueVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgZWxlbWVudC5vbmNsaWNrID0gYWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVJbnB1dEVsKG9wdGlvbnM6IElucHV0KTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBjb25zdCBrZXlzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAga2V5cy5tYXAoZnVuY3Rpb24gKHByb3BlcnR5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGlucHV0W3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb250cm9sbGVyO1xuIiwiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG5cblxuXG5jbGFzcyBMb2dpbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHB1YmxpYyBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlRG9tRWwoXCJoMlwiLCBcIlBsZWFzZSBMb2dpbiBIZXJlIVwiKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMuY3JlYXRlRG9tRWwoXCJsYWJlbFwiLCBcIlVzZXJuYW1lOlwiKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuY3JlYXRlRG9tRWwoXCJsYWJlbFwiLCBcIlBhc3N3b3JkOlwiKTtcbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IHRoaXMuY3JlYXRlRG9tRWwoXCJidXR0b25cIiwgXCJMb2dpbiFcIik7XG4gICAgY29uc3QgYnJlYWtFbCA9IHRoaXMuY3JlYXRlRG9tRWwoXCJiclwiLCBudWxsKTtcblxuICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0RWwoe1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJVc2VybmFtZVwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IHRoaXMuY3JlYXRlSW5wdXRFbCh7XG4gICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiLFxuICAgIH0pO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKFxuICAgICAgdGl0bGUsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIHVzZXJuYW1lSW5wdXQsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHBhc3N3b3JkSW5wdXQsXG4gICAgICBicmVha0VsLFxuICAgICAgbG9naW5CdXR0b25cbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Db250cm9sbGVyO1xuIiwiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG5cbmNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZURvbUVsKFwiaDJcIiwgXCJXZWxjb21lIHRvIHRoZSBiZXN0IHdlYnNpdGUgZXZlciFcIik7XG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbChcImJ1dHRvblwiLCBcIlRvIExvZ2luXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIndpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSFcIixcbiAgICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL2xvZ2luXCIpXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnN0IGFydGljbGUgPSB0aGlzLmNyZWF0ZURvbUVsKFxuICAgICAgXCJhcnRpY2xlXCIsXG4gICAgICBcIkkga25vdywgY3Jhenkgc3RhdGVtZW50IGJ1dCB0cnVlIVwiXG4gICAgKTtcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgYXJ0aWNsZSwgYnV0dG9uKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udHJvbGxlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL01haW4udHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9