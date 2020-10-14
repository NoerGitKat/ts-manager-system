import CredsDbAccess from "../Authorization/CredsDbAccess";

class DbTest {
  public dbAccess: CredsDbAccess = new CredsDbAccess();

  public constructor() {
    this.dbAccess = new CredsDbAccess();
  }
}

new DbTest().dbAccess.storeUserInDB({
  username: "coolboi",
  password: "abc",
  privileges: [0, 1, 2, 3],
});

// console.log("checked", await db.dbAccess.checkUserInDB("coolboi", "123"));
