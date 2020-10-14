import * as Nedb from "nedb";
import { join } from "path";
import { SessionToken } from "./Model";

class TokenDbAccess {
  private database: Nedb;

  constructor() {
    this.database = new Nedb(join(__dirname, "../database/SessionToken.db"));
    this.database.loadDatabase();
  }

  public async storeTokenInDB(token: SessionToken): Promise<void> {
    return new Promise((resolve, reject) => {
      this.database.insert(token, (error: Error | null) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  public async checkTokenInDB(
    tokenId: string
  ): Promise<SessionToken | undefined> {
    return new Promise((resolve, reject) => {
      this.database.findOne(
        { tokenId },
        (error: Error | null, document: SessionToken) => {
          if (error) {
            reject(error);
          } else {
            resolve(document);
          }
        }
      );
    });
  }
}

export default TokenDbAccess;
