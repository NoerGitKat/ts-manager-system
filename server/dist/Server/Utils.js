"use strict";
exports.__esModule = true;
var url_1 = require("url");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // Static properties/methods can only be accessed without instantiating the class
    Utils.getUrlRoute = function (url) {
        if (url) {
            var parsedUrl = this.getQueryParams(url);
            if (parsedUrl) {
                return parsedUrl.pathname;
            }
        }
        return "";
    };
    Utils.getQueryParams = function (url) {
        if (url) {
            return url_1.parse(url, true);
        }
        else {
            return undefined;
        }
    };
    return Utils;
}());
exports["default"] = Utils;
