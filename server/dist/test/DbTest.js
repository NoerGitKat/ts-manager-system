"use strict";
exports.__esModule = true;
var UserDbAccess_1 = require("../Authorization/UserDbAccess");
var DbTest = /** @class */ (function () {
    function DbTest() {
        this.dbAccess = new UserDbAccess_1["default"]();
        this.dbAccess = new UserDbAccess_1["default"]();
    }
    return DbTest;
}());
new DbTest().dbAccess.storeUserInDB({
    username: "ok man",
    password: "123",
    privileges: [0, 1, 2, 3]
});
// console.log("checked", await db.dbAccess.checkUserInDB("coolboi", "123"));
