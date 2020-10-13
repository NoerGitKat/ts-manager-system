import { LoginInformation } from "../Server/Model";
import { TokenGenerator, SessionToken } from "./Model";
import UserDbAccess from "./UserDbAccess";

class Authorizer implements TokenGenerator {
  private userDbAccess: UserDbAccess = new UserDbAccess();

  public async generateToken(
    credentials: LoginInformation
  ): Promise<SessionToken | undefined> {
    // 1. Verify credentials in DB
    const validUser = await this.userDbAccess.checkUserInDB(
      credentials.username,
      credentials.password
    );

    // 2. If valid, create random string as token
    if (validUser) {
      // 3. Return token
      return {
        tokenId: "asjkd123",
      };
    } else {
      return undefined;
    }
  }
}

export default Authorizer;
