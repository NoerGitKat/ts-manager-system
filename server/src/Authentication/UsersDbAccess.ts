import * as Nedb from "nedb";
import { join } from "path";
import { Url, UrlWithParsedQuery } from "url";
import { User } from "./Model";

class UsersDbAccess {
  private database: Nedb;

  constructor() {
    this.database = new Nedb(join(__dirname, "../database/Users.db"));
    this.database.loadDatabase();
  }

  public async storeUserInDB(user: User): Promise<void> {
    if (!user.id) {
      user.id = this.generateRandomUserId();
    }
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

  public async getOneUserInDB(userId: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.database.findOne(
        { id: userId },
        (error: Error | null, document: User) => {
          if (error) {
            reject(error);
          } else {
            resolve(document);
          }
        }
      );
    });
  }

  private generateRandomUserId(): string {
    return Math.random().toString(36).slice(2);
  }
}

export default UsersDbAccess;
