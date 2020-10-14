"use strict";
exports.__esModule = true;
var CredsDbAccess_1 = require("../Authorization/CredsDbAccess");
var DbTest = /** @class */ (function () {
    function DbTest() {
        this.dbAccess = new CredsDbAccess_1["default"]();
        this.dbAccess = new CredsDbAccess_1["default"]();
    }
    return DbTest;
}());
new DbTest().dbAccess.storeUserInDB({
    username: "coolboi",
    password: "abc",
    privileges: [0, 1, 2, 3]
});
// console.log("checked", await db.dbAccess.checkUserInDB("coolboi", "123"));
