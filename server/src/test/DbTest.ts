import { JOB } from "../Authentication/Model";
import UsersDbAccess from "../Authentication/UsersDbAccess";

class DbTest {
  public dbAccess: UsersDbAccess = new UsersDbAccess();

  public constructor() {
    this.dbAccess = new UsersDbAccess();
  }
}

new DbTest().dbAccess.storeUserInDB({
  name: "coolboi",
  age: 23,
  email: "coolboi@yeah.com",
  id: "asjdkn123",
  job: JOB.JUNIOR,
});

// console.log("checked", await db.dbAccess.checkUserInDB("coolboi", "123"));
