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
        const loginButton = this.createDomEl("button", "Login!", () => {
            if (usernameInput.value && passwordInput.value) {
                error.style.visibility = "hidden";
            }
            else {
                error.innerText = "Please fill in all fields.";
                error.style.color = "red";
                error.style.visibility = "visible";
            }
        });
        const breakEl = this.createDomEl("br", null);
        const usernameInput = this.createInputEl({
            type: "text",
            placeholder: "Username",
        });
        const passwordInput = this.createInputEl({
            type: "password",
            placeholder: "Password",
        });
        // Validation feedback
        const error = this.createDomEl("label");
        this.container.append(title, username, usernameInput, password, passwordInput, breakEl, loginButton, error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9NYWluLnRzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50Ly4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC8uL3NyYy9jb250cm9sbGVycy9Mb2dpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvLi9zcmMvY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hbmFnZXItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFuYWdlci1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYW5hZ2VyLWNsaWVudC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUU5QixNQUFNLElBQUk7SUFHUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksNENBQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFFRCxpRUFBZSxJQUFJLEVBQUM7QUFFcEIsSUFBSSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7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MUUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRTtZQUN6RCxPQUFPLENBQUMsR0FBRyxDQUNULDJCQUEyQixFQUMzQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUN0QyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUM5QixTQUFTLEVBQ1QsbUNBQW1DLENBQ3BDLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTlDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFFRCxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7VUN0QjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuXG5jbGFzcyBNYWluIHtcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIGFuIGluc3RhbmNlIG9mIFRTIVwiKTtcblxuICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcigpO1xuICB9XG5cbiAgcHVibGljIGxhdW5jaEFwcCgpIHtcbiAgICB0aGlzLnJvdXRlci5oYW5kbGVSZXF1ZXN0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxubmV3IE1haW4oKS5sYXVuY2hBcHAoKTtcbiIsImltcG9ydCBMb2dpbkNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvTG9naW5Db250cm9sbGVyXCI7XG5pbXBvcnQgTWFpbkNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXJcIjtcblxuY2xhc3MgUm91dGVyIHtcbiAgcHJpdmF0ZSByb290RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgcHVibGljIGhhbmRsZVJlcXVlc3QoKSB7XG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLmdldFJvdXRlKCk7XG5cbiAgICBzd2l0Y2ggKHJvdXRlKSB7XG4gICAgICBjYXNlIFwiL1wiOlxuICAgICAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgICAgICBjb25zdCBtYWluQ29udHJvbGxlcjogTWFpbkNvbnRyb2xsZXIgPSBuZXcgTWFpbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgICB0aGlzLnJvb3RFbC5hcHBlbmQobWFpbkNvbnRyb2xsZXIuY3JlYXRlVmlldygpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIvbG9naW5cIjpcbiAgICAgICAgaWYgKHRoaXMucm9vdEVsKSB7XG4gICAgICAgICAgY29uc3QgbG9naW5Db250cm9sbGVyOiBMb2dpbkNvbnRyb2xsZXIgPSBuZXcgTG9naW5Db250cm9sbGVyKCk7XG4gICAgICAgICAgdGhpcy5yb290RWwuYXBwZW5kKGxvZ2luQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMucm9vdEVsKSB7XG4gICAgICAgICAgdGhpcy5yb290RWwuaW5uZXJUZXh0ID0gXCJOb3RoaW5nIHRvIHNlZSBoZXJlLlwiO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoXCIvY2xpZW50XCIsIFwiXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsIi8vIEFic3RyYWN0IGNsYXNzZXMgYXJlIHVzZWQgdG8gcHJvdmlkZSBhIGNvbW1vbiBkZXNpZ24gYWNyb3NzIGNsYXNzZXNcblxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi4vdHlwZXMvY29udHJvbGxlci10eXBlc1wiO1xuXG5hYnN0cmFjdCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gIHByb3RlY3RlZCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBjcmVhdGVEb21FbChcbiAgICBlbDogc3RyaW5nLFxuICAgIHRleHQ/OiBzdHJpbmcgfCBudWxsLFxuICAgIGFjdGlvbj86IGFueVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgZWxlbWVudC5vbmNsaWNrID0gYWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVJbnB1dEVsKG9wdGlvbnM6IElucHV0KTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBjb25zdCBrZXlzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAga2V5cy5tYXAoZnVuY3Rpb24gKHByb3BlcnR5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGlucHV0W3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb250cm9sbGVyO1xuIiwiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG5cbmNsYXNzIExvZ2luQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgcHVibGljIGNyZWF0ZVZpZXcoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVEb21FbChcImgyXCIsIFwiUGxlYXNlIExvZ2luIEhlcmUhXCIpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5jcmVhdGVEb21FbChcImxhYmVsXCIsIFwiVXNlcm5hbWU6XCIpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5jcmVhdGVEb21FbChcImxhYmVsXCIsIFwiUGFzc3dvcmQ6XCIpO1xuICAgIGNvbnN0IGxvZ2luQnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbChcImJ1dHRvblwiLCBcIkxvZ2luIVwiLCAoKSA9PiB7XG4gICAgICBpZiAodXNlcm5hbWVJbnB1dC52YWx1ZSAmJiBwYXNzd29yZElucHV0LnZhbHVlKSB7XG4gICAgICAgIGVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IuaW5uZXJUZXh0ID0gXCJQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzLlwiO1xuICAgICAgICBlcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBicmVha0VsID0gdGhpcy5jcmVhdGVEb21FbChcImJyXCIsIG51bGwpO1xuXG4gICAgY29uc3QgdXNlcm5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlSW5wdXRFbCh7XG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlVzZXJuYW1lXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXNzd29yZElucHV0ID0gdGhpcy5jcmVhdGVJbnB1dEVsKHtcbiAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsXG4gICAgfSk7XG5cbiAgICAvLyBWYWxpZGF0aW9uIGZlZWRiYWNrXG4gICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZURvbUVsKFwibGFiZWxcIik7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoXG4gICAgICB0aXRsZSxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgdXNlcm5hbWVJbnB1dCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgcGFzc3dvcmRJbnB1dCxcbiAgICAgIGJyZWFrRWwsXG4gICAgICBsb2dpbkJ1dHRvbixcbiAgICAgIGVycm9yXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcblxuY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHB1YmxpYyBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlRG9tRWwoXCJoMlwiLCBcIldlbGNvbWUgdG8gdGhlIGJlc3Qgd2Vic2l0ZSBldmVyIVwiKTtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmNyZWF0ZURvbUVsKFwiYnV0dG9uXCIsIFwiVG8gTG9naW5cIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwid2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIVwiLFxuICAgICAgICAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gXCIvbG9naW5cIilcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc3QgYXJ0aWNsZSA9IHRoaXMuY3JlYXRlRG9tRWwoXG4gICAgICBcImFydGljbGVcIixcbiAgICAgIFwiSSBrbm93LCBjcmF6eSBzdGF0ZW1lbnQgYnV0IHRydWUhXCJcbiAgICApO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRpdGxlLCBhcnRpY2xlLCBidXR0b24pO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250cm9sbGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvTWFpbi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=