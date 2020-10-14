"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var http_1 = require("http");
var Authorizer_1 = require("./../Authorization/Authorizer");
var LoginHandler_1 = require("./LoginHandler");
var UsersHandler_1 = require("./UsersHandler");
var Utils_1 = require("./Utils");
var Server = /** @class */ (function () {
    function Server() {
        this.authorizer = new Authorizer_1["default"]();
    }
    Server.prototype.startServer = function (PORT) {
        var _this = this;
        http_1.createServer(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var route, _a, loginHandler, usersHandler;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        route = Utils_1["default"].getUrlRoute(req.url);
                        _a = route;
                        switch (_a) {
                            case "/login": return [3 /*break*/, 1];
                            case "/users": return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        loginHandler = new LoginHandler_1["default"](req, res, this.authorizer);
                        return [4 /*yield*/, loginHandler.handleRequest()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        usersHandler = new UsersHandler_1["default"](req, res, this.authorizer);
                        return [4 /*yield*/, usersHandler.handleRequest()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        console.log("other route asds");
                        return [3 /*break*/, 6];
                    case 6:
                        res.end();
                        return [2 /*return*/];
                }
            });
        }); }).listen(PORT);
    };
    return Server;
}());
exports["default"] = Server;
