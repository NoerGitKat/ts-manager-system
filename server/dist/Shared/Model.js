"use strict";
exports.__esModule = true;
exports.HTTP_METHODS = exports.HTTP_CODES = exports.Privilege = void 0;
var Privilege;
(function (Privilege) {
    Privilege[Privilege["CREATE"] = 0] = "CREATE";
    Privilege[Privilege["READ"] = 1] = "READ";
    Privilege[Privilege["UPDATE"] = 2] = "UPDATE";
    Privilege[Privilege["DELETE"] = 3] = "DELETE";
})(Privilege || (Privilege = {}));
exports.Privilege = Privilege;
var HTTP_CODES;
(function (HTTP_CODES) {
    HTTP_CODES[HTTP_CODES["OK"] = 200] = "OK";
    HTTP_CODES[HTTP_CODES["CREATED"] = 201] = "CREATED";
    HTTP_CODES[HTTP_CODES["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTP_CODES[HTTP_CODES["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTP_CODES[HTTP_CODES["NOT_FOUND"] = 404] = "NOT_FOUND";
})(HTTP_CODES || (HTTP_CODES = {}));
exports.HTTP_CODES = HTTP_CODES;
var HTTP_METHODS;
(function (HTTP_METHODS) {
    HTTP_METHODS["GET"] = "GET";
    HTTP_METHODS["POST"] = "POST";
    HTTP_METHODS["PUT"] = "PUT";
    HTTP_METHODS["DELETE"] = "DELETE";
})(HTTP_METHODS || (HTTP_METHODS = {}));
exports.HTTP_METHODS = HTTP_METHODS;
