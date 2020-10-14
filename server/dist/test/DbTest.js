"use strict";
exports.__esModule = true;
var Model_1 = require("../Authentication/Model");
var UsersDbAccess_1 = require("../Authentication/UsersDbAccess");
var DbTest = /** @class */ (function () {
    function DbTest() {
        this.dbAccess = new UsersDbAccess_1["default"]();
        this.dbAccess = new UsersDbAccess_1["default"]();
    }
    return DbTest;
}());
new DbTest().dbAccess.storeUserInDB({
    name: "coolboi",
    age: 23,
    email: "coolboi@yeah.com",
    id: "asjdkn123",
    job: Model_1.JOB.JUNIOR
});
// console.log("checked", await db.dbAccess.checkUserInDB("coolboi", "123"));
