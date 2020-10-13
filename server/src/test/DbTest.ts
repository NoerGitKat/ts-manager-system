import UserDbAccess from "../Authorization/UserDbAccess";

class DbTest {
  public dbAccess: UserDbAccess = new UserDbAccess();

  public constructor() {
    this.dbAccess = new UserDbAccess();
  }
}

new DbTest().dbAccess.storeUserInDB({
  username: "ok man",
  password: "123",
  privileges: [0, 1, 2, 3],
});

// console.log("checked", await db.dbAccess.checkUserInDB("coolboi", "123"));
