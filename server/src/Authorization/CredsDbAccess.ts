import Nedb = require("nedb");
import { UserCreds } from "../Shared/Model";
import { join } from "path";

class CredsDbAccess {
  private database: Nedb;

  constructor() {
    this.database = new Nedb(join(__dirname, "../database/Credentials.db"));
    this.database.loadDatabase();
  }

  public async storeUserInDB(credentials: UserCreds): Promise<any> {
    return new Promise((resolve, reject) => {
      this.database.insert(credentials, (err: Error | null, docs: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  public async checkUserInDB(
    username: string,
    password: string
  ): Promise<UserCreds | undefined> {
    return new Promise((resolve, reject) => {
      console.log("username", username);
      this.database.find(
        { username: username, password: password },
        (err: Error, docs: UserCreds[]) => {
          if (err) {
            reject(err);
          } else {
            console.log("docs", docs);
            if (docs.length == 0) {
              resolve(undefined);
            } else {
              resolve(docs[0]);
            }
          }
        }
      );
    });
  }
}

export default CredsDbAccess;
