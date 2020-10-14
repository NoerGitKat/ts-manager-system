"use strict";
exports.__esModule = true;
exports.TokenState = exports.JOB = void 0;
var JOB;
(function (JOB) {
    JOB[JOB["JUNIOR"] = 0] = "JUNIOR";
    JOB[JOB["MEDIOR"] = 1] = "MEDIOR";
    JOB[JOB["SENIOR"] = 2] = "SENIOR";
    JOB[JOB["EXPERT"] = 3] = "EXPERT";
})(JOB || (JOB = {}));
exports.JOB = JOB;
var TokenState;
(function (TokenState) {
    TokenState[TokenState["VALID"] = 0] = "VALID";
    TokenState[TokenState["INVALID"] = 1] = "INVALID";
    TokenState[TokenState["EXPIRED"] = 2] = "EXPIRED";
})(TokenState || (TokenState = {}));
exports.TokenState = TokenState;
