"use strict";
exports.__esModule = true;
var url_1 = require("url");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // Static properties/methods can only be accessed without instantiating the class
    Utils.getUrlRoute = function (url) {
        if (url) {
            var parsedUrl = url_1.parse(url);
            return parsedUrl.pathname;
        }
        return "";
    };
    return Utils;
}());
exports["default"] = Utils;
