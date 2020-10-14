import * as Nedb from "nedb";
import { join } from "path";
import { User } from "./Model";

class UsersDbAccess {
  private database: Nedb;

  constructor() {
    this.database = new Nedb(join(__dirname, "../database/Users.db"));
    this.database.loadDatabase();
  }

  public async storeUserInDB(user: User): Promise<void> {
    return new Promise((resolve, reject) => {
      this.database.insert(user, (error: Error | null) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  public async getOneUserInDB(id: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.database.findOne({ id }, (error: Error | null, document: User) => {
        if (error) {
          reject(error);
        } else {
          resolve(document);
        }
      });
    });
  }
}

export default UsersDbAccess;
