"use strict";
exports.__esModule = true;
var http_1 = require("http");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.createServer = function (port) {
        http_1.createServer(function (req, res) {
            console.log("Got a request from the following url", req.url);
            res.end();
        }).listen(port);
    };
    return Server;
}());
exports["default"] = Server;
