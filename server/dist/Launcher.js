"use strict";
exports.__esModule = true;
var Server_1 = require("./Server/Server");
var PORT = process.env.PORT || 8080;
var Launcher = /** @class */ (function () {
    function Launcher() {
        this.server = new Server_1["default"]();
    }
    Launcher.prototype.launchApp = function () {
        this.server.startServer(PORT);
        console.log("The server is running on port " + PORT + "!");
    };
    return Launcher;
}());
new Launcher().launchApp();
