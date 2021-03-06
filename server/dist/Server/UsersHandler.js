"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var UsersDbAccess_1 = require("../Authentication/UsersDbAccess");
var Model_1 = require("../Shared/Model");
var BaseRequestHandler_1 = require("./BaseRequestHandler");
var Utils_1 = require("./Utils");
var UsersHandler = /** @class */ (function (_super) {
    __extends(UsersHandler, _super);
    function UsersHandler(req, res, tokenValidator) {
        var _this = _super.call(this, req, res) || this;
        _this.userDbAccess = new UsersDbAccess_1["default"]();
        _this.tokenValidator = tokenValidator;
        return _this;
    }
    UsersHandler.prototype.handleRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.req.method;
                        switch (_a) {
                            case Model_1.HTTP_METHODS.GET: return [3 /*break*/, 1];
                            case Model_1.HTTP_METHODS.POST: return [3 /*break*/, 3];
                            case Model_1.HTTP_METHODS.DELETE: return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this.fetchUsers()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 3: return [4 /*yield*/, this.createUser()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 5: return [4 /*yield*/, this.deleteUser()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        this.handleNotFound("Method not found!");
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    UsersHandler.prototype.fetchUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAuthorized, parsedUrl, userId, userName, user, users, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authorizeRequest(Model_1.Privilege.READ)];
                    case 1:
                        isAuthorized = _a.sent();
                        if (!isAuthorized) return [3 /*break*/, 10];
                        parsedUrl = Utils_1["default"].getQueryParams(this.req.url);
                        if (!parsedUrl) return [3 /*break*/, 9];
                        userId = parsedUrl.query.id;
                        userName = parsedUrl.query.name;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 8, , 9]);
                        if (!userId) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.userDbAccess.getOneUserInDB(userId)];
                    case 3:
                        user = _a.sent();
                        if (user) {
                            this.respondWithJSON(Model_1.HTTP_CODES.OK, user);
                        }
                        else {
                            this.handleNotFound("No user found!");
                        }
                        return [3 /*break*/, 7];
                    case 4:
                        if (!userName) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.fetchUsersByName(userName)];
                    case 5:
                        users = _a.sent();
                        if (users && users.length > 0) {
                            this.respondWithJSON(Model_1.HTTP_CODES.OK, users);
                        }
                        else {
                            this.handleNotFound("No user found!");
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        this.handleBadRequest("");
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _a.sent();
                        this.handleServerError(error_1.message);
                        return [3 /*break*/, 9];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        this.handleUnAuthorizedRequest("You are not authorized to do this.");
                        _a.label = 11;
                    case 11: return [2 /*return*/, undefined];
                }
            });
        });
    };
    UsersHandler.prototype.fetchUsersByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var users, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userDbAccess.getUsersByName(name)];
                    case 1:
                        users = _a.sent();
                        if (users.length > 0) {
                            return [2 /*return*/, users];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.handleBadRequest(error_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersHandler.prototype.createUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAuthorized, newUser, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.authorizeRequest(Model_1.Privilege.CREATE)];
                    case 1:
                        isAuthorized = _a.sent();
                        if (!isAuthorized) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getRequestBody()];
                    case 2:
                        newUser = _a.sent();
                        // 3. Create new user in DB
                        return [4 /*yield*/, this.userDbAccess.storeUserInDB(newUser)];
                    case 3:
                        // 3. Create new user in DB
                        _a.sent();
                        // // 4. Respond with new user
                        this.respondWithJSON(Model_1.HTTP_CODES.CREATED, newUser);
                        return [3 /*break*/, 5];
                    case 4:
                        this.handleUnAuthorizedRequest("You are not authorized to do this.");
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_3 = _a.sent();
                        this.handleServerError(error_3.message);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    UsersHandler.prototype.deleteUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAuthorized, parsedUrl, userId, isDeleted, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.authorizeRequest(Model_1.Privilege.DELETE)];
                    case 1:
                        isAuthorized = _a.sent();
                        if (!isAuthorized) return [3 /*break*/, 4];
                        parsedUrl = Utils_1["default"].getQueryParams(this.req.url);
                        if (!parsedUrl) return [3 /*break*/, 3];
                        userId = parsedUrl.query.id;
                        return [4 /*yield*/, this.userDbAccess.deleteUserFromDB(userId)];
                    case 2:
                        isDeleted = _a.sent();
                        if (isDeleted) {
                            this.respondWithJSON(Model_1.HTTP_CODES.OK, {
                                msg: "User successfully deleted!"
                            });
                        }
                        else {
                            this.handleNotFound("User not found.");
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        this.handleUnAuthorizedRequest("You are not authorized to do this.");
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_4 = _a.sent();
                        this.handleServerError(error_4.message);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    UsersHandler.prototype.authorizeRequest = function (operation) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, tokenPrivileges, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        tokenId = this.req.headers.authorization;
                        if (!tokenId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.tokenValidator.validateToken(tokenId)];
                    case 1:
                        tokenPrivileges = _a.sent();
                        // 3. Check if the current operation is within the privilege of the user
                        if (tokenPrivileges.privileges.includes(operation)) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, false];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_5 = _a.sent();
                        this.handleServerError(error_5.message);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return UsersHandler;
}(BaseRequestHandler_1["default"]));
exports["default"] = UsersHandler;
