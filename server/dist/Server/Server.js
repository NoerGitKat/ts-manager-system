"use strict";
exports.__esModule = true;
var http_1 = require("http");
var Utils_1 = require("./Utils");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.createServer = function (PORT) {
        http_1.createServer(function (req, res) {
            var route = Utils_1["default"].getUrlRoute(req.url);
            switch (route) {
                case "/login":
                    console.log("go to login route");
                    break;
                default:
                    console.log("other route asds");
            }
            res.end();
        }).listen(PORT);
    };
    return Server;
}());
exports["default"] = Server;
